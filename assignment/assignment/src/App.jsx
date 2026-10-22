import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=5"
      );
      // Add animation effect: append new cards
      setData([...data, ...response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = () => {
    // Add fade‑out effect by clearing after short delay
    setData([]);
  };

  return (
    <div
      style={{
        border: "3px solid black",
        width: "700px",
        height: "700px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        overflowY: "auto"
      }}
    >
      {loading && (
        <div style={{ width: "100%", textAlign: "center", margin: "20px" }}>
          <h3>Loading...</h3>
        </div>
      )}

      {/* Cards */}
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid #ddd",
            margin: "10px",
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, opacity 0.3s",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h4 style={{ color: "#333", fontSize: "16px", marginBottom: "10px" }}>
            {item.title}
          </h4>
          <p style={{ fontSize: "14px", color: "#555", flexGrow: 1 }}>
            {item.body}
          </p>
          <button
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer"
            }}
          >
            View
          </button>
        </div>
      ))}

      {/* Buttons */}
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            width: "200px",
            height: "50px",
            marginRight: "20px",
            backgroundColor: "yellowgreen",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s"
          }}
          onClick={fetchData}
        >
          Add Cards
        </button>
        <button
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s"
          }}
          onClick={deleteData}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default App;
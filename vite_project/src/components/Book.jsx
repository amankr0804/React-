import React from 'react'


const Book = () => {
  return (
    <div style={{border: '1px solid black',  width : '400px', height : '400px', background : 'yellow' }}>
        <h1 style={{textAlign : 'center'}}>Book Shop</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg" alt="Books" style={{ width: '100px', height: '100px', display : 'block', margin : 'auto'}} /><br/>
        <p> Book Name: The Great Gatsby</p><br/>
        <p> Author: F. Scott Fitzgerald</p><br/>
        <p> Price: $10.99</p><br/>
    </div>
  )
}

export default Book
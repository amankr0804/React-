import React, { useEffect, useState} from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
   useEffect(() => {
    console.log("formData updated:", formData)
   }, [formData])
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    alert("registration successful");
    console.log(formData);
   }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type= "text" name="name" placeholder='Enter your name' value = {formData.name} onChange={handleChange} />
        <br />
        <input type= "text" name="email" placeholder='Enter your email' value = {formData.email} onChange={handleChange} />
        <br />
        <input type= "text" name="password" placeholder='Enter your password' value = {formData.password} onChange={handleChange} />
        <br/>
        <button type="submit">Registration</button>

      </form>
    </div>
  )
}

export default App
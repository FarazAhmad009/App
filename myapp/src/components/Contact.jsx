import React,{useState} from 'react'
import { toast } from 'react-toastify';

function Contact() {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  password:""
})


const {name,email,password}=formData;

const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const onSubmit=(e)=>{
  e.preventDefault();
  console.log(formData)
  toast.success("User Added Successfully!")

}




  return (
    <>
    <form onSubmit={onSubmit}>
    <label>Name:</label>
    <input type="text" name="name" value={name} onChange={onChange} />
    <label>Email:</label>
    <input type="email" name="email" value={email} onChange={onChange} required />
    <label>Password:</label>
    <input type="password" name="password" value={password} onChange={onChange} required/>
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Contact
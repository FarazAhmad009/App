import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { toast } from 'react-toastify'
function Cards() {
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true)

const fetchData=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    setData(response.data)
    setLoader(false);

}
useEffect(()=>{
    fetchData();
},[])
const notify=()=>{
    toast.success("Product Added to Cart")
}
  return (
    <>
    {loader ? <Loader/> : null}
    <div className="d-flex mt-4 flex-wrap gap-3 justify-content-center">
 {data.map((item)=>{
    return(
<div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..." height={"200px"} width={"200px"}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description.slice(0,20)}</p>
    <Link to={`/products/${item.id}`} onClick={notify} class="btn btn-primary">{item.price}</Link>
  </div>
</div>
    )
})}
</div>
 </>
  )
}

export default Cards
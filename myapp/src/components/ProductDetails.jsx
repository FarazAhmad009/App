import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'
import {toast} from "react-toastify"
function ProductDetails() {
const [product,setProduct]=useState()
const [loader,setLoader]=useState(true)

const {id}=useParams();
const fetchData=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data)
    setLoader(false);
    toast.success("Data Fetched Successfully!")

}
useEffect(()=>{
    fetchData();
},[])

console.log(product)

  return (
    <>
     {loader ? <Loader/> : null}
    <div className="row">
        <div className="col-lg-6">
            <img src={product?.image} width={"300px"} height={"300px"}/>
        </div>
        <div className="col-lg-6">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <button className='btn btn-primary'>{product?.price}</button>
        </div>
    </div>
    </>
  )
}

export default ProductDetails
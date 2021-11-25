import {ADDTOCART, USERNAME,REMOVEFROMCART,FILTERDATA} from "./type";
import Axios from 'axios'


export const setUserName=(data)=>{
  return {
      type:USERNAME,
      payload:data
  }
}

export const addToCart=(data)=>{
  return {
      type:ADDTOCART,
      payload:data
  }
}

export const removeFromCartAction =(data)=>{
  return {
      type:REMOVEFROMCART,
      payload:data
  }
}

export const filterData =(data)=>{
  return {
      type:FILTERDATA,
      payload:data
  }
}



export const searchProduct = (data , state = "") => {
  let url = `https://61894d32d0821900178d78f5.mockapi.io/products?${data}`
  Axios.get(url).then(res => state(res.data))
}
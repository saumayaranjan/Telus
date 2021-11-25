import React, { Fragment, useState,useEffect } from 'react'
import { url } from "../../Url/urls";
import { getData } from "../../Request/Get";
import { useDispatch, useSelector } from "react-redux";
import { Pie } from 'react-chartjs-2';

 const Charts = () => {
     const [product , setProduct] = useState([])


    useEffect(() => {
        fetchProductsList()
    }, [])


    const fetchProductsList=async()=>{
        let response = await getData(url.prodcuts);
        if(response.status < 300){
            setProduct(response.data)
        }
    }

    return (
        <Fragment>
            <Pie data={product}/>
        </Fragment>
    )
}

export default Charts

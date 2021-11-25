import React ,{useState,useEffect, Fragment} from "react";
import { url } from "../../Url/urls";
import { getData } from "../../Request/Get";
import "./Products.css"
import Pagination from '../Paginations/Pagination'

import { Row ,Col,Button, Container,Image,Card  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart ,removeFromCartAction} from "../../redux/action";

const ProductPage = () => {
const [productList,setProductList]= useState([]);
const [currentPage , setCurrentPage ] = useState(1)
const [postPerPage ,setPostPerPage ] = useState(8)
let details = useSelector((state)=> state);

let dispatch = useDispatch();
    useEffect(()=>{
        fetchProductsList()
    },[])


    const addToCartFn=(e)=>{
        let products = [...productList];
        let newProducts = products.map((pr)=>{
            if(pr.id === e.id){
                return  {
                    ...pr,
                    addToCart:true
                }
            }else{
                return pr
            }

        })    
        dispatch(addToCart(e));
        setProductList(newProducts)
    }

    const changeFav=(product,flag)=>{
        let products = [...productList];
        let newProducts = products.map((pr)=>{
            if(pr.id === product.id){
                return  {
                    ...pr,
                    isFav:flag
                }
            }else{
                return pr
            }
    
        })    
      
       setProductList(newProducts)
    }


    const generateRatingStars=(rating)=>{
        if(rating > 0  && rating < 0.9){
            return <> <i className="fa fa-star-half"/>             </>
        }
        else if(rating > 0.9  && rating <= 1){
            return <> <i className="fa fa-star"/>             </>
        }

        else if(rating >1  && rating < 1.9){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star-half"/>             </>
        }
        else if(rating >=1.9  && rating <= 2){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>             </>
        }
        else if(rating >2  && rating < 2.9){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star-half"/>       </>
        }
        else if(rating >=2.9  && rating <=3){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star"/>       </>
        }
        else if(rating >3  && rating <3.9){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star"/>  <i className="fa fa-star-half"/>        </>
        }
        else if(rating >=3.9  && rating <=4){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star"/>  <i className="fa fa-star"/>        </>
        }
        else if(rating >4  && rating <=4.9){
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star"/>  <i className="fa fa-star"/>  <i className="fa fa-star-half"/>        </>
        }
        else{
            return <> <i className="fa fa-star"/>  <i className="fa fa-star"/>         <i className="fa fa-star"/>  <i className="fa fa-star"/>  <i className="fa fa-star"/>        </>
        }
        
       
    }
    const removeFromCart =(e)=>{
        let products = [...productList];
        let newProducts = products.map((pr)=>{
            if(pr.id === e.id){
                return  {
                    ...pr,
                    addToCart:false
                }
            }else{
                return pr
            }
    
        })    
        dispatch(removeFromCartAction(e));
       setProductList(newProducts)
    }


    const fetchProductsList=async()=>{
   let response = await getData(url.prodcuts);
   if(response.status < 300){
    setProductList(response.data.map((e)=>{
        return {
            ...e,
            addToCart:false
        }
    }))
   }
    }

    let indexOfLastPost = currentPage * postPerPage
    let indexOfFirstPost = indexOfLastPost - postPerPage
    let currentPost = productList.slice(indexOfFirstPost ,indexOfLastPost)


    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const buy = () => {
        alert("Item bought")
    }

    return(
        <Fragment>
            <Container fluid>
                    <Row>
                        {currentPost.map((e,index) => {
                            let { avatar = "" , price = "" , name = "" } = e || {}
                            return (
                                <Col lg={3} style={{height : "100%"}}>
                                    <Card style={{ width: '18rem' }} className="productCard">
                                        <Card.Img  className="img" variant="top" src={avatar} style={{height : "50%"}} />
                                        <Card.Body>
                                            <Card.Text>{name}</Card.Text>
                                            <Card.Text>price : ₹{price}</Card.Text>
                                            <Col>
                                                <Button className="float-start" onClick={buy} style={{width:"30%",background:"#ebb434",border:"none"}}>Buy</Button>
                                                {e.addToCart ?  
                                                <Button className="float-end" variant="danger"  style={{width:"50%"}} onClick={()=>removeFromCart(e)}>Remove </Button>:  
                                                <Button className="float-end"  variant="primary"  style={{width:"30%",background:"#34eb68",border:"none"}} onClick={()=>addToCartFn(e)}>Add </Button>
                                                }
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    
                    <Pagination postsPerPage={postPerPage} totalPosts={productList.length} paginate={paginate}/>

            </Container>
        </Fragment>
    )
    // return ( <>
    // <Row className="m-0">
    //     {currentPost.map((e,i)=>
    //         (e.description.indexOf(details.search) > -1 ? 
    //             <div className="col-sm-6 col-md-4 col-lg-2 product-container" key={e.id} >
    //                 <img src={e.avatar} width="50%"/>
    //                 {e.isFav? <i  onClick={()=>changeFav(e,false)}className="fa fa-heart " style={{color:"red"}}></i>: <i  onClick={()=>changeFav(e,true)}className="fa fa-heart-o "></i>}

    //                 <div className="details position-absolute">
    //                     <div className="category-details">
    //                         {e.category}
    //                     </div>
    //                     <div>
    //                         <a className="name-details" title={e.name} target="_blank">{e.name}</a>
    //                     </div>

    //                     <div>
    //                         {generateRatingStars(e.rating)}
    //                         <span className="rating">{e.rating}</span>
    //                     </div>
    //                     <Row className="mt-1">
    //                         <Col><small className="float-start">${e.price}</small></Col>
    //                         <Col>{e.addToCart?  <Button className="float-end" variant="danger"  size="sm" onClick={()=>removeFromCart(e)}>Remove </Button>:  <Button className="float-end"  variant="primary"  size="sm" onClick={()=>addToCartFn(e)}>Add </Button>}</Col>
    //                     </Row>     
    //                  </div>   
    //             </div>:null
    //         ))  
    //     }
    // </Row>
    //     <Pagination postsPerPage={postPerPage} totalPosts={productList.length} paginate={paginate}/>
    // </>
    //  );
}
 
export default ProductPage;
import { Row, Col ,Carousel} from "react-bootstrap";
import Header from "../Header/Header";
import ProductPage from "../Products/Products";
import "./DashBoard.css"


const DashBoard = () => {
  return (<>
    <Row className="m-0  w-100 position-fixed " style={{zIndex:"1000"}}>
      <Header  />
    </Row>

    <div className="main-container-product  position-relative" style={{top:"3em"}}>
    <div className="ecart-crousel" >
      <Carousel variant="">
        <Carousel.Item>
          <img className="ecart-crousel-img"
          
          src="https://rukminim1.flixcart.com/flap/1688/280/image/a0f90bf38b918bcd.jpg?q=50"
          
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            
            className="ecart-crousel-img"
            src="https://rukminim1.flixcart.com/flap/844/140/image/5c94387f1dfbecbf.jpg?q=50"
            alt="Second slide"
           
          />
   
        </Carousel.Item>
        <Carousel.Item>
          <img
           src="https://rukminim1.flixcart.com/flap/1688/280/image/296e1504bce3ee6a.jpg?q=50"
           className="ecart-crousel-img"
          />

        </Carousel.Item>
      </Carousel>
    </div>


    <div className="mt-2">
      <ProductPage/>
    </div>

    </div> 
  </>
  );
}

export default DashBoard;
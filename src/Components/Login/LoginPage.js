import "./LoginPage.css";
import { Input ,Button} from "react-bootstrap";
import { useState } from "react";
import { getData } from "../../Request/Get";
import { url } from "../../Url/urls";
import { useHistory } from "react-router";
import { setUserName } from "../../redux/action";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    
    let [details,setDetails]= useState({
        name:"nilesh",
        password:"123"
    })
    let history= useHistory();
    const dispatch = useDispatch()

    const getUserInfo =async()=>{
   let  response = await getData(url.login);

   if(response.status < 300){
       let counter = false
       for(let i=0;i<response.data.length;i++){
           if(response.data[i].name=== details.name && response.data[i].password=== details.password){
               counter = true;
               break
            
           }
       }

       if(counter){
        dispatch( setUserName(details.name));
         history.push("DashBaord")
       }
   }
    }
    return (  
        <div style={{backgroundColor:"#000000db",height:'100vh'}}>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <div className="form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input  className="form-control"  value={details.name} type="text" placeholder="Email or Phone" id="username" onChange={(e)=>setDetails(details=>
        {
            return {
                ...details,
                name:e.target.value
            }
        }
           
            )}/>

        <label for="password">Password</label>
        <input className="form-control" type="password"   value={details.password}placeholder="Password" id="password" onChange={(e)=>setDetails(details=>
        {
            return {
                ...details,
                password:e.target.value
            }
        }
           
            )}/>
        <div>
        <Button  className="col-sm-5" variant="primary" onClick={()=>getUserInfo()}>Login </Button>
        <Button  className="col-sm-5 float-end"  variant="secondary">Sign Up</Button>
        </div>
        
       
    </div>
</div>
    );
}
 
export default LoginPage;
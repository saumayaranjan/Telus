

import {initialState} from "./state";
import { USERNAME,ADDTOCART ,REMOVEFROMCART,FILTERDATA} from "./type";

function removeFromCartFun(cardData,param){
console.log(cardData)
  let data = [...cardData];

  let filterData = data.filter((e)=>{
    if(e.id !== param.id){
      return e
    }
  })
  return  filterData
  
}

export const reducer=(state=initialState,action)=>{
  switch(action.type){

    case USERNAME:{
      return {
        ...state,
        username:action.payload
      }
    }

    case ADDTOCART:{
      let products = [...state.cartProducts,action.payload];
      return {
        ...state,
        cartProducts:products
      }

    }
    case REMOVEFROMCART:{
      return {
        ...state,
        cartProducts: removeFromCartFun(state.cartProducts,action.payload)
      }
     

    }
    case FILTERDATA:{
      return {
        ...state,
        search: action.payload
      }
     

    }
      default:{
   return state
      }
  }
}



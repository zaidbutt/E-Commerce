
import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';

 function Product() {

const [bid,setbid]=React.useState();
const [comment,setcomment]=React.useState();

var {id} = useParams()
const url=`http://127.0.0.1:8000/Listing/${id}/`;

const [product,setproduct] =useState(null);
let content=null;

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setproduct(response.data)
  })
}, [url])

if(product){
  content=
  <div className="relative pb-10 min-h-screen">
  <div class="card" style={{height:300,width:500,margin:30, marginBottom:600,marginLeft:300}}>
<img src={product.image} class="card-img-top" style={{height:300}} />
  <div class="card-body">
  <h5 class="card-title">TITLE: {product.title}</h5>
  <p class="card-text">DESCRIPTION: {product.description}</p>
  <h6>PRICE: ${product.start_price}</h6>
  <h6 style={{marginBottom:30}}>COMMENTS</h6>

  <div className="form-group">
  <div className="row">
               <input type="number" className="form-control" style={{width:250,marginLeft:15,marginRight:100}} placeholder="PLACE BID" 
               value={bid} onChange={e=>{
                        setbid(e.target.value)
                    }}
                    />
                    <button  type="button" class="btn btn-primary">BID NOW!</button>
                    </div>   </div>

            <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="ADD A COMMENT" style={{marginBottom:10}}
             value={comment} onChange={e=>{
                        setcomment(e.target.value)
                    }}
                    ></textarea>
                     <button  type="button" class="btn btn-primary" style={{float:'right'}}>SEND</button>
            </div>
  </div>
  </div>
  </div>
  
  
}

  return (
    <div className="App"  style={{backgroundColor:"#D3D3D3",paddingTop:50}}>
       <div className="container"  >
     {content}
     </div>
     <FOOTER />
  </div>
  )
}
export default Product;

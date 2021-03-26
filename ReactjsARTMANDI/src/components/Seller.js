import React,{useState} from 'react'
import FOOTER from './footer';

import userServices from "../Services/UserServices";
function Seller() {

    const [title,settitle]=React.useState();
    const [description,setdescription]=React.useState();
   const[image,setimage]=React.useState();
   const [category,setcategory]=useState("T");
  const[startPrice,setstartPrice]=React.useState();

    return (
        <div className="App" style={{backgroundColor:"#D3D3D3"}}>
        <div className="AddProductForm"
        style={{display:"flex",
        justifyContent: "center",
        alignItems: "center",
     
        }}>
        <form>
            <h3>ADD PRODUCTS</h3>

            <div className="form-group">
               <input type="text" className="form-control" placeholder="PRODUCT TITLE" value={title} onChange={e=>{
                        settitle(e.target.value)
                    }}/>
            </div>

            <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="PRODUCT DESCRIPTION" id="ProductDescription" value={description} onChange={e=>{
                        setdescription(e.target.value)
                    }}></textarea>
            </div>

        
            <div className="form-group">
            <input type="number" name="Productbid" className="form-control" placeholder="STARTING PRICE" value={startPrice} onChange={e=>{
                        setstartPrice(e.target.value)
                    }} />
            </div>

            
               <select className="custom-select" value={category} onChange={(e) =>{
                  const selectedCategory=e.target.value;
                  setcategory(selectedCategory)
               }}>
                   
                  <option value="E">EDUCATION</option>
                  <option value="H">HOME</option>
                  <option value="T">TOY</option>  
            
               </select>
               {category}



         
            <input type="url" id="productimg" className="form-control" placeholder="ENTER IMAGE URL" name="img" style={{border:0}} value={image} onChange={e=>{
                        setimage(e.target.value)
                    }}/> <br/> <br/>

            <button type="submit" className="btn btn-primary btn-block" onClick={e=>{
                    var start_price= parseInt(startPrice)
                    userServices.addProduct(title,description,image,category,start_price).then((data)=>{
                        console.log(data)
                        alert({title,description,startPrice,category});
                        window.location.href="/"
                    }).catch(err=>{
                        console.log(err)
                    alert("adding failed")
                    })
                   
                }}>ADD PRODUCT</button>
           
             
        </form>
       
        </div>
        <br/>
        
        <FOOTER/>

        </div>
    )
}
export default Seller;
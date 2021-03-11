import React from 'react'
import FOOTER from './footer';
function Seller() {
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
               <input type="text" className="form-control" placeholder="PRODUCT NAME" />
            </div>

            <div className="form-group">
                <input type="number" name="ProductPrice" className="form-control" placeholder="PRODUCT PRICE" />
               </div>

            <div className="form-group">
            <input type="number" name="Productbid" className="form-control" placeholder="PRODUCT BID" />
            </div>

            <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="PRODUCT DESCRIPTION" id="ProductDescription"></textarea>
            </div>
           
            <input type="file" id="productimg" name="img" style={{border:0}}/> <br/> <br/>

            <button type="submit" className="btn btn-primary btn-block">ADD PRODUCT</button>
           
             
        </form>
       
        </div>
        <br/>
        
        <FOOTER/>

        </div>
    )
}
export default Seller;
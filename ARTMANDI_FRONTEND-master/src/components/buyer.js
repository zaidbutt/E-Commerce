import React from 'react'
import { Form,FormControl,Button,Card} from 'react-bootstrap';
import FOOTER from './footer';


 class buyer extends React.Component {


  constructor(){
    super();
  
    this.state = {
      products:null }
  }

componentDidMount(){
fetch('http://127.0.0.1:8000/Listing/?format=json').then((resp)=> {
  resp.json().then((result) => {
    // console.warn (result.data)
    this.setState({products:result})
  })
})

     }  
      
  render() {
    return (
        <div className="App"  style={{backgroundColor:"#D3D3D3", paddingTop:50}}>
   <div className="container"  >
              <div className='row' >
             <h1 style={{textAlign:'center',marginLeft:320, marginRight:80, color:'	#696969'}}>PRODUCTS</h1>
       <Form inline >
      <FormControl type="text" placeholder="Search Products" className="mr-sm-2"  />
      <Button variant="outline-info">Search </Button>
    </Form>
       </div>
      


<div className="row"style={{margin:30}}>
{
this.state.products ?
this.state.products.map((item)=>
 <div className="col-sm-4">
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>2de4n
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>{item.description}</Card.Text>
    <Card.Text>STARTING PRICE : $ {item.start_price}</Card.Text>

    <Button variant="primary" type="submit" className="btn btn-primary btn-block" onClick={e=>{window.location.href="/product"}}>BUY NOW</Button>
  </Card.Body>
</Card>
 </div>
)
:
<h1>api data no found</h1>

}
</div>


     
     <div className="row"style={{margin:30}}>
     
     
     <div class="col-sm"><div class="card" >
   <img src="http://www.hamailartgalleries.com/uploads/art/thumb_86091a78199546865f8951100aa273ca.JPG" class="card-img-top" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Buy Now</a>
   </div>
   </div></div>



   <div class="col-sm"><div class="card" >
   <img src="http://www.hamailartgalleries.com/uploads/art/thumb_86091a78199546865f8951100aa273ca.JPG" class="card-img-top" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Buy Now</a>
   </div>
   </div></div>
 
   
   
     </div>
     <br/><br/><br/><br/><br/><br/>
     

     </div>
     <FOOTER/>
     </div>
    );
    }
}
export default buyer;
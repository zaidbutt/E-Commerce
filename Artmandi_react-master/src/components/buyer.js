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
fetch('http://127.0.0.1:8000/Listing/').then((resp)=> {
  resp.json().then((result) => {
    // console.warn (result.data)
    this.setState({products:result})
  })
})

     }  
      
  render() {
    console.log(this.state.products)
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
 <Card style={{ width: '18rem', margin:20 }}>
  <Card.Img variant="top" src={item.image} style={{height:200}} />
  <Card.Body>2de4n
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>{item.description}</Card.Text>
    <Card.Text>STARTING PRICE : $ {item.start_price}</Card.Text>

    <Button variant="primary" type="submit" className="btn btn-primary btn-block"
    
    onClick={e=>{window.location.href="/product"}}>BUY NOW</Button>
  </Card.Body>
</Card>
 </div>
)
:
<h1>api data no found</h1>

}
</div>


 
     <br/><br/><br/><br/><br/><br/>
     

     </div>
     <FOOTER/>
     </div>
    );
    }
}
export default buyer;
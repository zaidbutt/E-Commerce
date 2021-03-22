import { render } from '@testing-library/react';
import React from 'react'
import { Form,FormControl,Button,Card} from 'react-bootstrap';


 class product extends React.Component {
     
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


render()
{    return (
        <div>
            products
            
{
this.state.products ?


this.state.products.map((item)=>

 <div className="col-sm-4">
     <img src={item.image} />
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>{item.description}</Card.Text>
    <Card.Text>STARTING PRICE : $ {item.start_price}</Card.Text>
  </Card.Body>
</Card>
 </div>
)
:
<h1>api data no found</h1>

}
        </div>
    );
}}
export default product;
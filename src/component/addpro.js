
 import 'bootstrap/dist/css/bootstrap.min.css'
 import { Button,Form } from 'react-bootstrap';
import { product } from '../product';
import React from 'react'

export default class FormHandling extends React.Component {
  constructor() {
    super();
    this.state={pid:'',pname:'',pprice:'',pquan}
    
  }
  handleData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  SubmitHandle = (event) => {
    event.preventDefault();
    let pro = new product(
      this.state.pid,
      this.state.pname,
      this.state.pprice,
      this.state.pquantity,
      this.state.pimg
    );
    alert("product added" + pro.pname + " " + pro.pquantity);
  };

  render() {
    return (
    
      <Form onSubmit={this.SubmitHandle}>
        <Form.Group controlId="id">
          <Form.Label>Product id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter id"
            value={this.props.pid}
            name="pid"
            onChange={this.handleData}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={this.props.pname}
            name="pname"
            onChange={this.handleData}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={this.props.pprice}
            name="pprice"
            onChange={this.handleData}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Product quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={this.props.pquantity}
            name="pquantity"
            onChange={this.handleData}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Product id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image path"
            value={this.props.pimg}
            name="pimg"
            onChange={this.handleData}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}



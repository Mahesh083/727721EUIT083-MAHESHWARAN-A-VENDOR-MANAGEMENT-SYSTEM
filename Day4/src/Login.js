import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import './login.css';
class Login extends Component {
        constructor(props) {
            super(props);
            this.state = {  Username: '',
                            Password:'',
                            error:false,
                        };
            this.handleSubmit = this.handleSubmit.bind(this);
          } 
        handleSubmit(e){
            e.preventDefault(); }
  render() {
    return (
      <div className='form-div'>
      <Form className="wrapper">
      
      <br/>
      <Form.Group controlId="formGridlabel" id="heading" className="col col-sm-8 " onSubmit={this.handleSubmit}><h1 id="h1">Login</h1></Form.Group>
      <br/>
      <br/>
      <Form.Group className="col col-sm-10">
          <Form.Label htmlFor="username" className="label">
              Username
          </Form.Label> 
      <Row className="group">
          <Form.Control
              type="text"
              size="30"
              className="input"
              name="username"
              onChange={(e)=>this.setState({ Username: e.target.value})}
              required
          />
          </Row>
          </Form.Group>
      <br/>
      <br/>
          <Form.Group className="col col-sm-10">
          <Form.Label htmlFor="password" className="label">
              Password
          </Form.Label>
      <Row className="group">
          <Form.Control
              type="password"
              minLength="4"
              className="input"
              name="password"
              onChange={(e)=>this.setState({ Password: e.target.value})}
              required
          />
      </Row>
        
          </Form.Group>
      <button type="submit" id="btn" onClick={this.handleSubmit} className="btn btn-secondary">
     <center><Link to='/products'>Login </Link></center>
        
      </button>
      <Link to='/reg'><h6>Don't have an account?register here.</h6></Link>
      <br/>
      <span className="footer"></span>
  </Form>
  </div>
    )
  }
}

export default Login;
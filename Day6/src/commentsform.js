import React, { useState,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,InputGroup } from 'react-bootstrap';
import Login from './Login';
import './Form.css';
import { Link } from 'react-router-dom';

function CommentsForms() {
    const[Username,setUsername]=useState('')
    const[Email,setEmail]=useState('')
    const[Mobile,setMobile]=useState('')
    const[Error,setError]=useState(false)
    const commentRef = useRef('');
    // const handleSubmit = (event) => {
      // event.preventDefault();
      // const comment = commentRef.current;
      // // Perform necessary actions with the comment (e.g., save it, display it, etc.)
      // console.log(comment);
      // alert(comment);
      // }
      
      
      
      const handleSubmit=(e)=>{
        e.preventDefault();
        if(Username.length===0||Email.length===0){
          setError(true);
        }
        if(Mobile.length!==10){
          setError(true);
        }
        if(Username&&Email){
          console.log(Username,Email,Mobile,Error);
        }
        const comment = commentRef.current;
        // Perform necessary actions with the comment (e.g., save it, display it, etc.)
        console.log(comment);
        alert(comment);
    }
  return (
    <div class="Registration">
    <Form className="form" onSubmit={handleSubmit} >
    <div>
    <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20"><h3>Feedback</h3></Form.Group>
    <br/>
    <Row className="mb-3">
    <Form.Group controlId="formBasicEmail" className="col col-sm-10">
    <Form.Label className='input'>Username</Form.Label>
    <Form.Control placeholder='UserName' onChange={e=>setUsername(e.target.value)}/>
    {Error && Username.length<=0?
      <Form.Label className='error'>UserName can't be Empty </Form.Label>:""}
      </Form.Group>   
      </Row>
      <Row className="mb-3">
      <Form.Group controlId="formBasicEmail" className="col col-sm-10">
      <Form.Label className='input'>Email</Form.Label>
      <InputGroup>
      <Form.Control placeholder='Email' onChange={e=>setEmail(e.target.value)} /><InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
      </InputGroup>
      {Error && Email.length<=0?
        <label className='error'>Email can't be Empty </label>:""}
        </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-10">
        <Form.Label className='input'>Mobile Number</Form.Label>
        <InputGroup>
        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
        <Form.Control placeholder='Mobile Number' onChange={e=>setMobile(e.target.value)}/>
        </InputGroup>        </Form.Group>
        </Row>
        <Form.Label className='input'>Enter your Comment</Form.Label>
        <form onSubmit={handleSubmit}>
        <textarea ref={commentRef} />
        
        <center><button type="submit" id="button" className="me-1 btn btn btn-lg"><Link to="/success">Submit</Link></button></center>
         </form>

        </div>
        <Link to="/feedback"></Link>
     </Form>
 
     </div>
  )
};

export default CommentsForms;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,InputGroup } from 'react-bootstrap';
import './Form.css';
import user from './assets/user.jpg'
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

function Login() {
//   const dispatch = useDispatch();
// //    const navigate = useNavigate();
//   const [formdata, setFormdata] = useState({
//     username: '',
//     password: ''
//   })
//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//   }
//   const submitHandler = (e) => {

//     console.log(formdata.username,formdata.password)
    
//     e.preventDefault;
//     dispatch(login({
//       username :formdata.username
//     }))
    const[Username,setUsername]=useState('')
    const[Email,setEmail]=useState('')
    const[Mobile,setMobile]=useState('')
    const[Password,setPassword]=useState('')
    const[ConfirmPassword,setConfirmPassword]=useState('')
    const[Error,setError]=useState(false)


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Username.length===0||Email.length===0){
            setError(true);
        }
        if(Mobile.length!==10){
            setError(true);
        }
        if(Password!==ConfirmPassword){
            setError(true);
        }
        if(Username&&Email){
          console.log(Username,Email,Mobile,Password,Error);
        }
    }
  return (
    <div class="Registration">
    <Form className="form" onSubmit={handleSubmit} >
        <div>
        <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20"><h3>Login</h3></Form.Group>
        <br/>
        <div class="users">
				<img src={user} alt=" " width={100}></img>
		      		<span class="fa fa-user-o"></span>
		      	</div>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Label className='input'>Username</Form.Label>
            <Form.Control placeholder='UserName' onChange={e=>setUsername(e.target.value)}/>
        {Error && Username.length<=0?
        <Form.Label className='error'>UserName can't be Empty </Form.Label>:""}
            </Form.Group>   
    </Row>
        
        
        
        <Form.Label className='input'>Password</Form.Label>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-10">
            <Form.Control placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>
        </Row>
        
        
        <Link to="/products"><center><button id="button" className="me-1 btn btn btn-lg" >Submit</button></center></Link>
           </div>
           <Link to='/reg'>Don't have an account?Register here.</Link>
     </Form>
     
 
      <br/>
      <br/>
      <br/>
     </div>
  )
}
// }

export default Login;
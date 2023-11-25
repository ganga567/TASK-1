import React, { useState, useContext }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom';
import {Store} from '../App'


function Signin() {
    const {setlogin} = useContext(Store)
    const styl = { width: '20rem', margin: 'left', display: 'block' }
    const [flg,setflg] = useState(false)
    const navigate = useNavigate()
    const [data,setdata] = useState({
        email:'',password:''
    })

    const handlechange=(e)=>{
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
   
    
    const handlesubmit = async (e)=>{ 
        e.preventDefault()
        if(data.email){
            try{
                const resp = await axios.get(`http://localhost:3007/users?email=${data.email}`)
                console.log(resp.data)
                if(resp.data.length = 1){
                    alert("signin successfull")
                    setflg(true)
                }
            }
            catch(err){
                console.log(err)
                alert(err)
            }
        }
        else{
            alert("enter details")
        }
    }
    if(flg){
        navigate("/dashboard")
        setlogin(true)
        localStorage.setItem("login",true)
    }
  return (
    <div>
    <div style={{ width: '28rem', height: '23rem' }} className="position-absolute top-50 start-50 translate-middle shadow-lg container rounded  my-5 mb-2 bg-dark bg-gradient text-white">
    <h2 className='text-center'><u>ADMIN PORTAL LOGIN</u></h2>
        <div className='row'>
            <div className='col p-5'>
                <form onSubmit={(e)=>handlesubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">E-Mail:-<span className='text-danger'>*</span></label>
                    <input className="form-control"  placeholder=' Enter E-Mail' style={styl} type="email" name="email" onChange={(e)=>handlechange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:-<span className='text-danger'>*</span></label>
                    <input className="form-control" placeholder=' Enter Password' style={styl} type="password" name="password" onChange={(e)=>handlechange(e)}/>
                </div>
                <input type="submit" style={{margin:'auto',display:'block'}} className="btn btn-primary" value="Submit" />
                </form>
                <br/>
                <center>Create Account ?<Link style={{textDecoration:'none'}} to="/signup">Create Now</Link></center>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signin;
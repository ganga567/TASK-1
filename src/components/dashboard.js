import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Store} from '../App'

function Dash() {
    // const [data,setdata] = useState(null)
    // const [flg,setflg] = useState(false)
    // const {setlogin} = useContext(Store)
    // const {setDashname} = useContext(Store)

    // const navigate = useNavigate()
    // useEffect(()=>{
    //     axios.get(`http://localhost:3007/users`).then((result)=>{
    //         setdata(result.data[0])
    //         setDashname(result.data[0].name)
    //     }).catch((err)=>console.log(err))
    // },[])
    // const lg = (e)=>{
    //     alert("logout successful ⚠️")
    //     localStorage.removeItem("token")
    //     setlogin(false)
    //     localStorage.removeItem("login")
    //     localStorage.removeItem("name")
    //     navigate("/signin")
    // }
 
  return (
    <div style={{ width: '50rem',height:'35rem'}} className="shadow-lg  container rounded text-center my-5 mb-2 bg-dark bg-gradient text-white">
    <h1>WELCOME TO ADMIN PORTAL</h1>
    {
        true?
        <div className='row'>
            <h3>YOUR PROFILE</h3>
            <div className='row'>
            <div className='col-6 d-flex justify-content-center '>
                <div className="card bg-dark bg-gradient" style={{width:"20rem",height:'20rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"><u>Your profile</u></h5>
                        <h5 className="card-title"><span className='text-danger'><u>E-Mail</u>:- </span>"gangadhar567@gmail.com"</h5>
                        <h5 className="card-title"><span className='text-danger'><u>Name:- </u></span>"Tadiboyina BalaGangadhar"</h5>
                        <h5 className="card-title"><span className='text-danger'><u>PhoneNumber</u>:- </span>"+919052929651"</h5>
                        <h5 className="card-title"><span className='text-danger'><u>Company:- </u></span>"EkipIt Solutions"</h5>
                        

                        {/* here */}
                    </div>
                </div>
            </div>
            </div>
            <button className="btn btn-primary my-3" style={{width:'20rem',margin: 'auto', display: 'block' }} >Logout</button>
        </div>
        :<h2>⚠️Error💥 Not Getting Data</h2>
    }
    </div>
  )
}

export default Dash;
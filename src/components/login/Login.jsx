
import './login.css'
import img from "../../assets/posts/3.jpg"

export default function Login() {
  return (
    <div className='login'>

      <div className="loginContainer">

          <div className="loginLeft">
        <img className='loginImg' src={img} alt=""/>
      </div>
     
     
      <div className="loginRight">
        <div className="loginBox">
                   <input placeholder='Email' className='loginInput'></input>
                   <input placeholder='Password' type='password' className='loginInput'></input>
                   <button>Log In</button>
        </div>

      </div>


       


      </div>


     
   
      
      
       


    </div>
  )
}


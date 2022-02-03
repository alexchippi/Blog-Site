import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
          <label >Username</label>
          <input type="email" className="registerInput" placeholder="username" />
          <label >Email</label>
          <input type="email" className="registerInput" placeholder="example@gmail.com" />
          <label >Password</label>
          <input type="password" className="registerInput" placeholder="password"/>
          <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  )
}

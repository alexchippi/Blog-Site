import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
          <label >Email</label>
          <input type="email" className="loginInput" placeholder="example@gmail.com" />
          <label >Password</label>
          <input type="password" className="loginInput"/>
          <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  )
}

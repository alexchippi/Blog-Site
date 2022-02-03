import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = true;
  return (
    <div className="top"> 
      <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItem"><Link className="link" to="/">Home</Link></li>
              <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
              <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
              <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
              <li className="topListItem">
                {user && "LOGOUT"}
              </li>
          </ul>
      </div>
      <div className="topRight">
            {
              user ? (
                <img className="topImg" src="https://images.pexels.com/photos/10810753/pexels-photo-10810753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
              ) : (
                <ul className="topList">
                  <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                  </li>
                  <li>
                  <Link className="link" to="/register">REGISTER</Link>
                  </li>
                
                
                </ul>
              )
            }
            
            <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

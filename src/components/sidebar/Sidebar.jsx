import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="img" src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat necessitatibus vero quod, saepe dolorem est quia 
              </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Cinema</li>
              <li className="sidebarListItem">Health</li>
          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
      </div>
    </div>
  )
}

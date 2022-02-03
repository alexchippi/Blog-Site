import "./singlePost.css"

export default function SInglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="" className="singlePostImg" 
          />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
            <div className="singlePostEdit">
            <i className="singlePostIcon fad fa-calendar-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Suscipit nostrum dolore nam voluptas accusamus perspiciatis quas amet ratione hic. 
                Asperiores ex harum eligendi nesciunt necessitatibus provident quasi repellat maiores vel.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Suscipit nostrum dolore nam voluptas accusamus perspiciatis quas amet ratione hic. 
                Asperiores ex harum eligendi nesciunt necessitatibus provident quasi repellat maiores vel.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Suscipit nostrum dolore nam voluptas accusamus perspiciatis quas amet ratione hic. 
                Asperiores ex harum eligendi nesciunt necessitatibus provident quasi repellat maiores vel.
            </p>
      </div>
    </div>
  )
}

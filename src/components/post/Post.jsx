import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Sports</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Repellendus magnam reprehenderit saepe dignissimos iste voluptatum 
            cum nisi doloribus officiis repudiandae, optio sit culpa ex illum 
            mollitia sunt recusandae ut? Quos! Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eaque quaerat iure magnam fugit natus et quod minus rerum, 
            veniet culpa nobis, quis dolor est sequi officia. In ipsa culpa minus?
        </p>
    </div>
    </div>
  );
}

import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        className="writeImg"
        alt="" 
        />
      <form className="writeForm">
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i class="fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
              <textarea placeholder="Tell your story.." type="text" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SInglePost from "../../components/singlePost/SInglePost"

export default function Single() {
  return (
    <div className="single">
      <SInglePost/>
      <Sidebar/>
    </div>
  )
}

import { Link } from "react-router-dom"
import Template from "../Components/Template/Template"

const HomePage = () => {
  return (
    <div>
      <p>Home</p>
      <Link to='/add/header'
        className="text-green-500"  
      >Create Header</Link>
    </div>
  )
}

export default HomePage
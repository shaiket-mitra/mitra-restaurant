import { assets } from "../../assets/assets"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <img className="logo" src={assets.logo} alt="Brand Logo" />
        <img className="profile" src={assets.profile_image} alt="Profile Icon" />
    </div>
  )
}

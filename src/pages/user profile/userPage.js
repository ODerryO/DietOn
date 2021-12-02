import UserProfile from "./userProfile.js";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./userPage.css"

function UserPage() {
  return (
      <>
      <div className="userAll">
        <div className="sideNavbar">
            <SideNavbar />
        </div>
        <div  className="user">
        <UserProfile />
        </div>
      </div>
      </>
  )
}

export default UserPage;
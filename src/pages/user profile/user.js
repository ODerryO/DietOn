import React, {useState} from "react";
import Setting from "../../assets/setting.png"
import Background from "../../assets/Background.png"
import "./user.css"
import UserChange from "./userChange";
import UserProfile from "./userProfile";
function User () {


  const [setting, setSetting] = useState(true)
  const handleSetting = () => {
    setSetting(!setting)
  }
  const[save, setSave] = useState(false)
  const handleSave = () => {
    setSave(!save)
  }



  return(
    <div>
      <div className="userPage">
        <div className="backgroundUser">
          <div className="imgBanner" style=
          {{ backgroundImage: `url(${Background})`,
          width: '99%',
          height: '357px',
        }}>
            <div className="userButton">
              <div className="userImg">
                  <img
                    src="https://cdn.myanimelist.net/images/characters/12/274345.jpg"
                    alt="user profile" />
              </div>
              <div className="userSetting">
              {save ? <button onClick={handleSetting} class="btnSetting">
                  <img src={Setting}
                  alt="setting"/>Setting
                </button>
                :
                <div>
                  <button onClick={handleSave} class="btnSetting">
                    Save
                  </button>
                  <button onClick={handleSave} class="btnSetting">
                    Cancel
                  </button>
                </div>
                }
                
              </div>
            </div>
          </div>
        </div>

        {setting ? <UserProfile/> : <UserChange />}
      </div>
    </div>
  )
}

export default User
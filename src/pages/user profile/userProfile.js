import React, {useState} from "react";
import CaloriTarget from "../../assets/Calori Target user.png"
import UserWeight from "../../assets/Weight User.png"
import Progress from "../../assets/Progress.png"
import BMI from "../../assets/BMI.png"
import Setting from "../../assets/setting.png"
import Background from "../../assets/Background.png"
import "./userProfile.css"


function UserProfile () {

  const [setting, setSetting] = useState(true)
  const handleSetting = () => {
    setSetting(!setting)
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
                <button onClick={handleSetting} class="btnSetting">
                  <img src={Setting}
                  alt="setting"/>Setting
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="userData">
              <p className="userName">Derry</p>
              <p className="emailUser">ilhamderryn@gmail.com</p>
            </div>
          </div>
          <div className='userProgress'>
            <div className='progressList'>
              <img src={CaloriTarget}
              alt='imageUser' />
              <p>Calori Target</p>
              <p>1400 Kcal</p>
            </div>
            <div className='progressList'>
              <img src={UserWeight}
              alt='imageUser' />
              <p>Early Weight</p>
              <p>64 Kg</p>
            </div>
            <div className='progressList'>
              <img src={Progress}
              alt='imageUser' />
              <p>Progress</p>
              <p>-1 Kg</p>
            </div>
            <div className='progressList'>
              <img src={BMI}
              alt='imageUser' />
              <p>BMI Weight</p>
              <p>50 Kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
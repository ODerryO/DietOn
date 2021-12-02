import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import showPwdImg from '../../assets/Show.png';
import hidePwdImg from '../../assets/Hide.png';
import "./userChange.css"
import Background from "../../assets/Background.png"


function UserChange () {

  let [pwd, setPwd] = useState('Password');
  let [userName, setUserName] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  

	// Initially, no file is selected
	let [selectedFile, setselectedFile ] = useState('null')

	
	// On file select (from the pop up)
	const onFileChange = e => {
	
	// Update the state
	setselectedFile({ selectedFile: e.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	let onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		selectedFile
	);
	
	// Details of the uploaded file
	console.log(selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	

  const handleClick = () => 
  Swal.fire({
    type: 'success',  
    text: 'Yeeayy...! Diet On Successfully Save Your Profile Change',
    timer: '5000'
  })


  return(
    <div>
      <div className="userPage">
      <div className="imgBanner" style=
          {{ backgroundImage: `url(${Background})`,
          width: '99%',
          height: '357px',
        }}>
          <div className="changeImg">
            <div className="userImgChange">
              <img
                src="https://cdn.myanimelist.net/images/characters/12/274345.jpg"
                alt="user profile" />
          </div>
          <div className="changeButton">
            <button class=" btn btn-primary btn-block btnSave">
              Save
            </button>
            <button class=" btn btn-primary btn-block btnCancel">
              Cancel
            </button>
          </div>
        </div>      
      </div>
        <div>
          <form>
            <div className="form formChange">
              <div className="form-group formGroup">
                <label>Name</label>
                <input type="text" className="form-control inputChange" placeholder="Enter your name" />
              </div>
              <div className="form-group formGroup">
                <label>Password</label>
                <div className="formIcon">
                    <input
                    className="form-control inputChange"
                    type={isRevealPwd ? "text" : "password"}
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}/>
                    <img title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? showPwdImg : hidePwdImg}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserChange
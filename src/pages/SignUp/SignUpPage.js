import React from 'react';
import MasterSignUp from '../../components/signUp/MasterSignUp';
import styles from "./SignUp.module.css";


function SignUpPage() {
    return (
        <div className={styles.SignUp}>
            
            <MasterSignUp />
         
        </div>
    )
}

export default SignUpPage;

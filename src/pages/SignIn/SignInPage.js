import React from 'react';
import SignIn from '../../components/signIn/signIn';
import styles from "./SignIn.module.css";

function SignInPage() {
    return (
        <div className={styles.SignIn}>
           <SignIn />
        </div>
    )
}

export default SignInPage;

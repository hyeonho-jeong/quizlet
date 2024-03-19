import React from "react";
import styles from "./SignupSuccessPage.module.css";

const SignupSuccessPage = () => {
  return (
    <>
      <h2 className={styles.signupSuccess}>
        Congratulations! Your account has been successfully created. You can now
        proceed to the login page to access your account.
      </h2>
      <h2 className={styles.signupSuccessLink}>
        <a href="/">Login</a>
      </h2>
    </>
  );
};

export default SignupSuccessPage;

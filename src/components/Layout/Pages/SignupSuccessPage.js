import styles from "./SignupSuccessPage.module.css";

const SignupSuccessPage = () => {
  return (
    <h2 className={styles.signupSuccess}>
      You created your account successfully! Navigate to the login page{" "}
      <a href="/">here</a>
    </h2>
  );
};

export default SignupSuccessPage;

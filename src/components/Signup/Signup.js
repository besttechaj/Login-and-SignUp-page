import React, { useState } from 'react';
import styles from './Signup.module.css';
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
//importing the function from firebase for user profile creation in the firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

//import auth from the firebase file
import { auth } from '../../firebase';

const Signup = () => {
  //creating state
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  });

  //creating another state to display error message
  const [errorMsg, setErrorMsg] = useState('');

  //disabling submit button when not required
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  //to redirect user after successfully register
  const navigate = useNavigate();

  //handling submission...
  const handleSubmission = () => {
    //checking whether all fields are filled properly...
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg('please fill all field before form submission!'); //error display
      return; //code end
    } else {
      setErrorMsg(''); //passing empty string||disabling the error msg
      console.log(values);
      //while sending the request to api
      setSubmitButtonDisabled(true);
      //after form submission creating the user inside the   firebase using firebase's predefined function
      //passing the auth from firebase's file
      //the below function return promise
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          console.log(`user creation is successful`, res);
          //after getting the response from api
          setSubmitButtonDisabled(false);

          const user = res.user;
          //to update the name user's name in firebase we need to call the firebase function
          //updateProfile return promise hence applying async await
          await updateProfile(user, { displayName: values.name });
          console.log(user);

          //after successfully account creation redirecting the user using useNavigate hook ie. const navigate=useNavigate()
          navigate('/'); //navigating the user to the home page
        })
        .catch((err) => {
          console.log(`Unable to pass the data to the firebase` + ' ' + err);

          setSubmitButtonDisabled(false);
        });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>
        <InputControl
          label='Name'
          placeholder='Enter Email Name'
          onChange={(e) => {
            setValues((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />

        <InputControl
          label='Email'
          placeholder='Enter Email here'
          onChange={(e) => {
            setValues((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />

        <InputControl
          label='Password'
          placeholder='Enter your password'
          onChange={(e) => {
            setValues((prev) => ({
              ...prev,
              pass: e.target.value,
            }));
          }}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            SIGN UP
          </button>
          <p>
            Already have an account?
            <span>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

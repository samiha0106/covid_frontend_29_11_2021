import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./style.css";

const Registration = () => {
  const history = useHistory();
  const [register, setRegister] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    marital_status: "",
    date_of_birth: "",
    phone_no: "",
    address: "",
    zone: "",
    vaccine_center: "",
    date_of_vaccine: "",
    time_of_vaccine: "",
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const saveRegister = (e) => {
    e.preventDefault();

    const data = {
      name: register.name,
      age: register.age,
      gender: register.gender,
      occupation: register.occupation,
      marital_status: register.marital_status,
      date_of_birth: register.date_of_birth,
      phone_no: register.phone_no,
      address: register.address,
      zone: register.zone,
      vaccine_center: register.vaccine_center,
      date_of_vaccine: register.date_of_vaccine,
      time_of_vaccine: register.time_of_vaccine,
    };

    axios.post("http://127.0.0.1:8000/registrations", data).then((res) => {
      if (res.data.status === 200) {
        setRegister({
          name: "",
          age: "",
          gender: "",
          occupation: "",
          marital_status: "",
          date_of_birth: "",
          phone_no: "",
          address: "",
          zone: "",
          vaccine_center: "",
          date_of_vaccine:"",
          time_of_vaccine:"",
        });

        history.push("http://localhost:3000/registration");
      }
    });
  };

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };



  


  return (
    <div class="registration">
      <div class="social">
        <FacebookLogin
          appId="" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="697101374812-bfm3i6ukelh03c24embvqu9nkdohdah8.apps.googleusercontent.com" 
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
      <div>
        <form className="regform" onSubmit={saveRegister}>
          <h1>Registration</h1>

          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={register.name}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={handleInput}
            value={register.age}
          />

          <label>Gender</label>
          <select value={value} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Do not want to Share">Do not want to Share</option>
          </select>

          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            onChange={handleInput}
            value={register.occupation}
          />

          <label>Marital Status</label>
          <select value={value} onChange={handleChange}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Do not want to Share">Do not want to Share</option>
          </select>

          <label>Date of Birth</label>
          <input
            type="date"
            name=" date_of_birth"
            onChange={handleInput}
            defaultValue={register.date_of_birth}
          />

          <label>Phone No.</label>
          <input
            type="tel"
            name="phone_no"
            onChange={handleInput}
            value={register.phone_no}
          />

          <label>Address</label>
          <textarea
            name=" address"
            onChange={handleInput}
            defaultValue={register.address}
          ></textarea>

          <label>Zone</label>
          <select value={value} onChange={handleChange}>
            <option value="Puran Dhaka">Puran Dhaka</option>
            <option value="Motijheel">Motijheel</option>
            <option value="Uttara">Uttara</option>
            <option value="Mirpur">Mirpur</option>
            <option value="Gulshan">Gulshan</option>
          </select>

          <label>Vaccine Center</label>
          <select value={value} onChange={handleChange}>
            <option value="BSSMU">BSSMU</option>
            <option value="Mugda Hospital">Mugda Hospital</option>
            <option value="Ibn Sina">Ibn Sina</option>
            <option value="Mirpur Health Care">Mirpur Health Care</option>
            <option value="Praava Health">Praava Health</option>
          </select>

          <label>Preferred Date of Vaccine</label>
          <input
            type="date"
            name="date_of_vaccine"
            onChange={handleInput}
            value={register.date_of_vaccine}
          />
            <label>Preferred Time of Vaccine</label>
          <input
            type="time"
            name="time_of_vaccine"
            onChange={handleInput}
            value={register.time_of_vaccine}
          />

          <div className="buttons">
            <button type="submit" className="Save">
              Save
            </button>
            {/* <button onClick={window.print()}type="submit" className="Download">
              Download
            </button> */}

               <a href="http://localhost:3000/download">Download Card</a>.
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

    axios.post("http://127.0.0.1:8000/add-registration", data).then((res) => {
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





  


  return (
    <div class="registration">
      
      
      <div>
        <form className="regform" onSubmit={saveRegister}>
          <h1>Download Card</h1>

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
          <input
            type="text"
            name="gender"
            onChange={handleInput}
            value={register.gender}
          />

          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            onChange={handleInput}
            value={register.occupation}
          />

          <label>Marital Status</label>
          <input
            type="text"
            name="marital status"
            onChange={handleInput}
            value={register.marital_status}
          />

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
          <input
            type="text"
            name=" zone"
            onChange={handleInput}
            defaultValue={register.zone}
          />

          <label>Vaccine Center</label>
          <input
            type="text"
            name="vaccine center"
            onChange={handleInput}
            defaultValue={register.vaccine_center}
          />
          
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

           {/* <button onClick={window.print()}type="submit" className="Download">
              Download
            </button> */}
            
           

               
           
      
        </form>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1><b>Age Calculator</b></h1>
      <label><h3>Enter your Date of Birth:</h3> </label>
      <br/>
      <input class="bd"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br/>

      <button id="button" onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;

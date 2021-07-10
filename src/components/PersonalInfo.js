import React from 'react';
import CoupledInputs from './CoupledInputs.js';

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="personal-info">
        <h1>Personal Information</h1>
        <CoupledInputs />
        <CoupledInputs />
        <CoupledInputs />
        <button className="add-field-btn">Add Field</button>
      </div>
    );
  }
}

export default PersonalInfo;

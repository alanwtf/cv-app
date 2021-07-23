import React from 'react';
import Input from './Input';
class DatedField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dated-field coupled">
        <h3>charge</h3>
        <Input />
        <h3>place</h3>
        <Input />
        <h3>from</h3>
        <Input />
        <h3>to</h3>
        <Input />
      </div>
    );
  }
}

export default DatedField;

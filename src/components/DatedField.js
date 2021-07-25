import React from 'react';
import Input from './Input';
class DatedField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dated-field coupled">
        <button
          className="delete-field-btn"
          onClick={() => this.props.delete(this.props.id)}
        >
          X
        </button>
        <Input val="Position" />
        <Input val="Company" />
        <div className="">from</div>
        <Input val="dd/mm/aaaa" />
        <div>to</div>
        <Input val="dd/mm/aaaa" />
      </div>
    );
  }
}

export default DatedField;

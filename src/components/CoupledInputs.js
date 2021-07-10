import React from 'react';
import Input from './Input';

class CoupledInputs extends React.Component {
  render() {
    return (
      <div className="coupled">
        <Input className="value" />
        <Input className="amm" />
      </div>
    );
  }
}

export default CoupledInputs;

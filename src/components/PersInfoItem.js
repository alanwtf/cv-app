import React from 'react';
import Input from './Input';

class PersInfoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'none',
    };
  }

  render() {
    return (
      <div className="coupled">
        <Input className="value" val="Example" />
        <button
          className="delete-field-btn"
          onClick={() => this.props.del(this.props.field.id)}
        >
          X
        </button>
        <Input className="amm" val="Example" />
      </div>
    );
  }
}

export default PersInfoItem;

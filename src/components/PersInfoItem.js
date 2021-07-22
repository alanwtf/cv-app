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
        <Input className="value" />
        <button
          //style={{display:  ${this.state.display}}}
          className="delete-field-btn"
          onClick={() => this.props.del(this.props.field.id)}
        >
          X
        </button>
        <Input className="amm" />
      </div>
    );
  }
}

export default PersInfoItem;

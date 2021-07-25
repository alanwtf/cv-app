import React from 'react';
import DatedField from './DatedField';
class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      ids: 3,
    };
  }

  addField = (e) => {
    this.setState({
      fields: this.state.fields.concat({
        id: this.state.ids,
      }),
      ids: this.state.ids + 1,
    });
  };

  deleteField = (id) => {
    const newArr = this.state.fields.filter((field) => field.id !== id);
    this.setState({
      fields: newArr,
    });
  };

  render() {
    return (
      <div className="personal-info">
        <h1>{this.props.title}</h1>
        {this.state.fields.map((field) => {
          return (
            <DatedField
              key={field.id}
              delete={this.deleteField}
              id={field.id}
            />
          );
        })}
        <button className="add-field-btn" onClick={this.addField}>
          Add Field
        </button>
      </div>
    );
  }
}

export default Experience;

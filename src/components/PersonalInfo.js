import React from 'react';
import PersInfoItem from './PersInfoItem.js';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          title: 'something',
          value: 'other',
          id: 1,
        },
        {
          title: 'stuff',
          value: 'here',
          id: 2,
        },
      ],
      ids: 3,
    };
  }

  addField = (e) => {
    this.setState({
      fields: this.state.fields.concat({
        title: 'newField',
        value: 'ewField',
        id: this.state.ids,
      }),
      ids: this.state.ids + 1,
    });
  };

  deleteField = (id) => {
    console.log(id);
    const newArr = this.state.fields.filter((field) => field.id !== id);
    console.log(newArr);
    this.setState({
      fields: newArr,
    });
  };

  render() {
    return (
      <div className="personal-info">
        <h1>Personal Information</h1>

        {this.state.fields.map((field) => {
          return (
            <PersInfoItem key={field.id} field={field} del={this.deleteField} />
          );
        })}
        <button className="add-field-btn" onClick={this.addField}>
          Add Field
        </button>
      </div>
    );
  }
}

export default PersonalInfo;

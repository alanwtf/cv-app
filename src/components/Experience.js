import React from 'react';
import DatedField from './DatedField';
class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          place: 'hello',
          value: 'hi',
          from: '12/5/18',
          to: '13/5/18',
          id: 1,
        },
        {
          place: 'hello',
          value: 'hi',
          from: '12/5/18',
          to: '13/5/18',
          id: 2,
        },
      ],
      ids: 3,
    };
  }

  render() {
    return (
      <div className="personal-info">
        <h1>Work Experience</h1>
        {this.state.fields.map((field) => {
          return (
            <DatedField
              key={field.id}
              place={field.place}
              position={field.position}
              from={field.from}
              to={field.to}
            />
          );
        })}
      </div>
    );
  }
}

export default Experience;

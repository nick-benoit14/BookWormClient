import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

function select(state, props) {
  const { interactions } = state;
  const { id } = props.params;
  return {
    interaction: _.find(
      interactions.interactions,
      i => i.id === _.toNumber(id)
    )
  };
}
export class Interaction extends React.PureComponent {
  static propTypes = {
    interaction: PropTypes.shape({}),
  };

  render() {
    const { interaction } = this.props;
    const { book, person } = interaction;

    return (
      <div>
        <table>
          <tr>
            <th>Book</th>
            <th>Person</th>
            <th>Comment</th>
          </tr>
          <tr>
            <td>{book.title}</td>
            <td>{person.name}</td>
            <td>{interaction.comment}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default connect(select, {})(Interaction);

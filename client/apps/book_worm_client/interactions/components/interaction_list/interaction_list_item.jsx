import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class InteractionListItem extends React.PureComponent {
  static propTypes = {
    interaction: PropTypes.shape({}),
  };


  render() {
    const { interaction } = this.props;
    const { book, person } = interaction;
    return (
      <Link to={`/interactions/${interaction.id}`}>
        <tr>
          <td>{book.title}</td>
          <td>{person.name}</td>
          <td>{interaction.comment}</td>
        </tr>
      </Link>
    );
  }
}

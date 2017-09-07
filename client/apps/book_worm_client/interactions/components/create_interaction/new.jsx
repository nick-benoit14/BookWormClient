import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as InteractionActions from '../../actions';


function select() {
  return {};
}

export class CreateInteraction extends React.PureComponent {
  static propTypes = {
    createInteraction: PropTypes.func.isRequired,
  };

  render() {
    const { createInteraction } = this.props;
    return (
      <div>
        <h1>Create Review</h1>
        <form>
          <label htmlFor="title">Title</label>
          <input ref={c => this.title = c} id="title" type="text" />
          <label htmlFor="name">Name</label>
          <input ref={c => this.name = c} id="name" type="text" />
          <label htmlFor="comment">Comment</label>
          <input ref={c => this.comment = c} id="comment" type="text" />
          <input
            onClick={(e) => {
              e.preventDefault();
              createInteraction({
                book: { title: this.title },
                person: { name: this.name },
                comment: this.comment,
              });
            }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default connect(select, { ...InteractionActions })(CreateInteraction);

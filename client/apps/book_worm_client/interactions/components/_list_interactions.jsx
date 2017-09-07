import React from 'react';
import { Link } from 'react-router';

import InteractionList from './interaction_list';


export default class ListInteractions extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Book Worm</h1>
        <InteractionList />
        <Link to="interactions/new">
          <button>+</button>
        </Link>
      </div>
    );
  }
}

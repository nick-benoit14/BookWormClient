import React from 'react';
import InteractionList from './interaction_list';


export default class ListInteractions extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Book Worm</h1>
        <InteractionList />
      </div>
    );
  }
}

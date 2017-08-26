import React from 'react';

export default class InteractionListItem extends React.PureComponent {
  render() {
    return (<li>{this.props.interaction.book.title}</li>);
  }
}

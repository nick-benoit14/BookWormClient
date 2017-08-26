import React from 'react';
import { connect } from 'react-redux';
import assets from '../libs/assets';
import * as InteractionActions from '../interactions/actions';

export class Home extends React.Component {
  componentDidMount() {
    this.props.listInteractions();
    this.props.showInteraction(1);
  }

  render() {
    const img = assets('./images/atomicjolt.jpg');
    return (
      <div>
        <img src={img} alt="Atomic Jolt Logo" />
        <p>Welcome to the React Client starter app by <a href="http://www.atomicjolt.com">Atomic Jolt</a></p>
      </div>
    );
  }
}

export default connect(() => ({}), { ...InteractionActions })(Home);

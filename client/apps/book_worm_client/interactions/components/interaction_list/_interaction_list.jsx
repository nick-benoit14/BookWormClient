import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as InteractionActions from '../../actions';
import InteractionListItem from './interaction_list_item';

function select(state) {
  return {
    interactions: state.interactions.interactions
  };
}

export class InteractionList extends React.PureComponent {
  static propTypes = {
    interactions: PropTypes.shape({}),
    listInteractions: PropTypes.func,
  };

  componentDidMount() {
    this.props.listInteractions();
  }

  render() {
    const { interactions } = this.props;
    return (
      <ul>
        {
          _.map(interactions, i => <InteractionListItem interaction={i} />)
        }
      </ul>
    );
  }
}

export default connect(select, { ...InteractionActions })(InteractionList);

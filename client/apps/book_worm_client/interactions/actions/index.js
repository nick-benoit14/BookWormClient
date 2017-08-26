import Network from '../../../../libs/constants/network';

import Constants from '../constants';

const apiUrl =  'http://localhost:8000';

export function listInteractions() {
  return {
    type: Constants.LIST_INTERACTIONS,
    method: Network.GET,
    url: `${apiUrl}/interactions`,
  };
}

export function showInteraction(interactionId) {
  return {
    type: Constants.SHOW_INTERACTION,
    method: Network.GET,
    url: `${apiUrl}/interactions/${interactionId}`,
  };
}

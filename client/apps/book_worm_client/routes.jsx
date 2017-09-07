// if you use jsx, you have to import React
import React                          from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/layout/index';
import NotFound                       from './components/common/not_found';
import Home                           from './components/home';
import InteractionList                from './interactions/components/_list_interactions';
import Interaction                    from './interactions/components/interaction';
import CreateInteraction              from './interactions/components/create_interaction/new';

export default (
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="interactions" component={InteractionList} />
      <Route path="interactions/new" component={CreateInteraction} />
      <Route path="interactions/:id" component={Interaction} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

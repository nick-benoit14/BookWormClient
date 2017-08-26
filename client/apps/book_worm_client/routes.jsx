// if you use jsx, you have to import React
import React                          from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/layout/index';
import NotFound                       from './components/common/not_found';
import InteractionList                from './interactions/components/_list_interactions';

export default (
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={InteractionList} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

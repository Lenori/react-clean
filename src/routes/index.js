import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../views/Home';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    )
}
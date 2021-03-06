import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import {toast} from 'react-toastify';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        toast.error('É necessário estar logado.');
        return <Redirect to='/' />
    }

    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}
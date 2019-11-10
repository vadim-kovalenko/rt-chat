import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterFrom } from '../../modules';

import "./Auth.scss"

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path={['/', '/login']} component={LoginForm}/>
            <Route path="/register" component={RegisterFrom}/>
        </div>
    </section>
)

export default Auth;
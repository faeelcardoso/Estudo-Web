import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// para ficar navegando

export default props =>
    <Switch>
        <Route exact path='/' component={Home} /> { /*coloco o exact para oq for exatamente só uma "/", navega barra home*/ }
        <Route path='/users' component={UserCrud} /> { /* Tudo o que começar com /users vai para o UserCrud*/ }
        <Redirect from='*' to='/' /> { /*Qualquer outra coisa vai para o / ou seja, Home*/ }
    </Switch>
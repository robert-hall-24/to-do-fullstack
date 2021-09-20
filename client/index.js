import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain='gardenz.au.auth0.com'
      clientId='UPX21QATLKQlu9iMNfWmZd24Y3Xk2ezF'
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider> ,
    document.getElementById('app')
  )
})

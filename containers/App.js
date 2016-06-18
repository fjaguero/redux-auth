import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

class App extends Component {

  render() {
    const { dispatch, quote, mits, isAuthenticated, errorMessage, isSecretQuote } = this.props

    const childrenWithProps = React.Children.map(this.props.children,
        (child) => React.cloneElement(child, {
          ...this.props
        }));

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

      {childrenWithProps}
    </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  mits: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

function mapStateToProps(state) {

  const { quotes, auth, mits } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    mits,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)

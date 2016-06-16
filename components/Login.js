import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  onLoginClick(e) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { errorMessage } = this.props

    return (
      <div>

        <form name="login-form" onSubmit={this.handleSubmit} >
          <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
          <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
          <button type="submit" onClick={(event) => this.onLoginClick(event)} className="btn btn-primary">
            Login
          </button>
        </form>

        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

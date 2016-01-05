import {createValidator, required} from '../utils/validation'
import {reduxForm} from 'redux-form'
import React, { PropTypes, Component } from 'react'

const validate = createValidator({
  username: [required],
  password: [required]
});

class LoginForm extends Component {
  render() {
    const {
          fields: {username, password},
          handleSubmit,
          submitting,
          error
        } = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Username</label>
          <input type="text" placeholder="username" {...username}/>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="password" {...password}/>
          {password.touched && password.error && <div>{password.error}</div>}
        </div>
        {error && <div>{error}</div>}
        <button disabled={submitting} type="submit" onClick={handleSubmit}>
          {submitting ? <i/> : <i/>} Submit
        </button>
      </form>
    )
  }  
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired
}

LoginForm = reduxForm({
  form: 'login',
  validate,
  fields: ['username', 'password']
})(LoginForm)

export default LoginForm

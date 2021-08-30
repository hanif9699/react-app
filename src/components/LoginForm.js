import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <div className="input-email">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={props.values.email} onChange={props.onChange('email')}></input>
                </div>
                <div className="input-password">
                    <label htmlFor="password">Password:</label>
                    <input type={props.values.showPassword ? 'text' : 'password'} name="email" value={props.values.password} onChange={props.onChange('password')}></input>
                    <i className={`bi bi-eye-slash `+(props.values.showPassword ? 'bi-eye':'')} id="togglePassword" onClick={props.togglePassword}></i>
                </div>
                <div className="btn btn-submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    values:PropTypes.object.isRequired,
    onChange:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
    togglePassword:PropTypes.func.isRequired
}

export default LoginForm

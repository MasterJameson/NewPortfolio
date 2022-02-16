import React, { Component } from 'react';
import SignUpError from '../FormErr/SignUpErr';

interface MyState {
  email: string,
  password: string,
  confirmPassword: string,
  formErrors: { email: string, password: string, confirmPassword: string },
  emailValid: boolean,
  passwordValid: boolean,
  confirmPasswordValid: boolean,
  formValid: boolean,
  fName: string
}

class SignUpForm extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      formErrors: { email: '', password: '', confirmPassword: '' },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false,
      fName: 'jameson'
    }
  }

  validateField(fieldName: string, value: string) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null;
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is invalid';
        break;
      case 'confirmPassword':
        confirmPasswordValid = value === this.state.password;
        fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : `password don't match`;
        break;

      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmPasswordValid: confirmPasswordValid
    }, this.validateForm)
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid })
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.name;
    let value = event.target.value
    this.setState({ ...this.state, [name]: value }, () => { this.validateField(name, value) });
  }

  errorClass(err: string) {
    return (err.length === 0 ? '' : 'has-error')
  }
  changeColor() {
    const output = document.getElementById('emailTest');
    if (output) output.style.color = 'red';

  }

  componentDidMount() {
    this.changeColor()
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: 500, margin: "0 auto", }}>
          <form className='demoForm border p-5 mt-5'>
            <h2>Sign up</h2>
            <div className={`form-group mb-3
                 ${this.errorClass(this.state.formErrors.email)}`}>
              <label id='emailTest' htmlFor="email">Email Address</label>
              <input type="email" name='email' value={this.state.email} onChange={(event) => this.handleChange(event)} className='form-control' />
            </div>
            <div className={`form-group mb-3
                 ${this.errorClass(this.state.formErrors.password)}`}>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' value={this.state.password} onChange={event => this.handleChange(event)} className='form-control' />
            </div>
            <div className={`form-group mb-3
                  ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
              <label htmlFor="confirmPassword">Consirm Password</label>
              <input type="password" name='confirmPassword' value={this.state.confirmPassword} onChange={event => { this.handleChange(event) }} className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary mb-3' disabled={!this.state.formValid}>Sign up</button>
            <div className="panel panel-default">
              <SignUpError formErrors={this.state.formErrors} />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
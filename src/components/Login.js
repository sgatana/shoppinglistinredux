import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import * as actionTypes from '../actions/actionsCreators'
import { Link,Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
      redirect:false
    }
  }

  handleChange = (event ) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
handleSubmit = (e) => {
  e.preventDefault();
  const loginData = new FormData();
  loginData.set('email', this.state.email)
  loginData.set('password', this.state.password)
  this.props.userLogin(loginData)
  .then(()=> {
    this.setState({redirect:true})
  })
}
componentDidMount(){
  if (localStorage.getItem('msg')){
    toast.success(window.localStorage.getItem('msg'))
    localStorage.removeItem('msg')
  }
  if(this.props.registerSuccess){
    toast.success(this.props.registerSuccess)
  }
  
}
  render(){

    let spinner;
    let errorMessage = null;
    let isAuth ;
    if(this.state.redirect){
      return <Redirect to="/dashboard"/>
    }
    if(this.props.error){
      errorMessage = <p className="alert alert-danger alert-dismissible "> {this.props.error}</p>
      // toast.error(this.props.error)
    }
    if (this.props.loading) {
      spinner = <div className="text-center" ><i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' /></div>
    }
   

    return(
      <div className='container'>
        < Header />
  
        <form className="form form-horizontal" onSubmit={(e)=>{this.handleSubmit(e)}}>
          {/* <p className="glyphicon glyphicon-user text-center"/> */}
          {errorMessage}
          {isAuth}
          <h3 className='text-center'>User Login</h3>
          <ToastContainer />
          <div className='form-group'>
            <label>Username: </label>
            <input type="email" name='email' value={this.state.email} onChange={this.handleChange} className="form-control" />
            <label>Password: </label>
            <input type= "password" name='password' value={this.state.password} onChange={this.handleChange}  className="form-control" />
            {spinner}
            <br />
            <input type="submit" value='Login' className='btn btn-primary col-xs-4' />
            <input type="reset" value='Cancel' className='btn btn-danger pull-right col-xs-4' />
            <br />
          </div>
          <p className='text-center'>Don't have an accont? <Link to='/register'>click here to register</Link></p>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    isAuthenticated: state.loginReducer.message,
    registerSuccess: state.signupReducer.message

  }
}

const mapDispatchToProps = dispatch => {
  return{
    userLogin: (data) => dispatch(actionTypes.loginUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
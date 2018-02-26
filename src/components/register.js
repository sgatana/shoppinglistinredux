import React, {Component } from 'react';
import Header from './header';
import {Link } from 'react-router-dom';
import * as actionTypes from '../actions/actionsCreators';
import { connect } from 'react-redux';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm: ''
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    registerUser =(e) =>{
        e.preventDefault()
        let inputData = new FormData()
        const data = this.state
        inputData.set('username', data.username);
        inputData.set('email', data.email);
        inputData.set('password', data.password);
        inputData.set('confirm', data.confirm);
        this.props.signUp(inputData)
    }
    render(){
        return(
            <div className="container">
                < Header />
               
                <form className='form' onSubmit={this.registerUser}>
                    <h3 className='text-center'>User Register</h3>
                    <div className='input-group'>
                        <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                        <input type='text' className='form-control' name='username' onChange={this.handleChange} value={this.state.username} placeholder='enter username' />
                    </div>
                    <br />
                    <div className='input-group'>
                        <span className='input-group-addon'><i className='glyphicon glyphicon-envelope' /></span>
                        <input type='text' className='form-control' name='email' onChange={this.handleChange} value={this.state.email} placeholder='enter email' />
                    </div>
                    <br />
                    
                    <div className='input-group'>
                        <span className='input-group-addon'><i className='glyphicon glyphicon-lock' /></span>
                        <input type='password' className='form-control' name='password' onChange={this.handleChange} value={this.state.password} placeholder='enter password' />
                    </div>
                    <br />
                    
                    <div className='input-group'>
                        <span className='input-group-addon'><i className='glyphicon glyphicon-lock' /></span>
                        <input type='password' className='form-control' name='confirm' onChange={this.handleChange} value={this.state.confirm} placeholder='enter confirm' />
                    </div>
                    <br />
                    <input type='submit' value='Sign Up' className='btn btn-primary col-md-4' />  
                    <input type='reset' value='Cancel ' className='btn btn-danger pull-right col-md-4' />                
                    <br />
                    <p className='text-center form-footer'>Already having an accont? <Link to='/'>click here to login</Link></p>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        signUp: data => dispatch(actionTypes.registerUser(data))
    }
}
export default connect(null, mapDispatchToProps)(Register)
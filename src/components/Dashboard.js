import React, {Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {toast, ToastContainer} from 'react-toastify'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:''
        }
    }

    componentDidMount(){
        if (this.props.loginSuccess){
            toast.success(this.props.loginSuccess)
        }
    }
   
    render(){
        let isAuth;
        if(!this.props.isAuthenticated){
            localStorage.setItem('msg', 'you have been successfully logged out')
            isAuth =  <Redirect to='/' />
        }
        return(
            <div>
                <ToastContainer />
                {isAuth}
                Your data is:
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   return{
       isAuthenticated: state.loginReducer.token,
       loginSuccess: state.loginReducer.message 
   } 
}
export default connect (mapStateToProps)(Dashboard)
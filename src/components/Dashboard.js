import React, {Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
            <div >
             
                <div className="navbar navbar-inverse  animate indexed" role='navigation'>
                    <div className="container">
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#nav-collapse'>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className='animbrand'>
                                <Link to='/dashboard' className='nav-brand animate'>ShoppingList </Link>
                            </div>
                        </div>
                        <div className='collapse navbar-collapse' id='nav-collapse'>
                            
                            
                            <form class="navbar-form navbar-right">
                                <ul className='nav navbar-nav'>
                                    <li> <Link to='/'>Login</Link></li>
                                    <li> <Link to='/login'>Login</Link></li>
                                    <li> <Link to='/login'>Login</Link></li>

                                </ul>
                                <div className='input-group'>
                                <input type="text" class="form-control" placeholder="Search..." />
                                <span className='input-group-addon'><i className='glyphicon glyphicon-search' /></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ToastContainer />
                    {isAuth}
                    <p>me</p>
                </div>
                
                
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
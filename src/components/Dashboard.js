import React, {Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {toast, ToastContainer} from 'react-toastify'
import * as actionTypes from '../actions/actionsCreators'
import _ from 'lodash';

class Dashboard extends Component{
   

    componentDidMount(){
        if (this.props.loginSuccess){
            toast.success(this.props.loginSuccess)
            
            // window.location.reload();
        }
        this.props.getList();
        // window.location.reload();
        
    }
    
   
    render(){
        let dashboard;
        if (!localStorage.getItem('token') || this.props.error === 'your token is invalid, please log in '){
            dashboard = <Redirect to="/"/>
        }
       
        let shoppinglist;
        if (this.props.shoppinglist){
            shoppinglist = <div> 
                <ul> 
                    {_.map(this.props.shoppinglist, list => {
                        return(
                        <li key={list.id}> {list.name}</li>
                        )
                    })}
                </ul>
            </div>
        }
        else if(this.props.error){
            shoppinglist = <div>{this.props.error}</div>
        }
        else{
            shoppinglist = <div>Loading....</div>
        }

        return(
            <div >
                {dashboard}
             
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
                            
                            
                            <form className="navbar-form navbar-right">
                                <ul className='nav navbar-nav'>
                                    {/* <li> <Link to='/'>Login</Link></li>
                                    <li> <Link to='/login'>Login</Link></li> */}
                                    <li onClick={() =>{this.props.logout()}}> <Link to='/dashboard'>logout</ Link></li>

                                </ul>
                                <div className='input-group'>
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className='input-group-addon'><i className='glyphicon glyphicon-search' /></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ToastContainer />
                    <p>me</p>
                    
                    {shoppinglist}
                </div>
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   return{
       loginSuccess: state.loginReducer.message,
       shoppinglist: state.shoppinglist.shoppinglist,
       error: state.shoppinglist.error
   } 
}
const mapDispatchToProps = dispatch => {
    return {
        getList:  () => dispatch(actionTypes.getShoppinglist()),
        logout: () => dispatch(actionTypes.logout()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
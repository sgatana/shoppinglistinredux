import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'
import * as actionTypes from '../actions/actionsCreators'
import _ from 'lodash';

class Dashboard extends Component {


    componentDidMount() {
        if (this.props.loginSuccess) {
            toast.success(this.props.loginSuccess)

            // window.location.reload();
        }
        this.props.getList();
        
       
    }


    render() {
        let dashboard;
        if (!localStorage.getItem('token') || this.props.error === 'your token is invalid, please log in ') {
            dashboard = <Redirect to="/" />
        }

        let shoppinglist;
        if (this.props.shoppinglist) {
            shoppinglist = <div>
                <ul>
                    {_.map(this.props.shoppinglist, list => {
                        return (
                            <li key={list.id}> {list.name}</li>
                        )
                    })}
                </ul>
            </div>
        }
        else if (this.props.error) {
            shoppinglist = <div>{this.props.error}</div>
        }
        else {
            shoppinglist = <div>Loading....</div>
        }

        return (
            <div id='wrapper'>
                {dashboard}

                <div className="navbar navbar-inverse navbar-static-top main-menu" role='navigation'>
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#nav-collapse'>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className='animbrand'>
                                <Link to='/dashboard' className='nav-brand'>ShoppingList </Link>
                            </div>
                        </div>
                        <div className='collapse navbar-collapse' id='nav-collapse'>


                            <form className="navbar-form navbar-right">
                                <ul className='nav navbar-top-links navbar-right'>
                                    {/* <li> <Link to='/'>Login</Link></li>
                                    <li> <Link to='/login'>Login</Link></li> */}
                                    <li onClick={() => { this.props.logout() }}> <Link to='/dashboard'>logout</ Link></li>

                                </ul>
                                <div className='input-group'>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className='input-group-addon'><i className='glyphicon glyphicon-search' /></span>
                                </div>
                            </form>
                        </div>
                    <div className='navbar-default sidebar' role="navigation">
                          <div className='sidebar-nav navbar-collapse'>
                                    <ul className='nav' id='side-menu'>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><Link to='/logout'>Dashboard</Link></li>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                    </ul>
                          </div>          
                    </div>

                </div>
                <div id="page-wrapper">
             
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h1 className='page-header'>me</h1>
                            <ToastContainer />
                            {shoppinglist}
                        </div>
                    </div>

                   
                </div>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginSuccess: state.loginReducer.message,
        shoppinglist: state.shoppinglist.shoppinglist,
        error: state.shoppinglist.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getList: () => dispatch(actionTypes.getShoppinglist()),
        logout: () => dispatch(actionTypes.logout()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
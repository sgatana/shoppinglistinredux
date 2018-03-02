import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'
import * as actionTypes from '../actions/actionsCreators'
import _ from 'lodash';
import AddShoppinglist from './modals/addShoppinglist';

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
            shoppinglist = 
            <div className='row'>
               
                    {_.map(this.props.shoppinglist, list => {
                        return (
                            <div className='col-lg-4 col-md-6' key={list.id}>
                                <div className='panel panel-primary' >
                                    <div className='panel-heading' >
                                        {list.name}
                                        <span><i className=" glyphicon glyphicon-trash pull-right" title='delete shoppinglist' /></span>
                                        
                                    </div>
                                    <div className='panel-body'>
                                        {list.description}
                                    </div>
                                    <div className='panel-footer text-center'>
                                        <span><i className="btn glyphicon glyphicon-plus-sign text-primary" title='add item'/></span>
                                        <span><i className="btn glyphicon glyphicon-edit text-warning" title='edit item'/></span>
                                        <span><i className="btn glyphicon glyphicon-circle-arrow-right text-success" title='view items'/></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
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
                                <li onClick={() => { this.props.logout() }}> <Link to='/dashboard'><i className="glyphicon glyphicon-user"/>welcome</ Link></li>
                                <li onClick={() => { this.props.logout() }}> <Link to='/dashboard'><i className='glyphicon glyphicon-log-out' />logout</ Link></li>

                                </ul>
                                
                            </form>
                        </div>
                    <div className='navbar-default sidebar' role="navigation">
                          <div className='sidebar-nav navbar-collapse'>
                                    <ul className='nav' id='side-menu'>
                                <li><Link to='/dashboard'><i className="glyphicon glyphicon-dashboard"/>Dashboard</Link></li>
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
                            <h3 className='page-header'>Shoppinglist App
                                <span className='input-group col-md-4 pull-right'>
                                    <input type="text" className="form-control" placeholder="Search shoppinglist" />
                                    <span className='input-group-addon'><i className='glyphicon glyphicon-search' /></span>
                                </span>
                            </h3>
                            <ToastContainer />
                            <AddShoppinglist />
                            {shoppinglist}
                            <button type="button" data-toggle='modal' data-target='#listmodal' className="btn btn-info btn-circle btn-xl"><i className="fa fa-plus"></i>
                            </button>
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
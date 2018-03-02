import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionsCreators';

class AddShoppingList extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state;
        const listData = new FormData();
        listData.set('name', data.name);
        listData.set('description', data.description);
        this.props.addList(listData, ()=> {
            this.props.history.push('/dashboard')
        })
        document.querySelector(".close").click()

    }
    render(){
        return(
            <div  id='listmodal' className="modal fade" tabIndex='-1' role="dialog" aria-labelledby='listtitle' >
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button className='close' data-dismiss='modal' aria-label='Close' ><span aria-hidden='true'>
                                &times;
                                </span>
                            </button>
                            <h4 className='modal-title' id='listtitle'>Add Shoppinglist</h4>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label className='control-label'>Name:</label>
                                    <input name='name' type='text' onChange={this.handleChange} value={this.state.name} className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Description:</label>
                                    <textarea name='description' onChange={this.handleChange}  value={ this.state.description } type='text' className='form-control' />
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" value='Add Shoppinglist' className="btn btn-primary col-md-4" />
                                    <input type="reset" value="Cancel" className="btn btn-danger col-md-4 pull-right" />

                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addList: (data) => dispatch(actionTypes.addList(data))
    }
}
export default connect(null, mapDispatchToProps)(AddShoppingList)
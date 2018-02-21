import React, { Component } from 'react';
import Header from './header';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password:''
    }
  }

  handleChange = (event ) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
handleSubmit = (e) => {
  e.preventDefault()
  

}
deleteContact =(e, index) => {
  e.preventDefault()
  this.props.deleteContact(index)
}
  render(){
    return(
      <div className='container'>
        < Header />
        <form className="form form-horizontal" onSubmit={this.handleSubmit}>
          {/* <p className="glyphicon glyphicon-user text-center"/> */}
          <h3 className='text-center'>User Login</h3>
          <div className='form-group'>
            <label>Username: </label>
            <input type="text" name='username' onChange={this.handleChange} value={this.state.contact} className="form-control" />
            <label>Password: </label>
            <input type="password" name='password' onChange={this.handleChange} value={this.state.contact} className="form-control" />
            <br />
            <input type="submit" value='Login' className='btn btn-primary col-md-4' />
            <input type="reset" value='Cancel' className='btn btn-danger pull-right col-md-4' />
          </div>
        </form>
      </div>
    )
  }
}

export default App
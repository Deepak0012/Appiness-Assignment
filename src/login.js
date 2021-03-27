import React from 'react';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
        };
  
      
    }
  
    handleChange = (event) => {
      this.setState({username: event.target.value});
    }
  
    handleSubmit= (event) => {
      alert('A name was submitted: ' + this.state.username);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            
          <label>
            UserName: 
            <input type="text" value={this.state.username} onChange={this.handleChange} /><br/><br/>
          </label>
          
{/*           
          <label>
            Password: 
            <input type="text" value={this.state.value} onChange={this.handleChange} /><br/><br/>
          </label>  */}
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Login;
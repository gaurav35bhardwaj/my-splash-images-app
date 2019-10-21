import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { checkUser, setItem } from '../../utils/helperMethods';
import { withRouter } from 'react-router-dom';

const style = {
    textField: {
      marginLeft: 2,
      marginRight: 2,
    },
    button: {
        marginTop: 10,
    },
    errorMsg: {
        color: 'red',
        marginTop: 10,
    }
};

  
class Login extends Component {
    constructor() {
      super();
      this.state = {
          userName: "",
          password: "",
          errorMsg: ""
      }
    };
    handleChange = key => event => {
        let obj = {  };
        obj[key] = event.target.value;
        this.setState({ ...obj, errorMsg: "" });
    };
    handleClick = () => {
        const { userName, password } = this.state;
        const { history } = this.props;
        const isValidUser = checkUser(userName, password);
        if (!isValidUser) {
            this.setState({ errorMsg: "User does not exits" }); 
            return null;
        }
        setItem('currentUser', isValidUser);
        history.push({
            pathname: `/dashboard`,
        })
        return null;
    };
    render() { 
        const { classes } = this.props;
        const { userName, password, errorMsg } = this.state;
        return(
            <>
                <TextField
                    id="fieldName"
                    label="User Name"
                    variant="outlined"
                    value={userName}
                    className={classes.textField}
                    margin="normal"
                    fullWidth
        		    onChange={this.handleChange('userName')}
                />
                <TextField
        		    id="outlined-name"
        		    label="Password"
        		    className={classes.textField}
        		    value={password}
        		    onChange={this.handleChange('password')}
        		    margin="normal"
                    variant="outlined"
                    type="password"
                    fullWidth
      		    />
                <Button 
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClick}
                >
                    Login
                </Button>
                <h5 className={classes.errorMsg} >{ errorMsg }</h5>
            </>
            
        )
    }
}

export default withRouter(withStyles(style)(Login));
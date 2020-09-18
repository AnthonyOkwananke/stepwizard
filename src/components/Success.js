import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h3>You have successfully submitted your information.</h3>
                    <h4>Thank you!</h4>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
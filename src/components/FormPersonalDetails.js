import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // pull ot values from props
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hintText="Your Phone Number"
                        floatingLabelText="Phone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                    <br/>
                    <TextField
                        hintText="Your Address"
                        floatingLabelText="Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                    />
                    <br/>
                    <TextField
                        hintText="Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Your Province"
                        floatingLabelText="Province"
                        onChange={handleChange('province')}
                        defaultValue={values.province}
                    />
                    <br/>
                    <TextField
                        hintText="Your Postal Code"
                        floatingLabelText="Postal Code"
                        onChange={handleChange('postalCode')}
                        defaultValue={values.postalCode}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

// create a styles variable
const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;
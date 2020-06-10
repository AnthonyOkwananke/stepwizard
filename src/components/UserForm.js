import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    // create state
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        postalCode: ''
    }

    // Method for going to next step
    nextStep = () => {
        // pull step out of state (destructure)
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Method for going to previous step
    prevStep = () => {
        // pull step out of state (destructure)
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Method to handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        // Pull step out of state, pull fields out of state
        const { step } = this.state;
        const { firstName, lastName, email, phone, address, city, province, postalCode} = this.state;
        // create variable 'values' for the inputs
        const values = { firstName, lastName, email, phone, address, city, province, postalCode}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
        }
       
    }
}

export default UserForm;
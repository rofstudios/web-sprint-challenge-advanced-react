import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    let header = render(<CheckoutForm/>);
    header.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    let { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);

    let firstInput = getByLabelText(/first name/i)
    let lastInput = getByLabelText(/last name/i);
    let addressInput = getByLabelText(/address/i);
    let cityInput = getByLabelText(/city/i);
    let stateInput = getByLabelText(/state/i)
    let zipInput = getByLabelText(/zip/i);

    
    
    fireEvent.change(firstInput, { target: { value: 'Legacy' } });
    fireEvent.change(lastInput, { target: { value: 'Rem' } });
    fireEvent.change(addressInput, { target: { value: '123 Moon St' } });
    fireEvent.change(cityInput, { target: { value: 'Earth' } });
    fireEvent.change(stateInput, { target: { value: 'Sun' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });

    //checks to see if input data is being entered correctly into the form
    expect(firstInput.value).toBe('Legacy')
    expect(lastInput.value).toBe('Rem')
    expect(addressInput.value).toBe('123 Moon St')
    expect(cityInput.value).toBe('Earth')
    expect(stateInput.value).toBe('Sun')
    expect(zipInput.value).toBe('12345')

    //emulates submitting completed form
    let button = getByTestId(/testbutton/i);
    fireEvent.click(button);

    //makes sure the the form was correctly submitting by checking its posted values
    let firstName = getByText(/Legacy/i),
        lastName = getByText(/Rem/i),
        address = getByText(/123 Moon St/i),
        city = getByText(/Earth/i),
        state = getByText(/Sun/i),
        zip = getByText(/12345/i)
        
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();

});

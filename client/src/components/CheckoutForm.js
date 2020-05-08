import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);
  let [formValues, handleChanges] = useForm('signupform', {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={formValues.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formValues.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={formValues.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={formValues.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={formValues.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={formValues.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {formValues.firstName} {formValues.lastName}
          </p>
          <p>{formValues.address}</p>
          <p>
            {formValues.city}, {formValues.state} {formValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

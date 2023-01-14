import React, { Component } from 'react';
import './ResumeForm.css';

class ResumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      profession: '',
      city: '',
      country: '',
      postCode: '',
      email: '',
      phone: '',
    };
  }

  componentDidMount() {
    // Retrieve data from localStorage if it exists
    const firstName = localStorage.getItem('firstName');
    const surname = localStorage.getItem('surname');
    const profession = localStorage.getItem('profession');
    const city = localStorage.getItem('city');
    const country = localStorage.getItem('country');
    const postCode = localStorage.getItem('postCode');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    if (firstName) {
      this.setState({ firstName });
    }
    if (surname) {
      this.setState({ surname });
    }
    if (profession) {
      this.setState({ profession });
    }
    if (city) {
      this.setState({ city });
    }
    if (country) {
      this.setState({ country });
    }
    if (postCode) {
      this.setState({ postCode });
    }
    if (email) {
      this.setState({ email });
    }
    if (phone) {
      this.setState({ phone });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    localStorage.setItem(name, value);
    
  }

  handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state); // <-- log the state to check the input values
  // Do something with the form data here, such as sending it to a server
  }
  
  render() {
  return (
  <form onSubmit={this.handleSubmit}>
  <div className="form-container">
  <div className="form-column">
  <label>
  First Name:
  <input
               type="text"
               name="firstName"
               placeholder='First Name'
               value={this.state.firstName}
               onChange={this.handleInputChange}
             />
  </label>
  <br />
  <label>
  Surname:
  <input
               type="text"
               name="surname"
               placeholder='Surname'
               value={this.state.surname}
               onChange={this.handleInputChange}
             />
  </label>
  <br />
  <label>
  Profession:
  <input
               type="text"
               name="profession"
               placeholder='Profession'
               value={this.state.profession}
               onChange={this.handleInputChange}
             />
  </label>
  <br />
  <label>
  City:
  <input
               type="text"
               name="city"
               placeholder='City'
               value={this.state.city}
               onChange={this.handleInputChange}
             />
  </label>
  </div>
  <div className="form-column">
  <label>
  Country:
  <input
  type="text"
  name="country"
  placeholder='Country'
  value={this.state.country}
  onChange={this.handleInputChange}
/>
</label>
<br />
<label>
Post Code:
<input
             type="text"
             name="postCode"
             placeholder='Post Code'
             value={this.state.postCode}
             onChange={this.handleInputChange}
           />
</label>
<br />
<label>
Email:
<input
             type="email"
             name="email"
             placeholder='Email'
             value={this.state.email}
             onChange={this.handleInputChange}
           />
</label>
<br />
<label>
Phone Number:
<input
             type="text"
             name="phone"
             placeholder='Phone'
             value={this.state.phone}
             onChange={this.handleInputChange}
           />
</label>
</div>
</div>
<div className="submit-container">
<input type="submit" value="Submit" />
</div>
</form>
);
}
}

export default ResumeForm;
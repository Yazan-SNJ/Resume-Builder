import React, { Component } from 'react';
import '../components/ReasumeForm.css';
class ResumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthday: '',
      skills: [],
      experience: [],
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: ''
    };
  }

  componentDidMount() {
    // Retrieve data from localStorage if it exists
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const birthday = localStorage.getItem('birthday');
    const skills = JSON.parse(localStorage.getItem('skills'));
    const experience = JSON.parse(localStorage.getItem('experience'));
    const input1 = localStorage.getItem('input1');
    const input2 = localStorage.getItem('input2');
    const input3 = localStorage.getItem('input3');
    const input4 = localStorage.getItem('input4');
    const input5 = localStorage.getItem('input5');
    const input6 = localStorage.getItem('input6');
    const input7 = localStorage.getItem('input7');
    const input8 = localStorage.getItem('input8');
    const input9 = localStorage.getItem('input9');
    const input10 = localStorage.getItem('input10');
    if (name) {
      this.setState({ name });
    }
    if (email) {
      this.setState({ email });
    }
    if (birthday) {
      this.setState({ birthday });
    }
    if (skills) {
      this.setState({ skills });
    }
    if (experience) {
      this.setState({ experience });
    }
    if (input1) {
      this.setState({ input1 });
    }
    if (input2) {
      this.setState({ input2 });
    }
    if (input3) {
      this.setState({ input3 });
    }
    if (input4) {
      this.setState({ input4 });
    }
    if (input5) {
      this.setState({ input5 });
    }
    if (input6) {
      this.setState({ input6 });
    }
    if (input7) {
      this.setState({ input7 });
    }
    if (input8) {
      this.setState({ input8 });
    }
    if (input9) {
      this.setState({ input9 });
    }
    if (input10) {
      this.setState({ input10 });
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

handleSkillsChange = (event) => {
const skills = event.target.value.split(',');
this.setState({
skills
});
localStorage.setItem('skills', JSON.stringify(skills));
}

handleExperienceChange = (event) => {
const experience = event.target.value.split('\n');
this.setState({
experience
});
localStorage.setItem('experience', JSON.stringify(experience));
}

handleNext = (event) => {
event.preventDefault();
// Do something with the form data here, such as saving it to localStorage or moving to the next step in the form
}

render() {
return (
<form>
<div className="form-left">
<label>
Name:
<input
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Email:
<input
           type="email"
           name="email"
           value={this.state.email}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Birthday:
<input
           type="date"
           name="birthday"
           value={this.state.birthday}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Skills:
<textarea
name="skills"
value={this.state.skills.join(',')}
onChange={this.handleSkillsChange}
/>
</label>
<br />
<label>
Experience:
<textarea
name="experience"
value={this.state.experience.join('\n')}
onChange={this.handleExperienceChange}
/>
</label>
</div>
<div className="form-right">
<label>
Input 1:
<input
           type="text"
           name="input1"
           value={this.state.input1}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 2:
<input
           type="text"
           name="input2"
           value={this.state.input2}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 3:
<input
           type="text"
           name="input3"
           value={this.state.input3}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 4:
<input
type="text"
name="input4"
value={this.state.input4}
onChange={this.handleInputChange}
/>
</label>
<br />
<label>
Input 5:
<input
           type="text"
           name="input5"
           value={this.state.input5}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 6:
<input
           type="text"
           name="input6"
           value={this.state.input6}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 7:
<input
           type="text"
           name="input7"
           value={this.state.input7}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 8:
<input
           type="text"
           name="input8"
           value={this.state.input8}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 9:
<input
           type="text"
           name="input9"
           value={this.state.input9}
           onChange={this.handleInputChange}
         />
</label>
<br />
<label>
Input 10:
<input
           type="text"
           name="input10"
           value={this.state.input10}
           onChange={this.handleInputChange}
         />
</label>
</div>
<br />
<input type="button" value="Next" onClick={this.handleNext} />
</form>
);
}
}

export default ResumeForm;
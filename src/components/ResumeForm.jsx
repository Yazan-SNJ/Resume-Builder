// import React, { Component } from 'react';

// class ResumeForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       birthday: '',
//       skills: [],
//       experience: []
//     };
//   }

//   componentDidMount() {
//     // Retrieve data from localStorage if it exists
//     const name = localStorage.getItem('name');
//     const email = localStorage.getItem('email');
//     const birthday = localStorage.getItem('birthday');
//     const skills = JSON.parse(localStorage.getItem('skills'));
//     const experience = JSON.parse(localStorage.getItem('experience'));
//     if (name) {
//       this.setState({ name });
//     }
//     if (email) {
//       this.setState({ email });
//     }
//     if (birthday) {
//       this.setState({ birthday });
//     }
//     if (skills) {
//       this.setState({ skills });
//     }
//     if (experience) {
//       this.setState({ experience });
//     }
//   }

//   handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//     localStorage.setItem(name, value);
//   }

//   handleSkillsChange = (event) => {
//     const skills = event.target.value.split(',');
//     this.setState({
//       skills
//     });
//     localStorage.setItem('skills', JSON.stringify(skills));
//   }

//   handleExperienceChange = (event) => {
//     const experience = event.target.value.split('\n');
//     this.setState({
//       experience
//     });
//     localStorage.setItem('experience', JSON.stringify(experience));
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the form data here, such as sending it to a server
//     const doc = new pdf();
//     doc.text(`Name: ${state.name}`, 10, 10);
//     doc.text(`Email: ${state.email}`, 10, 20);
//     doc.text(`Birthday: ${state.birthday}`, 10, 30);
//     doc.text(`Skills: ${state.skills.join(', ')}`, 10, 40);
//     doc.text(`Experience: ${state.experience.join(', ')}`, 10, 50);
//     doc.save(`${state.name}_resume.pdf`);
//   }
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Birthday:
//           <input
//             type="date"
//             name="birthday"
//             value={this.state.birthday}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Skills:
//           <textarea
//             name="skills"
//             value={this.state.skills.join(',')}
//             onChange={this.handleSkillsChange}
//           />
//         </label>
//         <br />
//         <label>
//           Experience:
//           <textarea
//             name="experience"
//             value={this.state.experience.join('\n')}
//             onChange={this.handleExperienceChange}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


// export default ResumeForm;

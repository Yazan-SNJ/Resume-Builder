import React from "react";
import style from "./PDF.css"

function PDFPresenter() {

    const skills = JSON.parse(localStorage.getItem('skills'))
    const experience = JSON.parse(localStorage.getItem('experience'))
    const aboutMe = JSON.parse(localStorage.getItem('aboutMe'))

	const styles = {
		page: {
			marginLeft: '5rem',
			marginRight: '5rem',
			'page-break-after': 'always',
		},

		columnLayout: {
			display: 'flex',
			justifyContent: 'space-between',
			margin: '3rem 0 5rem 0',
			gap: '2rem',
		},

		column: {
			display: 'flex',
			flexDirection: 'column',
		},

		spacer2: {
			height: '2rem',
		},

		fullWidth: {
			width: '100%',
		},
	};
	return (
		<>
			<div style={styles.page}>



				<div style={styles.spacer2}></div>
			</div>

			<div style={styles.page}>
				<div>
					<h2 style={styles.introText}>
					firstName lastName
					</h2>
					<h2 style={styles.introText}>
					profession
					</h2>
				</div>

				<div style={styles.columnLayout}>
					<div style={styles.column}>
						<h4>Skills</h4>
						<p>
                         {skills}
						</p>
					</div>

					<div style={styles.column}>
						<h4>Experience</h4>
						<p>
							{experience}
						</p>
					</div>
				</div>

				<div style={styles.columnLayout}>
					<div style={styles.column}>
						<h4>About Me</h4>
						<p>
							{aboutMe}
						</p>
					</div>

					<div style={styles.column}>
						<h4>Subtitle Two</h4>
						<p>
							Lorem
						</p>
					</div>
				</div>
			</div>
		</>

		
// 		 <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>

// { <div class="container">
//   <div class="header">
//     <div class="full-name">
//       <span class="first-name">John</span> 
//       <span class="last-name">Doe</span>
//     </div>
//     <div class="contact-info">
//       <span class="email">Email: </span>
//       <span class="email-val">john.doe@gmail.com</span>
//       <span class="separator"></span>
//       <span class="phone">Phone: </span>
//       <span class="phone-val">111-222-3333</span>
//     </div>
    
//     <div class="about">
//       <span class="position">Front-End Developer </span>
//       <span class="desc">
//         I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
//       </span>
//     </div>
//   </div>
//    <div class="details">
//     <div class="section">
//       <div class="section__title">Experience</div>
//       <div class="section__list">
//         <div class="section__list-item">
//           <div class="left">
//             <div class="name">KlowdBox</div>
//             <div class="addr">San Fr, CA</div>
//             <div class="duration">Jan 2011 - Feb 2015</div>
//           </div>
//           <div class="right">
//             <div class="name">Fr developer</div>
//             <div class="desc">did This and that</div>
//           </div>
//         </div>
//                 <div class="section__list-item">
//           <div class="left">
//             <div class="name">Akount</div>
//             <div class="addr">San Monica, CA</div>
//             <div class="duration">Jan 2011 - Feb 2015</div>
//           </div>
//           <div class="right">
//             <div class="name">Fr developer</div>
//             <div class="desc">did This and that</div>
//           </div>
//         </div>

//       </div>
//     </div>
//     <div class="section">
//       <div class="section__title">Education</div>
//       <div class="section__list">
//         <div class="section__list-item">
//           <div class="left">
//             <div class="name">Sample Institute of technology</div>
//             <div class="addr">San Fr, CA</div>
//             <div class="duration">Jan 2011 - Feb 2015</div>
//           </div>
//           <div class="right">
//             <div class="name">Fr developer</div>
//             <div class="desc">did This and that</div>
//           </div>
//         </div>
//         <div class="section__list-item">
//           <div class="left">
//             <div class="name">Akount</div>
//             <div class="addr">San Monica, CA</div>
//             <div class="duration">Jan 2011 - Feb 2015</div>
//           </div>
//           <div class="right">
//             <div class="name">Fr developer</div>
//             <div class="desc">did This and that</div>
//           </div>
//         </div>

//       </div>
      
//   </div>
//      <div class="section">
//       <div class="section__title">Projects</div> 
//        <div class="section__list">
//          <div class="section__list-item">
//            <div class="name">DSP</div>
//            <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
//          </div>
         
//          <div class="section__list-item">
//                     <div class="name">DSP</div>
//            <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
//            </div>
//          </div>
//        </div>
//     </div>
//      <div class="section">
//        <div class="section__title">Skills</div>
//        <div class="skills">
//          <div class="skills__item">
//            <div class="left"><div class="name">
//              Javascript
//              </div></div>
//            <div class="right">
//                           <input  id="ck1" type="checkbox" checked/>

//              <label for="ck1"></label>
//                           <input id="ck2" type="checkbox" checked/>

//               <label for="ck2"></label>
//                          <input id="ck3" type="checkbox" />

//               <label for="ck3"></label>
//                            <input id="ck4" type="checkbox" />
//             <label for="ck4"></label>
//                           <input id="ck5" type="checkbox" />
//               <label for="ck5"></label>

//            </div>
//          </div>
         
//        </div>
//        <div class="skills__item">
//            <div class="left"><div class="name">
//              CSS</div></div>
//            <div class="right">
//                           <input  id="ck1" type="checkbox" checked/>

//              <label for="ck1"></label>
//                           <input id="ck2" type="checkbox" checked/>

//               <label for="ck2"></label>
//                          <input id="ck3" type="checkbox" />

//               <label for="ck3"></label>
//                            <input id="ck4" type="checkbox" />
//             <label for="ck4"></label>
//                           <input id="ck5" type="checkbox" />
//               <label for="ck5"></label>

//            </div>
//          </div>
         
//        </div>
//      <div class="section">
//      <div class="section__title">
//        Interests
//        </div>
//        <div class="section__list">
//          <div class="section__list-item">
//                   Football, programming.
//           </div>
//        </div>
//      </div>
//      </div>
//   </div>
//  */}

	);
};

export default PDFPresenter;
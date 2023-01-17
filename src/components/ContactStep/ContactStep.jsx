import StepperBar from '../StepperBar/StepperBar'
import ContactForm from './ContactForm/ContactForm'
import ButtonBar from '../ButtonBar/ButtonBar'
import '../ContactStep/ContactStep.css'


const ContactStep = () => {
    
     return (
         <section>
              <div className="title">
            <p>Contact Details</p>
         </div>
 
         <div>
             <StepperBar/>
         </div>
  
         <div>
             <ContactForm/>
         </div>
 
         <div>
             <ButtonBar/>
         </div>
         
         </section>
        
        )
     }

     export default ContactStep
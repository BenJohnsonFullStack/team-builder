import React from 'react';
import { useState } from 'react';

import './App.css';
import Form from './Form'

function App() {
    const initialFormValues = {
        name: "",
        email: "",
        role: "",
    }

    const [teamMembers, setTeamMembers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formError, setFormError] = useState("")

    const updateForm = (inputName, inputValue) => {
        setFormValues({ ...formValues, [inputName]: inputValue })
    }

    const submitForm = () => {
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
          }

        if (!teamMembers.name || !teamMembers.email || !teamMembers.role) {
            setFormError("All fields are required")
        }


    }
    
    return(
        <div className="site-wrapper">
            <h1>Welcome to the Team!</h1>
            { formError &&  <h2 className="error">{formError}</h2> }
            <Form 
                values={formValues}
                update={updateForm}
                submit={submitForm}
            />
        </div>
    )
}

export default App;

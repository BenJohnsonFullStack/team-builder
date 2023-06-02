import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        role: "",
    })

    return (
        <div>
            <form> 
                <label> Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formValues.name}
                        // onChange={change}
                    />
                </label>
                <label> Name:
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        // onChange={change}
                    />
                </label>
                <label htmlFor="role-select">Role:
                    <select name="role" id="role-select">
                        <option value="">----Select Your Role----</option>
                        <option value="ui-designer">UI Designer</option>
                        <option value="ux-engineer">UX Engineer</option>
                        <option value="backend-dev">Back-End Developer</option>
                        <option value="frontend-dev">Front-End Developer</option>
                    </select>

                </label>
            </form>
        </div>
    )
}
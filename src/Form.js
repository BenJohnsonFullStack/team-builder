import React from 'react'
import { useState } from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    

    const onChange = evt => {
        const { name } = evt.target
        const { value } = evt.target
        update(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <form> 
                <label> Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label> Name:
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="role-select">Role:
                    <select value={values.role} name="role" id="role-select" onChange={onChange}>
                        <option value="">----Select Your Role----</option>
                        <option value="ui-designer">UI Designer</option>
                        <option value="ux-engineer">UX Engineer</option>
                        <option value="backend-dev">Back-End Developer</option>
                        <option value="frontend-dev">Front-End Developer</option>
                    </select>
                <input
                    type="submit"
                    value="Submit"
                />
                </label>
            </form>
        </div>
    )
}
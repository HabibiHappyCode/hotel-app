import React, { useState } from 'react'
import '../CSS/Form.css'

// fontawesomes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faTablet } from '@fortawesome/free-solid-svg-icons'

function Form() {

    const [formValue, setFormValue] = useState({
        textArea: '',
        nameValue: '',
        emailValue: '',
        subjectValue: ''
    })

    const handleOnChange = (inputIdentifier, newValue) => {
        setFormValue(prevFormValue => {
            return {
                ...prevFormValue,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <div className='form-container'>

            <h2>
                Get in Touch
            </h2>

            <div className="form">


                <form action="https://getform.io/f/933bb9c0-7fe0-4a56-afa5-6d4ce90fcb5d" method="POST">
                    <textarea name="text"
                        placeholder='Text.....'
                        required
                        value={formValue.textArea}
                        onChange={(event) => handleOnChange('textArea', event.target.value)}>
                    </textarea>

                    <div className="div">
                        <input
                            type="text"
                            placeholder='Enter your name'
                            required
                            value={formValue.nameValue}
                            onChange={(event) => handleOnChange('nameValue', event.target.value
                            )} />

                        <input
                            type="email"
                            placeholder='Email'
                            required
                            value={formValue.emailValue}
                            onChange={(event) => handleOnChange('emailValue', event.target.value
                            )} />

                    </div>

                    <input
                        type="text"
                        placeholder='Enter Subject'
                        required
                        value={formValue.subjectValue} onChange={(event) => handleOnChange('subjectValue', event.target.value
                        )} />

                    <button type='submit' onSubmit={(e) => {
                        e.preventDefault()
                    }}>send</button>
                </form>

                <div className="icons">
                    <div className="icon-one">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>
                            <p>osun state, nigeria</p>
                            <p>ayedun Community</p>
                        </span>
                    </div>

                    <div className="icon-one">
                        <FontAwesomeIcon icon={faTablet} />
                        <span>
                            <p>+123 81 4928 5789</p>
                            <p>mon to fri 9am to 6pm</p>
                        </span>
                    </div>

                    <div className="icon-one">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>
                            <p>abdulmalikiyiola@gmail.com</p>
                            <p>send us your query anytime!</p>
                        </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Form

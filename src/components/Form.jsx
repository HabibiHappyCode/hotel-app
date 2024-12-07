import React, { useState } from 'react'
import '../CSS/Form.css'

// fontawesomes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faTablet } from '@fortawesome/free-solid-svg-icons'

function Form() {


    const [textarea, setTextarea] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')

    const changeTextHandler = (e) => {
        setTextarea(e.target.value)
    }

    const changeNameHandler = (e) => {
        setName(e.target.value)
    }

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const changeSubjectHandler = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className='form-container'>

            <h2>
                Get in Touch
            </h2>

            <div className="form">


                <form  action="https://getform.io/f/933bb9c0-7fe0-4a56-afa5-6d4ce90fcb5d" method="POST">
                    <textarea name="text" placeholder='Text.....' required value={textarea} onChange={changeTextHandler}></textarea>

                    <div className="div">
                        <input type="text" placeholder='Enter your name' required value={name} onChange={changeNameHandler} />
                        <input type="email" placeholder='Email' required value={email} onChange={changeEmailHandler} />
                    </div>

                    <input type="text" placeholder='Enter Subject' required value={subject} onChange={changeSubjectHandler} />

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

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        let hasErrors = false;
        for (let element of e.target) {
            if (element.required) {
                if (!validateFormField(element)) {
                    hasErrors = true;
                }
            }
        }

        if (hasErrors) {
            return;
        }

        const user = { name, email, message };
        const json = JSON.stringify(user);

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json,
        });

        switch (result.status) {
            case 200:
                console.log('Meddelande skickat!');
                clearForm();
                alert('Meddelande skickat!');
                break;
            case 400:
                setErrorMessage('Meddelande ej skickat. Ogiltig data.');
                console.log(`Error: ${await result.text()}`);
                break;
        }
    };

    const clearForm = () => {
        setname('');
        setemail('');
        setmessage('');
    };

    const validateLength = (value, minLength = 2) => {
        return value.length >= minLength;
    };

    const validateEmail = (value) => {
        console.log(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);

    }

    const validateFormField = (element) => {
        const errorMessages = {
            name_required: 'Du måste ange ett förnamn.',
            name_invalid: 'Du måste ange ett giltigt förnamn.',
            email_required: 'Du måste ange en e-postadress.',
            email_invalid: 'Du måste ange en giltig e-postadress.',
            message_required: 'Du måste bifoga ett meddelande.',
            message_invalid: 'Inte giltigt meddelande',
        };

        if (!element.id) {
            console.error(`Element is missing an 'id' attribute.`, element);
            return;
        }

        const { id, type, value } = element;

        const newErrors = { ...errors };

        if (!validateLength(value, 1)) {
            document.getElementById(id).classList.add('error');
            newErrors[id] = errorMessages[`${id}_required`];
        } else {
            let result = false;

            switch (type) {
                case 'text':
                    result = validateLength(value);
                    break;

                case 'email':
                    result = validateEmail(value);
                    break;
                case 'textarea':
                    result = validateLength(value, 5); 
                    break;

                default:
                    console.log('oklart fel, hamnade i default i error switchen.')
                    break;

            }

            if (!result) {
                document.getElementById(id).classList.add('error');
                newErrors[id] = errorMessages[`${id}_invalid`];
            } else {
                document.getElementById(id).classList.remove('error');
                newErrors[id] = ''; 
            }
        }

        setErrors(newErrors); 
          return Object.values(newErrors).every((error) => error === '');
    };

    return (
        <section className="message-form">
            <div className="container">
                <div className="text-styling">
                    <h2>
                        Leave us a message<br />
                        for any information.
                    </h2>
                </div>
                <p className="errorMessage">{errorMessage}</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="text-styling2 p1" requiredv onKeyUp={(e) => validateFormField(e.target)} type="text" value={name} onChange={(e) => setname(e.target.value)} id="name" name="firstName" title="Förnamn" placeholder="Name*" tabIndex="1"
                        />
                        <div className="error-message" id="name-error" style={{ color: 'red' }}>
                            {errors.name}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="text-styling2 p1"
                            required
                            onKeyUp={(e) => validateFormField(e.target)}
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            id="email"
                            name="ePost"
                            title="Epost"
                            placeholder="Email*"
                            tabIndex="2"/>
                        <div className="error-message" id="email-error" style={{ color: 'red' }}>
                            {errors.email}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="message-form text-styling2"
                            required
                            onKeyUp={(e) => validateFormField(e.target)}
                            value={message}
                            onChange={(e) => setmessage(e.target.value)}
                            id="message"
                            name="yourMessage">
                            Your message
                        </textarea>
                        <div className="error-message" id="message-error" style={{ color: 'red' }}>
                            {errors.message}
                        </div>
                    </div>
                    <div className="d-grid">
                        <button className="btn-yellow" type="submit">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;

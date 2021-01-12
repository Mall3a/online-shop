import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

const Contact = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name,
            email,
            phone,
            message
        }
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        console.log(payload);
    }

    return (

        <form onSubmit={handleOnSubmit} className={styles.container}>
            <div className={styles.header}>
                <h1>Contact Us</h1>
                <p>Feel free to drop us a line below!</p>
            </div>
            <div className={styles.body}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <label></label>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>


    )
}

Contact.propTypes = {

}

export default Contact

import React, {useState} from 'react';

const SimpleForm = () => {
    const INITIAL_STATE = {
        email: ''
    };

    const [formData, setFormFata] = useState(INITIAL_STATE);
    const [isInvalid, setIsInvlaid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    // const []
    const handleChange = e => {
        setIsTouched(true)
        const { name, value } = e.target;
        value === '' ? setIsInvlaid(true) : setIsInvlaid(false)

        setFormFata(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { email } = formData;

        if(!isInvalid) {
            alert(`Added you tot he mailing list, ${email}`);
            setFormFata(INITIAL_STATE);
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Simple Form</h3>
            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   value={formData.email}
                   id="email"
                   placeholder="email"
                   onChange={handleChange}
            />
            {isInvalid && isTouched && <span style={{ color: 'red' }}>Email can not be blank!</span>}
            <button>Add me to list!</button>
        </form>
    )
};

export default SimpleForm;
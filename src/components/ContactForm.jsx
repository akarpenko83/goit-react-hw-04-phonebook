import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
    Form,
    FormGroup,
    Button,
} from './Phonebook.styled';

export default function ContactForm(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const formReset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const contact = {
            id: nanoid(),
            name: form.elements.name.value,
            number: Number(form.elements.number.value),
        };
        props.onSubmit(contact);
        formReset();
        form.reset();
    };

    const handleChange = evt => {
        const event = evt.currentTarget.name;
        switch (event) {
            case 'name':
                setName(evt.currentTarget.value.trim());
                console.log(name);
                break;
            case 'number':
                setNumber(evt.currentTarget.value.trim());
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    Name
                    <input
                        value={name}
                        placeholder="John Doe"
                        onChange={handleChange}
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    Number
                    <input
                        value={number}
                        type="tel"
                        placeholder="050-000-00-00"
                        onChange={handleChange}
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormGroup>
                <Button type="submit">Add contact</Button>
            </Form>
        </>
    );
}

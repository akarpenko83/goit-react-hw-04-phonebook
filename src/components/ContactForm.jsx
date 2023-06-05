import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
    Form,
    FormGroup,
    Button,
} from './Phonebook.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const contact = {
            id: nanoid(),
            name: form.elements.name.value,
            number: Number(form.elements.number.value),
        };
        this.props.onSubmit(contact);
        this.formReset();
        form.reset();
    };

    handleChange = evt => {
        this.setState({ name: evt.target.value.trim() });
    };

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        Name
                        <input
                            value={this.state.name}
                            placeholder="John Doe"
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        Number
                        <input
                            type="tel"
                            placeholder="050-000-00-00"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </FormGroup>
                    <Button type="submit">
                        Add contact
                    </Button>
                </Form>
            </>
        );
    }
}

import React, { Component } from 'react';
import { Container } from './Phonebook.styled';
import INITIAL_CONTACTS from './initContacts.json';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { SectionName } from './Phonebook.styled';
import background from '../utils/background.js';
class App extends Component {
    state = {
        contacts: INITIAL_CONTACTS,
        filter: '',
    };
    componentDidMount() {
        let storedContacts = JSON.parse(
            localStorage.getItem('contactList'),
        );

        if (storedContacts) {
            this.setState({
                contacts: storedContacts,
            });
        }
    }
    componentDidUpdate(prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contactList',
                JSON.stringify(this.state.contacts),
            );
        }
    }
    onSubmit = contact => {
        console.log(contact);
        if (
            this.state.contacts.find(
                arr => arr.name === contact.name,
            )
        ) {
            alert(
                `${contact.name} is already in the contact list`,
            );
            return;
        }
        this.setState(prevState => ({
            contacts: [...this.state.contacts, contact],
        }));
    };

    handleRemoveContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    handleChangeFilter = evt => {
        this.setState({ filter: evt.target.value });
    };

    getFilteredContacts = () => {
        const normalizedFilter =
            this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(normalizedFilter),
        );
    };
    render() {
        window.onload = background;
        return (
            <Container>
                <SectionName>Phonebook</SectionName>
                <ContactForm onSubmit={this.onSubmit} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onChange={this.handleChangeFilter}
                />
                <ContactList
                    contacts={this.getFilteredContacts()}
                    onRemoveContact={
                        this.handleRemoveContact
                    }
                />
            </Container>
        );
    }
}
export default App;

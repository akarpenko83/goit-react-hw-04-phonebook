import { useState, useEffect } from 'react';
import { Container } from './Phonebook.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { SectionName } from './Phonebook.styled';
import background from '../utils/background.js';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
    const [contacts, setContacts] = useState(() => {
        if (localStorage.getItem('contactList')) {
            return JSON.parse(
                localStorage.getItem('contactList'),
            );
        } else {
            return [];
        }
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        contacts &&
            localStorage.setItem(
                'contactList',
                JSON.stringify(contacts),
            );
    }, [contacts]);

    useEffect(() => {
        window.onload = background;
    }, []);

    const onSubmit = contact => {
        if (!contacts) {
            toast.success(
                `${contact.name} added to your contact list`,
            );
            return setContacts([contact]);
        }
        if (
            contacts.find(arr => arr.name === contact.name)
        ) {
            toast.error(
                `${contact.name} is already in the contact list`,
            );

            return;
        }
        toast.success(
            `${contact.name} added to your contact list`,
        );
        setContacts(prevState => {
            return [...prevState, contact];
        });
    };

    const handleRemoveContact = contactId => {
        toast.success(
            `Successfully deleted from contact list`,
        );
        setContacts(prevState => {
            return prevState.filter(
                contact => contact.id !== contactId,
            );
        });
    };

    const handleChangeFilter = evt => {
        setFilter(evt.target.value);
    };

    const getFilteredContacts = () => {
        return contacts.filter(contact =>
            contact.name
                .toLowerCase()
                .includes(filter.toLowerCase()),
        );
    };
    return (
        <Container>
            <Toaster />
            <SectionName>Phonebook</SectionName>
            <ContactForm onSubmit={onSubmit} />
            <h2>Contacts</h2>
            {contacts && (
                <Filter
                    value={filter}
                    onChange={handleChangeFilter}
                />
            )}
            {contacts && (
                <ContactList
                    contacts={getFilteredContacts()}
                    onRemoveContact={handleRemoveContact}
                />
            )}
        </Container>
    );
};
export default App;

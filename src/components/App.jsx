import { useState, useEffect } from 'react';
import { Container } from './Phonebook.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { SectionName } from './Phonebook.styled';
import background from '../utils/background.js';

const App = () => {
    const [contacts, setContacts] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const localStorageContacts =
            localStorage.getItem('contactList');
        if (localStorageContacts) {
            setContacts(
                JSON.parse(
                    localStorage.getItem('contactList'),
                ),
            );
        }
    }, []);

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
        console.log(contact);
        if (!contacts) {
            return setContacts([contact]);
        }
        if (
            contacts.find(arr => arr.name === contact.name)
        ) {
            alert(
                `${contact.name} is already in the contact list`,
            );
            return;
        }

        setContacts(prevState => {
            return [...prevState, contact];
        });
    };

    const handleRemoveContact = contactId => {
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

/*---------------------------------------------------------------- Component Methods----------------------------------------------------------------
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
*/

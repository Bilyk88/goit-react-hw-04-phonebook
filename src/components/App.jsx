import { Component } from 'react';
import { ContactList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

const storageKey = 'saved-contacts';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  addContact = newContact => {
    this.setState(prevState => {
      return prevState.contacts.some(
        contact => contact.name === newContact.name
      )
        ? alert(`${newContact.name} is already in contacts.`)
        : {
            contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
          };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          maxWidth: '460px',
          padding: '15px',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {filterContacts.length > 0 && (
          <ContactList
            contacts={filterContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

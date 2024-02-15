import { useEffect, useState } from 'react';
import { ContactList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

const storageKey = 'saved-contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const updateFilter = newFilter => {
    setFilter(newFilter);
  };

  const addContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

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
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onUpdateFilter={updateFilter} />
      {filterContacts.length > 0 && (
        <ContactList contacts={filterContacts} onDelete={deleteContact} />
      )}
    </div>
  );
};

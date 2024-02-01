import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phonenumber: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/getContacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleAddContact = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/users/create', newContact);
      fetchContacts();
      setNewContact({ name: '', phonenumber: '' });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.post(`http://localhost:8000/api/users/deleteContact/${id}`);
      fetchContacts(); // Re-fetch contacts to update the list
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="contacts-container">
      <h1>All Contacts</h1>
      <div className="add-contact-form">
        <h2>Add Contact</h2>
        <form onSubmit={handleAddContact}>
          <input
            name="name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            placeholder="Name"
            required
            className="input-field"
          />
          <input
            name="phonenumber"
            value={newContact.phonenumber}
            onChange={(e) => setNewContact({ ...newContact, phonenumber: e.target.value })}
            placeholder="Phone Number"
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact._id} className="contact-item">
            <div className="contact-details">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-phonenumber">{contact.phonenumber}</span>
            </div>
            <div className="contact-actions">
              <button
                onClick={() => handleDeleteContact(contact._id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;

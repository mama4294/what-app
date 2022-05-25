import { useState, createContext } from "react";

export const defaultContactValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

export const ContactsContext = createContext({
  contacts: [],
  setContacts: () => null,
  addContact: () => null,
  setContacts: () => null,
});

const defaultContacts = [
  {
    id: 1,
    firstName: "Genny",
    lastName: "Bennett",
    phoneNumber: "123-456-7890",
  },
  {
    id: 2,
    firstName: "Chris",
    lastName: "Hafrel",
    phoneNumber: "123-456-7890",
  },
  {
    id: 3,
    firstName: "Jessa",
    lastName: "Wright",
    phoneNumber: "123-456-7890",
  },
];

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(defaultContacts);

  const addContact = (contact) => {
    const id = Math.max(...contacts.map((contact) => contact.id)) + 1;
    // const phoneNumber = "123-456-7890";
    const newContact = { ...contact, id };
    console.log(newContact);
    setContacts([...contacts, newContact]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const value = { contacts, setContacts, addContact, removeContact };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

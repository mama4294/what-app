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
  updateContact: () => null,
});

const defaultContacts = [
  {
    id: 1,
    firstName: "Genny",
    lastName: "Bennett",
    birthday: new Date("12/18/1994"),
  },
  {
    id: 2,
    firstName: "Chris",
    lastName: "Haferl",
    birthday: new Date("6/6/1995"),
  },
  {
    id: 3,
    firstName: "Jessa",
    lastName: "Wright",
    birthday: new Date("7/10/1994"),
  },
];

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(defaultContacts);

  const addContact = (contact) => {
    const id = Math.max(...contacts.map((contact) => contact.id)) + 1;
    const newContact = { ...contact, id };
    console.log(newContact);
    setContacts([...contacts, newContact]);
  };

  const updateContact = (contact) => {
    alert(JSON.stringify(contact));
    // setContacts(
    //   contacts.map((c) => (c.id === contact.id ? { ...contact } : c))
    // );
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const value = {
    contacts,
    setContacts,
    addContact,
    removeContact,
    updateContact,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

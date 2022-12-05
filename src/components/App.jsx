
import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './Form/Form';
import { Filter } from './Filter/Filter';
import { Phonebook } from '../components/ContactList/ContactList.styled';




const useLocalStorage = (key, defaultValue) => {
  const [state, setState]= useState(()=>{
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  })
  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []) ;
  const [filter, setFilter] = useState('');

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const formSubmitHandler = data => {
    const { name } = data;
    if (contacts.length>0){
      let nameLIst = contacts.map(contact => contact.name);
      if (nameLIst.includes(name.toLowerCase())) {
        return alert(`${name} is already in your contacts.`);
      } else {
        setContacts([data, ...contacts]);
      }
    }else {
      setContacts([data, ...contacts]);
    }

   

  
  };
  const handleContactRemove = event => {
    const contactToRemove = event.currentTarget.id;
    setContacts(contacts.filter(contact => contact.id !== contactToRemove));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

   if(contacts){

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }else{
    return contacts
  }


  };
  const vizibleContacts = getVisibleContacts();

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onSearchContact={changeFilter} />
      <ContactList
        contactsList={vizibleContacts}
        onRemove={handleContactRemove}
      />
    </Phonebook>
  );
}
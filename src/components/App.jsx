import { Component } from 'react';
 import { ContactList } from './ContactList/ContactList';
 import ContactForm from './Form/Form';
 import { Filter } from './Filter/Filter';
   import { Phonebook } from '../components/ContactList/ContactList.styled'

 export class App extends Component {
   state = {
     contacts: [],
     filter: '',
   };
   changeFilter = event => {
     this.setState({ filter: event.currentTarget.value });
   };

   formSubmitHandler = data => {
     const nameLIst = this.state.contacts.map(el => el.name.toLowerCase());
     const { name } = data;
     if (nameLIst.includes(name.toLowerCase())) {
       return alert(`${name} is already in your contacts.`);
     } else {
       this.setState(({ contacts }) => ({
         contacts: [data, ...contacts],
       }));
     }
   };
   handleContactRemove = event => {
     const contactToRemove = event.currentTarget.id;
     this.setState(prevState => ({
       contacts: prevState.contacts.filter(
         contact => contact.id !== contactToRemove
       ),
     }));
   };
   getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const vizibleContacts = this.getVisibleContacts();
    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onSearchContact={this.changeFilter} />
        <ContactList
          contactsList={vizibleContacts}
          onRemove={this.handleContactRemove}
        />
      </Phonebook>
    );
  }
}
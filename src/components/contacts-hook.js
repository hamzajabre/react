

/*
import React, { useState } from "react";
function ContactsHook(){
    const[contact,setName]=useState(['john','marc','eric']);
    const[contactInfo,setContactInfo]=useState({name:'',email:''});
   
   const handleChange= (e) =>{
    setContactInfo({...contactInfo,})
   }
    const handleSubmitt= (e) =>{
        e.preventDefault();
        setContactInfo({name:'',email:''})

    }
return(
    <>
    <div>
    {contact.map(nom=>(
        <h5>{nom}</h5>
    )
        ) }
    <div/>
    </div>
    <input type='text' placeholder='ex:john'value={contactInfo.name} onChange={e=>
    setContactInfo(e.target.value)}></input>
    <input type='text' placeholder='ex:john@exemple.com'value={contactInfo.email} onChange={e=>
    setContactInfo(e.target.value)}></input>
    <button onClick={handleSubmitt}>ajouter</button>
    </>
)

}
export default ContactsHook;
*/

import React, { useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Clayton", email: "clayton@example.com" },
    { id: 2, name: "Tarzan", email: "tarzan@example.com" },
    { id: 3, name: "Jane", email: "jane@example.com" },
  ]);

  const [newContactName, setNewContactName] = useState("");
  const [newContactEmail, setNewContactEmail] = useState("");

  const handleNameChange = (event) => {
    setNewContactName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewContactEmail(event.target.value);
  };

  const handleAddContact = () => {
    const newContact = {
      id: Math.max(...contacts.map((contact) => contact.id)) + 1,
      name: newContactName,
      email: newContactEmail,
    };
    setContacts([...contacts, newContact]);
    setNewContactName("");
    setNewContactEmail("");
  };

  return (
    <div>
      <h1>Liste de contact</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Ajouter un nouveau contact</h2>
      <div>
        <label htmlFor="nameInput">Nom:</label>
        <input
          type="text"
          id="nameInput"
          value={newContactName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          value={newContactEmail}
          onChange={handleEmailChange}
        />
      </div>
      <button onClick={handleAddContact}>Ajouter</button>
    </div>
  );
}

export default ContactList;
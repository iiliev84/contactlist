import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error("Failed to fetch contact:", error);
          }
        }
    
        fetchContact();
      }, [selectedContactId]);

    return (
    <div className="contact">
    {contact ? (
      <div>
      <h1>Contact Details</h1>
      <h2>{contact.name}</h2>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address.street}, {contact.address.city}, {contact.address.zipcode}</p>
      <p>Company: {contact.company.name}</p>
      <p>Website: {contact.website}</p>
    </div>
    ) : (
      ""
    )}
     <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
    
  );
}

export default SelectedContact
import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact";
export default function ContactList() {
  const [contacts, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://cryptic-reaches-70949.herokuapp.com/")
      .then(async (res) => {
        await setState(res.data);
      });
  }, []);

  const deleteContact = (id) => {
    axios
      .delete("https://cryptic-reaches-70949.herokuapp.com/" + id)
      .then((res) => {
        console.log(res.data);
        setState(contacts.filter((el) => el._id !== id));
      });
  };

  if (contacts.length === 0) {
    return <div>Loading!!</div>;
  } else {
    return contacts.map((currentContact) => (
      <Contact
        currentContact={currentContact}
        deleteContact={deleteContact}
        key={currentContact._id}
      />
    ));
  }
}

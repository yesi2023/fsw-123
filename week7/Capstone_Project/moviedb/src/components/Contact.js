import React from "react";
import { useState } from "react";

const initInputs = {
    Name: "", 
    Email: "", 

}
function Contact({}) {
    const [contact, setContact] = useState(initInputs);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    setContact ({
        Name: name,
        Email: email
    })
}    
  return (
    <section>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      <button onClick={handleSubmit}>Submit</button>
      </form>
    <div>
{contact.Name.length > 0?

<h1>Hello, {contact.Name} I appreciate  we will email a your list of your favorite {contact.Email}ghi</h1>
:
""
}

    </div>

    </section>
  );
}

export default Contact;

import { useState, useRef, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState([]);
  const firstName = useRef(null);
  const lastName = useRef(null);

  console.log(formData);


    function handleSubmit(e) {
      e.preventDefault();

      const newNote = {
        id: Date.now(),
        firstName: firstName.current.value,
        lastName: lastName.current.value
      }

      setFormData(prevStatus => {
        return [
          newNote,
          ...prevStatus
        ]
      })
 

    }

    useEffect(() => {
      localStorage.setItem('myNotes', JSON.stringify(formData))
    }, [formData])

    return (
      <div>
        <h1>This will be saved on localStorage</h1>
        <form >
          <input
            type="text"
            placeholder="Enter your First Name"
            name="firstName"
            ref={firstName}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lastName"
            ref={lastName}
          />
          <br />
          <textarea
            type="text"
            placeholder="Enter your text"
            name="text"

          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }

;
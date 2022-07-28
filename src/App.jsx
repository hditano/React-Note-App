import { useState, useRef, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('myNotes')) || []);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const text = useRef(null);


    function handleSubmit(e) {
      e.preventDefault();

      const newNote = {
        id: Date.now(),
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        text: text.current.value
      }

      setFormData(prevStatus => {
        return [
          newNote,
          ...prevStatus
        ]
      })
    }

    function renderData() {
      for(let i = 0; i < formData.length; i++) {
        return (
          <div>
            <h1>{formData[i].firstName}</h1>
          </div>
        )
      }
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
            ref={text}

          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        {formData ? renderData() : ''}
      </div>
    );
  }

;
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {

  const [success, setSuccess] = useState("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      department: (form.elements.namedItem("department") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value
    };


    try {

      const response = await fetch(
        "http://localhost:5001/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );


      const result = await response.json();


      if(result.success){

        setSuccess(
          "Administration will respond within 6 hours."
        );

        form.reset();

      }

    } catch(error){

      console.log(error);

    }

  };


  return (

    <div className="contact-page">

      <h1>Contact Administration</h1>


      <form onSubmit={sendMessage}>


        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          required
        />


        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />


        <select
          name="department"
          required
        >

          <option value="">
            Select Department
          </option>

          <option value="CSE">
            Computer Science Engineering (CSE)
          </option>

          <option value="AIML">
            Artificial Intelligence & Machine Learning (AIML)
          </option>

          <option value="DS">
            Computer Science Engineering - Data Science (CSE-DS)
          </option>

          <option value="IT">
            Information Technology (IT)
          </option>

          <option value="ECE">
            Electronics and Communication Engineering (ECE)
          </option>

          <option value="EEE">
            Electrical and Electronics Engineering (EEE)
          </option>

          <option value="ME">
            Mechanical Engineering (ME)
          </option>

          <option value="CE">
            Civil Engineering (CE)
          </option>

          <option value="AI">
            Artificial Intelligence (AI)
          </option>

          <option value="CS">
            Computer Science Engineering (CS)
          </option>

          <option value="MBA">
            Master of Business Administration (MBA)
          </option>

          <option value="MCA">
            Master of Computer Applications (MCA)
          </option>


        </select>


        <textarea
          name="message"
          placeholder="Enter Your Message"
          required
        />


        <button type="submit">
          Send Message
        </button>


      </form>


      {
        success &&
        <p className="success">
          {success}
        </p>
      }


    </div>

  );
}


export default Contact;
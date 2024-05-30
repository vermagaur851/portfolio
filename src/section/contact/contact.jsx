import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import styles from "./contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wait,setWait] = useState(false);

  const Submit = async (e) => {
    e.preventDefault();
    try {
      setWait(true)
      await emailjs.send("service_w8jwf59", "template_l5eoiab", {
        name: name,
        message: message,
        email: email,
      },{
        publicKey: "ZReliEwfqjO0WfCwC"
      });
      setName("");
      setEmail("");
      setMessage("");
      setWait(false)
      toast.success("message sent successfully")

    } catch (error) {
      setWait(true)
      toast.error("Something went wrong");
      setWait(false)
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={Submit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            readOnly={wait}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            readOnly={wait}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={email}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            readOnly={wait}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            placeholder="Message"
            required
            value={message}
          ></textarea>
        </div>
        <input readOnly={wait} type="submit" value="Submit" className="hover btn" />
      </form>
      <ToastContainer/>
    </section>
  );
}

export default Contact;

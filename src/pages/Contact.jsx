import "./Contact.css";

const contacts = [
  { label: "Email", value: "streetbiteshub@gmail.com" },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "Address", value: "Near City Market, New Delhi" },
];

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-heading">
          <p>Contact</p>
          <h1>Get in touch with our team</h1>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <p>
              We are building this project step by step. Right now, this page shows
              the basic contact section for our website idea. Later we can connect it
              to a backend and make it fully functional.
            </p>

            <div className="contact-cards">
              {contacts.map((item) => (
                <div className="contact-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here"
            ></textarea>

            <button type="button">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;

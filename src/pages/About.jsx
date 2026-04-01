import "./About.css";

const highlights = [
  {
    title: "Easy for stall owners",
    text: "Street food vendors can add their stall name, menu items, and location in one place.",
  },
  {
    title: "Helpful for customers",
    text: "Users can quickly find affordable food stalls near them instead of searching randomly.",
  },
  {
    title: "Support local business",
    text: "Our idea helps small food sellers get more visibility and regular customers.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <div className="about-heading">
          <p>About Us</p>
          <h1>Why we want to build this website</h1>
        </div>

        <div className="about-grid">
          <div className="about-box">
            <p>
              Street food is affordable, quick, and loved by many people. But many
              small vendors do not have any digital presence, so they miss chances to
              get new customers.
            </p>
            <p>
              Our website will create a connection between local street food stall
              owners and people who want budget-friendly food. This can support small
              businesses and make food discovery easier.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item) => (
              <article className="about-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

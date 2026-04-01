import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-text">
          <p className="home-tag">Affordable food, local support</p>
          <h1>Helping street food stalls connect with more nearby customers.</h1>
          <p>
            Our idea is to build a website where street food stall owners can add
            their menu and location, and customers can easily find affordable food
            near them.
          </p>
          <Link className="home-button" to="/about">
            Read About Project
          </Link>
        </div>

        <div className="home-card">
          <h2>What this website will do</h2>
          <ul>
            <li>Let small stall owners register their stall</li>
            <li>Show menu items and prices</li>
            <li>Help users find nearby food stalls</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;

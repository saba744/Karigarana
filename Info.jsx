import React from "react";
import "./read.css";
import sringeriImg from "./assets/srinegeri.jpg";

function Read() {
  return (
    <section className="read-page">
      {/* HERO IMAGE */}
      <div className="read-hero">
        <img src={sringeriImg} alt="Sringeri Temple" />
      </div>

      {/* CONTENT */}
      <div className="read-content">
        <span className="read-tag">MONUMENTS</span>

        <h1>Sringeri Temple Complex: A Haven of Tranquillity</h1>

        <p className="read-meta">26 Mar · 12 mins read · Ganesh Iyer</p>

        <p>
          Nestled along the serene banks of the Tunga River, the Sringeri Sharada
          Peetham stands as a timeless symbol of spiritual wisdom and calm.
          Established by Adi Shankaracharya in the 8th century, this sacred site
          marks the origin of the Advaita Vedanta tradition.
        </p>

        <p>
          The temple complex is dedicated to Goddess Sharada, the deity of
          knowledge and learning. Surrounded by lush greenery and the soothing
          sounds of flowing water, Sringeri offers visitors a rare sense of inner
          peace and reflection.
        </p>

        <p>
          Over centuries, the matha has preserved ancient Vedic traditions,
          rituals, and Sanskrit scholarship. Scholars from across India once
          travelled to Sringeri to study philosophy, scriptures, and metaphysics.
        </p>

        <p>
          Today, the Sringeri Temple Complex continues to inspire seekers,
          pilgrims, and travellers alike — a place where spirituality,
          architecture, and nature come together in perfect harmony.
        </p>
      </div>
    </section>
  );
}

export default Read;

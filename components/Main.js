import React from "react";

export default function Main() {
    return (
        <div className="main">
            <h1 className="main--title">Mariana Molina</h1>
            <h3 className="main--subtitle">Fullstack Developer</h3>
            <div className="main--button-wrapper">
                <a href="mailto:marianamolinadev@gmail.com">
                    <button className="button--secondary">
                        βοΈ
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/mariana-molina-dev/">
                    <button className="button--primary">
                        <img src="/images/linkedin.png" width="16px" height="16px" />
                        LinkedIn
                    </button>
                </a>
            </div>
            <div className="section">
                <h2>About me</h2>
                <p>I am a fullstack developer with proven experience developing and designing responsive websites. I try to keep up with best practices and I am always looking for new things to learn.</p>
            </div>
            <div className="section">
                <h2>Interests</h2>
                <p>πΊπΎ Uruguayan</p>
                <p>π² Board Gamer</p>
                <p>π€ TV series geek</p>
                <p>π§ Coffee & mate fanatic</p>
                <p>π + π = β€οΈ Pizza? with pineapple, please</p>
            </div>
        </div>
    )
}
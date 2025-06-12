import React from 'react';
import './index.css';
import logo from '/bugblaze.png';
import { Link } from 'react-router-dom';

export default function Landing() {
return (
    <div className="landing-container">
        <header className="hero">
            <div className="landing-logo">
                <img src={logo} alt="BugBlaze Logo" className="hero-logo" />
                <h1 className="landing-title">BugBlaze</h1>
            </div>
            <p className="hero-tagline">
                <span className="highlight">Your terminal’s new debugging assistant.</span><br />
                Catch bugs. Understand fast. Powered by AI.
            </p>
            <div className="hero-buttons">
                <a href="https://www.npmjs.com/package/bugblaze" target="_blank" rel="noreferrer" className="btn">Install Now</a>
                <a href="https://github.com/MatthewTheCoder1218/bugblaze" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
            </div>
            <a href="https://www.npmjs.com/package/bugblaze" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/npm/dm/bugblaze?color=brightgreen&label=BugBlaze%20Users&style=for-the-badge" className='badge' alt="npm downloads" />
            </a>
        </header>

        <section className="features-section">
            <h2>🚀 Why BugBlaze?</h2>
            <div className="features-list">
                <div className="feature-card">
                    <h3>🧠 AI-Powered Error Explanations</h3>
                    <p>Understand bugs instantly with smart, human-like summaries.</p>
                </div>
                <div className="feature-card">
                    <h3>🧪 Logic & Runtime Issue Detection</h3>
                    <p>Catch hidden bugs that don’t break syntax but break your app.</p>
                </div>
                <div className="feature-card">
                    <h3>⚡ Fast & Lightweight</h3>
                    <p>Zero bloat. CLI-first. Works with your favorite editors.</p>
                </div>
                <div className="feature-card">
                    <h3>🔒 Privacy First</h3>
                    <p>Your code stays local. Only errors are sent for analysis (if you opt in).</p>
                </div>
            </div>
            <p className="coming-soon">More features coming soon. Help us prioritize by leaving feedback!</p>
        </section>

        <section className="cta-section">
            <h2>Ready to squash bugs faster?</h2>
            <Link to="/docs" className="btn">Read the Docs</Link>
        </section>

        <footer>
            © {new Date().getFullYear()} BugBlaze. Built by Little Prince.
        </footer>
    </div>
);
}
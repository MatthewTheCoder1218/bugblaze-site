import React, { useRef } from 'react';
import './index.css';
import logo from '/bugblaze.png'
import { showToast } from './utils/toast';

export default function App() {
  const feedbackRef = useRef();

  const handleFeedbackSubmit = () => {
    const value = feedbackRef.current.value.trim();
    if (!value) {
      showToast('Please enter your feedback before submitting.');
      return;
    }
    // Here you would typically send the feedback to your server or API
    showToast('Thank you for your feedback!', 'success');
    feedbackRef.current.value = ''; // Clear the textarea after submission
  }

  return (
    <div className="container">
      <header>
        <h1><img src={logo} alt="bugblaze logo" className="logo" />BugBlaze</h1>
        <p className="subtitle">Your terminal’s new debugging assistant.</p>
        <p className="tagline">Catch bugs. Understand fast. Powered by AI.</p>
        <div className="buttons">
          <a href="https://www.npmjs.com/package/bugblaze" target="_blank" rel="noreferrer" className="btn">Install Now</a>
          <a href="https://github.com/MatthewTheCoder1218/bugblaze" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
        </div>
        <a href="https://www.npmjs.com/package/bugblaze" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/npm/dm/bugblaze?color=brightgreen&label=BugBlaze%20Users&style=for-the-badge" className='badge h-[18px]' />
        </a>
      </header>

      <section>
        <h2>🚀 Core Features</h2>
        <ul className="features">
          <li>
            <strong>🧠 AI-Powered Error Explanations:</strong><br />
            Understand bugs instantly with smart, human-like summaries.
          </li>
          <li>
            <strong>🧪 Logic & Runtime Issue Detection:</strong><br />
            Catch hidden bugs that don’t break syntax but break your app.
          </li>
        </ul>

        <p className="coming-soon">More features coming soon. Help us prioritize by leaving feedback!</p>

        <hr />

        <h2>📦 Installation</h2>
        <p>Install globally with npm:</p>
        <pre>npm install -g bugblaze</pre>

        <p>Then run:</p>
        <pre>bugblaze-init</pre>

        <h2>🧪 Usage</h2>
        <pre>
bugblaze analyze path/to/your/file.js{'\n'}
bugblaze fun path/to/your/file.js --explain
        </pre>

        <h2>🔐 Environment Setup</h2>
        <p>Set your Groq API key to enable AI features:</p>
        <pre className="code-block">
Linux / Mac:{'\n'}
export GROQ_API_KEY="your-api-key"{'\n\n'}
Windows (PowerShell):{'\n'}
$env:GROQ_API_KEY="your-api-key"{'\n\n'}
Windows (CMD):{'\n'}
set GROQ_API_KEY=your-api-key
        </pre>
        <p>
          Get your key from <a href="https://console.groq.com" target="_blank" rel="noreferrer">Groq Console</a>.
        </p>

        <h2>📚 Supported Languages</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>JSX / TSX</li>
        </ul>

        <h2>⚙️ Requirements</h2>
        <ul>
          <li><strong>Node.js:</strong> v18.0.0 or higher</li>
          <li><strong>npm:</strong> Included with Node.js</li>
          <li><strong>Global Installation:</strong> Use <code>-g</code> flag</li>
        </ul>

        <h2>🛠️ Troubleshooting</h2>
        <ol>
          <li>Check install: <code>npm list -g bugblaze</code></li>
          <li>Verify Node.js global bin path</li>
          <li>Ensure PATH includes npm global bin dir</li>
        </ol>

        <h2>📄 License</h2>
        <p>This project is licensed under the ISC License.</p>

        <h2>👤 Author</h2>
        <p><strong>Matthew Michael</strong> (aka Little Prince)</p>
      </section>

        <h2>💬 Feedback</h2>
        <p>
          Found an issue or want to share thoughts? <br />
          <a href="https://github.com/MatthewTheCoder1218/bugblaze/issues" target="_blank" rel="noreferrer">Open an issue on GitHub</a> or leave feedback below:
        </p>
        <div className='feedback-container'>
          <textarea ref={feedbackRef} placeholder='Your feedback...' className='form'></textarea>
          <button onClick={handleFeedbackSubmit} className='button'>Send</button>
        </div>

      <footer>
        © {new Date().getFullYear()} BugBlaze. Built by Little Prince.
      </footer>
    </div>
  );
}

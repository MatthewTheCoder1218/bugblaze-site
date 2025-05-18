import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>BugBlaze</h1>
        <p className="subtitle">Catch bugs. Understand fast.</p>
        <div className="buttons">
          <a href="https://www.npmjs.com/package/bugblaze" target="_blank" rel="noreferrer">Install Now</a>
          <a href="https://github.com/MatthewTheCoder1218/bugblaze" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <section>
        <p>
          BugBlaze is a command-line tool that helps developers find and fix bugs in their code using AI. It supports multiple programming languages, including JavaScript, TypeScript, Python, and Java, and provides AI-powered insights to improve your code.
        </p>

        <hr />

        <h2>🚀 Features</h2>
        <ul>
          <li><strong>Syntax Error Detection:</strong> Quickly identify syntax errors in your code</li>
          <li><strong>Logical Issue Analysis:</strong> Analyze your code for runtime or logical issues</li>
          <li><strong>AI-Powered Explanations:</strong> Get concise explanations of errors and suggestions for fixes</li>
          <li><strong>Multi-Language Support:</strong> Works with JavaScript, TypeScript, Python, Java, and more</li>
        </ul>

        <hr />

        <h2>📦 Installation</h2>
        <p>Install globally with npm:</p>
        <pre>npm install -g bugblaze</pre>
        <p>After installation, run:</p>
        <pre>bugblaze-init</pre>
        <p>to check if you're ready to use the package.</p>

        <h2>🧪 Usage</h2>
        <pre>
bugblaze analyze path/to/your/file.js{'\n'}
bugblaze fun path/to/your/file.js --explain
        </pre>

        <h2>🔐 Environment Variables</h2>
        <p>BugBlaze requires a <code>GROQ_API_KEY</code> to enable AI features:</p>
        <pre className="code-block">
Linux / Mac:{'\n'}
export GROQ_API_KEY="your-api-key"{'\n\n'}
Windows (PowerShell):{'\n'}
$env:GROQ_API_KEY="your-api-key"{'\n\n'}
Windows (CMD):{'\n'}
set GROQ_API_KEY=your-api-key
        </pre>
        <p>
          Get your key from <a href="https://console.groq.com" target="_blank" rel="noreferrer">Groq Console</a>
        </p>

        <h2>📚 Supported Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>JSX / TSX</li>
        </ul>

        <h2>⚙️ Requirements</h2>
        <ul>
          <li><strong>Node.js:</strong> v18.0.0 or higher</li>
          <li><strong>npm:</strong> Included with Node.js</li>
          <li><strong>Global Installation:</strong> Must use <code>-g</code> flag</li>
        </ul>

        <h2>🛠️ Troubleshooting</h2>
        <ol>
          <li>Check installation: <code>npm list -g bugblaze</code></li>
          <li>Verify Node.js global package location</li>
          <li>Ensure PATH includes npm global bin directory</li>
        </ol>

        <h2>📄 License</h2>
        <p>This project is licensed under the ISC License.</p>

        <h2>👤 Author</h2>
        <p><strong>Matthew Michael</strong></p>

        <h2>💬 Feedback</h2>
        <p>
          Found an issue? Want to contribute? Submit an issue or PR on{' '}
          <a href="https://github.com/MatthewTheCoder1218/bugblaze" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} BugBlaze. Built by Little Prince.
      </footer>
    </div>
  );
}

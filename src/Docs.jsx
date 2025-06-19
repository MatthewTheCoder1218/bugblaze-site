import React from 'react';
import logo from '/bugblaze.png';
import { Link } from 'react-router-dom';

export default function Docs() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      {/* Top nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img src={logo} alt="BugBlaze Logo" className="w-8 h-8" />
          <span className="font-bold text-lg tracking-tight">BugBlaze Docs</span>
          <span className="ml-2 text-xs text-green-400 bg-gray-800 px-2 py-1 rounded">Beta</span>
        </div>
        <Link to="/" className="text-gray-400 hover:text-green-400 transition">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <section className="w-full bg-black px-0 py-20 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-8">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-white">
              BugBlaze <span className="text-green-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Everything you need to get started, use, and master BugBlaze.<br />
              <span className="text-green-400">Fast, AI-powered, and secure.</span>
            </p>
            <div className="bg-[#18181b] rounded-lg px-6 py-4 inline-block text-green-400 font-mono text-lg mb-2">
              $ npm install -g bugblaze
            </div>
          </div>
        </div>
      </section>

      {/* Main Docs */}
      <main className="px-6 md:px-10 py-16 max-w-5xl mx-auto w-full">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-400">📦 Installation</h2>
          <p className="text-gray-300 mb-4">Install BugBlaze globally using npm:</p>
          <pre className="bg-[#111111] border border-green-500 rounded-lg p-4 overflow-x-auto text-green-400 text-base">
            <code>npm install -g bugblaze</code>
          </pre>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-400">🚀 Usage</h2>
          <p className="text-gray-300 mb-2">Analyze a file for syntax issues:</p>
          <pre className="bg-[#111111] border border-green-500 rounded-lg p-4 overflow-x-auto text-green-400 text-base">
            <code>bugblaze fun app.js</code>
          </pre>
          <p className="text-gray-300 mt-4">Analyze for logical/runtime issues:</p>
          <pre className="bg-[#111111] border border-green-500 rounded-lg p-4 overflow-x-auto text-green-400 text-base">
            <code>bugblaze analyze app.js</code>
          </pre>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-400">⚙️ Commands</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-3">
            <li><code className="text-green-400">bugblaze fun app.js</code> – Check for syntax errors (JS, TS, Python, Java)</li>
            <li><code className="text-green-400">bugblaze analyze app.js</code> – Find logic and runtime issues</li>
            <li><code className="text-green-400">bugblaze generate codebase "project description"</code> – Generate new project code structure</li>
            <li><code className="text-green-400">bugblaze generate tests utils/helpers.js</code> – Generate unit tests</li>
            <li><code className="text-green-400">bugblaze generate docs utils/helpers.js</code> – Generate documentation</li>
            <li><code className="text-green-400">bugblaze generate refactor utils/helpers.js</code> – Suggest refactor improvements</li>
            <li><code className="text-green-400">bugblaze health-scan</code> – Scan full codebase</li>
            <li><code className="text-green-400">bugblaze mentor app.js</code> – Line-by-line AI mentoring</li>
            <li><code className="text-green-400">bugblaze chat</code> – Interactive chat with the AI assistant</li>
            <li><code className="text-green-400">bugblaze config set apikey your-key</code> – Set your API key</li>
            <li><code className="text-green-400">bugblaze config show</code> – Show current config</li>
            <li><code className="text-green-400">bugblaze config delete apikey</code> – Delete your API key</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-400">📚 Examples</h2>
          <pre className="bg-[#111111] border border-green-500 rounded-lg p-4 overflow-x-auto text-green-400 text-base mb-4">
            <code>{`// JavaScript Error
function test() {
  console.log(x); // x is not defined
}

bugblaze fun test.js`}</code>
          </pre>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-400">❓ FAQ</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Does it send my code to the cloud?</h3>
              <p>No, your code stays on your machine unless you opt in to share.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">What languages are supported?</h3>
              <p>Currently: JavaScript, TypeScript, Python, Java, JSX, TSX.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Is it free?</h3>
              <p>Yes! BugBlaze is currently in beta and free for all users.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">What are premium features?</h3>
              <p>Premium unlocks health scans, mentor mode, and advanced code generation via a license key.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-lg py-10 border-t border-gray-800 bg-black">
        &copy; {new Date().getFullYear()} BugBlaze. Built by Little Prince.
      </footer>
    </div>
  );
}

import React from "react";
import logo from "/bugblaze.png";
import { Link } from "react-router-dom";
import TerminalDemo from "./TerminalDemo";

const features = [
	{
		title: "Fun: Syntax Issue Detection",
		desc: "Analyze a source file and detect syntax issues in JS, TS, Python, or Java. Use --explain for AI-powered error explanations.",
		video: "/feature1-demo.mp4",
	},
	{
		title: "Analyze: AI Logic & Runtime Checks",
		desc: "Analyze a source file for logical or runtime issues using AI. Get deep insights before bugs reach production.",
		video: "/feature2-demo.mp4",
	},
	{
		title: "Generate: Code, Tests, Docs, Refactor",
		desc: "Generate codebases, unit tests, documentation, or refactor suggestions. Some features are Premium for advanced workflows.",
		video: "/feature3-demo.mp4",
	},
	{
		title: "Health Scan: Codebase Health",
		desc: "Scan your entire codebase for health issues (Premium). Instantly surface technical debt and risky patterns.",
		video: "/feature4-demo.mp4",
	},
	{
		title: "Mentor: Line-by-Line Guidance",
		desc: "Enter mentor mode for detailed, line-by-line AI mentoring on your code (Premium). Level up your skills as you code.",
		video: "/feature5-demo.mp4",
	},
	{
		title: "Chat & Config: AI Help & Settings",
		desc: "Start an interactive chat with the AI assistant, or configure BugBlaze settings (API keys, preferences, and more).",
		video: "/feature6-demo.mp4",
	},
];

// Add this mapping for feature command/response:
const featureTerminals = {
  "Fun: Syntax Issue Detection": {
    command: "bugblaze fun app.js --explain",
    response: "Syntax issue detected: Unexpected token on line 3.\nAI Explanation: You probably missed a semicolon."
  },
  "Analyze: AI Logic & Runtime Checks": {
    command: "bugblaze analyze app.js",
    response: "AI Analysis: No logical errors found. Code looks good!"
  },
  "Generate: Code, Tests, Docs, Refactor": {
    command: "bugblaze generate tests app.js",
    response: "Generated unit tests for app.js:\n- should add two numbers\n- should handle negative input"
  },
  "Health Scan: Codebase Health": {
    command: "bugblaze health-scan",
    response: "Health Scan: 2 files with technical debt. See details above."
  },
  "Mentor: Line-by-Line Guidance": {
    command: "bugblaze mentor app.js",
    response: "Mentor Mode: Let's review your code line by line."
  },
  "Chat & Config: AI Help & Settings": {
    command: "bugblaze chat",
    response: "AI: How can I help you today?"
  }
};

export default function Landing() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col font-sans">
			{/* Top nav */}
			<nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
  <div className="flex items-center gap-3">
    <img src={logo} alt="BugBlaze Logo" className="w-8 h-8" />
    <span className="font-bold text-lg tracking-tight">BugBlaze</span>
  </div>
  <div className="flex gap-6 text-gray-300 text-sm">
    <a href="#features" className="hover:text-green-400">
      Features
    </a>
    <a href="#docs" className="hover:text-green-400">
      Docs
    </a>
    <a
      href="https://github.com/MatthewTheCoder1218/bugblaze"
      target="_blank"
      rel="noreferrer"
      className="hover:text-green-400"
    >
      GitHub
    </a>
  </div>
</nav>

			{/* Hero */}
			<section className="w-full bg-black px-0 py-16 sm:py-24 border-b border-gray-800">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-8">
    {/* Left: Headline, subheadline, CTA, install */}
    <div className="flex-1 flex flex-col items-start w-full">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight text-white">
        The intelligent<br />
        <span className="text-green-400">terminal assistant.</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-lg">
        Become a command line power user on day one.<br />
        BugBlaze combines AI and your dev team’s knowledge in one fast, intuitive CLI tool.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
        <Link
          to="/docs"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition w-full sm:w-auto text-center"
        >
          Ready to make your terminal smarter?
        </Link>
      </div>
      <div className="text-gray-400 text-sm mb-4">For Windows, Mac, and Linux</div>
      <div className="bg-[#18181b] rounded-lg px-6 py-4 inline-block text-green-400 font-mono text-base sm:text-lg mb-2 w-full max-w-full overflow-x-auto">
        $ npm install -g bugblaze
      </div>
    </div>
    {/* Right: Terminal Demo */}
    <div className="flex-1 flex justify-center w-full mt-8 md:mt-0">
      <div className="w-full max-w-xl">
        <TerminalDemo
          initialCommand={featureTerminals["Fun: Syntax Issue Detection"].command}
          response={featureTerminals["Fun: Syntax Issue Detection"].response}
        />
      </div>
    </div>
  </div>
</section>

{/* Features */}
<section id="features" className="bg-[#0a0a0a] px-2 sm:px-4 py-16 sm:py-28">
  <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-24 text-green-400">
    Why Developers Love BugBlaze
  </h2>
  <div className="flex flex-col gap-20 sm:gap-32 max-w-6xl mx-auto">
    {features.map((feature, i) => (
      <div
        key={feature.title}
        className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-10 md:gap-16`}
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start w-full">
          <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">{feature.title}</h3>
          <p className="text-lg sm:text-2xl text-green-400 mb-4 sm:mb-6">{feature.desc}</p>
        </div>
        {/* Right: Terminal Demo + Video */}
        <div className="flex-1 flex flex-col items-center gap-4 sm:gap-6 w-full">
          <div className="w-full max-w-xl overflow-x-auto">
            <TerminalDemo
              initialCommand={featureTerminals[feature.title]?.command || ""}
              response={featureTerminals[feature.title]?.response || ""}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  {/* Feedback Form */}
  <section className="bg-[#101010] py-20 border-t border-b border-gray-800">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">We Value Your Feedback</h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-5"
      >
        {/* REQUIRED: Your Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="a21a21a5-ea1c-4918-9218-2ba807335c24" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-black border border-gray-700 rounded px-4 py-3 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-black border border-gray-700 rounded px-4 py-3 text-white"
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          rows={4}
          className="bg-black border border-gray-700 rounded px-4 py-3 text-white"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full text-lg transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  </section>

			{/* Banner CTA */}
			<section className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-24 text-center">
				<h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-10">
					Ready to squash bugs like a pro?
				</h2>
				<Link
					to="/docs"
					className="bg-black hover:bg-gray-900 text-green-400 font-semibold px-16 py-6 rounded-full text-2xl transition inline-block border-2 border-black"
				>
					Explore the Docs
				</Link>
			</section>

			{/* Footer */}
			<footer className="text-center text-gray-500 text-lg py-10 border-t border-gray-800 bg-black">
				&copy; {new Date().getFullYear()} BugBlaze. Built by Little Prince.
			</footer>
		</div>
	);
}
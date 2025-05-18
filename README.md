# 🔥 BugBlaze Website

This is the official landing page for **BugBlaze** — a command-line tool that helps developers catch and understand code bugs with the power of AI.

👉 **Live Site:** [bugblaze.vercel.app](https://bugblaze.vercel.app)

---

## 🛠 Features

- AI-powered bug detection and explanations
- Support for JavaScript, TypeScript, Python, Java, JSX/TSX
- Global CLI installation for easy use anywhere
- Simple, clean user interface
- Responsive design
- SEO optimized with meta tags and Open Graph support
- Animations for interactive UI

---

## 🧰 How to Use BugBlaze CLI

Once installed globally via npm:

```bash
npm install -g bugblaze
```

Check if setup is correct by running:

```bash
bugblaze-init
```

To analyze a file for logical issues:

```bash
bugblaze analyze path/to/your/file.js
```

To get AI-powered explanations for errors:

```bash
bugblaze fun path/to/your/file.js --explain
```

Make sure you set the required environment variable for AI features:

### Windows (PowerShell):
```powershell
$env:GROQ_API_KEY="your-api-key"
```

### Windows (Command Prompt):
```cmd
set GROQ_API_KEY=your-api-key
```

### Linux / Mac:
```bash
export GROQ_API_KEY="your-api-key"
```

Get your API key from [Groq Console](https://console.groq.com).

---

## 🚀 Deployment

The site is deployed on Vercel for fast global delivery and continuous deployment.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a Pull Request

Please follow the code style and write clear commit messages.

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙋‍♂️ Author

**Matthew Michael**

---

## 💬 Feedback

If you encounter any issues or have suggestions, please open an issue on the GitHub repository or contact me directly.

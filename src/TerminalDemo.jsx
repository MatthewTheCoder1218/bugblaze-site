import React, { useState, useRef, useEffect } from "react";

export default function TerminalDemo({ initialCommand, response }) {
  const [lines, setLines] = useState([
    "Try this command:",
    `$ ${initialCommand}`,
    "$ "
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = input.trim();
      if (command === initialCommand) {
        setLines([...lines.slice(0, -1), `$ ${command}`, response, "$ "]);
      } else {
        setLines([...lines.slice(0, -1), `$ ${command}`, "Unknown command. Try the example above!", "$ "]);
      }
      setInput("");
    }
  };

  return (
    <div className="bg-black border border-green-500 rounded-xl px-6 py-4 mb-4 w-full max-w-xl shadow-lg font-mono text-green-400 text-lg min-h-[180px]">
      {lines.map((line, idx) =>
        idx === lines.length - 1 ? (
          <div key={idx} className="flex">
            <span>$&nbsp;</span>
            <input
              ref={inputRef}
              className="bg-transparent outline-none text-green-400 flex-1"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              style={{ minWidth: 0 }}
            />
          </div>
        ) : (
          <div key={idx}>{line}</div>
        )
      )}
    </div>
  );
}
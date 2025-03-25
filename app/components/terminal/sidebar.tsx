import { useEffect, useState } from "react";
import { GitHubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";

const TITLES = [
  "Technical Architect",
  "Software Architect",
  "Product Engineer",
  "Technical Leader"
];

export function Sidebar() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentTitle = TITLES[titleIndex];
      if (currentText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, 50);
      } else {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, titleIndex]);

  return (
    <div className="w-64 border-r border-green-500 p-4 font-mono">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold">Dhinesh Kumar</h1>
        <h2 className="h-6 text-lg">
          <span className="inline-block">{currentText}</span>
          <span className="ml-1 inline-block animate-blink">_</span>
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-start space-x-4">
          <a 
            href="https://linkedin.com/in/dhineshravi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>

          <a 
            href="https://github.com/beam-me-up" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>

        <a 
          href="mailto:dhinesh.ravi@gmail.com"
          className="flex items-center space-x-2 hover:text-green-400"
        >
          <span className="text-2xl">✉</span>
          <span className="text-sm">dhinesh.ravi@gmail.com</span>
        </a>

        <div className="flex items-center space-x-2">
          <span className="text-2xl">📍</span>
          <span className="text-sm">Bangalore</span>
        </div>

        <div className="mt-8 border-t border-green-500 pt-4">
          <p className="text-sm text-green-400">Type 'help' to see available commands</p>
        </div>
      </div>
    </div>
  );
}

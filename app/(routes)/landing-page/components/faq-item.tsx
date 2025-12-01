"use client";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-2 border-primary/80 rounded-4xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-6 text-left group cursor-pointer"
      >
        <span className="text-white text-2xl font-medium pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0">
          <svg
            className={`w-6 h-6 text-primary transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 px-6 text-white/80 text-lg leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

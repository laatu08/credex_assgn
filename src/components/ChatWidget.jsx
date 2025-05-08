// src/components/ChatWidget.jsx
import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

const dummyResponses = {
  "Hello":"Hi, How can I help you?",
  "Thank you":"Your Welcome",
  "Ok":"Good to hear",
  "Can you help me?":"Sure, Ask me any query you have?",
  "How do I sell my license?":
    "Just upload your license details and we’ll handle the rest!",
  "How long does payment take?":
    "Payments are usually processed within 24 hours.",
  "What licenses do you accept?":
    "We accept Windows, MS Office, Adobe Suite, and many other major software products.",
  "Is there any fee for selling my license?":
    "There are no upfront fees. We deduct a small commission from the final payout.",
  "How is my license valued?":
    "We evaluate based on the software type, version, and current market demand.",
  "Is it legal to resell software licenses?":
    "Yes! Reselling unused software licenses is legal under the first-sale doctrine in many countries.",
  "What information do I need to provide?":
    "You'll need the license key, proof of purchase (if available), and product details.",
  "Can I sell volume licenses?":
    "Yes, we accept both single-user and volume licenses. Contact us for bulk sales.",
  "How do I know my data is safe?":
    "We use encryption and secure processes to ensure your personal and license data is fully protected.",
  "Do you buy expired or used licenses?":
    "No, we only accept valid, unused, and transferable licenses.",
  "What happens if my license cannot be sold?":
    "If the license is ineligible, we’ll inform you and suggest next steps. No charges applied.",
  "Can I cancel the process after uploading my license?":
    "Yes, you can cancel anytime before accepting the final offer.",
  "Do you accept Mac software licenses?":
    "Yes, we accept Mac licenses such as macOS apps and Adobe products compatible with Mac.",
  "How do I get paid?":
    "We offer payouts via bank transfer, PayPal, or UPI based on your preference.",
};


const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const userMsg = input;
    const botReply =
      dummyResponses[userMsg] ||
      "Sorry, I didn’t understand that. Please contact support.";
    setChat([
      ...chat,
      { sender: "You", text: userMsg },
      { sender: "Bot", text: botReply },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-72 h-96 bg-white dark:bg-gray-800 rounded shadow-lg flex flex-col">
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-t">
            <span>SoftSell Chat</span>
            <button onClick={() => setOpen(false)}>X</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {chat.map((msg, idx) => (
              <p
                key={idx}
                className={`${
                  msg.sender === "You"
                    ? "text-right text-blue-600"
                    : "text-left text-green-600"
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-1 rounded dark:bg-gray-700 dark:text-white"
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              className="ml-1 bg-blue-600 text-white px-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700"
        >
          <FaComments size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

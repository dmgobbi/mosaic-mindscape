
import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Mosaic Mind assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, isBot: false },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-mosaic-warm py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-card rounded-2xl h-[80vh] flex flex-col">
          <div className="p-4 border-b">
            <h1 className="font-display text-2xl">Mosaic Mind Assistant</h1>
            <p className="text-gray-600">Available 24/7 for support</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isBot
                        ? "bg-white text-gray-800"
                        : "bg-mosaic-dark text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-mosaic-dark"
              />
              <button
                type="submit"
                className="p-3 rounded-full bg-mosaic-dark text-white hover:bg-opacity-90 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;

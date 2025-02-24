
import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I'm Dr. Lucy Anderson. I'm here to help you navigate through any challenges you're facing. How are you feeling today?",
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
    <div className="min-h-screen flex flex-col bg-mosaic-warm">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-2xl h-[80vh] flex flex-col">
            <div className="p-6 border-b flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=150&h=150"
                alt="Dr. Lucy Anderson"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="font-display text-2xl">Dr. Lucy Anderson</h1>
                <p className="text-gray-600">Clinical Psychologist, PhD</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
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

            <form onSubmit={handleSend} className="p-6 border-t bg-white/50">
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
      <Footer />
    </div>
  );
};

export default Chat;

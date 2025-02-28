import React, { useState } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';

interface LiveChatProps {
  darkMode: boolean;
}

const LiveChat: React.FC<LiveChatProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "👋 Welcome to ImageToPDF! How can we help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    
    // Simulate automated response after a short delay
    setTimeout(() => {
      let responseText = "Thanks for your message! Our team will get back to you shortly.";
      
      // Simple keyword-based responses
      if (inputValue.toLowerCase().includes('convert')) {
        responseText = "To convert images to PDF, simply upload your files using the upload button or drag and drop area, then click 'Convert to PDF'.";
      } else if (inputValue.toLowerCase().includes('watermark')) {
        responseText = "Our Image to PDF converter is 100% free and never adds watermarks to your documents.";
      } else if (inputValue.toLowerCase().includes('format') || inputValue.toLowerCase().includes('type')) {
        responseText = "We support all major image formats including JPG, PNG, BMP, TIFF, GIF, and WebP.";
      } else if (inputValue.toLowerCase().includes('download')) {
        responseText = "After conversion, a download button will appear. Click it to save your PDF immediately.";
      }
      
      const newBotMessage = { text: responseText, isUser: false };
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        className={`fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${
          darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors duration-200`}
        onClick={toggleChat}
        aria-label="Live Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed right-5 bottom-20 z-50 w-80 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          {/* Chat header */}
          <div className={`p-4 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white`}>
            <h3 className="font-bold text-lg">Live Chat Support</h3>
            <p className="text-sm text-blue-100">We're here to help!</p>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${
                    message.isUser
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={`flex-1 p-2 rounded-l-md ${
                  darkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-white text-gray-800 border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                onClick={handleSendMessage}
                className={`p-2 rounded-r-md ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;

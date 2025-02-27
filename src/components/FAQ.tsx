import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How do I convert multiple images to a single PDF?",
    answer: "Simply upload all your images at once by dragging and dropping them or using the file browser. You can then arrange them in the desired order before converting to PDF."
  },
  {
    question: "What image formats are supported?",
    answer: "Our tool supports all common image formats including JPG, PNG, BMP, GIF, TIFF, and WEBP. If you have images in other formats, you may need to convert them first."
  },
  {
    question: "Is there a limit to how many images I can convert?",
    answer: "You can convert up to 20 images in a single PDF for free. For larger batches, we recommend splitting them into multiple PDFs or considering our premium plan."
  },
  {
    question: "Are my images secure when I upload them?",
    answer: "Yes, your privacy is our priority. All uploaded files are automatically deleted from our servers after 1 hour. We do not store or access your images for any other purpose."
  },
  {
    question: "Can I customize the PDF output?",
    answer: "Yes, you can adjust the PDF quality, choose the page size (A4, Letter, or Legal), and add page numbers. More customization options are available in our premium version."
  },
  {
    question: "Do you add watermarks to the PDF?",
    answer: "No, we don't add any watermarks to your PDFs. The files you create are clean and professional, ready for sharing or printing."
  },
  {
    question: "Can I use this tool on my mobile device?",
    answer: "Yes, our image to PDF converter is fully responsive and works on smartphones and tablets. You can upload, convert, and download PDFs directly from your mobile browser."
  },
  {
    question: "Is this service really free?",
    answer: "Yes, the basic image to PDF conversion is completely free. We offer premium features for users who need advanced options or higher volume processing."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Everything you need to know about our Image to PDF converter
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors duration-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
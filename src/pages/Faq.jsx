import React, { useState } from 'react';
import { 
  ChevronDown, 
  MessageCircle, 
  Mail, 
  ArrowLeft, 
  Sparkles,
  Instagram,
  Heart,
  Search,
  Truck,
  RefreshCcw,
  CreditCard,
  Ruler,
  Frown
} from 'lucide-react';

// --- FAQ DATA ---
const FAQS = [
  {
    id: 1,
    icon: MessageCircle,
    question: "How do I place an order?",
    answer: "Since we are a small business, we process orders directly through Instagram DMs or WhatsApp! Simply browse our shop, add items to your cart, and click 'Checkout via WhatsApp' to send us your order details automatically. We'll reply with payment info and confirm your order. 💕"
  },
  {
    id: 2,
    icon: Sparkles,
    question: "Are the thrifted clothes washed and clean?",
    answer: "Absolutely! Every single piece of clothing is carefully hand-washed, sanitized, and beautifully ironed before being packed. They are ready to wear the moment you unbox them! ✨"
  },
  {
    id: 3,
    icon: Truck,
    question: "How long does shipping take?",
    answer: "We ship from Namchi, Sikkim. Generally, standard shipping takes 5-7 business days depending on your location in India. We'll share a tracking link with you as soon as your lovely package is dispatched! 📦"
  },
  {
    id: 4,
    icon: RefreshCcw,
    question: "Do you accept returns or exchanges?",
    answer: "Because we deal in unique thrifted pieces, we currently do not accept returns, exchanges, or cancellations. We provide exact measurements and detailed descriptions for every item, so please check them carefully before claiming. If an item arrives damaged, please record an unboxing video and DM us immediately! 🥺"
  },
  {
    id: 5,
    icon: CreditCard,
    question: "What payment methods do you accept?",
    answer: "We accept all major UPI payments (Google Pay, PhonePe, Paytm) and direct Bank Transfers. We do not offer Cash on Delivery (COD) at this moment."
  },
  {
    id: 6,
    icon: Ruler,
    question: "How do I know if an item will fit me?",
    answer: "We measure every piece lying flat and provide the exact pit-to-pit (bust) and length measurements in inches. We highly recommend comparing these measurements against a piece of clothing you already own that fits you perfectly!"
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState(1); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQs based on search input
  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf9f8] font-sans text-gray-800 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden relative">
      
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] -left-[10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation (Simplified for sub-pages) */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors group font-medium text-sm sm:text-base">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Shop
            </a>
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tighter text-gray-900">
                Thriftoholic
              </span>
            </div>
            <div className="w-[100px]"></div> {/* Spacer to center the logo */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 animate-fade-in-up">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100 text-pink-600 text-xs sm:text-sm font-medium mb-6 hover:scale-105 transition-transform cursor-pointer">
            <Sparkles size={14} className="text-pink-500 animate-pulse" /> Everything you need to know
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Got questions about sizes, shipping, or how our little thrift store works? We've got answers. 🎀
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400 group-focus-within:text-pink-500 transition-colors duration-300" />
          </div>
          <input 
            type="text" 
            placeholder="Search for answers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-pink-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all text-gray-700 font-medium placeholder:font-normal"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-5 min-h-[400px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const Icon = faq.icon;
              return (
                <div 
                  key={faq.id} 
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`animate-fade-in-up bg-white rounded-[1.5rem] border ${isOpen ? 'border-pink-300 shadow-lg shadow-pink-100/50 bg-pink-50/20' : 'border-gray-100 shadow-sm hover:border-pink-200 hover:shadow-md hover:-translate-y-0.5'} transition-all duration-300 overflow-hidden cursor-pointer`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="w-full text-left px-5 py-4 sm:px-8 sm:py-6 flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-pink-100 text-pink-600' : 'bg-gray-50 text-gray-500'}`}>
                        <Icon size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <span className={`font-bold text-base sm:text-lg transition-colors duration-300 ${isOpen ? 'text-pink-600' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-pink-100 text-pink-600 rotate-180' : 'bg-gray-50 text-gray-400 rotate-0'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  
                  {/* Smooth Grid-based height animation */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-pink-50/50 sm:ml-[4.5rem] ml-14">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty Search State */
            <div className="text-center py-12 px-4 animate-fade-in-up">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-400">
                <Frown size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No answers found</h3>
              <p className="text-gray-500">We couldn't find anything matching "{searchQuery}". <br/> Try a different keyword!</p>
            </div>
          )}
        </div>

        {/* Still Need Help CTA */}
        <div className="mt-16 sm:mt-24 bg-gradient-to-br from-pink-50 to-amber-50 rounded-[2rem] p-8 sm:p-12 text-center border border-pink-100 shadow-sm relative overflow-hidden">
           {/* Decorative corner icons */}
           <Heart size={120} className="absolute -top-10 -left-10 text-pink-100 rotate-[-15deg] opacity-50 pointer-events-none" />
           <Sparkles size={80} className="absolute -bottom-5 -right-5 text-amber-100 rotate-[15deg] opacity-50 pointer-events-none" />
           
           <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3">Still have questions? 💭</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md mx-auto">
                Can't find the answer you're looking for? Don't hesitate to reach out to us directly!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm sm:text-base hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 border border-pink-200 rounded-xl font-medium text-sm sm:text-base hover:border-pink-400 hover:bg-pink-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 shadow-sm"
                >
                  <Instagram size={18} className="text-pink-500" /> DM on Instagram
                </a>
              </div>
           </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 rounded-t-[2rem] sm:rounded-t-[3rem] mt-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif text-xl font-bold tracking-tighter mb-2">Thriftoholic</p>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">Sustainable fashion for the Gen-Z soul. 🦋</p>
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.instagram.com/__thriftoholic/" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="mailto:hello@thriftoholic.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Thriftoholic. All rights reserved.</p>
        </div>
      </footer>

      {/* Global CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}} />
    </div>
  );
}
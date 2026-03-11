import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Mail,
  ExternalLink,
  MapPin,
  Heart,
  Leaf,
  Recycle,
  Shirt,
  TrendingUp,
  Droplets,
  Wind,
  Search,
  Star
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateGraphs, setAnimateGraphs] = useState(false);

  // Trigger graph animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimateGraphs(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f8] font-sans text-gray-800 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden relative">
      
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-[30rem] h-[30rem] bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-lg border-b border-white shadow-sm shadow-pink-100/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:text-pink-500 transition-colors">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 sm:justify-start">
              <a href="/" className="font-serif text-xl sm:text-3xl font-bold tracking-tighter text-gray-900 cursor-pointer hover:text-pink-500 transition-colors">
                Thriftoholic
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:space-x-8 sm:items-center bg-white/50 px-8 py-3 rounded-full border-2 border-white shadow-sm">
              <a href="/" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">Home</a>
              <a href="/products" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">Shop</a>
              <a href="/about" className="text-sm font-bold text-pink-500 transition-colors">Our Story</a>
              <a href="/faq" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">FAQ</a>
            </div>

            {/* Cart Button (Empty state for visual consistency) */}
            <div className="flex items-center">
              <button className="relative p-2.5 sm:p-3 bg-white border-2 border-pink-50 rounded-full text-gray-700 hover:text-pink-500 hover:border-pink-200 transition-all group shadow-md shadow-pink-100/50 hover:shadow-lg hover:-translate-y-0.5">
                <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-md border-b-4 border-white absolute w-full shadow-xl shadow-pink-100/50 rounded-b-[2rem]">
            <div className="pt-4 pb-6 space-y-2 px-6">
              <a href="/" className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">Home</a>
              <a href="/products" className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">Shop Collection</a>
              <a href="/about" className="block py-3 text-base font-bold text-pink-500 border-b-2 border-dashed border-gray-100">Our Story</a>
              <a href="/faq" className="block py-3 text-base font-bold text-gray-700">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-100/50 border-4 border-white text-pink-600 text-sm font-bold mb-6">
            <Heart size={16} className="text-pink-500 fill-pink-200" /> Behind the brand
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            More than just clothes. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400 drop-shadow-sm">It's a lifestyle.</span>
          </h1>
          <p className="text-base sm:text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Born in the beautiful hills of Namchi, Sikkim. We are on a mission to redefine fashion by making sustainable, cute, and affordable styles accessible to everyone.
          </p>
        </div>

        {/* Hero Single Image */}
        <div className="mt-16 relative w-full max-w-4xl mx-auto flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Decorative Sparkles */}
          <Sparkles size={40} className="absolute -top-8 -right-8 text-amber-400 animate-pulse hidden sm:block z-40" />
          <Sparkles size={30} className="absolute -bottom-8 -left-8 text-pink-400 animate-pulse hidden sm:block delay-300 z-40" />

          {/* Main Image */}
          <div className="relative z-30 w-full bg-white p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl shadow-pink-200/60 border-[6px] sm:border-[8px] border-white transform hover:scale-[1.02] transition-transform duration-500">
            {/* IMAGE URL REPLACED BELOW */}
            <img src="https://i.ibb.co/K18xdwd/53d3f82a-e9c6-4611-826b-49d679dcc451.png" alt="Thriftoholic Namchi Sikkim" className="w-full h-auto object-contain rounded-[1.8rem] sm:rounded-[2.2rem]" />
          </div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500 font-medium">The core pillars of Thriftoholic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-green-100/40 border-[6px] border-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6 border-4 border-white shadow-sm">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Sustainable Choices</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Fast fashion is out. By giving pre-loved clothes a second chance, we reduce landfill waste and promote a circular economy.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-pink-100/40 border-[6px] border-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-6 border-4 border-white shadow-sm">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Curated Aesthetics</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                We don't just sell old clothes. Every piece is hand-picked for its Y2K, vintage, or soft-girl aesthetic. Quality over quantity, always.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-amber-100/40 border-[6px] border-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border-4 border-white shadow-sm">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Born locally in Sikkim, we treat every customer like a friend. From handwritten notes to secure packing, it's all done with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Thriftoholic Experience & Journey Section */}
      <section className="py-16 sm:py-24 bg-white/40 border-y-4 border-dashed border-pink-100 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Packed with Love */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 sm:p-10 rounded-[3rem] shadow-2xl shadow-pink-100/60 border-[8px] border-white relative transform hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 border-4 border-white shadow-lg transform rotate-12">
                  <Star size={28} className="fill-amber-400" />
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Packed with Love 💌</h3>
                <p className="text-gray-600 font-medium mb-8 text-lg">
                  Opening a Thriftoholic package should feel like receiving a gift from your bestie. Here's what's inside every order:
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4 bg-pink-50/50 p-4 rounded-2xl border-2 border-white shadow-sm">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500 shrink-0">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900">Cute Freebies</h4>
                      <p className="text-sm text-gray-600 font-medium">Stickers, scrunchies, or little candies!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-2xl border-2 border-white shadow-sm">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900">Handwritten Notes</h4>
                      <p className="text-sm text-gray-600 font-medium">A personalized thank you, just for you.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-green-50/50 p-4 rounded-2xl border-2 border-white shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-500 shrink-0">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900">Eco-Friendly Mailers</h4>
                      <p className="text-sm text-gray-600 font-medium">100% compostable & plastic-free packaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Milestones */}
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-10">Our Journey So Far</h2>
              
              <div className="relative border-l-4 border-pink-200 ml-4 space-y-10 pb-4">
                
                {/* Milestone 1 */}
                <div className="relative pl-8 sm:pl-12 group">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-pink-400 rounded-full group-hover:scale-125 group-hover:border-pink-500 transition-transform shadow-md"></div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">The Idea Blossoms 🌱</h3>
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-[10px] sm:text-xs font-bold rounded-full mb-2">2023</span>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Started curating friends' closets in Namchi and realized the potential of sustainable, aesthetic fashion.</p>
                </div>

                {/* Milestone 2 */}
                <div className="relative pl-8 sm:pl-12 group">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-amber-400 rounded-full group-hover:scale-125 group-hover:border-amber-500 transition-transform shadow-md"></div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">Building the Community 💫</h3>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 text-[10px] sm:text-xs font-bold rounded-full mb-2">2024</span>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Launched our Instagram page and started connecting with thrift and Y2K lovers all over India.</p>
                </div>

                {/* Milestone 3 */}
                <div className="relative pl-8 sm:pl-12 group">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-green-400 rounded-full group-hover:scale-125 group-hover:border-green-500 transition-transform shadow-md"></div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">The Glow Up ✨</h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-[10px] sm:text-xs font-bold rounded-full mb-2">2025</span>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Upgraded our packaging, expanded our collection to accessories, and hit our first major order milestones.</p>
                </div>

                {/* Milestone 4 */}
                <div className="relative pl-8 sm:pl-12 group">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 bg-pink-500 border-4 border-white rounded-full group-hover:scale-125 transition-transform shadow-md animate-pulse"></div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">Our Own Home 🏡</h3>
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-[10px] sm:text-xs font-bold rounded-full mb-2">2026</span>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Launched this beautiful website to make shopping with us easier, faster, and more aesthetic than ever!</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process / Timeline */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 font-medium">From the source to your closet.</p>
          </div>

          <div className="relative">
            {/* Desktop horizontal line connecting the steps */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-2 bg-pink-100 rounded-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-6">
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-pink-100 border-[6px] border-pink-50 mb-6 text-pink-500 group-hover:scale-110 transition-transform">
                  <Search size={36} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">1. Sourcing</h3>
                <p className="text-sm font-medium text-gray-500 px-2">We hunt through hundreds of pieces to find those hidden aesthetic gems.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-blue-100 border-[6px] border-blue-50 mb-6 text-blue-500 group-hover:scale-110 transition-transform md:mt-8">
                  <Droplets size={36} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">2. Washing</h3>
                <p className="text-sm font-medium text-gray-500 px-2">Every piece is deeply sanitized, washed, and ironed so it feels brand new.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-amber-100 border-[6px] border-amber-50 mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                  <Sparkles size={36} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">3. Styling</h3>
                <p className="text-sm font-medium text-gray-500 px-2">We measure, style, and photograph items to show you exactly how they look.</p>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-green-100 border-[6px] border-green-50 mb-6 text-green-500 group-hover:scale-110 transition-transform md:mt-8">
                  <Heart size={36} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">4. Shipped</h3>
                <p className="text-sm font-medium text-gray-500 px-2">Packed with eco-friendly materials and cute freebies, sent straight to you!</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/60 backdrop-blur-lg border-[6px] border-white shadow-2xl shadow-pink-100/50 rounded-[3rem] sm:rounded-[4rem] py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-4 sm:inset-6 border-4 border-dashed border-pink-100/50 rounded-[2.5rem] sm:rounded-[3.5rem] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Ready to join the club? 🎀</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600 mb-10 max-w-xl mx-auto">
              Follow our journey, grab aesthetic pieces before they sell out, and be part of our sustainable fashion community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/products" 
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-pink-500 text-white border-4 border-pink-400 rounded-full font-bold text-base sm:text-lg hover:bg-pink-600 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-pink-200/50"
              >
                <ShoppingBag size={20} /> Shop Collection
              </a>
              <a 
                href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-900 border-4 border-gray-100 rounded-full font-bold text-base sm:text-lg hover:border-pink-200 hover:text-pink-500 transition-all hover:-translate-y-1 active:scale-95 shadow-xl"
              >
                <Instagram size={20} /> Follow on IG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 rounded-t-[3rem] sm:rounded-t-[4rem] mt-0 relative z-10 border-t-[8px] border-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 md:gap-8 border-b-2 border-dashed border-gray-800 pb-10 sm:pb-16">
            
            <div className="md:col-span-5 text-center sm:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tighter mb-4 sm:mb-6">
                Thriftoholic
              </h2>
              <p className="text-sm sm:text-base font-medium text-gray-400 max-w-sm mx-auto sm:mx-0 mb-8 sm:mb-10 leading-relaxed">
                Curated thrifted clothing, cute accessories, and aesthetic items. Sustainable fashion for the Gen-Z soul. 🦋
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-[1rem] bg-gray-800 border-2 border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-400 hover:-translate-y-1 transition-all shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-[1rem] bg-gray-800 border-2 border-gray-700 flex items-center justify-center hover:bg-[#25D366] hover:border-green-400 hover:-translate-y-1 transition-all shadow-lg">
                  <MessageCircle size={20} />
                </a>
                <a href="mailto:hello@thriftoholic.com" className="w-12 h-12 rounded-[1rem] bg-gray-800 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-600 hover:border-gray-500 hover:-translate-y-1 transition-all shadow-lg">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 text-center sm:text-left">
              <h3 className="font-extrabold text-lg sm:text-xl mb-4 sm:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="/products" className="text-sm sm:text-base font-medium text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center gap-2">Shop Collection <ExternalLink size={14}/></a></li>
                <li><a href="/faq" className="text-sm sm:text-base font-medium text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center gap-2">FAQ <ExternalLink size={14}/></a></li>
              </ul>
            </div>

            <div className="md:col-span-4 text-center sm:text-left">
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 sm:mb-5 text-white">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-5 font-medium">Join our newsletter for exclusive drops and discount codes!</p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-gray-900 text-white px-5 py-3.5 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-pink-500 border-2 border-gray-800 text-sm sm:text-base font-medium"
                />
                <button type="submit" className="bg-pink-500 text-white px-8 py-3.5 rounded-2xl text-sm sm:text-base font-bold hover:bg-pink-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-pink-500/30 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            
          </div>

          <div className="pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm font-medium text-gray-500">
            <p>© {new Date().getFullYear()} Thriftoholic. All rights reserved.</p>
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}
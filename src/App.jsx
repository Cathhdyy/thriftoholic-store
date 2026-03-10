import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Instagram, 
  MessageCircle, 
  Star, 
  Heart, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Check,
  Mail,
  ExternalLink,
  Lock,
  Edit2,
  Trash2,
  Plus,
  Key,
  LogOut,
  ShieldCheck,
  Leaf,
  Truck
} from 'lucide-react';

// --- MOCK DATA ---
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Spring sparkle for your wrist. ✨🌸",
    price: 80,
    category: "Jewelry",
    image: "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/628327341_17858071014606164_2452433074369862530_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzgyNjUwMTk1Njc0NDIwMjY3Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wa4iB7ERs3oQ7kNvwGbB6po&_nc_oc=AdkYqs_Rl9f4XOb822Uz_58gFQwfgtQDf9iBUuoEfHm6DUCkrqEN6gsz4xWKTOu8sNE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=ewt8kLIE8cQoKFjnyTK3AA&_nc_ss=8&oh=00_Afz5BtC--Vm2nkbqNf2YIxT9cJAuquaIufFSCy5znmOqmA&oe=69B6202B",
    isNew: true
  },
  {
    id: 2,
    name: "Kawaii Kuromi Keychain ✨ (sold out)💜",
    price: 120,
    category: "Keychains",
    image: "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/571605160_17843288103606164_4598935643241419713_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzc1Mzk0NDYwOTU0NzE3Njk2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=hU4P-9fnQ8IQ7kNvwGNaLjX&_nc_oc=AdlR-oDE4EfoREb7T8WD6N6tCFOPbmPy1vsCE3F3NibcUw1YZcdVnJzyCHV3bRZ6gng&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=rD0mLTblSf8S3MeznNB0CQ&_nc_ss=8&oh=00_Afzvf83TYi351AH2o9Jb_8rk7OFz8g9r8eBAhkiVu3OlKQ&oe=69B628A3",
    isSoldOut: true // Marking this product as out of stock
  },
  {
    id: 3,
    name: "Classic Ribbed Knit Cardigan (Cream) 🤍",
    price: 600,
    originalPrice: 650,
    category: "Thrifted Clothes",
    image: "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/574267111_17843289951606164_8591607697281376528_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzc1Mzk1MzM4Mjk3NDYwMDA4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOC5oZHIuQzMifQ%3D%3D&_nc_ohc=cCUcbtLSbnoQ7kNvwG05I6t&_nc_oc=AdloUMuTzQm0Qebv7ZD1PCCiveo9e-lpOaPnOM8PS93clOSjJACSg6bUC4zgYnda4m8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_gid=rD0mLTblSf8S3MeznNB0CQ&_nc_ss=8&oh=00_AfyRCZloNtP3XcfUKeHAJzqdyN5xgyTQ9CMH6PVmH-lbzw&oe=69B611BC"
  },
  {
    id: 4,
    name: "❤️ “Ruby” Red Cardigan with Ornate Buttons",
    price: 570,
    originalPrice: 600,
    category: "Thrifted Clothes",
    image: "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/571855630_17843290281606164_3648927972235645774_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzc1Mzk1NDc2MDI4MzMzODA2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOC5oZHIuQzMifQ%3D%3D&_nc_ohc=bYuY1MarPikQ7kNvwGl2Foc&_nc_oc=Adls4F_U4j1U9yD4YjzSGvRqzX1oyw_WmkqhpZHF6GgfWQ7Qy5EI_S65oLu4KTXmLCA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=rD0mLTblSf8S3MeznNB0CQ&_nc_ss=8&oh=00_AfxkRHZdBAgencdBXoeuwmMYdJR7228Xq7PZCkgbI1wftA&oe=69B61CA9",
    isPopular: true
  }
];

const CATEGORIES = [
  { name: "Thrifted Clothes", emoji: "👚", color: "bg-rose-100" },
  { name: "Accessories", emoji: "🎀", color: "bg-orange-100" },
  { name: "Jewelry", emoji: "✨", color: "bg-amber-100" },
  { name: "Keychains", emoji: "🔑", color: "bg-pink-100" }
];

const REVIEWS = [
  { id: 1, name: "Sarah J.", handle: "@sarah.aesthetics", text: "The hoodie I got is so comfy and smells amazing! Packaging was 10/10 cute 🥺", rating: 5 },
  { id: 2, name: "Emily R.", handle: "@emilyy_roses", text: "In LOVE with my new pearl necklace. Super fast shipping and the seller is so sweet!", rating: 5 },
  { id: 3, name: "Mia K.", handle: "@mia.k", text: "The keychains are exactly like the pictures. Will definitely be buying more accessories soon!! 💖", rating: 5 }
];

const INSTAGRAM_POSTS = [
  "https://postimg.cc/7GWjZkYh][img]https://i.postimg.cc/7GWjZkYh/1.jpg[/img][/url",
  "imgs/2.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
  "imgs/6.jpg"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Admin State
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', originalPrice: '', category: 'Thrifted Clothes', image: '', isNew: false, isPopular: false, isSoldOut: false });

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Generate WhatsApp message based on cart items
  const handleCheckout = () => {
    if (cart.length === 0) return;
    const orderDetails = cart.map(item => `- ${item.name} (₹${item.price})`).join('\n');
    const message = `Hi Thriftoholic! 🌸 I'd like to place an order for:\n\n${orderDetails}\n\nTotal: ₹${cartTotal}\n\nIs this available?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- ADMIN AUTH HANDLERS ---
  const handleLogin = (e) => {
    e.preventDefault();
    // Professional placeholder password for the demo
    if (passwordInput === 'admin123') {
      setIsAdminAuthenticated(true);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    setIsAdminMode(false);
  };

  // --- ADMIN HANDLERS ---
  const handleSaveProduct = (e) => {
    e.preventDefault();

    const newProduct = { 
      ...formData, 
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...newProduct, id: p.id } : p));
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    setCart(cart.filter(item => item.id !== id)); // Remove from local cart if deleted
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setShowProductForm(true);
  };

  const openAddForm = () => {
    setEditingProduct(null);
    setFormData({ name: '', price: '', originalPrice: '', category: 'Thrifted Clothes', image: '', isNew: false, isPopular: false, isSoldOut: false });
    setShowProductForm(true);
  };

  // --- ADMIN VIEW ---
  if (isAdminMode) {
    if (!isAdminAuthenticated) {
      return (
        <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-4 selection:bg-pink-200 selection:text-pink-900">
          <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500">
                <Key size={32} />
              </div>
              <h1 className="text-2xl font-serif font-bold text-gray-900">Admin Access</h1>
              <p className="text-gray-500 text-sm mt-2">Enter your password to manage the store.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Enter password (admin123)"
                  autoFocus
                />
                {loginError && <p className="text-red-500 text-sm mt-2 font-medium">{loginError}</p>}
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-pink-500 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Lock size={18} /> Login to Dashboard
              </button>
              <button 
                type="button"
                onClick={() => setIsAdminMode(false)}
                className="w-full py-3 bg-white text-gray-600 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Return to Store
              </button>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 p-4 sm:p-8 selection:bg-pink-200 selection:text-pink-900">
        <div className="max-w-6xl mx-auto">
          {/* Admin Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
            <div>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <Lock className="text-pink-500 sm:w-6 sm:h-6" size={20} /> Store Admin
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage your inventory and product listings.</p>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setIsAdminMode(false)}
                className="flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 bg-pink-50 text-pink-600 rounded-xl text-sm sm:text-base font-medium hover:bg-pink-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowRight size={16} className="rotate-180" /> Store
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Product Table List */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Products ({products.length})</h2>
              <button 
                onClick={openAddForm}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-900 text-white rounded-xl text-sm sm:text-base font-medium hover:bg-pink-500 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Plus size={18} /> Add New Product
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs sm:text-sm border-b border-gray-100">
                    <th className="p-3 sm:p-4 font-medium">Product</th>
                    <th className="p-3 sm:p-4 font-medium">Category</th>
                    <th className="p-3 sm:p-4 font-medium">Price</th>
                    <th className="p-3 sm:p-4 font-medium">Badges</th>
                    <th className="p-3 sm:p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors text-sm sm:text-base">
                      <td className="p-3 sm:p-4 flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-gray-100" />
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </td>
                      <td className="p-3 sm:p-4 text-gray-600">{product.category}</td>
                      <td className="p-3 sm:p-4 font-medium text-gray-900">
                        ₹{product.price}
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                        )}
                      </td>
                      <td className="p-3 sm:p-4">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {product.isSoldOut && <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md font-medium">Sold Out</span>}
                          {!product.isSoldOut && product.isNew && <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">New</span>}
                          {!product.isSoldOut && product.isPopular && <span className="text-[10px] sm:text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-md font-medium">Popular</span>}
                        </div>
                      </td>
                      <td className="p-3 sm:p-4 text-right">
                        <button onClick={() => openEditForm(product)} className="p-1 sm:p-2 text-gray-400 hover:text-blue-500 transition-colors inline-block">
                          <Edit2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="p-1 sm:p-2 text-gray-400 hover:text-red-500 transition-colors inline-block ml-1">
                          <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                     <tr>
                       <td colSpan="5" className="p-6 sm:p-8 text-center text-sm sm:text-base text-gray-500">Inventory is empty. Add your first item!</td>
                     </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add/Edit Product Modal */}
        {showProductForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-slide-in-right">
              <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{editingProduct ? 'Edit Item' : 'Add New Item'}</h3>
                <button onClick={() => setShowProductForm(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSaveProduct} className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base" placeholder="e.g. Vintage Y2K Top" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                    <input required type="number" min="0" step="1" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
                    <input type="number" min="0" step="1" value={formData.originalPrice || ''} onChange={e => setFormData({...formData, originalPrice: e.target.value})} className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base" placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-sm sm:text-base">
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input required type="url" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base" placeholder="https://images.unsplash.com/..." />
                  {formData.image && <img src={formData.image} alt="Preview" className="mt-2 h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-lg border border-gray-100" onError={(e) => e.target.style.display='none'} />}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 bg-pink-50/50 p-3 rounded-xl border border-pink-100">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={formData.isNew || false} onChange={e => setFormData({...formData, isNew: e.target.checked})} className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-sm font-medium text-gray-700">Tag as "NEW"</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={formData.isPopular || false} onChange={e => setFormData({...formData, isPopular: e.target.checked})} className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-sm font-medium text-gray-700">Tag as "POPULAR"</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={formData.isSoldOut || false} onChange={e => setFormData({...formData, isSoldOut: e.target.checked})} className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-sm font-medium text-gray-700">Tag as "SOLD OUT"</span>
                  </label>
                </div>
                <div className="pt-2 sm:pt-4 flex gap-2 sm:gap-3">
                  <button type="button" onClick={() => setShowProductForm(false)} className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">Cancel</button>
                  <button type="submit" className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-colors shadow-md shadow-pink-200 text-sm sm:text-base">Save Item</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- STOREFRONT VIEW ---
  return (
    <div className="min-h-screen bg-[#faf9f8] font-sans text-gray-800 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <div className="bg-pink-200 text-pink-900 text-xs sm:text-sm py-2 sm:py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles size={14} className="animate-pulse" /> Free shipping on aesthetic bundles over ₹1999! <Sparkles size={14} className="animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 text-gray-600 hover:text-pink-500 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 sm:justify-start">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tighter text-gray-900 cursor-pointer hover:text-pink-500 transition-colors">
                Thriftoholic
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:space-x-8 sm:items-center">
              <a href="#shop" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Shop</a>
              <a href="#categories" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Categories</a>
              <a href="#how-to-order" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">How to Order</a>
            </div>

            {/* Cart Button */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 sm:p-2 text-gray-600 hover:text-pink-500 transition-colors group"
              >
                <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] sm:text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-pink-500 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-b border-pink-100 absolute w-full shadow-lg">
            <div className="pt-2 pb-4 space-y-1 px-4">
              <a href="#shop" onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50">Shop</a>
              <a href="#categories" onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50">Categories</a>
              <a href="#how-to-order" onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50">How to Order</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Slide-over */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-[85vw] max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
              <div className="px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between border-b border-pink-100 bg-pink-50/50">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingBag size={18} className="text-pink-500 sm:w-5 sm:h-5" />
                  Your Haul
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-100 rounded-full flex items-center justify-center">
                      <ShoppingBag size={32} className="text-pink-300 sm:w-10 sm:h-10" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-500">Your cart is feeling a little empty! 🥺</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-sm sm:text-base text-pink-500 font-medium hover:text-pink-600 underline underline-offset-4"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-4 sm:space-y-6">
                    {cart.map((item, index) => (
                      <li key={index} className="flex gap-3 sm:gap-4 p-2 sm:p-3 bg-white border border-pink-50 rounded-2xl shadow-sm">
                        <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl" />
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-xs sm:text-sm font-medium text-gray-900">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-pink-500 font-medium mt-1">₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="self-center p-1.5 sm:p-2 text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <X size={16} className="sm:w-[18px] sm:h-[18px]"/>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-pink-100 p-4 sm:p-6 bg-pink-50/30">
                  <div className="flex justify-between text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">
                    <p>Subtotal</p>
                    <p>₹{cartTotal}</p>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6 flex items-center gap-1">
                    <Check size={12} className="text-green-500 sm:w-3.5 sm:h-3.5" /> Shipping & taxes calculated at checkout
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-medium hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-200 active:scale-[0.98]"
                  >
                    <MessageCircle size={18} className="sm:w-5 sm:h-5"/>
                    Checkout via WhatsApp
                  </button>
                  <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3">Or DM us on Instagram with your order!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-24 lg:py-32 px-4 overflow-hidden flex items-center min-h-[70vh] sm:min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-0 -right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100 text-pink-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-transform cursor-pointer">
              <Sparkles size={14} className="text-pink-500 animate-pulse sm:w-4 sm:h-4" /> Welcome to the ultimate thrift experience
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              Curated thrifted <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">clothing & cute</span> accessories.
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-xl mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
              Discover one-of-a-kind pieces, aesthetic jewelry, and adorable keychains. Sustainable fashion, handpicked for you. 🎀
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="#shop"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-full font-medium text-base sm:text-lg hover:bg-pink-500 transition-all duration-300 shadow-xl shadow-pink-200/50 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
              >
                Shop Now <ArrowRight size={18} className="sm:w-5 sm:h-5"/>
              </a>
              <a 
                href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-900 border border-pink-200 rounded-full font-medium text-base sm:text-lg hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
              >
                <Instagram size={18} className="text-pink-500 sm:w-5 sm:h-5" /> Follow Us
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-200/50 transform rotate-3 hover:rotate-0 transition-all duration-500 border-8 border-white">
              <img src="https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/628009918_17858071005606164_4802859380429203738_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgyNjUwMTk1NDQ2MjQ4NzI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EDi9COpP7uwQ7kNvwGg7eM_&_nc_oc=AdnLfE41DgC35ufPzqgRRzFToVq6pL9jTB6ovtcuAs4VafqnIYsDj1cC_vLeWmSu7Fw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&_nc_gid=ewt8kLIE8cQoKFjnyTK3AA&_nc_ss=8&oh=00_AfxArFek4Eh-yCl3h-N-wyeuIVQDdHN73kKoJ8dssKuQXQ&oe=69B61EC7" alt="Aesthetic Thrift" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-60"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-xl animate-bounce-slow border border-pink-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                  <Heart className="fill-pink-500 sm:w-6 sm:h-6" size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">100+ Unique</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Items added weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">Shop by Category</h2>
            <p className="text-sm sm:text-base text-gray-500">Find exactly what your closet is missing.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CATEGORIES.map((cat, idx) => (
              <a 
                href="#shop" 
                key={idx} 
                className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ${cat.color} p-4 sm:p-8 aspect-square flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-white/50 backdrop-blur-sm shadow-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">{cat.emoji}</div>
                <h3 className="text-sm sm:text-xl font-medium text-gray-900 relative z-10">{cat.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">Featured Finds</h2>
              <p className="text-sm sm:text-base text-gray-500">Handpicked items, ready for a new home.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors">
              View All <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 border border-pink-50 flex flex-col relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover object-center transition-transform duration-700 ${product.isSoldOut ? 'opacity-70' : 'group-hover:scale-105'}`}
                  />
                  {/* Badges */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col items-start gap-1 sm:gap-2">
                    {product.isSoldOut && <span className="bg-gray-900/90 backdrop-blur text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">SOLD OUT</span>}
                    {product.originalPrice && product.originalPrice > product.price && !product.isSoldOut && (
                      <span className="bg-red-500/90 backdrop-blur text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                    {!product.isSoldOut && product.isNew && <span className="bg-white/90 backdrop-blur text-gray-900 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">NEW</span>}
                    {!product.isSoldOut && product.isPopular && <span className="bg-pink-500/90 backdrop-blur text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">POPULAR</span>}
                  </div>
                  {/* Quick Add Button on Hover (Desktop) / Always Visible (Mobile) */}
                  {!product.isSoldOut && (
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-white/95 backdrop-blur-md text-gray-900 font-medium py-3 rounded-xl shadow-lg hover:bg-gray-900 hover:text-white transition-colors flex justify-center items-center gap-2"
                      >
                        <ShoppingBag size={18} /> Add to Cart
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-3 sm:p-5 flex-1 flex flex-col">
                  <p className="text-[10px] sm:text-xs text-pink-500 font-medium mb-1 uppercase tracking-wider">{product.category}</p>
                  <h3 className={`text-sm sm:text-lg font-medium mb-1 sm:mb-2 leading-tight line-clamp-2 ${product.isSoldOut ? 'text-gray-500' : 'text-gray-900'}`}>{product.name}</h3>
                  <div className="mt-auto flex items-center justify-between pt-2 sm:pt-0">
                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                      <p className={`text-base sm:text-xl font-serif font-bold ${product.isSoldOut ? 'text-gray-400' : 'text-gray-900'}`}>₹{product.price}</p>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <p className="text-xs sm:text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
                      )}
                    </div>
                    {/* Mobile Add to Cart Button */}
                    {!product.isSoldOut && (
                      <button 
                        onClick={() => addToCart(product)}
                        className="sm:hidden p-2 sm:p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-500 hover:text-white transition-all active:scale-95 shadow-sm"
                      >
                        <ShoppingBag size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-10 text-center sm:hidden">
            <a href="#" className="inline-flex items-center text-sm text-pink-500 font-medium hover:text-pink-600 transition-colors">
              View All Products <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section id="how-to-order" className="py-12 sm:py-20 bg-pink-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">How to Order</h2>
            <p className="text-sm sm:text-base text-gray-600">Since we're a small Instagram-based business, our checkout process is a little different (and more personal)! 💕</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
            {/* Connecting Line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-pink-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100 mb-4 sm:mb-6 text-pink-500">
                <Heart size={28} className="fill-pink-50 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">1. Browse & Add</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">Browse our cute aesthetic items and add your favorites to the cart.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100 mb-4 sm:mb-6 text-pink-500">
                <ShoppingBag size={28} className="fill-pink-50 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">2. Review Cart</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">Open your cart to review your haul. Make sure you snagged everything you want!</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-pink-100 mb-4 sm:mb-6 text-[#25D366]">
                <MessageCircle size={28} className="fill-green-50 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">3. Checkout via DM</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">Click checkout to send us an automatic message on WhatsApp or IG to arrange payment and shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">Thrifted With Love</h2>
            <p className="text-sm sm:text-base text-gray-500">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="text-pink-200 absolute top-4 right-4 sm:top-6 sm:right-6">
                  <Star size={32} className="fill-pink-50 opacity-50 sm:w-10 sm:h-10" />
                </div>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400 sm:w-4 sm:h-4" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 italic mb-4 sm:mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full flex items-center justify-center text-pink-700 text-sm sm:text-base font-bold uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm">{review.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">{review.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 bg-pink-50/30 border-y border-pink-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">Why Shop With Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 border border-pink-50 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-3 sm:mb-4">
                <Lock size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">Secure Payment</h3>
              <p className="text-[10px] sm:text-sm text-gray-500">Safe and secure checkout options.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 border border-pink-50 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-3 sm:mb-4">
                <ShieldCheck size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">Trusted Store</h3>
              <p className="text-[10px] sm:text-sm text-gray-500">Trusted by our growing community.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 border border-pink-50 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-3 sm:mb-4">
                <Leaf size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">Sustainable Fashion</h3>
              <p className="text-[10px] sm:text-sm text-gray-500">Promoting eco-friendly thrift fashion.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 border border-pink-50 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-3 sm:mb-4">
                <Truck size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">Fast Delivery</h3>
              <p className="text-[10px] sm:text-sm text-gray-500">Quick and reliable shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 mb-4 sm:mb-6 text-white shadow-lg shadow-pink-200">
            <Instagram size={24} className="sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">Follow Us on Instagram</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10">See our latest thrift drops and cute accessories</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
            {INSTAGRAM_POSTS.map((img, i) => (
              <a href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer" key={i} className="relative group overflow-hidden rounded-[1rem] sm:rounded-[2rem] aspect-square block shadow-sm border border-gray-50">
                <img src={img} alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white backdrop-blur-[2px]">
                  <Instagram size={24} className="sm:w-10 sm:h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12">
             <a 
              href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-full font-medium text-sm sm:text-lg hover:bg-pink-500 transition-all duration-300 shadow-xl shadow-pink-200/50 hover:-translate-y-1 active:scale-95"
            >
              <Instagram size={16} className="sm:w-5 sm:h-5" /> Visit Our Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-12 sm:pt-20 pb-8 sm:pb-10 rounded-t-[2rem] sm:rounded-t-[3rem] mt-8 sm:mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 border-b border-gray-800 pb-8 sm:pb-12">
            
            <div className="md:col-span-5 text-center sm:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tighter mb-3 sm:mb-4">
                Thriftoholic
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-sm mx-auto sm:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Curated thrifted clothing, cute accessories, and aesthetic items. Sustainable fashion for the Gen-Z soul. 🦋
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                  <MessageCircle size={18} />
                </a>
                <a href="mailto:hello@thriftoholic.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 text-center sm:text-left">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-200">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#shop" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">Shop Collection <ExternalLink size={12}/></a></li>
                <li><a href="#categories" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">Categories <ExternalLink size={12}/></a></li>
                <li><a href="#how-to-order" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">How to Order <ExternalLink size={12}/></a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">Shipping Policy <ExternalLink size={12}/></a></li>
              </ul>
            </div>

            <div className="md:col-span-4 text-center sm:text-left">
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-4 text-gray-200">Stay Updated</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">Join our newsletter for exclusive drops and discount codes!</p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-gray-800 text-white px-4 py-2.5 sm:py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-700 text-sm sm:text-base"
                />
                <button type="submit" className="bg-pink-500 text-white px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-pink-600 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Thriftoholic. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <button 
                onClick={() => setIsAdminMode(true)} 
                className="hover:text-pink-400 transition-colors flex items-center gap-1"
                title="Admin Access"
              >
                <Lock size={12} /> Admin
              </button>
              <span className="text-gray-700 hidden sm:inline">•</span>
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
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}

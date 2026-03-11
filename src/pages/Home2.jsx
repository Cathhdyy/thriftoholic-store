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
  Truck,
  Shirt,
  Gem,
  MapPin,
  Sprout
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
  { name: "Thrifted Clothes", desc: "Vintage & Y2K finds", icon: Shirt, color: "bg-rose-50/80 border-4 border-white shadow-xl shadow-rose-100/50", iconColor: "text-rose-500", iconBg: "bg-white border-2 border-rose-100 shadow-sm" },
  { name: "Accessories", desc: "Cute little additions", icon: Sparkles, color: "bg-orange-50/80 border-4 border-white shadow-xl shadow-orange-100/50", iconColor: "text-orange-500", iconBg: "bg-white border-2 border-orange-100 shadow-sm" },
  { name: "Jewelry", desc: "Rings & necklaces", icon: Gem, color: "bg-amber-50/80 border-4 border-white shadow-xl shadow-amber-100/50", iconColor: "text-amber-500", iconBg: "bg-white border-2 border-amber-100 shadow-sm" },
  { name: "Keychains", desc: "Bags & keys", icon: Key, color: "bg-pink-50/80 border-4 border-white shadow-xl shadow-pink-100/50", iconColor: "text-pink-500", iconBg: "bg-white border-2 border-pink-100 shadow-sm" }
];

const REVIEWS = [
  { id: 1, name: "Sarah J.", handle: "@sarah.aesthetics", text: "The hoodie I got is so comfy and smells amazing! Packaging was 10/10 cute 🥺", rating: 5 },
  { id: 2, name: "Emily R.", handle: "@emilyy_roses", text: "In LOVE with my new pearl necklace. Super fast shipping and the seller is so sweet!", rating: 5 },
  { id: 3, name: "Mia K.", handle: "@mia.k", text: "The keychains are exactly like the pictures. Will definitely be buying more accessories soon!! 💖", rating: 5 }
];

const INSTAGRAM_POSTS = [
  "https://i.postimg.cc/7GWjZkYh/1.jpg",
  "https://i.postimg.cc/4HHqKSm1/2.jpg",
  "https://i.postimg.cc/47SjxgNw/3.jpg",
  "https://i.postimg.cc/ZBMX5SKd/4.jpg",
  "https://i.postimg.cc/G82ZR2r4/5.jpg",
  "https://i.postimg.cc/hzjHnjgB/6.jpg"
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
    if (passwordInput === 'Sanskar12345') {
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
          <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border-[6px] border-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500 border-4 border-white shadow-lg">
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
                  className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-300 bg-gray-50 focus:bg-white transition-all"
                  placeholder="Enter admin password"
                  autoFocus
                />
                {loginError && <p className="text-red-500 text-sm mt-2 font-medium">{loginError}</p>}
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-pink-500 transition-all shadow-xl hover:shadow-pink-200/50 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Lock size={18} /> Login to Dashboard
              </button>
              <button 
                type="button"
                onClick={() => setIsAdminMode(false)}
                className="w-full py-4 bg-white text-gray-600 border-2 border-gray-100 rounded-2xl font-medium hover:bg-gray-50 hover:border-gray-200 transition-all"
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
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-[2rem] shadow-lg shadow-gray-100/50 border-4 border-white">
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
          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border-4 border-white overflow-hidden">
            <div className="p-4 sm:p-6 border-b-2 border-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Products ({products.length})</h2>
              <button 
                onClick={openAddForm}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-900 text-white rounded-xl text-sm sm:text-base font-medium hover:bg-pink-500 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
              >
                <Plus size={18} /> Add New Product
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-xs sm:text-sm border-b-2 border-gray-50">
                    <th className="p-3 sm:p-4 font-medium">Product</th>
                    <th className="p-3 sm:p-4 font-medium">Category</th>
                    <th className="p-3 sm:p-4 font-medium">Price</th>
                    <th className="p-3 sm:p-4 font-medium">Badges</th>
                    <th className="p-3 sm:p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="border-b-2 border-gray-50/50 hover:bg-pink-50/20 transition-colors text-sm sm:text-base">
                      <td className="p-3 sm:p-4 flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border-2 border-white shadow-sm" />
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
                          {product.isSoldOut && <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-medium shadow-sm">Sold Out</span>}
                          {!product.isSoldOut && product.isNew && <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium shadow-sm">New</span>}
                          {!product.isSoldOut && product.isPopular && <span className="text-[10px] sm:text-xs bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full font-medium shadow-sm">Popular</span>}
                        </div>
                      </td>
                      <td className="p-3 sm:p-4 text-right">
                        <button onClick={() => openEditForm(product)} className="p-2 bg-gray-50 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all inline-block">
                          <Edit2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="p-2 bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all inline-block ml-2">
                          <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                     <tr>
                       <td colSpan="5" className="p-8 sm:p-12 text-center text-sm sm:text-base text-gray-500 bg-gray-50/30">Inventory is empty. Add your first item!</td>
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
            <div className="bg-white rounded-[2rem] border-4 border-white w-full max-w-lg shadow-2xl overflow-hidden animate-slide-in-right">
              <div className="p-4 sm:p-6 border-b-2 border-gray-50 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{editingProduct ? 'Edit Item' : 'Add New Item'}</h3>
                <button onClick={() => setShowProductForm(false)} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-white hover:shadow-sm transition-all">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSaveProduct} className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-50 focus:border-pink-300 text-sm sm:text-base transition-all" placeholder="e.g. Vintage Y2K Top" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                    <input required type="number" min="0" step="1" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-50 focus:border-pink-300 text-sm sm:text-base transition-all" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
                    <input type="number" min="0" step="1" value={formData.originalPrice || ''} onChange={e => setFormData({...formData, originalPrice: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-50 focus:border-pink-300 text-sm sm:text-base transition-all" placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-50 focus:border-pink-300 bg-white text-sm sm:text-base transition-all">
                    {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input required type="url" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-50 focus:border-pink-300 text-sm sm:text-base transition-all" placeholder="https://images.unsplash.com/..." />
                  {formData.image && <img src={formData.image} alt="Preview" className="mt-3 h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-2xl border-4 border-white shadow-md" onError={(e) => e.target.style.display='none'} />}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 bg-pink-50/50 p-4 rounded-2xl border-2 border-pink-100/50">
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
                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={() => setShowProductForm(false)} className="flex-1 px-4 py-3 border-2 border-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all text-sm sm:text-base">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-all shadow-lg shadow-pink-200/50 text-sm sm:text-base hover:-translate-y-0.5">Save Item</button>
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
              <span className="font-serif text-xl sm:text-3xl font-bold tracking-tighter text-gray-900 cursor-pointer hover:text-pink-500 transition-colors">
                Thriftoholic
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:flex sm:space-x-8 sm:items-center bg-white/50 px-8 py-3 rounded-full border-2 border-white shadow-sm">
              <a href="#shop" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">Shop</a>
              <a href="#categories" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">Categories</a>
              <a href="#about" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">Our Story</a>
              <a href="#how-to-order" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">How to Order</a>
              <a href="/faq" className="text-sm font-bold text-gray-600 hover:text-pink-500 transition-colors">FAQ</a>
            </div>

            {/* Cart Button */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 sm:p-3 bg-white border-2 border-pink-50 rounded-full text-gray-700 hover:text-pink-500 hover:border-pink-200 transition-all group shadow-md shadow-pink-100/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-[10px] sm:text-xs font-bold text-white bg-pink-500 border-2 border-white rounded-full shadow-sm">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-md border-b-4 border-white absolute w-full shadow-xl shadow-pink-100/50 rounded-b-[2rem]">
            <div className="pt-4 pb-6 space-y-2 px-6">
              <a href="#shop" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">Shop</a>
              <a href="#categories" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">Categories</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">Our Story</a>
              <a href="#how-to-order" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">How to Order</a>
              <a href="/faq" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700 border-b-2 border-dashed border-gray-100">FAQ</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-gray-700">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Slide-over */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex p-2 sm:p-4">
            <div className="w-[90vw] max-w-md bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col h-full rounded-[2rem] sm:rounded-[3rem] border-4 border-white overflow-hidden animate-slide-in-right">
              <div className="px-6 py-5 flex items-center justify-between bg-pink-50/50 border-b-2 border-dashed border-pink-100">
                <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-pink-100 text-pink-500">
                    <ShoppingBag size={18} />
                  </div>
                  Your Haul
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-gray-100 text-gray-400 hover:text-pink-500 hover:border-pink-200 transition-all hover:rotate-90">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-pink-100/50">
                      <ShoppingBag size={36} className="text-pink-300" />
                    </div>
                    <p className="text-base text-gray-500 font-medium">Your cart is feeling a little empty! 🥺</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-3 bg-white border-2 border-pink-200 text-pink-500 rounded-full font-bold hover:bg-pink-50 hover:scale-105 transition-all shadow-sm"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cart.map((item, index) => (
                      <li key={index} className="flex gap-4 p-3 bg-white border-4 border-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl border-2 border-gray-100" />
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.name}</h3>
                          <p className="text-sm text-pink-500 font-bold">₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="self-center p-2.5 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-pink-50/50 border-t-2 border-dashed border-pink-100">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900 mb-4 bg-white p-4 rounded-2xl shadow-sm border-2 border-white">
                    <p>Subtotal</p>
                    <p className="text-pink-600 text-xl">₹{cartTotal}</p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium mb-6 flex items-center justify-center gap-1.5">
                    <Check size={14} className="text-green-500" /> Shipping & taxes calculated at checkout
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-[1.5rem] text-base font-bold hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-200/60 hover:-translate-y-1 active:scale-[0.98] border-4 border-white"
                  >
                    <MessageCircle size={20} />
                    Checkout via WhatsApp
                  </button>
                  <p className="text-center text-[11px] sm:text-xs font-medium text-gray-400 mt-4">Or DM us on Instagram with your order!</p>
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-100/50 border-4 border-white text-pink-600 text-xs sm:text-sm font-bold mb-6 hover:scale-105 transition-transform cursor-pointer">
              <Sparkles size={14} className="text-pink-500 animate-pulse sm:w-4 sm:h-4" /> Welcome to the ultimate thrift experience
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-tight mb-6">
              Curated thrifted <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400 drop-shadow-sm">clothing & cute</span> accessories.
            </h1>
            <p className="text-base sm:text-xl font-medium text-gray-600 max-w-xl mb-10 leading-relaxed px-2 sm:px-0">
              Discover one-of-a-kind pieces, aesthetic jewelry, and adorable keychains. Sustainable fashion, handpicked for you. 🎀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="#shop"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-base sm:text-lg hover:bg-pink-500 transition-all duration-300 shadow-2xl shadow-pink-200/50 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 border-4 border-gray-800 hover:border-pink-400"
              >
                Shop Now <ArrowRight size={20} />
              </a>
              <a 
                href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
                className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 border-4 border-white rounded-full font-bold text-base sm:text-lg hover:border-pink-200 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-gray-200/40 hover:-translate-y-1 active:scale-95"
              >
                <Instagram size={20} className="text-pink-500" /> Follow Us
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-pink-200/60 transform rotate-3 hover:rotate-0 transition-all duration-500 border-[8px] border-white bg-white">
              <img src="https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/628009918_17858071005606164_4802859380429203738_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgyNjUwMTk1NDQ2MjQ4NzI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EDi9COpP7uwQ7kNvwGg7eM_&_nc_oc=AdnLfE41DgC35ufPzqgRRzFToVq6pL9jTB6ovtcuAs4VafqnIYsDj1cC_vLeWmSu7Fw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&_nc_gid=ewt8kLIE8cQoKFjnyTK3AA&_nc_ss=8&oh=00_AfxArFek4Eh-yCl3h-N-wyeuIVQDdHN73kKoJ8dssKuQXQ&oe=69B61EC7" alt="Aesthetic Thrift" className="w-full h-full object-cover rounded-[2.2rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-60 rounded-[2.2rem]"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[2rem] shadow-2xl shadow-pink-200/50 animate-bounce-slow border-4 border-white">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 shadow-inner">
                  <Heart className="fill-pink-500 sm:w-7 sm:h-7" size={24} />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">100+ Unique</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500">Items added weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-12 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-sm sm:text-base font-medium text-gray-500 bg-white/60 inline-block px-6 py-2 rounded-full border-2 border-white shadow-sm">Find exactly what your closet is missing.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <a
                  href="#shop"
                  key={idx}
                  className={`group relative flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-8 rounded-[2.5rem] ${cat.color} overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white/40 backdrop-blur-sm`}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] ${cat.iconBg} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className={`${cat.iconColor}`} size={28} />
                  </div>
                  <h3 className="text-base sm:text-xl font-extrabold text-gray-900 mb-2 sm:mb-2 group-hover:text-pink-600 transition-colors">{cat.name}</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">{cat.desc}</p>
                  
                  <div className="hidden sm:flex absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md border-2 border-pink-50">
                    <ArrowRight className={cat.iconColor} size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-12 sm:py-24 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Featured Finds</h2>
              <p className="text-sm sm:text-base font-medium text-gray-500">Handpicked items, ready for a new home.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-pink-500 font-bold bg-pink-50 px-5 py-2.5 rounded-full border-2 border-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              View All <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white/70 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl shadow-pink-100/40 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-500 border-[6px] border-white flex flex-col relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 m-1 sm:m-1.5 rounded-[1.5rem] sm:rounded-[2rem]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover object-center transition-transform duration-1000 ${product.isSoldOut ? 'opacity-70' : 'group-hover:scale-105'}`}
                  />
                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col items-start gap-2">
                    {product.isSoldOut && <span className="bg-gray-900/95 backdrop-blur text-white text-[10px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-gray-700">SOLD OUT</span>}
                    {product.originalPrice && product.originalPrice > product.price && !product.isSoldOut && (
                      <span className="bg-red-500/95 backdrop-blur text-white text-[10px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-red-400">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                    {!product.isSoldOut && product.isNew && <span className="bg-white/95 backdrop-blur text-gray-900 text-[10px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-white">NEW</span>}
                    {!product.isSoldOut && product.isPopular && <span className="bg-gradient-to-r from-pink-500 to-amber-400 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-pink-400">POPULAR</span>}
                  </div>
                  {/* Quick Add Button on Hover (Desktop) */}
                  {!product.isSoldOut && (
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-white/95 backdrop-blur-xl text-gray-900 font-bold py-3.5 rounded-[1.2rem] shadow-xl border-2 border-white hover:bg-gray-900 hover:text-white hover:border-gray-800 transition-colors flex justify-center items-center gap-2"
                      >
                        <ShoppingBag size={18} /> Add to Cart
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col bg-white/30">
                  <p className="text-[10px] sm:text-xs text-pink-500 font-extrabold mb-1.5 uppercase tracking-widest">{product.category}</p>
                  <h3 className={`text-sm sm:text-lg font-bold mb-2 sm:mb-3 leading-snug line-clamp-2 ${product.isSoldOut ? 'text-gray-500' : 'text-gray-900'}`}>{product.name}</h3>
                  <div className="mt-auto flex items-center justify-between pt-2 sm:pt-0">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <p className={`text-lg sm:text-2xl font-serif font-bold ${product.isSoldOut ? 'text-gray-400' : 'text-gray-900'}`}>₹{product.price}</p>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <p className="text-xs sm:text-sm font-medium text-gray-400 line-through">₹{product.originalPrice}</p>
                      )}
                    </div>
                    {/* Mobile Add to Cart Button */}
                    {!product.isSoldOut && (
                      <button 
                        onClick={() => addToCart(product)}
                        className="sm:hidden p-2.5 sm:p-3 bg-pink-50 text-pink-600 border-2 border-white rounded-full hover:bg-pink-500 hover:text-white transition-all active:scale-95 shadow-md"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <a href="#" className="inline-flex items-center text-sm text-pink-600 font-bold bg-white px-6 py-3 rounded-full border-2 border-pink-100 shadow-md active:scale-95 transition-transform">
              View All Products <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-28 relative overflow-hidden bg-white/40">
        {/* Soft separation line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-50 text-pink-600 text-xs sm:text-sm font-bold mb-6 border-4 border-white shadow-lg shadow-pink-100/50">
                <MapPin size={14} /> Born in Namchi, Sikkim
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                A small local brand, <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400 drop-shadow-sm">with a big heart.</span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-gray-600 mb-5 leading-relaxed">
                Nestled in the beautiful hills of Namchi, Sikkim, <strong>Thriftoholic</strong> started as a passion project to bring sustainable, aesthetic, and adorable fashion to everyone without breaking the bank.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-600 mb-10 leading-relaxed">
                Every single piece is handpicked with love! We believe in giving pre-loved clothes a beautiful second life and curating the cutest accessories to match your unique Gen-Z energy. 🌸
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-4 p-4 sm:p-5 rounded-[2rem] bg-white border-[4px] border-white shadow-xl shadow-green-100/50 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 shrink-0 border-2 border-green-100">
                    <Sprout size={24} />
                  </div>
                  <span className="font-extrabold text-sm sm:text-base text-gray-800 leading-tight">Sustainable <br/> <span className="font-medium text-xs sm:text-sm text-gray-500">Fashion</span></span>
                </div>
                <div className="flex items-center gap-4 p-4 sm:p-5 rounded-[2rem] bg-white border-[4px] border-white shadow-xl shadow-pink-100/50 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0 border-2 border-pink-100">
                    <Heart size={24} />
                  </div>
                  <span className="font-extrabold text-sm sm:text-base text-gray-800 leading-tight">Local Love <br/> <span className="font-medium text-xs sm:text-sm text-gray-500">From Sikkim</span></span>
                </div>
              </div>
            </div>

            {/* Interactive Image Side */}
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[550px] w-full flex items-center justify-center group cursor-pointer pt-10 sm:pt-0">
              {/* Background decorative blobs */}
              <div className="absolute w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-110 group-hover:bg-pink-300 transition-all duration-700"></div>
              <div className="absolute w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-20 translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>

              {/* Main Single Card */}
              <div className="relative w-[80%] sm:w-[70%] aspect-[4/5] bg-white/80 p-2 sm:p-3 rounded-[3rem] shadow-2xl shadow-pink-200/50 border-[8px] border-white transform rotate-3 group-hover:rotate-0 group-hover:-translate-y-4 transition-all duration-500 z-30">
                <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative">
                    <img src="https://i.postimg.cc/FHC3b1JM/Chat-GPT-Image-Mar-11-2026-01-43-36-AM.png" alt="Thriftoholic Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Namchi Tag */}
                <div className="absolute -bottom-6 -right-6 sm:-right-10 bg-white/95 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-4 rounded-[2rem] shadow-2xl border-4 border-white flex items-center gap-3 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-pink-50 border-2 border-pink-100 flex items-center justify-center text-pink-500 shadow-inner">
                     <MapPin size={18} /> 
                  </div>
                  <div>
                     <p className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">Namchi, SK</p>
                     <p className="text-[10px] sm:text-xs font-semibold text-pink-500">Local Brand</p>
                  </div>
                </div>
                
                {/* Sparkle decoration */}
                <div className="absolute -top-6 -left-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white rounded-full p-2 border-4 border-white shadow-lg">
                   <Sparkles size={28} className="animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section id="how-to-order" className="py-16 sm:py-24 relative">
        <div className="absolute top-0 left-1/4 right-1/4 border-t-4 border-dashed border-pink-200/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">How to Order</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600 bg-white/50 inline-block px-8 py-3 rounded-full border-4 border-white shadow-sm">Since we're a small Instagram-based business, our checkout process is a little more personal! 💕</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 relative">
            {/* Connecting Line for desktop */}
            <div className="hidden md:block absolute top-14 left-1/6 right-1/6 border-t-4 border-dashed border-pink-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-pink-100/50 border-[6px] border-white mb-6 sm:mb-8 text-pink-500 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300">
                <Heart size={36} className="fill-pink-50 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-3 bg-pink-50 px-4 py-1.5 rounded-full border-2 border-white shadow-sm">1. Browse & Add</h3>
              <p className="text-sm sm:text-base font-medium text-gray-600 px-4 sm:px-0">Browse our cute aesthetic items and add your favorites to the cart.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-pink-100/50 border-[6px] border-white mb-6 sm:mb-8 text-pink-500 group-hover:-translate-y-2 group-hover:-rotate-3 transition-all duration-300">
                <ShoppingBag size={36} className="fill-pink-50 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-3 bg-pink-50 px-4 py-1.5 rounded-full border-2 border-white shadow-sm">2. Review Cart</h3>
              <p className="text-sm sm:text-base font-medium text-gray-600 px-4 sm:px-0">Open your cart to review your haul. Make sure you snagged everything you want!</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-green-100/50 border-[6px] border-white mb-6 sm:mb-8 text-[#25D366] group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300">
                <MessageCircle size={36} className="fill-green-50 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-3 bg-green-50 px-4 py-1.5 rounded-full border-2 border-white shadow-sm">3. Checkout via DM</h3>
              <p className="text-sm sm:text-base font-medium text-gray-600 px-4 sm:px-0">Click checkout to send us an automatic message on WhatsApp or IG to arrange payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 sm:py-24 overflow-hidden bg-white/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Thrifted With Love</h2>
            <p className="text-sm sm:text-base font-medium text-gray-500">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-pink-100/40 border-[6px] border-white hover:shadow-2xl hover:shadow-pink-200/50 hover:-translate-y-2 transition-all duration-500 relative group">
                <div className="text-pink-100 absolute top-6 right-6 sm:top-8 sm:right-8 group-hover:scale-110 group-hover:text-pink-200 transition-all">
                  <Star size={40} className="fill-current" />
                </div>
                <div className="flex gap-1.5 mb-5 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700 italic mb-6 sm:mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-200 to-amber-200 rounded-[1rem] flex items-center justify-center text-pink-700 text-lg font-black uppercase border-2 border-white shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                    <p className="text-[11px] sm:text-xs font-bold text-pink-500">{review.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-pink-50/50 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-2 transition-all duration-500 border-4 border-white flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-pink-50 rounded-[1.5rem] flex items-center justify-center text-pink-500 mb-4 sm:mb-6 border-4 border-white shadow-sm">
                <Lock size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-extrabold text-gray-900 mb-1.5">Secure Payment</h3>
              <p className="text-[11px] sm:text-sm font-medium text-gray-500">Safe and secure options.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-amber-50/50 hover:shadow-2xl hover:shadow-amber-100/50 hover:-translate-y-2 transition-all duration-500 border-4 border-white flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-500 mb-4 sm:mb-6 border-4 border-white shadow-sm">
                <ShieldCheck size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-extrabold text-gray-900 mb-1.5">Trusted Store</h3>
              <p className="text-[11px] sm:text-sm font-medium text-gray-500">Growing community.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-green-50/50 hover:shadow-2xl hover:shadow-green-100/50 hover:-translate-y-2 transition-all duration-500 border-4 border-white flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-green-50 rounded-[1.5rem] flex items-center justify-center text-green-500 mb-4 sm:mb-6 border-4 border-white shadow-sm">
                <Leaf size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-extrabold text-gray-900 mb-1.5">Sustainable</h3>
              <p className="text-[11px] sm:text-sm font-medium text-gray-500">Eco-friendly fashion.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-blue-50/50 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 border-4 border-white flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-500 mb-4 sm:mb-6 border-4 border-white shadow-sm">
                <Truck size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-extrabold text-gray-900 mb-1.5">Fast Delivery</h3>
              <p className="text-[11px] sm:text-sm font-medium text-gray-500">Quick and reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-16 sm:py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-[2rem] bg-white border-[6px] border-white mb-6 text-pink-500 shadow-xl shadow-pink-200/50">
            <Instagram size={32} className="sm:w-10 sm:h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
          <p className="text-sm sm:text-base font-medium text-gray-500 mb-12 sm:mb-16">See our latest thrift drops and cute accessories</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {INSTAGRAM_POSTS.map((img, i) => (
              <a href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer" key={i} className="relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] aspect-square block shadow-xl shadow-pink-100/50 border-[6px] border-white bg-white">
                <img src={img} alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100 text-pink-500">
                    <Instagram size={24} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16">
             <a 
              href="https://www.instagram.com/__thriftoholic/" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border-4 border-white rounded-full font-bold text-base sm:text-lg hover:border-pink-200 hover:bg-pink-50 transition-all duration-300 shadow-xl shadow-pink-100/50 hover:-translate-y-1 active:scale-95"
            >
              <Instagram size={20} className="text-pink-500" /> Visit Our Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/60 backdrop-blur-lg border-[6px] border-white shadow-2xl shadow-pink-100/50 rounded-[3rem] sm:rounded-[4rem] py-16 sm:py-20 relative overflow-hidden">
          {/* Decorative Dashed Ring */}
          <div className="absolute inset-4 sm:inset-6 border-4 border-dashed border-pink-100/50 rounded-[2.5rem] sm:rounded-[3.5rem] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-pink-50 rounded-[2rem] flex items-center justify-center shadow-lg border-4 border-white mx-auto mb-8 text-pink-500">
              <MessageCircle size={32} className="fill-pink-100" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Got Questions? 💭</h2>
            <p className="text-base sm:text-lg font-medium text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
              Wondering about shipping, sizes, or how to order? We've got all the answers ready for you in our Frequently Asked Questions!
            </p>
            <a 
              href="/faq" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gray-900 text-white border-4 border-gray-800 rounded-full font-bold text-base sm:text-lg hover:bg-pink-500 hover:border-pink-400 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-pink-200/50"
            >
              <Sparkles size={20} className="text-pink-200" /> Read our FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
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
                <li><a href="#shop" className="text-sm sm:text-base font-medium text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center gap-2">Shop Collection <ExternalLink size={14}/></a></li>
                <li><a href="#categories" className="text-sm sm:text-base font-medium text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center gap-2">Categories <ExternalLink size={14}/></a></li>
                <li><a href="#how-to-order" className="text-sm sm:text-base font-medium text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center gap-2">How to Order <ExternalLink size={14}/></a></li>
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
              <button 
                onClick={() => setIsAdminMode(true)} 
                className="hover:text-pink-400 bg-gray-900 px-4 py-2 rounded-full border border-gray-800 transition-colors flex items-center gap-1.5"
                title="Admin Access"
              >
                <Lock size={14} /> Admin
              </button>
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
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(3);
  const [toasts, setToasts] = useState([]);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    
    const id = Date.now() + Math.random();
    const newToast = { id, message: 'Item added to cart!' };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2500);
  };

  return (
    <CartContext.Provider value={{ cartCount, toasts, addToCart }}>
      {children}
      
      {/* Toast Notification HUD */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="flex items-center gap-3 bg-[#111111] text-white px-6 py-3.5 rounded-[4px] border-l-4 border-[#E8001D] shadow-lg animate-fade-in text-sm font-semibold z-[9999]"
          >
            <i className="fa-solid fa-circle-check text-green-400"></i>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

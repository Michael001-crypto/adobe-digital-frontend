// src/components/Cart.jsx
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{item.title || item.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <div className="pt-4 border-t flex justify-between font-bold text-lg text-indigo-600 dark:text-indigo-400">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

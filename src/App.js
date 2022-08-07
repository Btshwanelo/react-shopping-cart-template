import React from "react";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer.js";
import Navbar from "./components/Navbar.js";
import Modal from "./components/modal.js";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice.js";
// import { useDispatch, useSelector } from "react-redux/es/exports.js";
import { useAppDispatch, useAppSelector } from "./store.js";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.cart
  );
  const { isOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loading">
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

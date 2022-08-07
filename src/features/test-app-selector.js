const state = {
  cart: {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  modal: {
    isOpen: false,
  },
};
export const testUseAppSelector = (f) => f(state);

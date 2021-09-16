import { createStore } from 'vuex';
import product from './modules/product'


const Store = createStore({
  modules: {
    product,
  },
});

export default Store;




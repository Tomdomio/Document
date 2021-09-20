import { createStore } from "vuex";
import product from "./modules/product";
import cate from "./modules/cate";

const Store = createStore({
  modules: {
    product,
    cate,
  },
});

export default Store;

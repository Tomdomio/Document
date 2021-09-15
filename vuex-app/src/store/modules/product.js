import axios from 'axios';

const state = {
  Products: []
};

const getters = {
  allProducts: (state) => {
    return state.Products
  }
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('http://localhost:3000/products');

    commit('setProducts', response.data);
  }
}

const mutations = {
    setProducts: (state, Products) => (state.Products = Products)
};


export default {
    state,
    getters,
    actions,
    mutations
};
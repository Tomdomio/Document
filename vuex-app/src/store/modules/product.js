import axios from 'axios';

const state = {
  Products: [],
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
  },
  async deleteProd({ commit }, id) {
    await axios.delete('http://localhost:3000/products/' + id);
    const res = confirm('Bạn có chắc muốn xóa');
    if (res) {
      commit('removeProd', id)
    }
  },
  async addProd({ commit }, prod) {
    const response = await axios.post('http://localhost:3000/products', prod);
    commit('addProd', response.data).reload();
  }
};

const mutations = {
  setProducts: (state, Products) => (state.Products = Products),
  removeProd: (state, id) => state.Products = state.Products.filter((product) => product.id !== id),
  addProd:(state,newProd) => state.Products.unshift(newProd)
};

export default {
  state,
  getters,
  actions,
  mutations
};
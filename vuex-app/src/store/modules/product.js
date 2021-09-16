import axios from 'axios';
import swal from 'sweetalert2'

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
    await axios.delete('http://localhost:3000/products/'+id);
    commit('removeProd', id);
    swal({

    })
  }
};

const mutations = {
  setProducts: (state, Products) => (state.Products = Products),
  removeProd: (state, id) => state.Products = state.Products.filter((product) => product.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
};
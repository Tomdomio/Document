import axios from "axios";

const BaseURL = "http://localhost:3000/products/";

const state = {
  Products: [],
  ProdID: null,
};

const getters = {
  allProducts: (state) => {
    return state.Products;
  },
  IDProd: (state) => {
    return state.ProdID;
  },
  prodView: (state) => {
    return state.ProdID;
  },
};

const actions = {
  //get All
  async fetchProducts({ commit }) {
    const response = await axios.get(BaseURL);
    commit("setProducts", response.data);
  },
  //getProdByID
  async getProdID({ commit }, id) {
    const response = await axios.get(BaseURL + id);
    commit("ProductID", response.data);
  },
  //Delete
  async deleteProd({ commit }, id) {
    await axios.delete(BaseURL + id);
    const res = confirm("Bạn có chắc muốn xóa");
    if (res) {
      commit("removeProd", id);
    }
  },
  //Add
  async addProd({ commit }, prod) {
    const response = await axios.post(BaseURL, prod);
    commit("addProd", response.data);
  },
  //update
  async updateProd({ commit }, updatedProd) {
    const response = await axios.put(BaseURL + updatedProd.id, updatedProd);
    commit("updateProd", response.data);
  },
};

const mutations = {
  setProducts: (state, Products) => (state.Products = Products),
  removeProd: (state, id) => (state.Products = state.Products.filter((product) => product.id !== id)),
  addProd: (state, newProd) => state.Products.push(newProd),
  ProductID: (state, ProdID) => (state.ProdID = ProdID),
  updateProd: (state, updateProd) => {
    const index = state.Products.findIndex((product) => product.id === updateProd.id);
    if (index !== -1) {
      state.Products.splice(index, 1, updateProd);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

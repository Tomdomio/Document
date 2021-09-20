import axios from "axios";

const BaseURL = "http://localhost:3000/category/";

const state = {
  Cates: [],
  CateID: null,
};
const getters = {
  allCates: (state) => {
    return state.Cates;
  },
};
const actions = {
  //get All
  async fetchCates({ commit }) {
    const response = await axios.get(BaseURL);
    commit("setCates", response.data);
  },
};
const mutations = {
  setCates: (state, Cates) => (state.Cates = Cates),
};
export default {
  state,
  getters,
  actions,
  mutations,
};

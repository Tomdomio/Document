import { createStore } from 'vuex';
// import axios from 'axios';

const store = createStore({

  state: {
    productsList: [],
    notifi: {
      status: false,
      txt: ''
    }
  },
  action: {
  },
});

export default store;




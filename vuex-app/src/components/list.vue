<template>
  <div class="list">
    <!-- <div class="list-single">
      <div class="list-single-img">
        <a href="#"><img src="https://adchiase.com/upload/chinhanh/2020/tochien/singed/cach-choi-singed-toc-chien33.jpg" class="js-prod" alt="img-product"></a>
      </div>
      <div class="list-single-item">
        <a href="#">
          <div class="list-single-item-cate js-cate">Category: </div>
          <h1 class="list-single-item-name js-name">Product Name</h1>
          <div class="list-single-item-price js-price">Product Price: 0₫</div>
          <div class="list-single-item-desc js-desc">Description: </div>
        </a>
      </div>
    </div> -->
    <div class="list-items">
      <div class="list-items-prod" v-for="prod in allProducts" :key="prod.id">
        <div class="list-items-prod-img">
          <img src="../assets/images/6.jpg" alt="img-product"/>
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">{{ prod.id }}</div>
            <h1 class="list-items-prod-desc-name">{{ prod.nameProduct }}</h1>
            <div class="list-items-prod-desc-price">{{ prod.price }}₫</div>
            <div class="list-items-prod-desc-descc">{{ prod.desc }}</div>
        </div>
        <!-- <input type="checkbox" name="name" id="name"> -->
        <ion-icon name="close-circle-outline" v-on:click="deleteProd(prod.id)"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "list",
  data(){
    const store = useStore();
    return{
      store,
    }
  },
  methods:{
    ...mapActions(["fetchProducts", "deleteProd"]),
  },
  computed:{
    ...mapGetters(["allProducts"]),
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
ion-icon{
  font-size: 25px;
}
</style>
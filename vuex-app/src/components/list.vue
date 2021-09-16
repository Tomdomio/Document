<template>
  <div class="list">
    <div class="list-single">
      <div class="list-single-img">
        <img src="https://adchiase.com/upload/chinhanh/2020/tochien/singed/cach-choi-singed-toc-chien33.jpg" class="js-prod" alt="img-product">
      </div>
      <div class="list-single-item">
          <div class="list-single-item-cate js-cate">Category: </div>
          <h1 class="list-single-item-name js-name">Product Name</h1>
          <div class="list-single-item-price js-price">Product Price: 0₫</div>
          <div class="list-single-item-desc js-desc">Description: </div>
      </div>
    </div>
    <div class="list-items">
      <div class="list-items-prod" v-for="(prod) in allProducts" :key="prod.id">
        <div class="list-items-prod-img">
          <img :src="prod.image" alt="img-product"/>
        </div>
        <div class="list-items-prod-desc">
          <div class="list-items-prod-desc-cate">{{ prod.cateProduct }}</div>
          <h1 class="list-items-prod-desc-name">{{ prod.nameProduct }}</h1>
          <div class="list-items-prod-desc-price">{{ prod.price }}₫</div>
          <div class="list-items-prod-desc-descc">{{ prod.desc }}</div>

          <ion-icon name="create-outline" v-on:click="editProd(prod.id)"></ion-icon>
          <ion-icon name="close-circle-outline" v-on:click="deleteProd(prod.id)"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "list",
  methods:{
    ...mapActions(["fetchProducts","deleteProd"]),
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
  color: red;
  display: inline-block;
}
.list-items-prod ion-icon:first-of-type{
  margin-right: 20px;
}
.list-single-item{
  cursor: default;
}
.list-single-item-cate{
  margin-bottom: 10px;
}
.list-items-prod{
  border: 1px solid red;
  border-radius: 10px;
  box-shadow: rgba(247, 37, 128, 0.809) 0px 5px 12px;
}
.list-items-prod-img{
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
}
.list-items-prod-desc-cate{
  margin-bottom: 10px;
}
.list-items-prod-desc{
  padding-left: 20px;
}
</style>
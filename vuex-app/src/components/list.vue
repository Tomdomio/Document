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
      <div class="list-items-prod" v-for="prod in products" :key="prod.id">
        <div class="list-items-prod-img">
          <img src="https://cdn.oneesports.gg/cdn-data/wp-content/uploads/sites/4/2020/07/Singed_9.jpg" alt="img-product">
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">{{ prod.id }}</div>
            <h1 class="list-items-prod-desc-name">{{ prod.nameProduct }}</h1>
            <div class="list-items-prod-desc-price">{{ prod.price }}₫</div>
            <div class="list-items-prod-desc-descc">{{ prod.image }}</div>
        </div>
        <input type="checkbox" name="name" id="name">
      </div>
      <!-- <div class="list-items-prod">
        <div class="list-items-prod-img">
          <img src="https://www.netgamix.com/wp-content/uploads/2017/03/cach-len-do-bang-ngoc-bang-bo-tro-singed-mua-7-1.jpg" alt="img-product">
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">Category: </div>
            <h1 class="list-items-prod-desc-name">Product Name</h1>
            <div class="list-items-prod-desc-price">Product Price: 0₫</div>
            <div class="list-items-prod-desc-descc">Description: </div>
        </div>
        <input type="checkbox" name="name" id="name">
      </div>
      <div class="list-items-prod">
        <div class="list-items-prod-img">
          <img src="https://lienminhhuyenthoai.vn/images/Lan_h3lpm3/12_2018/Snowdown/Master_Yi_SnowManYiSkin_full.jpg" alt="img-product">
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">Category: </div>
            <h1 class="list-items-prod-desc-name">Product Name</h1>
            <div class="list-items-prod-desc-price">Product Price: 0₫</div>
            <div class="list-items-prod-desc-descc">Description: </div>
        </div>
        <input type="checkbox" name="name" id="name">
      </div>
      <div class="list-items-prod">
        <div class="list-items-prod-img">
          <img src="https://thaotruong.com/wp-content/uploads/2020/05/khac-che-tuong-singed.jpg" alt="img-product">
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">Category: </div>
            <h1 class="list-items-prod-desc-name">Product Name</h1>
            <div class="list-items-prod-desc-price">Product Price: 0₫</div>
            <div class="list-items-prod-desc-descc">Description: </div>
        </div>
        <input type="checkbox" name="name" id="name">
      </div>
      <div class="list-items-prod">
        <div class="list-items-prod-img">
          <img src="https://10kiem.vn/cach-choi-singed/imager_34_91465_700.jpg" alt="img-product">
        </div>
        <div class="list-items-prod-desc">
            <div class="list-items-prod-desc-cate">Category: </div>
            <h1 class="list-items-prod-desc-name">Product Name</h1>
            <div class="list-items-prod-desc-price">Product Price: 0₫</div>
            <div class="list-items-prod-desc-descc">Description: </div>
        </div>
        <input type="checkbox" name="name" id="name">
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {useStore} from 'vuex';

export default {
  name: "list",
  data(){
    const store = useStore();
    return{
      store,
      products:[]
    }
  },
  async created(){
    try{
      const res =  await axios.get('http://localhost:3000/products');
      this.products = res.data;
    } catch(ex){
      console.error(ex);
    }
  },
}
</script>

<style>

</style>
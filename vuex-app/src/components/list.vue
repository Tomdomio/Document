<template>
  <div class="list">
    <div class="list-single" v-if="prodView">
      <div class="list-single-img">
        <img :src="IDProd.image" alt="img-product" />
      </div>
      <div class="list-single-item">
        <div class="list-single-item-cate js-cate">{{ IDProd.cateProduct }}</div>
        <h1 class="list-single-item-name js-name">{{ IDProd.nameProduct }}</h1>
        <div class="list-single-item-price js-price">{{ IDProd.price }} ₫</div>
        <div class="list-single-item-desc js-desc">{{ IDProd.desc }}</div>
      </div>
    </div>
    <div class="list-items">
      <div class="list-items-prod" v-for="prod in allProducts" :key="prod.id" @click="prodView = true" v-on:click="getProdID(prod.id)">
        <div class="list-items-prod-img">
          <img :src="prod.image" alt="img-product" />
        </div>
        <div class="list-items-prod-desc">
          <div class="list-items-prod-desc-cate">{{ prod.cateProduct }}</div>
          <h1 class="list-items-prod-desc-name">{{ prod.nameProduct }}</h1>
          <div class="list-items-prod-desc-price">{{ prod.price }}₫</div>
          <div class="list-items-prod-desc-descc">{{ prod.desc }}</div>
        </div>
        <div class="action">
          <ion-icon name="create-outline" @click="showModal = true" v-on:click="getProdID(prod.id)"></ion-icon>
          <ion-icon name="close-circle-outline" v-on:click="deleteProd(prod.id)"></ion-icon>
        </div>
      </div>
    </div>
  </div>
  <div class="editProp" v-if="showModal">
    <form @submit="updateSubmit">
      <div class="control-group">
        <label class="label">Product name:</label>
        <input type="text" class="input" v-model="IDProd.nameProduct" autocomplete="off" />
      </div>
      <div class="control-group">
        <label class="label">Product price:</label>
        <input type="text" class="input" v-model="IDProd.price" autocomplete="off" />
      </div>
      <div class="control-group">
        <label class="label">Description:</label>
        <textarea v-model="IDProd.desc" class="input" autocomplete="off"></textarea>
      </div>
      <div class="control-group">
        <label class="label">Choose category:</label>
        <select class="select" v-model="IDProd.cateProduct">
          <option v-for="cate in allCates" :key="cate.id">{{ cate.nameCate }}</option>
        </select>
      </div>
      <div class="control-group img">
        <label class="label">Upload Image:</label>
        <input type="file" @change="updateImage" class="input" autocomplete="off" />
        <img :src="IDProd.image" class="img-s" alt="" />
      </div>
      <button type="submit" class="form-btn">Update</button>
      <button @click="showModal = false" class="form-btn">Close</button>
    </form>
  </div>
  <div class="editProp-overlay" v-if="showModal"></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "list",
  data() {
    return {
      showModal: false,
      prodView: false,
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCates", "deleteProd", "getProdID", "updateProd"]),
    updateSubmit(e) {
      e.preventDefault();
      const updatedProd = {
        id: this.IDProd.id,
        nameProduct: this.IDProd.nameProduct,
        price: this.IDProd.price,
        desc: this.IDProd.desc,
        cateProduct: this.IDProd.cateProduct,
        image: this.IDProd.image,
      };
      this.updateProd(updatedProd);
      alert("Sửa Thành công");
      this.showModal = false;
    },
  },
  computed: {
    ...mapGetters(["allProducts", "IDProd", "prodView", "allCates"]),
  },
  created() {
    this.fetchProducts();
    this.fetchCates();
  },
};
</script>
<style scoped>
ion-icon {
  font-size: 25px;
  color: red;
  margin-top: 10px;
  display: inline-block;
}
.list-items-prod ion-icon:first-of-type {
  margin-right: 20px;
}
.list-single-item {
  cursor: default;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.list-single-item-price {
  margin-top: auto;
}
.list-items-prod-img img {
  object-fit: cover;
}
.list-single-img img {
  width: 100%;
}
.list-single-item-cate {
  margin-bottom: 10px;
}
.list-items-prod {
  border: 1px solid red;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(243, 102, 163, 0.809) 0px 5px 12px;
}
.list-items-prod-img {
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
}

.list-items-prod-desc-cate {
  margin-bottom: 10px;
}
.list-items-prod-desc-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.list-items-prod-desc {
  padding: 0 15px;
  flex: 1;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
}
.list-single-item-desc {
  margin-bottom: unset;
}
.list-items-prod-desc-price {
  margin-top: auto;
}
.img-s {
  max-width: 250px;
  margin-top: 20px;
}
.editProp {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 650px;
  background-color: #fff;
  z-index: 999;
  border-radius: 10px;
  padding: 40px;
  transition: opacity 0.3s ease;
}
.editProp-overlay {
  background-color: rgba(114, 113, 113, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s linear;
}
.control-group {
  margin-bottom: 15px;
}
.label {
  display: block;
  color: #6a99f3;
  font-size: 17px;
}
.input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #6a99f3;
}
.select {
  padding: 6px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid #6a99f3;
}
.img {
  margin-bottom: 25px;
}
.form-btn {
  display: inline-block;
  padding: 15px 0;
  width: 40%;
  background-color: #397bf5;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
}
form button:nth-of-type(2) {
  float: right;
}

.action {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  margin-top: auto;
  border-top: 1px solid red;
}
</style>

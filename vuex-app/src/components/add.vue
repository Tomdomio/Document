<template>
  <div class="main">
    <div class="container">
      <div class="product">
        <div class="product-cate">{{ prod.cateProduct }}</div>
        <h1 class="product-name">{{ prod.nameProduct }}</h1>
        <div class="product-price">{{ prod.price }}</div>
        <div class="product-desc">{{ prod.desc }}</div>
        <img :src="prod.image" class="img-show" alt="" />
      </div>
      <div class="form-control">
        <form @submit="onSubmit">
          <div class="form-control-group">
            <input type="text" v-model="prod.nameProduct" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">Product name</label>
            <!-- <span class="error" v-if="v$.nameProduct">{{ v$.prod.nameProduct.$errors[0].$messenge }}</span> -->
          </div>
          <div class="form-control-group">
            <input type="text" v-model="prod.price" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">Product price</label>
            <!-- <span class="error" v-if="v$.price">{{ v$.prod.price.$errors[0].$messenge }}</span> -->
          </div>
          <div class="form-control-group">
            <textarea placeholder=" " v-model="prod.desc" class="form-control-group-input" autocomplete="off"></textarea>
            <label class="form-control-group-label">Description</label>
            <!-- <span class="error" v-if="v$.desc">{{ v$.prod.desc.$errors[0].$messenge }}</span> -->
          </div>
          <div class="form-control-ob">
            <label class="form-control-ob-label">Choose category</label>
            <select class="form-control-ob-select" v-model="prod.cateProduct">
              <option v-for="cate in allCates" :key="cate.id">{{ cate.nameCate }}</option>
            </select>
            <!-- <span class="error" v-if="v$.cateProduct">{{ v$.prod.cateProduct.$errors[0].$messenge }}</span> -->
          </div>
          <div class="form-control-group">
            <input type="text" v-model="prod.image" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">URL Image</label>
            <!-- <span class="error" v-if="v$.image">{{ v$.prod.image.$errors[0].$messenge }}</span> -->
          </div>
          <button type="submit" class=" btn form-control-btn">CREATE</button>
        </form>
        <div class="shipping">100% - Giao hàng miễn phí</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "addProd",
  data() {
    return {
      v$: useVuelidate(),
      prod: {
        nameProduct: "",
        price: "",
        desc: "",
        cateProduct: "",
        image: "",
      },
    };
  },
  validations() {
    return {
      prod: {
        nameProduct: { required, minLength: minLength(6) },
        price: { required },
        desc: { required, minLength: minLength(6) },
        cateProduct: { required },
        image: { required },
      },
    };
  },
  methods: {
    ...mapActions(["addProd", "fetchCates"]),
    onSubmit(event) {
      this.v$.$validate();
      if (!this.v$.$error) {
        event.preventDefault();
        this.addProd(this.prod);
        this.prod = "";
        alert("Thêm Thành công");
      } else {
        alert("Lỗi!!! Dữ liệu không hợp lệ hoặc bị bỏ trống");
      }
    },
  },
  computed: {
    ...mapGetters(["allCates"]),
  },
  created() {
    this.fetchCates();
  },
};
</script>
<style scoped>
.img-show {
  max-width: 350px;
  height: auto;
  overflow: hidden;
}
</style>

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
            <p v-if="check">
              <span class="error" v-if="v$.prod.nameProduct">{{ v$.prod.nameProduct.$errors[0].$message }}</span>
            </p>
          </div>
          <div class="form-control-group">
            <input type="text" v-model="prod.price" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">Product price</label>
            <p v-if="check">
              <span class="error" v-if="v$.prod.price">{{ v$.prod.price.$errors[0].$message }}</span>
            </p>
          </div>
          <div class="form-control-group">
            <textarea placeholder=" " v-model="prod.desc" class="form-control-group-input" autocomplete="off"></textarea>
            <label class="form-control-group-label">Description</label>
            <p v-if="check">
              <span class="error" v-if="v$.prod.desc">{{ v$.prod.desc.$errors[0].$message }}</span>
            </p>
          </div>
          <div class="form-control-ob">
            <label class="form-control-ob-label">Choose category</label>
            <select class="form-control-ob-select" v-model="prod.cateProduct">
              <option v-for="cate in allCates" :key="cate.id">{{ cate.nameCate }}</option>
            </select>
            <p v-if="check">
              <span class="error" v-if="v$.prod.cateProduct">{{ v$.prod.cateProduct.$errors[0].$message }}</span>
            </p>
          </div>
          <div class="form-control-group">
            <input type="text" v-model="prod.image" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">URL Image</label>
            <p v-if="check">
              <span class="error" v-if="v$.prod.image">{{ v$.prod.image.$errors[0].$message }}</span>
            </p>
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
      check: false,
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
      event.preventDefault();
      this.check = true;
      this.v$.$validate();
      if (!this.v$.$error) {
        this.addProd(this.prod);
        this.check = false;
        this.prod = "";
        alert("Thêm Thành công");
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
.error {
  color: red;
  font-size: 12px;
}
</style>

<template>
  <div class="main">
    <div class="container">
      <div class="product">
        <div class="product-cate"></div>
        <h1 class="product-name"></h1>
        <div class="product-price"></div>
        <div class="product-desc"></div>
        <img src="" class="img-show" alt="" />
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
            <input type="file" @change="onSelected" class="form-control-group-input" autocomplete="off" />
            <img :src="prod.image" style="max-width: 350px; max-height: 200px; margin-top: 20px" />
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
import { db } from "../filebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  name: "addProd",
  data() {
    return {
      progress: [],
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
      },
    };
  },
  firestore() {
    return {
      images: db.collection("images"),
    };
  },
  methods: {
    ...mapActions(["addProd", "fetchCates"]),
    onSelected(e) {
      let file = e.target.files[0];
      const storage = getStorage();
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.prod.image = downloadURL;
            console.log("imageURL", downloadURL);
          });
        }
      );
    },
    onSubmit(event) {
      event.preventDefault();
      this.check = true;
      this.v$.$validate();
      if (!this.v$.$error) {
        this.check = false;
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

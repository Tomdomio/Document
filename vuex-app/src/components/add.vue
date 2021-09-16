<template>
  <div class="main">
    <div class="container">
      <single/>
      <div class="form-control">
        <form @submit="onSubmit">
          <div class="form-control-group">
            <input type="text" v-model="prod.nameProduct" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label  class="form-control-group-label">Product name</label>
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
              <option value="1">Liên Minh Huyền Thoại</option>
              <option value="2">Liên Quân Mobile</option>
              <option value="3">Đột Kích 3.0</option>
            </select>
            <!-- <span class="error" v-if="v$.cateProduct">{{ v$.prod.cateProduct.$errors[0].$messenge }}</span> -->
          </div>
          <div class="form-control-group">
            <input type="text" v-model="prod.image" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">URL Image</label>
            <!-- <span class="error" v-if="v$.image">{{ v$.prod.image.$errors[0].$messenge }}</span> -->
          </div>
          <img src="https://adchiase.com/upload/chinhanh/2020/tochien/singed/cach-choi-singed-toc-chien33.jpg" class="img-show" alt="">
          <button type="submit" class=" btn form-control-btn">SUBMIT</button>
        </form>
        <div class="shipping">100% - Giao hàng miễn phí</div>
      </div>
    </div>
  </div>
</template>

<script>
import single from './single.vue';
import { mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: "addProd",
  components:{
    single,
  },
  data() {
    return {
      v$: useVuelidate(),
      prod: {
        nameProduct: '',
        price: '',
        desc: '',
        cateProduct: '',
        image: '',
      }
    }
  },
  validations(){
    return{
      prod:{
        nameProduct: { required, minLength: minLength(6) },
        price: { required },
        desc: { required, minLength: minLength(6) },
        cateProduct: { required },
        image: { required },
      }
    }
  },
  methods: {
    ...mapActions(["addProd"]),
    onSubmit(event) {
      this.v$.$validate();
      if(!this.v$.$error){
        event.preventDefault();
        this.addProd(
          this.prod,
        );
        this.prod;
       alert('Thêm Thành công');
     }else{
       alert('Lỗi!!! dữ liệu không hợp lệ hoặc bị bỏ trống');
     }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-show{
  margin-bottom: 20px;
  max-width: 50%;
}
</style>
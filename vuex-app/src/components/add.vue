<template>
  <div class="main">
    <div class="container">
      <single/>
      <div class="form-control">
        <form>
          <div class="form-control-group">
            <input type="text" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label  class="form-control-group-label">Product name</label>
          </div>
          <div class="form-control-group">
            <input type="text" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">Product price</label>
          </div>
          <div class="form-control-group">
            <textarea placeholder=" " class="form-control-group-input" autocomplete="off"></textarea>
            <label class="form-control-group-label">Description</label>
          </div>
          <div class="form-control-ob">
            <label class="form-control-ob-label">Choose category</label>
            <select class="form-control-ob-select">
              <option value="1">ABABABABA</option>
              <option value="2">ABABABABA</option>
              <option value="3">ABABABABA</option>
            </select>
          </div>
          <div class="form-control-upload">
            <label class="form-control-upload-label">Upload file</label>
            <input type="file" class="form-control-upload-img" id="img" accept="image/*">
          </div>
          <button type="submit" class=" btn form-control-btn">SUBMIT</button>
        </form>
        <div class="shipping">100% - Giao hàng miễn phí</div>
      </div>
    </div>
  </div>
</template>

<script>
import single from './single.vue'

export default {
  name: "add",
  components:{
    single,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
<template>
  <div class="main">
    <div class="container">
      <div class="product">
        <div class="product-cate">Category: </div>
        <h1 class="product-name">Product Name</h1>
        <div class="product-price">Product Price: 0₫</div>
        <div class="product-desc">Description: </div>
        <img src="https://adchiase.com/upload/chinhanh/2020/tochien/singed/cach-choi-singed-toc-chien33.jpg" alt="img-product">
      </div>
      <div class="form-control">
        <form action="" method="POST">
          <div class="form-control-group">
            <input type="text" name="name" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label  class="form-control-group-label">Product name</label>
          </div>
          <div class="form-control-group">
            <input type="text" name="name" placeholder=" " class="form-control-group-input" autocomplete="off" />
            <label class="form-control-group-label">Product price</label>
          </div>
          <div class="form-control-group">
            <textarea name="name" placeholder=" " class="form-control-group-input" autocomplete="off"></textarea>
            <label class="form-control-group-label">Description</label>
          </div>
          <div class="form-control-ob">
            <label class="form-control-ob-label">Choose category</label>
            <select class="form-control-ob-select" name="name">
              <option value="1">ABABABABA</option>
              <option value="2">ABABABABA</option>
              <option value="3">ABABABABA</option>
            </select>
          </div>
          <div class="form-control-upload">
            <label class="form-control-upload-label">Upload file</label>
            <input type="file" class="form-control-upload-img" id="img" name="img" accept="image/*">
          </div>
          <button type="submit" class=" btn form-control-btn">SUBMIT</button>
        </form>
        <div class="shipping">100% - Giao hàng miễn phí</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
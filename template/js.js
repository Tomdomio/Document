  function changeProd(e) {
      document.querySelector(".js-prod").src = e.children[0].src;
  }
  function changeText(event) {
    document.querySelector(".js-cate").textContent = event.children[0].textContent;
    document.querySelector(".js-name").textContent = event.children[1].textContent;
    document.querySelector(".js-price").textContent = event.children[2].textContent;
    document.querySelector(".js-desc").textContent = event.children[3].textContent;
   };
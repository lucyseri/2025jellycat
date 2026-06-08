//section1 - img gallery
const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');
const thumImgs = document.querySelector('.thum-imgs');
const thumImgsLiImg = document.querySelectorAll('.thum-imgs li img');
const productImg = document.querySelector('.product-img img');
let currentNum = 0;
thumImgs.addEventListener('click', function(e){
  thumImgsLiImg.forEach((el, idx)=>{
    if(e.target == el){
      let srcAttr = el.getAttribute('src');
      let altAttr = el.getAttribute('alt');
      productImg.setAttribute('src', srcAttr);
      productImg.setAttribute('alt', altAttr);
      el.classList.add('active-img');
      currentNum = idx;
    }else{
      el.classList.remove('active-img');
    }
  })
});
upArrow.addEventListener('click', function(){
  currentNum--;
  if(currentNum < 0){
    currentNum = 0;
  }else{
    thumImgsLiImg.forEach((el, idx)=>{
      if(currentNum == idx){
        let srcAttr = el.getAttribute('src');
        let altAttr = el.getAttribute('alt');
        productImg.setAttribute('src', srcAttr);
        productImg.setAttribute('alt', altAttr);
        el.classList.add('active-img');
        currentNum = idx;
      }else{
        el.classList.remove('active-img');
      }
    })
  }
});
downArrow.addEventListener('click', function(){
  currentNum++;
  if(currentNum >= thumImgsLiImg.length){
    currentNum = thumImgsLiImg.length -1;
  }else{
    thumImgsLiImg.forEach((el, idx)=>{
      if(currentNum == idx){
        let srcAttr = el.getAttribute('src');
        let altAttr = el.getAttribute('alt');
        productImg.setAttribute('src', srcAttr);
        productImg.setAttribute('alt', altAttr);
        el.classList.add('active-img');
        currentNum = idx;
      }else{
        el.classList.remove('active-img');
      }
    })
  }
});
//section1 - product count & total price
const productPrice = document.querySelector('.product-price');
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const inputCount = document.querySelector('#count');
const inputTotalPrice = document.querySelector('#total-price');
let price = productPrice.getAttribute('data-price');
console.log(parseInt(price));
plusBtn.addEventListener('click', function(){
  inputCount.stepUp();
  let totalPrice = inputCount.value*price;
  inputTotalPrice.value = totalPrice.toLocaleString('ko-KR');
});
minusBtn.addEventListener('click', function(){
  inputCount.stepDown();
  let totalPrice = inputCount.value*price;
  inputTotalPrice.value = totalPrice.toLocaleString('ko-KR');
});
inputCount.addEventListener('input', function(){
  let totalPrice = inputCount.value*price;
  inputTotalPrice.value = totalPrice.toLocaleString('ko-KR');
});
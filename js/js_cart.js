//section1: product info - product check
const totalCheck = document.querySelector('#total-check');
const checks = document.querySelectorAll('#sec1 td.check input');
//section1: product info - before & after discount product price
const table = document.querySelector("table");
const tr = document.querySelectorAll('#sec1 tbody tr');
const beforeDiscount = document.querySelectorAll('.before-discount');
const afterDiscount = document.querySelectorAll('.after-discount');
const count = document.querySelectorAll('#sec1 td.product-count input');
const productTotalPrice = document.querySelectorAll('#sec1 td.total-price input');
const productDiscount = document.querySelectorAll('#sec1 td.discount-price input');
//section1: product info - priduct count & price & delete
const minusBtn = document.querySelectorAll('.minus-btn');
const plusBtn = document.querySelectorAll('.plus-btn');
const deleteBtn = document.querySelectorAll('td.delete-btn img');
//empty
const emptyCart = document.querySelector(".empty-cart");
//section2: summary
const productsPrice = document.querySelector('#product-price');
const shipment = document.querySelector("#shipment-price");
const discountsPrice = document.querySelector("#discounts-price");
const totalPrice = document.querySelector('#total-price');
//price setting
for(let i=0;i<tr.length;i++){
  productTotalPrice[i].value = parseInt(afterDiscount[i].getAttribute('data-price') * count[i].value).toLocaleString('ko-KR');
  productDiscount[i].value = parseInt((beforeDiscount[i].getAttribute('data-price') - afterDiscount[i].getAttribute('data-price'))*count[i].value).toLocaleString('ko-KR');
};
//section1: product info - product check
let productsPriceArr = [];
let discountsPriceArr = [];
function productsPriceFn(el){
  const newTr = document.querySelectorAll('#sec1 tbody tr');
  productsPriceArr.splice(0);
  discountsPriceArr.splice(0);
  for(let i=0;i<newTr.length;i++){
    if(el[i].checked){
      let productPriceData = parseInt(el[i].parentElement.parentElement.querySelector('.before-discount').getAttribute('data-price'));
      productsPriceArr.push(productPriceData * (el[i].parentElement.parentElement.querySelector('td.product-count input').value));
      let discountPriceData = parseInt((el[i].parentElement.parentElement.querySelector('.before-discount').getAttribute('data-price') - el[i].parentElement.parentElement.querySelector('.after-discount').getAttribute('data-price')));
      discountsPriceArr.push(discountPriceData * (el[i].parentElement.parentElement.querySelector('td.product-count input').value));
    }
  }
  buySummary();
}
for(const check of checks){
  check.addEventListener("click", function(){
    const totalChecksNum = checks.length;
    const checkedNum = document.querySelectorAll('#sec1 td.check input:checked').length;
    if(totalChecksNum == checkedNum){
      totalCheck.checked = true;
    }else{
      totalCheck.checked = false;
    }
    productsPriceFn(checks);
  })
};
totalCheck.addEventListener('change', ()=>{
  if(totalCheck.checked){
    for(const check of checks){
      check.checked = true;
    }
  }else{
    for(const check of checks){
      check.checked = false;
    }
  }
  productsPriceFn(checks);
});
//section1: product info - before & after discount product price
function priceInfoFn(){
  beforeDiscount.forEach((el, idx)=>{
    let beforeDiscountData = el.getAttribute('data-price');
    el.innerText = parseInt(beforeDiscountData).toLocaleString('ko-KR');
    afterDiscount.forEach((el2, idx2)=>{
      let afterDiscountData = el2.getAttribute('data-price');
      el2.innerText = parseInt(afterDiscountData).toLocaleString('ko-KR');
    });
  });
  productsPriceFn(checks);
};
priceInfoFn();
//section1: product info - priduct count & price & delete
function priceFn(num){
  let price = count[num].value * parseInt(afterDiscount[num].getAttribute('data-price'));
  productTotalPrice[num].value = price.toLocaleString('ko-KR');
  let discount = count[num].value * parseInt(beforeDiscount[num].getAttribute('data-price') - afterDiscount[num].getAttribute('data-price'));
  productDiscount[num].value = discount.toLocaleString('ko-KR');
};
table.addEventListener('input', function(e){
  if(e.type == 'input'){
    count.forEach((el, idx)=>{
      if(e.target == el){
        priceFn(idx);
        productsPriceFn(checks);
        buySummary();
      } 
    })
  }
});
table.addEventListener('click', function(e){
  if(e.type == 'click'){
    minusBtn.forEach((el, idx)=>{
      if(e.target == el.lastChild){
        el.nextElementSibling.stepDown();
        priceFn(idx);
        productsPriceFn(checks);
        buySummary();
      }
    });
    plusBtn.forEach((el2, idx2)=>{
      if(e.target == el2.lastChild){
        el2.previousElementSibling.stepUp();
        priceFn(idx2);
        productsPriceFn(checks);
        buySummary();
      }
    })
    deleteBtn.forEach((item)=>{
      if(e.target == item){
        item.parentElement.parentElement.remove();
        const newChecks = document.querySelectorAll('#sec1 td.check input');
        productsPriceFn(newChecks);
        buySummary();
        if(productsPriceArr.length == 0){
          table.style.display = "none";
          emptyCart.style.display = "block";
        }
      } 
    })
  }
});
//section2: summary
function buySummary(){
  let totalProductsPrice = 0;
  let totalDiscountPrice = 0;
  let totalShipmentPrice = 0;
  productsPriceArr.forEach((item)=>{
    totalProductsPrice+=item;
    productsPrice.value = totalProductsPrice.toLocaleString('ko-KR');
  });
  discountsPriceArr.forEach((item)=>{
    totalDiscountPrice+=item;
    discountsPrice.value = totalDiscountPrice.toLocaleString('ko-KR');
  });
  if(totalProductsPrice > 0){
    shipment.setAttribute('data-price', "2500");
  }else if(totalProductsPrice <= 0){
    shipment.setAttribute('data-price', "0");
    productsPrice.value = 0;
    discountsPrice.value = 0;
  }else if((totalProductsPrice - totalDiscountPrice) >= 100000){
    shipment.setAttribute('data-price', "0");
  }
  totalShipmentPrice = parseInt(shipment.getAttribute('data-price'));
  shipment.value = totalShipmentPrice.toLocaleString('ko-KR');
  totalPrice.value = (totalProductsPrice + totalShipmentPrice - totalDiscountPrice).toLocaleString('ko-KR');
};
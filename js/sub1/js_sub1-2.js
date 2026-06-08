//category
const categoryMorebtn = document.querySelector('.category-select img');
const categoryBtns = document.querySelector('.category-btns');
const categoryBtnLi = document.querySelectorAll('.category-btns li');
//products
const newCon = document.querySelector('.new-con');
const newItemLi = document.querySelectorAll('.new-con .new-item');
//display
const selectBox = document.querySelector('#product-array');
//pager
const pagerBtns = document.querySelector('.pager-btns');
const pagerBigLeftArrow = document.querySelector('.pager .big-left-arrow');
const pagerBigRightArrow = document.querySelector('.pager .big-right-arrow');
const pagerLeftArrow = document.querySelector(".pager .left-arrow");
const pagerRightArrow = document.querySelector(".pager .right-arrow");
//products data
const Rawdata = [
  {img: 'img/product/amuseables1.jpg', name: '[어뮤저블]할로윈 - 소프트 미라', price: '45581', category: '어뮤저블', rank: '1', date: '20241031'},
  {img: 'img/product/amuseables2.jpg', name: '[어뮤저블]할로윈 - 소프트 스켈레톤', price: '42450', category: '어뮤저블', rank: '2', date: '20241031'},
  {img: 'img/product/amuseables3.jpg', name: '[어뮤저블]할로윈 - 소프트 유령', price: '45583', category: '어뮤저블', rank: '3', date: '20241031'},
  {img: 'img/product/amuseables4.jpg', name: '[어뮤저블]할로윈 - 뱀파이어 가지', price: '42450', category: '어뮤저블', rank: '4', date: '20241031'},
  {img: 'img/product/amuseables5.jpg', name: '[어뮤저블]할로윈 - 펌킨', price: '45582', category: '어뮤저블', rank: '5', date: '20241031'},
  {img: 'img/product/accessories0.jpg', name: '[악세서리]가방 - 소프트 하트 크로스백', price: '42450', category: '악세서리', rank: '6', date: '20190115'},
  {img: 'img/product/gift1.jpg', name: '[어뮤저블]크리스마스 - 소프트 트리', price: '42450', category: '어뮤저블', rank: '8', date: '20241225'},
  {img: 'img/product/gift2.jpg', name: '[어뮤저블]크리스마스 - 소프트 리스', price: '42450', category: '어뮤저블', rank: '10', date: '20241225'},
  {img: 'img/product/animals42.jpg', name: '[애니멀스]농장 라이프 - 아기 오리', price: '45584', category: '애니멀스', rank: '7', date: '20190103'},
  {img: 'img/product/animals43.jpg', name: '[애니멀스]농장 라이프 - 오리 가족', price: '45586', category: '애니멀스', rank: '9', date: '20190101'},
  {img: 'img/product/animals44.jpg', name: '[애니멀스]농장 라이프 - 닭', price: '45585', category: '애니멀스', rank: '11', date: '20190801'},
  {img: 'img/product/animals45.jpg', name: '[애니멀스]농장 라이프 - 양', price: '45587', category: '애니멀스', rank: '13', date: '20200301'},
  {img: 'img/product/animals46.jpg', name: '[애니멀스]농장 라이프 - 소', price: '45588', category: '애니멀스', rank: '15', date: '20190913'},
  {img: 'img/product/animals47.jpg', name: '[애니멀스]농장 라이프 - 염소', price: '45590', category: '애니멀스', rank: '17', date: '20221101'},
  {img: 'img/product/animals48.jpg', name: '[애니멀스]농장 라이프 - 조랑말', price: '45589', category: '애니멀스', rank: '19', date: '20240201'},
  {img: 'img/product/animals49.jpg', name: '[애니멀스]농장 라이프 - 아기 돼지', price: '45280', category: '애니멀스', rank: '21', date: '20240401'},
  {img: 'img/product/animals50.jpg', name: '[애니멀스]농장 라이프 - 아기 양', price: '45550', category: '애니멀스', rank: '23', date: '20190911'},
  {img: 'img/product/gift4.jpg', name: '[아기 선물]담요 선물 - 베이비 문어 아기 담요 선물 세트', price: '42450', category: '기프트', rank: '20', date: '20210601'},
  {img: 'img/product/book0.jpg', name: '[소프트북]아이엠 - 아이엠캐럿', price: '42450', category: '책', rank: '22', date: '20240708'}
];
function ProductsObj(img, name, price, category, rank, date){
  this.img = img;
  this.name = name;
  this.price = price;
  this.category = category;
  this.rank = rank;
  this.date = date;
};
let productsLiHtml = '';
ProductsObj.prototype.productsLiFn = function(){
  productsLiHtml+=`<li class="new-item product-compo">
                    <a href="product.html">
                      <img src="${this.img}" alt="${this.name}">
                      <div class="product-info">
                        <p class="name">${this.name}</p>
                        <div class="price-info">
                          <p class="price">${parseInt(this.price).toLocaleString('ko-KR')}</p>
                          <span class="heart-icon">
                            <span class="ir_pm">관심상품 담기</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>`
};
let newData = [];
let srotedData = [];
srotedData = Rawdata.sort(function(a, b){
  return b.date - a.date;
});
for(let i=0;i<Rawdata.length;i++){
  newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
}
function newConInputFn(startnum, length){
  for(let i =0; i<length;i++){
    newData[i+12*startnum].productsLiFn();
  }
  newCon.innerHTML = productsLiHtml;
}
newConInputFn(0, 12);
//pager btn setting
let currentPageNum = 0;
function creatPagerFn(){
  let pagerBtnLiHtml = '<li class="current-page">1</li>';
  if(newData.length%12>0){
    for(let i=0;i<parseInt(newData.length/12);i++){
      pagerBtnLiHtml+=`<li>${i+2}</li>`;
    };
  }else{
    for(let i=0;i<parseInt(newData.length/12-1);i++){
      pagerBtnLiHtml+=`<li>${i+2}</li>`;
    };
  }
  pagerBtns.innerHTML = pagerBtnLiHtml;
};
creatPagerFn();
function pagerBtnHideFn(num){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(pagerBtnLi.length>5){
    for(hidepager of pagerBtnLi){
      hidepager.classList.add('hide');
    }
    for(let i=0; i<5;i++){
      pagerBtnLi[num+i].classList.remove('hide');
    }
  }else{
    for(hidepager of pagerBtnLi){
      hidepager.classList.remove('hide');
    }
  }
}
pagerBtnHideFn(0);
//category select
categoryMorebtn.addEventListener('click', function(e){
  if(categoryMorebtn.classList.contains('category-more')){
    categoryMorebtn.classList.remove('category-more');
    categoryBtns.style.height = categoryBtnLi[0].offsetHeight + "px";
  }else{
    categoryMorebtn.classList.add('category-more');
    categoryBtns.style.height = "auto";
  }
});
categoryBtns.addEventListener('click', function(e){
  categoryBtnLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('current-category');
      selectBox.value = "newst";
      productsLiHtml ='';
      newData.splice(0);
      if(el.classList.contains('current-category')){
        srotedData = Rawdata.sort(function(a, b){
          return b.date - a.date;
        });
        if(idx == 0){
          for(let i=0;i<srotedData.length;i++){
            newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
          }
        }else{
          for(let i=0;i<srotedData.length;i++){
            if(srotedData[i].category == el.innerText){
              newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
            }
          }
        }
      }
      let num = 0;
      if(parseInt(newData.length / 12) > 0){
        num = 12;
      }else{
        num = newData.length % 12;
      }
      newConInputFn(0, num);
      creatPagerFn();
      currentPageNum = 0;
      pagerBtnHideFn(currentPageNum);
    }else{
      el.classList.remove('current-category');
    }
  })
});
//display
selectBox.addEventListener('change', function(){
  if(selectBox.value == 'newst'){
    srotedData = Rawdata.sort(function(a, b){
      return b.date - a.date;
    });
  }else if(selectBox.value == 'popularity'){
    srotedData = Rawdata.sort(function(a, b){
      return a.rank - b.rank;
    });
  }else if(selectBox.value == 'high-price'){
    srotedData = Rawdata.sort(function(a, b){
      return b.price - a.price;
    });
  }else if(selectBox.value == 'low-price'){
    srotedData = Rawdata.sort(function(a, b){
      return a.price - b.price;
    });
  }
  categoryBtnLi.forEach((el, idx)=>{
    if(el.classList.contains('current-category')){
      newData.splice(0);
      if(idx == 0){
        for(let i=0;i<srotedData.length;i++){
          newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
        }
      }else{
        for(let i=0;i<srotedData.length;i++){
          if(srotedData[i].category == el.innerText){
            newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
          }
        }
      }
    }
  });
  productsLiHtml ='';
  let length = 0;
  if(parseInt(newData.length / 12) > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  newConInputFn(0, length);
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  currentPageNum = 0;
  pagerBtnHideFn(currentPageNum);
});
//pager
pagerBtns.addEventListener('click', function(e){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  pagerBtnLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('current-page');
      currentPageNum = idx;
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      newConInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerLeftArrow.addEventListener("click", function(){
  currentPageNum--;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(currentPageNum < 0) currentPageNum = 0;
  pagerBtnLi.forEach((el, idx)=>{
    if(idx == currentPageNum){
      el.classList.add('current-page');
      if(idx%5 == 4){
        for(hidepager of pagerBtnLi){
          hidepager.classList.add('hide');
        }
        for(let i=0; i<5;i++){
          pagerBtnLi[parseInt(idx/5)+i].classList.remove('hide');
        }
      }
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      newConInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerRightArrow.addEventListener("click", function(){
  currentPageNum++;
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  if(currentPageNum >= pagerBtnLi.length) currentPageNum = pagerBtnLi.length - 1;
  pagerBtnLi.forEach((el, idx)=>{
    if(idx == currentPageNum){
      el.classList.add('current-page');
      if(idx%5 == 0){
        for(hidepager of pagerBtnLi){
          hidepager.classList.add('hide');
        }
        for(let i=0; i<pagerBtnLi.length-idx;i++){
          pagerBtnLi[idx+i].classList.remove('hide');
        }
      }
      productsLiHtml='';
      let length = 0;
      if(parseInt(newData.length / 12) - idx > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      newConInputFn(idx, length);
    }else{
      el.classList.remove('current-page');
    }
  })
});
pagerBigLeftArrow.addEventListener('click', function(){
  currentPageNum = 0;
  pagerBtnHideFn(currentPageNum);
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  for(let i =0; i<pagerBtnLi.length;i++){
    pagerBtnLi[i].classList.remove('current-page');
  }
  pagerBtnLi[0].classList.add('current-page');
  productsLiHtml = '';
  let length = 0;
  if(parseInt(newData.length / 12) > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  newConInputFn(0, length);
});
pagerBigRightArrow.addEventListener('click', function(){
  const pagerBtnLi = document.querySelectorAll('.pager-btns li');
  currentPageNum = pagerBtnLi.length-1;
  if(pagerBtnLi.length>=5){
    for(hidepager of pagerBtnLi){
      hidepager.classList.add('hide');
    }
    for(let i=0;i<5;i++){
      pagerBtnLi[pagerBtnLi.length-5+i].classList.remove('hide');
    }
  }
  for(inActiveBtn of pagerBtnLi){
    inActiveBtn.classList.remove('current-page');
  }
  pagerBtnLi[currentPageNum].classList.add('current-page');
  productsLiHtml = '';
  let length = 0;
  if(parseInt(newData.length / 12) - currentPageNum > 0){
    length = 12;
  }else{
    length = newData.length % 12;
  }
  newConInputFn(currentPageNum, length);
});

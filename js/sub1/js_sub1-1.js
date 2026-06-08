//category
const categoryMorebtn = document.querySelector('.category-select img');
const categoryBtns = document.querySelector('.category-btns');
const categoryBtnLi = document.querySelectorAll('.category-btns li');
//products
const bestCon = document.querySelector('.best-con');
const bestItemLi = document.querySelectorAll('.best-con .best-item');
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
  {img: 'img/product/animals5.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 하트 버니', price: '45550', category: '애니멀스', rank: '1', date: '20190101'},
  {img: 'img/product/animals6.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 체리 버니', price: '45550', category: '애니멀스', rank: '2', date: '20240101'},
  {img: 'img/product/animals7.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 코랄핑크 버니', price: '45550', category: '애니멀스', rank: '3', date: '20190103'},
  {img: 'img/product/animals8.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 페일핑크 버니', price: '45550', category: '애니멀스', rank: '4', date: '20220101'},
  {img: 'img/product/animals9.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 베이지 버니', price: '45550', category: '애니멀스', rank: '5', date: '20200105'},
  {img: 'img/product/animals10.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 페일 퍼플 버니', price: '45550', category: '애니멀스', rank: '6', date: '20190115'},
  {img: 'img/product/animals11.jpg', name: '[애니멀]할로윈 - 소프트 핑크 버니즈', price: '45584', category: '애니멀스', rank: '7', date: '20190103'},
  {img: 'img/product/amuseables7.jpg', name: '[어뮤저블]스낵바 - 소프트 바닐라 콘 아이스크림', price: '42450', category: '어뮤저블', rank: '8', date: '20220301'},
  {img: 'img/product/animals12.jpg', name: '[애니멀스]베쉬풀 버니즈 - 소프트 크리스마스 트리 버니', price: '45550', category: '애니멀스', rank: '9', date: '20190101'},
  {img: 'img/product/amuseables8.jpg', name: '[어뮤저블]스낵바 - 비타민 에너지 쥬스', price: '42450', category: '어뮤저블', rank: '10', date: '20190701'},
  {img: 'img/product/animals13.jpg', name: '[애니멀스]배쉬풀 버니즈 - 소프트 당근 버니', price: '45550', category: '애니멀스', rank: '11', date: '20190801'},
  {img: 'img/product/amuseables9.jpg', name: '[어뮤저블]스낵바 - 핫도그', price: '42450', category: '어뮤저블', rank: '12', date: '20190120'},
  {img: 'img/product/animals14.jpg', name: '[애니멀]배쉬풀 버니즈 - 소프트 연필 버니', price: '45550', category: '애니멀스', rank: '13', date: '20200301'},
  {img: 'img/product/amuseables10.jpg', name: '[어뮤저블]스낵바 - 타로버블티', price: '42450', category: '어뮤저블', rank: '14', date: '20210101'},
  {img: 'img/product/animals15.jpg', name: '[애니멀]북극 라이프 - 아기 황제 펭귄', price: '45588', category: '애니멀스', rank: '15', date: '20190913'},
  {img: 'img/product/amuseables11.jpg', name: '[어뮤저블]스낵바 - 타코', price: '42450', category: '어뮤저블', rank: '16', date: '20201201'},
  {img: 'img/product/animals16.jpg', name: '[애니멀]북극 라이프 - 북극곰', price: '45590', category: '애니멀스', rank: '17', date: '20221101'},
  {img: 'img/product/amuseables16.jpg', name: '[어뮤저블]후르츠 앤 배지 - 복숭아', price: '42450', category: '어뮤저블', rank: '18', date: '20230601'},
  {img: 'img/product/animals43.jpg', name: '[애니멀]농장 라이프 - 오리 가족', price: '45589', category: '애니멀스', rank: '19', date: '20240201'},
  {img: 'img/product/amuseables44.jpg', name: '[어뮤저블]디저트 카페 - 딸기 타르트', price: '42450', category: '어뮤저블', rank: '20', date: '20210601'},
  {img: 'img/product/animals25.jpg', name: '[애니멀]오션 라이프 - 향고래', price: '45280', category: '애니멀스', rank: '21', date: '20240401'},
  {img: 'img/product/accessories0.jpg', name: '[악세서리]가방 - 소프트 하트 크로스백', price: '32480', category: '악세서리', rank: '22', date: '20240708'},
  {img: 'img/product/gift4.jpg', name: '[아기 선물]아기 담요 - 베이비 문어 담요 선물 세트', price: '42450', category: '기프트', rank: '23', date: '20240708'},
  {img: 'img/product/book0.jpg', name: '[소프트북]아이엠 - 아이엠 캐럿 소프트북', price: '42450', category: '책', rank: '24', date: '20240708'},
  {img: 'img/product/animals19.jpg', name: '[애니멀스]배쉬풀 버니즈 - 소프트 핑크 버니즈', price: '45550', category: '애니멀스', rank: '25', date: '20190911'}
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
  productsLiHtml+=`<li class="best-item product-compo">
                      <a href="product.html">
                        <img src="${this.img}" alt="${this.name}">
                        <div class="product-info">
                          <span class="rank">${this.rank}</span>
                          <div class="product-description">
                            <p class="name">${this.name}</p>
                            <div class="price-info">
                              <p class="price">${parseInt(this.price).toLocaleString('ko-KR')}</p>
                              <span class="heart-icon">
                                <span class="ir_pm">관심상품 담기</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>`
};
let newData = [];
let srotedData = [];
srotedData = Rawdata.sort(function(a, b){
  return a.rank - b.rank;
});
for(let i=0;i<Rawdata.length;i++){
  newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
}
function bestConInputFn(startnum, length){
  for(let i =0; i<length;i++){
    newData[i+12*startnum].productsLiFn();
  }
  bestCon.innerHTML = productsLiHtml;
}
bestConInputFn(0, 12);
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
      selectBox.value = "popularity";
      productsLiHtml ='';
      newData.splice(0);
      if(el.classList.contains('current-category')){
        srotedData = Rawdata.sort(function(a, b){
          return a.rank - b.rank;
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
      let length = 0;
      if(parseInt(newData.length / 12) > 0){
        length = 12;
      }else{
        length = newData.length % 12;
      }
      bestConInputFn(0, length);
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
        for(let i=0;i<Rawdata.length;i++){
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
  bestConInputFn(0, length);
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
      bestConInputFn(idx, length);
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
      bestConInputFn(idx, length);
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
      bestConInputFn(idx, length);
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
  bestConInputFn(0, length);
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
  bestConInputFn(currentPageNum, length);
});
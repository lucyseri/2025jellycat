let windowWidth = window.innerWidth;
window.addEventListener('resize', function(){
  const newWindowWidth = this.window.innerWidth;
  if(windowWidth < 1280 && newWindowWidth >= 1280){
    this.location.reload();
  }
  if((windowWidth < 768 && newWindowWidth>=768) || (windowWidth >767 && newWindowWidth <=767)){
    this.location.reload();
  }
  if((windowWidth < 360 && newWindowWidth>=360) || (windowWidth >359 && newWindowWidth <=359)){
    this.location.reload();
  }
});
//main banner
const bannerInner = document.querySelector('.banner-inner');
const slider = document.querySelector('#banner .slider');
const imgGallery = document.querySelector('#banner .img-gallery');
const imgSlide = document.querySelectorAll('#banner .img-slide');
const arrowBtns = document.querySelector('#banner .arrow-btns');
const arrowBtnImg = document.querySelectorAll('#banner .arrow-img');
const pagerBtns = document.querySelector('#banner .pager-btns');
const pagers = document.querySelector('#banner .pagers');
//main banner - add slides
const lastSlide = imgSlide[imgSlide.length - 1].cloneNode(true);
const firstSlide = imgSlide[0].cloneNode(true);
imgGallery.prepend(lastSlide);
imgGallery.append(firstSlide);
const imgSlideLength = imgGallery.childElementCount;
imgGallery.style.gridTemplateColumns = `repeat(${imgSlideLength}, 1fr)`;
//main banner - pager html css
pagers.style.width = `${32+(16+12)*(imgSlide.length-1)}px`;
pagers.style.gridTemplateColumns = `repeat(${imgSlide.length}, minmax(12px, max-content))`;
let arrHtml = "";
for(let a = 0; a < imgSlide.length-1; a++){
  arrHtml+=`<li class="pager"></li>`;
  pagers.innerHTML = `<li class="pager slide-on"></li>${arrHtml}`;
}
const pager = document.querySelectorAll('#banner .pager');
//main banner - width & height
const gap = imgSlide[1].offsetLeft - imgSlide[0].offsetLeft - imgSlide[0].offsetWidth;
slider.style.width = `calc(${imgSlideLength}00% + ${gap * (imgSlideLength - 1)}px)`;
bannerInner.style.height = `${imgSlide[0].offsetHeight + pagerBtns.offsetHeight}px`;
//main banner - pager active
function autoPager(num){
  pager.forEach((el, idx)=>{
    if(num == idx){
      el.classList.add('slide-on');
    }else{
      el.classList.remove('slide-on');
    }
  })
};
//main banner - timer
let slideWidth = imgSlide[1].offsetLeft - imgSlide[0].offsetLeft;
let currentNum = 0;
function autoSlide(){
  currentNum++;
  if(currentNum >= imgSlideLength -1){
    currentNum = 0;
    slider.style.left = -1 * slideWidth * currentNum + "px";
    slider.style.transition = 0 + "ms";
    setTimeout(autoSlide, 0);
  }else if(currentNum <= 0){
    slider.style.left = -1 * slideWidth * (imgSlideLength -2) + "px";
    slider.style.transition = 0 + "ms";
  }else{
    slider.style.left = -1 * slideWidth * currentNum + "px";
    slider.style.transition = "all 0.3s ease-in-out";
  }
  autoPager(currentNum - 1);
};
let slideInt = setInterval(autoSlide, 3000);
(()=>{autoSlide()})();
//main banner - arrow btn
arrowBtns.addEventListener('mouseover', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.target == el) clearInterval(slideInt);
  })
});
arrowBtns.addEventListener('mouseout', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.target == el){
      slideInt = setInterval(autoSlide, 3000);
    } 
  })
});
arrowBtns.addEventListener('click', (e)=>{
  arrowBtnImg.forEach((el, idx)=>{
    if(e.type == 'click'){
      if(e.target == el){
        if(idx == 0){
          currentNum++;
          slider.style.transition = "all 0.3s ease-in-out";
          slider.style.left = -1 * slideWidth * currentNum + "px";
          if(currentNum > imgSlideLength - 2){
            currentNum=0;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
            setTimeout(autoSlide, 0)
          }
          autoPager(currentNum -1)
        }else if(idx == 1){
          currentNum--;
          slider.style.transition = "all 0.3s ease-in-out";
          slider.style.left = -1 * slideWidth * currentNum + "px";
          autoPager(currentNum -1)
          if(currentNum < 1){
            currentNum = imgSlideLength - 1;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
            setTimeout(function(){
              currentNum--;
              slider.style.transition = "all 0.3s ease-in-out";
              slider.style.left = -1 * slideWidth * currentNum + "px";
              autoPager(currentNum-1)
            }, 0)
          }
        }
      }
    }
  })
});
//main banner - pager btn
pagers.addEventListener('mouseover', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el) clearInterval(slideInt);
  })
});
pagers.addEventListener('mouseout', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el){
      slideInt = setInterval(autoSlide, 3000);
    } 
  })
});
pagers.addEventListener('click', (e)=>{
  pager.forEach((el, idx)=>{
    if(e.target == el){
      if(currentNum >= imgSlideLength -2){
        if(idx == 0){
          currentNum++;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
          setTimeout(function(){
            currentNum = 1;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
          }, 0);
        }else{
          currentNum = idx + 1;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
        }
      }else if(currentNum <= 1){
        if(idx >= pager.length - 1){
          currentNum--;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
          setTimeout(function(){
            currentNum = imgSlideLength -2;
            slider.style.left = -1 * slideWidth * currentNum + "px";
            slider.style.transition = 0+"ms";
          }, 0);

        }else{
          currentNum = idx + 1;
          slider.style.left = -1 * slideWidth * currentNum + "px";
          slider.style.transition = "all 0.3s ease-in-out";
        }
      }else{
        currentNum = idx + 1;
        slider.style.left = -1 * slideWidth * currentNum + "px";
        slider.style.transition = "all 0.3s ease-in-out";
      }
      autoPager(idx);
    }
  })
});

//best con
const bestItemLi = document.querySelectorAll('.best-con .best-item');
const bestImg = document.querySelectorAll('.best-con .best-item img');
const bestName = document.querySelectorAll(".best-con .best-item p.name");
const bestPrice = document.querySelectorAll('.best-con .best-item p.price');
const rankNum = document.querySelectorAll('.best-con .best-item .rank');
function Bestproducts(img, name, price){
  this.img = img;
  this.name = name;
  this.price = price;
};
let bestImgArr = [];
let bestNameArr = [];
let bestPriceArr = [];
Bestproducts.prototype.productInfoFn = function(){
  bestImgArr.push(this.img);
  bestNameArr.push(this.name);
  bestPriceArr.push(this.price);
};
let bestProductInfo = [
  new Bestproducts('img/product/animals5.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 하트 버니', '58,450원'),
  new Bestproducts('img/product/animals6.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 체리 버니', '58,450원'),
  new Bestproducts('img/product/animals7.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 코랄핑크 버니', '58,450원'),
  new Bestproducts('img/product/animals8.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 페일핑크 버니', '58,450원'),
  new Bestproducts('img/product/animals9.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 베이지 버니', '58,450원'),
  new Bestproducts('img/product/animals10.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 플라워 패치 페일 퍼플 버니', '58,450원'),
  new Bestproducts('img/product/animals11.jpg', '[애니멀]할로윈 - 소프트 핑크 버니즈', '58,450원'),
  new Bestproducts('img/product/amuseables7.jpg', '[어뮤저블]스낵바 - 소프트 바닐라 콘 아이스크림', '58,450원'),
  new Bestproducts('img/product/animals12.jpg', '[애니멀스]베쉬풀 버니즈 - 소프트 크리스마스 트리 버니', '58,450원'),
  new Bestproducts('img/product/amuseables8.jpg', '[어뮤저블]스낵바 - 비타민 에너지 쥬스', '58,450원'),
  new Bestproducts('img/product/animals13.jpg', '[애니멀스]배쉬풀 버니즈 - 소프트 당근 버니', '58,450원'),
  new Bestproducts('img/product/amuseables9.jpg', '[어뮤저블]스낵바 - 핫도그', '58,450원')
];
for(let i =0; i < bestItemLi.length; i++){
  bestProductInfo[i].productInfoFn();
}
for(let i =0; i < bestItemLi.length; i++){
  bestImg[i].setAttribute('src', bestImgArr[i]);
  bestImg[i].setAttribute('alt', bestNameArr[i]);
  bestPrice[i].innerText = bestPriceArr[i];
  bestName[i].innerText = bestNameArr[i];
  rankNum[i].innerText = i+1;
}
//new con
const newProductSlider = document.querySelector('#sec2 .product-slider');
const newCon = document.querySelector('#sec2 .new-con');
const newItem = document.querySelectorAll('#sec2 .new-item');
const newPagers = document.querySelector('#sec2 .pagers');
const newPager = document.querySelectorAll('#sec2 .pager');
const newImg = document.querySelectorAll('#sec2 .new-con .new-item img');
const newName = document.querySelectorAll('#sec2 .new-con .new-item p.name');
const newPrice = document.querySelectorAll('#sec2 .new-con .new-item p.price');
//new con - items
function Newproducts(pimg, pn, pp){
  this.productimg = pimg;
  this.productname = pn;
  this.productprice = pp;
};
let newProductsInfo = [
  new Newproducts('img/product//gift1.jpg', '[어뮤저블]크리스마스 - 소프트 트리', '44,500원'),
  new Newproducts('img/product/gift2.jpg', '[어뮤저블]크리스마스 - 소프트 리스', '24,500원'),
  new Newproducts('img/product/accessories0.jpg', '[악세서리]가방 - 소프트 하트 크로스백', '24,500원'),
  new Newproducts('img/product/amuseables1.jpg', '[어뮤저블]할로윈 - 소프트 미라', '24,500원'),
  new Newproducts('img/product/amuseables2.jpg', '[어뮤저블]할로윈 - 소프트 스켈레톤', '24,500원'),
  new Newproducts('img/product/amuseables3.jpg', '[어뮤저블]할로윈 - 소프트 유령', '25,500원'),
  new Newproducts('img/product/amuseables4.jpg', '[어뮤저블]할로윈 - 뱀파이어 가지', '24,500원'),
  new Newproducts('img/product/amuseables5.jpg', '[어뮤저블]할로윈 - 펌킨', '24,500원'),
  new Newproducts('img/product/animals42.jpg', '[애니멀스]농장 라이프 - 아기 오리', '24,500원'),
  new Newproducts('img/product/animals43.jpg', '[애니멀스]농장 라이프 - 오리 가족', '24,500원'),
  new Newproducts('img/product/animals44.jpg', '[애니멀스]농장 라이프 - 닭', '28,500원'),
  new Newproducts('img/product/animals45.jpg', '[애니멀스]농장 라이프 - 양', '24,500원')
];
let newImgArr = [];
let newNameArr = [];
let newPriceArr = [];
Newproducts.prototype.newProductInfoFn = function(){
  newImgArr.push(this.productimg);
  newNameArr.push(this.productname);
  newPriceArr.push(this.productprice);
};
for(let i=0;i<newItem.length;i++){
  newProductsInfo[i].newProductInfoFn();
};
for(let i=0;i<newItem.length;i++){
  newImg[i].setAttribute('src', newImgArr[i]);
  newImg[i].setAttribute('alt', newNameArr[i]);
  newName[i].innerText = newNameArr[i];
  newPrice[i].innerText = newPriceArr[i];
};
//new con - slider
let newPageNum = "";
let slideItemGap = newItem[1].offsetLeft - newItem[0].offsetLeft - newItem[0].offsetWidth;
newPagers.addEventListener('click', function(e){
  newPager.forEach((el, idx)=>{
    if(e.target == el){
      newPageNum = idx;
      el.classList.add('slide-on');
      newCon.style.transform = `translateX(${-1 * (newProductSlider.offsetWidth + slideItemGap) * idx}px)`;
    }else{
      el.classList.remove('slide-on');
    }
  });
})
//jellcat friends
const lineThum = document.querySelector('#sec4 .line-thum');
const thumSlide = document.querySelector('#sec4 .line-thum .thum-slider');
const thumUl = document.querySelector('#sec4 .line-thum ul');
const thumUlImg = document.querySelectorAll('#sec4 .line-thum ul img');
const thumLineName = document.querySelectorAll('#sec4 .line-thum ul p.line-name');
const thumLeftArrow = document.querySelector('#sec4 .left-arrow img');
const thumRightArrow = document.querySelector('#sec4 .right-arrow img');
//thum name
thumLineName.forEach((el, idx)=>{
  el.innerText = thumUlImg[idx].getAttribute('alt');
});
//jellcat friends - width & height
thumUl.style.gridTemplateColumns = `repeat(${thumUlImg.length}, 1fr)`;
lineThum.style.height = thumUl.offsetHeight + "px";
//jellcat friends - thum slider
let thumSlideNum = 0;
let thumImgGap = thumUlImg[1].offsetLeft - thumUlImg[0].offsetLeft;
thumLeftArrow.addEventListener('click', function(){
  if(thumSlide.offsetLeft >= 0){
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }else{
    thumSlideNum--;
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }
});
thumRightArrow.addEventListener('click', function(){
  if((thumUl.offsetWidth + thumSlide.offsetLeft) < lineThum.offsetWidth){
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }else{
    thumSlideNum++;
    thumSlide.style.left = -3 * thumSlideNum * thumImgGap + "px";
  }
});
//jellcat friends - product slider
const lineProducts = document.querySelector('#sec4 .products');
const lineProduct = document.querySelectorAll('#sec4 .products .product');
const lineProductPagers = document.querySelector('#sec4 .pagers');
const lineProductPager = document.querySelectorAll('#sec4 .pagers .pager');
const lineProductSlideGap = lineProduct[2].offsetLeft - lineProduct[0].offsetLeft;
lineProductPagers.addEventListener('click', function(e){
  lineProductPager.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add("slide-on");
      if(idx == 0){
        lineProducts.style.transform = `translateX(0)`;
      }else if(idx == 1){
        lineProducts.style.transform = `translateX(${-1*lineProductSlideGap}px)`
      }
    }else{
      el.classList.remove("slide-on");
    }
  })
});
//description
const linePoster = document.querySelector(".line-poster img");
const categoryName = document.querySelector('#sec4 .line-info .category-name');
const lineName = document.querySelector('#sec4 .line-info .line-name strong');
const firstDesc = document.querySelector('#sec4 .line-info .first-line');
const secondDesc = document.querySelector('#sec4 .line-info .second-line');
const hasgtagsBox = document.querySelector('#sec4 .line-info .hasgtags');
const lineProductsImg = document.querySelectorAll('#sec4 .line-products img');
const lineProductsName = document.querySelectorAll('#sec4 .line-products p.name');
const lineProductsPrice = document.querySelectorAll('#sec4 .line-products p.price');
function Lineinfo(category, line, des1, des2){
  this.category = category;
  this.line = line;
  this.des1 = des1;
  this.des2 = des2;
};
let lineInfoData = [
  new Lineinfo('Discover', 'White Christmas', '이번 크리스마스에는 산타 할아버지가', '가장 포근하고 부드러운 선물을 줄 예정이래요!'),
  new Lineinfo('Discover', 'Soft Halloween', '트릭 올 트릿!', '젤리캣에서 준비하는 가장 부드럽고 으시시한 할로윈'),
  new Lineinfo('Animal', 'Bashful Bunnies', '알록달록 젤리캣 버니', '빨주노초파남보...그리고 더!'),
  new Lineinfo('Animal', 'Fram Life', '꼬끼오~ 음매~ 이히히힝~ 꿀꿀~', '젤리캣 농장에 사는 친구들은 모두 부드럽고 사랑스럽습니다'),
  new Lineinfo('Animal', 'Colorful Bugs', '발 밑을 조심하게요!', '작고 부드러운 친구들이 지나갑니다'),
  new Lineinfo('Amuseable', 'Dessert Cafe', '보들보들 달달', '젤리캣 디저트 카페에 어서오세요'),
  new Lineinfo('Amuseable', 'Wood Life', '젤리캣 숲속에는', '부드럽고 포근한 친구들이 있어요'),
  new Lineinfo('Amuseable', 'Friends in Pot', '젤리캣의 시들지 않는 화분', '매일매일을 싱그롭게'),
  new Lineinfo('Amuseable', 'Fruites and Vegetable', '젤리캣에서는 브로콜리도 가지도 친구였어', '식탁 위 젤리캣 프렌즈'),
  new Lineinfo('Amuseable', 'Snack Bar', '젤리캣 스낵바에서 간식타임!', '재밌게 놀면! 0칼로리!'),
  new Lineinfo('Animal', 'Ocean Life', '부드럽고 보송한 고래랑 함께하는 바다수영', '젤리캣 바다 친구들과 물보라를 쳐~!'),
  new Lineinfo('Animal', 'Arctic Friends', '북극친구들과의 따뜻한 포옹', '펭귄과 물개와 함께 온도를 나누세요!')
];
Lineinfo.prototype.lineInfoFn = function(){
  categoryName.innerText = this.category;
  lineName.innerText = this.line;
  firstDesc.innerText = this.des1;
  secondDesc.innerText = this.des2;
}
function Hashtag(tag1, tag2, tag3, tag4, tag5){
  this.tag1 = tag1;
  this.tag2 = tag2;
  this.tag3 = tag3;
  this.tag4 = tag4;
  this.tag5 = tag5;
}
let lineHashTags =[
  new Hashtag('#소프트토이', '#크리스마스', '#어뮤저블', '#산타', ''),
  new Hashtag('#소프트토이', '#할로윈', '#어뮤저블', '', ''),
  new Hashtag('#애착인형', '#애니멀', '#소프트토이', '#버니즈', '#토끼'),
  new Hashtag('#애니멀', '#소프트토이', '#애착인형', '#농장', ''),
  new Hashtag('#애니멀', '#버그', '#나비', '#애벌레', '#소프트토이'),
  new Hashtag('#소프트토이', '#카페', '#타르트', '#어뮤저블', '#케이크'),
  new Hashtag('#어뮤저블', '#소프트토이', '#도토리', '#버섯', ''),
  new Hashtag('#화분', '#어뮤저블', '#소품', '#소프트토이', '#꽃'),
  new Hashtag('#과일', '#야채', '#어뮤저블', '#소프트토이', '#블로콜리'),
  new Hashtag('#햄버거', '#팬싸템', '#스낵', '#어뮤저블', '#소프트토이'),
  new Hashtag('#문어', '#애니멀', '#소프트토이', '#바다', ''),
  new Hashtag('#북극곰', '#펭귄', '#애니멀', '#소프트토이', '')
];
Hashtag.prototype.hashtagInput = function(){
  hasgtagsBox.innerHTML=`<span class="hashtag">${this.tag1}</span><span class="hashtag">${this.tag2}</span>
  <span class="hashtag">${this.tag3}</span><span class="hashtag">${this.tag4}</span>
  <span class="hashtag">${this.tag5}</span>`
}
function LineProducts(img, name, price, line){
  this.img = img;
  this.name = name;
  this.price = price;
  this.line = line;
};
let lineProdutData = [
  new LineProducts('img/product/amuseables52.jpg', '[어뮤저블]화이트 크리스마스 - 선물상자', '48,450원', '화이트 크리스마스'),
  new LineProducts('img/product/amuseables53.jpg', '[어뮤저블]화이트 크리스마스 - 크리스마스 푸딩', '48,450원', '화이트 크리스마스'),
  new LineProducts('img/product/gift2.jpg', '[어뮤저블]화이트 크리스마스 - 리스', '48,450원', '화이트 크리스마스'),
  new LineProducts('img/product/gift1.jpg', '[어뮤저블]화이트 크리스마스 - 트리', '48,450원', '화이트 크리스마스'),
  new LineProducts('img/product/amuseables1.jpg', '[어뮤저블]소프트 할로윈 - 소프트 미라', '48,450원', '소프트 할로윈'),
  new LineProducts('img/product/amuseables2.jpg', '[어뮤저블]소프트 할로윈 - 스켈레톤 밥', '46,450원', '소프트 할로윈'),
  new LineProducts('img/product/amuseables3.jpg', '[어뮤저블]소프트 할로윈 - 소프트 유령', '32,450원', '소프트 할로윈'),
  new LineProducts('img/product/amuseables5.jpg', '[어뮤저블]소프트 할로윈 - 펌킨', '48,850원', '소프트 할로윈'),
  new LineProducts('img/product/animals8.jpg', '[애니멀]배쉬풀 버니즈 - 소프트 핑크 버니즈', '48,850원', '배쉬풀 버니즈'),
  new LineProducts('img/product/animals9.jpg', '[애니멀]배쉬풀 버니즈 - 플라워 패치 베이지 버니즈', '48,850원', '배쉬풀 버니즈'),
  new LineProducts('img/product/animals12.jpg', '[애니멀]배쉬풀 버니즈 - 크리스마스 트리 버니즈', '48,850원', '배쉬풀 버니즈'),
  new LineProducts('img/product/animals5.jpg', '[애니멀]배쉬풀 버니즈 - 하트 버니즈', '48,850원', '배쉬풀 버니즈'),
  new LineProducts('img/product/animals42.jpg', '[애니멀]농장 라이프 - 아기 오리', '38,850원', '농장 라이프'),
  new LineProducts('img/product/animals44.jpg', '[애니멀]농장 라이프 - 쎄실 치킨', '48,850원', '농장 라이프'),
  new LineProducts('img/product/animals48.jpg', '[애니멀]농장 라이프 - 조랑말', '48,850원', '농장 라이프'),
  new LineProducts('img/product/animals50.jpg', '[애니멀]농장 라이프 - 아기 양', '44,850원', '농장 라이프'),
  new LineProducts('img/product/animals59.jpg', '[애니멀]컬러풀 버그 - 래이디버그', '44,850원', '컬러풀 버그'),
  new LineProducts('img/product/animals57.jpg', '[애니멀]컬러풀 버그 - 달팽이', '44,850원', '컬러풀 버그'),
  new LineProducts('img/product/animals56.jpg', '[애니멀]컬러풀 버그 - 베이비 꿀벌', '44,850원', '컬러풀 버그'),
  new LineProducts('img/product/animals51.jpg', '[애니멀]컬러풀 버그 - 노랑나비', '44,850원', '컬러풀 버그'),
  new LineProducts('img/product/amuseables44.jpg', '[어뮤저블]디저트 카페 - 딸기 타르트', '48,850원', '디저트 카페'),
  new LineProducts('img/product/amuseables51.jpg', '[어뮤저블]디저트 카페 - 초코 케이크', '48,850원', '디저트 카페'),
  new LineProducts('img/product/amuseables47.jpg', '[어뮤저블]디저트 카페 - 초코 파르페', '48,850원', '디저트 카페'),
  new LineProducts('img/product/amuseables48.jpg', '[어뮤저블]디저트 카페 - 몽블랑', '48,850원', '디저트 카페'),
  new LineProducts('img/product/amuseables29.jpg', '[어뮤저블]우드 라이프 - 도토리', '48,850원', '우드 라이프'),
  new LineProducts('img/product/amuseables30.jpg', '[어뮤저블]우드 라이프 - 솔방울', '48,850원', '우드 라이프'),
  new LineProducts('img/product/amuseables32.jpg', '[어뮤저블]우드 라이프 - 버섯', '48,850원', '우드 라이프'),
  new LineProducts('img/product/amuseables28.jpg', '[어뮤저블]우드 라이프 - 나뭇잎', '48,850원', '우드 라이프'),
  new LineProducts('img/product/amuseables34.jpg', '[어뮤저블]프렌즈 인 팟 - 선인장', '48,850원', '프렌즈 인 팟'),
  new LineProducts('img/product/amuseables35.jpg', '[어뮤저블]프렌즈 인 팟 - 분재', '48,850원', '프렌즈 인 팟'),
  new LineProducts('img/product/amuseables42.jpg', '[어뮤저블]프렌즈 인 팟 - 데이지', '48,850원', '프렌즈 인 팟'),
  new LineProducts('img/product/amuseables41.jpg', '[어뮤저블]프렌즈 인 팟 - 수선화', '48,850원', '프렌즈 인 팟'),
  new LineProducts('img/product/amuseables22.jpg', '[어뮤저블]후르츠 앤 배지 - 당근', '38,850원', '후르츠 앤 배지'),
  new LineProducts('img/product/amuseables17.jpg', '[어뮤저블]후르츠 앤 배지 - 아스파라거스', '38,850원', '후르츠 앤 배지'),
  new LineProducts('img/product/amuseables18.jpg', '[어뮤저블]후르츠 앤 배지 - 브로콜리', '38,850원', '후르츠 앤 배지'),
  new LineProducts('img/product/amuseables16.jpg', '[어뮤저블]후르츠 앤 배지 - 복숭아', '38,850원', '후르츠 앤 배지'),
  new LineProducts('img/product/amuseables14.jpg', '[어뮤저블]스낵바 - 치즈버거', '38,850원', '스낵바'),
  new LineProducts('img/product/amuseables15.jpg', '[어뮤저블]스낵바 - 마르게리타 피자', '38,850원', '스낵바'),
  new LineProducts('img/product/amuseables10.jpg', '[어뮤저블]스낵바 - 버블티', '38,850원', '스낵바'),
  new LineProducts('img/product/amuseables7.jpg', '[어뮤저블]스낵바 - 바닐라 소프트콘 아이스크림', '38,850원', '스낵바'),
  new LineProducts('img/product/animals23.jpg', '[애니멀]오션 라이프 - 베이비 문어', '44,850원', '오션 라이프'),
  new LineProducts('img/product/animals30.jpg', '[애니멀]오션 라이프 - 홍합', '44,850원', '오션 라이프'),
  new LineProducts('img/product/animals26.jpg', '[애니멀]오션 라이프 - 게', '44,850원', '오션 라이프'),
  new LineProducts('img/product/animals38.jpg', '[애니멀]오션 라이프 - 복어', '44,850원', '오션 라이프'),
  new LineProducts('img/product/animals16.jpg', '[애니멀]북극 라이프 - 북극곰', '44,850원', '북극 라이프'),
  new LineProducts('img/product/animals15.jpg', '[애니멀]북극 라이프 - 베이비 황제 펭귄', '44,850원', '북극 라이프'),
  new LineProducts('img/product/animals19.jpg', '[애니멀]북극 라이프 - 마카로니 펭귄', '44,850원', '북극 라이프'),
  new LineProducts('img/product/animals18.jpg', '[애니멀]북극 라이프 - 락호퍼 펭귄', '44,850원', '북극 라이프')
];
let lineProductsImgArr = [];
let lineProductsNameArr = [];
let lineProductsPriceArr = [];
LineProducts.prototype.lineProductsInput = function(el){
  if(this.line == el){
    lineProductsImgArr.push(this.img);
    lineProductsNameArr.push(this.name);
    lineProductsPriceArr.push(this.price);
  }
};
function lineDetailsFn(num){
  linePoster.setAttribute('src', `img/line_${num}.png`);
  linePoster.setAttribute('alt', thumUlImg[num].getAttribute('alt'));
  lineInfoData[num].lineInfoFn();
  lineHashTags[num].hashtagInput();
}
lineDetailsFn(0);
for(let i=0; i<lineProductsImg.length;i++){
  lineProductsImg[i].setAttribute('src', lineProdutData[i].img);
  lineProductsImg[i].setAttribute('alt', lineProdutData[i].name);
  lineProductsName[i].innerText = lineProdutData[i].name;
  lineProductsPrice[i].innerText = lineProdutData[i].price;
}
thumUl.addEventListener('click', function(e){
  lineProductsImgArr.splice(0);
  lineProductsNameArr.splice(0);
  lineProductsPriceArr.splice(0);
  thumUlImg.forEach((el, idx)=>{
    if(e.target == el || e.target == thumLineName[idx]){
      lineDetailsFn(idx);
      const imgAlt = el.getAttribute("alt");
      for(let i=0; i<lineProdutData.length;i++){
        lineProdutData[i].lineProductsInput(imgAlt);
      }
      for(let i=0; i<lineProductsImg.length;i++){
        lineProductsImg[i].setAttribute('src', lineProductsImgArr[i]);
        lineProductsImg[i].setAttribute('alt', lineProductsNameArr[i]);
        lineProductsName[i].innerText = lineProductsNameArr[i];
        lineProductsPrice[i].innerText = lineProductsPriceArr[i];
      }
    }
  })
});
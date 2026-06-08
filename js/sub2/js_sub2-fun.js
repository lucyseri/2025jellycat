const sortFn = function(target){
  //products
  const productsCon = document.querySelector('.products-con');
  //display
  const selectBox = document.querySelector('#product-array');
  //pager
  const pagerBtns = document.querySelector('.pager-btns');
  const pagerBigLeftArrow = document.querySelector('.pager .big-left-arrow');
  const pagerBigRightArrow = document.querySelector('.pager .big-right-arrow');
  const pagerLeftArrow = document.querySelector(".pager .left-arrow");
  const pagerRightArrow = document.querySelector(".pager .right-arrow");
  function ProductsObj(img, name, price, rank, date){
    this.img = img;
    this.name = name;
    this.price = price;
    this.rank = rank;
    this.date = date;
  };
  let productsLiHtml = '';
  ProductsObj.prototype.productsLiFn = function(){
    productsLiHtml+=`<li class="product-item product-compo">
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
  srotedData = target.sort(function(a, b){
    return b.date - a.date;
  });
  for(let i=0;i<target.length;i++){
    newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
  }
  function productsInputFn(startnum, length){
    for(let i =0; i<length;i++){
      newData[i+12*startnum].productsLiFn();
    }
    productsCon.innerHTML = productsLiHtml;
  }
  let setLength = '';
  if(target.length>=12){
    setLength = 12;
  }else{
    setLength = target.length;
  }
  productsInputFn(0, setLength);
  //create pager btn
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
      for(let i=0;i<pagerBtnLi.length;i++){
        pagerBtnLi[i].classList.add('hide');
      }
      for(let i=0; i<5;i++){
        pagerBtnLi[num+i].classList.remove('hide');
      }
    }
  }
  pagerBtnHideFn(0);
  //display
  selectBox.addEventListener('change', function(){
    if(selectBox.value == 'newst'){
      srotedData = target.sort(function(a, b){
        return b.date - a.date;
      });
    }else if(selectBox.value == 'popularity'){
      srotedData = target.sort(function(a, b){
        return a.rank - b.rank;
      });
    }else if(selectBox.value == 'high-price'){
      srotedData = target.sort(function(a, b){
        return b.price - a.price;
      });
    }else if(selectBox.value == 'low-price'){
      srotedData = target.sort(function(a, b){
        return a.price - b.price;
      });
    }
    newData.splice(0);
    for(let i=0;i<target.length;i++){
      newData.push(new ProductsObj(srotedData[i].img, srotedData[i].name, srotedData[i].price, srotedData[i].category, srotedData[i].rank, srotedData[i].date))
    }
    productsLiHtml ='';
    let length = 0;
    if(parseInt(newData.length / 12) > 0){
      length = 12;
    }else{
      length = newData.length % 12;
    }
    productsInputFn(0, length);
    currentPageNum = 0;
    const pagerBtnLi = document.querySelectorAll('.pager-btns li');
    for(let i =0; i<pagerBtnLi.length;i++){
      pagerBtnLi[i].classList.remove('current-page');
    }
    pagerBtnLi[0].classList.add('current-page');
    pagerBtnHideFn(0);
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
        productsInputFn(idx, length);
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
          for(let i=0; i<pagerBtnLi.length;i++){
            pagerBtnLi[i].classList.add('hide');
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
        productsInputFn(idx, length);
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
          for(let i=0; i<pagerBtnLi.length;i++){
            pagerBtnLi[i].classList.add('hide');
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
        productsInputFn(idx, length);
      }else{
        el.classList.remove('current-page');
      }
    })
  });
  pagerBigLeftArrow.addEventListener('click', function(){
    pagerBtnHideFn(0);
    currentPageNum = 0;
    const pagerBtnLi = document.querySelectorAll('.pager-btns li');
    for(let i =0; i<pagerBtnLi.length;i++){
      pagerBtnLi[i].classList.remove('current-page');
    }
    pagerBtnLi[0].classList.add('current-page');
    productsLiHtml ='';
    let length = 0;
    if(parseInt(newData.length / 12) > 0){
      length = 12;
    }else{
      length = newData.length % 12;
    }
    productsInputFn(0, length);
  });
  pagerBigRightArrow.addEventListener('click', function(){
    const pagerBtnLi = document.querySelectorAll('.pager-btns li');
    currentPageNum = pagerBtnLi.length-1;
    if(pagerBtnLi.length>=5){
      for(let i=0;i<pagerBtnLi.length;i++){
        pagerBtnLi[i].classList.remove('hide');
      }
      let hidenum = parseInt(pagerBtnLi.length/5);
      if(pagerBtnLi.length%5 > 0){
        for(let i=0;i<hidenum*5;i++){
          pagerBtnLi[i].classList.add('hide');
        }
      }else{
        for(let i=0;i<(hidenum-1)*5;i++){
          pagerBtnLi[i].classList.add('hide');
        }
      }
    }
    for(let i =0; i<pagerBtnLi.length;i++){
      pagerBtnLi[i].classList.remove('current-page');
    }
    pagerBtnLi[currentPageNum].classList.add('current-page');
    productsLiHtml='';
    let length = 0;
    if(parseInt(newData.length / 12) - currentPageNum > 0){
      length = 12;
    }else{
      length = newData.length % 12;
    }
    productsInputFn(currentPageNum, length);
  });
}
export default sortFn;
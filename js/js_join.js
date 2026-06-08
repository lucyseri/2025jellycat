const form = document.querySelector('form');
const userName = document.querySelector('#user-name');
const userPhone = document.querySelector('#phone-num');
const emailDomain = document.querySelector('#email-domain');
const domainSelect = document.querySelector('#domain-select');
const birthYear = document.querySelector("#birth-year");
const birthMonth = document.querySelector("#birth-month");
const birthDate = document.querySelector("#birth-date");
const addressNum = document.querySelector('#address-num');
const address = document.querySelector('#address');
const detialAddress = document.querySelector('#detail-address');
const userId = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const userPwCheck = document.querySelector('#user-pw2');
const pwState = document.querySelector('.pw-state');
const joinButton = document.querySelector("button");
//email
domainSelect.addEventListener('change', (e)=>{
  if(e.target.value == "type"){
    emailDomain.value = "";
    emailDomain.disabled = false;
  }else{
    emailDomain.value = e.target.value;
    emailDomain.disabled = true;
  }
});
//pw
userPwCheck.addEventListener('keyup', ()=>{
  if(userPw.value == userPwCheck.value){
    pwState.style.display = "block";
    pwState.style.color = "var(--primary-color)";
    pwState.innerText = "비밀번호가 일치합니다";
  }else{
    pwState.style.display = "block";
    pwState.style.color = "var(--error-color)";
    pwState.innerText = "비밀번호를 다시 확인해주세요!";
  }
});
//form button
joinButton.addEventListener('click', function(e){
  e.preventDefault();
  if(userName.value == ''){
    alert('이름을 확인해주세요');
    userName.focus();
    return false;
  }
  if(userPhone.value == '' || userPhone.value.length <=11){
    alert('휴대전화 번호를 확인해주세요');
    userPhone.focus();
    return false;
  }
  if(birthYear.value == '' || birthYear.value.length <=4){
    alert('생일을 확인해주세요');
    birthYear.focus();
    return false;
  }
  if(birthMonth.value == '' || birthMonth.value.length <=2){
    alert('생일을 확인해주세요');
    birthMonth.focus();
    return false;
  }
  if(birthDate.value == '' || birthDate.value.length <=2){
    alert('생일을 확인해주세요');
    birthDate.focus();
    return false;
  }
  if(addressNum.value == '' || addressNum.value.length <=5){
    alert('주소를 확인해주세요');
    addressNum.focus();
    return false;
  }
  if(address.value == '' || address.value.length <=0){
    alert('주소를 확인해주세요');
    address.focus();
    return false;
  }
  if(detialAddress.value == '' || detialAddress.value.length <=0){
    alert('주소를 확인해주세요');
    detialAddress.focus();
    return false;
  }
  if(userId.value == '' || userId.value.length <=0){
    alert('아이디를 확인해주세요');
    userId.focus();
    return false;
  }
  if(userPw.value == '' || userPw.value.length <=4){
    if(userPw.value ==! userPwCheck.value){
      alert('비밀번호를 확인해주세요');
      userPw.focus();
      return false;
    }
  }
  alert('젤리캣의 친구가 된 걸 환영합니다');
  form.submit();
});
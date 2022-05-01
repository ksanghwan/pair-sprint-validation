// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

//필요 엘리먼트

//아이디
let elInputUsername = document.querySelector('#username')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

//비밀번호
let elFirstPassword =document.querySelector('#password')
let elSecondPassword =document.querySelector('#password-retype')
let elPasswordMessage =document.querySelector('.mismatch-message')

//필요함수
function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}


function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}

//동작부분

elInputUsername.onkeyup = function(){
  if (isMoreThan4Length(elInputUsername.value)){
    //성공
    elSuccessMessage.classList.remove('hide')
    elFailureMessage.classList.add('hide')
  
  } else {
    //실패
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')
  
  }
}

elSecondPassword.onkeyup = function(){
  if (isMatch(elFirstPassword.value, elSecondPassword.value)){
    elPasswordMessage.classList.add('hide')
    return true
  }
  else{
    elPasswordMessage.classList.remove('hide')
    return false

  }
}


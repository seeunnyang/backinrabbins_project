// header, footer


//nav에 마우스 올렸을 때 open_nav 보이기
//변수 생성
const nav = document.querySelector('header .h_btm_bg .h_btm .nav')
const open_nav = document.querySelector('header .h_btm_bg .open_nav_bg')
const h_btm_bg = document.querySelector('header .h_btm_bg')
console.log(nav, open_nav, h_btm_bg)
open_nav.style.display='none'
nav.addEventListener('mouseover',function(){
    open_nav.style.display='flex'
})
h_btm_bg.addEventListener('mouseout',function(){
    open_nav.style.display='none'
})

//gnb에 마우스 올리면 해당nav 글자 색 변경 (시간남을때 하기)
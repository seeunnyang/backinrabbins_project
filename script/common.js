// header, footer

//open_nav
//변수생성
const nav = document.querySelector('header .h_btm_bg .h_btm .nav')
const open_nav = document.querySelector('header .h_btm_bg .open_nav_bg')
console.log(nav, open_nav)
//초기 open_nav 숨기기
//nav에 마우스 올리면 open_nav 보이기
open_nav.style.display='none'
nav.addEventListener('mouseover',function(){
    open_nav.style.display='block'
})
//open_nav에 마우스 올리면 open_nav 보이기
open_nav.addEventListener('mouseover',function(){
    this.style.display='block'
})
//open_nav에 마우스 나가면 open_nav 숨기기
open_nav.addEventListener('mouseout',function(){
    this.style.display='none'
})
//nav에 마우스 나가면 open_nav 숨기기
nav.addEventListener('mouseout',function(){
    open_nav.style.display='none'
})

//gnb에 마우스 올리면 해당nav 글자 색 변경 (시간남을때 하기)
const gnb = document.querySelectorAll('header .h_btm_bg .open_nav_bg .open_nav .gnb_wrap .gnb')
const nav_tag = document.querySelectorAll('header .h_btm_bg .h_btm .nav .nav_tag')
console.log(gnb, nav_tag)
gnb.forEach(function(t,i,a){
    //마우스 올릴 때
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        for(let j of nav_tag){j.style.color='#000'}
        nav_tag[i].style.color='#f56f98'
    })
    //마우스 나갔을 때
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        nav_tag[i].style.color='#000'
    })
})



//h_header open_nav 
//변수생성
const open_nav_btn = document.querySelector('header .t_header_bg .t_header .out .out_m #open_nav_btn') /* a태그 */
const t_open_nav = document.querySelector('header .t_header_bg .t_header .t_open_nav') 
const close_btn = document.querySelector('header .t_header_bg .t_header .t_open_nav .in_top #close_btn') /* a태그 */
const t_header = document.querySelector('header .t_header_bg')
const main_warp = document.querySelector('main')
console.log(open_nav_btn, t_open_nav, close_btn)
console.log(t_header, main_warp)
//초기 open_nav 숨기기
t_open_nav.style.display='none'
//open_nav_btn 클릭시 open_nav 보이기
open_nav_btn.addEventListener('click',function(e){
    e.preventDefault()
    t_open_nav.style.display='block'
    // t_header.style.background='rgba(0, 0, 0, 0.1)'
    // main_warp.style.background='rgba(0, 0, 0, 0.1)'
})
//close_btn 클릭시 open_nav 숨기기
close_btn.addEventListener('click',function(e){
    e.preventDefault()
    t_open_nav.style.display='none'
    // t_header.style.background='#fff'
    // main_warp.style.background='#fff'
})
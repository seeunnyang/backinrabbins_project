// main-slide
// 문법=> const 변수명 작성 = new Swiper('적용대상');
// 문법=> const 변수명 작성 = new Swiper('적용대상',{속성:값, 속성:값});
const main_slide = new Swiper('#main_slide',{
    autoplay:{
        delay:5000, //슬라이드 간격(밀리초) 기본3000(3초)
        disableOnInteraction:false, //버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //반복설정 마지막슬라이드→첫번째슬라이드 자연스러운 변경
    speed:1300, //슬라이드 전환 시 부드러운 전환
    direction:'horizontal',
    //effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    navigation: { //슬라이드 이전, 다음 버튼 (페이지 복붙) 
        nextEl: '#main_slide .swiper-button-next',
        prevEl: '#main_slide .swiper-button-prev',
    },
});
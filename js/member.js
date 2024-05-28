var btn = document.getElementById('voice-btn');
var content = document.getElementById('content');
var content2 = document.getElementById('content2');


//音声認識APIの使用

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

if (!('webkitSpeechRecognition' in window)) {
  alert("お使いのブラウザは音声認識APIをサポートしていません。");
} else {
var speech = new webkitSpeechRecognition();
//言語を日本語に設定
speech.lang = "ja";

btn.addEventListener('click', function() {
  try {
      speech.start();
      $('#black').fadeIn().animate({'opacity':0.7},550);
  } catch (e) {
      console.error(e);
      alert("音声認識の開始に失敗しました: " + e.message);
  }
});
//終了判定
speech.addEventListener('nomatch', function() {
  $('#black').fadeOut().animate({'opacity':0},550);
});

speech.addEventListener( 'result' , function( e ) {
    // ➁音声認識した結果を得る処理
$('#content').show();
$('#content2').show();
// 認識された「言葉」を、変数「text」に格納
var text = e.results[0][0].transcript;
// 認識された「言葉(text)」を、表示用のdivタグに代入する
 content.textContent = text;
 content2.textContent = text;
 switch(text){
    case "イスラ":
    getIsura();
    break;

    case "クロシェット":
    getClo();
    break;

    case "ファントム":
    getPhan();
    break;

    case "アクア":
    getAqua();
    break;

    case "セレン":
    getSeren();
    break;

    case "アイザック":
    getIzac();
    break;

    case "ラドン":
    getRadon();
    break;

    case "レオ":
    getReo();
    break;

    case "ロック":
    getRock();
    break;

    default:
    setTimeout(function(){
    content.textContent = "";
    content.style.display = "none";
    content2.textContent = "";
    content2.style.display = "none";
    $('#black').fadeOut().animate({'opacity':0},550);},900);
    break;
 }
} );

function getIsura() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './isura.html';  
    },1300); 
}
function getClo() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './clo.html';  
    },1300); 
}
function getPhan() {
$('#content').addClass("flash");
    setTimeout(function(){
        location = './phantom.html';  
    },1300); 
}

function getAqua() {
  $('#content').addClass("flash");
      setTimeout(function(){
          location = './aqua.html';  
      },1300); 
  }

function getSeren() {
    $('#content').addClass("flash");
        setTimeout(function(){
            location = './seren.html';  
        },1300); 
    }

function getIzac() {
   $('#content').addClass("flash");
        setTimeout(function(){
            location = './izac.html';  
         },1300); 
      }

function getRadon() {
  $('#content').addClass("flash");
        setTimeout(function(){
            location = './radon.html';  
        },1300); 
      }  

function getReo() {
  $('#content').addClass("flash");
        setTimeout(function(){
            location = './reo.html';  
        },1300); 
      }  

function getRock() {
  $('#content').addClass("flash");
        setTimeout(function(){
            location = './rock.html';  
        },1300); 
      }  
}

$(".openbtn").click(function () {
    $(this).toggleClass('active');
      $("#g-nav").toggleClass('panelactive');
      $(".circle-bg").toggleClass('circleactive');
      setTimeout(function(){
        $("#logo").toggleClass('logo-fil');
       },150);
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');
      $("#g-nav").removeClass('panelactive');
      $(".circle-bg").removeClass('circleactive');
  });

  $(function() {
    $('#slider').slick({
      autoplay: true,
      slidesToShow: 1,
	    slidesToScroll: 1,
	    prevArrow: '<span class="material-symbols-outlined usiro">arrow_back_ios</span>',
      nextArrow: '<span class="material-symbols-outlined mae">arrow_forward_ios</span>',
    }); 
  });

  ////////////ページ読み込み時/////////////////
WebFont.load(
    {custom:
      {
        families: ['DotGothic16']
      },loading: function(){},
      active: function()
      {
        $('.voice-btn').css('opacity', '1');
      },inactive: function(){
        //console.log('失敗したとき');
      }
  });
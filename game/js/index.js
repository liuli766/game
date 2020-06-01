//nav切换***************************
function sider() {
   $().ready(function () {
      $(".nav1>li").mouseover(function () {
        // var target = e.target;
        // console.log($(this).children())
        $($(this).children()[0]).css({
          "margin-top": "-14px",
          "color": "#fa3d03"
        });

      })
      $(".nav1>li").mouseout(function () {
        // var target = e.target;
        $($(this).children()[0]).css({
          "margin-top": "0px",
          "color": "#21213e"
        });
        $("d1").css("color", "#fa3d03")
      })
    })
 }
sider();
//轮播图**************************

function banner() {
   var j = 0;
    $("button:eq(2)").click(function () {
      f1();
    })
    $("button:eq(1)").click(function () {
      j--
      if (j == -1) {
        j = 2
      }
      $(`div.banner1:eq(${j})`).addClass("active");
      $(`div.banner1:eq(${j})`).siblings().removeClass("active");
    })
    function f1() {
      j++

      if (j == 3) {
        j = 0
      }
      $(`div.banner1:eq(${j})`).addClass("active");
      $(`div.banner1:eq(${j})`).siblings().removeClass("active");
    }
    var time = setInterval(f1, 3000);
}
banner();
//中low轮播***************************
function ban1() {
var a=0;
    $(".btn1").click(function(){
  f2();
    })
    $(".btn2").click(function(){
      a--
    if(a==-1){
      a=4
    }
      var r=parseInt($(".picture").css("width"));
      var b=a*r*-1
$(".low").css("margin-left",b+"px");
    })
    function f2(){
      a++
    if(a==5){
      a=0
    }
      var r=parseInt($(".picture").css("width"));
      var b=a*r*-1
      // console.log(b)
$(".low").css("margin-left",b+"px");
    }
 setInterval(f2, 3000);
}
ban1();
//图片切换***************************
function active() {
  $(".con1").click(function(){
  // target = e.target;
  $("html").css({
    "width": "100%",
    "height": "100%",
    overflow:"hidden"
  })
  $(".max-motai").css({
    "display": "block",
  })
  var a = parseInt($(this).attr("sg"));
  $(".max-motai>img").attr("src", `image/g${a+1}.jpg`);
  $(".left").click(function () {
    a--
    if (a == -1) {
      a=8
    }
    $(".max-motai>img").attr("src", `image/g${a+1}.jpg`);
  })
  $(".right").click(function () {
    a++
    if (a ==9 ) {
      a=0
    }
    $(".max-motai>img").attr("src", `image/g${a+1}.jpg`);
  })
  $(".remove").click(function () {
    $(".max-motai").css("display", "none");
    $("html").css({
      "height": "auto",
      "width": "auto",
      "overflow": "auto"
    });
  })
  $(".center").click(function () {
    $(".box").css("bottom", "0");
    $(".tp").click(function () {
      $(this).siblings().css("border","none")
      $(this).css({
        "border-width":"2px",
        "border-color": "white",
        "border-style":"solid"
      })
      var src = $(this).children().attr('src');
      a=parseInt(src.slice(-5, -4));
      a=a-1
      $(".max-motai>img").attr("src", src);
    
    })
    $(".close").click(function () {
      $(".box").css("bottom", "-136px");
    })
  })
})
}
active();
//表单效果
function form() {
  $(".ace").focus(function () {
    // console.log($(this));
    $(this).next().animate({
      "line-height": "30px",
      "height": "81px",
      "top": "-30px",
      "font-size":"12px"
    },200).animate({
     "z-index":"-1",
    },0)
  })
  $(".ace").blur(function () {
    // console.log($(this));
    $(this).next().animate({
      "z-index":"1",
     },0).animate({
      "line-height": "52px",
      "height": "52px",
      "top": "0px",
      "font-size":"16px"
    },200)
  })
}
form();

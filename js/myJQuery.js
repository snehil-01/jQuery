$(document).ready(function () {
  console.log("We are using jQuery");
  console.log(jQuery);
  // jQuery Syntax looks like this
  // $('selector').action()

  //clicks on all the p elements.
  // $("p").click(); //click on p
  // jQuery('p').click(()=>{
  //     console.log("clicked on p")
  // });

  $("p").click(function () {
    console.log("clicked on p", this);
    // $('p').hide();
    // $(this).hide();
    // $('#id').hide();
    // $('.class').hide();
  }); //do this when we click on p

  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector -  This is an example of element selector which clicks on all p
  //   $('p').click();

  // 2. Id selector - this is an example of id selector
  //   $('#second').click()

  // 3. Class selector - this is an example of id selector
  //   $('.odd').click()

  // other selectors
  //   $('*').click() // clicks on all the elements
  //   $('p.odd').click() // clicks on all the elements
  //   $('p:first').click() // clicks on all the elements

  // Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  // $('p').dblclick(function(){
  //     console.log("you double cliked on p")
  // })
  // $('p').mouseenter(function(){
  //     console.log(`you entered`,this)
  // })
  // $('p').mouseleave(function(){
  //     console.log("mouse leave")
  // })
  // $('p').hover(function(){
  //     console.log("you hovered on", this)
  // },function(){
  //     console.log("thanks for coming!!")
  // })

  // $('p').on({
  //     click:function(){
  //         console.log("yoou clicked",this);
  //     },
  //     mouseenter:function(){
  //         console.log("mouse Entered ",this);
  //     }
  // })

  // $('#wiki').hide(1000,function(){
  //     console.log("div chupa diya gaya hain!!")
  // })
  // $('#wiki').show(1000,function(){
  //     console.log("div show hoe gaya hain!!")
  // })
  // $('#butt').click(function(){
  //   $('#wiki').toggle(1000);
  // })

  // $('#wiki').fadeOut(3000)
  // $('#wiki').fadeIn(3000)

  // $("#butt").click(function () {
  //   $("#wiki").fadeToggle(1000);
  // });
  $('#wiki').slideUp(1000)
  $('#wiki').slideDown(1000)
});

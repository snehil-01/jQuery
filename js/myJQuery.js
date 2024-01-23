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

});

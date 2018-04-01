$(document).ready(function(){

        $("#kontaktNav").click(function() {
            $('html, body').animate({
                scrollTop: $("#footerz").offset().top
            }, 1000);
             $(".topnavDropdown").fadeOut(300);
             $("#dropdownBtnClose").hide();
             $("#dropdownBtn").fadeIn(300).delay(1000);
        });
 
    $("#dropdownBtn").click(function(){ //dropdownMENU OPEN (RESPOSNIVE)
        $(".topnavDropdown").slideDown('slow');
        $("#dropdownBtn").hide();
        $("#dropdownBtnClose").show();
    $("#dropdownBtnClose").click(function(){
        $("#dropdownBtnClose").hide();
        $("#dropdownBtn").show();
        $(".topnavDropdown").slideUp('slow');
    });  
    });
    $("#openBtn1").click(function(){ //pizza section
        $("#openBtn1").hide();
        $("#dropdownPizza").slideDown('slow');
        $("#closeBtn1").fadeIn(1000);
    });

    $("#closeBtn1").click(function(){
        $("#openBtn1").fadeIn(1000);
        $("#dropdownPizza").slideUp('slow');
        $("#closeBtn1").fadeOut(300);
        $('html, body').animate({
            scrollTop: $("#scrollToPizza").offset().top
        }, 500);
    });
    // ----------------------------------
    $("#openBtn2").click(function(){ //calzone section
        $("#openBtn2").hide();
        $("#dropdownCalzone").slideDown('slow');
        $("#closeBtn2").fadeIn(1000);
    });

    $("#closeBtn2").click(function(){
        $("#openBtn2").fadeIn(1000);
        $("#dropdownCalzone").slideUp('slow');
        $("#closeBtn2").fadeOut(300);
        $('html, body').animate({
            scrollTop: $("#scrollToCalzone").offset().top
        }, 500);
    });
    // ----------------------------------
    $("#openBtn3").click(function(){ //sendvic section
        $("#openBtn3").hide();
        $("#dropdownSendvic").slideDown('slow');
        $("#closeBtn3").fadeIn(1000);
    });

    $("#closeBtn3").click(function(){
        $("#openBtn3").fadeIn(1000);
        $("#dropdownSendvic").slideUp('slow');
        $("#closeBtn3").fadeOut(300);
        $('html, body').animate({
            scrollTop: $("#scrollToSendvic").offset().top
        }, 500);
    });
    // ----------------------------------
    $("#OstaloBtn1").click(function(){ //burgeri
        $("#burgeriList").slideDown('slow');
        $("#OstaloBtn1").hide();
        $("#OstaloBtnClose1").delay(300).show();
    });
    $("#OstaloBtnClose1").click(function(){
        $("#burgeriList").slideUp('slow');
        $("#OstaloBtnClose1").hide();
        $("#OstaloBtn1").fadeIn();
    });
    // ----------------------------------
    $("#OstaloBtn2").click(function(){ //pomfrit
        $("#friesList").slideDown('slow');
        $("#OstaloBtn2").hide();
        $("#OstaloBtnClose2").delay(300).show();
    });
    $("#OstaloBtnClose2").click(function(){
        $("#friesList").slideUp('slow');
        $("#OstaloBtnClose2").hide();
        $("#OstaloBtn2").fadeIn();
    });
    // ----------------------------------
    $("#OstaloBtn3").click(function(){ //pancake
        $("#pancakeList").slideDown('slow');
        $("#OstaloBtn3").hide();
        $("#OstaloBtnClose3").delay(300).show();
    });
    $("#OstaloBtnClose3").click(function(){
        $("#pancakeList").slideUp('slow');
        $("#OstaloBtnClose3").hide();
        $("#OstaloBtn3").fadeIn();
    });
    // ----------------------------------
});
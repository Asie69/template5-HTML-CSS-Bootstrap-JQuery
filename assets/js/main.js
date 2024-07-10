
function getData() {
    $(".res-hotCoffe,.res-juice,.res-aboutUS,.res-specialItems,.res-contactUs").hide();
    $(".res-iceCoffe").show();
}

$(document).ready(function () {
    $("#hotCoffe").click(function () {
        $(".res-iceCoffe,.res-juice").fadeOut("slow");
        $(".res-hotCoffe").fadeIn(2000);
    });
    $("#iceCoffe").click(function () {
        $(".res-iceCoffe").fadeIn(2000);
        $(".res-hotCoffe,.res-juice").fadeOut("slow");
    });
    $("#juice").click(function () {
        $(".res-juice").fadeIn(2000);
        $(".res-hotCoffe,.res-iceCoffe").fadeOut("slow");
    });
    $("#aboutUs").click(function () {
        $(".res-drink,.res-contactUs,.res-specialItems").hide();
        $(".res-aboutUS").show();
    });
    $("#drinks").click(function () {
        $(".res-aboutUS,.res-specialItems,.res-contactUs").hide();
        $(".res-drink").show();
    });
    $("#specialItems").click(function () {
        $(".res-aboutUS,.res-drink,.res-contactUs").hide();
        $(".res-specialItems").show();
    });
    $("#contactUs").click(function () {
        $(".res-aboutUS,.res-drink,.res-specialItems").hide();
        $(".res-contactUs").show();
    });
});


function validateForm() {
    debugger
    
    var isSend;
     let userName = document.querySelector('#userName').value;
     let Email = document.querySelector('#email').value;
     const reUser = /^[a-z0-9_-]{3,}$/;
     const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     if (!userName) {
         document.querySelector('#userName').classList.add('is-invalid');
         isSend = false
     } else {
         document.querySelector('#userName').classList.remove('is-invalid');
         isSend = true;
     }
     if (reUser.test(userName)) {
         document.getElementById('userError').innerHTML = "";
         document.querySelector('#userName').style = "border: 1px solid green;";

     } else {
         document.getElementById('userError').innerHTML = "حداقل 3 کاراکتر";
         document.querySelector('#userName').style = "border: 1px solid red;";
         isSend = false;
     }



     if (!Email) {
         document.querySelector('#email').classList.add('is-invalid');
         isSend = false
     } else {
         document.querySelector('#email').classList.remove('is-invalid');
         
     }
     if (reEmail.test(Email)) {
         document.getElementById('emailError').innerHTML = "";
         document.querySelector('#email').style = "border: 1px solid green;";

     } else {
         document.getElementById('emailError').innerHTML = "ایمیل نادرست است";
         document.querySelector('#email').style = "border: 1px solid red;";
         isSend = false;
     }

    
     if (isSend) {
         document.querySelector('#reg-btn').classList.remove('disabled');
     } else {
         document.querySelector('#reg-btn').classList.add('disabled',true);

     }
     return isSend;
};
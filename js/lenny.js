var moon = function(){
    $(".members").click(function(){
        $(".itemsload").load("etc/members.php");
        console.log("Members done!");
    });

    $(".mail_us").click(function(){
        $(".itemsload").load("etc/mail_us.php");
        console.log("Mail us done!");
    });



    /**/

    /**/

};

$(document).ready(moon);

function testVariable() {
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
    var rate;
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}

    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1641457962:AAGnP9PzlsLOiUDJFhhwG0braXVNiJBBJic/sendMessage?chat_id=-518221023&text='+result;
        request.open("post", url);
        request.send();
         //  window.open('bc.html', '_blank');
            var wnd = window.open("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message=https://a1droptaxi.com%0AContact No: 8015918900%0AHello "+strText+",%0AThank you for Booking with A1 Drop Taxi.Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText1);
					      
                              if(wnd){
                                      setTimeout(function () { wnd.close();}, 1800);
                              }
				
        }

});
}       
            /*  var xhttp = new XMLHttpRequest();
         xhttp.open("GET", "https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message=https://a1droptaxi.com%0AContact No: 8015918900%0AHello "+strText+",%0AThank you for Booking with A1 Drop Taxi.Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText1, true);        
         xhttp.send();
            tele();
       //  window.open('bc.html', '_blank');
        }
    });}
function testVariable() {
    alert("hi");
}
*/

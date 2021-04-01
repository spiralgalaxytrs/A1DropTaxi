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
        if (strText == "" || strText1 == "" || strText2 == "" || strText3 == "" || strText4 == "" || strText7 == "" || strText6 == "") {
            console.log('error');
            alert("Verfy the Phone Number");
        } else {
              var xhttp = new XMLHttpRequest();
          xhttp.open("GET", "https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message=https://xyz.in%0AContact%20No:%20950xxxxx14%0AHello"+strText+" %20,%0AThank%20you%20for%20Booking%20with xxx.%0AYour%20Booking%20has%20been%20Confirmed.%0ABooking%20Details%0A%20%0AFor%20your%20kind%20information%20toll%20and%20state%20taxes%20will%20be%20paid%20on%20your%20own.%0AHope%20you%27ll%20enjoy%20the%20ride&language=english&route=p&numbers="+strText1, true);
          xhttp.send();
          //  window.open('https://xx.html', '_blank');
            alert("booked");
        }
    });}

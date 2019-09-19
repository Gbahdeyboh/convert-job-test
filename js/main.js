const _ouibounce = ouibounce(document.querySelector('#modal'), {
    aggressive: true,
    sensitivity: 40,
    timer: 0,
    callback: function() {
        document.querySelector('#modal-body').style.display = 'flex'; // Displays the modal when sers attempt to leave the page 
        document.querySelector('#modal-overlay').style.display = 'flex'; // Displays the modal-overlay when users attempt to leave the page
		// Get the IP address
        const URL = "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";
        $.ajax({
        url: URL,
        method: "GET"
        }).then(function(response) {
        	console.log("the response is ", response);
        	let city = response.city;
            let offerText = `WAIT! SPECIAL OFFER FOR ${city.toUpperCase()} RESIDENTS...`
            document.querySelector('#offers').textContent = offerText;
            // var caps = string.toUpperCase();
            // var location = $(".modal-title");
            // location.append(caps);
        });
//flipclockjs 
        timer = new FlipClock($('#timer-body'), 3600, {
            clockFace: 'HourlyCounter',
            countdown: true
        });

        $(document).ready(function(){
          $("#claim").click(function(){
            clicks++;
            console.log(clicks);
          });
        });
    }
  });
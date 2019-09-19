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
            
        });
        // The timer
        timer = new FlipClock($('#timer-body'), 3600, {
            clockFace: 'HourlyCounter',
            countdown: true
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
	//wait for the DOME to load before proceeding
	$('#modal-body').on('click', function() { // when the modals body is clicked
	    $('#modal-body').hide(); //hide the modal body
	    $('#modal-overlay').hide(); //hide the modal overlay
	});
})
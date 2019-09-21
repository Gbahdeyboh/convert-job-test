localStorage.clear('ip')
const _ouibounce = ouibounce(document.querySelector('#modal'), {
    aggressive: true,
    sensitivity: 40,
    timer: 0,
    callback: function() {
        document.querySelector('#modal-body').style.display = 'flex'; // Displays the modal when sers attempt to leave the page 
        document.querySelector('#modal-overlay').style.display = 'flex'; // Displays the modal-overlay when users attempt to leave the page
		// Get the IP address
        const URL = "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";
        let offerText = 'WAIT! SPECIAL OFFER FOR [CITY] RESIDENTS...';
        document.querySelector('#offers').textContent = offerText;
        timer = new FlipClock($('#timer-body'), 3600, {
            clockFace: 'HourlyCounter',
            countdown: true
        });
        let city = localStorage.getItem('ip');
        localStorage.clear('ip');
        setInterval(() => {	
        	if(city !== localStorage.getItem('ip')){
		        document.querySelector('#offers').textContent = `WAIT! SPECIAL OFFER FOR ${localStorage.getItem('ip').toUpperCase()} RESIDENTS...`;
        		console.log("The city is ", localStorage.getItem('ip'));
        	}
        }, 1000)
    }
});

window.addEventListener('DOMContentLoaded', () => {
	//wait for the DOME to load before proceeding
	$('#claim-disount-btn').on('click', function() { // when the modals body is clicked
	    $('#modal-body').hide(); //hide the modal body
	    $('#modal-overlay').hide(); //hide the modal overlay
	});
})
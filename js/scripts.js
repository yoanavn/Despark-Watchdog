$(document).ready(function() {
	var apiUrl = 'http://192.168.69.96';

	serverGet('', function (data) {
		console.log(data.opened_windows);
		if (data.opened_windows != 0) {
			$('.zone1').attr("class", "zone1 is-active");
		} else {
			$('.zone1').attr("class", "zone1");
		}
	});

	function serverGet(param, callback) {
	    var output = {};

	    $.ajax({
            url: apiUrl + param,
            dataType: 'json',
            async: false,
            timeout: 5000,
            success: function(data) {

                if (callback) {
                    callback(data)
                }
                output = data
            },
            error: function(data) {
            }
        });
	}
});

<!DOCTYPE html>
<html>
<head>
	<title>yalu-103</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	
	

     <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

	<script type="text/javascript">


</script>
    	
</head>
<body>
	<div class="top-text"><span></span></div>
	<div class="center-text"><span>go</span></div>
	<div class="bottom-text2"><div id="load" class="jbme"></div></div>
	<div class="bottom-text"><span>Compatible with iOS 11.4-11.4.1 (A7-A8)</span></div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script>
		function change1() {
			$(".center-text").html("<span>bypassing kpp...</span>");
			setTimeout(change2, 10000);
		}
		function change2() {
			$(".center-text").html("<span>exploiting the kernel</span>");
			setTimeout(change3, 10000);
		}
		function change3() {
			$(".center-text").html("<span>exploiting kernel, </br> success</span>");
			setTimeout(change4, 7000);
		}
		function change4() {
			$(".center-text").html("<span>bypassing AMCC...</span>");
			setTimeout(change5, 8000);
		}
		function change5() {
			$(".center-text").html("<span>installing LaBaStore...</span>");
			setTimeout(change5, 20000);
function change6() 
{
			function change4() {
			$(".center-text").html("<span>Respring</span>");
			setTimeout(change5, 5000);
		}

window.location.replace("http://saigonbreak.github.io/reboot/source.html");
			setTimeout(change5, 5000);
		}
		$(".center-text").click(function() {
			if(!$(this).hasClass("kolor2")) { 
				$(".center-text").addClass("kolor2");
				setTimeout(change1, 2000);
			}
		});
	</script>
		<script>$
(document).ready(function() {
	function iOSversion() {
		if (/iP(hone|od|ad)/.test(navigator.platform)) {
			// supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
			var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
		}
	}

	ver = iOSversion();

	if (ver[0] >= 5) {
		document.getElementById('load').innerHTML = 'Running iOS '+ver;
		/*$('body').addClass('iOS-tagged');
	*/}
});
	</script>
</body>
</html>
document.querySelector('#buttonPegarIP').addEventListener('click', e => {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", 'https://extreme-ip-lookup.com/json/');
	xmlhttp.send();
	xmlhttp.onload = function(e) {
		console.log("Seu IP é: "+xmlhttp.response);
		console.log(JSON.parse(xmlhttp.response));
		var ip = JSON.parse(xmlhttp.response).query;
		console.log(ip);
		colocarIpNaTela(ip);
	}

})

function colocarIpNaTela(ip){
	document.querySelector("span").innerHTML = ip;
	document.querySelector("h3").style.display = 'block';
	console.log();
}


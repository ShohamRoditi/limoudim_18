// window.onload=function(){
	// };

var i=0;
function checkAddress(){
	var arrAddress=["israel","usa","asia","india"];
	var addToAddress = document.getElementById("address");
	var addTo = document.getElementById("adrs");
    var addressError = document.createElement("h4");
     // addToAddress.appendChild(addressError);
    var address=addToAddress.value;
	for(i=0; i<4; i++){
		if(address==arrAddress[i]){
			 	 return true;	
		}
	}
		 	//addToAddress.innerHTML = 'blablabla';
		 	addressError.innerHTML = "You are required to enter the one of the following four addresses: israel, usa, asia, india";
		 	addTo.appendChild(addressError);
			return false;
};
	 




window.onload = function(){
 	var i;
 	var plus = document.getElementById("plus");
 	for(i=0;i<4;i++){
 		createBox();
 	};
 	plus.onclick=function(){
		createBox();	
 	};
};
 


function createBox(){
	var newObj = document.createElement("article");
	var formObj = document.getElementById("container");
 	formObj.appendChild(newObj);
 	newObj.style.backgroundColor = "#000000";
 	newObj.style.opacity = Math.random();
 	
	newObj.onmouseover = function(){
		opacity_element=newObj.style.opacity;
		newObj.style.opacity = 1.0;
    	newObj.style.backgroundColor="#ffffff";
	};
	
	newObj.onmouseout = function(){
		newObj.style.opacity = opacity_element;
    	newObj.style.backgroundColor="#000000";
	};
	
};
	

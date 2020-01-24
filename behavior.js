document.addEventListener("DOMContentLoaded", function(event){
	
	//alert('Hello!')

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function(){

    	//alert("I saw you click!");

	if(thumbnailElement.className == ""){

	    thumbnailElement.className = "small";
	} 
	else {	    
	    thumbnailElement.className="";
	    }
    })

    // Js Move imagens
    var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("moveImg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}
})






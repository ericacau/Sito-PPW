function gestoreMenu () {
	try {
		if(nodoMenu.className === "m_navigazione") {
			nodoMenu.className += " responsive";
		} else {
			nodoMenu.className = "m_navigazione";
		}
	} catch (e) {
		alert("gestoreMenu " + e);
	}
}

var nodoMenu;

function gestoreLoad () {
    try {
    	nodoMenu = document.getElementById("menu");
    	nodoMenu.onclick = gestoreMenu;
    	} catch ( e ) {
		alert ("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;
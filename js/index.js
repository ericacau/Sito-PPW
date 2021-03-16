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

function cambiaFoto (x) {
	indiceFoto += x;
	if (indiceFoto == numeroFoto) {
		indiceFoto = 0;
	}
	if (indiceFoto < 0) {
		indiceFoto = numeroFoto - 1;
	} 
	nodoFoto.setAttribute("src", galleria[indiceFoto]);
	scriviDescrizione (nodoDescrizioneGalleria, descrizioni_galleria[indiceFoto]);
}

function gestoreAvanti() {
	try {
		cambiaFoto(+1);
	} catch ( e ) {
		alert ("gestoreAvanti" + e);
	}
}

function gestoreIndietro() {
	try {
		cambiaFoto(-1);
	} catch ( e ) {
		alert ("gestoreIndietro" + e);
	}
}

function scriviDescrizione (nodo, messaggio) {
	var nodoDescrizioneGalleria = document.createTextNode(messaggio);
	nodo.replaceChild(nodoDescrizioneGalleria, nodo.firstChild);
}

var nodoMenu;
var indiceFoto;
var numeroFoto;
var nodoFoto;
var nodoAvanti;
var nodoIndietro;
var nodoDescrizioneGalleria;

function gestoreLoad () {
	try {
		nodoMenu = document.getElementById("menu");
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoDescrizioneGalleria = document.getElementById("descrizione_galleria");
		nodoMenu.onclick = gestoreMenu;
		nodoAvanti.onclick = gestoreAvanti;
		nodoIndietro.onclick = gestoreIndietro;
		numeroFoto = 12;
		indiceFoto = 0;
		cambiaFoto(0);
		var nodoDescrizione = document.createTextNode("");
		nodoDescrizioneGalleria.appendChild(nodoDescrizione);
	} catch ( e ) {
	alert ("gestoreLoad " + e)
	}
}

window.onload = gestoreLoad;

var galleria = [	
	"immagini/galleria/DAO_3.jpg",
	"immagini/galleria/DAO.jpg",
	"immagini/galleria/DAOpg.jpg",
	"immagini/galleria/DAO_2.jpg",
	"immagini/galleria/DA2.jpg",
	"immagini/galleria/DA2_4.jpg",
	"immagini/galleria/DA2_2.jpg",
	"immagini/galleria/DA2_3.jpg",
	"immagini/galleria/DAI_3.jpg",
	"immagini/galleria/DAIpg.jpg",
	"immagini/galleria/DAI_2.jpg",
	"immagini/galleria/DAI_4.jpg"
];

var descrizioni_galleria = [
	"Screenshot di Dragon Age: Origins. Il giocatore può scegliere tra varie opzioni di dialogo per rispondere agli NPC.",
	"Alistair attacca un Ogre durante la quest nella Torre di Ishal (Dragon Age: Origins)",
	"Oghren, Anders, il Custode e Mhairi parlano con il siniscalco Varel (Dragon Age: Origins - Awakening)",
	"Il Custode, Oghren, Anders e Nathaniel durante la quest di Paludenera (Dragon Age: Origins - Awakening)",
	"Combattimento tra Hawke e l'Arishok durante il secondo atto di Dragon Age 2",
	"Varric racconta le imprese di Hawke a Cassandra Pentaghast (Dragon Age 2)",
	"Dialogo con Varric (Dragon Age 2)",
	"Marian Hawke termina la vita di un Ogre (Dragon Age 2)",
	"L'Inquisitore usa il Marchio per chiudere uno Squarcio nell'Oblio (Dragon Age: Inquisition)",
	"Dialogo con Morrigan nella sua prima apparizione in Dragon Age: Inquisition",
	"L'Oasi Proibita (Dragon Age: Inquisition)",
	"Leliana, capospia dell'Inquisizione (Dragon Age: Inquisition)",
];
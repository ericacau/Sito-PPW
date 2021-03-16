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

function scriviTitolo (nodo, messaggio) {
	var nodoTitolo = document.createTextNode(messaggio);
	nodo.replaceChild(nodoTitolo, nodo.firstChild);
}

function scriviDescrizione (nodo, messaggio) {
	var nodoTesto = document.createTextNode(messaggio);
	nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function gestoreDescrizioneDefault () {
	try {
		scriviTitolo(nodoTitolo, nomi_regioni[2]);
		scriviDescrizione(nodoDescrizione, mappa[2]);
		nodoImmagine.src="immagini/thedas/Ferelden.jpg";
	} catch ( e ) {
		alert("gestoreDescrizioneDefault " + e);
	}
}

function gestoreClickArea () {
	try {
		scriviTitolo(nodoTitolo, nomi_regioni[this.id]);
		scriviDescrizione (nodoDescrizione, mappa[this.id]);
		nodoImmagine.src="immagini/thedas/" + nomi_regioni[this.id] + ".jpg";
	} catch ( e ) {
		alert ("gestoreClickArea " + e);
	}
}

function gestoreResize () {
   try {
      var attualeDimensioneFoto = nodoThedas.width;
      var ratio = attualeDimensioneFoto / dimensioneFoto;
      for (var i = 0; i < nodiArea.length; i++) {
         for (var j = 0; j < coordinateAree[i].length; j++) {
            coordinateAree[i][j] *= ratio;
         }
         nodiArea[i].coords = coordinateAree[i].join(',');
      }
      dimensioneFoto = attualeDimensioneFoto;
   } catch ( e ) {
      alert("gestoreResize " + e);
   }
}

function gestoreCursore () {
	try {
		this.style.cursor = "pointer";
	} catch ( e ) {
		alert("gestoreCursore "+ e); 
	}
}

const LARGHEZZA_ORIGINALE = 1600;
var nodoMenu;
var nodiLista;
var nodoThedas;
var coordinateAree;
var nodiArea;
var nodoDescrizione;
var dimensioneFoto;
var nodoTitolo;
var nodoImmagine;

function gestoreLoad () {
    try {
    	nodoMenu = document.getElementById("menu");
    	nodiLista = document.getElementsByTagName("li");
		nodiArea = document.getElementsByTagName("area");
		nodoThedas = document.getElementById("thedasMap");
		nodoDescrizione = document.getElementById("descrizione");
		nodoTitolo = document.getElementById("titoloDescr");
		nodoImmagine = document.getElementById("immagineDescr");
		coordinateAree = [];
		for (var i = 0; i < nodiArea.length; i++) {		
			var nodoArea = nodiArea[i];
			nodoArea.onclick = gestoreClickArea;
			nodoArea.onmouseover = gestoreCursore;
			coordinateAree[i] = nodoArea.coords.split(',');
		}
		dimensioneFoto = LARGHEZZA_ORIGINALE;
		var nodoTestoTitolo = document.createTextNode("");
		nodoTitolo.appendChild(nodoTestoTitolo);
		var nodoTesto = document.createTextNode("");
		nodoDescrizione.appendChild(nodoTesto);
		nodoMenu.onclick = gestoreMenu;
		window.onresize = gestoreResize;
		gestoreDescrizioneDefault();
		gestoreResize();
	} catch ( e ) {
		alert ("gestoreLoad " + e);
	}
}

window.onload = gestoreLoad;

var nomi_regioni = [
	"Anderfels",
	"Tevinter",
	"Ferelden",
	"Nevarra",
	"Orlais",
	"Liberi Confini",
	"Antiva",
	"Rivain",
	"Seheron", 
	"Par Vollen"
];


var mappa = [
	"L’Anderfels è una regione retta da una monarchia, nota per essere la patria dei Custodi Grigi. Essi hanno il loro quartier generale nella Fortezza di Weisshaupt, in cui si trova anche il Primo Custode, il comandante dei Custodi Grigi di tutto il Thedas. L’Anderfels ha un ambiente inospitale, caratterizzato da steppe e deserti, con un clima arido d’estate e forti venti d’inverno, che scatenano tempeste di sabbia. A sud si trovano le montagne Hunterhorn, al di sotto delle quali si trovano le vestigia del thaig Kal-Sharok, capitale, un tempo, del regno dei nani. La capitale è Hossberg, dove si trova la residenza del re. Dal punto di vista religioso, si segue il culto della dea Andraste e della Chiesa del Creatore.",
	"L’Impero Tevinter è la più antica nazione di tutto il Thedas ed è governato da una magocrazia, dove i governanti prendono il nome di Magistri e sono guidati dall’Arconte Imperiale. I Magistri sono persone ambiziose e formano una vera e propria elite di maghi, i quali non si fanno remore ad utilizzare la Magia del Sangue, anche sui propri familiari, per accrescere i loro poteri e proteggere il loro status sociale. Il Tevinter, un tempo, è stata la più importante nazione del Thedas, ma ora è un’ombra di quello che era in passato. La società è divisa in classi sociali (Soporati, Laetans, Altus), che dipendono dalle abilità magiche e dal lignaggio della famiglia. È diffusa la schiavitù e gli schiavi, in maggior parte elfi, vengono ignorati al punto da non essere considerati cittadini del Tevinter. La religione più seguita è quella della Chiesa Imperiale. Il Tevinter è modellato sull’antico Impero Romano e il Tevene, la lingua ufficiale della regione, è basata sul latino.",
	"Il Ferelden è una monarchia, instaurata da relativamente poco, da Re Calenhad; essa però non è incontrastata, e i nobili, durante l'Incontro dei Popoli, possono anche mettere in discussione l'autorità del re. La capitale è situata a Denerim, a nord est. Il Ferelden nasce come una nazione 'militare', che ha iniziato a civilizzarsi solo negli ultimi secoli. Esso, come molte altre regioni del Thedas ha delle enclavi, in cui sono segregati gli elfi. La società è suddivisa tra nobili e uomini comuni (in cui rientrano anche gli elfi dell'Enclave). Particolarità del Ferelden è l'importanza dei cani, usati per la caccia e per proteggere i magazzini da altri animali. Molti visitatori di altre regioni affermano che il 'Ferelden ha odore di cane bagnato'. Il cibo viene spesso descritto come umile e poco appetitoso e si dice che i fereldiani, per cucinare, gettino tutto in una pentola, fino a quando gli ingredienti non diventano grigi e assolutamente non gradevoli da vedere.",
	"La regione che prende il nome di Nevarra  era inizialmente inglobata all'interno dei Liberi Confini, poi, espandendosi, si è staccata, diventando uno stato a sé. Nevarra è retta da una monarchia e i membri della famiglia reale spesso appartengono al clan dei Penthagast. La regione è famosa per l'arte e per gli eventi culturali che si susseguono per tutto l'anno. D'estate, ad esempio, si svolgono delle gare di arguzia e dei dibattiti di filosofia e retorica, mentre d'autunno si pagano numerosi attori, affinché mettano in scena le gesta degli antenati rappresentati nelle sculture. I nevarriani hanno un particolare rapporto con la magia, legata alla morte, motivo per il quale i cadaveri vengono mummificati  e conservati in cripte. Questo compito è affidato a un ordine di maghi chiamato 'Mortalitasi'.",
	"L'Impero Orlaisiano è attualmente la più potente nazione dell'intero Thedas. Venne fondato da Kordillus Drakon I e la sua capitale è sita a Val Royeaux, dove si trova anche la sede principale della Chiesa e il seggio della Divina. A Val Royeaux, inoltre, è presente l'università, dove studiano i giovani nobili di tutto il Thedas. È particolarmente apprezzata anche l'arte tanto che, sotto il regno di Celene, è iniziato una sorta di 'Rinascimento'. Tra i pittori più famosi ci sono Henri de Lydes, i cui affreschi di Andraste e dei suoi Discepoli sono sopravissuti alle Sacre Marce, e il pittore Caliastri. È importante anche il teatro, visto come riflesso della situazione politica del paese. Spesso i copioni teatrali riguardano il disprezzo verso il Ferelden o la figura di Kordillius Drakon. L'architettura orlaisiana è ispirata al gotico. Nei palazzi si fa uso di marmi e di colori come il blu, l'oro e il bianco. La stravaganza, tipica di Orlais, si manifesta sia nell'abbigliamento, dove i nobili sono soliti indossare delle maschere in pubblico, sia nel cibo, volto a stupire l'occhio, più che il palato. Orlais, inoltre, è il primo importatore di vino antivano. Questa regione è parzialmente ispirata alla Francia, mentre l'uso del marmo bianco nelle architetture richiama la Città del Vaticano.",
	"I Liberi Confini sono un gruppo di città stato, dove, tra le più importanti figurano Kirkwall, Starkhaven e Tantervale. Esse inizialmente erano inglobate all'interno dell'Impero Tevinter e di questo si può avere riscontro nelle architetture delle città, con alti palazzi in marmo bianco. I Liberi Confini forniscono materie prime a gran parte del Thedas, grazie alle numerose fattorie vicine al fiume Minanter. Importante, all'interno dei Liberi Confini, è il Grande Torneo, dove si sfidano in prove di lotta e valore, persone provenienti da tutto il Thedas.",	
	"Antiva è una nazione plutocratica. Essa è il principale centro di scambio nel nord del Thedas ed è nota come esportatrice di vino e come produttrice di caffé. La capitale è Antiva, che dà sulla Baia di Rialto. Il potere, ufficialmente, sarebbe detenuto da una monarchia, ma nella pratica è detenuto da una dozzina di potenti mercanti. Sebbene manchi un esercito vero e proprio, nessuno, nemmeno i Qunari, osa attaccare Antiva a causa dei 'Corvi di Antiva', la più efficiente gilda di assassini dell'intero Thedas. Le forze navali di Antiva sono guidate da un gruppo di pirati chiamato Felicissima Armada e, i duelli non letali, sono legali per risolvere le dispute tra i nobili. Tra le feste più importanti ci sono i Satinalia, festa che ad Antiva dura per più di una settimana, festeggiati all'inizio del mese di Umbralis, che prevedono l'incoronazione del buffone della città come regnante. Antiva è ispirata alla Venezia medievale e inizialmente, il suo nome doveva essere 'Calabria'; alcuni luoghi, richiamano però luoghi italiani realmente esistenti, come Treviso e Rialto. Gli antivani, nel gioco, parlano con un accento spagnolo, come Zevran.",
	"Rivain è una penisola situata a nord-est ed è retta da una monarchia, e il centro del potere risiede a Dairsmuid, l'unico luogo dove la Chiesa ufficiale ha un qualche tipo di influenza. A Rivain si trova anche l'unico insediamento pacifico di Qunari del Thedas, a Kont-aar, a nord. È presente anche un insediamento di elfi Dalish a Llomerryn. Rivain è uno dei principali produttori di tè e si dice che uno di questi, con cannella, zenzero e chiodi di garofano, avrebbe proprietà curative.",
	"Seheron è la più grande isola del Thedas e in passato era sotto il potere dell'Impero Tevinter, cosa che si può rivedere anche nell'architettura. Tra il 6:32 e il 6:42 venne conquistata dai Qunari, che riuscirono successivamente a conquistare anche Par Vollen. Attualmente Seheron è ancora territorio dei Qunari, contro i quali si oppone una forte resistenza dal Tevinter. La leggenda vuole che i Grifoni cavalcati una volta dai Custodi Grigi provenissero proprio dall'isola.",
	"Par Vollen è un'isola, patria dei Qunari. È un territorio ricco di giungle e foreste tropicali. La capitale, sita a Qunandar, si trova nella costa meridionale ed è ricca di grandi acquedotti. Tipiche dell'architettura di Par Vollen sono le massicce piramidi, forse costruite in luoghi collegati a particolari costellazioni. Stando alle parole del Toro di Ferro sono anche presenti delle rovine naniche simili, per periodo di costruzione e architettura, a quelle di Kal Repartha."
];


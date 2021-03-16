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

function scriviDescrizione (nodo, messaggio) {
	var nodoTesto = document.createTextNode(messaggio);
	nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function gestoreDescrizioniImmagini () {
	try {
		scriviDescrizione(nodoDescGiochi,descrizioni_giochi[this.id]);
	} catch (e) {
		alert("gestoreDescrizioniImmagini " + e);
	}
}

var nodoMenu;
var nodoImmagini;
var nodoDescGiochi;

function gestoreLoad () {
	try {
		nodoMenu = document.getElementById("menu");
		nodoImmagini = document.getElementsByClassName("imgStoria");
		nodoDescGiochi = document.getElementById("storiaGiochi");
		for (i=0; i<nodoImmagini.length; i++){
			nodoImmagini[i].onclick = gestoreDescrizioniImmagini;
		}
		var nodoTestoDesc = document.createTextNode("");
		nodoDescGiochi.appendChild(nodoTestoDesc);
		nodoMenu.onclick = gestoreMenu;
	} catch ( e ) {
		alert ("gestoreLoad " + e);
	}
}

window.onload = gestoreLoad;

var descrizioni_giochi = [
	"Le vicende di Dragon Age: Origins hanno inizio nel 9:30, nel Ferelden, nel pieno del Quinto Flagello, piagato dall'invasione dei Prole Oscura. Le prime battute del gioco variano a seconda dell'origine scelta per il proprio personaggio, ma tutte e sei portano sempre allo stesso evento: il proprio personaggio viene reclutato da Duncan, comandante dei Custodi Grigi del Ferelden, e portato a Ostagar, dove è radunato l'esercito fereldiano pronto a sferrare l’attacco decisivo ai Prole Oscura. Il giocatore, accompagnato da Alistair e da altre due reclute, affronta una breve spedizione nelle Selve Korkari per recuperare tre fiale di sangue di Prole Oscura e degli antichi documenti dei Custodi. Qua avviene il primo incontro con Morrigan, una Strega delle Selve, che dirà al gruppo che gli antichi documenti sono custoditi da sua madre, Flemeth, quindi li conduce da questa, che consegnerà quelli che si rivelano a tutti gli effetti antichi trattati. Una volta ritornati all'accampamento, Duncan celebra il rituale dell'Unione, che consiste nel far bere alle nuove reclute il sangue dei Prole Oscura: il protagonista è l’unico a sopravvivere e, da quel momento in poi, sarà considerato ufficialmente un Custode Grigio. In quanto tale, assieme ad Alistair, partecipa alla battaglia di Ostagar, che si risolve in una grande disfatta per le truppe fereldiane: Re Cailan muore e Theyrn Loghain decide di far ritirare le sue truppe e di non aiutare quelle del re, contravvenendo a quanto stabilito in precedenza. Il Custode e Alistair si salvano grazie all'intervento di Flemeth, che, trasformatasi in un enorme corvo, giunge alla torre di Ishal e li porta nella sua capanna nelle Selve Korkari. A questo punto, dopo che i due si riprendono, decidono di ripartire immediatamente: recuperati gli antichi documenti dei Custodi Grigi, vogliono chiedere più aiuto possibile per porre fine al Flagello. Flemeth decide di affidare Morrigan, ad Alistair e al Custode, affinché offra loro aiuto con le sue arti magiche. Gli alleati sono gli elfi dalish della Foresta di Brecilan, i nani di Orzammar, i maghi del Circolo del Ferelden e Arle Eamon, padre \"adottivo\" di Alistair. Una volta trovato l'appoggio di questi, a Denerim viene convocato l'Incontro dei Popoli, cui seguirà la battaglia finale con l'Arcidemone e i Prole Oscura. A seconda delle scelte effettuate, cambierà anche il finale del gioco: il proprio personaggio potrà sacrificarsi uccidendo l'Arcidemone, far sacrificare un altro Custode al suo posto o potrà accettare la proposta di Morrigan, con la quale sarà possibile evitare la morte del proprio personaggio o dei PNG vicini.",
	"Dragon Age 2 ha inizio nello stesso anno di Dragon Age: Origins e come il primo titolo, ha inizio nel Ferelden. Il protagonista è Hawke, un giovane che, assieme alla madre, al fratello e alla sorella, è in fuga da Lothering, il paese in cui viveva prima dell’invasione della Prole Oscura. Alla tumultuosa fuga dal villaggio, si unirà al gruppo anche Aveline, valente guerriera sopravvissuta alla battaglia di Ostagar, e il marito di quest'ultima, Ser Wesley. Il gruppo, attaccato da un Ogre, subisce la perdita sia di Ser Wesley che del fratello o della sorella di Hawke (dipende dalla classe scelta per il protagonista). A questo punto la situazione sembra farsi sempre più disperata, fino a quando non appare Flemeth, che trasformatasi in un drago, offre aiuto ai profughi, facendoli arrivare a Gwaren. Qui si imbarcano verso i Liberi Confini, verso la città di Kirkwall, dove ci sono alcuni parenti della madre di Hawke, Leandra Amell. Una volta giunti, scoprono l'amara verità: il fratello di Leandra, Gamlen, ha perduto tutti gli averi della nobile famiglia per saldare i debiti, quindi Hawke è costretto a lavorare per un anno con dei mercenari o con dei contrabbandieri, per rimborsare il denaro che gli viene anticipato per entrare in città. Una volta superato questo primo anno, Hawke incontra Varric, un nano di superficie che gli propone di diventare socio di suo fratello Barthrand, finanziando la sua spedizione nelle Vie Profonde. Dopo aver raccolto il denaro necessario e dopo aver ottenuto le mappe delle Vie Profonde grazie ad Anders, ormai fuggito dai Custodi Grigi, Hawke e il gruppo di avventurieri scende nelle antiche rovine naniche e, attraverso i proventi ottenuti, Hawke riesce a ristabilire il buon nome della famiglia e l'antica ricchezza. I Qunari nel frattempo sono riusciti a stabilirsi a Kirkwall, creando una situazione di forte tensione. Il Visconte della città decide di richiedere l'aiuto di Hawke per risolvere la questione con essi e l’Arishok spiega al protagonista di non avere intenzione di lasciare la città, almeno fino a quando non avrà ritrovato una reliquia che gli è stata sottratta; successivamente si scopre che questa gli è stata sottratta da uno dei compagni di Hawke, Isabela, la quale, dopo averla ritrovata, scappa con essa. A questo punto l'Arishok decide di attaccare l'intera Kirkwall e Hawke è costretto a intervenire per salvare la città, azione che gli permette di ricevere il titolo di Campione. Passati tre anni, a Kirkwall si fa strada un altro problema: lo scontro tra Maghi e Templari, dove le tensioni tra le due fazioni si fanno sempre più evidenti. I maghi ricorrono sempre più spesso alla Magia del Sangue per poter attaccare i Templari e al contempo i Templari stringono ancor di più la loro morsa nei confronti dei Maghi. Queste tensioni sfoceranno nel gesto estremo di Anders, che fa esplodere la Chiesa di Kirkwall con un esplosivo magico, aprendo ufficialmente il conflitto tra le due parti. Nel finale del gioco, Hawke deve decidere da che parte stare: alleandosi con i Maghi sarà costretto a lasciare Kirkwall, mentre, alleandosi con i Templari diventerà il nuovo Visconte della città.",
	"Dragon Age Inquisition inizia nel 9:41, con il Thedas nel caos più completo: la guerra tra Maghi e Templari è dilagata ormai in tutto il continente, lo scioglimento dei Circoli dei Magi ha causato enormi devastazioni e l'Orlais, la regione più potente, è messo in ginocchio da una guerra intestina tra l'Imperatrice Celene e il granduca Gaspard de Chalons, legittimo erede al trono. In questo momento di crisi, Cassandra Pentaghast, mano destra della Divina Justinia V fonda l'Inquisizione, l'antico braccio armato della Chiesa, dopodiché la Divina convoca un concilio al Tempio delle Sacre Ceneri tra Maghi e Templari. Questo si trasforma in una vera e propria tragedia: dal nulla compare un enorme varco in cielo che distrugge il Tempio con una potente esplosione, uccide i partecipanti al Concilio, e permette ai demoni dell'Oblio di giungere nel mondo reale. L’unico sopravvissuto al Concilio è il personaggio del giocatore, che ha perso la memoria e sulla mano si ritrova uno strano marchio che gli permette di chiudere gli squarci nell'Oblio; viene ritrovato da Cassandra e in un primo momento fatto prigioniero, in quanto sospettato di aver causato lui gli ultimi eventi, ma quando la Cercatrice scopre la funzione del Marchio, decide di arruolare il giocatore nell’Inquisizione, che dal momento avrà la sua base ad Haven, e che si occuperà di riportare la pace nel Thedas. A questo punto si può decidere se cercare l’aiuto di Maghi o Templari per chiudere il Varco, lo squarcio nell'Oblio sulle Montagne Gelide. Durante i festeggiamenti per la vittoria appena ottenuta, Haven viene attaccata da Corypheus, che rivela al protagonista che il suo Marchio è un’ancora che permette di entrare fisicamente nell’Oblio; tenta di sottrargliela, ma il protagonista riesce a lanciare un enorme masso con un trabucco e a causare una valanga, che distrugge l’esercito di Corypheus, mentre quest’ultimo fugge appena in tempo con il suo drago. Il protagonista vaga a lungo nella neve, fino a quando non viene fortunatamente ritrovato dai superstiti e, su consiglio di Solas, questi stabiliranno il campo base dell’Inquisizione nella fortezza di Skyhold, nominando il protagonista leader dell’organizzazione. L’Inquisitore, dopo aver risolto il problema delle sparizioni dei Custodi Grigi, cerca nuovi alleati nella lotta contro Corypheus: pone fine alla guerra civile orlaisiana, ottenendo anche l’appoggio di Morrigan, diventata nel frattempo Prima Incantatrice di Celene e, grazie a lei, scopre che Corypheus sta cercando di impossessarsi dell’Eluvian. L'Inquisitore, una volta giunto nelle Selve Arboree, viene a conoscenza del fatto che il nemico è in realtà alla ricerca del Pozzo del Dolore del Tempio di Mythal, di cui si dice che chiunque ne beva l’acqua possa attingere a tutti i segreti della magia e della storia elfica. Morrigan e l’Inquisitore giungeranno per primi al pozzo e uno dei due ne potrà bere l’acqua, vincolandosi a Mythal. Il protagonista scoprirà poi che l’unico modo per sconfiggere Corypheus è uccidere il suo drago; una volta sconfitto questo, Corypheus sfiderà l’Inquisitore, che lo sconfiggerà, esiliandolo nell’Oblio. L’Inquisizione può fare ritorno a Skyhold e festeggiare finalmente per la vittoria ottenuta."
];


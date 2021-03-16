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

function gestoreCerca () {
	try {
		var gioco = nodoElencoGiochi.value;
		rimuoviFigli(nodoTestoFinale);
		for (var i = 0; i < personaggi.length; i++) {
			if (personaggi[i].gioco == gioco) {
				creaDescrizione(i)
			}
		}
	} catch ( e ) {
		alert("gestoreCerca " + e);
	}
}

function rimuoviFigli (nodo) {
	while(nodo.childNodes.length > 0) {
		nodo.removeChild(nodo.firstChild);
	}
}

function aggiungiPrimaOpzione(nodoSelect, opzione) {
	var nodoOpzione = document.createElement("option");
	nodoOpzione.value = opzione;
	var nodoTesto = document.createTextNode(opzione);
	nodoOpzione.appendChild(nodoTesto);
	nodoSelect.insertBefore(nodoOpzione, nodoSelect.firstChild);
	nodoSelect.value = opzione;
}

function creaDescrizione(i){
	var nodoDiv = document.createElement("div");
	nodoDiv.setAttribute("class", "divPg");
	var nodoImg = document.createElement("img");
	nodoImg.setAttribute("src", personaggi[i].img);
	nodoImg.setAttribute("class", "immaginipg");
	var nodoParagrafoNome = document.createElement("p");
	nodoParagrafoNome.setAttribute("class", "nomepg");
	var nodoParagrafoCitazione = document.createElement("p");
	nodoParagrafoCitazione.setAttribute("class", "citazionepg");
	var nodoParagrafoDescrizione = document.createElement("p");
	nodoParagrafoDescrizione.setAttribute("class", "descrizionepg");
	var nodoTestoNome = document.createTextNode(personaggi[i].nome);
	var nodoTestoCitazione = document.createTextNode(personaggi[i].citazione);
	var nodoTestoDescrizione = document.createTextNode(personaggi[i].descrizione);
	nodoParagrafoNome.appendChild(nodoTestoNome);
	nodoParagrafoCitazione.appendChild(nodoTestoCitazione);
	nodoParagrafoDescrizione.appendChild(nodoTestoDescrizione);
	nodoDiv.appendChild(nodoImg);
	nodoDiv.appendChild(nodoParagrafoNome);
	nodoDiv.appendChild(nodoParagrafoCitazione);
	nodoDiv.appendChild(nodoParagrafoDescrizione);
	nodoTestoFinale.appendChild(nodoDiv);
}

function calcolaGiochi () {
	var elencoGiochi = {};
	for (var i = 0; i < personaggi.length; i++) {
		elencoGiochi[personaggi[i].gioco] = true;
	}
	return elencoGiochi;
}

function creaSelect (nodoSelect, opzioni) {
	rimuoviFigli(nodoSelect);
	for (var opzione in opzioni) {
		var nodoOpzione = document.createElement("option");
		nodoOpzione.value = opzione;
		var nodoTesto = document.createTextNode(opzione);
		nodoOpzione.appendChild(nodoTesto);
		nodoSelect.appendChild(nodoOpzione);
	}
}

var nodoMenu;
var nodoElencoGiochi;
var nodoTestoFinale;

function gestoreLoad () {
	try {
		nodoMenu = document.getElementById("menu");
		nodoElencoGiochi = document.getElementById("elenco_giochi");
		nodoTestoFinale = document.getElementById("testo");
		var giochi = calcolaGiochi();
		creaSelect(nodoElencoGiochi, giochi);
		aggiungiPrimaOpzione(nodoElencoGiochi, "Seleziona il gioco");
		nodoMenu.onclick = gestoreMenu;
		nodoElencoGiochi.onchange = gestoreCerca;
	} catch ( e ) {
		alert ("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;

var personaggi = [
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/alistair.jpg",
		nome: "Alistair",
		descrizione: "Alistair Theirin è uno dei primi compagni che il giocatore può ottenere (il primo, se come origine si sceglie l’umano nobile) e lo si incontra ad Ostagar, subito dopo aver giocato le origini del personaggio. Nato nel 9:10, è stato cresciuto da Arle Eamon, nonostante non fosse lui suo padre, fino a quando la moglie dell’Arle, Isolde, non ha deciso di farlo andare in monastero nel 9:20. Alistair verrà reclutato nei Custodi Grigi da Duncan, poco prima di completare il suo addestramento come Templare e, come recluta più giovane, sarà lui ad aiutare il giocatore a preparare il rituale dell’Unione. Approfondendo il rapporto con Alistair, il Custode può apprendere la specializzazione Templare. Il suo doppiatore è Steve Valentine.",
		citazione: "Ecco per cosa sono qui. Per portare scomode novità e commenti arguti."
	},
	{	gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/anders.jpg",
		nome: "Anders",
		descrizione: "Anders è un personaggio che appare nell’espansione Dragon Age: Origins – Awakening e in Dragon Age 2. Delle sue origini si sa davvero poco: è stato allevato in un piccolo villaggio del Ferelden e suo padre proveniva dall’Anderfels. Quando aveva dodici anni, diede accidentalmente fuoco a un granaio con la magia e suo padre decise, contro il volere della madre, di consegnarlo ai Templari, che lo portarono alla Torre del Circolo dei Maghi del Ferelden, dalla quale scapperà per sette volte. Il Custode lo incontra quando arriva alla Fortezza della Veglia, e qui, il mago fuggitivo lo aiuterà a salvare alcuni superstiti, tra cui il siniscalco Varrel. È doppiato da Adam Howden.",
		citazione: "Tutto ciò che voglio è una ragazza carina, un pasto decente e il diritto di lanciare fulmini contro gli stupidi."
	},
	{	
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/giustizia.png",
		nome: "Giustizia",
		descrizione: "È uno spirito dell’Oblio che simboleggia il concetto della Giustizia, che appare in Dragon Age: Origins – Awakening e che sarà poi fondamentale per gli eventi dei successivi capitoli. Nel gioco è intrappolato all’interno del corpo di Kristoff.",
		citazione: "Che cos'altro sono io, se non un cercatore di giustizia?"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/leliana.jpg",
		nome: "Leliana",
		descrizione: "Leliana apparentemente è una giovane donna che, pur non avendo preso i voti, condivide lo stile di vita e i dogmi di coloro che hanno deciso di seguire la Chiesa. Il Custode la incontra in una taverna a Lothering, dove inizierà a combatterà non appena scoppierà una rissa. A questo punto la giovane si mostra desiderosa di aiutare il protagonista a porre fine al Flagello perché così le avrebbe detto una visione del Creatore. Si scoprirà poi che Leliana è in realtà un bardo (e una spia) proveniente da Orlais, che ha sposato la causa della Chiesa per sfuggire da Marjolane, una spia di Orlais. È doppiata da Corinne Kempa.",
		citazione: "Era la Flemeth della leggenda? Flemeth la Divoratrice di uomini? Flemeth, Toccata dai Demoni? Colei che risiede nelle Nebbie?"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/loghain.png",
		nome: "Loghain",
		descrizione: "Loghain Mac Tir è stato per anni il migliore amico di Re Maric, re del Ferelden dal 9:02 al 9:25, con il quale, una trentina d’anni prima dell’inizio degli eventi di Dragon Age: Origins, riuscì a cacciare gli orlaisiani dal Ferelden. Dopo la scomparsa di Re Maric, Loghain si è occupato della difesa del Ferelden ma, dopo la morte di re Cailan nella disfatta di Ostagar, dichiarerà i Custodi Grigi dei traditori, mettendo anche un assassino sulle tracce del protagonista. È doppiato da Simon Templeman.",
		citazione: "Traditori! Chi di voi si è opposto all'imperatore orlesiano quando le sue truppe distruggevano i vostri campi e stupravano le vostre mogli?!"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/mabari.jpg",
		nome: "Mabari",
		descrizione: "Il Mabari è un mastino da guerra tipico del Ferelden, che può essere reclutato nel proprio party nelle fasi iniziali del gioco.",
		citazione: "*ulula*"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/morrigan.jpg",
		nome: "Morrigan",
		descrizione: "Morrigan è la figlia di Flemeth, la temuta Strega delle Selve, ed è uno dei personaggi cardine della saga. Il Custode la incontra per la prima volta nelle Selve Korkari, quando si trova alla ricerca dei materiali necessari per affrontare l'Unione, ma si unirà al party solo dopo la disfatta di Ostagar. Morrigan conosce e ha padronanza della magia Mutaforma, che le permette di trasformarsi in vari animali. In questo primo capitolo è una persona estremamente cinica, che non ama il modo in cui normalmente si comportano le donne, tanto che lei stessa preferisce non essere giudicata in quanto donna ma per le sue abilità. La Strega delle Selve è doppiata da Claudia Black.",
		citazione: "A quanto pare, la gente sembra convenire che un Flagello sia il momento perfetto per iniziare a macellarsi a vicenda. Davvero meraviglioso... "
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/nathaniel.jpg",
		nome: "Nathaniel",
		descrizione: "Nathaniel Howe è il figlio maggiore di Rendon Howe, Arle di Amaranthine. Appare in Dragon Age: Origins - Awakening, dove può essere reclutato all'interno del party. Egli, dopo essere ritornato nel Ferelden alla fine del Flagello, scopre che il Custode ha ucciso suo padre e si è impossessato dei territori della sua famiglia per ricostruire l'ordine dei Custodi Grigi, quindi ritorna alla Fortezza della Veglia per cercare di rubare alcuni cimeli di famiglia, ma qui viene scoperto e fatto prigioniero. Il giocatore può decidere se lasciarlo in vita o condannarlo a morte.",
		citazione: "Mio padre spesso si dimentica che quella \"nobiltà\" ha un altro significato."
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/oghren.jpg",
		nome: "Oghren",
		descrizione: "Oghren è un nano che il Custode incontra durante la spedizione nella città di Orzammar. Qui, si unirà al party per esplorare le Vie Profonde per ritrovare sua moglie Branka, partita a sua volta alla ricerca dell'Incudine del Vuoto, un antico artefatto creato per forgiare Golem. Dopo la spedizione nelle Vie Profonde, Oghren seguirà il Custode anche in superficie, per sconfiggere minaccia che si sta per abbattere sul Ferelden. È un grande amante della birra. Lo si ritrova anche in Awakening, dove diventerà un Custode Grigio.",
		citazione: "Eccoci qui, Custode...\"Quando il sangue della battaglia la pietra avrà tinto, lasciate che gli eroi prevalgano, contro il briccone estinto\". In quanto briccone, ti saluto dannazione. Mostriamogli i nostri cuori, e poi mostriamogli i loro! "
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/shale.jpg",
		nome: "Shale",
		descrizione: "È un Golem presente nel DLC Il prigioniero di pietra; si trova a Honnleath, immobile, e verrà liberata dal Custode, unendosi poi al suo gruppo.",
		citazione: "Se i Prole Oscura sono un male, devono essere assolutamente distrutti, è vero. Anche se non sono così malvagi quanto gli uccelli...dannati mostri coperti di piume!"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/sigrun.jpg",
		nome: "Sigrun",
		descrizione: "È una nana senza casta appartenente alla Legione dei Morti, un ordine di guerrieri che si occupa di sterminare la Prole Oscura nelle Vie Profonde. Il giocatore può decidere se farla andare nelle Vie Profonde o se farla unire ai Custodi Grigi. Appare in Dragon Age Origins: Awakening.",
		citazione: "Nella Legione, la morte incombe costantemente su di noi, come...come uno sporco zio. Qui, la morte, sembra distante."
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/sten.jpg",
		nome: "Sten",
		descrizione: "È un Qunari giunto nel Ferelden per ordine dell'Arishok, che gli ha chiesto di capire cosa fosse il Flagello. Sten viene ben presto condannato a Lothering per aver ucciso dei contadini che gli avevano salvato la vita e il Custode può intervenire per salvarlo e fargli trovare la redenzione combattendo la Prole Oscura. È doppiato da Mark Hildreth.",
		citazione: "Nessuno ha un posto qui. I vostri agricoltori vogliono essere mercanti. I mercanti sognano di diventare nobili e i nobili di diventare guerrieri. Nessuno è contento di essere ciò che è."
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/velanna.png",
		nome: "Velanna",
		descrizione: "È un'elfa dalish fortemente ostile verso gli umani per i trascorsi tra la sua razza e gli umani. In seguito alla scomparsa di sua sorella e allo sterminio del suo clan, inizia a distruggere le carovane di passaggio nel Bosco del Cammino, convinta che la colpa sia degli umani. Il Custode può ucciderla o rivelarle la verità, ovvero che il suo clan è stato sterminato dai Prole Oscura. Se verrà lasciata in vita si unirà ai Custodi Grigi.",
		citazione: "Gli individui al potere prima o poi ne abusano. Anche coloro con buone intenzioni"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/zevran.jpg",
		nome: "Zevran",
		descrizione: "Zevran Arainai è un elfo dalish da parte di madre ed è un membro dei Corvi di Antiva, potente gilda di assassini che ha influenza su tutta la regione di Antiva e i cui assassini sono richiesti da diversi potenti del Thedas. Zevran viene assoldato per uccidere il Custode, ma, questo, dopo averlo sconfitto in un agguato potrà decidere se ucciderlo o accettare la sua proposta di lasciare da parte le ostilità e farlo unire al gruppo. È doppiato da Jon Curry e ha un piccolo cameo anche in Dragon Age 2. Da lui si può apprendere la specializzazione Assassino.",
		citazione: "Che parola interessante. \"Innocente\". Quanti uomini conosci che possono davvero definirsi innocenti?"
	},
	{
		gioco: "Dragon Age: Origins",
		img: "immagini/icone/origins/wynne.png",
		nome: "Wynne",
		descrizione: "Wynne è un'anziana maga del Circolo che partecipa alla battaglia di Ostagar, salvandosi. Il giocatore la ritrova durante la missione per liberare la Torre del Circolo del Ferelden dagli abomini, momento in cui la maga si unirà al gruppo. È doppiata da Susan Boyd Joyce.",
		citazione: "Non sono il tipo di persona che lascia qualcosa di non finito. Andrò fino in fondo, lo prometto."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/anders.png",
		nome: "Anders",
		descrizione: "Anders in questo secondo capitolo è un mago eretico ricercato dalla Chiesa che ha accettato di ospitare dentro di sé Giustizia, spirito dell'Oblio presente già in Awakening. Egli, dopo aver abbandonato i Custodi Grigi, ha trovato rifugio a Kirkwall, nei Liberi Confini, dove si occupa di dare assistenza ai malati della Città Oscura con la sua magia. Hawke viene indirizzato ad andare da lui per trovare delle mappe delle Vie Profonde, che lui, in quanto Custode Grigio, possiede. Sarà determinante nel finale del gioco e per gli eventi di Dragon Age: Inquisition.",
		citazione: "Io sono la causa dei Maghi."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/hawke.png",
		nome: "Hawke",
		descrizione: "Hawke è il protagonista di Dragon Age 2 ed è controllato dal giocatore, che può decidere sesso, aspetto e/o nome; di default il nome per un Hawke di sesso maschile è Garrett, Marian altrimenti. Hawke è un umano (non si può cambiare la razza in Dragon Age 2), che durante il Quinto Flagello si ritrova a scappare da Lothering con la madre e il fratello o sorella, per sfuggire agli attacchi della Prole Oscura. I profughi giungono a Kirkwall, dove ci dovrebbero essere i parenti della madre di Hawke, Leandra, ma una volta arrivati, scoprono che Gamlen, il fratello di Leandra, ha sperperato tutti i beni della famiglia Amell, quindi Hawke cercherà in tutti i modi di farsi un nome in città e guadagnare delle ricchezze per ristabilire l'antica nobiltà della famiglia. Da qui inizierà quindi la storia di quel profugo che diventerà il Campione della città di Kirkwall. Garrett Hawke è doppiato da Nicholas Boulton, Marian Hawke è invece doppiata da Jo Wyatt.",
		citazione: "Non si preoccupi. 'Aiutare le persone' e 'uccidere le persone' sono le cose che mi riescono meglio."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/aveline.jpg",
		nome: "Aveline",
		descrizione: "Aveline Vallen è una guerriera umana che Hawke incontra durante la fuga da Lothering e che decide di unirsi al gruppo dopo la morte di suo marito, Ser Wesley. Una volta giunta a Kirkwall entra nelle Guardie Cittadine, facendosi strada fra i loro ranghi. C'è anche la possibilità che Aveline si sposi con Ser Donnic, se viene aiutata però da Hawke. È doppiata da Joanna Roth.",
		citazione: "Proteggi quello che conta con tutto ciò che hai, o non avrai più nulla e te lo sarai meritato."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/bethany.jpg",
		nome: "Bethany",
		descrizione: "È la sorella minore di Hawke, nata nel 9:11. È una maga eretica, che ha ricevuto un addestramento nell'uso della magia da suo padre Malcom. Se Hawke è un mago, Bethany morirà all'inizio del gioco a causa di un Ogre, se Hawke è un guerriero o un ladro sarà invece Carver a morire.",
		citazione: "Gli altri hanno sempre affrontato dei rischi per farmi essere libera"
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/carver.jpg",
		nome: "Carver",
		descrizione: "Carver Hawke è il gemello di Bathany. Dopo la morte di suo padre Malcom, prende parte alla battaglia di Ostagar, sotto il comando del Capitano Varel. Viene allontanato dalla battaglia dopo il tradimento di Loghain; Carver a questo punto ritornerà dalla famiglia e fuggirà con essa alla volta di Kirkwall. Se Hawke è un guerriero o un ladro morirà andando alla carica contro un Ogre per difendere sua madre.",
		citazione: "Sembra che sia ancora una volta in debito con te...e oscurato da te."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/fenris.jpg",
		nome: "Fenris",
		descrizione: "Fenris è un elfo guerriero fuggito dalla schiavitù impostagli dal suo vecchio padrone, magister Danarius. Durante la sua schiavitù è stato sottoposto ad un esperimento di Danarius, con il quale gli ha inciso nella pelle dei tatuaggi infusi di Lyrium che ne hanno incrementato in modo innaturale le capacità in combattimento, rendendolo capace di attraversare gli oggetti solidi, ma facendogli perdere la memoria. Fuggito a Kirkwall, prova un profondo rancore nei confronti di Danarius e, più in generale, nei confronti dei maghi: non sono rari infatti, i battibecchi con Anders proprio su questo argomento. Fenris inoltre, in quanto ex-schiavo, si prodiga spesso per aiutare le persone che si trovano nella sua precedente condizione. È doppiato da Gideon Emery.",
		citazione: "\"Na via lerno victoria\". \"Solo i vivi conoscono la vittoria\". Combatti bene."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/isabela.jpg",
		nome: "Isabela",
		descrizione: "È un personaggio presente già in Dragon Age: Origins e la si poteva incontrare nel bordello di Denerim, 'La Perla'. Il suo vero nome è Naishe, e proviene dalla regione di Rivain. Divenuta una pirata, si autoproclamò la 'Regina dei mari orientali' e giunse a Kirkwall per fuggire dal mercenario Castillion. È abile sia con i pugnali che con le parole, e non va molto d'accordo con tutto ciò che ha a che fare con la legge.",
		citazione: "I nostri errori ci rendono ciò che siamo."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/merrill.jpg",
		nome: "Merrill",
		descrizione: "Merrill è un'elfa dalish che ha abbandonato il suo clan in seguito agli screzi con la guardiana Marethari, che non approvava le sue ricerche sulla Magia del Sangue.",
		citazione: "Cercherò di non colpire nessuno. Dalla nostra parte, intendo. Ma sto chiacchierando di nuovo. Andiamo."
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/sebastian.jpg",
		nome: "Sebastian",
		descrizione: "Sebastian Vael è un personaggio disponibile con il DLC 'Il principe esiliato' ed è l'erede al trono di Porto Brullo. Fin da piccolo è stato affidato alle cure della Chiesa, per cui prova una profonda fiducia. Non è in buoni rapporti con Anders, ma non è troppo insofferente verso i maghi.",
		citazione: "Chi serve meglio il Creatore: un confratello, o un principe che influenza un'intera città?"
	},
	{
		gioco: "Dragon Age 2",
		img: "immagini/icone/da2/varric.jpg",
		nome: "Varric",
		descrizione: "Varric Tethras è un nano che Hawke incontra un anno dopo dal suo arrivo a Kirkwall, che offre al protagonista di fare fortuna attraverso il finanziamento di una spedizione nelle Vie Profonde organizzata da suo fratello Barthrand. È anche un famoso autore di romanzi del Thedas e il suo bestseller è 'Hard in Hightown', pubblicato nel 9:33 e venduto in cinque nazioni del Thedas. Varric è un personaggio estremamente amichevole nei confronti degli altri ed è lui che si occupa di diffondere le storie - con qualche abbellimento - sulle imprese di Hawke. Combatte con una balestra, a cui ha dato il nome 'Bianca'. È doppiato da Brian Bloom.",
		citazione: "Le storie hanno un loro potere... In fondo, la storia è fatta di questo, delle storie migliori. Quelle che durano. Tanto vale che siano le mie."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/bull.jpg",
		nome: "Iron Bull",
		descrizione: "Il Toro di Ferro è un guerriero Qunari a capo della compagnia di mercenari nota come \"Furie Taurine\" e agente di Ben-Hassrath, dei qunari con incarichi di spionaggio e ordine pubblico. Può essere incontrato nella Costa Tempestosa, nel Ferelden, dove ammetterà di volersi unire all'Inquisizione e di lavorare per Ben-Hassrath, ai quali dovrà continuare a mandare rapporti sul Varco e sull'Inquisizione.",
		citazione: "È IL Toro di Ferro. Mi piace che ci sia l'articolo prima. Sembra che suoni come se non fossi neanche una persona, solo un'arma senza una mente, un'attuazione della distruzione... Questo va davvero bene per me."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/cassandra.jpg",
		nome: "Cassandra",
		descrizione: "Cassandra Allegra Portia Calogera Filomena Pentaghast è una Cercatrice della Chiesa e mano destra della Divina Justinia V, proveniente da Nevarra. Appare già in Dragon Age 2, quando cattura Varric per farsi raccontare la storia del Campione di Kirkwall, mentre in Dragon Age: Inquisition si trova a capo dell'Inquisizione assieme a Leliana, Cullen e Josephine. Crede profondamente nella Chiesa e in tutte quelle istituzioni create da essa (come i Circoli dei Maghi e l'Ordine dei Templari). Cassandra è un personaggio molto forte, con un carattere deciso e autoritario: la sua doppiatrice, Miranda Raison, la definisce \"non mascolina, [...] è una ragazza che non è molto femminile\"",
		citazione: "Un giorno potrebbero scrivere su di me riferendosi a me come una traditrice, una folle. E forse potrebbero avere ragione."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/cole.jpg",
		nome: "Cole",
		descrizione: "Cole è uno spirito sospeso tra il mondo fisico e quello immateriale dell'Oblio. Ben poche persone riescono a notare la sua esistenza e quelle che si accorgono di lui, ben presto se ne dimenticano.",
		citazione: "Non importa che non si ricorderanno di me. Quello che importa è che io ho aiutato."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/josie.jpg",
		nome: "Josephine",
		descrizione: "Josephine Cherette Montilyet è l'ambasciatrice dell'Inquisizione. È erede della nobile famiglia Montilyet di Antiva e ha lavorato per anni come capo ambasciatore verso Orlais, in quanto familiare con la politica orlaisiana. Entra a far parte dell'Inquisizione grazie a Leliana, che la conosce da anni.",
		citazione: "Forse possiamo provare a risolvere questa faccenda senza uccidere nessuno? Sapete, tanto per cambiare."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/leliana.jpg",
		nome: "Leliana",
		descrizione: "In Dragon Age: Inquisition, Leliana è il braccio sinistro della Divina. Dopo aver catturato l'unico superstite al concilio convocato dalla Divina Justinia V (il futuro inquisitore), lo interroga assieme a Cassandra. Dopo la fondazione dell'Inquisizione diventa il capospia: è suo compito informare l'Inquisitore riguardo gli spostamenti di Corypheus.", 
		citazione: "Nonostante l'oscurità si avvicini, sono protetta dalla fiamma. Andraste, guidami. Creatore, conducimi al tuo fianco."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/morrigan.jpg",
		nome: "Morrigan",
		descrizione: "Morrigan in questo capitolo la si incontra al Palazzo d'Inverno, in Orlais, dove si scopre che è diventata prima incantatrice dell'Imperatrice Celene. In seguito, si unirà ai ranghi dell'Inquisizione, per sconfiggere Corypheus.",
		citazione: "La magia degli antichi deve essere conservata. Non importa quanto possa essere temuta."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/solas.jpg",
		nome: "Solas",
		descrizione: "Solas è un elfo e un mago eretico, nato in un piccolo villaggio, che ha vissuto gran parte della sua vita nel deserto, imparando da solo a padroneggiare la magia, in particolare egli è esperto dell'Oblio, il luogo cui fanno ritorno le anime quando il loro possessore sogna. È lui a capire che l'Ancora posseduta dall'Inquisitore può essere usata per chiudere i Varchi nell'Oblio. Il suo nome in elfico significa \"orgoglio\". È doppiato da Gareth David-Lloyd",
		citazione: "Ogni guerra ha i suoi eroi. Sono solo curioso di sapere quale tipo sarai."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/vivienne.jpg",
		nome: "Vivienne",
		descrizione: "Vivienne è una maga orlaisiana, incantatrice personale dell'Imperatrice Celene e sua consigliera. Si unisce all'Inquisizione perché vede in essa l'unico modo per potersi effettivamente opporre a Corypheus.",
		citazione: "Per coloro a cui interessa sopravvivere, il sentimentalismo non è un'opzione."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/blackwall.png",
		nome: "Blackwall",
		descrizione: "Blackwall si presenta come un membro dei Custodi Grigi dei Liberi Confini. Egli sarebbe stato reclutato nel 9:17, ed è stato uno dei pochi uomini reclutati ad averlo fatto seguendo la propria volontà. Egli è orgoglioso dei valori dell'Ordine e, durante il Flagello, è stato profondamente avverso nei confronti di Teyrn Loghain e delle sue decisioni politiche. L'Inquisitore può decidere di reclutare o meno Blackwall in una missione secondaria nelle Terre Centrali.",
		citazione: "Tu sei chi scegli di seguire. Qualcuno me lo ha detto in passato. Mi ci sono voluti anni per capire ciò che intendesse davvero."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/cullen.png",
		nome: "Cullen",
		descrizione: "Cullen Stanton Rutherford è nato nel villaggio di Honnleath, nel Ferelden. Fin da piccolo ha manifestato interesse nel diventare un Templare e, all'età di tredici anni, inizia a ricevere l'addestramento, distinguendosi tra le altre reclute; a diciotto anni pronuncia il giuramento di mettere la sua vita al servizio del Creatore. Appare in tutti e tre i giochi: in Origins è uno dei Templari presenti al Circolo del Ferelden, con il compito di uccidere i maghi che non riescono a sopravvivere al Tormento, mentre in Dragon Age 2 è il secondo in comando di Meredith. È in Dragon Age: Inquisition, però, che Cullen assume un ruolo più importante, diventando il comandante del braccio armato dell'Inquisizione.",
		citazione: "Nessuno ascolta mai qualcosa, almeno fino a quando non è troppo tardi."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/dorian.png",
		nome: "Dorian",
		descrizione: "Dorian Pavus è un mago proveniente dall’Impero Tevinter, appartenente alla prestigiosa Casata Pavus di Qarinus. Dorian, oltre ad essere un potente mago, è estremamente intelligente e carismatico, qualità che, nel Tevinter, unite all’importanza della sua famiglia, gli avrebbero potuto assicurare una veloce ascesa nella magocrazia imperiale. Dorian però ha deciso di abbandonare, venendo ostracizzato, la sua terra natale, opponendosi con fermezza e orgoglio a tutti quei valori per cui il Tevinter è conosciuto. Ama giocare a scacchi e questo lo si può vedere in una cut-scene in cui gioca con Cullen. La sua specializzazione è quella di \"necromante\". È doppiato da Ramon Tikaram. ",
		citazione: "Vivere in una menzogna...marcisce dentro di te, come il veleno. Devi combattere per ciò che si trova nel tuo cuore."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/sera.png",
		nome: "Sera",
		descrizione: "Sera è un'elfa reclutabile durante la missione \"Un'amica di Jenny la Rossa\". Impulsiva, non ci pensa due volte prima di attaccare un nemico o dire quello che pensa, non preoccupandosi nemmeno di essere troppo volgare.",
		citazione: "Il varco in cielo non ha dato inizio alla loro guerra. Le persone stupide l'hanno fatto."
	},
	{
		gioco: "Dragon Age: Inquisition",
		img: "immagini/icone/dai/varric.jpg",
		nome: "Varric",
		descrizione: "Varric, dopo gli eventi di Dragon Age 2, viene portato al Tempio delle Sacre Ceneri da Cassandra, per fornire delle informazioni su Hawke. Decide di rimanere anche dopo l'esplosione al Tempio, assistendo le forze della Chiesa e unendosi all'Inquisizione, accompagnandosi con la sua fida balestra, Bianca.",
		citazione: "Gli eroi sono ovunque. L'ho visto. Ma un varco nel cielo? Quello va oltre gli eroi. Avremo bisogno di un miracolo."
	}
];

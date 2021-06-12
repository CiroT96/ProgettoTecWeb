import pymongo
# Connessione a MongoDB
connessione = pymongo.MongoClient("mongodb://localhost:27017/")

# creazione nuovo database domande
newDb= connessione["DBdomande"]
# creazione della collezione domande
newCollection= newDb["QUESTIONS"]

newCollection.delete_many({})

# elenchi con lista di dizionari che rappresenta le domande con le relative risposte
question1 = [{"Una funzione che richiama se stessa è:": "Ricorsiva"},
       {"Una funzione che richiama se stessa è:": "Iterativa"},
       {"Una funzione che richiama se stessa è:": "Ridondante"}]
# inserimento domanda-risposta
insert1= newCollection.insert_many(question1)

question2 = [{"Come si può definire una variabile oggetto?": "Una variabile contenente un riferimento ad un oggetto"},
       {"Come si può definire una variabile oggetto?": "Una variabile contenente il nome di un oggetto"},
       {"Come si può definire una variabile oggetto?": "Una variabile contenente il valore della proprietà di default di un oggetto"}]
# inserimento domanda-risposta
insert2= newCollection.insert_many(question2)

question3 = [{"In ambito di linguaggi di programmazione, l'operazione chiamata compilazione ha lo scopo di:": "Generare dei codici in linguaggio macchina"},
       {"In ambito di linguaggi di programmazione, l'operazione chiamata compilazione ha lo scopo di:": "Eseguire le istruzioni del programma in questione"},
       {"In ambito di linguaggi di programmazione, l'operazione chiamata compilazione ha lo scopo di:": "Generare dei codici in un linguaggio chiamato C-Language"}]
# inserimento domanda-risposta
insert3= newCollection.insert_many(question3)

question4 = [{"Come si definisce la virgola mobile?": "Un formato numerico in cui i numeri sono memorizzati in due parti, dette Mantissa e Esponente"},
       {"Come si definisce la virgola mobile?": "Un formato numerico utilizzato per memorizzare numeri molto piccoli"},
       {"Come si definisce la virgola mobile?": "La parte decimale eventualmente presente dopo una divisione tra due numeri"}]
# inserimento domanda-risposta
insert4= newCollection.insert_many(question4)

question5 = [{"Cosa si intende con la parola polimorfismo riferita ad un linguaggio di programmazione?": "Nessuna delle precedenti"},
       {"Cosa si intende con la parola polimorfismo riferita ad un linguaggio di programmazione?": "La possibilità di creare dei codici riutilizzabili da svariati linguaggi"},
       {"Cosa si intende con la parola polimorfismo riferita ad un linguaggio di programmazione?": "La possibilità di utilizzare molteplici nomi per definire un oggetto"}]
# inserimento domanda-risposta
insert5= newCollection.insert_many(question5)

question6 = [{"In Java come si istanzia un oggetto?": "NOME_CLASSE a=new NOME_COSTRUTTORE()"},
       {"In Java come si istanzia un oggetto?": "NOME_CLASSE a"},
       {"In Java come si istanzia un oggetto?": "new NOME_CLASSE"}]
# inserimento domanda-risposta
insert6= newCollection.insert_many(question6)

question7 = [{"In ambito di linguaggi di programmazione, come si definisce una procedura?": "Una serie di istruzioni che vengono richiamate da un programma ogni volta che è necessario"},
       {"In ambito di linguaggi di programmazione, come si definisce una procedura?": "La maniera con cui un dato problema viene analizzato e risolto attraverso un programma"},
       {"In ambito di linguaggi di programmazione, come si definisce una procedura?": "Una libreria contenente i codici necessari a stabilire una connessione con una base dati"}]
# inserimento domanda-risposta
insert7= newCollection.insert_many(question7)

question8 = [{"Quale tipo di associazione, o Binding, origina una esecuzione più rapida dei codici?": "Anticipata(Early)"},
       {"Quale tipo di associazione, o Binding, origina una esecuzione più rapida dei codici?": "Tardiva(Late)"},
       {"Quale tipo di associazione, o Binding, origina una esecuzione più rapida dei codici?": "Non c'è differenza tra le due modalità"}]
# inserimento domanda-risposta
insert8= newCollection.insert_many(question8)

question9 = [{"Nei linguaggi di programmazione, un array si definisce come:": "Una matrice di valori richiamabili mediante indici"},
       {"Nei linguaggi di programmazione, un array si definisce come:": "Una matrice bidimensionale"},
       {"Nei linguaggi di programmazione, un array si definisce come:": "Una matrice monodimensionale contenente dati numerici"}]
# inserimento domanda-risposta
insert9= newCollection.insert_many(question9)

question10 = [{"Qual è la differenza tra '=' e '==' ?": "'=' è un operatore di assegnazione mentre '==' è un operatore di confronto"},
       {"Qual è la differenza tra '=' e '==' ?": "'==' è un operatore di assegnazione mentre '=' è un operatore di confronto"},
       {"Qual è la differenza tra '=' e '==' ?": "Non c'è differenza"}]
# inserimento domanda-risposta
insert10= newCollection.insert_many(question10)

question11 = [{"In C cosa sono gli operatori '|', '&', '^', '~' ?": "Operatori bitwise"},
       {"In C cosa sono gli operatori '|', '&', '^', '~' ?": "Operatori logici"},
       {"In C cosa sono gli operatori '|', '&', '^', '~' ?": "Operatori aritmetici"}]
# inserimento domanda-risposta
insert11= newCollection.insert_many(question11)

question12 = [{"Come si definisce una cosiddetta 'Collection' in un linguaggio di programmazione ?": "Un oggetto contenente un gruppo di oggetti correlati tra loro"},
       {"Come si definisce una cosiddetta 'Collection' in un linguaggio di programmazione ?": "Un array contenete dei dati di tipo numerico"},
       {"Come si definisce una cosiddetta 'Collection' in un linguaggio di programmazione ?": "E' sinonimo di costante"}]
# inserimento domanda-risposta
insert12= newCollection.insert_many(question12)

question13 = [{"In ambito della programmazione Object-Oriented, cos'è un oggetto ?": "Un'istanza di una classe"},
       {"In ambito della programmazione Object-Oriented, cos'è un oggetto ?": "Un insieme di codici relativi ad una gerarchia"},
       {"In ambito della programmazione Object-Oriented, cos'è un oggetto ?": "Un qualunque grafico stampato a video"}]
# inserimento domanda-risposta
insert13= newCollection.insert_many(question13)

question14 = [{"Qual è la differenza tra linguaggi di scripting Client-Side e linguaggi di programmazione ?": "Il codice creato con il primo viene generalmente interpretato in un Browser"},
       {"Qual è la differenza tra linguaggi di scripting Client-Side e linguaggi di programmazione ?": "Il codice creato con il primo viene generalmente compilato da un Browser"},
       {"Qual è la differenza tra linguaggi di scripting Client-Side e linguaggi di programmazione ?": "Nessuna, i termini sono sinonimi"}]
# inserimento domanda-risposta
insert14= newCollection.insert_many(question14)

question15 = [{"Qual è la differenza tra variabile Globale e variabile Locale ?": "Una variabile Globale è visibile ovunque nel programma mentre una Locale no"},
       {"Qual è la differenza tra variabile Globale e variabile Locale ?": "Differiscono solo per il diverso punto in cui vengono dichiarate nel sorgente"},
       {"Qual è la differenza tra variabile Globale e variabile Locale ?": "Una variabile Globale può essere vista da tutti gli utenti in rete"}]
# inserimento domanda-risposta
insert15= newCollection.insert_many(question15)

question16 = [{"La programmazione 'TOP-DOWN' è una tecnica di programmazione in cui:": "Si scrive prima il corpo principale del programma e poi le varie routine componenti"},
       {"La programmazione 'TOP-DOWN' è una tecnica di programmazione in cui:": "Si scrivono prima le varie routine e poi a partire da queste si sviluppa il corpo principale"},
       {"La programmazione 'TOP-DOWN' è una tecnica di programmazione in cui:": "Il progetto è suddiviso in unità autonome che poi saranno incorporate nel programma vero e proprio"}]
# inserimento domanda-risposta
insert16= newCollection.insert_many(question16)

question17 = [{"'(int i=0; i<MAX_LEN; i++)' data questa sintassi, quale parola chiave bisogna mettere prima della parentesi tonda '(' ?": "for"},
       {"'(int i=0; i<MAX_LEN; i++)' data questa sintassi, quale parola chiave bisogna mettere prima della parentesi tonda '(' ?": "while"},
       {"'(int i=0; i<MAX_LEN; i++)' data questa sintassi, quale parola chiave bisogna mettere prima della parentesi tonda '(' ?": "if"}]
# inserimento domanda-risposta
insert17= newCollection.insert_many(question17)

question18 = [{"In C un tipo char da quanti byte è rappresentato ?": "1"},
       {"In C un tipo char da quanti byte è rappresentato ?": "2"},
       {"In C un tipo char da quanti byte è rappresentato ?": "4"}]
# inserimento domanda-risposta
insert18= newCollection.insert_many(question18)

question19 = [{"In C un tipo short da quanti byte è rappresentato ?": "2"},
       {"In C un tipo short da quanti byte è rappresentato ?": "4"},
       {"In C un tipo short da quanti byte è rappresentato ?": "1"}]
# inserimento domanda-risposta
insert19= newCollection.insert_many(question19)

question20 = [{"Che tipo di programmazione adotta il C++ ?": "Programmazione Object-Oriented"},
       {"Che tipo di programmazione adotta il C++ ?": "Programmazione procedurale"},
       {"Che tipo di programmazione adotta il C++ ?": "Programmazione funzionale"}]
# inserimento domanda-risposta
insert20= newCollection.insert_many(question20)

for collection in newCollection.find():
       print(collection)
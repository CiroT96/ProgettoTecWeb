import pymongo
# Connessione a MongoDB
connessione = pymongo.MongoClient("mongodb://localhost:27017/")

# creazione nuovo database della classifica mondiale
newDb = connessione["DBclassificaMondiale"]
# creazione della collezione
newCollection = newDb["CLASSIFICA MONDIALE"]

newCollection.delete_many({})

# Serie di dizionari che rappresentano un dato utente e il suo punteggio

utenti = [{"_id": 1, "name": "Alessandro", "score": "100"},
          {"_id": 2, "name": "Ciro", "score": "80"},
          {"_id": 3, "name": "Mauro", "score": "60"},
          {"_id": 4, "name": "Ernesto", "score": "40"},
          {"_id": 5, "name": "Alice", "score": "20"},
          {"_id": 6, "name": "Alessandra", "score": "10"}]
insert = newCollection.insert_many(utenti)


for item in newCollection.find():
    print(item)
print("---------------------------------------------------------------------------------------------------------------")

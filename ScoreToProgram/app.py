from flask import Flask, render_template
from flask_pymongo import PyMongo
app = Flask(__name__)
app.config["DBNAME"] = 'DBclassificaMondiale'
app.config["MONGO_URI"] = "mongodb://localhost:27017/DBclassificaMondiale"
mongo = PyMongo(app)
@app.route('/')
def main():
    query = mongo.db.newCollection
    result_user = query.find_one({}, {"_id": 0, 'name': "Alessandro"})
    result_score = query.find_one({}, {"_id": 0, 'score': "100"})
    result_user1 = query.find_one({}, {"_id": 0, 'name': "Ciro"})
    result_score1 = query.find_one({}, {"_id": 0, 'score': "80"})
    result_user2 = query.find_one({}, {"_id": 0, 'name': "Mauro"})
    result_score2 = query.find_one({}, {"_id": 0, 'score': "60"})
    result_user3 = query.find_one({}, {"_id": 0, 'name': "Ernesto"})
    result_score3 = query.find_one({}, {"_id": 0, 'score': "40"})
    result_user4 = query.find_one({}, {"_id": 0, 'name': "Alice"})
    result_score4 = query.find_one({}, {"_id": 0, 'score': "20"})
    result_user5 = query.find_one({}, {"_id": 0, 'name': "Alessandra"})
    result_score5 = query.find_one({}, {"_id": 0, 'score': "10"})

    return render_template('ClassificheMondiali.html', site='site',
                           nome=result_user, score=result_score,
                           nome1=result_user1, score1=result_score1,
                           nome2=result_user2, score2=result_score2,
                           nome3=result_user3, score3=result_score3,
                           nome4=result_user4, score4=result_score4,
                           nome5=result_user5, score5=result_score5)
if __name__ == "__main__" :
    app.debug = True
    app.run()



from flask import Flask, Response
from flask_cors import CORS
import webServiceStream
import DAO
from RandomDealData import *

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return webServiceStream.index()

@app.route('/testservice')
def testservice():
    return webServiceStream.testservice()

@app.route('/streamTest')
def stream():
    return webServiceStream.stream()

@app.route('/streamTest/sse')
def sse_stream():
    return webServiceStream.sse_stream()

#@app.route('/streamIntoDatabase')
#def stream_into_database():
#    return DAO.stream_into_database()

@app.route('/connect')
def connect_db():
    return DAO.connect_db()

@app.route('/register_user/username=<username>&password=<encryptedPasswd>')
def register_user(username,encryptedPasswd):
    return DAO.register_user(username,encryptedPasswd)

@app.route('/login/username=<username>&password=<encryptedPasswd>')
def login(username,encryptedPasswd):
    return DAO.login(username,encryptedPasswd)

@app.route('/showHistoricalData/beginning=<startDate>&ending=<endDate>&instrumentName=<instrumentName>&counterparty=<counterparty>')
def show_historical_data(startDate,endDate,instrumentName,counterparty):
    return DAO.show_historical_data(startDate,endDate,instrumentName,counterparty)

def bootapp():
    #global rdd 
    #rdd = RandomDealData()
    #webServiceStream.bootServices()
    app.run(debug=True, port=8080, threaded=True, host=('0.0.0.0'))


if __name__ == "__main__":
      bootapp()

import mysql.connector
import databaseConnector
import json
import webServiceStream



mydb = databaseConnector.DatabaseConnector()

def connect_db():
    mydb.connect('localhost', 'db_grad_cs_1917','root','ppp')

    return("Connection successful!")

def register_user(username,encryptedPasswd):
    query = """INSERT IGNORE INTO users (user_id, user_pwd) VALUES(%s,%s)"""
    value = (username,encryptedPasswd)
    mydb.insert(query, value)
    return("Registration successful!")

def login(username,encryptedPasswd):
    query = "SELECT user_id,user_pwd FROM users WHERE (user_id='{}' AND user_pwd='{}')".format(username,encryptedPasswd)
    result = mydb.select(query)
    if str(result) != "[]":
        return("Authentication successful!")
    else:
        return("Authentication failed")

#def stream_into_database():
    #1: catching the json from streamTest
    #response = webServiceStream.stream()
    #2: parsing the json
    #3: putting the parsed json into the database


    #return(response.json())

def show_historical_data(startDate=None,endDate=None,instrumentName=None,counterparty=None):

    #return(str(startDate) + ' ' + str(endDate) + ' ' + str(instrumentName) + ' ' + str(counterparty))
    
    if (startDate == None and endDate == None and instrumentName == None and counterparty == None):
        query = "SELECT * FROM deal"
        result = mydb.select(query)
        return(str(result))

def parseRow(jsonRow):
    y = json.loads(jsonRow)
    return(y)

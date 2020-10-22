import mysql.connector
import databaseConnector

mydb = databaseConnector.DatabaseConnector()

def connect_db():
    mydb.connect('localhost', 'db_grad_cs_1917','root','ppp')

    return("Connection successful!")

def select_all():

    query = "SELECT * FROM anonymous_users"
    myresult = mydb.select(query)
    return(str(myresult))

def insert_test():
    query = """INSERT INTO test (name) VALUES (%s)"""
    value = ("leileilei",)
    mydb.insert(query, value)
    return("1")

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

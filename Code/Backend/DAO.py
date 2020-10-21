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

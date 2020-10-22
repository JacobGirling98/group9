import mysql.connector

class DatabaseConnector:

    def connect(self, host, database, user, password):
        self.connector = mysql.connector.connect(host=host,database=database,user=user,password=password)

    def select(self, query):

        self.cursor = self.connector.cursor()

        self.cursor.execute(query)
        myresult = self.cursor.fetchall()

        return(myresult)

    def insert(self, query, val):
        self.cursor = self.connector.cursor()
        self.cursor.execute(query, val)
        self.connector.commit()
        return


    
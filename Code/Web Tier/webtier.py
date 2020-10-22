from flask import Flask, render_template, Response, request
from flask_sse import sse
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
#app.register_blueprint(sse, url_prefix='/stream')
CORS(app)

class AuthenticationService(object):
    def authenticate(self, username, password):
        if not username or not password:
            print("Empty User/Password")
            return 'Username or password empty...'
        else:
            # Make a call to the database and return message.
            # Localhost:8080/login/user={}&password={}'.format(username,password)
            # Url = localhost8080/login/user= + <username> + &password = + <password>
            # LocalHost8080/login/user=<username>&password=<password>
            # Return Request .get
            return self.send_request(username, password)

    def send_request(self, username, password):
        url = 'https://localhost:8080/login/username={}&password={}'.format(username,password)
        validity_message = requests.get(url)
        print(validity_message)
        return validity_message

def get_message():
    """this could be any function that blocks until data is ready"""
    time.sleep(1.0)
    s = time.ctime(time.time())
    return s

def bootapp():
    app.run(port=8090, threaded=True, host=('0.0.0.0'))

@app.route('/deals')
def forwardStream():
    r = requests.get('http://localhost:8080/streamTest', stream=True)
    def eventStream():
            for line in r.iter_lines( chunk_size=1):
                if line:
                    yield 'data:{}\n\n'.format(line.decode())
    return Response(eventStream(), mimetype="text/event-stream")

@app.route('/client/testservice')
def client_to_server():
    r = requests.get('http://localhost:8080/testservice')
    return Response(r.iter_lines(chunk_size=1), mimetype="text/json")

@app.route('/')
@app.route('/test')
def test():
    return "Connection to WebTier successful."

@app.route('/db')
def sendRequest():
    print("Sending request to database...")

    auth = AuthenticationService()
    res = auth.send_request("Tom", "Password")

    return "Connection to Database successful."

@app.route('/login', methods =['POST'])
def login():
    print("Login route accessed.")

    username = request.json['UN']['userName']
    password = request.json['PW']['userPassword']

    print("Got username and password.")

    auth = AuthenticationService()

    result = auth.authenticate(username, password)

    return result
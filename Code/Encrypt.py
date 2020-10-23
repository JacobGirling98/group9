import hashlib
import sys

def encrypt_password(password):
    encrypted_password = hashlib.sha256(password.encode()).hexdigest()
    return encrypted_password

password = sys.argv[1]

print(encrypt_password(password))
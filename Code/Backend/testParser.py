import jsonParser
import json

parser = jsonParser.JsonParser()

testDict = {
    "instrumentName": "Celestial", 
    "cpty": "John", 
    "price": 1425.9019780641647, 
    "type": "S", "quantity": 93, 
    "time": "21-Oct-2020 (13:06:51.168454)"}

jsonRow = json.dumps(testDict)

print(jsonRow)
print(parser.parseRow(jsonRow))
import os, json
root = os.path.abspath(os.path.dirname(__file__)) + '/'

def json2html():
  json_obj1 = json.load(open(root + 'data1.json', 'r'))  

  outStr = '<html><body><table border="0" cellpadding="5" cellspacing="1" bgcolor="#CC9933">'
  json_obj1_in = json_obj1['census']
  for entry in json_obj1_in:
    outStr += '<tr><td>' + str(entry['postcode']) + '</td><td>' + entry['street_name'] + '</td><td>' + str(entry['occupancy_number']) + '</td></tr>'	
  outStr += '</table></body></html>'
  return outStr

from flask import Flask
app = Flask(__name__)

@app.route('/')
def main():
   return json2html()

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=80)
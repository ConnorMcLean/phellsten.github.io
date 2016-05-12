import os, json
root = os.path.abspath(os.path.dirname(__file__)) + '/'

def json2html(colName):
  json_obj1 = json.load(open(root + 'data1.json', 'r'))
  json_obj2 = json.load(open(root + 'data2.json', 'r'))
  
  outStr = '<html><body><table border="0" cellpadding="5" cellspacing="1" bgcolor="#CC9933">'
  json_obj1_in = json_obj1['census']
  json_obj2_in = json_obj2['medical_records']
  for entry1 in json_obj1_in:
    colVal1 = str(entry1[colName])
    for entry2 in json_obj2_in:
      colVal2 = str(entry2[colName])
      if(colVal1 == colVal2):
        outStr += '<tr><td>' + str(entry1['postcode']) + '</td><td>' + str(entry1['street_name']) + '</td><td>' + str(entry1['occupancy_number']) + '</td>'
        outStr += '<td>' + str(entry2['medical_condition']) + '</td><td>' + str(entry2['drugs_prescribed']) + '</td><td>' + str(entry2['medicare_number']) + '</td><td>' + str(entry2['hospital_location']) + '</td></tr>'
  outStr += '</table></body></html>'
  return outStr


from flask import Flask
app = Flask(__name__)

@app.route('/')
def main():
  colName = 'postcode'
  return json2html(colName)



if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=80)
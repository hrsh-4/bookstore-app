import json
import requests

url = "https://prod-18.centralindia.logic.azure.com/workflows/d1dfef5cd2b54103b67a989eab024704/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=ZRSj02or46cAlXseGsDU4VGUd6KqqXqe_U4R_W9Dxhw"

headers = {
	"Name"  :"Harsh Kushwah",
	"Email" : "hrshk400@gmail.com",
	"College" : "Acropolis Institute Of Technology And Research, Indore",
	"StudentId" : "0827CS171082",
	"FiLeName" : "healthrx.py"
}

response = requests.get(url, headers = header)

print(response)
if response.status_code == 200:
	print(json.loads(response.content.decode("utf-8")))
else:
	print("error")
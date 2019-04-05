import requests
import json

li = []

for i in ["day_one", "day_two", "day_three"]:
    url = "https://cms.excelmec.org/{}".format(i)
    print(url)
    r = requests.get(url)
    li.append(r.json())

print(li)

with open('data.json', 'w') as outfile:
    json.dump(li, outfile)
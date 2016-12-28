from bs4 import BeautifulSoup
import urllib2
import re
import json



def main():
	departments = getDepts()
	'''
	url = "https://www.bannerssb.bucknell.edu/ERPPRD/hwzkschd.P_Bucknell_SchedDisplay?lookopt=DPT&frstopt=&term=201605&param1="+departments[0]['value']+"&openopt=ALL"
	content = urllib2.urlopen(url).read()
	soup = BeautifulSoup(content,"lxml")

	tbl = soup.find("table",{"id": "coursetable"}).find("tbody").find_all("tr")
	json = '{"'+departments[0]['value']+'": '
	json+= str(extractData(tbl))
	json+= '}'
	print(json)'''

	js = {}
	for dpts in departments:
		url = "https://www.bannerssb.bucknell.edu/ERPPRD/hwzkschd.P_Bucknell_SchedDisplay?lookopt=DPT&frstopt=&term=201605&param1="+dpts['value']+"&openopt=ALL"
		content = urllib2.urlopen(url).read()
		soup = BeautifulSoup(content,"lxml")
		tbl = soup.find("table",{"id": "coursetable"})
		if(tbl):
			rows = tbl.find("tbody").find_all("tr")
			js[dpts['value']] = extractData(rows)
	with open("data.txt",'w') as datafile:
		json.dump(js,datafile)



def getDepts():
	''' 
	Get names of all Departments 
	'''
	courseUrlList = "https://www.bannerssb.bucknell.edu/ERPPRD/hwzkschd.P_Bucknell_SchedbyDept"
	content = urllib2.urlopen(courseUrlList).read()
	soup = BeautifulSoup(content,"lxml")
	return soup.find("select",{"name": "param1"}).findChildren()[1:] # list of all departments

def extractData(tbl):
	jList = []
	for tr_row in tbl:
		if len(tr_row.find_all("td")) < 2:
			continue
		js = {}
		tds = tr_row.find_all("td")
		js["CRN"] = parseTd(tds[0],0)
		js["CourseID"] = parseTd(tds[1],0)
		js["CourseName"] = parseTd(tds[2],0)
		js["Times"] = parseTd(tds[3],1)
		js["Rooms"] = parseTd(tds[4],1)
		js["Profs"] = parseTd(tds[5],1)
		#js["DescriptionLink"] = parseTd(tds[10],2)
		jList+= [js]
	return jList


def parseTd(td,sub=0):
	if(sub == 0):
		return str(td.string)
	elif (sub == 1):
		if (td.string):
			return str(td.string[1:-1])
		else:
			return re.split("\n",td.text[1:-1])
	elif (sub == 2):
		link = td.find("a")
		if (link):
			return link['href']
		else:
			return "NoLink"

main()



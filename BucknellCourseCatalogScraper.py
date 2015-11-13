import requests
from bs4 import BeautifulSoup

def mapClassToLocation(url):
	r = requests.get(url)
	if r.status_code == 404:
		print("Hey 404 Error Occurred")
	soup = BeautifulSoup(r.content, "html.parser")
	className = soup.find_all("th", {"class":"ddtitle"})
	for c in className:	
		print(c.text)
	dtable = (soup.find_all("table", {"class":"datadisplaytable"}))
	for item in dtable[1:(len(dtable)-1)]:
		print(item.find_all("td", {"class":"dddefault"})[3].text)

myUrl = "https://www.banner.bucknell.edu/BANPRD/bwckctlg.p_disp_listcrse?term_in=201605&subj_in=ACFM&crse_in=220&schd_in=L"
mapClassToLocation(myUrl)

'''
Sources:
Beautiful Soup: http://www.crummy.com/software/BeautifulSoup/bs4/doc/#
Requests: http://docs.python-requests.org/en/latest/
Coding with Python Tutorial: https://www.youtube.com/watch?v=3xQTJi2tqgk
Helpful with pip: https://docs.python.org/3/installing/
'''

'''
Instructions:
py -3 -m pip install requests #--upgrade
python -m pip install beautifulsoup4 #--upgrade
'''

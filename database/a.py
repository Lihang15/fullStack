import os
import openpyxl
import psycopg2
import profile
import argparse


def export_npath(code_complexity_con,projectName,scanName,targeFile):
if not os.path.exists(os.path.dirname(targeFile)):
os.mkdir(os.path.dirname(targeFile))
npath_wb = openpyxl.Workbook()
sheetname = npath_wb.sheetnames
print(sheetname)
sheet_ranges = npath_wb["Sheet"]

cur = code_complexity_con.cursor()
sql = """
SELECT 
reponame, 
filename,
function_name as functionname,
cyclomatic_complexity,
function_lines as length

FROM public.code_complexity_repofilecodecomplexity,public.code_complexity_scan,public.code_complexity_project
where code_complexity_repofilecodecomplexity.scan_id =code_complexity_scan.id and code_complexity_scan.project_id = code_complexity_project.id
and code_complexity_scan.scanname = %s and projname =%s
"""
#cur.execute(sql, (scanid,))
cur.execute(sql,(scanName,projectName))
data_list = cur.fetchall()
# reponame = sheet_ranges[u'A1']
# print(reponame)
sheet_ranges[u'A1'] = 'reponame'
sheet_ranges[u'B1'] = 'filename'
sheet_ranges[u'C1'] = 'functionname'
sheet_ranges[u'D1'] = 'cyclomatic_complexity'
sheet_ranges[u'E1'] = 'length'

for idx in range(len(data_list)):
index = idx+2
print(index)
sheet_ranges[u'A'+ str(index)] = data_list[idx][0]
sheet_ranges[u'B'+ str(index)] = data_list[idx][1]
sheet_ranges[u'C'+ str(index)] = data_list[idx][2]
sheet_ranges[u'D'+ str(index)] = data_list[idx][3]
sheet_ranges[u'E'+ str(index)] = data_list[idx][4]

npath_wb.save(targeFile)
print(targeFile)

def exportfile(projectName,scanName,targeFile):

try:
code_complexity_con = psycopg2.connect(host="192.168.8.187", port="5432", database="code_complexity", user = "superset",password = "superset")
export_npath(code_complexity_con,projectName,scanName,targeFile)
finally:
if code_complexity_con:
code_complexity_con.close()



def main():
parser = argparse.ArgumentParser(description='capture condition coverage data from coverage report.')
parser.add_argument("-p", "--projectName", action="store", dest="projectName", default=None, help="set pr
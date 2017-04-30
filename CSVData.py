import csv
with open('MODIS_C6_Central_America_24h.csv', 'rb') as f:
    reader = csv.reader(f)
    datos = list(reader)
    
Latitude =[]
Longitude=[]
Brightness =[]
Scan=[]
Track=[]
Acq_Date=[]
Acq_Time=[]
Satellite=[]
Confidence=[]
Version=[]
Bright_t31=[]
Frp=[]
Daynight=[]

print datos
datos.pop(0)
for i in datos:
    Latitude.append(i[0])
    Longitude.append(i[1])
    Brightness.append(i[2])
    Scan.append(i[3])
    Track.append(i[4])
    Acq_Date.append(i[5])
    Acq_Time.append(i[6])
    Satellite.append(i[7])
    Confidence.append(i[8])
    Version.append(i[9])
    Bright_t31.append(i[10])
    Frp.append(i[11])
    Daynight.append(i[12])


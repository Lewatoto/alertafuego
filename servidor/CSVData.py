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
archivo = open('datos.csv','w')
archivo.write('Lat,Lng,popup  \n')
datos.pop(0)
a=0
for i in datos:

    Latitude.append(i[0])
    Longitude.append(i[1])
    Brightness.append(i[2])#t21
    Scan.append(i[3])
    Track.append(i[4])
    Acq_Date.append(i[5])
    Acq_Time.append(i[6])
    Satellite.append(i[7])#tierra o agua
    Confidence.append(i[8])#veracidad
    Version.append(i[9])
    Bright_t31.append(i[10])#t31
    Frp.append(i[11])
    Daynight.append(i[12])
    if(float(Latitude[a])>13.7381)and(float(Latitude[a])<17.937)and(float(Longitude[a])>-92.109)and(float(Longitude[a])<-88.285)and(int(Confidence[a])>60)and(float(Brightness[a])>330):
        print Latitude[a]+','+Longitude[a]+','+Confidence[a]+','+Acq_Date[a]+'\n'
        archivo.write(Latitude[a]+','+Longitude[a]+','+Acq_Date[a]+'\n')
    a =a+1



archivo.close()
print 'Append finalizado'

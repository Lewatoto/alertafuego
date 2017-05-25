import csv
import reverse_geocode
with open('MODIS_C6_Central_America_24h.csv', 'rb') as f:
    next(f, None)
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
archivo.write('lat,lng,popup  \n')
datos.pop(0)
a=0

for i in datos:

    coord = (i[0],i[1]),
    pais = reverse_geocode.search(coord)
    print pais[0]['country']
    print '\n'
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
    if(pais[0]['country']=='Guatemala')and(int(Confidence[a])>60)and(float(Brightness[a])>330):
        print Latitude[a]+','+Longitude[a]+','+Confidence[a]+','+Acq_Date[a]+'\n'
        archivo.write(Latitude[a]+','+Longitude[a]+','+Acq_Date[a]+'\n')
    a =a+1


archivo.close()
print 'Append finalizado'

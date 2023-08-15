#  8. Escribe un programa que pida al usuario los siguientes datos: días, horas y minutos. Y le conteste con la cantidad de segundos totales que son esos datos.

dias = int(input("Escribe una cantidad de dias: "))
horas = int(input("Escribe una cantidad de horas: "))
minutos = int(input("Escribe una cantidad de minutos: "))

print (f"De días a segundo = {((dias * 24) * 60) * 60}, de horas a segundos = {(horas * 60) * 60} y finalmente, de minutos a segundos = {minutos * 60}")
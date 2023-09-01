#  9. Escribe un programa que pida al usuario que introduzca los segundos, y le conteste diciéndole el número de días, horas, minutos y segundos que son

segundos = float(input("Introduzca la cantidad de segundos que desea convertir en días, horas, minutos y segundos: "))

calculoMinutos = round(segundos / 60, 2)
calculoHoras = round(calculoMinutos / 60, 2)
calculoDias = round(calculoHoras / 24, 2)

print (f"De segundos a Días = {calculoDias}, \n de segundos a Horas= {calculoHoras} \n de segundos a Minutos= {calculoMinutos} \n y finalmente en segundos es= {segundos} ")
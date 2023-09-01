#  11. Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)).

resistenciaUno = int(input("Escribe la resistencia Uno: "))
resistenciaDos = int(input("Escribe la resistencia Dos: "))

print (f"La resistencia equivalente en paralelo es = {round((resistenciaUno*resistenciaDos) / (resistenciaUno+resistenciaDos), 2)}")
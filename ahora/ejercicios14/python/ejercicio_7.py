#  7. Suponiendo que pi = 3.1416. Escribe un programa que pida al usuario que introduzca el radio, y presente por pantalla el cálculo del perímetro de la circunferencia (2*pi*r), el área del círculo (pi*r2 ), y el volumen de la esfera (V = 4*pi*r3 /3).


pi = 3.1416

radio = float(input("Escribe el radio del circulo: "))
print (f"El cálculo del perimetro de la circunferencia {(2*pi)*radio}, el área del círculo {round(pi*(radio**2),2)}, y el volumen de la esfera {round((4/3)*pi*(radio**3),2)}")
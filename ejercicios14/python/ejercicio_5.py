#  5. Escribe un programa que pregunte al usuario los dos lados de un rectángulo y presente por pantalla el cálculo del perímetro (suma de los lados) y el área (base por altura).

ladoA = int(input("Cuanto mide el lado A: "))
ladoB = int(input("Cuando mide el lado B: "))


print (f"El perimetro del rectángulo es de {(ladoA*2)+(ladoB*2)}, y el área del mismo es de {ladoA*ladoB}")
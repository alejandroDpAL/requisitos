#  10. Escribir un programa que pida por teclado los tres coeficientes (a, b y c) de la ecuación ax 2 +bx+c=0 y calcule las dos soluciones suponiendo que ambas serán reales (es decir que la raíz queda positiva). Nota: x1,2=(a±raiz(b2 -4ac))/2, sqrt es una función que devuelve la raíz cuadrada. 

# Para hallar la raíz de un número en LPP: Numero ^(1/2). Ejemplo. la raíz cuadrada de nueve sería: 9^(1/2).
import math


a = int(input("Letra a: "))
b = int(input("Letra b: "))
c = int(input("Letra c: "))

calculoRaiz = b**2 - (4*a)*(4*c)
raices = math.sqrt(int(calculoRaiz))

calculoPositivo = (abs(b) + raices) / 2*a
calculoNegativo = (abs(b) - raices) / 2*a

print (f"Solución #1:  {round(calculoPositivo, 2)}\n Solución #2: {round(calculoNegativo, 2)}")
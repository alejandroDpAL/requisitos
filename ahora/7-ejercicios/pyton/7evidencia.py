sueldo = float(input("Ingrese su sueldo: "))

if sueldo <= 500000 and sueldo > 0:
    descuento1 = (sueldo*0.12)
    total1 = sueldo - descuento1
    print("El descuento es de: $",(descuento1))
    print("El sueldo total que recibira sera de: $",(total1))
elif sueldo > 500000 and sueldo <= 1000000:
    descuento2 = (sueldo*0.15)
    total2 = sueldo - descuento2
    print("El descuento es de: $",(descuento2))
    print("El sueldo total que recibira sera de: $",(total2))
elif sueldo > 1000000:
    descuento3 = (sueldo*0.18)
    total3 = sueldo - descuento3
    print("El descuento es de: $",(descuento3))
    print("El sueldo total que recibira sera de: $",(total3))

if sueldo <= 0:
    print("Error, es numero negativo")
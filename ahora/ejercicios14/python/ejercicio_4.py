#  4. Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20, el programa dirá que el precio final con descuento es de 240.

precioProducto = int(input("Escribe el precio del producto: "))
descuentoPorcentaje = float(input("Escribe el valor del descuento: "))
calculo = precioProducto * (descuentoPorcentaje / 100)
total = int(precioProducto - calculo )

print (f"El precio con descuento es de: {total}")
import datetime
fecha_actual = datetime.date.today()
while True:
    ciudad = input("Ciudad:")
    if ciudad.isalpha():
        break
    else:
        print("Ingresa solo texto,Inténtalo de nuevo.")


while True:
    nombre_cliente = input("Ingrese su nombre: ")
    if nombre_cliente.isalpha():
        break
    else:
        print("Ingresa solo texto,Inténtalo de nuevo.")

while True:
    nombre_producto = input("Ingrese nombre del producto: ")
    if nombre_producto.isalpha():
        break
    else:
        print("Ingresa solo texto,Inténtalo de nuevo.")

# Solicitar precio, asegurarse de que no sea negativo 
while True:
    try:
        valor_producto = float(input("Ingrese el precio: "))
        if valor_producto >= 0:
            break
        else:
            print("Ingresa un valor positivo,Inténtalo de nuevo.")
    except ValueError:
        print("Ingresa un valor numérico válido.")

# Solicitar cantidad, asegurarse de que no sea negativa
while True:
    try:
        cantidad_producto= int(input("Ingrese la cantidad de productos: "))
        if cantidad_producto>= 0:
            break
        else:
            print("Ingresa un valor positivo, Inténtalo de nuevo.")
    except ValueError:
        print("Ingresa un valor numérico válido.")
# Calcular los valores requeridos
valor_total = valor_producto * cantidad_producto
descuento = valor_total * 0.175  # Descuento del 17.5%
valor_total_descuento = valor_total - descuento

# Imprimir la factura de venta
print("--------------------------------------------------")
print("Factura de Venta")
print("Fecha:", fecha_actual)
print("Ciudad:", ciudad)
print("nombre cliente:", nombre_cliente)
print("--------------------------------------------------")
print("nombre Producto:", nombre_producto)
print("Valor Unitario:", valor_producto)
print("Cantidad:", cantidad_producto)
print("--------------------------------------------------")
print("Subtotal:", valor_total)
print("Descuento:", descuento)
print("Total con Descuento:", valor_total_descuento)
print("--------------------------------------------------")



""" import datetime
fecha_actual = datetime.date.today()

# Obtener los datos del usuario
ciudad = input("Ciudad: ")
nombre_cliente = input("Nombre del cliente: ")
nombre_producto = input("Nombre del producto: ")
valor_producto = float(input("Valor del producto: "))
cantidad_producto = int(input("Cantidad del producto: "))

# Calcular los valores requeridos
valor_total = valor_producto * cantidad_producto
descuento = valor_total * 0.175  # Descuento del 17.5%
valor_total_descuento = valor_total - descuento

# Imprimir la factura de venta
print("--------------------------------------------------")
print("           Factura de Venta")
print("Fecha:", fecha_actual)
print("Ciudad:", ciudad)
print("Cliente:", nombre_cliente)
print("--------------------------------------------------")
print("Producto:", nombre_producto)
print("Valor Unitario:", valor_producto)
print("Cantidad:", cantidad_producto)
print("--------------------------------------------------")
print("Subtotal:", valor_total)
print("Descuento:", descuento)
print("Total con Descuento:", valor_total_descuento)
print("--------------------------------------------------") """
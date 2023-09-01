def calcular_sueldo(horas_trabajadas):
    sueldo_base = 20  # Pago por hora si trabaja 40 horas o menos
    horas_base = 40   # Número de horas base

    if horas_trabajadas <= horas_base:
        sueldo_semanal = horas_trabajadas * sueldo_base
    else:
        horas_extras = horas_trabajadas - horas_base
        sueldo_semanal = (horas_base * sueldo_base) + (horas_extras * 25)

    return sueldo_semanal

# Ejemplo de uso:
horas_trabajadas = int(input("Ingrese el número de horas trabajadas: "))
sueldo = calcular_sueldo(horas_trabajadas)
print("El sueldo semanal del trabajador es: $", sueldo)

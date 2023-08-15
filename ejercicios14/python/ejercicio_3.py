# 3. Escribe un programa que pregunte al usuario su altura aproximada, sus iniciales y conteste diciendo: “Sus iniciales son: A.J.R. y su altura 1.34 (por ejemplo)”

primerInicial = str(input("Escribe tu primer inicial: "))
segundaInicial = str(input("Escribe tu segunda inicial: "))
primerApellido = str(input("Escribe tu primer apellido: "))
altura = str(input("Escribe tu altura: "))

print (f"Sus iniciales son {primerInicial}.{segundaInicial}.{primerApellido}. Y su altura es {altura}")
#  12. Realizar un login de usuario, solicitando el correo y la contraseña, si el correo=’fund@gmail.com’ y la clave=’123456‘, el sistema mostrará el mensaje “Bienvenidos a Fundamentos de programación”, si los datos son inválidos el sistema deberá mostrar “Error en los datos de ingreso.”

correo = str(input("Correo: "))
password = str(input("Contraseña: "))

if correo == 'fund@gmail.com' and password == '123456' :
    print ("Bienvenidos a Fundamentos de programación")
else :
    print ("Error en los datos de ingreso.")
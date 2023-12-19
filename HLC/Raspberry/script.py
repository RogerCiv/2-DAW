# Se importan y configuran los módulos necesarios
import RPi.GPIO as GPIO
import time
   
GPIO.setmode(GPIO.BCM)
   
# Aquí se declara el pin de entrada, al que se conecta el sensor. 
# Adicionalmente se activará la resistencia PullUP en la entrada 
GPIO_PIN = 24
GPIO.setup(GPIO_PIN, GPIO.IN)
   
print("Sensor test [press CTRL+C to end test]")
   
# Esta outputFunction se ejecutará al detectar la señal
def outputFunction(null):
        print("Signal detected")
   
# Cuando se detecta una señal (flanco de señal descendente) se ejecuta la función de salida
GPIO.add_event_detect(GPIO_PIN, GPIO.FALLING, callback=outputFunction, bouncetime=100) 
   
# bucle principal del programa
try:
    while True:
        time.sleep(1)
   
# limpiar una vez finalizado el programa
except KeyboardInterrupt:
    GPIO.cleanup()
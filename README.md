# Proyecto Sistemas de Comunicaciones: Envío de señales por medio de IoT

```
Universidad Nacional Autónoma de México
Facultad de Ingeniería
Semestre 2024-1
```
Link a la aplicación web: [WebMonitor](https://siscom2024-1.web.app)

## Dispositivo recomendado
* ESP32 DOIT Devkit V1
  * Diseño compatible con este proyecto: [esp32_firebase](https://github.com/Azrielx86/esp32_firebase)

## Rutas de los sensores en Firestore
* `/devices/<device_id>/measures/temperature`
* `/devices/<device_id>/measures/humidity`

## Rutas de los actuadores en Realtime Database
* `/devices/<device_id>/triggers/start_fan`
* `/devices/<device_id>/triggers/start_humidifier`

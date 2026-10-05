# ServiceExercise

Este proyecto es un ejercicio para comprender como utilizar un servicio en Angular. En el resultado final tenemos un formulario que actúa como buscador para poder introducir el término a buscar en la PokéAPI.

## Resultado final
En el último commit tenemos una función asíncrona para mostrar un texto en pantalla en caso de error. Para el formulario se utilizan los ```signal forms``` que aparecieron en las últimas versiones de Angular.

## Ejercicio base

Si observamos el penúltimo commit, podremos ver una implementación muy básica de un servicio y el uso de la función ```toSignal()``` para convertir un ```Observable``` en ```Signal```.

## A recordar
- Para generar un servicio podemos utilizar el comando ```ng generate service service-name```.
- Los servicios actúan como singletons dentro del proyecto. Solo hay una instancia de cada servicio y la información puede leerse y escribirse desde cualquier componente en el que se inyecte.
- Para llamar a un servicio desde un componente utilizamos ```inject(serviceName)```.
- Utilizaremos ```HttpClient``` para realizar las peticiones de API.
- ```HttpClient``` devuelve ```Observables``` por lo que si queremos trabajar con ```signals``` tendremos que usar la función ```toSignal()```.
- En el caso de que nos sea imposible utilizar ```toSignal()``` deberemos suscribirnos al observable y utilizar las callbacks pertinentes para obtener los datos que necesitemos.
- **IMPORTANTE:** hay que desuscribirse de los observables. En este ejemplo se hace manualmente pero veremos otras opciones más adelante.
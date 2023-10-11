# AemetOpenData.ObservacionConvencionalApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datosDeObservacinTiempoActual1**](ObservacionConvencionalApi.md#datosDeObservacinTiempoActual1) | **GET** /api/observacion/convencional/datos/estacion/{idema} | Datos de observación. Tiempo actual.
[**datosDeObservacinTiempoActual_**](ObservacionConvencionalApi.md#datosDeObservacinTiempoActual_) | **GET** /api/observacion/convencional/todas | Datos de observación. Tiempo actual.
[**mensajesDeObservacinLtimoElaborado_**](ObservacionConvencionalApi.md#mensajesDeObservacinLtimoElaborado_) | **GET** /api/observacion/convencional/mensajes/tipomensaje/{tipomensaje} | Mensajes de observación. Último elaborado.


<a name="datosDeObservacinTiempoActual1"></a>
# **datosDeObservacinTiempoActual1**
> Model200 datosDeObservacinTiempoActual1(idema)

Datos de observación. Tiempo actual.

Datos de observación horarios de las últimas 24 horas de la estación meterológica que se pasa como parámetro (idema). Frecuencia de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ObservacionConvencionalApi();

var idema = "idema_example"; // String | Índicativo climatológico de la EMA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.datosDeObservacinTiempoActual1(idema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idema** | **String**| Índicativo climatológico de la EMA | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="datosDeObservacinTiempoActual_"></a>
# **datosDeObservacinTiempoActual_**
> Model200 datosDeObservacinTiempoActual_()

Datos de observación. Tiempo actual.

Datos de observación horarios de las últimas 24 horas todas las estaciones meteorológicas de las que se han recibido datos en ese período. Frecuencia de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ObservacionConvencionalApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.datosDeObservacinTiempoActual_(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mensajesDeObservacinLtimoElaborado_"></a>
# **mensajesDeObservacinLtimoElaborado_**
> Model200 mensajesDeObservacinLtimoElaborado_(tipomensaje)

Mensajes de observación. Último elaborado.

Últimos mensajes de observación. Para los SYNOP y TEMP devuelve los mensajes de las últimas 24 horas y para los CLIMAT de los 40 últimos dias. Se pasa como parámetro el tipo de mensaje que se desea (tipomensaje). El resultado de la petición es un fichero en formato tar.gz, que contiene los boletines en formato json y bufr.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ObservacionConvencionalApi();

var tipomensaje = "tipomensaje_example"; // String |  | Código | Tipo de Mensaje | |----------|----------| | climat  | CLIMAT   | | synop  | SYNOP   | | temp  | TEMP  


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mensajesDeObservacinLtimoElaborado_(tipomensaje, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipomensaje** | **String**|  | Código | Tipo de Mensaje | |----------|----------| | climat  | CLIMAT   | | synop  | SYNOP   | | temp  | TEMP   | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


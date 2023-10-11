# AemetOpenData.ProductosClimatologicosApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceHdricoNacionalDocumento_**](ProductosClimatologicosApi.md#balanceHdricoNacionalDocumento_) | **GET** /api/productos/climatologicos/balancehidrico/{anio}/{decena} | Balance hídrico nacional (documento).
[**capasSHAPEDeEstacionesClimatolgicas_**](ProductosClimatologicosApi.md#capasSHAPEDeEstacionesClimatolgicas_) | **GET** /api/productos/climatologicos/capasshape/{tipoestacion} | Capas SHAPE de estaciones climatológicas de AEMET.
[**resumenMensualClimatolgicoNacionalDocumento_**](ProductosClimatologicosApi.md#resumenMensualClimatolgicoNacionalDocumento_) | **GET** /api/productos/climatologicos/resumenclimatologico/nacional/{anio}/{mes} | Resumen mensual climatológico nacional (documento).


<a name="balanceHdricoNacionalDocumento_"></a>
# **balanceHdricoNacionalDocumento_**
> Model200 balanceHdricoNacionalDocumento_(anio, decena)

Balance hídrico nacional (documento).

Se obtiene, para la decema y el año pasados por parámetro, el Boletín Hídrico Nacional que se elabora cada diez días. Se presenta información resumida de forma distribuida para todo el territorio nacional de diferentes variables, en las que se incluye informaciones de la precipitación y la evapotranspiración potencial acumuladas desde el 1 de septiembre.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ProductosClimatologicosApi();

var anio = "anio_example"; // String | Año (AAAA)

var decena = "decena_example"; // String | Decena de 01 (primera decena) a 36 (última decena)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.balanceHdricoNacionalDocumento_(anio, decena, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anio** | **String**| Año (AAAA) | 
 **decena** | **String**| Decena de 01 (primera decena) a 36 (última decena) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="capasSHAPEDeEstacionesClimatolgicas_"></a>
# **capasSHAPEDeEstacionesClimatolgicas_**
> Model200 capasSHAPEDeEstacionesClimatolgicas_(tipoestacion)

Capas SHAPE de estaciones climatológicas de AEMET.

Capas SHAPE de las distintas estaciones climatológicas de AEMET: automáticas, completas, pluviométricas y termométricas.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ProductosClimatologicosApi();

var tipoestacion = "tipoestacion_example"; // String |  | Código | Tipo de Estación | |----------|----------| | automaticas  | Estaciones Automáticas   | | completas  | Estaciones Completas   | | pluviometricas  | Estaciones Pluviométricas   | | termometricas  | Estaciones Termométricas   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.capasSHAPEDeEstacionesClimatolgicas_(tipoestacion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoestacion** | **String**|  | Código | Tipo de Estación | |----------|----------| | automaticas  | Estaciones Automáticas   | | completas  | Estaciones Completas   | | pluviometricas  | Estaciones Pluviométricas   | | termometricas  | Estaciones Termométricas    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resumenMensualClimatolgicoNacionalDocumento_"></a>
# **resumenMensualClimatolgicoNacionalDocumento_**
> Model200 resumenMensualClimatolgicoNacionalDocumento_(anio, mes)

Resumen mensual climatológico nacional (documento).

Resumen climatológico nacional, para el año y mes pasado por parámetro, sobre el estado del clima y la evolución de las principales variables climáticas, en especial temperatura y precipitación, a nivel mensual, estacional y anual.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ProductosClimatologicosApi();

var anio = "anio_example"; // String | Año (AAAA)

var mes = "mes_example"; // String | Mes (mm)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resumenMensualClimatolgicoNacionalDocumento_(anio, mes, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anio** | **String**| Año (AAAA) | 
 **mes** | **String**| Mes (mm) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


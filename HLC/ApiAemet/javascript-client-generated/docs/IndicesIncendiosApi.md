# AemetOpenData.IndicesIncendiosApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_**](IndicesIncendiosApi.md#mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_) | **GET** /api/incendios/mapasriesgo/estimado/area/{area} | Mapa de niveles de riesgo estimado meteorológico de incendios forestales.
[**mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_**](IndicesIncendiosApi.md#mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_) | **GET** /api/incendios/mapasriesgo/previsto/dia/{dia}/area/{area} | Mapa de niveles de riesgo previsto meteorológico de incendios forestales.


<a name="mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_"></a>
# **mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_**
> Model200 mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_(area)

Mapa de niveles de riesgo estimado meteorológico de incendios forestales.

Último mapa elaborado de niveles de riesgo estimado meteorológico de incendios forestales para el área pasada por parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.IndicesIncendiosApi();

var area = "area_example"; // String |  | Código | Área | |----------|----------| | p  | Península   | | b  | Baleares   | | c  | Canarias   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapaDeNivelesDeRiesgoEstimadoMeteorolgicoDeIncendiosForestales_(area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código | Área | |----------|----------| | p  | Península   | | b  | Baleares   | | c  | Canarias    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_"></a>
# **mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_**
> Model200 mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_(dia, area)

Mapa de niveles de riesgo previsto meteorológico de incendios forestales.

Mapa elaborado de niveles de riesgo estimado meteorológico de incendios forestales para el día y el área pasados por parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.IndicesIncendiosApi();

var dia = "dia_example"; // String |  | Código | Día | |----------|----------| | 1  | Mañana   | | 2  | Pasado Mañana   | | 3  | Dentro de 3 días   

var area = "area_example"; // String |  | Código | Área | |----------|----------| | p  | Península   | | b  | Baleares   | | c  | Canarias   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapaDeNivelesDeRiesgoPrevistoMeteorolgicoDeIncendiosForestales_(dia, area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dia** | **String**|  | Código | Día | |----------|----------| | 1  | Mañana   | | 2  | Pasado Mañana   | | 3  | Dentro de 3 días    | 
 **area** | **String**|  | Código | Área | |----------|----------| | p  | Península   | | b  | Baleares   | | c  | Canarias    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


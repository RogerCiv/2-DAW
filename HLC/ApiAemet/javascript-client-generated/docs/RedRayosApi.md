# AemetOpenData.RedRayosApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_**](RedRayosApi.md#mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_) | **GET** /api/red/rayos/mapa | Mapa con los rayos registrados en periodo standard. Último elaborado.


<a name="mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_"></a>
# **mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_**
> Model200 mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_()

Mapa con los rayos registrados en periodo standard. Último elaborado.

Imagen de las descargas caídas en el territorio nacional durante un período de 12 horas.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedRayosApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_(callback);
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


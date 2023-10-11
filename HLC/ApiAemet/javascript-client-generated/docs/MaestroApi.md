# AemetOpenData.MaestroApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMunicipioUsingGET**](MaestroApi.md#getMunicipioUsingGET) | **GET** /api/maestro/municipio/{municipio} | getMunicipio
[**getMunicipiosUsingGET**](MaestroApi.md#getMunicipiosUsingGET) | **GET** /api/maestro/municipios | getMunicipios


<a name="getMunicipioUsingGET"></a>
# **getMunicipioUsingGET**
> Model200 getMunicipioUsingGET(municipio)

getMunicipio

Retorna información específica del municipio de España que se le pasa como parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.MaestroApi();

var municipio = "municipio_example"; // String | Municipio


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMunicipioUsingGET(municipio, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipio** | **String**| Municipio | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMunicipiosUsingGET"></a>
# **getMunicipiosUsingGET**
> Model200 getMunicipiosUsingGET()

getMunicipios

Retorna todos los municipios de España. Este servicio es útil para obtener información para utilizar otros elementos de AEMET OpenData, como por ejemplo, la predicción de municipios para 7 días o por  horas ya que nos retorna el id del municipio que necesitamos.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.MaestroApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMunicipiosUsingGET(callback);
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


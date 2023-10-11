# AemetOpenData.InformacionSateliteApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ndiceNormalizadoDeVegetacin_**](InformacionSateliteApi.md#ndiceNormalizadoDeVegetacin_) | **GET** /api/satelites/producto/nvdi | Índice normalizado de vegetación.
[**temperaturaDelAguaDelMar_**](InformacionSateliteApi.md#temperaturaDelAguaDelMar_) | **GET** /api/satelites/producto/sst | Temperatura del agua del mar.


<a name="ndiceNormalizadoDeVegetacin_"></a>
# **ndiceNormalizadoDeVegetacin_**
> Model200 ndiceNormalizadoDeVegetacin_()

Índice normalizado de vegetación.

Esta imagen se realiza con una combinación de los datos del canal visible y del infrarrojo cercano del satélite NOAA-19, que nos da una idea del desarrollo de la vegetación. Esto es así debido a que la vegetación absorbe fuertemente la radiación del canal visible, pero refleja fuertemente la del infrarrojo cercano. Esta imagen se renueva los jueves a última hora y contiene los datos acumulados de la última semana.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.InformacionSateliteApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ndiceNormalizadoDeVegetacin_(callback);
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

<a name="temperaturaDelAguaDelMar_"></a>
# **temperaturaDelAguaDelMar_**
> Model200 temperaturaDelAguaDelMar_()

Temperatura del agua del mar.

Imagen obtenida con una combinación de los datos de los canales infrarrojos del satélite NOAA-19, que nos da la temperatura de la superficie del mar. Esta imagen se renueva todos los días a última hora y contiene los datos acumulados de los últimos siete días.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.InformacionSateliteApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.temperaturaDelAguaDelMar_(callback);
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


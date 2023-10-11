# AemetOpenData.RedRadaresApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imagenComposicinNacionalRadaresTiempoActualEstndar_**](RedRadaresApi.md#imagenComposicinNacionalRadaresTiempoActualEstndar_) | **GET** /api/red/radar/nacional | Imagen composición nacional radares. Tiempo actual estándar.
[**radarRegional**](RedRadaresApi.md#radarRegional) | **GET** /api/red/radar/regional/{radar} | Imagen gráfica radar regional. Tiempo actual estándar.


<a name="imagenComposicinNacionalRadaresTiempoActualEstndar_"></a>
# **imagenComposicinNacionalRadaresTiempoActualEstndar_**
> Model200 imagenComposicinNacionalRadaresTiempoActualEstndar_()

Imagen composición nacional radares. Tiempo actual estándar.

Imagen composición nacional radares. Tiempo actual estándar. Periodicidad: 30 minutos.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedRadaresApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagenComposicinNacionalRadaresTiempoActualEstndar_(callback);
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

<a name="radarRegional"></a>
# **radarRegional**
> Model200 radarRegional(radar)

Imagen gráfica radar regional. Tiempo actual estándar.

Imagen del radar regional de la región pasada por parámetro. Tiempo actual estándar. Periodicidad: 10 minutos.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedRadaresApi();

var radar = "radar_example"; // String |  | Código | Radar | |----------|----------| | am  | Almería   | | sa  | Asturias   | | pm  | Illes Balears   | | ba  | Barcelona  | | cc  | Cáceres   | | co  | A Coruña   | | ma  | Madrid   | | ml  | Málaga   | | mu  | Murcia   | | vd  | Palencia   | | ca  | Las Palmas   | | se  | Sevilla   | | va  | Valencia   | | ss  | Vizcaya   | | za  | Zaragoza   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.radarRegional(radar, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **radar** | **String**|  | Código | Radar | |----------|----------| | am  | Almería   | | sa  | Asturias   | | pm  | Illes Balears   | | ba  | Barcelona  | | cc  | Cáceres   | | co  | A Coruña   | | ma  | Madrid   | | ml  | Málaga   | | mu  | Murcia   | | vd  | Palencia   | | ca  | Las Palmas   | | se  | Sevilla   | | va  | Valencia   | | ss  | Vizcaya   | | za  | Zaragoza    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


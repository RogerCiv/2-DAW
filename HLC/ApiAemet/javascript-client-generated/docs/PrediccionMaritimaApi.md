# AemetOpenData.PrediccionMaritimaApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prediccinMartimaCostera_**](PrediccionMaritimaApi.md#prediccinMartimaCostera_) | **GET** /api/prediccion/maritima/costera/costa/{costa} | Predicción marítima costera.
[**prediccinMartimaDeAltaMar_**](PrediccionMaritimaApi.md#prediccinMartimaDeAltaMar_) | **GET** /api/prediccion/maritima/altamar/area/{area} | Predicción marítima de alta mar.


<a name="prediccinMartimaCostera_"></a>
# **prediccinMartimaCostera_**
> Model200 prediccinMartimaCostera_(costa)

Predicción marítima costera.

Predicción para un periodo de 24 horas de las condiciones meteorológicas para la zona costera pasada por parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionMaritimaApi();

var costa = "costa_example"; // String |  | Código | Área Costera | |----------|----------| | 42 | Costa de Andalucía Occidental y Ceuta   | | 47  | Costa de Andalucía Oriental y Melilla   | | 41  | Costa de Asturias, Cantabria y País Vasco  | | 45  | Costa de Cataluña   | | 40  | Costa de Galicia   | | 44  | Costa de Illes Balears   | | 43  | Costa de las Islas Canarias  | | 46  | Costa de Valencia y Murcia


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinMartimaCostera_(costa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **costa** | **String**|  | Código | Área Costera | |----------|----------| | 42 | Costa de Andalucía Occidental y Ceuta   | | 47  | Costa de Andalucía Oriental y Melilla   | | 41  | Costa de Asturias, Cantabria y País Vasco  | | 45  | Costa de Cataluña   | | 40  | Costa de Galicia   | | 44  | Costa de Illes Balears   | | 43  | Costa de las Islas Canarias  | | 46  | Costa de Valencia y Murcia | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinMartimaDeAltaMar_"></a>
# **prediccinMartimaDeAltaMar_**
> Model200 prediccinMartimaDeAltaMar_(area)

Predicción marítima de alta mar.

Predicción para un periodo de 24 horas de las condiciones meteorológicas para el área marítima pasada por parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionMaritimaApi();

var area = "area_example"; // String |  | Código | Área de Alta Mar | |----------|----------| | 0 | Océano Atlántico al sur de 35º N   | | 1  | Océano Atlántico al norte de 30º N   | | 2  | Mar Mediterráneo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinMartimaDeAltaMar_(area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código | Área de Alta Mar | |----------|----------| | 0 | Océano Atlántico al sur de 35º N   | | 1  | Océano Atlántico al norte de 30º N   | | 2  | Mar Mediterráneo | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


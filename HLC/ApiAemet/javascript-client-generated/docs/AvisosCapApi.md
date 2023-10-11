# AemetOpenData.AvisosCapApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**avisosDeFenmenosMeteorolgicosAdversosArchivo**](AvisosCapApi.md#avisosDeFenmenosMeteorolgicosAdversosArchivo) | **GET** /api/avisos_cap/archivo/fechaini/{fechaIniStr}/fechafin/{fechaFinStr} | Avisos de Fenómenos Meteorológicos Adversos. Archivo.
[**avisosDeFenmenosMeteorolgicosAdversosLtimo_**](AvisosCapApi.md#avisosDeFenmenosMeteorolgicosAdversosLtimo_) | **GET** /api/avisos_cap/ultimoelaborado/area/{area} | Avisos de Fenómenos Meteorológicos Adversos. Último.


<a name="avisosDeFenmenosMeteorolgicosAdversosArchivo"></a>
# **avisosDeFenmenosMeteorolgicosAdversosArchivo**
> Model200 avisosDeFenmenosMeteorolgicosAdversosArchivo(fechaIniStr, fechaFinStr)

Avisos de Fenómenos Meteorológicos Adversos. Archivo.

 Avisos de Fenómenos Meteorológicos adversos para el rango de fechas seleccionado (datos desde 18/06/2018).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.AvisosCapApi();

var fechaIniStr = "fechaIniStr_example"; // String | Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)

var fechaFinStr = "fechaFinStr_example"; // String | Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.avisosDeFenmenosMeteorolgicosAdversosArchivo(fechaIniStr, fechaFinStr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fechaIniStr** | **String**| Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC) | 
 **fechaFinStr** | **String**| Fecha Final (AAAA-MM-DDTHH:MM:SSUTC) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="avisosDeFenmenosMeteorolgicosAdversosLtimo_"></a>
# **avisosDeFenmenosMeteorolgicosAdversosLtimo_**
> Model200 avisosDeFenmenosMeteorolgicosAdversosLtimo_(area)

Avisos de Fenómenos Meteorológicos Adversos. Último.

 Últimos Avisos de Fenómenos Meteorológicos adversos elaborado para el área seleccionada.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.AvisosCapApi();

var area = "area_example"; // String |  | Código | Área | |----------|----------| | esp  | España| | 61  | Andalucía   | | 62  | Aragón   | | 63  | Asturias, Principado de  | | 64  | Ballears, Illes   | | 78  | Ceuta   | | 65  | Canarias   | | 66  | Cantabria   | | 67  | Castilla y León   | | 68  | Castilla - La Mancha   | | 69  | Cataluña   | | 77  | Comunitat Valenciana   | | 70  | Extremadura   | | 71  | Galicia   | | 72  | Madrid, Comunidad de    | | 79  | Melilla   | | 73  | Murcia, Región de   | | 74  | Navarra, Comunidad Foral de   | | 75  | País Vasco | | 76  | Rioja, La


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.avisosDeFenmenosMeteorolgicosAdversosLtimo_(area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código | Área | |----------|----------| | esp  | España| | 61  | Andalucía   | | 62  | Aragón   | | 63  | Asturias, Principado de  | | 64  | Ballears, Illes   | | 78  | Ceuta   | | 65  | Canarias   | | 66  | Cantabria   | | 67  | Castilla y León   | | 68  | Castilla - La Mancha   | | 69  | Cataluña   | | 77  | Comunitat Valenciana   | | 70  | Extremadura   | | 71  | Galicia   | | 72  | Madrid, Comunidad de    | | 79  | Melilla   | | 73  | Murcia, Región de   | | 74  | Navarra, Comunidad Foral de   | | 75  | País Vasco | | 76  | Rioja, La | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


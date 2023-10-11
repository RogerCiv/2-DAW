# AemetOpenData.PrediccionesEspecificasApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**informacionNivologica_**](PrediccionesEspecificasApi.md#informacionNivologica_) | **GET** /api/prediccion/especifica/nivologica/{area} | Información nivológica.
[**prediccinDeMontaaTiempoActual_**](PrediccionesEspecificasApi.md#prediccinDeMontaaTiempoActual_) | **GET** /api/prediccion/especifica/montaña/pasada/area/{area}/dia/{dia} | Predicción de montaña. Tiempo actual.
[**prediccinDeMontaaTiempoPasado_**](PrediccionesEspecificasApi.md#prediccinDeMontaaTiempoPasado_) | **GET** /api/prediccion/especifica/montaña/pasada/area/{area} | Predicción de montaña. Tiempo pasado.
[**prediccinDeRadiacinUltravioletaUVI_**](PrediccionesEspecificasApi.md#prediccinDeRadiacinUltravioletaUVI_) | **GET** /api/prediccion/especifica/uvi/{dia} | Predicción de radiación ultravioleta (UVI).
[**prediccinParaLasPlayasTiempoActual_**](PrediccionesEspecificasApi.md#prediccinParaLasPlayasTiempoActual_) | **GET** /api/prediccion/especifica/playa/{playa} | Predicción para las playas. Tiempo actual.
[**prediccinPorMunicipiosDiariaTiempoActual_**](PrediccionesEspecificasApi.md#prediccinPorMunicipiosDiariaTiempoActual_) | **GET** /api/prediccion/especifica/municipio/diaria/{municipio} | Predicción por municipios diaria. Tiempo actual.
[**prediccinPorMunicipiosHorariaTiempoActual_**](PrediccionesEspecificasApi.md#prediccinPorMunicipiosHorariaTiempoActual_) | **GET** /api/prediccion/especifica/municipio/horaria/{municipio} | Predicción por municipios horaria. Tiempo actual.


<a name="informacionNivologica_"></a>
# **informacionNivologica_**
> Model200 informacionNivologica_(area)

Información nivológica.

Información nivológica para la zona montañosa que se pasa como parámetro (area).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var area = "area_example"; // String |  | Código de  Área Montañosa |  Área Montañosa | |----------|----------| | 0 | Pirineo Catalán  | | 1  | Pirineo Navarro y Aragonés


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.informacionNivologica_(area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código de  Área Montañosa |  Área Montañosa | |----------|----------| | 0 | Pirineo Catalán  | | 1  | Pirineo Navarro y Aragonés | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinDeMontaaTiempoActual_"></a>
# **prediccinDeMontaaTiempoActual_**
> Model200 prediccinDeMontaaTiempoActual_(area, dia)

Predicción de montaña. Tiempo actual.

Predicción meteorológica para la zona montañosa que se pasa como parámetro (area) con validez para el día (día).  Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var area = "area_example"; // String |  | Código de Área Montañosa | Área Montañosa | |----------|----------| | peu1 | Picos de Europa   | | nav1  | Pirineo Navarro   | | arn1  | Pirineo Aragonés  | | cat1  | Pirineo Catalán   | | rio1  | Ibérica Riojana   | | arn2  | Ibérica Aragonesa   | | mad2  | Sierras de Guadarrama y Somosierra  | | gre1  | Sierra de Gredos   | | nev1  | Sierra Nevada

var dia = "dia_example"; // String |  | Código de día | Día | |----------|----------| | 0 | día actual  | | 1  | d+1 (mañana)   | | 2  | d+2 (pasado mañana)  | | 3  | d+3 (siguente a pasado mañana)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinDeMontaaTiempoActual_(area, dia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código de Área Montañosa | Área Montañosa | |----------|----------| | peu1 | Picos de Europa   | | nav1  | Pirineo Navarro   | | arn1  | Pirineo Aragonés  | | cat1  | Pirineo Catalán   | | rio1  | Ibérica Riojana   | | arn2  | Ibérica Aragonesa   | | mad2  | Sierras de Guadarrama y Somosierra  | | gre1  | Sierra de Gredos   | | nev1  | Sierra Nevada | 
 **dia** | **String**|  | Código de día | Día | |----------|----------| | 0 | día actual  | | 1  | d+1 (mañana)   | | 2  | d+2 (pasado mañana)  | | 3  | d+3 (siguente a pasado mañana) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinDeMontaaTiempoPasado_"></a>
# **prediccinDeMontaaTiempoPasado_**
> Model200 prediccinDeMontaaTiempoPasado_(area)

Predicción de montaña. Tiempo pasado.

Breve resumen con lo más significativo de las condiciones meteorológicas registradas en la zona de montaña que se pasa como parámetro (area) en las últimas 24-36 horas.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var area = "area_example"; // String |  | Código de Área Montañosa | Área Montañosa | |----------|----------| | peu1 | Picos de Europa   | | nav1  | Pirineo Navarro   | | arn1  | Pirineo Aragonés  | | cat1  | Pirineo Catalán   | | rio1  | Ibérica Riojana   | | arn2  | Ibérica Aragonesa   | | mad2  | Sierras de Guadarrama y Somosierra  | | gre1  | Sierra de Gredos   | | nev1  | Sierra Nevada


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinDeMontaaTiempoPasado_(area, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **area** | **String**|  | Código de Área Montañosa | Área Montañosa | |----------|----------| | peu1 | Picos de Europa   | | nav1  | Pirineo Navarro   | | arn1  | Pirineo Aragonés  | | cat1  | Pirineo Catalán   | | rio1  | Ibérica Riojana   | | arn2  | Ibérica Aragonesa   | | mad2  | Sierras de Guadarrama y Somosierra  | | gre1  | Sierra de Gredos   | | nev1  | Sierra Nevada | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinDeRadiacinUltravioletaUVI_"></a>
# **prediccinDeRadiacinUltravioletaUVI_**
> Model200 prediccinDeRadiacinUltravioletaUVI_(dia)

Predicción de radiación ultravioleta (UVI).

 Predicción de Índice de radiación UV máximo en condiciones de cielo despejado para el día seleccionado.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var dia = "dia_example"; // String |  | Código de día | Día | |----------|----------| | 0 | día actual  | | 1  | d+1 (mañana)   | | 2  | d+2 (pasado mañana)  | | 3  | d+3 (dentro de 3 días) | | 4  | d+4 (dentro de 4 días)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinDeRadiacinUltravioletaUVI_(dia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dia** | **String**|  | Código de día | Día | |----------|----------| | 0 | día actual  | | 1  | d+1 (mañana)   | | 2  | d+2 (pasado mañana)  | | 3  | d+3 (dentro de 3 días) | | 4  | d+4 (dentro de 4 días) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinParaLasPlayasTiempoActual_"></a>
# **prediccinParaLasPlayasTiempoActual_**
> Model200 prediccinParaLasPlayasTiempoActual_(playa)

Predicción para las playas. Tiempo actual.

La predicción diaria de la playa que se pasa como parámetro. Establece el estado de nubosidad para unas horas determinadas, las 11 y las 17 hora oficial. Se analiza también si se espera precipitación en el entorno de esas horas, entre las 08 y las 14 horas y entre las 14 y 20 horas.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var playa = "playa_example"; // String | Código de playa   http://www.aemet.es/documentos/es/eltiempo/prediccion/playas/Playas_codigos.csv


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinParaLasPlayasTiempoActual_(playa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playa** | **String**| Código de playa   http://www.aemet.es/documentos/es/eltiempo/prediccion/playas/Playas_codigos.csv | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinPorMunicipiosDiariaTiempoActual_"></a>
# **prediccinPorMunicipiosDiariaTiempoActual_**
> Model200 prediccinPorMunicipiosDiariaTiempoActual_(municipio)

Predicción por municipios diaria. Tiempo actual.

Predicción para el municipio que se pasa como parámetro (municipio). Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var municipio = "municipio_example"; // String | Código de municipio   http://www.ine.es/daco/daco42/codmun/codmunmapa.htm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinPorMunicipiosDiariaTiempoActual_(municipio, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipio** | **String**| Código de municipio   http://www.ine.es/daco/daco42/codmun/codmunmapa.htm | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinPorMunicipiosHorariaTiempoActual_"></a>
# **prediccinPorMunicipiosHorariaTiempoActual_**
> Model200 prediccinPorMunicipiosHorariaTiempoActual_(municipio)

Predicción por municipios horaria. Tiempo actual.

Predicción horaria para el municipio que se pasa como parámetro (municipio). Presenta la información de hora en hora hasta 48 horas.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesEspecificasApi();

var municipio = "municipio_example"; // String | Código de municipio  http://www.ine.es/daco/daco42/codmun/codmunmapa.htm


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinPorMunicipiosHorariaTiempoActual_(municipio, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipio** | **String**| Código de municipio  http://www.ine.es/daco/daco42/codmun/codmunmapa.htm | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


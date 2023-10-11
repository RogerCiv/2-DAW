# AemetOpenData.ValoresClimatologicosApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climatologasDiarias1**](ValoresClimatologicosApi.md#climatologasDiarias1) | **GET** /api/valores/climatologicos/diarios/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/todasestaciones | Climatologías diarias.
[**climatologasDiarias_**](ValoresClimatologicosApi.md#climatologasDiarias_) | **GET** /api/valores/climatologicos/diarios/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/estacion/{idema} | Climatologías diarias.
[**climatologasMensualesAnuales_**](ValoresClimatologicosApi.md#climatologasMensualesAnuales_) | **GET** /api/valores/climatologicos/mensualesanuales/datos/anioini/{anioIniStr}/aniofin/{anioFinStr}/estacion/{idema} | Climatologías mensuales anuales.
[**climatologasNormales19812010_**](ValoresClimatologicosApi.md#climatologasNormales19812010_) | **GET** /api/valores/climatologicos/normales/estacion/{idema} | Climatologías normales (1981-2010).
[**estacionesPorIndicativo_**](ValoresClimatologicosApi.md#estacionesPorIndicativo_) | **GET** /api/valores/climatologicos/inventarioestaciones/estaciones/{estaciones} | Estaciones por indicativo.
[**inventarioDeEstacionesValoresClimatolgicos_**](ValoresClimatologicosApi.md#inventarioDeEstacionesValoresClimatolgicos_) | **GET** /api/valores/climatologicos/inventarioestaciones/todasestaciones | Inventario de estaciones (valores climatológicos).
[**valoresExtremos_**](ValoresClimatologicosApi.md#valoresExtremos_) | **GET** /api/valores/climatologicos/valoresextremos/parametro/{parametro}/estacion/{idema} | Valores extremos.


<a name="climatologasDiarias1"></a>
# **climatologasDiarias1**
> Model200 climatologasDiarias1(fechaIniStr, fechaFinStr)

Climatologías diarias.

Valores climatológicos de todas las estaciones para el rango de fechas seleccionado. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var fechaIniStr = "fechaIniStr_example"; // String | Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)

var fechaFinStr = "fechaFinStr_example"; // String | Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.climatologasDiarias1(fechaIniStr, fechaFinStr, callback);
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

<a name="climatologasDiarias_"></a>
# **climatologasDiarias_**
> Model200 climatologasDiarias_(fechaIniStr, fechaFinStr, idema)

Climatologías diarias.

Valores climatológicos para el rango de fechas y la estación seleccionada. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var fechaIniStr = "fechaIniStr_example"; // String | Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)

var fechaFinStr = "fechaFinStr_example"; // String | Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)

var idema = "idema_example"; // String | Indicativo climatológico de la EMA. Puede introducir varios indicativos separados por comas (,)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.climatologasDiarias_(fechaIniStr, fechaFinStr, idema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fechaIniStr** | **String**| Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC) | 
 **fechaFinStr** | **String**| Fecha Final (AAAA-MM-DDTHH:MM:SSUTC) | 
 **idema** | **String**| Indicativo climatológico de la EMA. Puede introducir varios indicativos separados por comas (,) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="climatologasMensualesAnuales_"></a>
# **climatologasMensualesAnuales_**
> Model200 climatologasMensualesAnuales_(anioIniStr, anioFinStr, idema)

Climatologías mensuales anuales.

Valores medios mensuales y anuales de los datos climatológicos para la estación y el periodo de años pasados por parámetro. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var anioIniStr = "anioIniStr_example"; // String | Año Inicial (AAAA)

var anioFinStr = "anioFinStr_example"; // String | Año Final (AAAA)

var idema = "idema_example"; // String | Indicativo climatológico de la EMA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.climatologasMensualesAnuales_(anioIniStr, anioFinStr, idema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anioIniStr** | **String**| Año Inicial (AAAA) | 
 **anioFinStr** | **String**| Año Final (AAAA) | 
 **idema** | **String**| Indicativo climatológico de la EMA | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="climatologasNormales19812010_"></a>
# **climatologasNormales19812010_**
> Model200 climatologasNormales19812010_(idema)

Climatologías normales (1981-2010).

Valores climatológicos normales (periodo 1981-2010) para la estación pasada por parámetro. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var idema = "idema_example"; // String | Indicativo climatológico de la EMA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.climatologasNormales19812010_(idema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idema** | **String**| Indicativo climatológico de la EMA | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="estacionesPorIndicativo_"></a>
# **estacionesPorIndicativo_**
> Model200 estacionesPorIndicativo_(estaciones)

Estaciones por indicativo.

Características de la estación climatológica pasada por parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var estaciones = "estaciones_example"; // String | Listado de indicativos climatológicos (id1,id2,id3,...,idn)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.estacionesPorIndicativo_(estaciones, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estaciones** | **String**| Listado de indicativos climatológicos (id1,id2,id3,...,idn) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="inventarioDeEstacionesValoresClimatolgicos_"></a>
# **inventarioDeEstacionesValoresClimatolgicos_**
> Model200 inventarioDeEstacionesValoresClimatolgicos_()

Inventario de estaciones (valores climatológicos).

Inventario con las características de todas las estaciones climatológicas. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inventarioDeEstacionesValoresClimatolgicos_(callback);
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

<a name="valoresExtremos_"></a>
# **valoresExtremos_**
> Model200 valoresExtremos_(parametro, idema)

Valores extremos.

Valores extremos para la estación y la variable (precipitación, temperatura y viento) pasadas por parámetro. Periodicidad: 1 vez al día.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.ValoresClimatologicosApi();

var parametro = "parametro_example"; // String |  | Código | Parámetro Meteorológico | |----------|----------| | P  | Precipitación   | | T  | Temperatura   | | V  | Viento 

var idema = "idema_example"; // String | Indicativo climatológico de la EMA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.valoresExtremos_(parametro, idema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parametro** | **String**|  | Código | Parámetro Meteorológico | |----------|----------| | P  | Precipitación   | | T  | Temperatura   | | V  | Viento  | 
 **idema** | **String**| Indicativo climatológico de la EMA | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


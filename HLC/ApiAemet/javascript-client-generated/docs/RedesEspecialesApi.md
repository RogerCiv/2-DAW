# AemetOpenData.RedesEspecialesApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contenidoTotalDeOzonoTiempoActual_**](RedesEspecialesApi.md#contenidoTotalDeOzonoTiempoActual_) | **GET** /api/red/especial/ozono | Contenido total de ozono. Tiempo actual.
[**datosDeContaminacinDeFondoTiempoActual_**](RedesEspecialesApi.md#datosDeContaminacinDeFondoTiempoActual_) | **GET** /api/red/especial/contaminacionfondo/estacion/{nombre_estacion} | Datos de contaminación de fondo. Tiempo actual.
[**datosDeRadiacinGlobalDirectaODifusaTiempoActual_**](RedesEspecialesApi.md#datosDeRadiacinGlobalDirectaODifusaTiempoActual_) | **GET** /api/red/especial/radiacion | Datos de radiación global, directa o difusa. Tiempo actual.
[**perfilesVerticalesDeOzonoTiempoActual_**](RedesEspecialesApi.md#perfilesVerticalesDeOzonoTiempoActual_) | **GET** /api/red/especial/perfilozono/estacion/{estacion} | Perfiles verticales de ozono. Tiempo actual.


<a name="contenidoTotalDeOzonoTiempoActual_"></a>
# **contenidoTotalDeOzonoTiempoActual_**
> Model200 contenidoTotalDeOzonoTiempoActual_()

Contenido total de ozono. Tiempo actual.

Dato medio diario de contenido total de ozono. Cada 24 h (actualmente, en fines de semana, festivos y vacaciones no se genera por la falta de personal en el Centro Radiométrico Nacional).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedesEspecialesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contenidoTotalDeOzonoTiempoActual_(callback);
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

<a name="datosDeContaminacinDeFondoTiempoActual_"></a>
# **datosDeContaminacinDeFondoTiempoActual_**
> Model200 datosDeContaminacinDeFondoTiempoActual_(nombreEstacion)

Datos de contaminación de fondo. Tiempo actual.

Ficheros diarios con datos diezminutales de la estación de la red de contaminación de fondo EMEP/VAG/CAMP pasada por parámetro, de temperatura, presión, humedad, viento (dirección y velocidad), radiación global, precipitación y 4 componentes químicos: O3,SO2,NO,NO2 y PM10. Los datos se encuentran en formato FINN (propio del Ministerio de Medio Ambiente). Periodicidad: cada hora.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedesEspecialesApi();

var nombreEstacion = "nombreEstacion_example"; // String |  | Código | Estación de la Red EMEP | |----------|----------| | 11  | Barcarrota (Badajoz)   | | 10  | Cabo de Creus (Girona)   | | 09  | Campisábalos (Guadalajara)   | | 17  | Doñana (Huelva)  | | 14  | Els Torms (Lleida)   | | 06  | Mahón (Illes Balears)   | | 08  | Niembro-Llanes (Asturias)   | | 05  | Noia (A Coruña)   | | 16  | O Saviñao (Lugo)   | | 13  | Peñausende (Zamora)   | | 01  | San Pablo de los Montes (Toledo)   | | 07  | Víznar (Granada)   | | 12  | Zarra (Valencia) 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.datosDeContaminacinDeFondoTiempoActual_(nombreEstacion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombreEstacion** | **String**|  | Código | Estación de la Red EMEP | |----------|----------| | 11  | Barcarrota (Badajoz)   | | 10  | Cabo de Creus (Girona)   | | 09  | Campisábalos (Guadalajara)   | | 17  | Doñana (Huelva)  | | 14  | Els Torms (Lleida)   | | 06  | Mahón (Illes Balears)   | | 08  | Niembro-Llanes (Asturias)   | | 05  | Noia (A Coruña)   | | 16  | O Saviñao (Lugo)   | | 13  | Peñausende (Zamora)   | | 01  | San Pablo de los Montes (Toledo)   | | 07  | Víznar (Granada)   | | 12  | Zarra (Valencia)  | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="datosDeRadiacinGlobalDirectaODifusaTiempoActual_"></a>
# **datosDeRadiacinGlobalDirectaODifusaTiempoActual_**
> Model200 datosDeRadiacinGlobalDirectaODifusaTiempoActual_()

Datos de radiación global, directa o difusa. Tiempo actual.

Datos horarios (HORA SOLAR VERDADERA) acumulados de radiación  global, directa, difusa e infrarroja, y datos semihorarios  (HORA SOLAR VERDADERA) acumulados de radiación ultravioleta eritemática.Datos diarios acumulados  de radiación global, directa, difusa, ultravioleta eritemática e infrarroja. Periodicidad: Cada 24h (actualmente en fines de semana, festivos y vacaciones, no se genera por la ausencia de personal en el Centro Radiométrico Nacional).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedesEspecialesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.datosDeRadiacinGlobalDirectaODifusaTiempoActual_(callback);
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

<a name="perfilesVerticalesDeOzonoTiempoActual_"></a>
# **perfilesVerticalesDeOzonoTiempoActual_**
> Model200 perfilesVerticalesDeOzonoTiempoActual_(estacion)

Perfiles verticales de ozono. Tiempo actual.

Perfil Vertical de Ozono de la estación pasada por parámetro. Periodicidad: cada 7 días.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.RedesEspecialesApi();

var estacion = "estacion_example"; // String |  | Código | Estación | |----------|----------| | canarias  | Izaña   | | peninsula  | Madrid   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perfilesVerticalesDeOzonoTiempoActual_(estacion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estacion** | **String**|  | Código | Estación | |----------|----------| | canarias  | Izaña   | | peninsula  | Madrid    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


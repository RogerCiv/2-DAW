# AemetOpenData.PrediccionesNormalizadasTextoApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prediccinCCAAHoyArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAHoyArchivo_) | **GET** /api/prediccion/ccaa/hoy/{ccaa}/elaboracion/{fecha} | Predicción CCAA hoy. Archivo.
[**prediccinCCAAHoyTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAHoyTiempoActual_) | **GET** /api/prediccion/ccaa/hoy/{ccaa} | Predicción CCAA hoy. Tiempo actual.
[**prediccinCCAAMaanaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAMaanaArchivo_) | **GET** /api/prediccion/ccaa/manana/{ccaa}/elaboracion/{fecha} | Predicción CCAA mañana. Archivo.
[**prediccinCCAAMaanaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAMaanaTiempoActual_) | **GET** /api/prediccion/ccaa/manana/{ccaa} | Predicción CCAA mañana. Tiempo actual.
[**prediccinCCAAMedioPlazoArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAMedioPlazoArchivo_) | **GET** /api/prediccion/ccaa/medioplazo/{ccaa}/elaboracion/{fecha} | Predicción CCAA medio plazo. Archivo.
[**prediccinCCAAMedioPlazoTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAMedioPlazoTiempoActual_) | **GET** /api/prediccion/ccaa/medioplazo/{ccaa} | Predicción CCAA medio plazo. Tiempo actual.
[**prediccinCCAAPasadoMaanaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAPasadoMaanaArchivo_) | **GET** /api/prediccion/ccaa/pasadomanana/{ccaa}/elaboracion/{fecha} | Predicción CCAA pasado mañana. Archivo.
[**prediccinCCAAPasadoMaanaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinCCAAPasadoMaanaTiempoActual_) | **GET** /api/prediccion/ccaa/pasadomanana/{ccaa} | Predicción CCAA pasado mañana. Tiempo actual.
[**prediccinNacionalHoyArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalHoyArchivo_) | **GET** /api/prediccion/nacional/hoy/elaboracion/{fecha} | Predicción nacional hoy. Archivo.
[**prediccinNacionalHoyTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalHoyTiempoActual_) | **GET** /api/prediccion/nacional/hoy | Predicción nacional hoy. Última elaborada.
[**prediccinNacionalMaanaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalMaanaArchivo_) | **GET** /api/prediccion/nacional/manana/elaboracion/{fecha} | Predicción nacional mañana. Archivo.
[**prediccinNacionalMaanaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalMaanaTiempoActual_) | **GET** /api/prediccion/nacional/manana | Predicción nacional mañana. Tiempo actual.
[**prediccinNacionalMedioPlazoArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalMedioPlazoArchivo_) | **GET** /api/prediccion/nacional/medioplazo/elaboracion/{fecha} | Predicción nacional medio plazo. Archivo.
[**prediccinNacionalMedioPlazoTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalMedioPlazoTiempoActual_) | **GET** /api/prediccion/nacional/medioplazo | Predicción nacional medio plazo. Tiempo actual.
[**prediccinNacionalPasadoMaanaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalPasadoMaanaArchivo_) | **GET** /api/prediccion/nacional/pasadomanana/elaboracion/{fecha} | Predicción nacional pasado mañana. Archivo.
[**prediccinNacionalPasadoMaanaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalPasadoMaanaTiempoActual_) | **GET** /api/prediccion/nacional/pasadomanana | Predicción nacional pasado mañana. Tiempo actual.
[**prediccinNacionalTendenciaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalTendenciaArchivo_) | **GET** /api/prediccion/nacional/tendencia/elaboracion/{fecha} | Predicción nacional tendencia. Archivo.
[**prediccinNacionalTendenciaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinNacionalTendenciaTiempoActual_) | **GET** /api/prediccion/nacional/tendencia | Predicción nacional tendencia. Tiempo actual.
[**prediccinProvinciaHoyArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinProvinciaHoyArchivo_) | **GET** /api/prediccion/provincia/hoy/{provincia}/elaboracion/{fecha} | Predicción provincia hoy. Archivo.
[**prediccinProvinciaHoyTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinProvinciaHoyTiempoActual_) | **GET** /api/prediccion/provincia/hoy/{provincia} | Predicción provincia hoy. Tiempo actual.
[**prediccinProvinciaMaanaArchivo_**](PrediccionesNormalizadasTextoApi.md#prediccinProvinciaMaanaArchivo_) | **GET** /api/prediccion/provincia/manana/{provincia}/elaboracion/{fecha} | Predicción provincia mañana. Archivo.
[**prediccinProvinciaMaanaTiempoActual_**](PrediccionesNormalizadasTextoApi.md#prediccinProvinciaMaanaTiempoActual_) | **GET** /api/prediccion/provincia/manana/{provincia} | Predicción provincia mañana. Tiempo actual.


<a name="prediccinCCAAHoyArchivo_"></a>
# **prediccinCCAAHoyArchivo_**
> Model200 prediccinCCAAHoyArchivo_(ccaa, fecha)

Predicción CCAA hoy. Archivo.

Predicción para la comunidad autónoma que se pasa como parámetro (ccaa) con validez para el día de fecha de elaboración que se pasa como parámetro (fecha). Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAHoyArchivo_(ccaa, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAHoyTiempoActual_"></a>
# **prediccinCCAAHoyTiempoActual_**
> Model200 prediccinCCAAHoyTiempoActual_(ccaa)

Predicción CCAA hoy. Tiempo actual.

Predicción para la CCAA que se pasa como parámetro con validez para mismo día que la fecha de petición. En el caso de que en la fecha de petición este producto todavía no se hubiera elaborado, se retornará el último elaborado. Actualización continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAHoyTiempoActual_(ccaa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAMaanaArchivo_"></a>
# **prediccinCCAAMaanaArchivo_**
> Model200 prediccinCCAAMaanaArchivo_(ccaa, fecha)

Predicción CCAA mañana. Archivo.

Predicción para la comunidad autónoma que se pasa como parámetro (ccaa) con validez para el día siguiente a la fecha de elaboración que se pasa como parámetro (fecha). Periodicidad de actualización. continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAMaanaArchivo_(ccaa, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAMaanaTiempoActual_"></a>
# **prediccinCCAAMaanaTiempoActual_**
> Model200 prediccinCCAAMaanaTiempoActual_(ccaa)

Predicción CCAA mañana. Tiempo actual.

Predicción para la comunidad autónoma que se pasa como parámetro para el día siguiente a la fecha de la petición. En el caso de el producto no se hubiera elaborado todavía en la fecha de petición se retornará el último producto elaborado. Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAMaanaTiempoActual_(ccaa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAMedioPlazoArchivo_"></a>
# **prediccinCCAAMedioPlazoArchivo_**
> Model200 prediccinCCAAMedioPlazoArchivo_(ccaa, fecha)

Predicción CCAA medio plazo. Archivo.

Predicción de mediio plazo para la comunidad autónoma que se pasa como parámetro (ccaa) a partir de la fecha de elaboración que se pasa como parámetro (fecha). Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAMedioPlazoArchivo_(ccaa, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAMedioPlazoTiempoActual_"></a>
# **prediccinCCAAMedioPlazoTiempoActual_**
> Model200 prediccinCCAAMedioPlazoTiempoActual_(ccaa)

Predicción CCAA medio plazo. Tiempo actual.

Predicción para la comunidad autónoma que se pasa como parámetro (ccaa) y con validez para el medio plazo a partir de la fecha de petición. En el caso de que en el fecha de la petición no se hubiera generado aún el producto, se retornará el última elaborado. Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAMedioPlazoTiempoActual_(ccaa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAPasadoMaanaArchivo_"></a>
# **prediccinCCAAPasadoMaanaArchivo_**
> Model200 prediccinCCAAPasadoMaanaArchivo_(ccaa, fecha)

Predicción CCAA pasado mañana. Archivo.

Predicción para la comunidad autónoma que se pasa como parámetro (ccaa) y validez para pasado mañana a partir de la fecha de elaboración que se pasa como parámetro (fecha). Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAPasadoMaanaArchivo_(ccaa, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinCCAAPasadoMaanaTiempoActual_"></a>
# **prediccinCCAAPasadoMaanaTiempoActual_**
> Model200 prediccinCCAAPasadoMaanaTiempoActual_(ccaa)

Predicción CCAA pasado mañana. Tiempo actual.

Predicción para la comunidad autónoma que se pasa como parámetro (ccaa) y validez para el medio plazo a partir de la fecha de la petición. En el caso de que en la fecha de la petición dicho producto aún no se hubiera generado retornará el último de este tipo que se hubiera generado.  Periodicidad de actualización: continuamente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var ccaa = "ccaa_example"; // String |  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La   


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinCCAAPasadoMaanaTiempoActual_(ccaa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ccaa** | **String**|  | Código de CCAA | CCAA | |----------|----------| | and  | Andalucía   | | arn  | Aragón   | | ast  | Astrrias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La    | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalHoyArchivo_"></a>
# **prediccinNacionalHoyArchivo_**
> Model200 prediccinNacionalHoyArchivo_(fecha)

Predicción nacional hoy. Archivo.

Predicción nacional para el día correspondiente a la fecha que se pasa como parámetro en en formato texto. Actualización diaria. Hay días en los que este producto no se realiza. En ese caso se devuelve un 404 producto no existente.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var fecha = "fecha_example"; // String | Fecha en formato (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalHoyArchivo_(fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Fecha en formato (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalHoyTiempoActual_"></a>
# **prediccinNacionalHoyTiempoActual_**
> Model200 prediccinNacionalHoyTiempoActual_()

Predicción nacional hoy. Última elaborada.

Predicción nacional para el día actual a la fecha de elaboración en formato texto. Actualización diaria. Hay días en los que este producto no se realiza. En ese caso se devuelve la predicción nacional última que se elaboró.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalHoyTiempoActual_(callback);
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

<a name="prediccinNacionalMaanaArchivo_"></a>
# **prediccinNacionalMaanaArchivo_**
> Model200 prediccinNacionalMaanaArchivo_(fecha)

Predicción nacional mañana. Archivo.

Predicción nacional para el día siguiente a la fecha de elaboración. En este caso la fecha de elaboración es la fecha que se pasa como parámetro. Actualización diaria.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var fecha = "fecha_example"; // String | Día (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalMaanaArchivo_(fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Día (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalMaanaTiempoActual_"></a>
# **prediccinNacionalMaanaTiempoActual_**
> Model200 prediccinNacionalMaanaTiempoActual_()

Predicción nacional mañana. Tiempo actual.

Predicción nacional para el día siguiente a la fecha de elaboración. En este caso la fecha de elaboración es el día actual. Actualización diaria. En el caso de que en el día actual  todavía no se haya elaborado se devolverá el último producto de predicción nacional para mañana elaborado.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalMaanaTiempoActual_(callback);
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

<a name="prediccinNacionalMedioPlazoArchivo_"></a>
# **prediccinNacionalMedioPlazoArchivo_**
> Model200 prediccinNacionalMedioPlazoArchivo_(fecha)

Predicción nacional medio plazo. Archivo.

Predicción nacional para el medio plazo siguiente a la fecha de elaboración. En este caso, la fecha de elaboración es la fecha que se pasa como parámetro. Actualización diaria.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var fecha = "fecha_example"; // String | Día (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalMedioPlazoArchivo_(fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Día (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalMedioPlazoTiempoActual_"></a>
# **prediccinNacionalMedioPlazoTiempoActual_**
> Model200 prediccinNacionalMedioPlazoTiempoActual_()

Predicción nacional medio plazo. Tiempo actual.

Predicción nacional para medio plazo siguiente a la fecha de elaboración. En este caso la fecha de elaboración es el día actual. Actualización diaria. En el caso de que en el día actual  todavía no se haya elaborado se devolverá el último producto de predicción nacional para medio plazo elaborado.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalMedioPlazoTiempoActual_(callback);
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

<a name="prediccinNacionalPasadoMaanaArchivo_"></a>
# **prediccinNacionalPasadoMaanaArchivo_**
> Model200 prediccinNacionalPasadoMaanaArchivo_(fecha)

Predicción nacional pasado mañana. Archivo.

Predicción nacional para pasado mañana siguiente a la fecha de elaboración. En este caso, la fecha de elaboración es la fecha que se pasa como parámetro. Actualización diaria.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var fecha = "fecha_example"; // String | Día (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalPasadoMaanaArchivo_(fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Día (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalPasadoMaanaTiempoActual_"></a>
# **prediccinNacionalPasadoMaanaTiempoActual_**
> Model200 prediccinNacionalPasadoMaanaTiempoActual_()

Predicción nacional pasado mañana. Tiempo actual.

Predicción nacional para pasado mañana siguiente a la fecha de elaboración. En este caso la fecha de elaboración es el día actual. Actualización diaria. En el caso de que en el día actual  todavía no se haya elaborado se devolverá el último producto de predicción nacional para pasado mañana elaborado.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalPasadoMaanaTiempoActual_(callback);
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

<a name="prediccinNacionalTendenciaArchivo_"></a>
# **prediccinNacionalTendenciaArchivo_**
> Model200 prediccinNacionalTendenciaArchivo_(fecha)

Predicción nacional tendencia. Archivo.

Predicción nacional para tendencia siguiente a la fecha de elaboración. En este caso, la fecha de elaboración es la fecha que se pasa como parámetro. Actualización diaria.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var fecha = "fecha_example"; // String | Día (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalTendenciaArchivo_(fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Día (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinNacionalTendenciaTiempoActual_"></a>
# **prediccinNacionalTendenciaTiempoActual_**
> Model200 prediccinNacionalTendenciaTiempoActual_()

Predicción nacional tendencia. Tiempo actual.

Predicción nacional para tendencia siguiente a la fecha de elaboración. En este caso la fecha de elaboración es el día actual. Actualización diaria. En el caso de que en el día actual  todavía no se haya elaborado se devolverá el último producto de predicción nacional para tendencia elaborado.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinNacionalTendenciaTiempoActual_(callback);
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

<a name="prediccinProvinciaHoyArchivo_"></a>
# **prediccinProvinciaHoyArchivo_**
> Model200 prediccinProvinciaHoyArchivo_(provincia, fecha)

Predicción provincia hoy. Archivo.

Predicción del día siguiente a la fecha que se pasa como parámetro para la provincia que se pasa como parámetro. Actualización continua y fija a las 14:00 Hora Oficial Peninsular del día que se pasa como parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var provincia = "provincia_example"; // String |  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | | 

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinProvinciaHoyArchivo_(provincia, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provincia** | **String**|  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | |  | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinProvinciaHoyTiempoActual_"></a>
# **prediccinProvinciaHoyTiempoActual_**
> Model200 prediccinProvinciaHoyTiempoActual_(provincia)

Predicción provincia hoy. Tiempo actual.

Predicción del día actual para la provincia que se pasa como parámetro. En el caso de que este producto no se haya elaborado todavía en el día actual, se retorna el último elaborado. Actualización continua y fija a las 14:00 Hora Oficial Peninsular.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var provincia = "provincia_example"; // String |  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinProvinciaHoyTiempoActual_(provincia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provincia** | **String**|  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | |  | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinProvinciaMaanaArchivo_"></a>
# **prediccinProvinciaMaanaArchivo_**
> Model200 prediccinProvinciaMaanaArchivo_(provincia, fecha)

Predicción provincia mañana. Archivo.

Predicción del día siguiente a la fecha que se pasa como parámetro para la provincia que se pasa como parámetro. Actualización continua y fija a las 14:00 Hora Oficial Peninsular del día que se pasa como parámetro.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var provincia = "provincia_example"; // String |  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | | 

var fecha = "fecha_example"; // String | Día de elaboración (AAAA-MM-DD)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinProvinciaMaanaArchivo_(provincia, fecha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provincia** | **String**|  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | |  | 
 **fecha** | **String**| Día de elaboración (AAAA-MM-DD) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prediccinProvinciaMaanaTiempoActual_"></a>
# **prediccinProvinciaMaanaTiempoActual_**
> Model200 prediccinProvinciaMaanaTiempoActual_(provincia)

Predicción provincia mañana. Tiempo actual.

Predicción del día siguiente para la provincia que se pasa como parámetro. En el caso de que este producto no se haya elaborado todavía en el día actual, se retorna el último elaborado. Actualización continua y fija a las 14:00 Hora Oficial Peninsular.

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.PrediccionesNormalizadasTextoApi();

var provincia = "provincia_example"; // String |  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prediccinProvinciaMaanaTiempoActual_(provincia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provincia** | **String**|  | Código Provincia | Provincia | |----------|----------| | 01  | Araba/Álaba   | | 01  | Araba/Álava   | | 02  | Albacete   | | 03  | Alacant/Alicante  | | 04  | Almería   | | 33  | Asturias   | | 05  | Ávila   | | 06  | Badajoz   | | 07  | Illes Ballears   | | 08  | Barcelona   | | 48  | Bizkaia   | | 09  | Burgos   | | 10  | Cáceres   | | 11  | Cádiz   | | 39  | Cantabria   | | 12  | Castelló/Castellón   | | 51  | Ceuta   | | 13  | Ciudad Real   | | 14  | Córdoba   | | 15  | A Coruña   | | 16  | Cuenca   | | 17  | Girona   | | 18  | Granada   | | 19  | Guadalajara   | | 20  | Gipuzkoa   | | 21  | Huelva   | | 22  | Huesca   | | 23  | Jaén   | | 24  | León   | | 25  | Lleida   | | 27  | Lugo   | | 28  | Madrid   | | 29  | Málaga   | | 52  | Melilla   | | 30  | Murcia   | | 31  | Navarra   | | 32  | Oursense   | | 34  | Palencia   | | 35  | Las Palmas   | | 36  | Pontevedra   | | 26  | La Rioja   | | 37  | Salamanca   | | 38  | Santa Cruz de Tenerife   | | 40  | Segovia   | | 41  | Sevilla   | | 42  | Soria   | | 43  | Tarragona   | | 44  | Teruel   | | 45  | Toledo   | | 46  | València/Valencia   | | 47  | Valladolid   | | 49  | Zamora   | | 50  | Zaragoza   | |  | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


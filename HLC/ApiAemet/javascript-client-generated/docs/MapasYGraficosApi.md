# AemetOpenData.MapasYGraficosApi

All URIs are relative to *https://opendata.aemet.es/opendata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapasDeAnlisisLtimaPasada_**](MapasYGraficosApi.md#mapasDeAnlisisLtimaPasada_) | **GET** /api/mapasygraficos/analisis | Mapas de análisis. Última pasada.
[**mapasSignificativosTiempoActual1**](MapasYGraficosApi.md#mapasSignificativosTiempoActual1) | **GET** /api/mapasygraficos/mapassignificativos/{ambito}/{dia} | Mapas significativos. Tiempo actual.
[**mapasSignificativosTiempoActual_**](MapasYGraficosApi.md#mapasSignificativosTiempoActual_) | **GET** /api/mapasygraficos/mapassignificativos/fecha/{fecha}/{ambito}/{dia} | Mapas significativos. Tiempo actual.


<a name="mapasDeAnlisisLtimaPasada_"></a>
# **mapasDeAnlisisLtimaPasada_**
> Model200 mapasDeAnlisisLtimaPasada_()

Mapas de análisis. Última pasada.

Estos mapas muestran la configuración de la presión en superficie usando isobaras (lineas de igual presión), áreas de alta (A, a) y baja (B, b) presión y los frentes en Europa y el Atlántico Norte.El mapa de análisis presenta el estado de la atmósfera a la hora correspondiente y los fenómenos más relevantes observados en España. Periodicidad de actualización: cada 12 horas (00, 12).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.MapasYGraficosApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapasDeAnlisisLtimaPasada_(callback);
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

<a name="mapasSignificativosTiempoActual1"></a>
# **mapasSignificativosTiempoActual1**
> Model200 mapasSignificativosTiempoActual1(ambito, dia)

Mapas significativos. Tiempo actual.

Mapas significativos de ámbito nacional o CCAA, para el día actual (D+0),  al día siguiente (D+1) o a los dos días (D+2), en el periodo horario de (00_12) ó (12-24).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.MapasYGraficosApi();

var ambito = "ambito_example"; // String |  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La

var dia = "dia_example"; // String |  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapasSignificativosTiempoActual1(ambito, dia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ambito** | **String**|  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La | 
 **dia** | **String**|  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mapasSignificativosTiempoActual_"></a>
# **mapasSignificativosTiempoActual_**
> Model200 mapasSignificativosTiempoActual_(fecha, ambito, dia)

Mapas significativos. Tiempo actual.

Mapas significativos de ámbito nacional o CCAA, para una fecha dada y ese mismo día (D+0),  al día siguiente (D+1) o a los dos días (D+2), en el periodo horario de (00_12) ó (12-24).

### Example
```javascript
var AemetOpenData = require('aemet_open_data');
var defaultClient = AemetOpenData.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new AemetOpenData.MapasYGraficosApi();

var fecha = "fecha_example"; // String | Fecha de elaboración (AAAA-MM-DD)

var ambito = "ambito_example"; // String |  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La

var dia = "dia_example"; // String |  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapasSignificativosTiempoActual_(fecha, ambito, dia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fecha** | **String**| Fecha de elaboración (AAAA-MM-DD) | 
 **ambito** | **String**|  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La | 
 **dia** | **String**|  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24) | 

### Return type

[**Model200**](Model200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


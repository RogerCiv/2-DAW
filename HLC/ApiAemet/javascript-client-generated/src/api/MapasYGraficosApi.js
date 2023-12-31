/**
 * AEMET OpenData
 * AEMET OpenData es una API REST desarrollado por AEMET que permite la difusión y la reutilización de la información meteorológica y climatológica de la Agencia, en el sentido indicado en la Ley 18/2015, de 9 de julio, por la que se modifica la Ley 37/2007, de 16 de noviembre, sobre reutilización de la información del sector público. (IMPORTANTE: Para poder realizar peticiones, es necesario introducir en API Key haciendo clic en el círculo rojo de recurso REST).
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Model200', 'model/Model401', 'model/Model404', 'model/Model429'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Model200'), require('../model/Model401'), require('../model/Model404'), require('../model/Model429'));
  } else {
    // Browser globals (root is window)
    if (!root.AemetOpenData) {
      root.AemetOpenData = {};
    }
    root.AemetOpenData.MapasYGraficosApi = factory(root.AemetOpenData.ApiClient, root.AemetOpenData.Model200, root.AemetOpenData.Model401, root.AemetOpenData.Model404, root.AemetOpenData.Model429);
  }
}(this, function(ApiClient, Model200, Model401, Model404, Model429) {
  'use strict';

  /**
   * MapasYGraficos service.
   * @module api/MapasYGraficosApi
   * @version 2.0
   */

  /**
   * Constructs a new MapasYGraficosApi. 
   * @alias module:api/MapasYGraficosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the mapasDeAnlisisLtimaPasada_ operation.
     * @callback module:api/MapasYGraficosApi~mapasDeAnlisisLtimaPasada_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mapas de análisis. Última pasada.
     * Estos mapas muestran la configuración de la presión en superficie usando isobaras (lineas de igual presión), áreas de alta (A, a) y baja (B, b) presión y los frentes en Europa y el Atlántico Norte.El mapa de análisis presenta el estado de la atmósfera a la hora correspondiente y los fenómenos más relevantes observados en España. Periodicidad de actualización: cada 12 horas (00, 12).
     * @param {module:api/MapasYGraficosApi~mapasDeAnlisisLtimaPasada_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.mapasDeAnlisisLtimaPasada_ = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Model200;

      return this.apiClient.callApi(
        '/api/mapasygraficos/analisis', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mapasSignificativosTiempoActual1 operation.
     * @callback module:api/MapasYGraficosApi~mapasSignificativosTiempoActual1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mapas significativos. Tiempo actual.
     * Mapas significativos de ámbito nacional o CCAA, para el día actual (D+0),  al día siguiente (D+1) o a los dos días (D+2), en el periodo horario de (00_12) ó (12-24).
     * @param {String} ambito  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La
     * @param {String} dia  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24)
     * @param {module:api/MapasYGraficosApi~mapasSignificativosTiempoActual1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.mapasSignificativosTiempoActual1 = function(ambito, dia, callback) {
      var postBody = null;

      // verify the required parameter 'ambito' is set
      if (ambito === undefined || ambito === null) {
        throw new Error("Missing the required parameter 'ambito' when calling mapasSignificativosTiempoActual1");
      }

      // verify the required parameter 'dia' is set
      if (dia === undefined || dia === null) {
        throw new Error("Missing the required parameter 'dia' when calling mapasSignificativosTiempoActual1");
      }


      var pathParams = {
        'ambito': ambito,
        'dia': dia
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Model200;

      return this.apiClient.callApi(
        '/api/mapasygraficos/mapassignificativos/{ambito}/{dia}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mapasSignificativosTiempoActual_ operation.
     * @callback module:api/MapasYGraficosApi~mapasSignificativosTiempoActual_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mapas significativos. Tiempo actual.
     * Mapas significativos de ámbito nacional o CCAA, para una fecha dada y ese mismo día (D+0),  al día siguiente (D+1) o a los dos días (D+2), en el periodo horario de (00_12) ó (12-24).
     * @param {String} fecha Fecha de elaboración (AAAA-MM-DD)
     * @param {String} ambito  | Código | Ámbito | |----------|----------| | esp  | España| | and  | Andalucía   | | arn  | Aragón   | | ast  | Asturias  | | bal  | Ballears, Illes   | | coo  | Canarias   | | can  | Cantabria   | | cle  | Castilla y León   | | clm  | Castilla - La Mancha   | | cat  | Cataluña   | | val  | Comunitat Valenciana   | | ext  | Extremadura   | | gal  | Galicia   | | mad  | Madrid, Comunidad de    | | mur  | Murcia, Región de   | | nav  | Navarra, Comunidad Foral de   | | pva  | País Vasco | | rio  | Rioja, La
     * @param {String} dia  | Código de día | Día | |----------|----------| | a | D+0 (00-12)  | | b  | D+0 (00-12)   | |  c | D+1 (00-12)  | | d  | D+1 (12-24) | | e  | D+2 (00-12) | | f  | D+2 (12-24)
     * @param {module:api/MapasYGraficosApi~mapasSignificativosTiempoActual_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.mapasSignificativosTiempoActual_ = function(fecha, ambito, dia, callback) {
      var postBody = null;

      // verify the required parameter 'fecha' is set
      if (fecha === undefined || fecha === null) {
        throw new Error("Missing the required parameter 'fecha' when calling mapasSignificativosTiempoActual_");
      }

      // verify the required parameter 'ambito' is set
      if (ambito === undefined || ambito === null) {
        throw new Error("Missing the required parameter 'ambito' when calling mapasSignificativosTiempoActual_");
      }

      // verify the required parameter 'dia' is set
      if (dia === undefined || dia === null) {
        throw new Error("Missing the required parameter 'dia' when calling mapasSignificativosTiempoActual_");
      }


      var pathParams = {
        'fecha': fecha,
        'ambito': ambito,
        'dia': dia
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Model200;

      return this.apiClient.callApi(
        '/api/mapasygraficos/mapassignificativos/fecha/{fecha}/{ambito}/{dia}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

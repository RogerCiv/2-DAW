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
    root.AemetOpenData.ProductosClimatologicosApi = factory(root.AemetOpenData.ApiClient, root.AemetOpenData.Model200, root.AemetOpenData.Model401, root.AemetOpenData.Model404, root.AemetOpenData.Model429);
  }
}(this, function(ApiClient, Model200, Model401, Model404, Model429) {
  'use strict';

  /**
   * ProductosClimatologicos service.
   * @module api/ProductosClimatologicosApi
   * @version 2.0
   */

  /**
   * Constructs a new ProductosClimatologicosApi. 
   * @alias module:api/ProductosClimatologicosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the balanceHdricoNacionalDocumento_ operation.
     * @callback module:api/ProductosClimatologicosApi~balanceHdricoNacionalDocumento_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Balance hídrico nacional (documento).
     * Se obtiene, para la decema y el año pasados por parámetro, el Boletín Hídrico Nacional que se elabora cada diez días. Se presenta información resumida de forma distribuida para todo el territorio nacional de diferentes variables, en las que se incluye informaciones de la precipitación y la evapotranspiración potencial acumuladas desde el 1 de septiembre.
     * @param {String} anio Año (AAAA)
     * @param {String} decena Decena de 01 (primera decena) a 36 (última decena)
     * @param {module:api/ProductosClimatologicosApi~balanceHdricoNacionalDocumento_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.balanceHdricoNacionalDocumento_ = function(anio, decena, callback) {
      var postBody = null;

      // verify the required parameter 'anio' is set
      if (anio === undefined || anio === null) {
        throw new Error("Missing the required parameter 'anio' when calling balanceHdricoNacionalDocumento_");
      }

      // verify the required parameter 'decena' is set
      if (decena === undefined || decena === null) {
        throw new Error("Missing the required parameter 'decena' when calling balanceHdricoNacionalDocumento_");
      }


      var pathParams = {
        'anio': anio,
        'decena': decena
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
        '/api/productos/climatologicos/balancehidrico/{anio}/{decena}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the capasSHAPEDeEstacionesClimatolgicas_ operation.
     * @callback module:api/ProductosClimatologicosApi~capasSHAPEDeEstacionesClimatolgicas_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capas SHAPE de estaciones climatológicas de AEMET.
     * Capas SHAPE de las distintas estaciones climatológicas de AEMET: automáticas, completas, pluviométricas y termométricas.
     * @param {String} tipoestacion  | Código | Tipo de Estación | |----------|----------| | automaticas  | Estaciones Automáticas   | | completas  | Estaciones Completas   | | pluviometricas  | Estaciones Pluviométricas   | | termometricas  | Estaciones Termométricas   
     * @param {module:api/ProductosClimatologicosApi~capasSHAPEDeEstacionesClimatolgicas_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.capasSHAPEDeEstacionesClimatolgicas_ = function(tipoestacion, callback) {
      var postBody = null;

      // verify the required parameter 'tipoestacion' is set
      if (tipoestacion === undefined || tipoestacion === null) {
        throw new Error("Missing the required parameter 'tipoestacion' when calling capasSHAPEDeEstacionesClimatolgicas_");
      }


      var pathParams = {
        'tipoestacion': tipoestacion
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
        '/api/productos/climatologicos/capasshape/{tipoestacion}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resumenMensualClimatolgicoNacionalDocumento_ operation.
     * @callback module:api/ProductosClimatologicosApi~resumenMensualClimatolgicoNacionalDocumento_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resumen mensual climatológico nacional (documento).
     * Resumen climatológico nacional, para el año y mes pasado por parámetro, sobre el estado del clima y la evolución de las principales variables climáticas, en especial temperatura y precipitación, a nivel mensual, estacional y anual.
     * @param {String} anio Año (AAAA)
     * @param {String} mes Mes (mm)
     * @param {module:api/ProductosClimatologicosApi~resumenMensualClimatolgicoNacionalDocumento_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.resumenMensualClimatolgicoNacionalDocumento_ = function(anio, mes, callback) {
      var postBody = null;

      // verify the required parameter 'anio' is set
      if (anio === undefined || anio === null) {
        throw new Error("Missing the required parameter 'anio' when calling resumenMensualClimatolgicoNacionalDocumento_");
      }

      // verify the required parameter 'mes' is set
      if (mes === undefined || mes === null) {
        throw new Error("Missing the required parameter 'mes' when calling resumenMensualClimatolgicoNacionalDocumento_");
      }


      var pathParams = {
        'anio': anio,
        'mes': mes
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
        '/api/productos/climatologicos/resumenclimatologico/nacional/{anio}/{mes}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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
    root.AemetOpenData.RedRayosApi = factory(root.AemetOpenData.ApiClient, root.AemetOpenData.Model200, root.AemetOpenData.Model401, root.AemetOpenData.Model404, root.AemetOpenData.Model429);
  }
}(this, function(ApiClient, Model200, Model401, Model404, Model429) {
  'use strict';

  /**
   * RedRayos service.
   * @module api/RedRayosApi
   * @version 2.0
   */

  /**
   * Constructs a new RedRayosApi. 
   * @alias module:api/RedRayosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_ operation.
     * @callback module:api/RedRayosApi~mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mapa con los rayos registrados en periodo standard. Último elaborado.
     * Imagen de las descargas caídas en el territorio nacional durante un período de 12 horas.
     * @param {module:api/RedRayosApi~mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.mapaConLosRayosRegistradosEnPeriodoStandardLtimoElaborado_ = function(callback) {
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
        '/api/red/rayos/mapa', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
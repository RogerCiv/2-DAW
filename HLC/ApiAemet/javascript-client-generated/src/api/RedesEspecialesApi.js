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
    root.AemetOpenData.RedesEspecialesApi = factory(root.AemetOpenData.ApiClient, root.AemetOpenData.Model200, root.AemetOpenData.Model401, root.AemetOpenData.Model404, root.AemetOpenData.Model429);
  }
}(this, function(ApiClient, Model200, Model401, Model404, Model429) {
  'use strict';

  /**
   * RedesEspeciales service.
   * @module api/RedesEspecialesApi
   * @version 2.0
   */

  /**
   * Constructs a new RedesEspecialesApi. 
   * @alias module:api/RedesEspecialesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contenidoTotalDeOzonoTiempoActual_ operation.
     * @callback module:api/RedesEspecialesApi~contenidoTotalDeOzonoTiempoActual_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Contenido total de ozono. Tiempo actual.
     * Dato medio diario de contenido total de ozono. Cada 24 h (actualmente, en fines de semana, festivos y vacaciones no se genera por la falta de personal en el Centro Radiométrico Nacional).
     * @param {module:api/RedesEspecialesApi~contenidoTotalDeOzonoTiempoActual_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.contenidoTotalDeOzonoTiempoActual_ = function(callback) {
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
        '/api/red/especial/ozono', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the datosDeContaminacinDeFondoTiempoActual_ operation.
     * @callback module:api/RedesEspecialesApi~datosDeContaminacinDeFondoTiempoActual_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Datos de contaminación de fondo. Tiempo actual.
     * Ficheros diarios con datos diezminutales de la estación de la red de contaminación de fondo EMEP/VAG/CAMP pasada por parámetro, de temperatura, presión, humedad, viento (dirección y velocidad), radiación global, precipitación y 4 componentes químicos: O3,SO2,NO,NO2 y PM10. Los datos se encuentran en formato FINN (propio del Ministerio de Medio Ambiente). Periodicidad: cada hora.
     * @param {String} nombreEstacion  | Código | Estación de la Red EMEP | |----------|----------| | 11  | Barcarrota (Badajoz)   | | 10  | Cabo de Creus (Girona)   | | 09  | Campisábalos (Guadalajara)   | | 17  | Doñana (Huelva)  | | 14  | Els Torms (Lleida)   | | 06  | Mahón (Illes Balears)   | | 08  | Niembro-Llanes (Asturias)   | | 05  | Noia (A Coruña)   | | 16  | O Saviñao (Lugo)   | | 13  | Peñausende (Zamora)   | | 01  | San Pablo de los Montes (Toledo)   | | 07  | Víznar (Granada)   | | 12  | Zarra (Valencia) 
     * @param {module:api/RedesEspecialesApi~datosDeContaminacinDeFondoTiempoActual_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.datosDeContaminacinDeFondoTiempoActual_ = function(nombreEstacion, callback) {
      var postBody = null;

      // verify the required parameter 'nombreEstacion' is set
      if (nombreEstacion === undefined || nombreEstacion === null) {
        throw new Error("Missing the required parameter 'nombreEstacion' when calling datosDeContaminacinDeFondoTiempoActual_");
      }


      var pathParams = {
        'nombre_estacion': nombreEstacion
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
        '/api/red/especial/contaminacionfondo/estacion/{nombre_estacion}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the datosDeRadiacinGlobalDirectaODifusaTiempoActual_ operation.
     * @callback module:api/RedesEspecialesApi~datosDeRadiacinGlobalDirectaODifusaTiempoActual_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Datos de radiación global, directa o difusa. Tiempo actual.
     * Datos horarios (HORA SOLAR VERDADERA) acumulados de radiación  global, directa, difusa e infrarroja, y datos semihorarios  (HORA SOLAR VERDADERA) acumulados de radiación ultravioleta eritemática.Datos diarios acumulados  de radiación global, directa, difusa, ultravioleta eritemática e infrarroja. Periodicidad: Cada 24h (actualmente en fines de semana, festivos y vacaciones, no se genera por la ausencia de personal en el Centro Radiométrico Nacional).
     * @param {module:api/RedesEspecialesApi~datosDeRadiacinGlobalDirectaODifusaTiempoActual_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.datosDeRadiacinGlobalDirectaODifusaTiempoActual_ = function(callback) {
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
        '/api/red/especial/radiacion', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the perfilesVerticalesDeOzonoTiempoActual_ operation.
     * @callback module:api/RedesEspecialesApi~perfilesVerticalesDeOzonoTiempoActual_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perfiles verticales de ozono. Tiempo actual.
     * Perfil Vertical de Ozono de la estación pasada por parámetro. Periodicidad: cada 7 días.
     * @param {String} estacion  | Código | Estación | |----------|----------| | canarias  | Izaña   | | peninsula  | Madrid   
     * @param {module:api/RedesEspecialesApi~perfilesVerticalesDeOzonoTiempoActual_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.perfilesVerticalesDeOzonoTiempoActual_ = function(estacion, callback) {
      var postBody = null;

      // verify the required parameter 'estacion' is set
      if (estacion === undefined || estacion === null) {
        throw new Error("Missing the required parameter 'estacion' when calling perfilesVerticalesDeOzonoTiempoActual_");
      }


      var pathParams = {
        'estacion': estacion
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
        '/api/red/especial/perfilozono/estacion/{estacion}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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
    root.AemetOpenData.ValoresClimatologicosApi = factory(root.AemetOpenData.ApiClient, root.AemetOpenData.Model200, root.AemetOpenData.Model401, root.AemetOpenData.Model404, root.AemetOpenData.Model429);
  }
}(this, function(ApiClient, Model200, Model401, Model404, Model429) {
  'use strict';

  /**
   * ValoresClimatologicos service.
   * @module api/ValoresClimatologicosApi
   * @version 2.0
   */

  /**
   * Constructs a new ValoresClimatologicosApi. 
   * @alias module:api/ValoresClimatologicosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the climatologasDiarias1 operation.
     * @callback module:api/ValoresClimatologicosApi~climatologasDiarias1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Climatologías diarias.
     * Valores climatológicos de todas las estaciones para el rango de fechas seleccionado. Periodicidad: 1 vez al día.
     * @param {String} fechaIniStr Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)
     * @param {String} fechaFinStr Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)
     * @param {module:api/ValoresClimatologicosApi~climatologasDiarias1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.climatologasDiarias1 = function(fechaIniStr, fechaFinStr, callback) {
      var postBody = null;

      // verify the required parameter 'fechaIniStr' is set
      if (fechaIniStr === undefined || fechaIniStr === null) {
        throw new Error("Missing the required parameter 'fechaIniStr' when calling climatologasDiarias1");
      }

      // verify the required parameter 'fechaFinStr' is set
      if (fechaFinStr === undefined || fechaFinStr === null) {
        throw new Error("Missing the required parameter 'fechaFinStr' when calling climatologasDiarias1");
      }


      var pathParams = {
        'fechaIniStr': fechaIniStr,
        'fechaFinStr': fechaFinStr
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
        '/api/valores/climatologicos/diarios/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/todasestaciones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the climatologasDiarias_ operation.
     * @callback module:api/ValoresClimatologicosApi~climatologasDiarias_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Climatologías diarias.
     * Valores climatológicos para el rango de fechas y la estación seleccionada. Periodicidad: 1 vez al día.
     * @param {String} fechaIniStr Fecha Inicial (AAAA-MM-DDTHH:MM:SSUTC)
     * @param {String} fechaFinStr Fecha Final (AAAA-MM-DDTHH:MM:SSUTC)
     * @param {String} idema Indicativo climatológico de la EMA. Puede introducir varios indicativos separados por comas (,)
     * @param {module:api/ValoresClimatologicosApi~climatologasDiarias_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.climatologasDiarias_ = function(fechaIniStr, fechaFinStr, idema, callback) {
      var postBody = null;

      // verify the required parameter 'fechaIniStr' is set
      if (fechaIniStr === undefined || fechaIniStr === null) {
        throw new Error("Missing the required parameter 'fechaIniStr' when calling climatologasDiarias_");
      }

      // verify the required parameter 'fechaFinStr' is set
      if (fechaFinStr === undefined || fechaFinStr === null) {
        throw new Error("Missing the required parameter 'fechaFinStr' when calling climatologasDiarias_");
      }

      // verify the required parameter 'idema' is set
      if (idema === undefined || idema === null) {
        throw new Error("Missing the required parameter 'idema' when calling climatologasDiarias_");
      }


      var pathParams = {
        'fechaIniStr': fechaIniStr,
        'fechaFinStr': fechaFinStr,
        'idema': idema
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
        '/api/valores/climatologicos/diarios/datos/fechaini/{fechaIniStr}/fechafin/{fechaFinStr}/estacion/{idema}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the climatologasMensualesAnuales_ operation.
     * @callback module:api/ValoresClimatologicosApi~climatologasMensualesAnuales_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Climatologías mensuales anuales.
     * Valores medios mensuales y anuales de los datos climatológicos para la estación y el periodo de años pasados por parámetro. Periodicidad: 1 vez al día.
     * @param {String} anioIniStr Año Inicial (AAAA)
     * @param {String} anioFinStr Año Final (AAAA)
     * @param {String} idema Indicativo climatológico de la EMA
     * @param {module:api/ValoresClimatologicosApi~climatologasMensualesAnuales_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.climatologasMensualesAnuales_ = function(anioIniStr, anioFinStr, idema, callback) {
      var postBody = null;

      // verify the required parameter 'anioIniStr' is set
      if (anioIniStr === undefined || anioIniStr === null) {
        throw new Error("Missing the required parameter 'anioIniStr' when calling climatologasMensualesAnuales_");
      }

      // verify the required parameter 'anioFinStr' is set
      if (anioFinStr === undefined || anioFinStr === null) {
        throw new Error("Missing the required parameter 'anioFinStr' when calling climatologasMensualesAnuales_");
      }

      // verify the required parameter 'idema' is set
      if (idema === undefined || idema === null) {
        throw new Error("Missing the required parameter 'idema' when calling climatologasMensualesAnuales_");
      }


      var pathParams = {
        'anioIniStr': anioIniStr,
        'anioFinStr': anioFinStr,
        'idema': idema
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
        '/api/valores/climatologicos/mensualesanuales/datos/anioini/{anioIniStr}/aniofin/{anioFinStr}/estacion/{idema}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the climatologasNormales19812010_ operation.
     * @callback module:api/ValoresClimatologicosApi~climatologasNormales19812010_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Climatologías normales (1981-2010).
     * Valores climatológicos normales (periodo 1981-2010) para la estación pasada por parámetro. Periodicidad: 1 vez al día.
     * @param {String} idema Indicativo climatológico de la EMA
     * @param {module:api/ValoresClimatologicosApi~climatologasNormales19812010_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.climatologasNormales19812010_ = function(idema, callback) {
      var postBody = null;

      // verify the required parameter 'idema' is set
      if (idema === undefined || idema === null) {
        throw new Error("Missing the required parameter 'idema' when calling climatologasNormales19812010_");
      }


      var pathParams = {
        'idema': idema
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
        '/api/valores/climatologicos/normales/estacion/{idema}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the estacionesPorIndicativo_ operation.
     * @callback module:api/ValoresClimatologicosApi~estacionesPorIndicativo_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estaciones por indicativo.
     * Características de la estación climatológica pasada por parámetro.
     * @param {String} estaciones Listado de indicativos climatológicos (id1,id2,id3,...,idn)
     * @param {module:api/ValoresClimatologicosApi~estacionesPorIndicativo_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.estacionesPorIndicativo_ = function(estaciones, callback) {
      var postBody = null;

      // verify the required parameter 'estaciones' is set
      if (estaciones === undefined || estaciones === null) {
        throw new Error("Missing the required parameter 'estaciones' when calling estacionesPorIndicativo_");
      }


      var pathParams = {
        'estaciones': estaciones
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
        '/api/valores/climatologicos/inventarioestaciones/estaciones/{estaciones}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the inventarioDeEstacionesValoresClimatolgicos_ operation.
     * @callback module:api/ValoresClimatologicosApi~inventarioDeEstacionesValoresClimatolgicos_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inventario de estaciones (valores climatológicos).
     * Inventario con las características de todas las estaciones climatológicas. Periodicidad: 1 vez al día.
     * @param {module:api/ValoresClimatologicosApi~inventarioDeEstacionesValoresClimatolgicos_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.inventarioDeEstacionesValoresClimatolgicos_ = function(callback) {
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
        '/api/valores/climatologicos/inventarioestaciones/todasestaciones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the valoresExtremos_ operation.
     * @callback module:api/ValoresClimatologicosApi~valoresExtremos_Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Model200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Valores extremos.
     * Valores extremos para la estación y la variable (precipitación, temperatura y viento) pasadas por parámetro. Periodicidad: 1 vez al día.
     * @param {String} parametro  | Código | Parámetro Meteorológico | |----------|----------| | P  | Precipitación   | | T  | Temperatura   | | V  | Viento 
     * @param {String} idema Indicativo climatológico de la EMA
     * @param {module:api/ValoresClimatologicosApi~valoresExtremos_Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model200}
     */
    this.valoresExtremos_ = function(parametro, idema, callback) {
      var postBody = null;

      // verify the required parameter 'parametro' is set
      if (parametro === undefined || parametro === null) {
        throw new Error("Missing the required parameter 'parametro' when calling valoresExtremos_");
      }

      // verify the required parameter 'idema' is set
      if (idema === undefined || idema === null) {
        throw new Error("Missing the required parameter 'idema' when calling valoresExtremos_");
      }


      var pathParams = {
        'parametro': parametro,
        'idema': idema
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
        '/api/valores/climatologicos/valoresextremos/parametro/{parametro}/estacion/{idema}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
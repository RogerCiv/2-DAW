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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AemetOpenData) {
      root.AemetOpenData = {};
    }
    root.AemetOpenData.Model429 = factory(root.AemetOpenData.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Model429 model module.
   * @module model/Model429
   * @version 2.0
   */

  /**
   * Constructs a new <code>Model429</code>.
   * @alias module:model/Model429
   * @class
   * @param descripcion {String} 
   * @param estado {Number} 
   */
  var exports = function(descripcion, estado) {
    var _this = this;

    _this['descripcion'] = descripcion;
    _this['estado'] = estado;
  };

  /**
   * Constructs a <code>Model429</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model429} obj Optional instance to populate.
   * @return {module:model/Model429} The populated <code>Model429</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('descripcion')) {
        obj['descripcion'] = ApiClient.convertToType(data['descripcion'], 'String');
      }
      if (data.hasOwnProperty('estado')) {
        obj['estado'] = ApiClient.convertToType(data['estado'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} descripcion
   * @default 'Too Many Requests'
   */
  exports.prototype['descripcion'] = 'Too Many Requests';
  /**
   * @member {Number} estado
   */
  exports.prototype['estado'] = undefined;



  return exports;
}));



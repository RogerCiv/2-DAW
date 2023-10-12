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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AemetOpenData);
  }
}(this, function(expect, AemetOpenData) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AemetOpenData.Model200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Model200', function() {
    it('should create an instance of Model200', function() {
      // uncomment below and update the code to test Model200
      //var instance = new AemetOpenData.Model200();
      //expect(instance).to.be.a(AemetOpenData.Model200);
    });

    it('should have the property descripcion (base name: "descripcion")', function() {
      // uncomment below and update the code to test the property descripcion
      //var instance = new AemetOpenData.Model200();
      //expect(instance).to.be();
    });

    it('should have the property estado (base name: "estado")', function() {
      // uncomment below and update the code to test the property estado
      //var instance = new AemetOpenData.Model200();
      //expect(instance).to.be();
    });

    it('should have the property datos (base name: "datos")', function() {
      // uncomment below and update the code to test the property datos
      //var instance = new AemetOpenData.Model200();
      //expect(instance).to.be();
    });

    it('should have the property metadatos (base name: "metadatos")', function() {
      // uncomment below and update the code to test the property metadatos
      //var instance = new AemetOpenData.Model200();
      //expect(instance).to.be();
    });

  });

}));
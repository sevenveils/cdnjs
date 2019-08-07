/*! InstantSearch.js 3.5.2 | © Algolia, Inc. and contributors; MIT License | https://github.com/algolia/instantsearch.js */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.instantsearch = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  (function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.deepmerge = factory();
  })(undefined, function () {

    var isMergeableObject = function isMergeableObject(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };

    function isNonNullObject(value) {
      return !!value && _typeof(value) === 'object';
    }

    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
    } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }

    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }

    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }

    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }

      var customMerge = options.customMerge(key);
      return typeof customMerge === 'function' ? customMerge : deepmerge;
    }

    function mergeObject(target, source, options) {
      var destination = {};

      if (options.isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }

      Object.keys(source).forEach(function (key) {
        if (!options.isMergeableObject(source[key]) || !target[key]) {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        } else {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        }
      });
      return destination;
    }

    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }

    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
      }

      return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };

    var deepmerge_1 = deepmerge;
    return deepmerge_1;
  });

  var umd = /*#__PURE__*/Object.freeze({

  });

  function arrayMerge(destinationArray, sourceArray) {
    if (!Array.isArray(destinationArray) || !Array.isArray(sourceArray)) {
      return sourceArray;
    }

    var longestLength = Math.max(destinationArray.length, sourceArray.length);
    var target = [];

    for (var i = 0; i < longestLength; i++) {
      target[i] = sourceArray.hasOwnProperty(i) ? sourceArray[i] : destinationArray[i];
    }

    return target;
  }

  function merge() {
    var sources = Array.prototype.slice.call(arguments);
    var target = sources.shift() || {};

    if (sources.every(function (source) {
      return source === target;
    })) {
      return target;
    }

    return umd.all([target].concat(sources.filter(Boolean)), {
      arrayMerge: arrayMerge
    });
  }

  var merge_1 = merge;

  var defaultsPure = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);
    return sources.reduceRight(function (acc, source) {
      Object.keys(Object(source)).forEach(function (key) {
        if (source[key] !== undefined) {
          acc[key] = source[key];
        }
      });
      return acc;
    }, {});
  };

  var find = function find(array, comparator) {
    if (!Array.isArray(array)) {
      return undefined;
    }

    for (var i = 0; i < array.length; i++) {
      if (comparator(array[i])) {
        return array[i];
      }
    }
  };

  function valToNumber(v) {
    if (typeof v === 'number') {
      return v;
    } else if (typeof v === 'string') {
      return parseFloat(v);
    } else if (Array.isArray(v)) {
      return v.map(valToNumber);
    }

    throw new Error('The value should be a number, a parsable string or an array of those.');
  }

  var valToNumber_1 = valToNumber;

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source === null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key;
    var i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var omit = _objectWithoutPropertiesLoose$1;

  function objectHasKeys(obj) {
    return obj && Object.keys(obj).length > 0;
  }

  var objectHasKeys_1 = objectHasKeys;

  /**
   * Functions to manipulate refinement lists
   *
   * The RefinementList is not formally defined through a prototype but is based
   * on a specific structure.
   *
   * @module SearchParameters.refinementList
   *
   * @typedef {string[]} SearchParameters.refinementList.Refinements
   * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
   */







  var lib = {
    /**
     * Adds a refinement to a RefinementList
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} value the value of the refinement, if the value is not a string it will be converted
     * @return {RefinementList} a new and updated refinement list
     */
    addRefinement: function addRefinement(refinementList, attribute, value) {
      if (lib.isRefined(refinementList, attribute, value)) {
        return refinementList;
      }

      var valueAsString = '' + value;
      var facetRefinement = !refinementList[attribute] ? [valueAsString] : refinementList[attribute].concat(valueAsString);
      var mod = {};
      mod[attribute] = facetRefinement;
      return defaultsPure({}, mod, refinementList);
    },

    /**
     * Removes refinement(s) for an attribute:
     *  - if the value is specified removes the refinement for the value on the attribute
     *  - if no value is specified removes all the refinements for this attribute
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} [value] the value of the refinement
     * @return {RefinementList} a new and updated refinement lst
     */
    removeRefinement: function removeRefinement(refinementList, attribute, value) {
      if (value === undefined) {
        return lib.clearRefinement(refinementList, attribute);
      }

      var valueAsString = '' + value;
      return lib.clearRefinement(refinementList, function (v, f) {
        return attribute === f && valueAsString === v;
      });
    },

    /**
     * Toggles the refinement value for an attribute.
     * @param {RefinementList} refinementList the initial list
     * @param {string} attribute the attribute to refine
     * @param {string} value the value of the refinement
     * @return {RefinementList} a new and updated list
     */
    toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
      if (value === undefined) throw new Error('toggleRefinement should be used with a value');

      if (lib.isRefined(refinementList, attribute, value)) {
        return lib.removeRefinement(refinementList, attribute, value);
      }

      return lib.addRefinement(refinementList, attribute, value);
    },

    /**
     * Clear all or parts of a RefinementList. Depending on the arguments, three
     * kinds of behavior can happen:
     *  - if no attribute is provided: clears the whole list
     *  - if an attribute is provided as a string: clears the list for the specific attribute
     *  - if an attribute is provided as a function: discards the elements for which the function returns true
     * @param {RefinementList} refinementList the initial list
     * @param {string} [attribute] the attribute or function to discard
     * @param {string} [refinementType] optional parameter to give more context to the attribute function
     * @return {RefinementList} a new and updated refinement list
     */
    clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
      if (attribute === undefined) {
        if (!objectHasKeys_1(refinementList)) {
          return refinementList;
        }

        return {};
      } else if (typeof attribute === 'string') {
        if (!(refinementList[attribute] && refinementList[attribute].length > 0)) {
          return refinementList;
        }

        return omit(refinementList, attribute);
      } else if (typeof attribute === 'function') {
        var hasChanged = false;
        var newRefinementList = Object.keys(refinementList).reduce(function (memo, key) {
          var values = refinementList[key] || [];
          var facetList = values.filter(function (value) {
            return !attribute(value, key, refinementType);
          });

          if (facetList.length > 0) {
            if (facetList.length !== values.length) {
              hasChanged = true;
            }

            memo[key] = facetList;
          } else {
            hasChanged = true;
          }

          return memo;
        }, {});
        if (hasChanged) return newRefinementList;
        return refinementList;
      }
    },

    /**
     * Test if the refinement value is used for the attribute. If no refinement value
     * is provided, test if the refinementList contains any refinement for the
     * given attribute.
     * @param {RefinementList} refinementList the list of refinement
     * @param {string} attribute name of the attribute
     * @param {string} [refinementValue] value of the filter/refinement
     * @return {boolean}
     */
    isRefined: function isRefined(refinementList, attribute, refinementValue) {
      var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;

      if (refinementValue === undefined || !containsRefinements) {
        return containsRefinements;
      }

      var refinementValueAsString = '' + refinementValue;
      return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    }
  };
  var RefinementList = lib;

  /**
   * isEqual, but only for numeric refinement values, possible values:
   * - 5
   * - [5]
   * - [[5]]
   * - [[5,5],[4]]
   */


  function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every(function (el, i) {
        return isEqualNumericRefinement(b[i], el);
      });
    }

    return a === b;
  }
  /**
   * like _.find but using deep equality to be able to use it
   * to find arrays.
   * @private
   * @param {any[]} array array to search into (elements are base or array of base)
   * @param {any} searchedValue the value we're looking for (base or array of base)
   * @return {any} the searched value or undefined
   */


  function findArray(array, searchedValue) {
    return find(array, function (currentValue) {
      return isEqualNumericRefinement(currentValue, searchedValue);
    });
  }
  /**
   * The facet list is the structure used to store the list of values used to
   * filter a single attribute.
   * @typedef {string[]} SearchParameters.FacetList
   */

  /**
   * Structure to store numeric filters with the operator as the key. The supported operators
   * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
   * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
   */

  /**
   * SearchParameters is the data structure that contains all the information
   * usable for making a search to Algolia API. It doesn't do the search itself,
   * nor does it contains logic about the parameters.
   * It is an immutable object, therefore it has been created in a way that each
   * changes does not change the object itself but returns a copy with the
   * modification.
   * This object should probably not be instantiated outside of the helper. It will
   * be provided when needed. This object is documented for reference as you'll
   * get it from events generated by the {@link AlgoliaSearchHelper}.
   * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
   * @constructor
   * @classdesc contains all the parameters of a search
   * @param {object|SearchParameters} newParameters existing parameters or partial object
   * for the properties of a new SearchParameters
   * @see SearchParameters.make
   * @example <caption>SearchParameters of the first query in
   *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
  {
     "query": "",
     "disjunctiveFacets": [
        "customerReviewCount",
        "category",
        "salePrice_range",
        "manufacturer"
    ],
     "maxValuesPerFacet": 30,
     "page": 0,
     "hitsPerPage": 10,
     "facets": [
        "type",
        "shipping"
    ]
  }
   */


  function SearchParameters(newParameters) {
    var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
    /**
     * This attribute contains the list of all the conjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */

    this.facets = params.facets || [];
    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * @member {string[]}
     */

    this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     * @member {string[]|object[]}
     */

    this.hierarchicalFacets = params.hierarchicalFacets || []; // Refinements

    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */

    this.facetsRefinements = params.facetsRefinements || {};
    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */

    this.facetsExcludes = params.facetsExcludes || {};
    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */

    this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     * @member {Object.<string, SearchParameters.OperatorList>}
     */

    this.numericRefinements = params.numericRefinements || {};
    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     * @member {string[]}
     */

    this.tagRefinements = params.tagRefinements || [];
    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     * @member {Object.<string, SearchParameters.FacetList>}
     */

    this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
    var self = this;
    Object.keys(params).forEach(function (paramName) {
      var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
      var isValueDefined = params[paramName] !== undefined;

      if (!isKeyKnown && isValueDefined) {
        self[paramName] = params[paramName];
      }
    });
  }
  /**
   * List all the properties in SearchParameters and therefore all the known Algolia properties
   * This doesn't contain any beta/hidden features.
   * @private
   */


  SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
  /**
   * @private
   * @param {object} partialState full or part of a state
   * @return {object} a new object with the number keys as number
   */

  SearchParameters._parseNumbers = function (partialState) {
    // Do not reparse numbers in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;
    var numbers = {};
    var numberKeys = ['aroundPrecision', 'aroundRadius', 'getRankingInfo', 'minWordSizefor2Typos', 'minWordSizefor1Typo', 'page', 'maxValuesPerFacet', 'distinct', 'minimumAroundRadius', 'hitsPerPage', 'minProximity'];
    numberKeys.forEach(function (k) {
      var value = partialState[k];

      if (typeof value === 'string') {
        var parsedValue = parseFloat(value); // global isNaN is ok to use here, value is only number or NaN

        numbers[k] = isNaN(parsedValue) ? value : parsedValue;
      }
    }); // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles

    if (Array.isArray(partialState.insideBoundingBox)) {
      numbers.insideBoundingBox = partialState.insideBoundingBox.map(function (geoRect) {
        return geoRect.map(function (value) {
          return parseFloat(value);
        });
      });
    }

    if (partialState.numericRefinements) {
      var numericRefinements = {};
      Object.keys(partialState.numericRefinements).forEach(function (attribute) {
        var operators = partialState.numericRefinements[attribute] || {};
        numericRefinements[attribute] = {};
        Object.keys(operators).forEach(function (operator) {
          var values = operators[operator];
          var parsedValues = values.map(function (v) {
            if (Array.isArray(v)) {
              return v.map(function (vPrime) {
                if (typeof vPrime === 'string') {
                  return parseFloat(vPrime);
                }

                return vPrime;
              });
            } else if (typeof v === 'string') {
              return parseFloat(v);
            }

            return v;
          });
          numericRefinements[attribute][operator] = parsedValues;
        });
      });
      numbers.numericRefinements = numericRefinements;
    }

    return merge_1({}, partialState, numbers);
  };
  /**
   * Factory for SearchParameters
   * @param {object|SearchParameters} newParameters existing parameters or partial
   * object for the properties of a new SearchParameters
   * @return {SearchParameters} frozen instance of SearchParameters
   */


  SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);
    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function (facet) {
      if (facet.rootPath) {
        var currentRefinement = instance.getHierarchicalRefinement(facet.name);

        if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
          instance = instance.clearRefinements(facet.name);
        } // get it again in case it has been cleared


        currentRefinement = instance.getHierarchicalRefinement(facet.name);

        if (currentRefinement.length === 0) {
          instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
        }
      }
    });
    return instance;
  };
  /**
   * Validates the new parameters based on the previous state
   * @param {SearchParameters} currentState the current state
   * @param {object|SearchParameters} parameters the new parameters to set
   * @return {Error|null} Error if the modification is invalid, null otherwise
   */


  SearchParameters.validate = function (currentState, parameters) {
    var params = parameters || {};

    if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
      return new Error('[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' + 'an error, if it is really what you want, you should first clear the tags with clearTags method.');
    }

    if (currentState.tagRefinements.length > 0 && params.tagFilters) {
      return new Error('[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' + 'an error, if it is not, you should first clear the tags with clearTags method.');
    }

    if (currentState.numericFilters && params.numericRefinements && objectHasKeys_1(params.numericRefinements)) {
      return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
    }

    if (objectHasKeys_1(currentState.numericRefinements) && params.numericFilters) {
      return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It" + ' is probably an error, if this is really what you want, you have to first' + ' clear the numeric filters.');
    }

    return null;
  };

  SearchParameters.prototype = {
    constructor: SearchParameters,

    /**
     * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
     * @method
     * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
     * - If not given, means to clear all the filters.
     * - If `string`, means to clear all refinements for the `attribute` named filter.
     * - If `function`, means to clear all the refinements that return truthy values.
     * @return {SearchParameters}
     */
    clearRefinements: function clearRefinements(attribute) {
      var clear = RefinementList.clearRefinement;
      var patch = {
        numericRefinements: this._clearNumericRefinements(attribute),
        facetsRefinements: clear(this.facetsRefinements, attribute, 'conjunctiveFacet'),
        facetsExcludes: clear(this.facetsExcludes, attribute, 'exclude'),
        disjunctiveFacetsRefinements: clear(this.disjunctiveFacetsRefinements, attribute, 'disjunctiveFacet'),
        hierarchicalFacetsRefinements: clear(this.hierarchicalFacetsRefinements, attribute, 'hierarchicalFacet')
      };

      if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
        return this;
      }

      return this.setQueryParameters(patch);
    },

    /**
     * Remove all the refined tags from the SearchParameters
     * @method
     * @return {SearchParameters}
     */
    clearTags: function clearTags() {
      if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
      return this.setQueryParameters({
        tagFilters: undefined,
        tagRefinements: []
      });
    },

    /**
     * Set the index.
     * @method
     * @param {string} index the index name
     * @return {SearchParameters}
     */
    setIndex: function setIndex(index) {
      if (index === this.index) return this;
      return this.setQueryParameters({
        index: index
      });
    },

    /**
     * Query setter
     * @method
     * @param {string} newQuery value for the new query
     * @return {SearchParameters}
     */
    setQuery: function setQuery(newQuery) {
      if (newQuery === this.query) return this;
      return this.setQueryParameters({
        query: newQuery
      });
    },

    /**
     * Page setter
     * @method
     * @param {number} newPage new page number
     * @return {SearchParameters}
     */
    setPage: function setPage(newPage) {
      if (newPage === this.page) return this;
      return this.setQueryParameters({
        page: newPage
      });
    },

    /**
     * Facets setter
     * The facets are the simple facets, used for conjunctive (and) faceting.
     * @method
     * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
     * @return {SearchParameters}
     */
    setFacets: function setFacets(facets) {
      return this.setQueryParameters({
        facets: facets
      });
    },

    /**
     * Disjunctive facets setter
     * Change the list of disjunctive (or) facets the helper chan handle.
     * @method
     * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
     * @return {SearchParameters}
     */
    setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
      return this.setQueryParameters({
        disjunctiveFacets: facets
      });
    },

    /**
     * HitsPerPage setter
     * Hits per page represents the number of hits retrieved for this query
     * @method
     * @param {number} n number of hits retrieved per page of results
     * @return {SearchParameters}
     */
    setHitsPerPage: function setHitsPerPage(n) {
      if (this.hitsPerPage === n) return this;
      return this.setQueryParameters({
        hitsPerPage: n
      });
    },

    /**
     * typoTolerance setter
     * Set the value of typoTolerance
     * @method
     * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
     * @return {SearchParameters}
     */
    setTypoTolerance: function setTypoTolerance(typoTolerance) {
      if (this.typoTolerance === typoTolerance) return this;
      return this.setQueryParameters({
        typoTolerance: typoTolerance
      });
    },

    /**
     * Add a numeric filter for a given attribute
     * When value is an array, they are combined with OR
     * When value is a single value, it will combined with AND
     * @method
     * @param {string} attribute attribute to set the filter on
     * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
     * @param {number | number[]} value value of the filter
     * @return {SearchParameters}
     * @example
     * // for price = 50 or 40
     * searchparameter.addNumericRefinement('price', '=', [50, 40]);
     * @example
     * // for size = 38 and 40
     * searchparameter.addNumericRefinement('size', '=', 38);
     * searchparameter.addNumericRefinement('size', '=', 40);
     */
    addNumericRefinement: function addNumericRefinement(attribute, operator, v) {
      var value = valToNumber_1(v);
      if (this.isNumericRefined(attribute, operator, value)) return this;
      var mod = merge_1({}, this.numericRefinements);
      mod[attribute] = merge_1({}, mod[attribute]);

      if (mod[attribute][operator]) {
        // Array copy
        mod[attribute][operator] = mod[attribute][operator].slice(); // Add the element. Concat can't be used here because value can be an array.

        mod[attribute][operator].push(value);
      } else {
        mod[attribute][operator] = [value];
      }

      return this.setQueryParameters({
        numericRefinements: mod
      });
    },

    /**
     * Get the list of conjunctive refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getConjunctiveRefinements: function getConjunctiveRefinements(facetName) {
      if (!this.isConjunctiveFacet(facetName)) {
        throw new Error(facetName + ' is not defined in the facets attribute of the helper configuration');
      }

      return this.facetsRefinements[facetName] || [];
    },

    /**
     * Get the list of disjunctive refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getDisjunctiveRefinements: function getDisjunctiveRefinements(facetName) {
      if (!this.isDisjunctiveFacet(facetName)) {
        throw new Error(facetName + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
      }

      return this.disjunctiveFacetsRefinements[facetName] || [];
    },

    /**
     * Get the list of hierarchical refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getHierarchicalRefinement: function getHierarchicalRefinement(facetName) {
      // we send an array but we currently do not support multiple
      // hierarchicalRefinements for a hierarchicalFacet
      return this.hierarchicalFacetsRefinements[facetName] || [];
    },

    /**
     * Get the list of exclude refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {string[]} list of refinements
     */
    getExcludeRefinements: function getExcludeRefinements(facetName) {
      if (!this.isConjunctiveFacet(facetName)) {
        throw new Error(facetName + ' is not defined in the facets attribute of the helper configuration');
      }

      return this.facetsExcludes[facetName] || [];
    },

    /**
     * Remove all the numeric filter for a given (attribute, operator)
     * @method
     * @param {string} attribute attribute to set the filter on
     * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
     * @param {number} [number] the value to be removed
     * @return {SearchParameters}
     */
    removeNumericRefinement: function removeNumericRefinement(attribute, operator, paramValue) {
      if (paramValue !== undefined) {
        if (!this.isNumericRefined(attribute, operator, paramValue)) {
          return this;
        }

        return this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (value, key) {
            return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber_1(paramValue));
          })
        });
      } else if (operator !== undefined) {
        if (!this.isNumericRefined(attribute, operator)) return this;
        return this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (value, key) {
            return key === attribute && value.op === operator;
          })
        });
      }

      if (!this.isNumericRefined(attribute)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function (value, key) {
          return key === attribute;
        })
      });
    },

    /**
     * Get the list of numeric refinements for a single facet
     * @param {string} facetName name of the attribute used for faceting
     * @return {SearchParameters.OperatorList[]} list of refinements
     */
    getNumericRefinements: function getNumericRefinements(facetName) {
      return this.numericRefinements[facetName] || {};
    },

    /**
     * Return the current refinement for the (attribute, operator)
     * @param {string} attribute attribute in the record
     * @param {string} operator operator applied on the refined values
     * @return {Array.<number|number[]>} refined values
     */
    getNumericRefinement: function getNumericRefinement(attribute, operator) {
      return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
    },

    /**
     * Clear numeric filters.
     * @method
     * @private
     * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
     * - If not given, means to clear all the filters.
     * - If `string`, means to clear all refinements for the `attribute` named filter.
     * - If `function`, means to clear all the refinements that return truthy values.
     * @return {Object.<string, OperatorList>}
     */
    _clearNumericRefinements: function _clearNumericRefinements(attribute) {
      if (attribute === undefined) {
        if (!objectHasKeys_1(this.numericRefinements)) {
          return this.numericRefinements;
        }

        return {};
      } else if (typeof attribute === 'string') {
        if (!objectHasKeys_1(this.numericRefinements[attribute])) {
          return this.numericRefinements;
        }

        return omit(this.numericRefinements, attribute);
      } else if (typeof attribute === 'function') {
        var hasChanged = false;
        var numericRefinements = this.numericRefinements;
        var newNumericRefinements = Object.keys(numericRefinements).reduce(function (memo, key) {
          var operators = numericRefinements[key];
          var operatorList = {};
          operators = operators || {};
          Object.keys(operators).forEach(function (operator) {
            var values = operators[operator] || [];
            var outValues = [];
            values.forEach(function (value) {
              var predicateResult = attribute({
                val: value,
                op: operator
              }, key, 'numeric');
              if (!predicateResult) outValues.push(value);
            });

            if (outValues.length > 0) {
              if (outValues.length !== values.length) hasChanged = true;
              operatorList[operator] = outValues;
            } else hasChanged = true;
          });

          if (objectHasKeys_1(operatorList)) {
            memo[key] = operatorList;
          }

          return memo;
        }, {});
        if (hasChanged) return newNumericRefinements;
        return this.numericRefinements;
      }
    },

    /**
     * Add a facet to the facets attribute of the helper configuration, if it
     * isn't already present.
     * @method
     * @param {string} facet facet name to add
     * @return {SearchParameters}
     */
    addFacet: function addFacet(facet) {
      if (this.isConjunctiveFacet(facet)) {
        return this;
      }

      return this.setQueryParameters({
        facets: this.facets.concat([facet])
      });
    },

    /**
     * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
     * configuration, if it isn't already present.
     * @method
     * @param {string} facet disjunctive facet name to add
     * @return {SearchParameters}
     */
    addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
      if (this.isDisjunctiveFacet(facet)) {
        return this;
      }

      return this.setQueryParameters({
        disjunctiveFacets: this.disjunctiveFacets.concat([facet])
      });
    },

    /**
     * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
     * configuration.
     * @method
     * @param {object} hierarchicalFacet hierarchical facet to add
     * @return {SearchParameters}
     * @throws will throw an error if a hierarchical facet with the same name was already declared
     */
    addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
      if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
        throw new Error('Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
      }

      return this.setQueryParameters({
        hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
      });
    },

    /**
     * Add a refinement on a "normal" facet
     * @method
     * @param {string} facet attribute to apply the faceting on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters}
     */
    addFacetRefinement: function addFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
      return this.setQueryParameters({
        facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
      });
    },

    /**
     * Exclude a value from a "normal" facet
     * @method
     * @param {string} facet attribute to apply the exclusion on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters}
     */
    addExcludeRefinement: function addExcludeRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
      return this.setQueryParameters({
        facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
      });
    },

    /**
     * Adds a refinement on a disjunctive facet.
     * @method
     * @param {string} facet attribute to apply the faceting on
     * @param {string} value value of the attribute (will be converted to string)
     * @return {SearchParameters}
     */
    addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
      }

      if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
      });
    },

    /**
     * addTagRefinement adds a tag to the list used to filter the results
     * @param {string} tag tag to be added
     * @return {SearchParameters}
     */
    addTagRefinement: function addTagRefinement(tag) {
      if (this.isTagRefined(tag)) return this;
      var modification = {
        tagRefinements: this.tagRefinements.concat(tag)
      };
      return this.setQueryParameters(modification);
    },

    /**
     * Remove a facet from the facets attribute of the helper configuration, if it
     * is present.
     * @method
     * @param {string} facet facet name to remove
     * @return {SearchParameters}
     */
    removeFacet: function removeFacet(facet) {
      if (!this.isConjunctiveFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        facets: this.facets.filter(function (f) {
          return f !== facet;
        })
      });
    },

    /**
     * Remove a disjunctive facet from the disjunctiveFacets attribute of the
     * helper configuration, if it is present.
     * @method
     * @param {string} facet disjunctive facet name to remove
     * @return {SearchParameters}
     */
    removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
      if (!this.isDisjunctiveFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        disjunctiveFacets: this.disjunctiveFacets.filter(function (f) {
          return f !== facet;
        })
      });
    },

    /**
     * Remove a hierarchical facet from the hierarchicalFacets attribute of the
     * helper configuration, if it is present.
     * @method
     * @param {string} facet hierarchical facet name to remove
     * @return {SearchParameters}
     */
    removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
      if (!this.isHierarchicalFacet(facet)) {
        return this;
      }

      return this.clearRefinements(facet).setQueryParameters({
        hierarchicalFacets: this.hierarchicalFacets.filter(function (f) {
          return f.name !== facet;
        })
      });
    },

    /**
     * Remove a refinement set on facet. If a value is provided, it will clear the
     * refinement for the given value, otherwise it will clear all the refinement
     * values for the faceted attribute.
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} [value] value used to filter
     * @return {SearchParameters}
     */
    removeFacetRefinement: function removeFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
      return this.setQueryParameters({
        facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
      });
    },

    /**
     * Remove a negative refinement on a facet
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} value value used to filter
     * @return {SearchParameters}
     */
    removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
      return this.setQueryParameters({
        facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
      });
    },

    /**
     * Remove a refinement on a disjunctive facet
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {string} value value used to filter
     * @return {SearchParameters}
     */
    removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
      }

      if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
      });
    },

    /**
     * Remove a tag from the list of tag refinements
     * @method
     * @param {string} tag the tag to remove
     * @return {SearchParameters}
     */
    removeTagRefinement: function removeTagRefinement(tag) {
      if (!this.isTagRefined(tag)) return this;
      var modification = {
        tagRefinements: this.tagRefinements.filter(function (t) {
          return t !== tag;
        })
      };
      return this.setQueryParameters(modification);
    },

    /**
     * Generic toggle refinement method to use with facet, disjunctive facets
     * and hierarchical facets
     * @param  {string} facet the facet to refine
     * @param  {string} value the associated value
     * @return {SearchParameters}
     * @throws will throw an error if the facet is not declared in the settings of the helper
     * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
     */
    toggleRefinement: function toggleRefinement(facet, value) {
      return this.toggleFacetRefinement(facet, value);
    },

    /**
     * Generic toggle refinement method to use with facet, disjunctive facets
     * and hierarchical facets
     * @param  {string} facet the facet to refine
     * @param  {string} value the associated value
     * @return {SearchParameters}
     * @throws will throw an error if the facet is not declared in the settings of the helper
     */
    toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
      if (this.isHierarchicalFacet(facet)) {
        return this.toggleHierarchicalFacetRefinement(facet, value);
      } else if (this.isConjunctiveFacet(facet)) {
        return this.toggleConjunctiveFacetRefinement(facet, value);
      } else if (this.isDisjunctiveFacet(facet)) {
        return this.toggleDisjunctiveFacetRefinement(facet, value);
      }

      throw new Error('Cannot refine the undeclared facet ' + facet + '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
    },

    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters}
     */
    toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      return this.setQueryParameters({
        facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
      });
    },

    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters}
     */
    toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      return this.setQueryParameters({
        facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
      });
    },

    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters}
     */
    toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
      }

      return this.setQueryParameters({
        disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
      });
    },

    /**
     * Switch the refinement applied over a facet/value
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {SearchParameters}
     */
    toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
      if (!this.isHierarchicalFacet(facet)) {
        throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
      }

      var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));

      var mod = {};
      var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && ( // remove current refinement:
      // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
      //  - refinement was 'beer > IPA > Flying dog'
      //  - call is toggleRefine('beer > IPA')
      //  - refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);

      if (upOneOrMultipleLevel) {
        if (value.indexOf(separator) === -1) {
          // go back to root level
          mod[facet] = [];
        } else {
          mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
        }
      } else {
        mod[facet] = [value];
      }

      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
      });
    },

    /**
     * Adds a refinement on a hierarchical facet.
     * @param {string} facet the facet name
     * @param {string} path the hierarchical facet path
     * @return {SearchParameter} the new state
     * @throws Error if the facet is not defined or if the facet is refined
     */
    addHierarchicalFacetRefinement: function addHierarchicalFacetRefinement(facet, path) {
      if (this.isHierarchicalFacetRefined(facet)) {
        throw new Error(facet + ' is already refined.');
      }

      var mod = {};
      mod[facet] = [path];
      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
      });
    },

    /**
     * Removes the refinement set on a hierarchical facet.
     * @param {string} facet the facet name
     * @return {SearchParameter} the new state
     * @throws Error if the facet is not defined or if the facet is not refined
     */
    removeHierarchicalFacetRefinement: function removeHierarchicalFacetRefinement(facet) {
      if (!this.isHierarchicalFacetRefined(facet)) {
        throw new Error(facet + ' is not refined.');
      }

      var mod = {};
      mod[facet] = [];
      return this.setQueryParameters({
        hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
      });
    },

    /**
     * Switch the tag refinement
     * @method
     * @param {string} tag the tag to remove or add
     * @return {SearchParameters}
     */
    toggleTagRefinement: function toggleTagRefinement(tag) {
      if (this.isTagRefined(tag)) {
        return this.removeTagRefinement(tag);
      }

      return this.addTagRefinement(tag);
    },

    /**
     * Test if the facet name is from one of the disjunctive facets
     * @method
     * @param {string} facet facet name to test
     * @return {boolean}
     */
    isDisjunctiveFacet: function isDisjunctiveFacet(facet) {
      return this.disjunctiveFacets.indexOf(facet) > -1;
    },

    /**
     * Test if the facet name is from one of the hierarchical facets
     * @method
     * @param {string} facetName facet name to test
     * @return {boolean}
     */
    isHierarchicalFacet: function isHierarchicalFacet(facetName) {
      return this.getHierarchicalFacetByName(facetName) !== undefined;
    },

    /**
     * Test if the facet name is from one of the conjunctive/normal facets
     * @method
     * @param {string} facet facet name to test
     * @return {boolean}
     */
    isConjunctiveFacet: function isConjunctiveFacet(facet) {
      return this.facets.indexOf(facet) > -1;
    },

    /**
     * Returns true if the facet is refined, either for a specific value or in
     * general.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value, optional value. If passed will test that this value
     * is filtering the given facet.
     * @return {boolean} returns true if refined
     */
    isFacetRefined: function isFacetRefined(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },

    /**
     * Returns true if the facet contains exclusions or if a specific value is
     * excluded.
     *
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} [value] optional value. If passed will test that this value
     * is filtering the given facet.
     * @return {boolean} returns true if refined
     */
    isExcludeRefined: function isExcludeRefined(facet, value) {
      if (!this.isConjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
      }

      return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },

    /**
     * Returns true if the facet contains a refinement, or if a value passed is a
     * refinement for the facet.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value optional, will test if the value is used for refinement
     * if there is one, otherwise will test if the facet contains any refinement
     * @return {boolean}
     */
    isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
      if (!this.isDisjunctiveFacet(facet)) {
        throw new Error(facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
      }

      return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
    },

    /**
     * Returns true if the facet contains a refinement, or if a value passed is a
     * refinement for the facet.
     * @method
     * @param {string} facet name of the attribute for used for faceting
     * @param {string} value optional, will test if the value is used for refinement
     * if there is one, otherwise will test if the facet contains any refinement
     * @return {boolean}
     */
    isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
      if (!this.isHierarchicalFacet(facet)) {
        throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
      }

      var refinements = this.getHierarchicalRefinement(facet);

      if (!value) {
        return refinements.length > 0;
      }

      return refinements.indexOf(value) !== -1;
    },

    /**
     * Test if the triple (attribute, operator, value) is already refined.
     * If only the attribute and the operator are provided, it tests if the
     * contains any refinement value.
     * @method
     * @param {string} attribute attribute for which the refinement is applied
     * @param {string} [operator] operator of the refinement
     * @param {string} [value] value of the refinement
     * @return {boolean} true if it is refined
     */
    isNumericRefined: function isNumericRefined(attribute, operator, value) {
      if (value === undefined && operator === undefined) {
        return !!this.numericRefinements[attribute];
      }

      var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;

      if (value === undefined || !isOperatorDefined) {
        return isOperatorDefined;
      }

      var parsedValue = valToNumber_1(value);
      var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
      return isOperatorDefined && isAttributeValueDefined;
    },

    /**
     * Returns true if the tag refined, false otherwise
     * @method
     * @param {string} tag the tag to check
     * @return {boolean}
     */
    isTagRefined: function isTagRefined(tag) {
      return this.tagRefinements.indexOf(tag) !== -1;
    },

    /**
     * Returns the list of all disjunctive facets refined
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {string[]}
     */
    getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
      // attributes used for numeric filter can also be disjunctive
      var numericRefinements = Object.keys(this.numericRefinements);
      var disjunctiveNumericRefinedFacets = this.disjunctiveFacets.filter(function (facet) {
        return numericRefinements.indexOf(facet) > -1;
      });
      return Object.keys(this.disjunctiveFacetsRefinements).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
    },

    /**
     * Returns the list of all disjunctive facets refined
     * @method
     * @param {string} facet name of the attribute used for faceting
     * @param {value} value value used for filtering
     * @return {string[]}
     */
    getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
      var hierarchicalRefinedFacets = Object.keys(this.hierarchicalFacetsRefinements);
      return this.hierarchicalFacets.map(function (facet) {
        return facet.name;
      }).filter(function (name) {
        return hierarchicalRefinedFacets.indexOf(name) > -1;
      });
    },

    /**
     * Returned the list of all disjunctive facets not refined
     * @method
     * @return {string[]}
     */
    getUnrefinedDisjunctiveFacets: function getUnrefinedDisjunctiveFacets() {
      var refinedFacets = this.getRefinedDisjunctiveFacets();
      return this.disjunctiveFacets.filter(function (f) {
        return refinedFacets.indexOf(f) === -1;
      });
    },
    managedParameters: ['index', 'facets', 'disjunctiveFacets', 'facetsRefinements', 'facetsExcludes', 'disjunctiveFacetsRefinements', 'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'],
    getQueryParams: function getQueryParams() {
      var managedParameters = this.managedParameters;
      var queryParams = {};
      var self = this;
      Object.keys(this).forEach(function (paramName) {
        var paramValue = self[paramName];

        if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {
          queryParams[paramName] = paramValue;
        }
      });
      return queryParams;
    },

    /**
     * Let the user set a specific value for a given parameter. Will return the
     * same instance if the parameter is invalid or if the value is the same as the
     * previous one.
     * @method
     * @param {string} parameter the parameter name
     * @param {any} value the value to be set, must be compliant with the definition
     * of the attribute on the object
     * @return {SearchParameters} the updated state
     */
    setQueryParameter: function setParameter(parameter, value) {
      if (this[parameter] === value) return this;
      var modification = {};
      modification[parameter] = value;
      return this.setQueryParameters(modification);
    },

    /**
     * Let the user set any of the parameters with a plain object.
     * @method
     * @param {object} params all the keys and the values to be updated
     * @return {SearchParameters} a new updated instance
     */
    setQueryParameters: function setQueryParameters(params) {
      if (!params) return this;
      var error = SearchParameters.validate(this, params);

      if (error) {
        throw error;
      }

      var self = this;

      var nextWithNumbers = SearchParameters._parseNumbers(params);

      var previousPlainObject = Object.keys(this).reduce(function (acc, key) {
        acc[key] = self[key];
        return acc;
      }, {});
      var nextPlainObject = Object.keys(nextWithNumbers).reduce(function (previous, key) {
        var isPreviousValueDefined = previous[key] !== undefined;
        var isNextValueDefined = nextWithNumbers[key] !== undefined;

        if (isPreviousValueDefined && !isNextValueDefined) {
          return omit(previous, [key]);
        }

        if (isNextValueDefined) {
          previous[key] = nextWithNumbers[key];
        }

        return previous;
      }, previousPlainObject);
      return new this.constructor(nextPlainObject);
    },

    /**
     * Returns a new instance with the page reset. Two scenarios possible:
     * the page is omitted -> return the given instance
     * the page is set -> return a new instance with a page of 0
     * @return {SearchParameters} a new updated instance
     */
    resetPage: function resetPage() {
      if (this.page === undefined) {
        return this;
      }

      return this.setPage(0);
    },

    /**
     * Helper function to get the hierarchicalFacet separator or the default one (`>`)
     * @param  {object} hierarchicalFacet
     * @return {string} returns the hierarchicalFacet.separator or `>` as default
     */
    _getHierarchicalFacetSortBy: function _getHierarchicalFacetSortBy(hierarchicalFacet) {
      return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
    },

    /**
     * Helper function to get the hierarchicalFacet separator or the default one (`>`)
     * @private
     * @param  {object} hierarchicalFacet
     * @return {string} returns the hierarchicalFacet.separator or `>` as default
     */
    _getHierarchicalFacetSeparator: function _getHierarchicalFacetSeparator(hierarchicalFacet) {
      return hierarchicalFacet.separator || ' > ';
    },

    /**
     * Helper function to get the hierarchicalFacet prefix path or null
     * @private
     * @param  {object} hierarchicalFacet
     * @return {string} returns the hierarchicalFacet.rootPath or null as default
     */
    _getHierarchicalRootPath: function _getHierarchicalRootPath(hierarchicalFacet) {
      return hierarchicalFacet.rootPath || null;
    },

    /**
     * Helper function to check if we show the parent level of the hierarchicalFacet
     * @private
     * @param  {object} hierarchicalFacet
     * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
     */
    _getHierarchicalShowParentLevel: function _getHierarchicalShowParentLevel(hierarchicalFacet) {
      if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
        return hierarchicalFacet.showParentLevel;
      }

      return true;
    },

    /**
     * Helper function to get the hierarchicalFacet by it's name
     * @param  {string} hierarchicalFacetName
     * @return {object} a hierarchicalFacet
     */
    getHierarchicalFacetByName: function getHierarchicalFacetByName(hierarchicalFacetName) {
      return find(this.hierarchicalFacets, function (f) {
        return f.name === hierarchicalFacetName;
      });
    },

    /**
     * Get the current breadcrumb for a hierarchical facet, as an array
     * @param  {string} facetName Hierarchical facet name
     * @return {array.<string>} the path as an array of string
     */
    getHierarchicalFacetBreadcrumb: function getHierarchicalFacetBreadcrumb(facetName) {
      if (!this.isHierarchicalFacet(facetName)) {
        throw new Error('Cannot get the breadcrumb of an unknown hierarchical facet: `' + facetName + '`');
      }

      var refinement = this.getHierarchicalRefinement(facetName)[0];
      if (!refinement) return [];

      var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));

      var path = refinement.split(separator);
      return path.map(function (part) {
        return part.trim();
      });
    },
    toString: function toString() {
      return JSON.stringify(this, null, 2);
    }
  };
  /**
   * Callback used for clearRefinement method
   * @callback SearchParameters.clearCallback
   * @param {OperatorList|FacetList} value the value of the filter
   * @param {string} key the current attribute name
   * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
   * depending on the type of facet
   * @return {boolean} `true` if the element should be removed. `false` otherwise.
   */

  var SearchParameters_1 = SearchParameters;

  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined;
      var valIsNull = value === null;
      var othIsDefined = other !== undefined;
      var othIsNull = other === null;

      if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) {
        return 1;
      }

      if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) {
        return -1;
      }
    }

    return 0;
  }
  /**
   * @param {Array<object>} collection object with keys in attributes
   * @param {Array<string>} iteratees attributes
   * @param {Array<string>} orders asc | desc
   */


  function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) {
      return [];
    }

    if (!Array.isArray(orders)) {
      orders = [];
    }

    var result = collection.map(function (value, index) {
      return {
        criteria: iteratees.map(function (iteratee) {
          return value[iteratee];
        }),
        index: index,
        value: value
      };
    });
    result.sort(function comparer(object, other) {
      var index = -1;

      while (++index < object.criteria.length) {
        var res = compareAscending(object.criteria[index], other.criteria[index]);

        if (res) {
          if (index >= orders.length) {
            return res;
          }

          if (orders[index] === 'desc') {
            return -res;
          }

          return res;
        }
      } // This ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.


      return object.index - other.index;
    });
    return result.map(function (res) {
      return res.value;
    });
  }

  var orderBy_1 = orderBy;

  var compact = function compact(array) {
    if (!Array.isArray(array)) {
      return [];
    }

    return array.filter(Boolean);
  };

  var findIndex = function find(array, comparator) {
    if (!Array.isArray(array)) {
      return -1;
    }

    for (var i = 0; i < array.length; i++) {
      if (comparator(array[i])) {
        return i;
      }
    }

    return -1;
  };

  /**
   * Transform sort format from user friendly notation to lodash format
   * @param {string[]} sortBy array of predicate of the form "attribute:order"
   * @param {string[]} [defaults] array of predicate of the form "attribute:order"
   * @return {array.<string[]>} array containing 2 elements : attributes, orders
   */


  var formatSort = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function (sort) {
      return sort.split(':');
    });
    return sortBy.reduce(function preparePredicate(out, sort) {
      var sortInstruction = sort.split(':');
      var matchingDefault = find(defaultInstructions, function (defaultInstruction) {
        return defaultInstruction[0] === sortInstruction[0];
      });

      if (sortInstruction.length > 1 || !matchingDefault) {
        out[0].push(sortInstruction[0]);
        out[1].push(sortInstruction[1]);
        return out;
      }

      out[0].push(matchingDefault[0]);
      out[1].push(matchingDefault[1]);
      return out;
    }, [[], []]);
  };

  var generateHierarchicalTree_1 = generateTrees;







  function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
      var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
      var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || '';

      var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);

      var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);

      var sortBy = formatSort(state._getHierarchicalFacetSortBy(hierarchicalFacet));
      var rootExhaustive = hierarchicalFacetResult.every(function (facetResult) {
        return facetResult.exhaustive;
      });
      var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
      var results = hierarchicalFacetResult;

      if (hierarchicalRootPath) {
        results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
      }

      return results.reduce(generateTreeFn, {
        name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
        count: null,
        // root level, no count
        isRefined: true,
        // root level, always refined
        path: null,
        // root level, no path
        exhaustive: rootExhaustive,
        data: null
      });
    };
  }

  function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
    return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
      var parent = hierarchicalTree;

      if (currentHierarchicalLevel > 0) {
        var level = 0;
        parent = hierarchicalTree;

        while (level < currentHierarchicalLevel) {
          /**
           * @type {object[]]} hierarchical data
           */
          var data = parent && Array.isArray(parent.data) ? parent.data : [];
          parent = find(data, function (subtree) {
            return subtree.isRefined;
          });
          level++;
        }
      } // we found a refined parent, let's add current level data under it


      if (parent) {
        // filter values in case an object has multiple categories:
        //   {
        //     categories: {
        //       level0: ['beers', 'bières'],
        //       level1: ['beers > IPA', 'bières > Belges']
        //     }
        //   }
        //
        // If parent refinement is `beers`, then we do not want to have `bières > Belges`
        // showing up
        var picked = Object.keys(hierarchicalFacetResult.data).map(function (facetValue) {
          return [facetValue, hierarchicalFacetResult.data[facetValue]];
        }).filter(function (tuple) {
          var facetValue = tuple[0];
          return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
        });
        parent.data = orderBy_1(picked.map(function (tuple) {
          var facetValue = tuple[0];
          var facetCount = tuple[1];
          return format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, hierarchicalFacetResult.exhaustive);
        }), sortBy[0], sortBy[1]);
      }

      return hierarchicalTree;
    };
  }

  function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
      return false;
    } // we always want root levels (only when there is no prefix path)


    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
    hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 || // facetValue is a child of the current parent, add it
    facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
  }

  function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
      name: parts[parts.length - 1].trim(),
      path: facetValue,
      count: facetCount,
      isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
      exhaustive: exhaustive,
      data: null
    };
  }

  /**
   * @typedef SearchResults.Facet
   * @type {object}
   * @property {string} name name of the attribute in the record
   * @property {object} data the faceting data: value, number of entries
   * @property {object} stats undefined unless facet_stats is retrieved from algolia
   */

  /**
   * @typedef SearchResults.HierarchicalFacet
   * @type {object}
   * @property {string} name name of the current value given the hierarchical level, trimmed.
   * If root node, you get the facet name
   * @property {number} count number of objects matching this hierarchical value
   * @property {string} path the current hierarchical value full path
   * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
   * @property {HierarchicalFacet[]} data sub values for the current level
   */

  /**
   * @typedef SearchResults.FacetValue
   * @type {object}
   * @property {string} name the facet value itself
   * @property {number} count times this facet appears in the results
   * @property {boolean} isRefined is the facet currently selected
   * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
   */

  /**
   * @typedef Refinement
   * @type {object}
   * @property {string} type the type of filter used:
   * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
   * @property {string} attributeName name of the attribute used for filtering
   * @property {string} name the value of the filter
   * @property {number} numericValue the value as a number. Only for numeric filters.
   * @property {string} operator the operator used. Only for numeric filters.
   * @property {number} count the number of computed hits for this filter. Only on facets.
   * @property {boolean} exhaustive if the count is exhaustive
   */

  /**
   * @param {string[]} attributes
   */


  function getIndices(attributes) {
    var indices = {};
    attributes.forEach(function (val, idx) {
      indices[val] = idx;
    });
    return indices;
  }

  function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) {
      dest.stats = facetStats[key];
    }
  }
  /**
   * @typedef {Object} HierarchicalFacet
   * @property {string} name
   * @property {string[]} attributes
   */

  /**
   * @param {HierarchicalFacet[]} hierarchicalFacets
   * @param {string} hierarchicalAttributeName
   */


  function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
    return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
      var facetNames = hierarchicalFacet.attributes || [];
      return facetNames.indexOf(hierarchicalAttributeName) > -1;
    });
  }
  /*eslint-disable */

  /**
   * Constructor for SearchResults
   * @class
   * @classdesc SearchResults contains the results of a query to Algolia using the
   * {@link AlgoliaSearchHelper}.
   * @param {SearchParameters} state state that led to the response
   * @param {array.<object>} results the results from algolia client
   * @example <caption>SearchResults of the first query in
   * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
  {
     "hitsPerPage": 10,
     "processingTimeMS": 2,
     "facets": [
        {
           "name": "type",
           "data": {
              "HardGood": 6627,
              "BlackTie": 550,
              "Music": 665,
              "Software": 131,
              "Game": 456,
              "Movie": 1571
           },
           "exhaustive": false
        },
        {
           "exhaustive": false,
           "data": {
              "Free shipping": 5507
           },
           "name": "shipping"
        }
    ],
     "hits": [
        {
           "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
           "_highlightResult": {
              "shortDescription": {
                 "matchLevel": "none",
                 "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
                 "matchedWords": []
              },
              "category": {
                 "matchLevel": "none",
                 "value": "Computer Security Software",
                 "matchedWords": []
              },
              "manufacturer": {
                 "matchedWords": [],
                 "value": "Webroot",
                 "matchLevel": "none"
              },
              "name": {
                 "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
                 "matchedWords": [],
                 "matchLevel": "none"
              }
           },
           "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
           "shipping": "Free shipping",
           "bestSellingRank": 4,
           "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
           "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
           "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
           "category": "Computer Security Software",
           "salePrice_range": "1 - 50",
           "objectID": "1688832",
           "type": "Software",
           "customerReviewCount": 5980,
           "salePrice": 49.99,
           "manufacturer": "Webroot"
        },
        ....
    ],
     "nbHits": 10000,
     "disjunctiveFacets": [
        {
           "exhaustive": false,
           "data": {
              "5": 183,
              "12": 112,
              "7": 149,
              ...
           },
           "name": "customerReviewCount",
           "stats": {
              "max": 7461,
              "avg": 157.939,
              "min": 1
           }
        },
        {
           "data": {
              "Printer Ink": 142,
              "Wireless Speakers": 60,
              "Point & Shoot Cameras": 48,
              ...
           },
           "name": "category",
           "exhaustive": false
        },
        {
           "exhaustive": false,
           "data": {
              "> 5000": 2,
              "1 - 50": 6524,
              "501 - 2000": 566,
              "201 - 500": 1501,
              "101 - 200": 1360,
              "2001 - 5000": 47
           },
           "name": "salePrice_range"
        },
        {
           "data": {
              "Dynex™": 202,
              "Insignia™": 230,
              "PNY": 72,
              ...
           },
           "name": "manufacturer",
           "exhaustive": false
        }
    ],
     "query": "",
     "nbPages": 100,
     "page": 0,
     "index": "bestbuy"
  }
   **/

  /*eslint-enable */


  function SearchResults(state, results) {
    var mainSubResponse = results[0];
    this._rawResults = results;
    /**
     * query used to generate the results
     * @member {string}
     */

    this.query = mainSubResponse.query;
    /**
     * The query as parsed by the engine given all the rules.
     * @member {string}
     */

    this.parsedQuery = mainSubResponse.parsedQuery;
    /**
     * all the records that match the search parameters. Each record is
     * augmented with a new attribute `_highlightResult`
     * which is an object keyed by attribute and with the following properties:
     *  - `value` : the value of the facet highlighted (html)
     *  - `matchLevel`: full, partial or none depending on how the query terms match
     * @member {object[]}
     */

    this.hits = mainSubResponse.hits;
    /**
     * index where the results come from
     * @member {string}
     */

    this.index = mainSubResponse.index;
    /**
     * number of hits per page requested
     * @member {number}
     */

    this.hitsPerPage = mainSubResponse.hitsPerPage;
    /**
     * total number of hits of this query on the index
     * @member {number}
     */

    this.nbHits = mainSubResponse.nbHits;
    /**
     * total number of pages with respect to the number of hits per page and the total number of hits
     * @member {number}
     */

    this.nbPages = mainSubResponse.nbPages;
    /**
     * current page
     * @member {number}
     */

    this.page = mainSubResponse.page;
    /**
     * sum of the processing time of all the queries
     * @member {number}
     */

    this.processingTimeMS = results.reduce(function (sum, result) {
      return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
    }, 0);
    /**
     * The position if the position was guessed by IP.
     * @member {string}
     * @example "48.8637,2.3615",
     */

    this.aroundLatLng = mainSubResponse.aroundLatLng;
    /**
     * The radius computed by Algolia.
     * @member {string}
     * @example "126792922",
     */

    this.automaticRadius = mainSubResponse.automaticRadius;
    /**
     * String identifying the server used to serve this request.
     *
     * getRankingInfo needs to be set to `true` for this to be returned
     *
     * @member {string}
     * @example "c7-use-2.algolia.net",
     */

    this.serverUsed = mainSubResponse.serverUsed;
    /**
     * Boolean that indicates if the computation of the counts did time out.
     * @deprecated
     * @member {boolean}
     */

    this.timeoutCounts = mainSubResponse.timeoutCounts;
    /**
     * Boolean that indicates if the computation of the hits did time out.
     * @deprecated
     * @member {boolean}
     */

    this.timeoutHits = mainSubResponse.timeoutHits;
    /**
     * True if the counts of the facets is exhaustive
     * @member {boolean}
     */

    this.exhaustiveFacetsCount = mainSubResponse.exhaustiveFacetsCount;
    /**
     * True if the number of hits is exhaustive
     * @member {boolean}
     */

    this.exhaustiveNbHits = mainSubResponse.exhaustiveNbHits;
    /**
     * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
     * @member {object[]}
     */

    this.userData = mainSubResponse.userData;
    /**
     * queryID is the unique identifier of the query used to generate the current search results.
     * This value is only available if the `clickAnalytics` search parameter is set to `true`.
     * @member {string}
     */

    this.queryID = mainSubResponse.queryID;
    /**
     * disjunctive facets results
     * @member {SearchResults.Facet[]}
     */

    this.disjunctiveFacets = [];
    /**
     * disjunctive facets results
     * @member {SearchResults.HierarchicalFacet[]}
     */

    this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
      return [];
    });
    /**
     * other facets results
     * @member {SearchResults.Facet[]}
     */

    this.facets = [];
    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;
    var self = this; // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.

    var mainFacets = mainSubResponse.facets || {};
    Object.keys(mainFacets).forEach(function (facetKey) {
      var facetValueObject = mainFacets[facetKey];
      var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);

      if (hierarchicalFacet) {
        // Place the hierarchicalFacet data at the correct index depending on
        // the attributes order that was defined at the helper initialization
        var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
        var idxAttributeName = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        self.hierarchicalFacets[idxAttributeName][facetIndex] = {
          attribute: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
      } else {
        var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
        var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
        var position;

        if (isFacetDisjunctive) {
          position = disjunctiveFacetsIndices[facetKey];
          self.disjunctiveFacets[position] = {
            name: facetKey,
            data: facetValueObject,
            exhaustive: mainSubResponse.exhaustiveFacetsCount
          };
          assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
        }

        if (isFacetConjunctive) {
          position = facetsIndices[facetKey];
          self.facets[position] = {
            name: facetKey,
            data: facetValueObject,
            exhaustive: mainSubResponse.exhaustiveFacetsCount
          };
          assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
        }
      }
    }); // Make sure we do not keep holes within the hierarchical facets

    this.hierarchicalFacets = compact(this.hierarchicalFacets); // aggregate the refined disjunctive facets

    disjunctiveFacets.forEach(function (disjunctiveFacet) {
      var result = results[nextDisjunctiveResult];
      var facets = result && result.facets ? result.facets : {};
      var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet); // There should be only item in facets.

      Object.keys(facets).forEach(function (dfacet) {
        var facetResults = facets[dfacet];
        var position;

        if (hierarchicalFacet) {
          position = findIndex(state.hierarchicalFacets, function (f) {
            return f.name === hierarchicalFacet.name;
          });
          var attributeIndex = findIndex(self.hierarchicalFacets[position], function (f) {
            return f.attribute === dfacet;
          }); // previous refinements and no results so not able to find it

          if (attributeIndex === -1) {
            return;
          }

          self.hierarchicalFacets[position][attributeIndex].data = merge_1({}, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
        } else {
          position = disjunctiveFacetsIndices[dfacet];
          var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
          self.disjunctiveFacets[position] = {
            name: dfacet,
            data: defaultsPure({}, facetResults, dataFromMainRequest),
            exhaustive: result.exhaustiveFacetsCount
          };
          assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);

          if (state.disjunctiveFacetsRefinements[dfacet]) {
            state.disjunctiveFacetsRefinements[dfacet].forEach(function (refinementValue) {
              // add the disjunctive refinements if it is no more retrieved
              if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) {
                self.disjunctiveFacets[position].data[refinementValue] = 0;
              }
            });
          }
        }
      });
      nextDisjunctiveResult++;
    }); // if we have some root level values for hierarchical facets, merge them

    state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);

      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      var currentRefinement = state.getHierarchicalRefinement(refinedFacet); // if we are already at a root refinement (or no refinement at all), there is no
      // root level values request

      if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
        return;
      }

      var result = results[nextDisjunctiveResult];
      var facets = result && result.facets ? result.facets : {};
      Object.keys(facets).forEach(function (dfacet) {
        var facetResults = facets[dfacet];
        var position = findIndex(state.hierarchicalFacets, function (f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(self.hierarchicalFacets[position], function (f) {
          return f.attribute === dfacet;
        }); // previous refinements and no results so not able to find it

        if (attributeIndex === -1) {
          return;
        } // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
        // then the disjunctive values will be `beers` (count: 100),
        // but we do not want to display
        //   | beers (100)
        //     > IPA (5)
        // We want
        //   | beers (5)
        //     > IPA (5)


        var defaultData = {};

        if (currentRefinement.length > 0) {
          var root = currentRefinement[0].split(separator)[0];
          defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
        }

        self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
      });
      nextDisjunctiveResult++;
    }); // add the excludes

    Object.keys(state.facetsExcludes).forEach(function (facetName) {
      var excludes = state.facetsExcludes[facetName];
      var position = facetsIndices[facetName];
      self.facets[position] = {
        name: facetName,
        data: mainSubResponse.facets[facetName],
        exhaustive: mainSubResponse.exhaustiveFacetsCount
      };
      excludes.forEach(function (facetValue) {
        self.facets[position] = self.facets[position] || {
          name: facetName
        };
        self.facets[position].data = self.facets[position].data || {};
        self.facets[position].data[facetValue] = 0;
      });
    });
    /**
     * @type {Array}
     */

    this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree_1(state));
    /**
     * @type {Array}
     */

    this.facets = compact(this.facets);
    /**
     * @type {Array}
     */

    this.disjunctiveFacets = compact(this.disjunctiveFacets);
    this._state = state;
  }
  /**
   * Get a facet object with its name
   * @deprecated
   * @param {string} name name of the faceted attribute
   * @return {SearchResults.Facet} the facet object
   */


  SearchResults.prototype.getFacetByName = function (name) {
    function predicate(facet) {
      return facet.name === name;
    }

    return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
  };
  /**
   * Get the facet values of a specified attribute from a SearchResults object.
   * @private
   * @param {SearchResults} results the search results to search in
   * @param {string} attribute name of the faceted attribute to search for
   * @return {array|object} facet values. For the hierarchical facets it is an object.
   */


  function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
      return facet.name === attribute;
    }

    if (results._state.isConjunctiveFacet(attribute)) {
      var facet = find(results.facets, predicate);
      if (!facet) return [];
      return Object.keys(facet.data).map(function (name) {
        return {
          name: name,
          count: facet.data[name],
          isRefined: results._state.isFacetRefined(attribute, name),
          isExcluded: results._state.isExcludeRefined(attribute, name)
        };
      });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
      var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
      if (!disjunctiveFacet) return [];
      return Object.keys(disjunctiveFacet.data).map(function (name) {
        return {
          name: name,
          count: disjunctiveFacet.data[name],
          isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)
        };
      });
    } else if (results._state.isHierarchicalFacet(attribute)) {
      return find(results.hierarchicalFacets, predicate);
    }
  }
  /**
   * Sort nodes of a hierarchical facet results
   * @private
   * @param {HierarchicalFacet} node node to upon which we want to apply the sort
   */


  function recSort(sortFn, node) {
    if (!node.data || node.data.length === 0) {
      return node;
    }

    var children = node.data.map(function (childNode) {
      return recSort(sortFn, childNode);
    });
    var sortedChildren = sortFn(children);
    var newNode = merge_1({}, node, {
      data: sortedChildren
    });
    return newNode;
  }

  SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

  function vanillaSortFn(order, data) {
    return data.sort(order);
  }
  /**
   * Get a the list of values for a given facet attribute. Those values are sorted
   * refinement first, descending count (bigger value on top), and name ascending
   * (alphabetical order). The sort formula can overridden using either string based
   * predicates or a function.
   *
   * This method will return all the values returned by the Algolia engine plus all
   * the values already refined. This means that it can happen that the
   * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
   * might not be respected if you have facet values that are already refined.
   * @param {string} attribute attribute name
   * @param {object} opts configuration options.
   * @param {Array.<string> | function} opts.sortBy
   * When using strings, it consists of
   * the name of the [FacetValue](#SearchResults.FacetValue) or the
   * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
   * order (`asc` or `desc`). For example to order the value by count, the
   * argument would be `['count:asc']`.
   *
   * If only the attribute name is specified, the ordering defaults to the one
   * specified in the default value for this attribute.
   *
   * When not specified, the order is
   * ascending.  This parameter can also be a function which takes two facet
   * values and should return a number, 0 if equal, 1 if the first argument is
   * bigger or -1 otherwise.
   *
   * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
   * @return {FacetValue[]|HierarchicalFacet} depending on the type of facet of
   * the attribute requested (hierarchical, disjunctive or conjunctive)
   * @example
   * helper.on('result', function(event){
   *   //get values ordered only by name ascending using the string predicate
   *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
   *   //get values  ordered only by count ascending using a function
   *   event.results.getFacetValues('city', {
   *     // this is equivalent to ['count:asc']
   *     sortBy: function(a, b) {
   *       if (a.count === b.count) return 0;
   *       if (a.count > b.count)   return 1;
   *       if (b.count > a.count)   return -1;
   *     }
   *   });
   * });
   */


  SearchResults.prototype.getFacetValues = function (attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) throw new Error(attribute + ' is not a retrieved facet.');
    var options = defaultsPure({}, opts, {
      sortBy: SearchResults.DEFAULT_SORT
    });

    if (Array.isArray(options.sortBy)) {
      var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);

      if (Array.isArray(facetValues)) {
        return orderBy_1(facetValues, order[0], order[1]);
      } // If facetValues is not an array, it's an object thus a hierarchical facet object


      return recSort(function (hierarchicalFacetValues) {
        return orderBy_1(hierarchicalFacetValues, order[0], order[1]);
      }, facetValues);
    } else if (typeof options.sortBy === 'function') {
      if (Array.isArray(facetValues)) {
        return facetValues.sort(options.sortBy);
      } // If facetValues is not an array, it's an object thus a hierarchical facet object


      return recSort(function (data) {
        return vanillaSortFn(options.sortBy, data);
      }, facetValues);
    }

    throw new Error('options.sortBy is optional but if defined it must be ' + 'either an array of string (predicates) or a sorting function');
  };
  /**
   * Returns the facet stats if attribute is defined and the facet contains some.
   * Otherwise returns undefined.
   * @param {string} attribute name of the faceted attribute
   * @return {object} The stats of the facet
   */


  SearchResults.prototype.getFacetStats = function (attribute) {
    if (this._state.isConjunctiveFacet(attribute)) {
      return getFacetStatsIfAvailable(this.facets, attribute);
    } else if (this._state.isDisjunctiveFacet(attribute)) {
      return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    }

    throw new Error(attribute + ' is not present in `facets` or `disjunctiveFacets`');
  };
  /**
   * @typedef {Object} FacetListItem
   * @property {string} name
   */

  /**
   * @param {FacetListItem[]} facetList (has more items, but enough for here)
   * @param {string} facetName
   */


  function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find(facetList, function (facet) {
      return facet.name === facetName;
    });
    return data && data.stats;
  }
  /**
   * Returns all refinements for all filters + tags. It also provides
   * additional information: count and exhaustiveness for each filter.
   *
   * See the [refinement type](#Refinement) for an exhaustive view of the available
   * data.
   *
   * @return {Array.<Refinement>} all the refinements
   */


  SearchResults.prototype.getRefinements = function () {
    var state = this._state;
    var results = this;
    var res = [];
    Object.keys(state.facetsRefinements).forEach(function (attributeName) {
      state.facetsRefinements[attributeName].forEach(function (name) {
        res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
      });
    });
    Object.keys(state.facetsExcludes).forEach(function (attributeName) {
      state.facetsExcludes[attributeName].forEach(function (name) {
        res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
      });
    });
    Object.keys(state.disjunctiveFacetsRefinements).forEach(function (attributeName) {
      state.disjunctiveFacetsRefinements[attributeName].forEach(function (name) {
        res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
      });
    });
    Object.keys(state.hierarchicalFacetsRefinements).forEach(function (attributeName) {
      state.hierarchicalFacetsRefinements[attributeName].forEach(function (name) {
        res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
      });
    });
    Object.keys(state.numericRefinements).forEach(function (attributeName) {
      var operators = state.numericRefinements[attributeName];
      Object.keys(operators).forEach(function (operator) {
        operators[operator].forEach(function (value) {
          res.push({
            type: 'numeric',
            attributeName: attributeName,
            name: value,
            numericValue: value,
            operator: operator
          });
        });
      });
    });
    state.tagRefinements.forEach(function (name) {
      res.push({
        type: 'tag',
        attributeName: '_tags',
        name: name
      });
    });
    return res;
  };
  /**
   * @typedef {Object} Facet
   * @property {string} name
   * @property {Object} data
   * @property {boolean} exhaustive
   */

  /**
   * @param {*} state
   * @param {*} type
   * @param {string} attributeName
   * @param {*} name
   * @param {Facet[]} resultsFacets
   */


  function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find(resultsFacets, function (f) {
      return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = facet && facet.exhaustive || false;
    return {
      type: type,
      attributeName: attributeName,
      name: name,
      count: count,
      exhaustive: exhaustive
    };
  }
  /**
   * @param {*} state
   * @param {string} attributeName
   * @param {*} name
   * @param {Facet[]} resultsFacets
   */


  function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);

    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);

    var split = name.split(separator);
    var rootFacet = find(resultsFacets, function (facet) {
      return facet.name === attributeName;
    });
    var facet = split.reduce(function (intermediateFacet, part) {
      var newFacet = intermediateFacet && find(intermediateFacet.data, function (f) {
        return f.name === part;
      });
      return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);
    var count = facet && facet.count || 0;
    var exhaustive = facet && facet.exhaustive || false;
    var path = facet && facet.path || '';
    return {
      type: 'hierarchical',
      attributeName: attributeName,
      name: path,
      count: count,
      exhaustive: exhaustive
    };
  }

  var SearchResults_1 = SearchResults;

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }

  module.exports = EventEmitter; // Backwards-compat with node 0.10.x

  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.

  EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

    if (type === 'error') {
      if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
        er = arguments[1];

        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
      }
    }

    handler = this._events[type];
    if (isUndefined(handler)) return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;

        case 2:
          handler.call(this, arguments[1]);
          break;

        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower

        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;

      for (i = 0; i < len; i++) {
        listeners[i].apply(this, args);
      }
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".

    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
      this._events[type].push(listener);else // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener]; // Check for listener leak

    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);
    return this;
  }; // emits a 'removeListener' event iff the listener was removed


  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;
    if (!this._events) return this; // not listening for removeListener, no need to emit

    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    } // emit removeListener for all listeners on all events


    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }

      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length) {
        this.removeListener(type, listeners[listeners.length - 1]);
      }
    }

    delete this._events[type];
    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];
      if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
    }

    return 0;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  var events = /*#__PURE__*/Object.freeze({

  });

  function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  var inherits_1 = inherits;

  /**
   * A DerivedHelper is a way to create sub requests to
   * Algolia from a main helper.
   * @class
   * @classdesc The DerivedHelper provides an event based interface for search callbacks:
   *  - search: when a search is triggered using the `search()` method.
   *  - result: when the response is retrieved from Algolia and is processed.
   *    This event contains a {@link SearchResults} object and the
   *    {@link SearchParameters} corresponding to this answer.
   */


  function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
  }

  inherits_1(DerivedHelper, events.EventEmitter);
  /**
   * Detach this helper from the main helper
   * @return {undefined}
   * @throws Error if the derived helper is already detached
   */

  DerivedHelper.prototype.detach = function () {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
  };

  DerivedHelper.prototype.getModifiedState = function (parameters) {
    return this.fn(parameters);
  };

  var DerivedHelper_1 = DerivedHelper;

  var requestBuilder = {
    /**
     * Get all the queries to send to the client, those queries can used directly
     * with the Algolia client.
     * @private
     * @return {object[]} The queries
     */
    _getQueries: function getQueries(index, state) {
      var queries = []; // One query for the hits

      queries.push({
        indexName: index,
        params: requestBuilder._getHitsSearchParams(state)
      }); // One for each disjunctive facets

      state.getRefinedDisjunctiveFacets().forEach(function (refinedFacet) {
        queries.push({
          indexName: index,
          params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
        });
      }); // maybe more to get the root level of hierarchical facets when activated

      state.getRefinedHierarchicalFacets().forEach(function (refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet); // if we are deeper than level 0 (starting from `beer > IPA`)
        // we want to get the root values

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

        if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
          queries.push({
            indexName: index,
            params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
          });
        }
      });
      return queries;
    },

    /**
     * Build search parameters used to fetch hits
     * @private
     * @return {object.<string, any>}
     */
    _getHitsSearchParams: function _getHitsSearchParams(state) {
      var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));

      var facetFilters = requestBuilder._getFacetFilters(state);

      var numericFilters = requestBuilder._getNumericFilters(state);

      var tagFilters = requestBuilder._getTagFilters(state);

      var additionalParams = {
        facets: facets,
        tagFilters: tagFilters
      };

      if (facetFilters.length > 0) {
        additionalParams.facetFilters = facetFilters;
      }

      if (numericFilters.length > 0) {
        additionalParams.numericFilters = numericFilters;
      }

      return merge_1({}, state.getQueryParams(), additionalParams);
    },

    /**
     * Build search parameters used to fetch a disjunctive facet
     * @private
     * @param  {string} facet the associated facet name
     * @param  {boolean} hierarchicalRootLevel ?? FIXME
     * @return {object}
     */
    _getDisjunctiveFacetSearchParams: function _getDisjunctiveFacetSearchParams(state, facet, hierarchicalRootLevel) {
      var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);

      var numericFilters = requestBuilder._getNumericFilters(state, facet);

      var tagFilters = requestBuilder._getTagFilters(state);

      var additionalParams = {
        hitsPerPage: 1,
        page: 0,
        attributesToRetrieve: [],
        attributesToHighlight: [],
        attributesToSnippet: [],
        tagFilters: tagFilters,
        analytics: false,
        clickAnalytics: false
      };
      var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

      if (hierarchicalFacet) {
        additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
      } else {
        additionalParams.facets = facet;
      }

      if (numericFilters.length > 0) {
        additionalParams.numericFilters = numericFilters;
      }

      if (facetFilters.length > 0) {
        additionalParams.facetFilters = facetFilters;
      }

      return merge_1({}, state.getQueryParams(), additionalParams);
    },

    /**
     * Return the numeric filters in an algolia request fashion
     * @private
     * @param {string} [facetName] the name of the attribute for which the filters should be excluded
     * @return {string[]} the numeric filters in the algolia format
     */
    _getNumericFilters: function _getNumericFilters(state, facetName) {
      if (state.numericFilters) {
        return state.numericFilters;
      }

      var numericFilters = [];
      Object.keys(state.numericRefinements).forEach(function (attribute) {
        var operators = state.numericRefinements[attribute] || {};
        Object.keys(operators).forEach(function (operator) {
          var values = operators[operator] || [];

          if (facetName !== attribute) {
            values.forEach(function (value) {
              if (Array.isArray(value)) {
                var vs = value.map(function (v) {
                  return attribute + operator + v;
                });
                numericFilters.push(vs);
              } else {
                numericFilters.push(attribute + operator + value);
              }
            });
          }
        });
      });
      return numericFilters;
    },

    /**
     * Return the tags filters depending
     * @private
     * @return {string}
     */
    _getTagFilters: function _getTagFilters(state) {
      if (state.tagFilters) {
        return state.tagFilters;
      }

      return state.tagRefinements.join(',');
    },

    /**
     * Build facetFilters parameter based on current refinements. The array returned
     * contains strings representing the facet filters in the algolia format.
     * @private
     * @param  {string} [facet] if set, the current disjunctive facet
     * @return {array.<string>}
     */
    _getFacetFilters: function _getFacetFilters(state, facet, hierarchicalRootLevel) {
      var facetFilters = [];
      var facetsRefinements = state.facetsRefinements || {};
      Object.keys(facetsRefinements).forEach(function (facetName) {
        var facetValues = facetsRefinements[facetName] || [];
        facetValues.forEach(function (facetValue) {
          facetFilters.push(facetName + ':' + facetValue);
        });
      });
      var facetsExcludes = state.facetsExcludes || {};
      Object.keys(facetsExcludes).forEach(function (facetName) {
        var facetValues = facetsExcludes[facetName] || [];
        facetValues.forEach(function (facetValue) {
          facetFilters.push(facetName + ':-' + facetValue);
        });
      });
      var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
      Object.keys(disjunctiveFacetsRefinements).forEach(function (facetName) {
        var facetValues = disjunctiveFacetsRefinements[facetName] || [];

        if (facetName === facet || !facetValues || facetValues.length === 0) {
          return;
        }

        var orFilters = [];
        facetValues.forEach(function (facetValue) {
          orFilters.push(facetName + ':' + facetValue);
        });
        facetFilters.push(orFilters);
      });
      var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
      Object.keys(hierarchicalFacetsRefinements).forEach(function (facetName) {
        var facetValues = hierarchicalFacetsRefinements[facetName] || [];
        var facetValue = facetValues[0];

        if (facetValue === undefined) {
          return;
        }

        var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

        var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);

        var attributeToRefine;
        var attributesIndex; // we ask for parent facet values only when the `facet` is the current hierarchical facet

        if (facet === facetName) {
          // if we are at the root level already, no need to ask for facet values, we get them from
          // the hits query
          if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
            return;
          }

          if (!rootPath) {
            attributesIndex = facetValue.split(separator).length - 2;
            facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
          } else {
            attributesIndex = rootPath.split(separator).length - 1;
            facetValue = rootPath;
          }

          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        } else {
          attributesIndex = facetValue.split(separator).length - 1;
          attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
        }

        if (attributeToRefine) {
          facetFilters.push([attributeToRefine + ':' + facetValue]);
        }
      });
      return facetFilters;
    },
    _getHitsHierarchicalFacetsAttributes: function _getHitsHierarchicalFacetsAttributes(state) {
      var out = [];
      return state.hierarchicalFacets.reduce( // ask for as much levels as there's hierarchical refinements
      function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0]; // if no refinement, ask for root level

        if (!hierarchicalRefinement) {
          allAttributes.push(hierarchicalFacet.attributes[0]);
          return allAttributes;
        }

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

        var level = hierarchicalRefinement.split(separator).length;
        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
        return allAttributes.concat(newAttributes);
      }, out);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function _getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, rootLevel) {
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

      if (rootLevel === true) {
        var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);

        var attributeIndex = 0;

        if (rootPath) {
          attributeIndex = rootPath.split(separator).length;
        }

        return [hierarchicalFacet.attributes[attributeIndex]];
      }

      var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || ''; // if refinement is 'beers > IPA > Flying dog',
      // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

      var parentLevel = hierarchicalRefinement.split(separator).length - 1;
      return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },
    getSearchForFacetQuery: function getSearchForFacetQuery(facetName, query, maxFacetHits, state) {
      var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
      var searchForFacetSearchParameters = {
        facetQuery: query,
        facetName: facetName
      };

      if (typeof maxFacetHits === 'number') {
        searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
      }

      return merge_1({}, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters);
    }
  };
  var requestBuilder_1 = requestBuilder;

  var version = '2.28.0';

  /**
   * Event triggered when a parameter is set or updated
   * @event AlgoliaSearchHelper#event:change
   * @property {object} event
   * @property {SearchParameters} event.state the current parameters with the latest changes applied
   * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
   * @example
   * helper.on('change', function(event) {
   *   console.log('The parameters have changed');
   * });
   */

  /**
   * Event triggered when a main search is sent to Algolia
   * @event AlgoliaSearchHelper#event:search
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search
   * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
   * @example
   * helper.on('search', function(event) {
   *   console.log('Search sent');
   * });
   */

  /**
   * Event triggered when a search using `searchForFacetValues` is sent to Algolia
   * @event AlgoliaSearchHelper#event:searchForFacetValues
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search it is the first search.
   * @property {string} event.facet the facet searched into
   * @property {string} event.query the query used to search in the facets
   * @example
   * helper.on('searchForFacetValues', function(event) {
   *   console.log('searchForFacetValues sent');
   * });
   */

  /**
   * Event triggered when a search using `searchOnce` is sent to Algolia
   * @event AlgoliaSearchHelper#event:searchOnce
   * @property {object} event
   * @property {SearchParameters} event.state the parameters used for this search it is the first search.
   * @example
   * helper.on('searchOnce', function(event) {
   *   console.log('searchOnce sent');
   * });
   */

  /**
   * Event triggered when the results are retrieved from Algolia
   * @event AlgoliaSearchHelper#event:result
   * @property {object} event
   * @property {SearchResults} event.results the results received from Algolia
   * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
   * @example
   * helper.on('result', function(event) {
   *   console.log('Search results received');
   * });
   */

  /**
   * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
   * used, the error can be caught using this event.
   * @event AlgoliaSearchHelper#event:error
   * @property {object} event
   * @property {Error} event.error the error returned by the Algolia.
   * @example
   * helper.on('error', function(event) {
   *   console.log('Houston we got a problem.');
   * });
   */

  /**
   * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
   * @event AlgoliaSearchHelper#event:searchQueueEmpty
   * @example
   * helper.on('searchQueueEmpty', function() {
   *   console.log('No more search pending');
   *   // This is received before the result event if we're not expecting new results
   * });
   *
   * helper.search();
   */

  /**
   * Initialize a new AlgoliaSearchHelper
   * @class
   * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
   * search. It provides an event based interface for search callbacks:
   *  - change: when the internal search state is changed.
   *    This event contains a {@link SearchParameters} object and the
   *    {@link SearchResults} of the last result if any.
   *  - search: when a search is triggered using the `search()` method.
   *  - result: when the response is retrieved from Algolia and is processed.
   *    This event contains a {@link SearchResults} object and the
   *    {@link SearchParameters} corresponding to this answer.
   *  - error: when the response is an error. This event contains the error returned by the server.
   * @param  {AlgoliaSearch} client an AlgoliaSearch client
   * @param  {string} index the index name to query
   * @param  {SearchParameters | object} options an object defining the initial
   * config of the search. It doesn't have to be a {SearchParameters},
   * just an object containing the properties you need from it.
   */


  function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === 'function') {
      client.addAlgoliaAgent('JS Helper (' + version + ')');
    }

    this.setClient(client);
    var opts = options || {};
    opts.index = index;
    this.state = SearchParameters_1.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
  }

  inherits_1(AlgoliaSearchHelper, events.EventEmitter);
  /**
   * Start the search with the parameters set in the state. When the
   * method is called, it triggers a `search` event. The results will
   * be available through the `result` event. If an error occurs, an
   * `error` will be fired instead.
   * @return {AlgoliaSearchHelper}
   * @fires search
   * @fires result
   * @fires error
   * @chainable
   */

  AlgoliaSearchHelper.prototype.search = function () {
    this._search({
      onlyWithDerivedHelpers: false
    });

    return this;
  };

  AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function () {
    this._search({
      onlyWithDerivedHelpers: true
    });

    return this;
  };
  /**
   * Gets the search query parameters that would be sent to the Algolia Client
   * for the hits
   * @return {object} Query Parameters
   */


  AlgoliaSearchHelper.prototype.getQuery = function () {
    var state = this.state;
    return requestBuilder_1._getHitsSearchParams(state);
  };
  /**
   * Start a search using a modified version of the current state. This method does
   * not trigger the helper lifecycle and does not modify the state kept internally
   * by the helper. This second aspect means that the next search call will be the
   * same as a search call before calling searchOnce.
   * @param {object} options can contain all the parameters that can be set to SearchParameters
   * plus the index
   * @param {function} [callback] optional callback executed when the response from the
   * server is back.
   * @return {promise|undefined} if a callback is passed the method returns undefined
   * otherwise it returns a promise containing an object with two keys :
   *  - content with a SearchResults
   *  - state with the state used for the query as a SearchParameters
   * @example
   * // Changing the number of records returned per page to 1
   * // This example uses the callback API
   * var state = helper.searchOnce({hitsPerPage: 1},
   *   function(error, content, state) {
   *     // if an error occurred it will be passed in error, otherwise its value is null
   *     // content contains the results formatted as a SearchResults
   *     // state is the instance of SearchParameters used for this search
   *   });
   * @example
   * // Changing the number of records returned per page to 1
   * // This example uses the promise API
   * var state1 = helper.searchOnce({hitsPerPage: 1})
   *                 .then(promiseHandler);
   *
   * function promiseHandler(res) {
   *   // res contains
   *   // {
   *   //   content : SearchResults
   *   //   state   : SearchParameters (the one used for this specific search)
   *   // }
   * }
   */


  AlgoliaSearchHelper.prototype.searchOnce = function (options, cb) {
    var tempState = !options ? this.state : this.state.setQueryParameters(options);

    var queries = requestBuilder_1._getQueries(tempState.index, tempState);

    var self = this;
    this._currentNbQueries++;
    this.emit('searchOnce', {
      state: tempState
    });

    if (cb) {
      this.client.search(queries).then(function (content) {
        self._currentNbQueries--;

        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(null, new SearchResults_1(tempState, content.results), tempState);
      }).catch(function (err) {
        self._currentNbQueries--;

        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(err, null, tempState);
      });
      return undefined;
    }

    return this.client.search(queries).then(function (content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      return {
        content: new SearchResults_1(tempState, content.results),
        state: tempState,
        _originalResponse: content
      };
    }, function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    });
  };
  /**
   * Structure of each result when using
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   * @typedef FacetSearchHit
   * @type {object}
   * @property {string} value the facet value
   * @property {string} highlighted the facet value highlighted with the query string
   * @property {number} count number of occurrence of this facet value
   * @property {boolean} isRefined true if the value is already refined
   */

  /**
   * Structure of the data resolved by the
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   * promise.
   * @typedef FacetSearchResult
   * @type {object}
   * @property {FacetSearchHit} facetHits the results for this search for facet values
   * @property {number} processingTimeMS time taken by the query inside the engine
   */

  /**
   * Search for facet values based on an query and the name of a faceted attribute. This
   * triggers a search and will return a promise. On top of using the query, it also sends
   * the parameters from the state so that the search is narrowed down to only the possible values.
   *
   * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
   * @param {string} facet the name of the faceted attribute
   * @param {string} query the string query for the search
   * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
   * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
   * it in the generated query.
   * @return {promise.<FacetSearchResult>} the results of the search
   */


  AlgoliaSearchHelper.prototype.searchForFacetValues = function (facet, query, maxFacetHits, userState) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';

    if (!clientHasSFFV && typeof this.client.initIndex !== 'function') {
      throw new Error('search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues');
    }

    var state = this.state.setQueryParameters(userState || {});
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder_1.getSearchForFacetQuery(facet, query, maxFacetHits, state);
    this._currentNbQueries++;
    var self = this;
    this.emit('searchForFacetValues', {
      state: state,
      facet: facet,
      query: query
    });
    var searchForFacetValuesPromise = clientHasSFFV ? this.client.searchForFacetValues([{
      indexName: state.index,
      params: algoliaQuery
    }]) : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
    return searchForFacetValuesPromise.then(function addIsRefined(content) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      content = Array.isArray(content) ? content[0] : content;
      content.facetHits.forEach(function (f) {
        f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.value) : state.isFacetRefined(facet, f.value);
      });
      return content;
    }, function (e) {
      self._currentNbQueries--;
      if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
      throw e;
    });
  };
  /**
   * Sets the text query used for the search.
   *
   * This method resets the current page to 0.
   * @param  {string} q the user query
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.setQuery = function (q) {
    this._change({
      state: this.state.resetPage().setQuery(q),
      isPageReset: true
    });

    return this;
  };
  /**
   * Remove all the types of refinements except tags. A string can be provided to remove
   * only the refinements of a specific attribute. For more advanced use case, you can
   * provide a function instead. This function should follow the
   * [clearCallback definition](#SearchParameters.clearCallback).
   *
   * This method resets the current page to 0.
   * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   * @example
   * // Removing all the refinements
   * helper.clearRefinements().search();
   * @example
   * // Removing all the filters on a the category attribute.
   * helper.clearRefinements('category').search();
   * @example
   * // Removing only the exclude filters on the category facet.
   * helper.clearRefinements(function(value, attribute, type) {
   *   return type === 'exclude' && attribute === 'category';
   * }).search();
   */


  AlgoliaSearchHelper.prototype.clearRefinements = function (name) {
    this._change({
      state: this.state.resetPage().clearRefinements(name),
      isPageReset: true
    });

    return this;
  };
  /**
   * Remove all the tag filters.
   *
   * This method resets the current page to 0.
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.clearTags = function () {
    this._change({
      state: this.state.resetPage().clearTags(),
      isPageReset: true
    });

    return this;
  };
  /**
   * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function () {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
  };
  /**
   * Adds a refinement on a hierarchical facet. It will throw
   * an exception if the facet is not defined or if the facet
   * is already refined.
   *
   * This method resets the current page to 0.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {AlgoliaSearchHelper}
   * @throws Error if the facet is not defined or if the facet is refined
   * @chainable
   * @fires change
   */


  AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} attribute the attribute on which the numeric filter applies
   * @param  {string} operator the operator of the filter
   * @param  {number} value the value of the filter
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.addNumericRefinement = function (attribute, operator, value) {
    this._change({
      state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * Adds a filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.addFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().addFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.addRefine = function () {
    return this.addFacetRefinement.apply(this, arguments);
  };
  /**
   * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value (will be converted to string)
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.addFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().addExcludeRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
   */


  AlgoliaSearchHelper.prototype.addExclude = function () {
    return this.addFacetExclusion.apply(this, arguments);
  };
  /**
   * Adds a tag filter with the `tag` provided. If the
   * filter is already set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param {string} tag the tag to add to the filter
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.addTag = function (tag) {
    this._change({
      state: this.state.resetPage().addTagRefinement(tag),
      isPageReset: true
    });

    return this;
  };
  /**
   * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * Some parameters are optional, triggering different behavior:
   *  - if the value is not provided, then all the numeric value will be removed for the
   *  specified attribute/operator couple.
   *  - if the operator is not provided either, then all the numeric filter on this attribute
   *  will be removed.
   *
   * This method resets the current page to 0.
   * @param  {string} attribute the attribute on which the numeric filter applies
   * @param  {string} [operator] the operator of the filter
   * @param  {number} [value] the value of the filter
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeNumericRefinement = function (attribute, operator, value) {
    this._change({
      state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function () {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
  };
  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {AlgoliaSearchHelper}
   * @throws Error if the facet is not defined or if the facet is not refined
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function (facet) {
    this._change({
      state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
      isPageReset: true
    });

    return this;
  };
  /**
   * Removes a filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().removeFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.removeRefine = function () {
    return this.removeFacetRefinement.apply(this, arguments);
  };
  /**
   * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * If the value is omitted, then this method will remove all the filters for the
   * attribute.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} [value] the associated value
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().removeExcludeRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
   */


  AlgoliaSearchHelper.prototype.removeExclude = function () {
    return this.removeFacetExclusion.apply(this, arguments);
  };
  /**
   * Removes a tag filter with the `tag` provided. If the
   * filter is not set, it doesn't change the filters.
   *
   * This method resets the current page to 0.
   * @param {string} tag tag to remove from the filter
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.removeTag = function (tag) {
    this._change({
      state: this.state.resetPage().removeTagRefinement(tag),
      isPageReset: true
    });

    return this;
  };
  /**
   * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.toggleFacetExclusion = function (facet, value) {
    this._change({
      state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
   */


  AlgoliaSearchHelper.prototype.toggleExclude = function () {
    return this.toggleFacetExclusion.apply(this, arguments);
  };
  /**
   * Adds or removes a filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method can be used for conjunctive, disjunctive and hierarchical filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper}
   * @throws Error will throw an error if the facet is not declared in the settings of the helper
   * @fires change
   * @chainable
   * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.toggleRefinement = function (facet, value) {
    return this.toggleFacetRefinement(facet, value);
  };
  /**
   * Adds or removes a filter to a faceted attribute with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method can be used for conjunctive, disjunctive and hierarchical filters.
   *
   * This method resets the current page to 0.
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {AlgoliaSearchHelper}
   * @throws Error will throw an error if the facet is not declared in the settings of the helper
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.toggleFacetRefinement = function (facet, value) {
    this._change({
      state: this.state.resetPage().toggleFacetRefinement(facet, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
   */


  AlgoliaSearchHelper.prototype.toggleRefine = function () {
    return this.toggleFacetRefinement.apply(this, arguments);
  };
  /**
   * Adds or removes a tag filter with the `value` provided. If
   * the value is set then it removes it, otherwise it adds the filter.
   *
   * This method resets the current page to 0.
   * @param {string} tag tag to remove or add
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.toggleTag = function (tag) {
    this._change({
      state: this.state.resetPage().toggleTagRefinement(tag),
      isPageReset: true
    });

    return this;
  };
  /**
   * Increments the page number by one.
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   * @example
   * helper.setPage(0).nextPage().getPage();
   * // returns 1
   */


  AlgoliaSearchHelper.prototype.nextPage = function () {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
  };
  /**
   * Decrements the page number by one.
   * @fires change
   * @return {AlgoliaSearchHelper}
   * @chainable
   * @example
   * helper.setPage(1).previousPage().getPage();
   * // returns 0
   */


  AlgoliaSearchHelper.prototype.previousPage = function () {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
  };
  /**
   * @private
   */


  function setCurrentPage(page) {
    if (page < 0) throw new Error('Page requested below 0.');

    this._change({
      state: this.state.setPage(page),
      isPageReset: false
    });

    return this;
  }
  /**
   * Change the current page
   * @deprecated
   * @param  {number} page The page number
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
  /**
   * Updates the current page.
   * @function
   * @param  {number} page The page number
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */

  AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
  /**
   * Updates the name of the index that will be targeted by the query.
   *
   * This method resets the current page to 0.
   * @param {string} name the index name
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */

  AlgoliaSearchHelper.prototype.setIndex = function (name) {
    this._change({
      state: this.state.resetPage().setIndex(name),
      isPageReset: true
    });

    return this;
  };
  /**
   * Update a parameter of the search. This method reset the page
   *
   * The complete list of parameters is available on the
   * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
   * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
   * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
   *
   * This method resets the current page to 0.
   * @param {string} parameter name of the parameter to update
   * @param {any} value new value of the parameter
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   * @example
   * helper.setQueryParameter('hitsPerPage', 20).search();
   */


  AlgoliaSearchHelper.prototype.setQueryParameter = function (parameter, value) {
    this._change({
      state: this.state.resetPage().setQueryParameter(parameter, value),
      isPageReset: true
    });

    return this;
  };
  /**
   * Set the whole state (warning: will erase previous state)
   * @param {SearchParameters} newState the whole new state
   * @return {AlgoliaSearchHelper}
   * @fires change
   * @chainable
   */


  AlgoliaSearchHelper.prototype.setState = function (newState) {
    this._change({
      state: SearchParameters_1.make(newState),
      isPageReset: false
    });

    return this;
  };
  /**
   * Override the current state without triggering a change event.
   * Do not use this method unless you know what you are doing. (see the example
   * for a legit use case)
   * @param {SearchParameters} newState the whole new state
   * @return {AlgoliaSearchHelper}
   * @example
   *  helper.on('change', function(state){
   *    // In this function you might want to find a way to store the state in the url/history
   *    updateYourURL(state)
   *  })
   *  window.onpopstate = function(event){
   *    // This is naive though as you should check if the state is really defined etc.
   *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
   *  }
   * @chainable
   */


  AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function (newState) {
    this.state = new SearchParameters_1(newState);
    return this;
  };
  /**
   * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
   */


  AlgoliaSearchHelper.prototype.isRefined = function (facet, value) {
    if (this.state.isConjunctiveFacet(facet)) {
      return this.state.isFacetRefined(facet, value);
    } else if (this.state.isDisjunctiveFacet(facet)) {
      return this.state.isDisjunctiveFacetRefined(facet, value);
    }

    throw new Error(facet + ' is not properly defined in this helper configuration' + '(use the facets or disjunctiveFacets keys to configure it)');
  };
  /**
   * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
   * @param {string} attribute the name of the attribute
   * @return {boolean} true if the attribute is filtered by at least one value
   * @example
   * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
   * helper.hasRefinements('price'); // false
   * helper.addNumericRefinement('price', '>', 100);
   * helper.hasRefinements('price'); // true
   *
   * helper.hasRefinements('color'); // false
   * helper.addFacetRefinement('color', 'blue');
   * helper.hasRefinements('color'); // true
   *
   * helper.hasRefinements('material'); // false
   * helper.addDisjunctiveFacetRefinement('material', 'plastic');
   * helper.hasRefinements('material'); // true
   *
   * helper.hasRefinements('categories'); // false
   * helper.toggleFacetRefinement('categories', 'kitchen > knife');
   * helper.hasRefinements('categories'); // true
   *
   */


  AlgoliaSearchHelper.prototype.hasRefinements = function (attribute) {
    if (objectHasKeys_1(this.state.getNumericRefinements(attribute))) {
      return true;
    } else if (this.state.isConjunctiveFacet(attribute)) {
      return this.state.isFacetRefined(attribute);
    } else if (this.state.isDisjunctiveFacet(attribute)) {
      return this.state.isDisjunctiveFacetRefined(attribute);
    } else if (this.state.isHierarchicalFacet(attribute)) {
      return this.state.isHierarchicalFacetRefined(attribute);
    } // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement


    return false;
  };
  /**
   * Check if a value is excluded for a specific faceted attribute. If the value
   * is omitted then the function checks if there is any excluding refinements.
   *
   * @param  {string}  facet name of the attribute for used for faceting
   * @param  {string}  [value] optional value. If passed will test that this value
     * is filtering the given facet.
   * @return {boolean} true if refined
   * @example
   * helper.isExcludeRefined('color'); // false
   * helper.isExcludeRefined('color', 'blue') // false
   * helper.isExcludeRefined('color', 'red') // false
   *
   * helper.addFacetExclusion('color', 'red');
   *
   * helper.isExcludeRefined('color'); // true
   * helper.isExcludeRefined('color', 'blue') // false
   * helper.isExcludeRefined('color', 'red') // true
   */


  AlgoliaSearchHelper.prototype.isExcluded = function (facet, value) {
    return this.state.isExcludeRefined(facet, value);
  };
  /**
   * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
   */


  AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function (facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
  };
  /**
   * Check if the string is a currently filtering tag.
   * @param {string} tag tag to check
   * @return {boolean}
   */


  AlgoliaSearchHelper.prototype.hasTag = function (tag) {
    return this.state.isTagRefined(tag);
  };
  /**
   * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
   */


  AlgoliaSearchHelper.prototype.isTagRefined = function () {
    return this.hasTagRefinements.apply(this, arguments);
  };
  /**
   * Get the name of the currently used index.
   * @return {string}
   * @example
   * helper.setIndex('highestPrice_products').getIndex();
   * // returns 'highestPrice_products'
   */


  AlgoliaSearchHelper.prototype.getIndex = function () {
    return this.state.index;
  };

  function getCurrentPage() {
    return this.state.page;
  }
  /**
   * Get the currently selected page
   * @deprecated
   * @return {number} the current page
   */


  AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
  /**
   * Get the currently selected page
   * @function
   * @return {number} the current page
   */

  AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
  /**
   * Get all the tags currently set to filters the results.
   *
   * @return {string[]} The list of tags currently set.
   */

  AlgoliaSearchHelper.prototype.getTags = function () {
    return this.state.tagRefinements;
  };
  /**
   * Get the list of refinements for a given attribute. This method works with
   * conjunctive, disjunctive, excluding and numerical filters.
   *
   * See also SearchResults#getRefinements
   *
   * @param {string} facetName attribute name used for faceting
   * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
   * a type. Numeric also contains an operator.
   * @example
   * helper.addNumericRefinement('price', '>', 100);
   * helper.getRefinements('price');
   * // [
   * //   {
   * //     "value": [
   * //       100
   * //     ],
   * //     "operator": ">",
   * //     "type": "numeric"
   * //   }
   * // ]
   * @example
   * helper.addFacetRefinement('color', 'blue');
   * helper.addFacetExclusion('color', 'red');
   * helper.getRefinements('color');
   * // [
   * //   {
   * //     "value": "blue",
   * //     "type": "conjunctive"
   * //   },
   * //   {
   * //     "value": "red",
   * //     "type": "exclude"
   * //   }
   * // ]
   * @example
   * helper.addDisjunctiveFacetRefinement('material', 'plastic');
   * // [
   * //   {
   * //     "value": "plastic",
   * //     "type": "disjunctive"
   * //   }
   * // ]
   */


  AlgoliaSearchHelper.prototype.getRefinements = function (facetName) {
    var refinements = [];

    if (this.state.isConjunctiveFacet(facetName)) {
      var conjRefinements = this.state.getConjunctiveRefinements(facetName);
      conjRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'conjunctive'
        });
      });
      var excludeRefinements = this.state.getExcludeRefinements(facetName);
      excludeRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'exclude'
        });
      });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
      var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
      disjRefinements.forEach(function (r) {
        refinements.push({
          value: r,
          type: 'disjunctive'
        });
      });
    }

    var numericRefinements = this.state.getNumericRefinements(facetName);
    Object.keys(numericRefinements).forEach(function (operator) {
      var value = numericRefinements[operator];
      refinements.push({
        value: value,
        operator: operator,
        type: 'numeric'
      });
    });
    return refinements;
  };
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */


  AlgoliaSearchHelper.prototype.getNumericRefinement = function (attribute, operator) {
    return this.state.getNumericRefinement(attribute, operator);
  };
  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */


  AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function (facetName) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
  }; // /////////// PRIVATE

  /**
   * Perform the underlying queries
   * @private
   * @return {undefined}
   * @fires search
   * @fires result
   * @fires error
   */


  AlgoliaSearchHelper.prototype._search = function (options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];

    if (!options.onlyWithDerivedHelpers) {
      mainQueries = requestBuilder_1._getQueries(state.index, state);
      states.push({
        state: state,
        queriesCount: mainQueries.length,
        helper: this
      });
      this.emit('search', {
        state: state,
        results: this.lastResults
      });
    }

    var derivedQueries = this.derivedHelpers.map(function (derivedHelper) {
      var derivedState = derivedHelper.getModifiedState(state);

      var derivedStateQueries = requestBuilder_1._getQueries(derivedState.index, derivedState);

      states.push({
        state: derivedState,
        queriesCount: derivedStateQueries.length,
        helper: derivedHelper
      });
      derivedHelper.emit('search', {
        state: derivedState,
        results: derivedHelper.lastResults
      });
      return derivedStateQueries;
    });
    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
    var queryId = this._queryId++;
    this._currentNbQueries++;

    try {
      this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
      // If we reach this part, we're in an internal error state
      this.emit('error', {
        error: error
      });
    }
  };
  /**
   * Transform the responses as sent by the server and transform them into a user
   * usable object that merge the results of all the batch requests. It will dispatch
   * over the different helper + derived helpers (when there are some).
   * @private
   * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
   *  state state used for to generate the request
   * @param {number} queryId id of the current request
   * @param {object} content content of the response
   * @return {undefined}
   */


  AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function (states, queryId, content) {
    // FIXME remove the number of outdated queries discarded instead of just one
    if (queryId < this._lastQueryIdReceived) {
      // Outdated answer
      return;
    }

    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
    var results = content.results.slice();
    states.forEach(function (s) {
      var state = s.state;
      var queriesCount = s.queriesCount;
      var helper = s.helper;
      var specificResults = results.splice(0, queriesCount);
      var formattedResponse = helper.lastResults = new SearchResults_1(state, specificResults);
      helper.emit('result', {
        results: formattedResponse,
        state: state
      });
    });
  };

  AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function (queryId, error) {
    if (queryId < this._lastQueryIdReceived) {
      // Outdated answer
      return;
    }

    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    this.emit('error', {
      error: error
    });
    if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
  };

  AlgoliaSearchHelper.prototype.containsRefinement = function (query, facetFilters, numericFilters, tagFilters) {
    return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
  };
  /**
   * Test if there are some disjunctive refinements on the facet
   * @private
   * @param {string} facet the attribute to test
   * @return {boolean}
   */


  AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function (facet) {
    return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
  };

  AlgoliaSearchHelper.prototype._change = function (event) {
    var state = event.state;
    var isPageReset = event.isPageReset;

    if (state !== this.state) {
      this.state = state;
      this.emit('change', {
        state: this.state,
        results: this.lastResults,
        isPageReset: isPageReset
      });
    }
  };
  /**
   * Clears the cache of the underlying Algolia client.
   * @return {AlgoliaSearchHelper}
   */


  AlgoliaSearchHelper.prototype.clearCache = function () {
    this.client.clearCache && this.client.clearCache();
    return this;
  };
  /**
   * Updates the internal client instance. If the reference of the clients
   * are equal then no update is actually done.
   * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
   * @return {AlgoliaSearchHelper}
   */


  AlgoliaSearchHelper.prototype.setClient = function (newClient) {
    if (this.client === newClient) return this;

    if (typeof newClient.addAlgoliaAgent === 'function') {
      newClient.addAlgoliaAgent('JS Helper (' + version + ')');
    }

    this.client = newClient;
    return this;
  };
  /**
   * Gets the instance of the currently used client.
   * @return {AlgoliaSearch}
   */


  AlgoliaSearchHelper.prototype.getClient = function () {
    return this.client;
  };
  /**
   * Creates an derived instance of the Helper. A derived helper
   * is a way to request other indices synchronised with the lifecycle
   * of the main Helper. This mechanism uses the multiqueries feature
   * of Algolia to aggregate all the requests in a single network call.
   *
   * This method takes a function that is used to create a new SearchParameter
   * that will be used to create requests to Algolia. Those new requests
   * are created just before the `search` event. The signature of the function
   * is `SearchParameters -> SearchParameters`.
   *
   * This method returns a new DerivedHelper which is an EventEmitter
   * that fires the same `search`, `result` and `error` events. Those
   * events, however, will receive data specific to this DerivedHelper
   * and the SearchParameters that is returned by the call of the
   * parameter function.
   * @param {function} fn SearchParameters -> SearchParameters
   * @return {DerivedHelper}
   */


  AlgoliaSearchHelper.prototype.derive = function (fn) {
    var derivedHelper = new DerivedHelper_1(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
  };
  /**
   * This method detaches a derived Helper from the main one. Prefer using the one from the
   * derived helper itself, to remove the event listeners too.
   * @private
   * @return {undefined}
   * @throws Error
   */


  AlgoliaSearchHelper.prototype.detachDerivedHelper = function (derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error('Derived helper already detached');
    this.derivedHelpers.splice(pos, 1);
  };
  /**
   * This method returns true if there is currently at least one on-going search.
   * @return {boolean} true if there is a search pending
   */


  AlgoliaSearchHelper.prototype.hasPendingRequests = function () {
    return this._currentNbQueries > 0;
  };
  /**
   * @typedef AlgoliaSearchHelper.NumericRefinement
   * @type {object}
   * @property {number[]} value the numbers that are used for filtering this attribute with
   * the operator specified.
   * @property {string} operator the faceting data: value, number of entries
   * @property {string} type will be 'numeric'
   */

  /**
   * @typedef AlgoliaSearchHelper.FacetRefinement
   * @type {object}
   * @property {string} value the string use to filter the attribute
   * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
   */


  var algoliasearch_helper = AlgoliaSearchHelper;

  /**
   * The algoliasearchHelper module is the function that will let its
   * contains everything needed to use the Algoliasearch
   * Helper. It is a also a function that instanciate the helper.
   * To use the helper, you also need the Algolia JS client v3.
   * @example
   * //using the UMD build
   * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
   * var helper = algoliasearchHelper(client, 'bestbuy', {
   *   facets: ['shipping'],
   *   disjunctiveFacets: ['category']
   * });
   * helper.on('result', function(event) {
   *   console.log(event.results);
   * });
   * helper
   *   .toggleFacetRefinement('category', 'Movies & TV Shows')
   *   .toggleFacetRefinement('shipping', 'Free shipping')
   *   .search();
   * @example
   * // The helper is an event emitter using the node API
   * helper.on('result', updateTheResults);
   * helper.once('result', updateTheResults);
   * helper.removeListener('result', updateTheResults);
   * helper.removeAllListeners('result');
   * @module algoliasearchHelper
   * @param  {AlgoliaSearch} client an AlgoliaSearch client
   * @param  {string} index the name of the index to query
   * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
   * @return {AlgoliaSearchHelper}
   */


  function algoliasearchHelper(client, index, opts) {
    return new algoliasearch_helper(client, index, opts);
  }
  /**
   * The version currently used
   * @member module:algoliasearchHelper.version
   * @type {number}
   */


  algoliasearchHelper.version = version;
  /**
   * Constructor for the Helper.
   * @member module:algoliasearchHelper.AlgoliaSearchHelper
   * @type {AlgoliaSearchHelper}
   */

  algoliasearchHelper.AlgoliaSearchHelper = algoliasearch_helper;
  /**
   * Constructor for the object containing all the parameters of the search.
   * @member module:algoliasearchHelper.SearchParameters
   * @type {SearchParameters}
   */

  algoliasearchHelper.SearchParameters = SearchParameters_1;
  /**
   * Constructor for the object containing the results of the search.
   * @member module:algoliasearchHelper.SearchResults
   * @type {SearchResults}
   */

  algoliasearchHelper.SearchResults = SearchResults_1;
  var algoliasearchHelperJs = algoliasearchHelper;

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter$1() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  var events$1 = EventEmitter$1;

  // Backwards-compat with node 0.10.x
  EventEmitter$1.EventEmitter = EventEmitter$1;

  EventEmitter$1.prototype._events = undefined;
  EventEmitter$1.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter$1.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter$1.prototype.setMaxListeners = function(n) {
    if (!isNumber$1(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter$1.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;

    if (!this._events)
      this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error ||
          (isObject$1(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
      }
    }

    handler = this._events[type];

    if (isUndefined$1(handler))
      return false;

    if (isFunction$1(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject$1(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter$1.prototype.addListener = function(type, listener) {
    var m;

    if (!isFunction$1(listener))
      throw TypeError('listener must be a function');

    if (!this._events)
      this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener)
      this.emit('newListener', type,
                isFunction$1(listener.listener) ?
                listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    else if (isObject$1(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);
    else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject$1(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined$1(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter$1.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;

  EventEmitter$1.prototype.once = function(type, listener) {
    if (!isFunction$1(listener))
      throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter$1.prototype.removeListener = function(type, listener) {
    var list, position, length, i;

    if (!isFunction$1(listener))
      throw TypeError('listener must be a function');

    if (!this._events || !this._events[type])
      return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener ||
        (isFunction$1(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);

    } else if (isObject$1(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener ||
            (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }

      if (position < 0)
        return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter$1.prototype.removeAllListeners = function(type) {
    var key, listeners;

    if (!this._events)
      return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction$1(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter$1.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction$1(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };

  EventEmitter$1.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction$1(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };

  EventEmitter$1.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction$1(arg) {
    return typeof arg === 'function';
  }

  function isNumber$1(arg) {
    return typeof arg === 'number';
  }

  function isObject$1(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isUndefined$1(arg) {
    return arg === void 0;
  }

  function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
  }

  function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
  }

  /**
   * Return the container. If it's a string, it is considered a
   * css selector and retrieves the first matching element. Otherwise
   * test if it validates that it's a correct DOMElement.
   *
   * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
   * @return {HTMLElement} Container node
   * @throws Error when the type is not correct
   */

  function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === 'string';
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;

    if (!isDomElement(domElement)) {
      var errorMessage = 'Container must be `string` or `HTMLElement`.';

      if (isSelectorString) {
        errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
      }

      throw new Error(errorMessage);
    }

    return domElement;
  }

  function isSpecialClick(event) {
    var isMiddleClick = event.button === 1;
    return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
  }

  function uniq(array) {
    return array.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  }

  function prepareTemplates() {
    var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allKeys = uniq([].concat(_toConsumableArray(Object.keys(defaultTemplates)), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function (config, key) {
      var defaultTemplate = defaultTemplates[key];
      var customTemplate = templates[key];
      var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
      config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
      config.useCustomCompileOptions[key] = isCustomTemplate;
      return config;
    }, {
      templates: {},
      useCustomCompileOptions: {}
    });
  }
  /**
   * Prepares an object to be passed to the Template widget
   * @param {object} unknownBecauseES6 an object with the following attributes:
   *  - defaultTemplate
   *  - templates
   *  - templatesConfig
   * @return {object} the configuration with the attributes:
   *  - defaultTemplate
   *  - templates
   *  - useCustomCompileOptions
   */


  function prepareTemplateProps(_ref) {
    var defaultTemplates = _ref.defaultTemplates,
        templates = _ref.templates,
        templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _objectSpread({
      templatesConfig: templatesConfig
    }, preparedTemplates);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var compiler = createCommonjsModule(function (module, exports) {
  /*
   *  Copyright 2011 Twitter, Inc.
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *  http://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License.
   */

  (function (Hogan) {
    // Setup regex  assignments
    // remove whitespace according to Mustache spec
    var rIsWhitespace = /\S/,
        rQuot = /\"/g,
        rNewline =  /\n/g,
        rCr = /\r/g,
        rSlash = /\\/g,
        rLineSep = /\u2028/,
        rParagraphSep = /\u2029/;

    Hogan.tags = {
      '#': 1, '^': 2, '<': 3, '$': 4,
      '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
      '{': 10, '&': 11, '_t': 12
    };

    Hogan.scan = function scan(text, delimiters) {
      var len = text.length,
          IN_TEXT = 0,
          IN_TAG_TYPE = 1,
          IN_TAG = 2,
          state = IN_TEXT,
          tagType = null,
          tag = null,
          buf = '',
          tokens = [],
          seenTag = false,
          i = 0,
          lineStart = 0,
          otag = '{{',
          ctag = '}}';

      function addBuf() {
        if (buf.length > 0) {
          tokens.push({tag: '_t', text: new String(buf)});
          buf = '';
        }
      }

      function lineIsWhitespace() {
        var isAllWhitespace = true;
        for (var j = lineStart; j < tokens.length; j++) {
          isAllWhitespace =
            (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
            (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
          if (!isAllWhitespace) {
            return false;
          }
        }

        return isAllWhitespace;
      }

      function filterLine(haveSeenTag, noNewLine) {
        addBuf();

        if (haveSeenTag && lineIsWhitespace()) {
          for (var j = lineStart, next; j < tokens.length; j++) {
            if (tokens[j].text) {
              if ((next = tokens[j+1]) && next.tag == '>') {
                // set indent to token value
                next.indent = tokens[j].text.toString();
              }
              tokens.splice(j, 1);
            }
          }
        } else if (!noNewLine) {
          tokens.push({tag:'\n'});
        }

        seenTag = false;
        lineStart = tokens.length;
      }

      function changeDelimiters(text, index) {
        var close = '=' + ctag,
            closeIndex = text.indexOf(close, index),
            delimiters = trim(
              text.substring(text.indexOf('=', index) + 1, closeIndex)
            ).split(' ');

        otag = delimiters[0];
        ctag = delimiters[delimiters.length - 1];

        return closeIndex + close.length - 1;
      }

      if (delimiters) {
        delimiters = delimiters.split(' ');
        otag = delimiters[0];
        ctag = delimiters[1];
      }

      for (i = 0; i < len; i++) {
        if (state == IN_TEXT) {
          if (tagChange(otag, text, i)) {
            --i;
            addBuf();
            state = IN_TAG_TYPE;
          } else {
            if (text.charAt(i) == '\n') {
              filterLine(seenTag);
            } else {
              buf += text.charAt(i);
            }
          }
        } else if (state == IN_TAG_TYPE) {
          i += otag.length - 1;
          tag = Hogan.tags[text.charAt(i + 1)];
          tagType = tag ? text.charAt(i + 1) : '_v';
          if (tagType == '=') {
            i = changeDelimiters(text, i);
            state = IN_TEXT;
          } else {
            if (tag) {
              i++;
            }
            state = IN_TAG;
          }
          seenTag = i;
        } else {
          if (tagChange(ctag, text, i)) {
            tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                         i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
            buf = '';
            i += ctag.length - 1;
            state = IN_TEXT;
            if (tagType == '{') {
              if (ctag == '}}') {
                i++;
              } else {
                cleanTripleStache(tokens[tokens.length - 1]);
              }
            }
          } else {
            buf += text.charAt(i);
          }
        }
      }

      filterLine(seenTag, true);

      return tokens;
    };

    function cleanTripleStache(token) {
      if (token.n.substr(token.n.length - 1) === '}') {
        token.n = token.n.substring(0, token.n.length - 1);
      }
    }

    function trim(s) {
      if (s.trim) {
        return s.trim();
      }

      return s.replace(/^\s*|\s*$/g, '');
    }

    function tagChange(tag, text, index) {
      if (text.charAt(index) != tag.charAt(0)) {
        return false;
      }

      for (var i = 1, l = tag.length; i < l; i++) {
        if (text.charAt(index + i) != tag.charAt(i)) {
          return false;
        }
      }

      return true;
    }

    // the tags allowed inside super templates
    var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

    function buildTree(tokens, kind, stack, customTags) {
      var instructions = [],
          opener = null,
          tail = null,
          token = null;

      tail = stack[stack.length - 1];

      while (tokens.length > 0) {
        token = tokens.shift();

        if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
          throw new Error('Illegal content in < super tag.');
        }

        if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
          stack.push(token);
          token.nodes = buildTree(tokens, token.tag, stack, customTags);
        } else if (token.tag == '/') {
          if (stack.length === 0) {
            throw new Error('Closing tag without opener: /' + token.n);
          }
          opener = stack.pop();
          if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
            throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
          }
          opener.end = token.i;
          return instructions;
        } else if (token.tag == '\n') {
          token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
        }

        instructions.push(token);
      }

      if (stack.length > 0) {
        throw new Error('missing closing tag: ' + stack.pop().n);
      }

      return instructions;
    }

    function isOpener(token, tags) {
      for (var i = 0, l = tags.length; i < l; i++) {
        if (tags[i].o == token.n) {
          token.tag = '#';
          return true;
        }
      }
    }

    function isCloser(close, open, tags) {
      for (var i = 0, l = tags.length; i < l; i++) {
        if (tags[i].c == close && tags[i].o == open) {
          return true;
        }
      }
    }

    function stringifySubstitutions(obj) {
      var items = [];
      for (var key in obj) {
        items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
      }
      return "{ " + items.join(",") + " }";
    }

    function stringifyPartials(codeObj) {
      var partials = [];
      for (var key in codeObj.partials) {
        partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
      }
      return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
    }

    Hogan.stringify = function(codeObj, text, options) {
      return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
    };

    var serialNo = 0;
    Hogan.generate = function(tree, text, options) {
      serialNo = 0;
      var context = { code: '', subs: {}, partials: {} };
      Hogan.walk(tree, context);

      if (options.asString) {
        return this.stringify(context, text, options);
      }

      return this.makeTemplate(context, text, options);
    };

    Hogan.wrapMain = function(code) {
      return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
    };

    Hogan.template = Hogan.Template;

    Hogan.makeTemplate = function(codeObj, text, options) {
      var template = this.makePartials(codeObj);
      template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
      return new this.template(template, text, this, options);
    };

    Hogan.makePartials = function(codeObj) {
      var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
      for (key in template.partials) {
        template.partials[key] = this.makePartials(template.partials[key]);
      }
      for (key in codeObj.subs) {
        template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
      }
      return template;
    };

    function esc(s) {
      return s.replace(rSlash, '\\\\')
              .replace(rQuot, '\\\"')
              .replace(rNewline, '\\n')
              .replace(rCr, '\\r')
              .replace(rLineSep, '\\u2028')
              .replace(rParagraphSep, '\\u2029');
    }

    function chooseMethod(s) {
      return (~s.indexOf('.')) ? 'd' : 'f';
    }

    function createPartial(node, context) {
      var prefix = "<" + (context.prefix || "");
      var sym = prefix + node.n + serialNo++;
      context.partials[sym] = {name: node.n, partials: {}};
      context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
      return sym;
    }

    Hogan.codegen = {
      '#': function(node, context) {
        context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                        'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                        't.rs(c,p,' + 'function(c,p,t){';
        Hogan.walk(node.nodes, context);
        context.code += '});c.pop();}';
      },

      '^': function(node, context) {
        context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
        Hogan.walk(node.nodes, context);
        context.code += '};';
      },

      '>': createPartial,
      '<': function(node, context) {
        var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
        Hogan.walk(node.nodes, ctx);
        var template = context.partials[createPartial(node, context)];
        template.subs = ctx.subs;
        template.partials = ctx.partials;
      },

      '$': function(node, context) {
        var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
        Hogan.walk(node.nodes, ctx);
        context.subs[node.n] = ctx.code;
        if (!context.inPartial) {
          context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
        }
      },

      '\n': function(node, context) {
        context.code += write('"\\n"' + (node.last ? '' : ' + i'));
      },

      '_v': function(node, context) {
        context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
      },

      '_t': function(node, context) {
        context.code += write('"' + esc(node.text) + '"');
      },

      '{': tripleStache,

      '&': tripleStache
    };

    function tripleStache(node, context) {
      context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    }

    function write(s) {
      return 't.b(' + s + ');';
    }

    Hogan.walk = function(nodelist, context) {
      var func;
      for (var i = 0, l = nodelist.length; i < l; i++) {
        func = Hogan.codegen[nodelist[i].tag];
        func && func(nodelist[i], context);
      }
      return context;
    };

    Hogan.parse = function(tokens, text, options) {
      options = options || {};
      return buildTree(tokens, '', [], options.sectionTags || []);
    };

    Hogan.cache = {};

    Hogan.cacheKey = function(text, options) {
      return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
    };

    Hogan.compile = function(text, options) {
      options = options || {};
      var key = Hogan.cacheKey(text, options);
      var template = this.cache[key];

      if (template) {
        var partials = template.partials;
        for (var name in partials) {
          delete partials[name].instance;
        }
        return template;
      }

      template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
      return this.cache[key] = template;
    };
  })(exports);
  });

  var template = createCommonjsModule(function (module, exports) {

  (function (Hogan) {
    Hogan.Template = function (codeObj, text, compiler, options) {
      codeObj = codeObj || {};
      this.r = codeObj.code || this.r;
      this.c = compiler;
      this.options = options || {};
      this.text = text || '';
      this.partials = codeObj.partials || {};
      this.subs = codeObj.subs || {};
      this.buf = '';
    };

    Hogan.Template.prototype = {
      // render: replaced by generated code.
      r: function (context, partials, indent) { return ''; },

      // variable escaping
      v: hoganEscape,

      // triple stache
      t: coerceToString,

      render: function render(context, partials, indent) {
        return this.ri([context], partials || {}, indent);
      },

      // render internal -- a hook for overrides that catches partials too
      ri: function (context, partials, indent) {
        return this.r(context, partials, indent);
      },

      // ensurePartial
      ep: function(symbol, partials) {
        var partial = this.partials[symbol];

        // check to see that if we've instantiated this partial before
        var template = partials[partial.name];
        if (partial.instance && partial.base == template) {
          return partial.instance;
        }

        if (typeof template == 'string') {
          if (!this.c) {
            throw new Error("No compiler available.");
          }
          template = this.c.compile(template, this.options);
        }

        if (!template) {
          return null;
        }

        // We use this to check whether the partials dictionary has changed
        this.partials[symbol].base = template;

        if (partial.subs) {
          // Make sure we consider parent template now
          if (!partials.stackText) partials.stackText = {};
          for (key in partial.subs) {
            if (!partials.stackText[key]) {
              partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
            }
          }
          template = createSpecializedPartial(template, partial.subs, partial.partials,
            this.stackSubs, this.stackPartials, partials.stackText);
        }
        this.partials[symbol].instance = template;

        return template;
      },

      // tries to find a partial in the current scope and render it
      rp: function(symbol, context, partials, indent) {
        var partial = this.ep(symbol, partials);
        if (!partial) {
          return '';
        }

        return partial.ri(context, partials, indent);
      },

      // render a section
      rs: function(context, partials, section) {
        var tail = context[context.length - 1];

        if (!isArray(tail)) {
          section(context, partials, this);
          return;
        }

        for (var i = 0; i < tail.length; i++) {
          context.push(tail[i]);
          section(context, partials, this);
          context.pop();
        }
      },

      // maybe start a section
      s: function(val, ctx, partials, inverted, start, end, tags) {
        var pass;

        if (isArray(val) && val.length === 0) {
          return false;
        }

        if (typeof val == 'function') {
          val = this.ms(val, ctx, partials, inverted, start, end, tags);
        }

        pass = !!val;

        if (!inverted && pass && ctx) {
          ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
        }

        return pass;
      },

      // find values with dotted names
      d: function(key, ctx, partials, returnFound) {
        var found,
            names = key.split('.'),
            val = this.f(names[0], ctx, partials, returnFound),
            doModelGet = this.options.modelGet,
            cx = null;

        if (key === '.' && isArray(ctx[ctx.length - 2])) {
          val = ctx[ctx.length - 1];
        } else {
          for (var i = 1; i < names.length; i++) {
            found = findInScope(names[i], val, doModelGet);
            if (found !== undefined) {
              cx = val;
              val = found;
            } else {
              val = '';
            }
          }
        }

        if (returnFound && !val) {
          return false;
        }

        if (!returnFound && typeof val == 'function') {
          ctx.push(cx);
          val = this.mv(val, ctx, partials);
          ctx.pop();
        }

        return val;
      },

      // find values with normal names
      f: function(key, ctx, partials, returnFound) {
        var val = false,
            v = null,
            found = false,
            doModelGet = this.options.modelGet;

        for (var i = ctx.length - 1; i >= 0; i--) {
          v = ctx[i];
          val = findInScope(key, v, doModelGet);
          if (val !== undefined) {
            found = true;
            break;
          }
        }

        if (!found) {
          return (returnFound) ? false : "";
        }

        if (!returnFound && typeof val == 'function') {
          val = this.mv(val, ctx, partials);
        }

        return val;
      },

      // higher order templates
      ls: function(func, cx, partials, text, tags) {
        var oldTags = this.options.delimiters;

        this.options.delimiters = tags;
        this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
        this.options.delimiters = oldTags;

        return false;
      },

      // compile text
      ct: function(text, cx, partials) {
        if (this.options.disableLambda) {
          throw new Error('Lambda features disabled.');
        }
        return this.c.compile(text, this.options).render(cx, partials);
      },

      // template result buffering
      b: function(s) { this.buf += s; },

      fl: function() { var r = this.buf; this.buf = ''; return r; },

      // method replace section
      ms: function(func, ctx, partials, inverted, start, end, tags) {
        var textSource,
            cx = ctx[ctx.length - 1],
            result = func.call(cx);

        if (typeof result == 'function') {
          if (inverted) {
            return true;
          } else {
            textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
            return this.ls(result, cx, partials, textSource.substring(start, end), tags);
          }
        }

        return result;
      },

      // method replace variable
      mv: function(func, ctx, partials) {
        var cx = ctx[ctx.length - 1];
        var result = func.call(cx);

        if (typeof result == 'function') {
          return this.ct(coerceToString(result.call(cx)), cx, partials);
        }

        return result;
      },

      sub: function(name, context, partials, indent) {
        var f = this.subs[name];
        if (f) {
          this.activeSub = name;
          f(context, partials, this, indent);
          this.activeSub = false;
        }
      }

    };

    //Find a key in an object
    function findInScope(key, scope, doModelGet) {
      var val;

      if (scope && typeof scope == 'object') {

        if (scope[key] !== undefined) {
          val = scope[key];

        // try lookup with get for backbone or similar model data
        } else if (doModelGet && scope.get && typeof scope.get == 'function') {
          val = scope.get(key);
        }
      }

      return val;
    }

    function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
      function PartialTemplate() {}    PartialTemplate.prototype = instance;
      function Substitutions() {}    Substitutions.prototype = instance.subs;
      var key;
      var partial = new PartialTemplate();
      partial.subs = new Substitutions();
      partial.subsText = {};  //hehe. substext.
      partial.buf = '';

      stackSubs = stackSubs || {};
      partial.stackSubs = stackSubs;
      partial.subsText = stackText;
      for (key in subs) {
        if (!stackSubs[key]) stackSubs[key] = subs[key];
      }
      for (key in stackSubs) {
        partial.subs[key] = stackSubs[key];
      }

      stackPartials = stackPartials || {};
      partial.stackPartials = stackPartials;
      for (key in partials) {
        if (!stackPartials[key]) stackPartials[key] = partials[key];
      }
      for (key in stackPartials) {
        partial.partials[key] = stackPartials[key];
      }

      return partial;
    }

    var rAmp = /&/g,
        rLt = /</g,
        rGt = />/g,
        rApos = /\'/g,
        rQuot = /\"/g,
        hChars = /[&<>\"\']/;

    function coerceToString(val) {
      return String((val === null || val === undefined) ? '' : val);
    }

    function hoganEscape(str) {
      str = coerceToString(str);
      return hChars.test(str) ?
        str
          .replace(rAmp, '&amp;')
          .replace(rLt, '&lt;')
          .replace(rGt, '&gt;')
          .replace(rApos, '&#39;')
          .replace(rQuot, '&quot;') :
        str;
    }

    var isArray = Array.isArray || function(a) {
      return Object.prototype.toString.call(a) === '[object Array]';
    };

  })(exports);
  });

  /*
   *  Copyright 2011 Twitter, Inc.
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *  http://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License.
   */

  // This file is for use with Node.js. See dist/ for browser files.


  compiler.Template = template.Template;
  compiler.template = compiler.Template;
  var hogan = compiler;

  // that lambdas in Mustache are supposed to accept a second argument of
  // `render` to get the rendered value, not the literal `{{value}}`. But
  // this is currently broken (see https://github.com/twitter/hogan.js/issues/222).

  function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
    var data = arguments.length > 2 ? arguments[2] : undefined;
    return Object.keys(helpers).reduce(function (acc, helperKey) {
      return _objectSpread({}, acc, _defineProperty({}, helperKey, function () {
        var _this = this;

        return function (text) {
          var render = function render(value) {
            return hogan.compile(value, compileOptions).render(_this);
          };

          return helpers[helperKey].call(data, text, render);
        };
      }));
    }, {});
  }

  function renderTemplate(_ref) {
    var templates = _ref.templates,
        templateKey = _ref.templateKey,
        compileOptions = _ref.compileOptions,
        helpers = _ref.helpers,
        data = _ref.data;
    var template = templates[templateKey];

    var templateType = _typeof(template);

    var isTemplateString = templateType === 'string';
    var isTemplateFunction = templateType === 'function';

    if (!isTemplateString && !isTemplateFunction) {
      throw new Error("Template must be 'string' or 'function', was '".concat(templateType, "' (key: ").concat(templateKey, ")"));
    }

    if (isTemplateFunction) {
      return template(data);
    }

    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return hogan.compile(template, compileOptions).render(_objectSpread({}, data, {
      helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function (spaces) {
      return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
    }).trim();
  }

  // We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
  // published as a major version.
  // Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
  // was decided as too risky.
  // @MAJOR Replace with the native `Array.prototype.find` method
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  function find$1(items, predicate, thisArg) {
    if (!Array.prototype.find) {
      return items.filter(predicate, thisArg)[0];
    }

    return items.find(predicate, thisArg);
  }

  function unescapeRefinement(value) {
    return String(value).replace(/^\\-/, '-');
  }

  function getRefinement$1(state, type, attributeName, name) {
    var resultsFacets = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var res = {
      type: type,
      attributeName: attributeName,
      name: name
    };
    var facet = find$1(resultsFacets, function (resultsFacet) {
      return resultsFacet.name === attributeName;
    });
    var count;

    if (type === 'hierarchical') {
      (function () {
        var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
        var nameParts = name.split(facetDeclaration.separator);

        var getFacetRefinement = function getFacetRefinement(facetData) {
          return function (refinementKey) {
            return facetData[refinementKey];
          };
        };

        var _loop = function _loop(i) {
          facet = facet.data && find$1(Object.keys(facet.data).map(getFacetRefinement(facet.data)), function (refinement) {
            return refinement.name === nameParts[i];
          });
        };

        for (var i = 0; facet !== undefined && i < nameParts.length; ++i) {
          _loop(i);
        }

        count = facet && facet.count;
      })();
    } else {
      count = facet && facet.data && facet.data[res.name];
    }

    var exhaustive = facet && facet.exhaustive;

    if (count !== undefined) {
      res.count = count;
    }

    if (exhaustive !== undefined) {
      res.exhaustive = exhaustive;
    }

    return res;
  }

  function getRefinements(results, state) {
    var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var res = [];
    var _state$facetsRefineme = state.facetsRefinements,
        facetsRefinements = _state$facetsRefineme === void 0 ? {} : _state$facetsRefineme,
        _state$facetsExcludes = state.facetsExcludes,
        facetsExcludes = _state$facetsExcludes === void 0 ? {} : _state$facetsExcludes,
        _state$disjunctiveFac = state.disjunctiveFacetsRefinements,
        disjunctiveFacetsRefinements = _state$disjunctiveFac === void 0 ? {} : _state$disjunctiveFac,
        _state$hierarchicalFa = state.hierarchicalFacetsRefinements,
        hierarchicalFacetsRefinements = _state$hierarchicalFa === void 0 ? {} : _state$hierarchicalFa,
        _state$numericRefinem = state.numericRefinements,
        numericRefinements = _state$numericRefinem === void 0 ? {} : _state$numericRefinem,
        _state$tagRefinements = state.tagRefinements,
        tagRefinements = _state$tagRefinements === void 0 ? [] : _state$tagRefinements;
    Object.keys(facetsRefinements).forEach(function (attributeName) {
      var refinements = facetsRefinements[attributeName];
      refinements.forEach(function (refinement) {
        res.push(getRefinement$1(state, 'facet', attributeName, refinement, results.facets));
      });
    });
    Object.keys(facetsExcludes).forEach(function (attributeName) {
      var refinements = facetsExcludes[attributeName];
      refinements.forEach(function (refinement) {
        res.push({
          type: 'exclude',
          attributeName: attributeName,
          name: refinement,
          exclude: true
        });
      });
    });
    Object.keys(disjunctiveFacetsRefinements).forEach(function (attributeName) {
      var refinements = disjunctiveFacetsRefinements[attributeName];
      refinements.forEach(function (refinement) {
        res.push(getRefinement$1(state, 'disjunctive', attributeName, // We unescape any disjunctive refined values with `unescapeRefinement` because
        // they can be escaped on negative numeric values with `escapeRefinement`.
        unescapeRefinement(refinement), results.disjunctiveFacets));
      });
    });
    Object.keys(hierarchicalFacetsRefinements).forEach(function (attributeName) {
      var refinements = hierarchicalFacetsRefinements[attributeName];
      refinements.forEach(function (refinement) {
        res.push(getRefinement$1(state, 'hierarchical', attributeName, refinement, results.hierarchicalFacets));
      });
    });
    Object.keys(numericRefinements).forEach(function (attributeName) {
      var operators = numericRefinements[attributeName];
      Object.keys(operators).forEach(function (operator) {
        var valueOrValues = operators[operator];
        var refinements = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];
        refinements.forEach(function (refinement) {
          res.push({
            type: 'numeric',
            attributeName: attributeName,
            name: "".concat(refinement),
            numericValue: refinement,
            operator: operator
          });
        });
      });
    });
    tagRefinements.forEach(function (refinement) {
      res.push({
        type: 'tag',
        attributeName: '_tags',
        name: refinement
      });
    });

    if (clearsQuery && state.query && state.query.trim()) {
      res.push({
        attributeName: 'query',
        type: 'query',
        name: state.query,
        query: state.query
      });
    }

    return res;
  }

  /**
   * Clears the refinements of a SearchParameters object based on rules provided.
   * The included attributes list is applied before the excluded attributes list. If the list
   * is not provided, this list of all the currently refined attributes is used as included attributes.
   * @param {object} $0 parameters
   * @param {Helper} $0.helper instance of the Helper
   * @param {string[]} [$0.attributesToClear = []] list of parameters to clear
   * @returns {SearchParameters} search parameters with refinements cleared
   */
  function clearRefinements(_ref) {
    var helper = _ref.helper,
        _ref$attributesToClea = _ref.attributesToClear,
        attributesToClear = _ref$attributesToClea === void 0 ? [] : _ref$attributesToClea;
    var finalState = helper.state;
    attributesToClear.forEach(function (attribute) {
      if (attribute === '_tags') {
        finalState = finalState.clearTags();
      } else {
        finalState = finalState.clearRefinements(attribute);
      }
    });

    if (attributesToClear.indexOf('query') !== -1) {
      finalState = finalState.setQuery('');
    }

    return finalState;
  }

  function escapeRefinement(value) {
    if (typeof value === 'number' && value < 0) {
      value = String(value).replace(/^-/, '\\-');
    }

    return value;
  }

  function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== 'function') {
      throw new Error("The render function is not valid (got type \"".concat(_typeof(rendering), "\").\n\n").concat(usage));
    }
  }

  function getPropertyByPath(object, path) {
    var parts = path.split('.');
    return parts.reduce(function (current, key) {
      return current && current[key];
    }, object);
  }

  function noop() {}

  // This is the `Number.isFinite()` polyfill recommended by MDN.
  // We do not provide any tests for this function.
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
  function isFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  /**
   * This implementation is taken from Lodash implementation.
   * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
   */
  function getTag(value) {
    if (value === null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return Object.prototype.toString.call(value);
  }

  function isObjectLike(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  /**
   * Checks if `value` is a plain object.
   *
   * A plain object is an object created by the `Object`
   * constructor or with a `[[Prototype]]` of `null`.
   */


  function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
      return false;
    }

    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }

  function range(_ref) {
    var _ref$start = _ref.start,
        start = _ref$start === void 0 ? 0 : _ref$start,
        end = _ref.end,
        _ref$step = _ref.step,
        step = _ref$step === void 0 ? 1 : _ref$step;
    // We can't divide by 0 so we re-assign the step to 1 if it happens.
    var limitStep = step === 0 ? 1 : step; // In some cases the array to create has a decimal length.
    // We therefore need to round the value.
    // Example:
    //   { start: 1, end: 5000, step: 500 }
    //   => Array length = (5000 - 1) / 500 = 9.998

    var arrayLength = Math.round((end - start) / limitStep);
    return _toConsumableArray(Array(arrayLength)).map(function (_, current) {
      return (start + current) * limitStep;
    });
  }

  function isPrimitive(obj) {
    return obj !== Object(obj);
  }

  function isEqual(first, second) {
    if (first === second) {
      return true;
    }

    if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
      return first === second;
    }

    if (Object.keys(first).length !== Object.keys(second).length) {
      return false;
    }

    for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (!(key in second)) {
        return false;
      }

      if (!isEqual(first[key], second[key])) {
        return false;
      }
    }

    return true;
  }

  /**
   * This implementation is taken from Lodash implementation.
   * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
   */
  // Used to map characters to HTML entities.
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }; // Used to match HTML entities and HTML characters.

  var regexUnescapedHtml = /[&<>"']/g;
  var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
  /**
   * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
   * corresponding HTML entities.
   */

  function escape$1(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function (character) {
      return htmlEscapes[character];
    }) : value;
  }

  /**
   * Deeply merges all the object values in a new object.
   *
   * - Primitive values are replaced
   * - Arrays a concatenated and their values are made unique
   */

  function mergeDeep() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    return values.reduce(function (acc) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(source).forEach(function (key) {
        var previousValue = acc[key];
        var nextValue = source[key];

        if (Array.isArray(previousValue) && Array.isArray(nextValue)) {
          acc[key] = uniq([].concat(_toConsumableArray(previousValue), _toConsumableArray(nextValue)));
        } else if (isPlainObject(previousValue) && isPlainObject(nextValue)) {
          acc[key] = mergeDeep(previousValue, nextValue);
        } else {
          acc[key] = nextValue;
        }
      });
      return acc;
    }, {});
  }

  var warn = noop;
  /**
   * Logs a warning if the condition is not met.
   * This is used to log issues in development environment only.
   *
   * @returns {undefined}
   */

  var _warning = noop;

  {
    warn = function warn(message) {
      // eslint-disable-next-line no-console
      console.warn("[InstantSearch.js]: ".concat(message.trim()));
    };

    _warning = function warning(condition, message) {
      if (condition) {
        return;
      }

      var hasAlreadyPrinted = _warning.cache[message];

      if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
      }
    };

    _warning.cache = {};
  }

  var createDocumentationLink = function createDocumentationLink(_ref) {
    var name = _ref.name,
        _ref$connector = _ref.connector,
        connector = _ref$connector === void 0 ? false : _ref$connector;
    return ['https://www.algolia.com/doc/api-reference/widgets/', name, '/js/', connector ? '#connector' : ''].join('');
  };
  var createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {
    for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {
      widgets[_key] = arguments[_key];
    }

    var links = widgets.map(function (widget) {
      return createDocumentationLink(widget);
    }).join(', ');
    return function (message) {
      return [message, "See documentation: ".concat(links)].filter(Boolean).join('\n\n');
    };
  };

  var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
  function aroundLatLngToPosition(value) {
    var pattern = value.match(latLngRegExp); // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.

    if (!pattern) {
      throw new Error("Invalid value for \"aroundLatLng\" parameter: \"".concat(value, "\""));
    }

    return {
      lat: parseFloat(pattern[1]),
      lng: parseFloat(pattern[2])
    };
  }
  function insideBoundingBoxArrayToBoundingBox(value) {
    var _value = _slicedToArray(value, 1),
        _value$ = _value[0];

    _value$ = _value$ === void 0 ? [] : _value$;

    var _value$2 = _slicedToArray(_value$, 4),
        neLat = _value$2[0],
        neLng = _value$2[1],
        swLat = _value$2[2],
        swLng = _value$2[3]; // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.


    if (!neLat || !neLng || !swLat || !swLng) {
      throw new Error("Invalid value for \"insideBoundingBox\" parameter: [".concat(value, "]"));
    }

    return {
      northEast: {
        lat: neLat,
        lng: neLng
      },
      southWest: {
        lat: swLat,
        lng: swLng
      }
    };
  }
  function insideBoundingBoxStringToBoundingBox(value) {
    var _value$split$map = value.split(',').map(parseFloat),
        _value$split$map2 = _slicedToArray(_value$split$map, 4),
        neLat = _value$split$map2[0],
        neLng = _value$split$map2[1],
        swLat = _value$split$map2[2],
        swLng = _value$split$map2[3]; // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.


    if (!neLat || !neLng || !swLat || !swLng) {
      throw new Error("Invalid value for \"insideBoundingBox\" parameter: \"".concat(value, "\""));
    }

    return {
      northEast: {
        lat: neLat,
        lng: neLng
      },
      southWest: {
        lat: swLat,
        lng: swLng
      }
    };
  }
  function insideBoundingBoxToBoundingBox(value) {
    if (Array.isArray(value)) {
      return insideBoundingBoxArrayToBoundingBox(value);
    }

    return insideBoundingBoxStringToBoundingBox(value);
  }

  var addAbsolutePosition = function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function (hit, idx) {
      return _objectSpread({}, hit, {
        __position: hitsPerPage * page + idx + 1
      });
    });
  };

  var addQueryID = function addQueryID(hits, queryID) {
    if (!queryID) {
      return hits;
    }

    return hits.map(function (hit) {
      return _objectSpread({}, hit, {
        __queryID: queryID
      });
    });
  };

  var RoutingManager =
  /*#__PURE__*/
  function () {
    function RoutingManager(_ref) {
      var router = _ref.router,
          stateMapping = _ref.stateMapping,
          instantSearchInstance = _ref.instantSearchInstance;

      _classCallCheck(this, RoutingManager);

      _defineProperty(this, "instantSearchInstance", void 0);

      _defineProperty(this, "router", void 0);

      _defineProperty(this, "stateMapping", void 0);

      _defineProperty(this, "isFirstRender", true);

      _defineProperty(this, "currentUiState", void 0);

      _defineProperty(this, "initState", void 0);

      _defineProperty(this, "renderURLFromState", void 0);

      this.router = router;
      this.stateMapping = stateMapping;
      this.instantSearchInstance = instantSearchInstance;
      this.currentUiState = this.stateMapping.routeToState(this.router.read());
    }

    _createClass(RoutingManager, [{
      key: "getAllSearchParameters",
      value: function getAllSearchParameters(_ref2) {
        var currentSearchParameters = _ref2.currentSearchParameters,
            uiState = _ref2.uiState;
        var widgets = this.instantSearchInstance.widgets;
        return widgets.reduce(function (parameters, widget) {
          if (!widget.getWidgetSearchParameters) {
            return parameters;
          }

          return widget.getWidgetSearchParameters(parameters, {
            uiState: uiState
          });
        }, currentSearchParameters);
      }
    }, {
      key: "getAllUiStates",
      value: function getAllUiStates(_ref3) {
        var searchParameters = _ref3.searchParameters;
        var widgets = this.instantSearchInstance.widgets;
        var helper = this.instantSearchInstance.helper;
        return widgets.reduce(function (state, widget) {
          if (!widget.getWidgetState) {
            return state;
          }

          return widget.getWidgetState(state, {
            helper: helper,
            searchParameters: searchParameters
          });
        }, {});
      }
    }, {
      key: "setupRouting",
      value: function setupRouting(state) {
        var _this = this;

        var helper = this.instantSearchInstance.helper;
        this.router.onUpdate(function (route) {
          var nextUiState = _this.stateMapping.routeToState(route);

          var widgetsUiState = _this.getAllUiStates({
            searchParameters: helper.state
          });

          if (isEqual(nextUiState, widgetsUiState)) {
            return;
          }

          _this.currentUiState = nextUiState;

          var searchParameters = _this.getAllSearchParameters({
            currentSearchParameters: state,
            uiState: _this.currentUiState
          });

          helper.overrideStateWithoutTriggeringChangeEvent(searchParameters).search();
        });

        this.renderURLFromState = function (searchParameters) {
          _this.currentUiState = _this.getAllUiStates({
            searchParameters: searchParameters
          });

          var route = _this.stateMapping.stateToRoute(_this.currentUiState);

          _this.router.write(route);
        };

        helper.on('change', this.renderURLFromState); // Compare initial state and first render state to see if the query has been
        // changed by the `searchFunction`. It's required because the helper of the
        // `searchFunction` does not trigger change event (not the same instance).

        var firstRenderState = this.getAllUiStates({
          searchParameters: state
        });

        if (!isEqual(this.initState, firstRenderState)) {
          // Force update the URL, if the state has changed since the initial read.
          // We do this in order to make the URL update when there is `searchFunction`
          // that prevents the search of the initial rendering.
          // See: https://github.com/algolia/instantsearch.js/issues/2523#issuecomment-339356157
          this.currentUiState = firstRenderState;
          var route = this.stateMapping.stateToRoute(this.currentUiState);
          this.router.write(route);
        }
      }
    }, {
      key: "getConfiguration",
      value: function getConfiguration(currentConfiguration) {
        // We have to create a `SearchParameters` because `getAllSearchParameters`
        // expects an instance of `SearchParameters` and not a plain object.
        var currentSearchParameters = algoliasearchHelperJs.SearchParameters.make(currentConfiguration);
        return _objectSpread({}, this.getAllSearchParameters({
          uiState: this.currentUiState,
          currentSearchParameters: currentSearchParameters
        }));
      }
    }, {
      key: "init",
      value: function init(_ref4) {
        var state = _ref4.state;
        // Store the initial state from the storage to compare it with the state on next renders
        // in case the `searchFunction` has modified it.
        this.initState = this.getAllUiStates({
          searchParameters: state
        });
      }
    }, {
      key: "render",
      value: function render(_ref5) {
        var state = _ref5.state;

        if (this.isFirstRender) {
          this.isFirstRender = false;
          this.setupRouting(state);
        }
      }
    }, {
      key: "dispose",
      value: function dispose(_ref6) {
        var helper = _ref6.helper,
            state = _ref6.state;

        if (this.renderURLFromState) {
          this.instantSearchInstance.helper.removeListener('change', this.renderURLFromState);
        }

        if (this.router.dispose) {
          this.router.dispose({
            helper: helper,
            state: state
          });
        }
      }
    }, {
      key: "createURL",
      value: function createURL(state) {
        var uiState = this.getAllUiStates({
          searchParameters: state
        });
        var route = this.stateMapping.stateToRoute(uiState);
        return this.router.createURL(route);
      }
    }, {
      key: "onHistoryChange",
      value: function onHistoryChange(callback) {
        var _this2 = this;

        var helper = this.instantSearchInstance.helper;
        this.router.onUpdate(function (route) {
          var nextUiState = _this2.stateMapping.routeToState(route);

          var widgetsUiState = _this2.getAllUiStates({
            searchParameters: helper.state
          });

          if (isEqual(nextUiState, widgetsUiState)) {
            return;
          }

          _this2.currentUiState = nextUiState;

          var searchParameters = _this2.getAllSearchParameters({
            currentSearchParameters: helper.state,
            uiState: _this2.currentUiState
          });

          callback(_objectSpread({}, searchParameters));
        });
      }
    }]);

    return RoutingManager;
  }();

  var SimpleUIStateMapping =
  /*#__PURE__*/
  function () {
    function SimpleUIStateMapping() {
      _classCallCheck(this, SimpleUIStateMapping);
    }

    _createClass(SimpleUIStateMapping, [{
      key: "stateToRoute",
      value: function stateToRoute(uiState) {
        return uiState;
      }
    }, {
      key: "routeToState",
      value: function routeToState(routeState) {
        return routeState;
      }
    }]);

    return SimpleUIStateMapping;
  }();

  function simpleMapping () {
    return new SimpleUIStateMapping();
  }

  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (isArray(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge$1 = function merge(target, source, options) {
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (isArray(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (isArray(target) && isArray(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = typeof str === 'string' ? str : String(str);

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact$1 = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact$1,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge$1
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;

  var formats = {
      'default': 'RFC3986',
      formatters: {
          RFC1738: function (value) {
              return replace.call(value, percentTwenties, '+');
          },
          RFC3986: function (value) {
              return value;
          }
      },
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var has$1 = Object.prototype.hasOwnProperty;

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
          return prefix + '[]';
      },
      comma: 'comma',
      indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
          return prefix;
      }
  };

  var isArray$1 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      formatter: formats.formatters[formats['default']],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var stringify = function stringify( // eslint-disable-line func-name-matching
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly,
      charset
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
          obj = obj.join(',');
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
          }

          obj = '';
      }

      if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (isArray$1(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (skipNulls && obj[key] === null) {
              continue;
          }

          if (isArray$1(obj)) {
              pushToArray(values, stringify(
                  obj[key],
                  typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          } else {
              pushToArray(values, stringify(
                  obj[key],
                  prefix + (allowDots ? '.' + key : '[' + key + ']'),
                  generateArrayPrefix,
                  strictNullHandling,
                  skipNulls,
                  encoder,
                  filter,
                  sort,
                  allowDots,
                  serializeDate,
                  formatter,
                  encodeValuesOnly,
                  charset
              ));
          }
      }

      return values;
  };

  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
      if (!opts) {
          return defaults;
      }

      if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }

      var format = formats['default'];
      if (typeof opts.format !== 'undefined') {
          if (!has$1.call(formats.formatters, opts.format)) {
              throw new TypeError('Unknown format option provided.');
          }
          format = opts.format;
      }
      var formatter = formats.formatters[format];

      var filter = defaults.filter;
      if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
          filter = opts.filter;
      }

      return {
          addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
          encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter: filter,
          formatter: formatter,
          serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === 'function' ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);

      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray$1(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
      } else if (opts && 'indices' in opts) {
          arrayFormat = opts.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (options.sort) {
          objKeys.sort(options.sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (options.skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              options.strictNullHandling,
              options.skipNulls,
              options.encode ? options.encoder : null,
              options.filter,
              options.sort,
              options.allowDots,
              options.serializeDate,
              options.formatter,
              options.encodeValuesOnly,
              options.charset
          ));
      }

      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      if (options.charsetSentinel) {
          if (options.charset === 'iso-8859-1') {
              // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              // encodeURIComponent('✓')
              prefix += 'utf8=%E2%9C%93&';
          }
      }

      return joined.length > 0 ? prefix + joined : '';
  };

  var has$2 = Object.prototype.hasOwnProperty;

  var defaults$1 = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
  };

  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;

      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }

      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults$1.decoder, charset);
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset);
              val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset);
          }

          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }

          if (val && options.comma && val.indexOf(',') > -1) {
              val = val.split(',');
          }

          if (has$2.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options) {
      var leaf = val;

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj;
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
          if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while ((segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options);
  };

  var normalizeParseOptions = function normalizeParseOptions(opts) {
      if (!opts) {
          return defaults$1;
      }

      if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;

      return {
          allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
          arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
          comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
          decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
          delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
          depth: typeof opts.depth === 'number' ? opts.depth : defaults$1.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
      };
  };

  var parse = function (str, opts) {
      var options = normalizeParseOptions(opts);

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options);
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var lib$1 = {
      formats: formats,
      parse: parse,
      stringify: stringify_1
  };

  var defaultCreateURL = function defaultCreateURL(_ref) {
    var qsModule = _ref.qsModule,
        routeState = _ref.routeState,
        location = _ref.location;
    var protocol = location.protocol,
        hostname = location.hostname,
        _location$port = location.port,
        port = _location$port === void 0 ? '' : _location$port,
        pathname = location.pathname,
        hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === '' ? '' : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.

    if (!routeState || Object.keys(routeState).length === 0) {
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    }

    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
  };

  var defaultParseURL = function defaultParseURL(_ref2) {
    var qsModule = _ref2.qsModule,
        location = _ref2.location;
    // `qs` by default converts arrays with more than 20 items to an object.
    // We want to avoid this because the data structure manipulated can therefore vary.
    // Setting the limit to `100` seems a good number because the engine's default is 100
    // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
    //
    // Using an `arrayLimit` of `n` allows `n + 1` items.
    //
    // See:
    //   - https://github.com/ljharb/qs#parsing-arrays
    //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
    return qsModule.parse(location.search.slice(1), {
      arrayLimit: 99
    });
  };

  var setWindowTitle = function setWindowTitle(title) {
    if (title) {
      window.document.title = title;
    }
  };

  var BrowserHistory =
  /*#__PURE__*/
  function () {
    /**
     * Initializes a new storage provider that syncs the search state to the URL
     * using web APIs (`window.location.pushState` and `onpopstate` event).
     */
    function BrowserHistory() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          windowTitle = _ref3.windowTitle,
          _ref3$writeDelay = _ref3.writeDelay,
          writeDelay = _ref3$writeDelay === void 0 ? 400 : _ref3$writeDelay,
          _ref3$createURL = _ref3.createURL,
          createURL = _ref3$createURL === void 0 ? defaultCreateURL : _ref3$createURL,
          _ref3$parseURL = _ref3.parseURL,
          parseURL = _ref3$parseURL === void 0 ? defaultParseURL : _ref3$parseURL;

      _classCallCheck(this, BrowserHistory);

      _defineProperty(this, "windowTitle", void 0);

      _defineProperty(this, "writeDelay", void 0);

      _defineProperty(this, "_createURL", void 0);

      _defineProperty(this, "parseURL", void 0);

      _defineProperty(this, "writeTimer", void 0);

      this.windowTitle = windowTitle;
      this.writeTimer = undefined;
      this.writeDelay = writeDelay;
      this._createURL = createURL;
      this.parseURL = parseURL;
      var title = this.windowTitle && this.windowTitle(this.read());
      setWindowTitle(title);
    }
    /**
     * Reads the URL and returns a syncable UI search state.
     */


    _createClass(BrowserHistory, [{
      key: "read",
      value: function read() {
        return this.parseURL({
          qsModule: lib$1,
          location: window.location
        });
      }
      /**
       * Pushes a search state into the URL.
       */

    }, {
      key: "write",
      value: function write(routeState) {
        var _this = this;

        var url = this.createURL(routeState);
        var title = this.windowTitle && this.windowTitle(routeState);

        if (this.writeTimer) {
          window.clearTimeout(this.writeTimer);
        }

        this.writeTimer = window.setTimeout(function () {
          setWindowTitle(title);
          window.history.pushState(routeState, title || '', url);
          _this.writeTimer = undefined;
        }, this.writeDelay);
      }
      /**
       * Sets a callback on the `onpopstate` event of the history API of the current page.
       * It enables the URL sync to keep track of the changes.
       */

    }, {
      key: "onUpdate",
      value: function onUpdate(callback) {
        var _this2 = this;

        this._onPopState = function (event) {
          if (_this2.writeTimer) {
            window.clearTimeout(_this2.writeTimer);
            _this2.writeTimer = undefined;
          }

          var routeState = event.state; // At initial load, the state is read from the URL without update.
          // Therefore the state object is not available.
          // In this case, we fallback and read the URL.

          if (!routeState) {
            callback(_this2.read());
          } else {
            callback(routeState);
          }
        };

        window.addEventListener('popstate', this._onPopState);
      }
      /**
       * Creates a complete URL from a given syncable UI state.
       *
       * It always generates the full URL, not a relative one.
       * This allows to handle cases like using a <base href>.
       * See: https://github.com/algolia/instantsearch.js/issues/790
       */

    }, {
      key: "createURL",
      value: function createURL(routeState) {
        return this._createURL({
          qsModule: lib$1,
          routeState: routeState,
          location: window.location
        });
      }
      /**
       * Removes the event listener and cleans up the URL.
       */

    }, {
      key: "dispose",
      value: function dispose() {
        if (this._onPopState) {
          window.removeEventListener('popstate', this._onPopState);
        }

        if (this.writeTimer) {
          window.clearTimeout(this.writeTimer);
        }

        this.write({});
      }
    }]);

    return BrowserHistory;
  }();

  function historyRouter () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(BrowserHistory, args);
  }

  var version$1 = '3.5.2';

  var TAG_PLACEHOLDER = {
    highlightPreTag: '__ais-highlight__',
    highlightPostTag: '__/ais-highlight__'
  };
  var TAG_REPLACEMENT = {
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>'
  };

  function replaceTagsAndEscape(value) {
    return escape$1(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
  }

  function recursiveEscape(input) {
    if (isPlainObject(input) && typeof input.value !== 'string') {
      return Object.keys(input).reduce(function (acc, key) {
        return _objectSpread({}, acc, _defineProperty({}, key, recursiveEscape(input[key])));
      }, {});
    }

    if (Array.isArray(input)) {
      return input.map(recursiveEscape);
    }

    return _objectSpread({}, input, {
      value: replaceTagsAndEscape(input.value)
    });
  }

  function escapeHits(hits) {
    if (hits.__escaped === undefined) {
      hits = hits.map(function (hit) {
        if (hit._highlightResult) {
          hit._highlightResult = recursiveEscape(hit._highlightResult);
        }

        if (hit._snippetResult) {
          hit._snippetResult = recursiveEscape(hit._snippetResult);
        }

        return hit;
      });
      hits.__escaped = true;
    }

    return hits;
  }
  function escapeFacets(facetHits) {
    return facetHits.map(function (h) {
      return _objectSpread({}, h, {
        highlighted: replaceTagsAndEscape(h.highlighted)
      });
    });
  }

  var NAMESPACE = 'ais';
  var component = function component(componentName) {
    return function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          descendantName = _ref.descendantName,
          modifierName = _ref.modifierName;

      var descendent = descendantName ? "-".concat(descendantName) : '';
      var modifier = modifierName ? "--".concat(modifierName) : '';
      return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
  };

  var suit = component('Highlight');
  function highlight(_ref) {
    var attribute = _ref.attribute,
        _ref$highlightedTagNa = _ref.highlightedTagName,
        highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
        hit = _ref.hit;
    var attributeValue = getPropertyByPath(hit, "_highlightResult.".concat(attribute, ".value")) || '';
    var className = suit({
      descendantName: 'highlighted'
    });
    return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
  }

  var suit$1 = component('Snippet');
  function snippet(_ref) {
    var attribute = _ref.attribute,
        _ref$highlightedTagNa = _ref.highlightedTagName,
        highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
        hit = _ref.hit;
    var attributeValue = getPropertyByPath(hit, "_snippetResult.".concat(attribute, ".value")) || '';
    var className = suit$1({
      descendantName: 'highlighted'
    });
    return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
  }

  function readDataAttributes(domElement) {
    var method = domElement.getAttribute('data-insights-method');
    var serializedPayload = domElement.getAttribute('data-insights-payload');

    if (typeof serializedPayload !== 'string') {
      throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
    }

    try {
      var payload = JSON.parse(atob(serializedPayload));
      return {
        method: method,
        payload: payload
      };
    } catch (error) {
      throw new Error('The insights helper was unable to parse `data-insights-payload`.');
    }
  }
  function hasDataAttributes(domElement) {
    return domElement.hasAttribute('data-insights-method');
  }
  function writeDataAttributes(_ref) {
    var method = _ref.method,
        payload = _ref.payload;

    if (_typeof(payload) !== 'object') {
      throw new Error("The insights helper expects the payload to be an object.");
    }

    var serializedPayload;

    try {
      serializedPayload = btoa(JSON.stringify(payload));
    } catch (error) {
      throw new Error("Could not JSON serialize the payload object.");
    }

    return "data-insights-method=\"".concat(method, "\" data-insights-payload=\"").concat(serializedPayload, "\"");
  }
  function insights(method, payload) {
    return writeDataAttributes({
      method: method,
      payload: payload
    });
  }

  function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
      formatNumber: function formatNumber(value, render) {
        return Number(render(value)).toLocaleString(numberLocale);
      },
      highlight: function highlight$1(options, render) {
        try {
          var highlightOptions = JSON.parse(options);
          return render(highlight(_objectSpread({}, highlightOptions, {
            hit: this
          })));
        } catch (error) {
          throw new Error("\nThe highlight helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
        }
      },
      snippet: function snippet$1(options, render) {
        try {
          var snippetOptions = JSON.parse(options);
          return render(snippet(_objectSpread({}, snippetOptions, {
            hit: this
          })));
        } catch (error) {
          throw new Error("\nThe snippet helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
        }
      }
    };
  }

  var withUsage = createDocumentationMessageGenerator({
    name: 'instantsearch'
  });
  var ROUTING_DEFAULT_OPTIONS = {
    stateMapping: simpleMapping(),
    router: historyRouter()
  };

  function defaultCreateURL$1() {
    return '#';
  }
  /**
   * Widgets are the building blocks of InstantSearch.js. Any
   * valid widget must have at least a `render` or a `init` function.
   * @typedef {Object} Widget
   * @property {function} [render] Called after each search response has been received
   * @property {function} [getConfiguration] Let the widget update the configuration
   * of the search with new parameters
   * @property {function} [init] Called once before the first search
   */

  /**
   * The actual implementation of the InstantSearch. This is
   * created using the `instantsearch` factory function.
   * @fires Instantsearch#render This event is triggered each time a render is done
   */


  var InstantSearch =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(InstantSearch, _EventEmitter);

    function InstantSearch(options) {
      var _this;

      _classCallCheck(this, InstantSearch);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch).call(this));
      var _options$indexName = options.indexName,
          indexName = _options$indexName === void 0 ? null : _options$indexName,
          numberLocale = options.numberLocale,
          _options$searchParame = options.searchParameters,
          searchParameters = _options$searchParame === void 0 ? {} : _options$searchParame,
          _options$routing = options.routing,
          routing = _options$routing === void 0 ? null : _options$routing,
          searchFunction = options.searchFunction,
          _options$stalledSearc = options.stalledSearchDelay,
          stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc,
          _options$searchClient = options.searchClient,
          searchClient = _options$searchClient === void 0 ? null : _options$searchClient,
          _options$insightsClie = options.insightsClient,
          insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie;

      if (indexName === null) {
        throw new Error(withUsage('The `indexName` option is required.'));
      }

      if (searchClient === null) {
        throw new Error(withUsage('The `searchClient` option is required.'));
      }

      if (typeof options.urlSync !== 'undefined') {
        throw new Error(withUsage('The `urlSync` option was removed in InstantSearch.js 3. You may want to use the `routing` option.'));
      }

      if (typeof searchClient.search !== 'function') {
        throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
      }

      if (typeof searchClient.addAlgoliaAgent === 'function') {
        searchClient.addAlgoliaAgent("instantsearch.js (".concat(version$1, ")"));
      }

      if (insightsClient && typeof insightsClient !== 'function') {
        throw new Error('The provided `insightsClient` must be a function.');
      }

      _this.client = searchClient;
      _this.insightsClient = insightsClient;
      _this.helper = null;
      _this.indexName = indexName;
      _this.searchParameters = _objectSpread({}, searchParameters, {
        index: indexName
      });
      _this.widgets = [];
      _this.templatesConfig = {
        helpers: hoganHelpers({
          numberLocale: numberLocale
        }),
        compileOptions: {}
      };
      _this._stalledSearchDelay = stalledSearchDelay;

      if (searchFunction) {
        _this._searchFunction = searchFunction;
      }

      if (routing === true) _this.routing = ROUTING_DEFAULT_OPTIONS;else if (isPlainObject(routing)) _this.routing = _objectSpread({}, ROUTING_DEFAULT_OPTIONS, routing);
      return _this;
    }
    /**
     * Adds a widget. This can be done before and after InstantSearch has been started. Adding a
     * widget after InstantSearch started is considered **EXPERIMENTAL** and therefore
     * it is possibly buggy, if you find anything please
     * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20hot%20addWidget).
     * @param  {Widget} widget The widget to add to InstantSearch. Widgets are simple objects
     * that have methods that map the search life cycle in a UI perspective. Usually widgets are
     * created by [widget factories](widgets.html) like the one provided with InstantSearch.js.
     * @return {undefined} This method does not return anything
     */


    _createClass(InstantSearch, [{
      key: "addWidget",
      value: function addWidget(widget) {
        this.addWidgets([widget]);
      }
      /**
       * Adds multiple widgets. This can be done before and after the InstantSearch has been started. This feature
       * is considered **EXPERIMENTAL** and therefore it is possibly buggy, if you find anything please
       * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20addWidgets).
       * @param  {Widget[]} widgets The array of widgets to add to InstantSearch.
       * @return {undefined} This method does not return anything
       */

    }, {
      key: "addWidgets",
      value: function addWidgets(widgets) {
        var _this2 = this;

        if (!Array.isArray(widgets)) {
          throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
        } // The routing manager widget is always added manually at the last position.
        // By removing it from the last position and adding it back after, we ensure
        // it keeps this position.
        // fixes #3148


        var lastWidget = this.widgets.pop();
        widgets.forEach(function (widget) {
          // Add the widget to the list of widget
          if (widget.render === undefined && widget.init === undefined) {
            throw new Error("The widget definition expects a `render` and/or an `init` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/widgets/create-your-own-widgets/js/");
          }

          _this2.widgets.push(widget);
        }); // Second part of the fix for #3148

        if (lastWidget) this.widgets.push(lastWidget); // Init the widget directly if instantsearch has been already started

        if (this.started && Boolean(widgets.length)) {
          this.searchParameters = this.widgets.reduce(enhanceConfiguration, _objectSpread({}, this.helper.state));
          this.helper.setState(this.searchParameters);
          widgets.forEach(function (widget) {
            if (widget.init) {
              widget.init({
                state: _this2.helper.state,
                helper: _this2.helper,
                templatesConfig: _this2.templatesConfig,
                createURL: _this2._createAbsoluteURL,
                onHistoryChange: _this2._onHistoryChange,
                instantSearchInstance: _this2
              });
            }
          });
          this.helper.search();
        }
      }
      /**
       * Removes a widget. This can be done after the InstantSearch has been started. This feature
       * is considered **EXPERIMENTAL** and therefore it is possibly buggy, if you find anything please
       * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20removeWidget).
       * @param  {Widget} widget The widget instance to remove from InstantSearch. This widget must implement a `dispose()` method in order to be gracefully removed.
       * @return {undefined} This method does not return anything
       */

    }, {
      key: "removeWidget",
      value: function removeWidget(widget) {
        this.removeWidgets([widget]);
      }
      /**
       * Removes multiple widgets. This can be done only after the InstantSearch has been started. This feature
       * is considered **EXPERIMENTAL** and therefore it is possibly buggy, if you find anything please
       * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20addWidgets).
       * @param  {Widget[]} widgets Array of widgets instances to remove from InstantSearch.
       * @return {undefined} This method does not return anything
       */

    }, {
      key: "removeWidgets",
      value: function removeWidgets(widgets) {
        var _this3 = this;

        if (!Array.isArray(widgets)) {
          throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
        }

        widgets.forEach(function (widget) {
          if (!_this3.widgets.includes(widget) || typeof widget.dispose !== 'function') {
            throw new Error("The `dispose` method is required to remove the widget.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/widgets/create-your-own-widgets/js/#the-widget-lifecycle-and-api");
          }

          _this3.widgets = _this3.widgets.filter(function (w) {
            return w !== widget;
          });
          var nextState = widget.dispose({
            helper: _this3.helper,
            state: _this3.helper.state
          }); // re-compute remaining widgets to the state
          // in a case two widgets were using the same configuration but we removed one

          if (nextState) {
            _this3.searchParameters = _this3.widgets.reduce(enhanceConfiguration, _objectSpread({}, nextState));

            _this3.helper.setState(_this3.searchParameters);
          }
        }); // If there's multiple call to `removeWidget()` let's wait until they are all made
        // and then check for widgets.length & make a search on next tick
        //
        // This solves an issue where you unmount a page and removing widget by widget

        setTimeout(function () {
          // no need to trigger a search if we don't have any widgets left
          if (_this3.widgets.length > 0) {
            _this3.helper.search();
          }
        }, 0);
      }
      /**
       * Clears the cached answers from Algolia and triggers a new search.
       *
       * @return {undefined} Does not return anything
       */

    }, {
      key: "refresh",
      value: function refresh() {
        if (this.helper) {
          this.helper.clearCache().search();
        }
      }
      /**
       * Ends the initialization of InstantSearch.js and triggers the
       * first search. This method should be called after all widgets have been added
       * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing
       * widgets after the start as an **EXPERIMENTAL** feature.
       *
       * @return {undefined} Does not return anything
       */

    }, {
      key: "start",
      value: function start() {
        var _this4 = this;

        if (this.started) {
          throw new Error(withUsage('The `start` method has already been called once.'));
        }

        if (this.routing) {
          var routingManager = new RoutingManager(_objectSpread({}, this.routing, {
            instantSearchInstance: this
          }));
          this._onHistoryChange = routingManager.onHistoryChange.bind(routingManager);
          this._createURL = routingManager.createURL.bind(routingManager);
          this._createAbsoluteURL = this._createURL;
          this.widgets.push(routingManager);
        } else {
          this._createURL = defaultCreateURL$1;
          this._createAbsoluteURL = defaultCreateURL$1;
          this._onHistoryChange = noop;
        }

        this.searchParameters = this.widgets.reduce(enhanceConfiguration, this.searchParameters);
        var helper = algoliasearchHelperJs(this.client, this.searchParameters.index || this.indexName, this.searchParameters);

        if (this._searchFunction) {
          this._mainHelperSearch = helper.search.bind(helper);

          helper.search = function () {
            var helperSearchFunction = algoliasearchHelperJs({
              search: function search() {
                return new Promise(noop);
              }
            }, helper.state.index, helper.state);
            helperSearchFunction.once('search', function (state) {
              helper.overrideStateWithoutTriggeringChangeEvent(state);

              _this4._mainHelperSearch();
            });

            _this4._searchFunction(helperSearchFunction);
          };
        }

        this.helper = helper;

        this._init(helper.state, this.helper);

        this.helper.on('result', this._render.bind(this, this.helper));
        this.helper.on('error', function (e) {
          _this4.emit('error', e);
        });
        this._searchStalledTimer = null;
        this._isSearchStalled = true;
        this.helper.search();
        this.helper.on('search', function () {
          if (!_this4._isSearchStalled && !_this4._searchStalledTimer) {
            _this4._searchStalledTimer = setTimeout(function () {
              _this4._isSearchStalled = true;

              _this4._render(_this4.helper, _this4.helper.lastResults, _this4.helper.lastResults._state);
            }, _this4._stalledSearchDelay);
          }
        }); // track we started the search if we add more widgets,
        // to init them directly after add

        this.started = true;
      }
      /**
       * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,
       * if you find an issue with it, please
       * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20dispose).
       * @return {undefined} This method does not return anything
       */

    }, {
      key: "dispose",
      value: function dispose() {
        this.removeWidgets(this.widgets); // You can not start an instance two times, therefore a disposed instance needs to set started as false
        // otherwise this can not be restarted at a later point.

        this.started = false; // The helper needs to be reset to perform the next search from a fresh state.
        // If not reset, it would use the state stored before calling `dispose()`.

        this.helper.removeAllListeners();
        this.helper = null;
      }
    }, {
      key: "createURL",
      value: function createURL(params) {
        if (!this._createURL) {
          throw new Error('The `start` method needs to be called before `createURL`.');
        }

        return this._createURL(this.helper.state.setQueryParameters(params));
      }
    }, {
      key: "_render",
      value: function _render(helper, results, state) {
        var _this5 = this;

        if (!this.helper.hasPendingRequests()) {
          clearTimeout(this._searchStalledTimer);
          this._searchStalledTimer = null;
          this._isSearchStalled = false;
        }

        this.widgets.forEach(function (widget) {
          if (!widget.render) {
            return;
          }

          widget.render({
            templatesConfig: _this5.templatesConfig,
            results: results,
            state: state,
            helper: helper,
            createURL: _this5._createAbsoluteURL,
            instantSearchInstance: _this5,
            searchMetadata: {
              isSearchStalled: _this5._isSearchStalled
            }
          });
        });
        /**
         * Render is triggered when the rendering of the widgets has been completed
         * after a search.
         * @event InstantSearch#render
         */

        this.emit('render');
      }
    }, {
      key: "_init",
      value: function _init(state, helper) {
        var _this6 = this;

        this.widgets.forEach(function (widget) {
          if (widget.init) {
            widget.init({
              state: state,
              helper: helper,
              templatesConfig: _this6.templatesConfig,
              createURL: _this6._createAbsoluteURL,
              onHistoryChange: _this6._onHistoryChange,
              instantSearchInstance: _this6
            });
          }
        });
      }
    }]);

    return InstantSearch;
  }(events$1);

  function enhanceConfiguration(configuration, widgetDefinition) {
    if (!widgetDefinition.getConfiguration) {
      return configuration;
    } // Get the relevant partial configuration asked by the widget


    var partialConfiguration = widgetDefinition.getConfiguration(configuration);
    return mergeDeep(configuration, partialConfiguration);
  }

  var withUsage$1 = createDocumentationMessageGenerator({
    name: 'clear-refinements',
    connector: true
  });
  /**
   * @typedef {Object} CustomClearRefinementsWidgetOptions
   * @property {string[]} [includedAttributes = []] The attributes to include in the refinements to clear (all by default). Cannot be used with `excludedAttributes`.
   * @property {string[]} [excludedAttributes = ['query']] The attributes to exclude from the refinements to clear. Cannot be used with `includedAttributes`.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} ClearRefinementsRenderingOptions
   * @property {function} refine Triggers the clear of all the currently refined values.
   * @property {boolean} hasRefinements Indicates if search state is refined.
   * @property {function} createURL Creates a url for the next state when refinements are cleared.
   * @property {Object} widgetParams All original `CustomClearRefinementsWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **ClearRefinements** connector provides the logic to build a custom widget that will give the user
   * the ability to reset the search state.
   *
   * This connector provides a `refine` function to remove the current refined facets.
   *
   * The behaviour of this function can be changed with widget options. If `clearsQuery`
   * is set to `true`, `refine` will also clear the query and `excludedAttributes` can
   * prevent certain attributes from being cleared.
   *
   * @type {Connector}
   * @param {function(ClearRefinementsRenderingOptions, boolean)} renderFn Rendering function for the custom **ClearRefinements** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomClearRefinementsWidgetOptions)} Re-usable widget factory for a custom **ClearRefinements** widget.
   * @example
   * // custom `renderFn` to render the custom ClearRefinements widget
   * function renderFn(ClearRefinementsRenderingOptions, isFirstRendering) {
   *   var containerNode = ClearRefinementsRenderingOptions.widgetParams.containerNode;
   *   if (isFirstRendering) {
   *     var markup = $('<button id="custom-clear-all">Clear All</button>');
   *     containerNode.append(markup);
   *
   *     markup.on('click', function(event) {
   *       event.preventDefault();
   *       ClearRefinementsRenderingOptions.refine();
   *     })
   *   }
   *
   *   var clearRefinementsCTA = containerNode.find('#custom-clear-all');
   *   clearRefinementsCTA.attr('disabled', !ClearRefinementsRenderingOptions.hasRefinements)
   * };
   *
   * // connect `renderFn` to ClearRefinements logic
   * var customClearRefinementsWidget = instantsearch.connectors.connectClearRefinements(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customClearRefinementsWidget({
   *     containerNode: $('#custom-clear-all-container'),
   *   })
   * );
   */

  function connectClearRefinements(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$1());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (widgetParams.includedAttributes && widgetParams.excludedAttributes) {
        throw new Error(withUsage$1('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
      }

      var _widgetParams$include = widgetParams.includedAttributes,
          includedAttributes = _widgetParams$include === void 0 ? [] : _widgetParams$include,
          _widgetParams$exclude = widgetParams.excludedAttributes,
          excludedAttributes = _widgetParams$exclude === void 0 ? ['query'] : _widgetParams$exclude,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;
      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              instantSearchInstance = _ref.instantSearchInstance,
              createURL = _ref.createURL;
          var attributesToClear = getAttributesToClear({
            helper: helper,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes,
            transformItems: transformItems
          });
          var hasRefinements = attributesToClear.length > 0;

          this._refine = function () {
            helper.setState(clearRefinements({
              helper: helper,
              attributesToClear: getAttributesToClear({
                helper: helper,
                includedAttributes: includedAttributes,
                excludedAttributes: excludedAttributes,
                transformItems: transformItems
              })
            })).search();
          };

          this._createURL = function () {
            return createURL(clearRefinements({
              helper: helper,
              attributesToClear: getAttributesToClear({
                helper: helper,
                includedAttributes: includedAttributes,
                excludedAttributes: excludedAttributes,
                transformItems: transformItems
              })
            }));
          };

          renderFn({
            hasRefinements: hasRefinements,
            refine: this._refine,
            createURL: this._createURL,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref2) {
          var helper = _ref2.helper,
              instantSearchInstance = _ref2.instantSearchInstance;
          var attributesToClear = getAttributesToClear({
            helper: helper,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes,
            transformItems: transformItems
          });
          var hasRefinements = attributesToClear.length > 0;
          renderFn({
            hasRefinements: hasRefinements,
            refine: this._refine,
            createURL: this._createURL,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  function getAttributesToClear(_ref3) {
    var helper = _ref3.helper,
        includedAttributes = _ref3.includedAttributes,
        excludedAttributes = _ref3.excludedAttributes,
        transformItems = _ref3.transformItems;
    var clearsQuery = includedAttributes.indexOf('query') !== -1 || excludedAttributes.indexOf('query') === -1;
    return transformItems(getRefinements(helper.lastResults || {}, helper.state, clearsQuery).map(function (refinement) {
      return refinement.attributeName;
    }).filter(function (attribute) {
      return (// If the array is empty (default case), we keep all the attributes
        includedAttributes.length === 0 || // Otherwise, only add the specified attributes
        includedAttributes.indexOf(attribute) !== -1
      );
    }).filter(function (attribute) {
      return (// If the query is included, we ignore the default `excludedAttributes = ['query']`
        attribute === 'query' && clearsQuery || // Otherwise, ignore the excluded attributes
        excludedAttributes.indexOf(attribute) === -1
      );
    }));
  }

  var withUsage$2 = createDocumentationMessageGenerator({
    name: 'current-refinements',
    connector: true
  });
  /**
   * @typedef {Object} Refinement
   * @property {"facet"|"exclude"|"disjunctive"|"hierarchical"|"numeric"|"query"} type The type of the refinement
   * @property {string} attribute The attribute on which the refinement is applied
   * @property {string} label The label of the refinement to display
   * @property {string} value The raw value of the refinement
   * @property {string} [operator] The value of the operator, only if applicable
   * @property {boolean} [exhaustive] Whether the count is exhaustive, only if applicable
   * @property {number} [count] number of items found, if applicable
   */

  /**
   * @typedef {Object} RefinementItem
   * @property {string} attribute The attribute on which the refinement is applied
   * @property {function} refine The function to remove the refinement
   * @property {Refinement[]} refinements The current refinements
   */

  /**
   * @typedef {Object} CurrentRefinementsRenderingOptions
   * @property {function(item)} refine Clears a single refinement
   * @property {function(item): string} createURL Creates an individual URL where a single refinement is cleared
   * @property {RefinementItem[]} items All the refinement items
   * @property {Object} widgetParams All original `CustomCurrentRefinementsWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * @typedef {Object} CustomCurrentRefinementsWidgetOptions
   * @property {string[]} [includedAttributes] The attributes to include in the refinements (all by default). Cannot be used with `excludedAttributes`.
   * @property {string[]} [excludedAttributes = ["query"]] The attributes to exclude from the refinements. Cannot be used with `includedAttributes`.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * **CurrentRefinements** connector provides the logic to build a widget that will give
   * the user the ability to see all the currently applied filters and, remove some or all of
   * them.
   *
   * This provides a `refine(item)` function to remove a selected refinement.
   * Those functions can see their behaviour change based on the widget options used.
   * @type {Connector}
   * @param {function(CurrentRefinementsRenderingOptions)} renderFn Rendering function for the custom **CurrentRefinements** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomCurrentRefinementsWidgetOptions)} Re-usable widget factory for a custom **CurrentRefinements** widget.
   * @example
   * // custom `renderFn` to render the custom ClearRefinements widget
   * function renderFn(currentRefinementsRenderingOptions, isFirstRendering) {
   *   var containerNode = currentRefinementsRenderingOptions.widgetParams.containerNode;
   *   if (isFirstRendering) {
   *     containerNode
   *       .html('<ul id="refinements"></ul><div id="cta-container"></div>');
   *   }
   *
   *   containerNode
   *     .find('#cta-container > a')
   *     .off('click');
   *
   *   containerNode
   *     .find('li > a')
   *     .each(function() { $(this).off('click') });
   *
   *   if (currentRefinementsRenderingOptions.items
   *       && currentRefinementsRenderingOptions.items.length > 0) {
   *     var list = currentRefinementsRenderingOptions.items.map(function(item) {
   *       return '<li>' + item.attribute +
   *          '<ul>' +
   *            item.refinements.map(function (refinement) {
   *              return <a href="' + currentRefinementsRenderingOptions.createURL(refinement) + '" data-attribute="' + item.attribute + '">'
   *                + refinement.label + '</a>'
   *              }).join('') +
   *            '</ul>'
   *        '</li>';
   *     });
   *
   *     currentRefinementsRenderingOptions.find('ul').html(list);
   *   } else {
   *     containerNode.find('#cta-container').html('');
   *     containerNode.find('ul').html('');
   *   }
   * }
   *
   * // connect `renderFn` to CurrentRefinements logic
   * var customCurrentRefinements = instantsearch.connectors.connectCurrentRefinements(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customCurrentRefinements({
   *     containerNode: $('#custom-crv-container'),
   *   })
   * );
   */

  function connectCurrentRefinements(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$2());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (widgetParams.includedAttributes && widgetParams.excludedAttributes) {
        throw new Error(withUsage$2('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
      }

      var includedAttributes = widgetParams.includedAttributes,
          _widgetParams$exclude = widgetParams.excludedAttributes,
          excludedAttributes = _widgetParams$exclude === void 0 ? ['query'] : _widgetParams$exclude,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;
      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              _createURL = _ref.createURL,
              instantSearchInstance = _ref.instantSearchInstance;
          var items = transformItems(getFilteredRefinements({
            results: {},
            state: helper.state,
            helper: helper,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes
          }));
          renderFn({
            items: items,
            refine: function refine(refinement) {
              return clearRefinement(helper, refinement);
            },
            createURL: function createURL(refinement) {
              return _createURL(clearRefinementFromState(helper.state, refinement));
            },
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref2) {
          var results = _ref2.results,
              helper = _ref2.helper,
              state = _ref2.state,
              _createURL2 = _ref2.createURL,
              instantSearchInstance = _ref2.instantSearchInstance;
          var items = transformItems(getFilteredRefinements({
            results: results,
            state: state,
            helper: helper,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes
          }));
          renderFn({
            items: items,
            refine: function refine(refinement) {
              return clearRefinement(helper, refinement);
            },
            createURL: function createURL(refinement) {
              return _createURL2(clearRefinementFromState(helper.state, refinement));
            },
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  function getFilteredRefinements(_ref3) {
    var results = _ref3.results,
        state = _ref3.state,
        helper = _ref3.helper,
        includedAttributes = _ref3.includedAttributes,
        excludedAttributes = _ref3.excludedAttributes;
    var clearsQuery = (includedAttributes || []).indexOf('query') !== -1 || (excludedAttributes || []).indexOf('query') === -1;
    var filterFunction = includedAttributes ? function (item) {
      return includedAttributes.indexOf(item.attributeName) !== -1;
    } : function (item) {
      return excludedAttributes.indexOf(item.attributeName) === -1;
    };
    var items = getRefinements(results, state, clearsQuery).filter(filterFunction).map(normalizeRefinement);
    return groupItemsByRefinements(items, helper);
  }

  function clearRefinementFromState(state, refinement) {
    switch (refinement.type) {
      case 'facet':
        return state.removeFacetRefinement(refinement.attribute, refinement.value);

      case 'disjunctive':
        return state.removeDisjunctiveFacetRefinement(refinement.attribute, refinement.value);

      case 'hierarchical':
        return state.removeHierarchicalFacetRefinement(refinement.attribute);

      case 'exclude':
        return state.removeExcludeRefinement(refinement.attribute, refinement.value);

      case 'numeric':
        return state.removeNumericRefinement(refinement.attribute, refinement.operator, refinement.value);

      case 'tag':
        return state.removeTagRefinement(refinement.value);

      case 'query':
        return state.setQueryParameter('query', '');

      default:
        throw new Error("clearRefinement: type ".concat(refinement.type, " is not handled"));
    }
  }

  function clearRefinement(helper, refinement) {
    helper.setState(clearRefinementFromState(helper.state, refinement)).search();
  }

  function getOperatorSymbol(operator) {
    switch (operator) {
      case '>=':
        return '≥';

      case '<=':
        return '≤';

      default:
        return operator;
    }
  }

  function normalizeRefinement(refinement) {
    var value = refinement.type === 'numeric' ? Number(refinement.name) : refinement.name;
    var label = refinement.operator ? "".concat(getOperatorSymbol(refinement.operator), " ").concat(refinement.name) : refinement.name;
    var normalizedRefinement = {
      attribute: refinement.attributeName,
      type: refinement.type,
      value: value,
      label: label
    };

    if (refinement.operator !== undefined) {
      normalizedRefinement.operator = refinement.operator;
    }

    if (refinement.count !== undefined) {
      normalizedRefinement.count = refinement.count;
    }

    if (refinement.exhaustive !== undefined) {
      normalizedRefinement.exhaustive = refinement.exhaustive;
    }

    return normalizedRefinement;
  }

  function groupItemsByRefinements(items, helper) {
    return items.reduce(function (results, currentItem) {
      return [].concat(_toConsumableArray(results.filter(function (result) {
        return result.attribute !== currentItem.attribute;
      })), [{
        attribute: currentItem.attribute,
        label: currentItem.attribute,
        refinements: items.filter(function (result) {
          return result.attribute === currentItem.attribute;
        }) // We want to keep the order of refinements except the numeric ones.
        .sort(function (a, b) {
          return a.type === 'numeric' ? a.value - b.value : 0;
        }),
        refine: function refine(refinement) {
          return clearRefinement(helper, refinement);
        }
      }]);
    }, []);
  }

  var withUsage$3 = createDocumentationMessageGenerator({
    name: 'hierarchical-menu',
    connector: true
  });
  /**
   * @typedef {Object} HierarchicalMenuItem
   * @property {string} value Value of the menu item.
   * @property {string} label Human-readable value of the menu item.
   * @property {number} count Number of matched results after refinement is applied.
   * @property {isRefined} boolean Indicates if the refinement is applied.
   * @property {Object} [data = undefined] n+1 level of items, same structure HierarchicalMenuItem (default: `undefined`).
   */

  /**
   * @typedef {Object} CustomHierarchicalMenuWidgetOptions
   * @property {string[]} attributes Attributes to use to generate the hierarchy of the menu.
   * @property {string} [separator = '>'] Separator used in the attributes to separate level values.
   * @property {string} [rootPath = null] Prefix path to use if the first level is not the root level.
   * @property {boolean} [showParentLevel=false] Show the siblings of the selected parent levels of the current refined value. This
   * does not impact the root level.
   * @property {number} [limit = 10] Max number of values to display.
   * @property {boolean} [showMore = false] Whether to display the "show more" button.
   * @property {number} [showMoreLimit = 20] Max number of values to display when showing more.
   * @property  {string[]|function} [sortBy = ['name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} HierarchicalMenuRenderingOptions
   * @property {function(item.value): string} createURL Creates an url for the next state for a clicked item.
   * @property {HierarchicalMenuItem[]} items Values to be rendered.
   * @property {function(item.value)} refine Sets the path of the hierarchical filter and triggers a new search.
   * @property {Object} widgetParams All original `CustomHierarchicalMenuWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **HierarchicalMenu** connector provides the logic to build a custom widget
   * that will give the user the ability to explore facets in a tree-like structure.
   *
   * This is commonly used for multi-level categorization of products on e-commerce
   * websites. From a UX point of view, we suggest not displaying more than two
   * levels deep.
   *
   * There's a complete example available on how to write a custom **HierarchicalMenu**:
   *  [hierarchicalMenu.js](https://github.com/algolia/instantsearch.js/blob/develop/storybook/app/jquery/widgets/hierarchicalMenu.js)
   * @type {Connector}
   * @param {function(HierarchicalMenuRenderingOptions)} renderFn Rendering function for the custom **HierarchicalMenu** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomHierarchicalMenuWidgetOptions)} Re-usable widget factory for a custom **HierarchicalMenu** widget.
   */

  function connectHierarchicalMenu(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$3());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attributes = widgetParams.attributes,
          _widgetParams$separat = widgetParams.separator,
          separator = _widgetParams$separat === void 0 ? ' > ' : _widgetParams$separat,
          _widgetParams$rootPat = widgetParams.rootPath,
          rootPath = _widgetParams$rootPat === void 0 ? null : _widgetParams$rootPat,
          _widgetParams$showPar = widgetParams.showParentLevel,
          showParentLevel = _widgetParams$showPar === void 0 ? true : _widgetParams$showPar,
          _widgetParams$limit = widgetParams.limit,
          limit = _widgetParams$limit === void 0 ? 10 : _widgetParams$limit,
          _widgetParams$showMor = widgetParams.showMore,
          showMore = _widgetParams$showMor === void 0 ? false : _widgetParams$showMor,
          _widgetParams$showMor2 = widgetParams.showMoreLimit,
          showMoreLimit = _widgetParams$showMor2 === void 0 ? 20 : _widgetParams$showMor2,
          _widgetParams$sortBy = widgetParams.sortBy,
          sortBy = _widgetParams$sortBy === void 0 ? ['name:asc'] : _widgetParams$sortBy,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;

      if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
        throw new Error(withUsage$3('The `attributes` option expects an array of strings.'));
      }

      if (showMore === true && showMoreLimit <= limit) {
        throw new Error(withUsage$3('The `showMoreLimit` option must be greater than `limit`.'));
      } // we need to provide a hierarchicalFacet name for the search state
      // so that we can always map $hierarchicalFacetName => real attributes
      // we use the first attribute name


      var _attributes = _slicedToArray(attributes, 1),
          hierarchicalFacetName = _attributes[0];

      return {
        isShowingMore: false,
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        toggleShowMore: function toggleShowMore() {},
        cachedToggleShowMore: function cachedToggleShowMore() {
          this.toggleShowMore();
        },
        createToggleShowMore: function createToggleShowMore(renderOptions) {
          var _this = this;

          return function () {
            _this.isShowingMore = !_this.isShowingMore;

            _this.render(renderOptions);
          };
        },
        getLimit: function getLimit() {
          return this.isShowingMore ? showMoreLimit : limit;
        },
        getConfiguration: function getConfiguration(currentConfiguration) {
          if (currentConfiguration.hierarchicalFacets) {
            var isFacetSet = find$1(currentConfiguration.hierarchicalFacets, function (_ref) {
              var name = _ref.name;
              return name === hierarchicalFacetName;
            });

            if (isFacetSet && !(isEqual(isFacetSet.attributes, attributes) && isFacetSet.separator === separator)) {
              _warning(isEqual(isFacetSet.attributes, attributes) && isFacetSet.separator === separator, 'Using Breadcrumb and HierarchicalMenu on the same facet with different options overrides the configuration of the HierarchicalMenu.');
              return {};
            }
          }

          var widgetConfiguration = {
            hierarchicalFacets: [{
              name: hierarchicalFacetName,
              attributes: attributes,
              separator: separator,
              rootPath: rootPath,
              showParentLevel: showParentLevel
            }]
          };
          var currentMaxValuesPerFacet = currentConfiguration.maxValuesPerFacet || 0;
          widgetConfiguration.maxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
          return widgetConfiguration;
        },
        init: function init(_ref2) {
          var helper = _ref2.helper,
              createURL = _ref2.createURL,
              instantSearchInstance = _ref2.instantSearchInstance;
          this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this);

          this._refine = function (facetValue) {
            helper.toggleRefinement(hierarchicalFacetName, facetValue).search();
          }; // Bind createURL to this specific attribute


          function _createURL(facetValue) {
            return createURL(helper.state.toggleRefinement(hierarchicalFacetName, facetValue));
          }

          renderFn({
            items: [],
            createURL: _createURL,
            refine: this._refine,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams,
            isShowingMore: false,
            toggleShowMore: this.cachedToggleShowMore,
            canToggleShowMore: false
          }, true);
        },
        _prepareFacetValues: function _prepareFacetValues(facetValues, state) {
          var _this2 = this;

          return facetValues.slice(0, this.getLimit()).map(function (_ref3) {
            var label = _ref3.name,
                value = _ref3.path,
                subValue = _objectWithoutProperties(_ref3, ["name", "path"]);

            if (Array.isArray(subValue.data)) {
              subValue.data = _this2._prepareFacetValues(subValue.data, state);
            }

            return _objectSpread({}, subValue, {
              label: label,
              value: value
            });
          });
        },
        render: function render(renderOptions) {
          var results = renderOptions.results,
              state = renderOptions.state,
              createURL = renderOptions.createURL,
              instantSearchInstance = renderOptions.instantSearchInstance;
          var facetValues = results.getFacetValues(hierarchicalFacetName, {
            sortBy: sortBy
          }).data || [];
          var items = transformItems(this._prepareFacetValues(facetValues), state); // Bind createURL to this specific attribute

          function _createURL(facetValue) {
            return createURL(state.toggleRefinement(hierarchicalFacetName, facetValue));
          }

          var maxValuesPerFacetConfig = state.getQueryParameter('maxValuesPerFacet');
          var currentLimit = this.getLimit(); // If the limit is the max number of facet retrieved it is impossible to know
          // if the facets are exhaustive. The only moment we are sure it is exhaustive
          // is when it is strictly under the number requested unless we know that another
          // widget has requested more values (maxValuesPerFacet > getLimit()).
          // Because this is used for making the search of facets unable or not, it is important
          // to be conservative here.

          var hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
          this.toggleShowMore = this.createToggleShowMore(renderOptions);
          renderFn({
            items: items,
            refine: this._refine,
            createURL: _createURL,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams,
            isShowingMore: this.isShowingMore,
            toggleShowMore: this.cachedToggleShowMore,
            canToggleShowMore: showMore && (this.isShowingMore || !hasExhaustiveItems)
          }, false);
        },
        dispose: function dispose(_ref4) {
          var state = _ref4.state;
          // unmount widget from DOM
          unmountFn(); // compute nextState for the search

          var nextState = state;

          if (state.isHierarchicalFacetRefined(hierarchicalFacetName)) {
            nextState = state.removeHierarchicalFacetRefinement(hierarchicalFacetName);
          }

          nextState = nextState.removeHierarchicalFacet(hierarchicalFacetName);

          if (nextState.maxValuesPerFacet === limit) {
            nextState.setQueryParameters('maxValuesPerFacet', undefined);
          }

          return nextState;
        },
        getWidgetState: function getWidgetState(uiState, _ref5) {
          var searchParameters = _ref5.searchParameters;
          var path = searchParameters.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);
          if (!path || path.length === 0) return uiState;

          if (uiState.hierarchicalMenu && isEqual(path, uiState.hierarchicalMenu[hierarchicalFacetName])) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            hierarchicalMenu: _objectSpread({}, uiState.hierarchicalMenu, _defineProperty({}, hierarchicalFacetName, path))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
          var uiState = _ref6.uiState;

          if (uiState.hierarchicalMenu && uiState.hierarchicalMenu[hierarchicalFacetName]) {
            return searchParameters.clearRefinements(hierarchicalFacetName).toggleRefinement(hierarchicalFacetName, uiState.hierarchicalMenu[hierarchicalFacetName].join(separator));
          } else {
            return searchParameters;
          }
        }
      };
    };
  }

  var withUsage$4 = createDocumentationMessageGenerator({
    name: 'hits',
    connector: true
  });
  /**
   * @typedef {Object} HitsRenderingOptions
   * @property {Object[]} hits The matched hits from Algolia API.
   * @property {Object} results The complete results response from Algolia API.
   * @property {Object} widgetParams All original widget options forwarded to the `renderFn`.
   */

  /**
   * @typedef {Object} CustomHitsWidgetOptions
   * @property {boolean} [escapeHTML = true] Whether to escape HTML tags from `hits[i]._highlightResult`.
   * @property {function(Object[]):Object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * **Hits** connector provides the logic to create custom widgets that will render the results retrieved from Algolia.
   * @type {Connector}
   * @param {function(HitsRenderingOptions, boolean)} renderFn Rendering function for the custom **Hits** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomHitsWidgetOptions)} Re-usable widget factory for a custom **Hits** widget.
   * @example
   * // custom `renderFn` to render the custom Hits widget
   * function renderFn(HitsRenderingOptions) {
   *   HitsRenderingOptions.widgetParams.containerNode.html(
   *     HitsRenderingOptions.hits.map(function(hit) {
   *       return '<div>' + hit._highlightResult.name.value + '</div>';
   *     })
   *   );
   * }
   *
   * // connect `renderFn` to Hits logic
   * var customHits = instantsearch.connectors.connectHits(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customHits({
   *     containerNode: $('#custom-hits-container'),
   *   })
   * );
   */

  function connectHits(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$4());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _widgetParams$escapeH = widgetParams.escapeHTML,
          escapeHTML = _widgetParams$escapeH === void 0 ? true : _widgetParams$escapeH,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;
      return {
        getConfiguration: function getConfiguration() {
          return escapeHTML ? TAG_PLACEHOLDER : undefined;
        },
        init: function init(_ref) {
          var instantSearchInstance = _ref.instantSearchInstance;
          renderFn({
            hits: [],
            results: undefined,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref2) {
          var results = _ref2.results,
              instantSearchInstance = _ref2.instantSearchInstance;

          if (escapeHTML && results.hits && results.hits.length > 0) {
            results.hits = escapeHits(results.hits);
          }

          results.hits = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
          results.hits = addQueryID(results.hits, results.queryID);
          results.hits = transformItems(results.hits);
          renderFn({
            hits: results.hits,
            results: results,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function (objectID) {
      var hit = find$1(hits, function (h) {
        return h.objectID === objectID;
      });

      if (typeof hit === 'undefined') {
        throw new Error("Could not find objectID \"".concat(objectID, "\" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID."));
      }

      return hit;
    });
  };

  var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = uniq(selectedHits.map(function (hit) {
      return hit.__queryID;
    }));

    if (queryIDs.length > 1) {
      throw new Error('Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.');
    }

    var queryID = queryIDs[0];

    if (typeof queryID !== 'string') {
      throw new Error('Could not infer `queryID`. Ensure InstantSearch is configured with `clickAnalytics: true`');
    }

    return queryID;
  };

  var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function (hit) {
      return hit.__position;
    });
  };

  var inferPayload = function inferPayload(_ref) {
    var method = _ref.method,
        results = _ref.results,
        hits = _ref.hits,
        objectIDs = _ref.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);

    switch (method) {
      case 'clickedObjectIDsAfterSearch':
        {
          var positions = getPositions(selectedHits);
          return {
            index: index,
            queryID: queryID,
            objectIDs: objectIDs,
            positions: positions
          };
        }

      case 'convertedObjectIDsAfterSearch':
        return {
          index: index,
          queryID: queryID,
          objectIDs: objectIDs
        };

      default:
        throw new Error("Unsupported method passed to insights: \"".concat(method, "\"."));
    }
  };

  var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function (method, payload) {
      if (!Array.isArray(payload.objectIDs)) {
        throw new TypeError('Expected `objectIDs` to be an array.');
      }

      var inferredPayload = inferPayload({
        method: method,
        results: results,
        hits: hits,
        objectIDs: payload.objectIDs
      });
      aa(method, _objectSpread({}, inferredPayload, payload));
    };
  };

  function withInsights(connector) {
    var wrapRenderFn = function wrapRenderFn(renderFn) {
      return function (renderOptions, isFirstRender) {
        var results = renderOptions.results,
            hits = renderOptions.hits,
            instantSearchInstance = renderOptions.instantSearchInstance;

        if (results && hits && instantSearchInstance && instantSearchInstance.insightsClient
        /* providing the insightsClient is optional */
        ) {
            var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
            return renderFn(_objectSpread({}, renderOptions, {
              insights: insights
            }), isFirstRender);
          }

        return renderFn(renderOptions, isFirstRender);
      };
    };

    return function (renderFn, unmountFn) {
      return connector(wrapRenderFn(renderFn), unmountFn);
    };
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
  60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
  exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
  exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
  exports.isSuspense=function(a){return t(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has$3 = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var VNode = function VNode() {};

  var options = {};

  var stack = [];

  var EMPTY_CHILDREN = [];

  function h(nodeName, attributes) {
  	var children = EMPTY_CHILDREN,
  	    lastSimple,
  	    child,
  	    simple,
  	    i;
  	for (i = arguments.length; i-- > 2;) {
  		stack.push(arguments[i]);
  	}
  	if (attributes && attributes.children != null) {
  		if (!stack.length) stack.push(attributes.children);
  		delete attributes.children;
  	}
  	while (stack.length) {
  		if ((child = stack.pop()) && child.pop !== undefined) {
  			for (i = child.length; i--;) {
  				stack.push(child[i]);
  			}
  		} else {
  			if (typeof child === 'boolean') child = null;

  			if (simple = typeof nodeName !== 'function') {
  				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
  			}

  			if (simple && lastSimple) {
  				children[children.length - 1] += child;
  			} else if (children === EMPTY_CHILDREN) {
  				children = [child];
  			} else {
  				children.push(child);
  			}

  			lastSimple = simple;
  		}
  	}

  	var p = new VNode();
  	p.nodeName = nodeName;
  	p.children = children;
  	p.attributes = attributes == null ? undefined : attributes;
  	p.key = attributes == null ? undefined : attributes.key;

  	if (options.vnode !== undefined) options.vnode(p);

  	return p;
  }

  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    }return obj;
  }

  function applyRef(ref, value) {
    if (ref != null) {
      if (typeof ref == 'function') ref(value);else ref.current = value;
    }
  }

  var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

  function cloneElement(vnode, props) {
    return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
  }

  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

  var items = [];

  function enqueueRender(component) {
  	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
  		(defer)(rerender);
  	}
  }

  function rerender() {
  	var p;
  	while (p = items.pop()) {
  		if (p._dirty) renderComponent(p);
  	}
  }

  function isSameNodeType(node, vnode, hydrating) {
  	if (typeof vnode === 'string' || typeof vnode === 'number') {
  		return node.splitText !== undefined;
  	}
  	if (typeof vnode.nodeName === 'string') {
  		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  	}
  	return hydrating || node._componentConstructor === vnode.nodeName;
  }

  function isNamedNode(node, nodeName) {
  	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }

  function getNodeProps(vnode) {
  	var props = extend({}, vnode.attributes);
  	props.children = vnode.children;

  	var defaultProps = vnode.nodeName.defaultProps;
  	if (defaultProps !== undefined) {
  		for (var i in defaultProps) {
  			if (props[i] === undefined) {
  				props[i] = defaultProps[i];
  			}
  		}
  	}

  	return props;
  }

  function createNode(nodeName, isSvg) {
  	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  	node.normalizedNodeName = nodeName;
  	return node;
  }

  function removeNode(node) {
  	var parentNode = node.parentNode;
  	if (parentNode) parentNode.removeChild(node);
  }

  function setAccessor(node, name, old, value, isSvg) {
  	if (name === 'className') name = 'class';

  	if (name === 'key') ; else if (name === 'ref') {
  		applyRef(old, null);
  		applyRef(value, node);
  	} else if (name === 'class' && !isSvg) {
  		node.className = value || '';
  	} else if (name === 'style') {
  		if (!value || typeof value === 'string' || typeof old === 'string') {
  			node.style.cssText = value || '';
  		}
  		if (value && typeof value === 'object') {
  			if (typeof old !== 'string') {
  				for (var i in old) {
  					if (!(i in value)) node.style[i] = '';
  				}
  			}
  			for (var i in value) {
  				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
  			}
  		}
  	} else if (name === 'dangerouslySetInnerHTML') {
  		if (value) node.innerHTML = value.__html || '';
  	} else if (name[0] == 'o' && name[1] == 'n') {
  		var useCapture = name !== (name = name.replace(/Capture$/, ''));
  		name = name.toLowerCase().substring(2);
  		if (value) {
  			if (!old) node.addEventListener(name, eventProxy, useCapture);
  		} else {
  			node.removeEventListener(name, eventProxy, useCapture);
  		}
  		(node._listeners || (node._listeners = {}))[name] = value;
  	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
  		try {
  			node[name] = value == null ? '' : value;
  		} catch (e) {}
  		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  	} else {
  		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

  		if (value == null || value === false) {
  			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
  		} else if (typeof value !== 'function') {
  			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
  		}
  	}
  }

  function eventProxy(e) {
  	return this._listeners[e.type](options.event && options.event(e) || e);
  }

  var mounts = [];

  var diffLevel = 0;

  var isSvgMode = false;

  var hydrating = false;

  function flushMounts() {
  	var c;
  	while (c = mounts.shift()) {
  		if (c.componentDidMount) c.componentDidMount();
  	}
  }

  function diff(dom, vnode, context, mountAll, parent, componentRoot) {
  	if (!diffLevel++) {
  		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

  		hydrating = dom != null && !('__preactattr_' in dom);
  	}

  	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

  	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  	if (! --diffLevel) {
  		hydrating = false;

  		if (!componentRoot) flushMounts();
  	}

  	return ret;
  }

  function idiff(dom, vnode, context, mountAll, componentRoot) {
  	var out = dom,
  	    prevSvgMode = isSvgMode;

  	if (vnode == null || typeof vnode === 'boolean') vnode = '';

  	if (typeof vnode === 'string' || typeof vnode === 'number') {
  		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
  			if (dom.nodeValue != vnode) {
  				dom.nodeValue = vnode;
  			}
  		} else {
  			out = document.createTextNode(vnode);
  			if (dom) {
  				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
  				recollectNodeTree(dom, true);
  			}
  		}

  		out['__preactattr_'] = true;

  		return out;
  	}

  	var vnodeName = vnode.nodeName;
  	if (typeof vnodeName === 'function') {
  		return buildComponentFromVNode(dom, vnode, context, mountAll);
  	}

  	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

  	vnodeName = String(vnodeName);
  	if (!dom || !isNamedNode(dom, vnodeName)) {
  		out = createNode(vnodeName, isSvgMode);

  		if (dom) {
  			while (dom.firstChild) {
  				out.appendChild(dom.firstChild);
  			}
  			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

  			recollectNodeTree(dom, true);
  		}
  	}

  	var fc = out.firstChild,
  	    props = out['__preactattr_'],
  	    vchildren = vnode.children;

  	if (props == null) {
  		props = out['__preactattr_'] = {};
  		for (var a = out.attributes, i = a.length; i--;) {
  			props[a[i].name] = a[i].value;
  		}
  	}

  	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
  		if (fc.nodeValue != vchildren[0]) {
  			fc.nodeValue = vchildren[0];
  		}
  	} else if (vchildren && vchildren.length || fc != null) {
  			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
  		}

  	diffAttributes(out, vnode.attributes, props);

  	isSvgMode = prevSvgMode;

  	return out;
  }

  function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
  	var originalChildren = dom.childNodes,
  	    children = [],
  	    keyed = {},
  	    keyedLen = 0,
  	    min = 0,
  	    len = originalChildren.length,
  	    childrenLen = 0,
  	    vlen = vchildren ? vchildren.length : 0,
  	    j,
  	    c,
  	    f,
  	    vchild,
  	    child;

  	if (len !== 0) {
  		for (var i = 0; i < len; i++) {
  			var _child = originalChildren[i],
  			    props = _child['__preactattr_'],
  			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
  			if (key != null) {
  				keyedLen++;
  				keyed[key] = _child;
  			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
  				children[childrenLen++] = _child;
  			}
  		}
  	}

  	if (vlen !== 0) {
  		for (var i = 0; i < vlen; i++) {
  			vchild = vchildren[i];
  			child = null;

  			var key = vchild.key;
  			if (key != null) {
  				if (keyedLen && keyed[key] !== undefined) {
  					child = keyed[key];
  					keyed[key] = undefined;
  					keyedLen--;
  				}
  			} else if (min < childrenLen) {
  					for (j = min; j < childrenLen; j++) {
  						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
  							child = c;
  							children[j] = undefined;
  							if (j === childrenLen - 1) childrenLen--;
  							if (j === min) min++;
  							break;
  						}
  					}
  				}

  			child = idiff(child, vchild, context, mountAll);

  			f = originalChildren[i];
  			if (child && child !== dom && child !== f) {
  				if (f == null) {
  					dom.appendChild(child);
  				} else if (child === f.nextSibling) {
  					removeNode(f);
  				} else {
  					dom.insertBefore(child, f);
  				}
  			}
  		}
  	}

  	if (keyedLen) {
  		for (var i in keyed) {
  			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
  		}
  	}

  	while (min <= childrenLen) {
  		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  	}
  }

  function recollectNodeTree(node, unmountOnly) {
  	var component = node._component;
  	if (component) {
  		unmountComponent(component);
  	} else {
  		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

  		if (unmountOnly === false || node['__preactattr_'] == null) {
  			removeNode(node);
  		}

  		removeChildren(node);
  	}
  }

  function removeChildren(node) {
  	node = node.lastChild;
  	while (node) {
  		var next = node.previousSibling;
  		recollectNodeTree(node, true);
  		node = next;
  	}
  }

  function diffAttributes(dom, attrs, old) {
  	var name;

  	for (name in old) {
  		if (!(attrs && attrs[name] != null) && old[name] != null) {
  			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
  		}
  	}

  	for (name in attrs) {
  		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
  			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
  		}
  	}
  }

  var recyclerComponents = [];

  function createComponent(Ctor, props, context) {
  	var inst,
  	    i = recyclerComponents.length;

  	if (Ctor.prototype && Ctor.prototype.render) {
  		inst = new Ctor(props, context);
  		Component.call(inst, props, context);
  	} else {
  		inst = new Component(props, context);
  		inst.constructor = Ctor;
  		inst.render = doRender;
  	}

  	while (i--) {
  		if (recyclerComponents[i].constructor === Ctor) {
  			inst.nextBase = recyclerComponents[i].nextBase;
  			recyclerComponents.splice(i, 1);
  			return inst;
  		}
  	}

  	return inst;
  }

  function doRender(props, state, context) {
  	return this.constructor(props, context);
  }

  function setComponentProps(component, props, renderMode, context, mountAll) {
  	if (component._disable) return;
  	component._disable = true;

  	component.__ref = props.ref;
  	component.__key = props.key;
  	delete props.ref;
  	delete props.key;

  	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
  		if (!component.base || mountAll) {
  			if (component.componentWillMount) component.componentWillMount();
  		} else if (component.componentWillReceiveProps) {
  			component.componentWillReceiveProps(props, context);
  		}
  	}

  	if (context && context !== component.context) {
  		if (!component.prevContext) component.prevContext = component.context;
  		component.context = context;
  	}

  	if (!component.prevProps) component.prevProps = component.props;
  	component.props = props;

  	component._disable = false;

  	if (renderMode !== 0) {
  		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
  			renderComponent(component, 1, mountAll);
  		} else {
  			enqueueRender(component);
  		}
  	}

  	applyRef(component.__ref, component);
  }

  function renderComponent(component, renderMode, mountAll, isChild) {
  	if (component._disable) return;

  	var props = component.props,
  	    state = component.state,
  	    context = component.context,
  	    previousProps = component.prevProps || props,
  	    previousState = component.prevState || state,
  	    previousContext = component.prevContext || context,
  	    isUpdate = component.base,
  	    nextBase = component.nextBase,
  	    initialBase = isUpdate || nextBase,
  	    initialChildComponent = component._component,
  	    skip = false,
  	    snapshot = previousContext,
  	    rendered,
  	    inst,
  	    cbase;

  	if (component.constructor.getDerivedStateFromProps) {
  		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
  		component.state = state;
  	}

  	if (isUpdate) {
  		component.props = previousProps;
  		component.state = previousState;
  		component.context = previousContext;
  		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
  			skip = true;
  		} else if (component.componentWillUpdate) {
  			component.componentWillUpdate(props, state, context);
  		}
  		component.props = props;
  		component.state = state;
  		component.context = context;
  	}

  	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
  	component._dirty = false;

  	if (!skip) {
  		rendered = component.render(props, state, context);

  		if (component.getChildContext) {
  			context = extend(extend({}, context), component.getChildContext());
  		}

  		if (isUpdate && component.getSnapshotBeforeUpdate) {
  			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
  		}

  		var childComponent = rendered && rendered.nodeName,
  		    toUnmount,
  		    base;

  		if (typeof childComponent === 'function') {

  			var childProps = getNodeProps(rendered);
  			inst = initialChildComponent;

  			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
  				setComponentProps(inst, childProps, 1, context, false);
  			} else {
  				toUnmount = inst;

  				component._component = inst = createComponent(childComponent, childProps, context);
  				inst.nextBase = inst.nextBase || nextBase;
  				inst._parentComponent = component;
  				setComponentProps(inst, childProps, 0, context, false);
  				renderComponent(inst, 1, mountAll, true);
  			}

  			base = inst.base;
  		} else {
  			cbase = initialBase;

  			toUnmount = initialChildComponent;
  			if (toUnmount) {
  				cbase = component._component = null;
  			}

  			if (initialBase || renderMode === 1) {
  				if (cbase) cbase._component = null;
  				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
  			}
  		}

  		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
  			var baseParent = initialBase.parentNode;
  			if (baseParent && base !== baseParent) {
  				baseParent.replaceChild(base, initialBase);

  				if (!toUnmount) {
  					initialBase._component = null;
  					recollectNodeTree(initialBase, false);
  				}
  			}
  		}

  		if (toUnmount) {
  			unmountComponent(toUnmount);
  		}

  		component.base = base;
  		if (base && !isChild) {
  			var componentRef = component,
  			    t = component;
  			while (t = t._parentComponent) {
  				(componentRef = t).base = base;
  			}
  			base._component = componentRef;
  			base._componentConstructor = componentRef.constructor;
  		}
  	}

  	if (!isUpdate || mountAll) {
  		mounts.push(component);
  	} else if (!skip) {

  		if (component.componentDidUpdate) {
  			component.componentDidUpdate(previousProps, previousState, snapshot);
  		}
  	}

  	while (component._renderCallbacks.length) {
  		component._renderCallbacks.pop().call(component);
  	}if (!diffLevel && !isChild) flushMounts();
  }

  function buildComponentFromVNode(dom, vnode, context, mountAll) {
  	var c = dom && dom._component,
  	    originalComponent = c,
  	    oldDom = dom,
  	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
  	    isOwner = isDirectOwner,
  	    props = getNodeProps(vnode);
  	while (c && !isOwner && (c = c._parentComponent)) {
  		isOwner = c.constructor === vnode.nodeName;
  	}

  	if (c && isOwner && (!mountAll || c._component)) {
  		setComponentProps(c, props, 3, context, mountAll);
  		dom = c.base;
  	} else {
  		if (originalComponent && !isDirectOwner) {
  			unmountComponent(originalComponent);
  			dom = oldDom = null;
  		}

  		c = createComponent(vnode.nodeName, props, context);
  		if (dom && !c.nextBase) {
  			c.nextBase = dom;

  			oldDom = null;
  		}
  		setComponentProps(c, props, 1, context, mountAll);
  		dom = c.base;

  		if (oldDom && dom !== oldDom) {
  			oldDom._component = null;
  			recollectNodeTree(oldDom, false);
  		}
  	}

  	return dom;
  }

  function unmountComponent(component) {

  	var base = component.base;

  	component._disable = true;

  	if (component.componentWillUnmount) component.componentWillUnmount();

  	component.base = null;

  	var inner = component._component;
  	if (inner) {
  		unmountComponent(inner);
  	} else if (base) {
  		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

  		component.nextBase = base;

  		removeNode(base);
  		recyclerComponents.push(component);

  		removeChildren(base);
  	}

  	applyRef(component.__ref, null);
  }

  function Component(props, context) {
  	this._dirty = true;

  	this.context = context;

  	this.props = props;

  	this.state = this.state || {};

  	this._renderCallbacks = [];
  }

  extend(Component.prototype, {
  	setState: function setState(state, callback) {
  		if (!this.prevState) this.prevState = this.state;
  		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
  		if (callback) this._renderCallbacks.push(callback);
  		enqueueRender(this);
  	},
  	forceUpdate: function forceUpdate(callback) {
  		if (callback) this._renderCallbacks.push(callback);
  		renderComponent(this, 2);
  	},
  	render: function render() {}
  });

  function render(vnode, parent, merge) {
    return diff(merge, vnode, {}, false, parent, false);
  }

  function createRef() {
  	return {};
  }

  var version$2 = '15.1.0'; // trick libraries to think we are react

  var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

  var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

  var COMPONENT_WRAPPER_KEY = (typeof Symbol!=='undefined' && Symbol.for) ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

  // don't autobind these methods since they already have guaranteed context.
  var AUTOBIND_BLACKLIST = {
  	constructor: 1,
  	render: 1,
  	shouldComponentUpdate: 1,
  	componentWillReceiveProps: 1,
  	componentWillUpdate: 1,
  	componentDidUpdate: 1,
  	componentWillMount: 1,
  	componentDidMount: 1,
  	componentWillUnmount: 1,
  	componentDidUnmount: 1
  };


  var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;


  var BYPASS_HOOK = {};

  /*global process*/
  var DEV = false;
  try {
  	DEV = "production"!=='production';
  }
  catch (e) {}

  // a component that renders nothing. Used to replace components for unmountComponentAtNode.
  function EmptyComponent() { return null; }



  // make react think we're react.
  var VNode$1 = h('a', null).constructor;
  VNode$1.prototype.$$typeof = REACT_ELEMENT_TYPE;
  VNode$1.prototype.preactCompatUpgraded = false;
  VNode$1.prototype.preactCompatNormalized = false;

  Object.defineProperty(VNode$1.prototype, 'type', {
  	get: function() { return this.nodeName; },
  	set: function(v) { this.nodeName = v; },
  	configurable:true
  });

  Object.defineProperty(VNode$1.prototype, 'props', {
  	get: function() { return this.attributes; },
  	set: function(v) { this.attributes = v; },
  	configurable:true
  });



  var oldEventHook = options.event;
  options.event = function (e) {
  	if (oldEventHook) { e = oldEventHook(e); }
  	e.persist = Object;
  	e.nativeEvent = e;
  	return e;
  };


  var oldVnodeHook = options.vnode;
  options.vnode = function (vnode) {
  	if (!vnode.preactCompatUpgraded) {
  		vnode.preactCompatUpgraded = true;

  		var tag = vnode.nodeName,
  			attrs = vnode.attributes = vnode.attributes==null ? {} : extend$1({}, vnode.attributes);

  		if (typeof tag==='function') {
  			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
  				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
  				if (vnode.children) { attrs.children = vnode.children; }

  				if (!vnode.preactCompatNormalized) {
  					normalizeVNode(vnode);
  				}
  				handleComponentVNode(vnode);
  			}
  		}
  		else {
  			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
  			if (vnode.children) { attrs.children = vnode.children; }

  			if (attrs.defaultValue) {
  				if (!attrs.value && attrs.value!==0) {
  					attrs.value = attrs.defaultValue;
  				}
  				delete attrs.defaultValue;
  			}

  			handleElementVNode(vnode, attrs);
  		}
  	}

  	if (oldVnodeHook) { oldVnodeHook(vnode); }
  };

  function handleComponentVNode(vnode) {
  	var tag = vnode.nodeName,
  		a = vnode.attributes;

  	vnode.attributes = {};
  	if (tag.defaultProps) { extend$1(vnode.attributes, tag.defaultProps); }
  	if (a) { extend$1(vnode.attributes, a); }
  }

  function handleElementVNode(vnode, a) {
  	var shouldSanitize, attrs, i;
  	if (a) {
  		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
  		if (shouldSanitize) {
  			attrs = vnode.attributes = {};
  			for (i in a) {
  				if (a.hasOwnProperty(i)) {
  					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
  				}
  			}
  		}
  	}
  }



  // proxy render() since React returns a Component reference.
  function render$1(vnode, parent, callback) {
  	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

  	// ignore impossible previous renders
  	if (prev && prev.parentNode!==parent) { prev = null; }

  	// default to first Element child
  	if (!prev && parent) { prev = parent.firstElementChild; }

  	// remove unaffected siblings
  	for (var i=parent.childNodes.length; i--; ) {
  		if (parent.childNodes[i]!==prev) {
  			parent.removeChild(parent.childNodes[i]);
  		}
  	}

  	var out = render(vnode, parent, prev);
  	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
  	if (typeof callback==='function') { callback(); }
  	return out && out._component || out;
  }


  var ContextProvider = function () {};

  ContextProvider.prototype.getChildContext = function () {
  	return this.props.context;
  };
  ContextProvider.prototype.render = function (props) {
  	return props.children[0];
  };

  function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
  	var wrap = h(ContextProvider, { context: parentComponent.context }, vnode);
  	var renderContainer = render$1(wrap, container);
  	var component = renderContainer._component || renderContainer.base;
  	if (callback) { callback.call(component, renderContainer); }
  	return component;
  }

  function Portal(props) {
  	renderSubtreeIntoContainer(this, props.vnode, props.container);
  }

  function createPortal(vnode, container) {
  	return h(Portal, { vnode: vnode, container: container });
  }


  function unmountComponentAtNode(container) {
  	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
  	if (existing && existing.parentNode===container) {
  		render(h(EmptyComponent), container, existing);
  		return true;
  	}
  	return false;
  }



  var ARR = [];

  // This API is completely unnecessary for Preact, so it's basically passthrough.
  var Children = {
  	map: function(children, fn, ctx) {
  		if (children == null) { return null; }
  		children = Children.toArray(children);
  		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
  		return children.map(fn);
  	},
  	forEach: function(children, fn, ctx) {
  		if (children == null) { return null; }
  		children = Children.toArray(children);
  		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
  		children.forEach(fn);
  	},
  	count: function(children) {
  		return children && children.length || 0;
  	},
  	only: function(children) {
  		children = Children.toArray(children);
  		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
  		return children[0];
  	},
  	toArray: function(children) {
  		if (children == null) { return []; }
  		return ARR.concat(children);
  	}
  };


  /** Track current render() component for ref assignment */
  var currentComponent;


  function createFactory(type) {
  	return createElement.bind(null, type);
  }


  var DOM = {};
  for (var i=ELEMENTS.length; i--; ) {
  	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
  }

  function upgradeToVNodes(arr, offset) {
  	for (var i=offset || 0; i<arr.length; i++) {
  		var obj = arr[i];
  		if (Array.isArray(obj)) {
  			upgradeToVNodes(obj);
  		}
  		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
  			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
  		}
  	}
  }

  function isStatelessComponent(c) {
  	return typeof c==='function' && !(c.prototype && c.prototype.render);
  }


  // wraps stateless functional components in a PropTypes validator
  function wrapStatelessComponent(WrappedComponent) {
  	return createClass({
  		displayName: WrappedComponent.displayName || WrappedComponent.name,
  		render: function() {
  			return WrappedComponent(this.props, this.context);
  		}
  	});
  }


  function statelessComponentHook(Ctor) {
  	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
  	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

  	Wrapped = wrapStatelessComponent(Ctor);

  	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
  	Wrapped.displayName = Ctor.displayName;
  	Wrapped.propTypes = Ctor.propTypes;
  	Wrapped.defaultProps = Ctor.defaultProps;

  	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

  	return Wrapped;
  }


  function createElement() {
  	var args = [], len = arguments.length;
  	while ( len-- ) args[ len ] = arguments[ len ];

  	upgradeToVNodes(args, 2);
  	return normalizeVNode(h.apply(void 0, args));
  }


  function normalizeVNode(vnode) {
  	vnode.preactCompatNormalized = true;

  	applyClassName(vnode);

  	if (isStatelessComponent(vnode.nodeName)) {
  		vnode.nodeName = statelessComponentHook(vnode.nodeName);
  	}

  	var ref = vnode.attributes.ref,
  		type = ref && typeof ref;
  	if (currentComponent && (type==='string' || type==='number')) {
  		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
  	}

  	applyEventNormalization(vnode);

  	return vnode;
  }


  function cloneElement$1(element, props) {
  	var children = [], len = arguments.length - 2;
  	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

  	if (!isValidElement(element)) { return element; }
  	var elementProps = element.attributes || element.props;
  	var node = h(
  		element.nodeName || element.type,
  		extend$1({}, elementProps),
  		element.children || elementProps && elementProps.children
  	);
  	// Only provide the 3rd argument if needed.
  	// Arguments 3+ overwrite element.children in preactCloneElement
  	var cloneArgs = [node, props];
  	if (children && children.length) {
  		cloneArgs.push(children);
  	}
  	else if (props && props.children) {
  		cloneArgs.push(props.children);
  	}
  	return normalizeVNode(cloneElement.apply(void 0, cloneArgs));
  }


  function isValidElement(element) {
  	return element && ((element instanceof VNode$1) || element.$$typeof===REACT_ELEMENT_TYPE);
  }


  function createStringRefProxy(name, component) {
  	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
  		if (component && component.refs) {
  			component.refs[name] = resolved;
  			if (resolved===null) {
  				delete component._refProxies[name];
  				component = null;
  			}
  		}
  	});
  }


  function applyEventNormalization(ref) {
  	var nodeName = ref.nodeName;
  	var attributes = ref.attributes;

  	if (!attributes || typeof nodeName!=='string') { return; }
  	var props = {};
  	for (var i in attributes) {
  		props[i.toLowerCase()] = i;
  	}
  	if (props.ondoubleclick) {
  		attributes.ondblclick = attributes[props.ondoubleclick];
  		delete attributes[props.ondoubleclick];
  	}
  	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
  	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
  		var normalized = props.oninput || 'oninput';
  		if (!attributes[normalized]) {
  			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
  			delete attributes[props.onchange];
  		}
  	}
  }


  function applyClassName(vnode) {
  	var a = vnode.attributes || (vnode.attributes = {});
  	classNameDescriptor.enumerable = 'className' in a;
  	if (a.className) { a.class = a.className; }
  	Object.defineProperty(a, 'className', classNameDescriptor);
  }


  var classNameDescriptor = {
  	configurable: true,
  	get: function() { return this.class; },
  	set: function(v) { this.class = v; }
  };

  function extend$1(base, props) {
  	var arguments$1 = arguments;

  	for (var i=1, obj = (void 0); i<arguments.length; i++) {
  		if ((obj = arguments$1[i])) {
  			for (var key in obj) {
  				if (obj.hasOwnProperty(key)) {
  					base[key] = obj[key];
  				}
  			}
  		}
  	}
  	return base;
  }


  function shallowDiffers(a, b) {
  	for (var i in a) { if (!(i in b)) { return true; } }
  	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
  	return false;
  }


  function findDOMNode(component) {
  	return component && (component.base || component.nodeType === 1 && component) || null;
  }


  function F(){}

  function createClass(obj) {
  	function cl(props, context) {
  		bindAll(this);
  		Component$1.call(this, props, context, BYPASS_HOOK);
  		newComponentHook.call(this, props, context);
  	}

  	obj = extend$1({ constructor: cl }, obj);

  	// We need to apply mixins here so that getDefaultProps is correctly mixed
  	if (obj.mixins) {
  		applyMixins(obj, collateMixins(obj.mixins));
  	}
  	if (obj.statics) {
  		extend$1(cl, obj.statics);
  	}
  	if (obj.propTypes) {
  		cl.propTypes = obj.propTypes;
  	}
  	if (obj.defaultProps) {
  		cl.defaultProps = obj.defaultProps;
  	}
  	if (obj.getDefaultProps) {
  		cl.defaultProps = obj.getDefaultProps.call(cl);
  	}

  	F.prototype = Component$1.prototype;
  	cl.prototype = extend$1(new F(), obj);

  	cl.displayName = obj.displayName || 'Component';

  	return cl;
  }


  // Flatten an Array of mixins to a map of method name to mixin implementations
  function collateMixins(mixins) {
  	var keyed = {};
  	for (var i=0; i<mixins.length; i++) {
  		var mixin = mixins[i];
  		for (var key in mixin) {
  			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
  				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
  			}
  		}
  	}
  	return keyed;
  }


  // apply a mapping of Arrays of mixin methods to a component prototype
  function applyMixins(proto, mixins) {
  	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
  		proto[key] = multihook(
  			mixins[key].concat(proto[key] || ARR),
  			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
  		);
  	} }
  }


  function bindAll(ctx) {
  	for (var i in ctx) {
  		var v = ctx[i];
  		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
  			(ctx[i] = v.bind(ctx)).__bound = true;
  		}
  	}
  }


  function callMethod(ctx, m, args) {
  	if (typeof m==='string') {
  		m = ctx.constructor.prototype[m];
  	}
  	if (typeof m==='function') {
  		return m.apply(ctx, args);
  	}
  }

  function multihook(hooks, skipDuplicates) {
  	return function() {
  		var arguments$1 = arguments;

  		var ret;
  		for (var i=0; i<hooks.length; i++) {
  			var r = callMethod(this, hooks[i], arguments$1);

  			if (skipDuplicates && r!=null) {
  				if (!ret) { ret = {}; }
  				for (var key in r) { if (r.hasOwnProperty(key)) {
  					ret[key] = r[key];
  				} }
  			}
  			else if (typeof r!=='undefined') { ret = r; }
  		}
  		return ret;
  	};
  }


  function newComponentHook(props, context) {
  	propsHook.call(this, props, context);
  	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
  	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
  }


  function propsHook(props, context) {
  	if (!props) { return; }

  	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
  	var c = props.children;
  	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode$1)) {
  		props.children = c[0];

  		// but its totally still going to be an Array.
  		if (props.children && typeof props.children==='object') {
  			props.children.length = 1;
  			props.children[0] = props.children;
  		}
  	}

  	// add proptype checking
  	if (DEV) {
  		var ctor = typeof this==='function' ? this : this.constructor,
  			propTypes$1 = this.propTypes || ctor.propTypes;
  		var displayName = this.displayName || ctor.name;

  		if (propTypes$1) {
  			propTypes.checkPropTypes(propTypes$1, props, 'prop', displayName);
  		}
  	}
  }


  function beforeRender(props) {
  	currentComponent = this;
  }

  function afterRender() {
  	if (currentComponent===this) {
  		currentComponent = null;
  	}
  }



  function Component$1(props, context, opts) {
  	Component.call(this, props, context);
  	this.state = this.getInitialState ? this.getInitialState() : {};
  	this.refs = {};
  	this._refProxies = {};
  	if (opts!==BYPASS_HOOK) {
  		newComponentHook.call(this, props, context);
  	}
  }
  extend$1(Component$1.prototype = new Component(), {
  	constructor: Component$1,

  	isReactComponent: {},

  	replaceState: function(state, callback) {
  		this.setState(state, callback);
  		for (var i in this.state) {
  			if (!(i in state)) {
  				delete this.state[i];
  			}
  		}
  	},

  	getDOMNode: function() {
  		return this.base;
  	},

  	isMounted: function() {
  		return !!this.base;
  	}
  });



  function PureComponent(props, context) {
  	Component$1.call(this, props, context);
  }
  F.prototype = Component$1.prototype;
  PureComponent.prototype = new F();
  PureComponent.prototype.isPureReactComponent = true;
  PureComponent.prototype.shouldComponentUpdate = function(props, state) {
  	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
  };

  function unstable_batchedUpdates(callback) {
  	callback();
  }

  var index = {
  	version: version$2,
  	DOM: DOM,
  	PropTypes: propTypes,
  	Children: Children,
  	render: render$1,
  	hydrate: render$1,
  	createClass: createClass,
  	createPortal: createPortal,
  	createFactory: createFactory,
  	createElement: createElement,
  	cloneElement: cloneElement$1,
  	createRef: createRef,
  	isValidElement: isValidElement,
  	findDOMNode: findDOMNode,
  	unmountComponentAtNode: unmountComponentAtNode,
  	Component: Component$1,
  	PureComponent: PureComponent,
  	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
  	unstable_batchedUpdates: unstable_batchedUpdates,
  	__spread: extend$1
  };

  var withInsightsListener = (function (BaseComponent) {
    function WithInsightsListener(props) {
      var handleClick = function handleClick(event) {
        if (!hasDataAttributes(event.target)) {
          return;
        }

        if (!props.insights) {
          throw new Error('The `insightsClient` option has not been provided to `instantsearch`.');
        }

        var _readDataAttributes = readDataAttributes(event.target),
            method = _readDataAttributes.method,
            payload = _readDataAttributes.payload;

        props.insights(method, payload);
      };

      return index.createElement("div", {
        onClick: handleClick
      }, index.createElement(BaseComponent, props));
    }

    return WithInsightsListener;
  });

  var connectHitsWithInsights = withInsights(connectHits);

  var withUsage$5 = createDocumentationMessageGenerator({
    name: 'hits-per-page',
    connector: true
  });
  /**
   * @typedef {Object} HitsPerPageRenderingOptionsItem
   * @property {number} value Number of hits to display per page.
   * @property {string} label Label to display in the option.
   * @property {boolean} isRefined Indicates if it's the current refined value.
   */

  /**
   * @typedef {Object} HitsPerPageWidgetOptionsItem
   * @property {number} value Number of hits to display per page.
   * @property {string} label Label to display in the option.
   * @property {boolean} default The default hits per page on first search.
   */

  /**
   * @typedef {Object} HitsPerPageRenderingOptions
   * @property {HitsPerPageRenderingOptionsItem[]} items Array of objects defining the different values and labels.
   * @property {function(item.value)} createURL Creates the URL for a single item name in the list.
   * @property {function(number)} refine Sets the number of hits per page and trigger a search.
   * @property {boolean} hasNoResults `true` if the last search contains no result.
   * @property {Object} widgetParams Original `HitsPerPageWidgetOptions` forwarded to `renderFn`.
   */

  /**
   * @typedef {Object} HitsPerPageWidgetOptions
   * @property {HitsPerPageWidgetOptionsItem[]} items Array of objects defining the different values and labels.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * **HitsPerPage** connector provides the logic to create custom widget that will
   * allow a user to choose to display more or less results from Algolia.
   *
   * This connector provides a `refine()` function to change the hits per page configuration and trigger a new search.
   * @type {Connector}
   * @param {function(HitsPerPageRenderingOptions, boolean)} renderFn Rendering function for the custom **HitsPerPage** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(HitsPerPageWidgetOptions)} Re-usable widget factory for a custom **HitsPerPage** widget.
   * @example
   * // custom `renderFn` to render the custom HitsPerPage widget
   * function renderFn(HitsPerPageRenderingOptions, isFirstRendering) {
   *   var containerNode = HitsPerPageRenderingOptions.widgetParams.containerNode
   *   var items = HitsPerPageRenderingOptions.items
   *   var refine = HitsPerPageRenderingOptions.refine
   *
   *   if (isFirstRendering) {
   *     var markup = '<select></select>';
   *     containerNode.append(markup);
   *   }
   *
   *   const itemsHTML = items.map(({value, label, isRefined}) => `
   *     <option
   *       value="${value}"
   *       ${isRefined ? 'selected' : ''}
   *     >
   *       ${label}
   *     </option>
   *   `);
   *
   *   containerNode
   *     .find('select')
   *     .html(itemsHTML);
   *
   *   containerNode
   *     .find('select')
   *     .off('change')
   *     .on('change', e => { refine(e.target.value); });
   * }
   *
   * // connect `renderFn` to HitsPerPage logic
   * var customHitsPerPage = instantsearch.connectors.connectHitsPerPage(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customHitsPerPage({
   *     containerNode: $('#custom-hits-per-page-container'),
   *     items: [
   *       {value: 6, label: '6 per page', default: true},
   *       {value: 12, label: '12 per page'},
   *       {value: 24, label: '24 per page'},
   *     ],
   *   })
   * );
   */

  function connectHitsPerPage(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$5());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var userItems = widgetParams.items,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;
      var items = userItems;

      if (!Array.isArray(items)) {
        throw new Error(withUsage$5('The `items` option expects an array of objects.'));
      }

      var defaultValues = items.filter(function (item) {
        return item.default;
      });

      if (defaultValues.length > 1) {
        throw new Error(withUsage$5('More than one default value is specified in `items`.'));
      }

      var defaultValue = find$1(userItems, function (item) {
        return item.default === true;
      });
      return {
        getConfiguration: function getConfiguration() {
          return defaultValues.length > 0 ? {
            hitsPerPage: defaultValues[0].value
          } : {};
        },
        init: function init(_ref) {
          var helper = _ref.helper,
              createURL = _ref.createURL,
              state = _ref.state,
              instantSearchInstance = _ref.instantSearchInstance;
          var isCurrentInOptions = items.some(function (item) {
            return Number(state.hitsPerPage) === Number(item.value);
          });

          if (!isCurrentInOptions) {
            _warning(state.hitsPerPage !== undefined, "\n`hitsPerPage` is not defined.\nThe option `hitsPerPage` needs to be set using the `configure` widget.\n\nLearn more: https://community.algolia.com/instantsearch.js/v2/widgets/configure.html\n            ");
            _warning(false, "\nThe `items` option of `hitsPerPage` does not contain the \"hits per page\" value coming from the state: ".concat(state.hitsPerPage, ".\n\nYou may want to add another entry to the `items` option with this value."));
            items = [{
              value: '',
              label: ''
            }].concat(_toConsumableArray(items));
          }

          this.setHitsPerPage = function (value) {
            return !value && value !== 0 ? helper.setQueryParameter('hitsPerPage', undefined).search() : helper.setQueryParameter('hitsPerPage', value).search();
          };

          this.createURL = function (helperState) {
            return function (value) {
              return createURL(helperState.setQueryParameter('hitsPerPage', !value && value !== 0 ? undefined : value));
            };
          };

          renderFn({
            items: transformItems(this._normalizeItems(state)),
            refine: this.setHitsPerPage,
            createURL: this.createURL(helper.state),
            hasNoResults: true,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, true);
        },
        render: function render(_ref2) {
          var state = _ref2.state,
              results = _ref2.results,
              instantSearchInstance = _ref2.instantSearchInstance;
          var hasNoResults = results.nbHits === 0;
          renderFn({
            items: transformItems(this._normalizeItems(state)),
            refine: this.setHitsPerPage,
            createURL: this.createURL(state),
            hasNoResults: hasNoResults,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, false);
        },
        _normalizeItems: function _normalizeItems(_ref3) {
          var hitsPerPage = _ref3.hitsPerPage;
          return items.map(function (item) {
            return _objectSpread({}, item, {
              isRefined: Number(item.value) === Number(hitsPerPage)
            });
          });
        },
        dispose: function dispose() {
          unmountFn();
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var hitsPerPage = searchParameters.hitsPerPage;

          if (defaultValue && hitsPerPage === defaultValue.value || hitsPerPage === undefined || uiState.hitsPerPage === hitsPerPage) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            hitsPerPage: hitsPerPage
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          var hitsPerPage = uiState.hitsPerPage;
          if (hitsPerPage) return searchParameters.setQueryParameter('hitsPerPage', uiState.hitsPerPage);

          if (defaultValue) {
            return searchParameters.setQueryParameter('hitsPerPage', defaultValue.value);
          }

          return searchParameters.setQueryParameter('hitsPerPage', undefined);
        }
      };
    };
  }

  var withUsage$6 = createDocumentationMessageGenerator({
    name: 'infinite-hits',
    connector: true
  });
  /**
   * @typedef {Object} InfiniteHitsRenderingOptions
   * @property {Array<Object>} hits The aggregated matched hits from Algolia API of all pages.
   * @property {Object} results The complete results response from Algolia API.
   * @property {function} showMore Loads the next page of hits.
   * @property {boolean} isLastPage Indicates if the last page of hits has been reached.
   * @property {Object} widgetParams All original widget options forwarded to the `renderFn`.
   */

  /**
   * @typedef {Object} CustomInfiniteHitsWidgetOptions
   * @property {boolean} [escapeHTML = true] Whether to escape HTML tags from `hits[i]._highlightResult`.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * **InfiniteHits** connector provides the logic to create custom widgets that will render an continuous list of results retrieved from Algolia.
   *
   * This connector provides a `InfiniteHitsRenderingOptions.showMore()` function to load next page of matched results.
   * @type {Connector}
   * @param {function(InfiniteHitsRenderingOptions, boolean)} renderFn Rendering function for the custom **InfiniteHits** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomInfiniteHitsWidgetOptions)} Re-usable widget factory for a custom **InfiniteHits** widget.
   * @example
   * // custom `renderFn` to render the custom InfiniteHits widget
   * function renderFn(InfiniteHitsRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     InfiniteHitsRenderingOptions.widgetParams.containerNode
   *       .html('<div id="hits"></div><button id="show-more">Load more</button>');
   *
   *     InfiniteHitsRenderingOptions.widgetParams.containerNode
   *       .find('#show-more')
   *       .on('click', function(event) {
   *         event.preventDefault();
   *         InfiniteHitsRenderingOptions.showMore();
   *       });
   *   }
   *
   *   InfiniteHitsRenderingOptions.widgetParams.containerNode.find('#hits').html(
   *     InfiniteHitsRenderingOptions.hits.map(function(hit) {
   *       return '<div>' + hit._highlightResult.name.value + '</div>';
   *     })
   *   );
   * };
   *
   * // connect `renderFn` to InfiniteHits logic
   * var customInfiniteHits = instantsearch.connectors.connectInfiniteHits(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customInfiniteHits({
   *     containerNode: $('#custom-infinite-hits-container'),
   *   })
   * );
   */

  var connectInfiniteHits = function connectInfiniteHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    checkRendering(renderFn, withUsage$6());
    return function (widgetParams) {
      var _ref = widgetParams || {},
          _ref$escapeHTML = _ref.escapeHTML,
          escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML,
          _ref$transformItems = _ref.transformItems,
          transformItems = _ref$transformItems === void 0 ? function (items) {
        return items;
      } : _ref$transformItems,
          _ref$showPrevious = _ref.showPrevious,
          hasShowPrevious = _ref$showPrevious === void 0 ? false : _ref$showPrevious;

      var hitsCache = [];
      var firstReceivedPage = Infinity;
      var lastReceivedPage = -1;
      var prevState;
      var showPrevious;
      var showMore;

      var getShowPrevious = function getShowPrevious(helper) {
        return function () {
          // Using the helper's `overrideStateWithoutTriggeringChangeEvent` method
          // avoid updating the browser URL when the user displays the previous page.
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread({}, helper.state, {
            page: firstReceivedPage - 1
          })).search();
        };
      };

      var getShowMore = function getShowMore(helper) {
        return function () {
          helper.setPage(lastReceivedPage + 1).search();
        };
      };

      return {
        getConfiguration: function getConfiguration() {
          return escapeHTML ? TAG_PLACEHOLDER : {};
        },
        init: function init(_ref2) {
          var instantSearchInstance = _ref2.instantSearchInstance,
              helper = _ref2.helper;
          showPrevious = getShowPrevious(helper);
          showMore = getShowMore(helper);
          firstReceivedPage = helper.state.page;
          lastReceivedPage = helper.state.page;
          renderFn({
            hits: hitsCache,
            results: undefined,
            showPrevious: showPrevious,
            showMore: showMore,
            isFirstPage: firstReceivedPage === 0,
            isLastPage: true,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref3) {
          var results = _ref3.results,
              state = _ref3.state,
              instantSearchInstance = _ref3.instantSearchInstance;

          // Reset cache and received pages if anything changes in the
          // search state, except for the page.
          //
          // We're doing this to "reset" the widget if a refinement or the
          // query changes between renders, but we want to keep it as is
          // if we only change pages.
          var page = state.page,
              currentState = _objectWithoutProperties(state, ["page"]);

          if (!isEqual(currentState, prevState)) {
            hitsCache = [];
            firstReceivedPage = page;
            lastReceivedPage = page;
            prevState = currentState;
          }

          if (escapeHTML && results.hits && results.hits.length > 0) {
            results.hits = escapeHits(results.hits);
          }

          results.hits = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
          results.hits = addQueryID(results.hits, results.queryID);
          results.hits = transformItems(results.hits);

          if (lastReceivedPage < page || !hitsCache.length) {
            hitsCache = [].concat(_toConsumableArray(hitsCache), _toConsumableArray(results.hits));
            lastReceivedPage = page;
          } else if (firstReceivedPage > page) {
            hitsCache = [].concat(_toConsumableArray(results.hits), _toConsumableArray(hitsCache));
            firstReceivedPage = page;
          }

          var isFirstPage = firstReceivedPage === 0;
          var isLastPage = results.nbPages <= results.page + 1;
          renderFn({
            hits: hitsCache,
            results: results,
            showPrevious: showPrevious,
            showMore: showMore,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var page = searchParameters.page;

          if (!hasShowPrevious || page === 0 || page + 1 === uiState.page) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            page: page + 1
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;

          if (!hasShowPrevious) {
            return searchParameters;
          }

          var uiPage = uiState.page;

          if (uiPage) {
            return searchParameters.setQueryParameter('page', uiPage - 1);
          }

          return searchParameters.setQueryParameter('page', 0);
        }
      };
    };
  };

  var connectInfiniteHitsWithInsights = withInsights(connectInfiniteHits);

  var withUsage$7 = createDocumentationMessageGenerator({
    name: 'menu',
    connector: true
  });
  /**
   * @typedef {Object} MenuItem
   * @property {string} value The value of the menu item.
   * @property {string} label Human-readable value of the menu item.
   * @property {number} count Number of results matched after refinement is applied.
   * @property {boolean} isRefined Indicates if the refinement is applied.
   */

  /**
   * @typedef {Object} CustomMenuWidgetOptions
   * @property {string} attribute Name of the attribute for faceting (eg. "free_shipping").
   * @property {number} [limit = 10] How many facets values to retrieve.
   * @property {boolean} [showMore = false] Whether to display a button that expands the number of items.
   * @property {number} [showMoreLimit = 20] How many facets values to retrieve when `toggleShowMore` is called, this value is meant to be greater than `limit` option.
   * @property {string[]|function} [sortBy = ['isRefined', 'name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} MenuRenderingOptions
   * @property {MenuItem[]} items The elements that can be refined for the current search results.
   * @property {function(item.value): string} createURL Creates the URL for a single item name in the list.
   * @property {function(item.value)} refine Filter the search to item value.
   * @property {boolean} canRefine True if refinement can be applied.
   * @property {Object} widgetParams All original `CustomMenuWidgetOptions` forwarded to the `renderFn`.
   * @property {boolean} isShowingMore True if the menu is displaying all the menu items.
   * @property {function} toggleShowMore Toggles the number of values displayed between `limit` and `showMore.limit`.
   * @property {boolean} canToggleShowMore `true` if the toggleShowMore button can be activated (enough items to display more or
   * already displaying more than `limit` items)
   */

  /**
   * **Menu** connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet. The typical usage of menu is for navigation in categories.
   *
   * This connector provides a `toggleShowMore()` function to display more or less items and a `refine()`
   * function to select an item. While selecting a new element, the `refine` will also unselect the
   * one that is currently selected.
   *
   * **Requirement:** the attribute passed as `attribute` must be present in "attributes for faceting" on the Algolia dashboard or configured as attributesForFaceting via a set settings call to the Algolia API.
   * @type {Connector}
   * @param {function(MenuRenderingOptions, boolean)} renderFn Rendering function for the custom **Menu** widget. widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomMenuWidgetOptions)} Re-usable widget factory for a custom **Menu** widget.
   * @example
   * // custom `renderFn` to render the custom Menu widget
   * function renderFn(MenuRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     MenuRenderingOptions.widgetParams.containerNode
   *       .html('<select></select');
   *
   *     MenuRenderingOptions.widgetParams.containerNode
   *       .find('select')
   *       .on('change', function(event) {
   *         MenuRenderingOptions.refine(event.target.value);
   *       });
   *   }
   *
   *   var options = MenuRenderingOptions.items.map(function(item) {
   *     return item.isRefined
   *       ? '<option value="' + item.value + '" selected>' + item.label + '</option>'
   *       : '<option value="' + item.value + '">' + item.label + '</option>';
   *   });
   *
   *   MenuRenderingOptions.widgetParams.containerNode
   *     .find('select')
   *     .html(options);
   * }
   *
   * // connect `renderFn` to Menu logic
   * var customMenu = instantsearch.connectors.connectMenu(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customMenu({
   *     containerNode: $('#custom-menu-container'),
   *     attribute: 'categories',
   *     limit: 10,
   *   })
   * );
   */

  function connectMenu(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$7());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          _widgetParams$limit = widgetParams.limit,
          limit = _widgetParams$limit === void 0 ? 10 : _widgetParams$limit,
          _widgetParams$showMor = widgetParams.showMore,
          showMore = _widgetParams$showMor === void 0 ? false : _widgetParams$showMor,
          _widgetParams$showMor2 = widgetParams.showMoreLimit,
          showMoreLimit = _widgetParams$showMor2 === void 0 ? 20 : _widgetParams$showMor2,
          _widgetParams$sortBy = widgetParams.sortBy,
          sortBy = _widgetParams$sortBy === void 0 ? ['isRefined', 'name:asc'] : _widgetParams$sortBy,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;

      if (!attribute) {
        throw new Error(withUsage$7('The `attribute` option is required.'));
      }

      if (showMore === true && showMoreLimit <= limit) {
        throw new Error(withUsage$7('The `showMoreLimit` option must be greater than `limit`.'));
      }

      return {
        isShowingMore: false,
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        toggleShowMore: function toggleShowMore() {},
        cachedToggleShowMore: function cachedToggleShowMore() {
          this.toggleShowMore();
        },
        createToggleShowMore: function createToggleShowMore(_ref) {
          var _this = this;

          var results = _ref.results,
              instantSearchInstance = _ref.instantSearchInstance;
          return function () {
            _this.isShowingMore = !_this.isShowingMore;

            _this.render({
              results: results,
              instantSearchInstance: instantSearchInstance
            });
          };
        },
        getLimit: function getLimit() {
          return this.isShowingMore ? showMoreLimit : limit;
        },
        refine: function refine(helper) {
          return function (facetValue) {
            var _helper$getHierarchic = helper.getHierarchicalFacetBreadcrumb(attribute),
                _helper$getHierarchic2 = _slicedToArray(_helper$getHierarchic, 1),
                refinedItem = _helper$getHierarchic2[0];

            helper.toggleRefinement(attribute, facetValue ? facetValue : refinedItem).search();
          };
        },
        getConfiguration: function getConfiguration(configuration) {
          var widgetConfiguration = {
            hierarchicalFacets: [{
              name: attribute,
              attributes: [attribute]
            }]
          };
          var currentMaxValuesPerFacet = configuration.maxValuesPerFacet || 0;
          widgetConfiguration.maxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
          return widgetConfiguration;
        },
        init: function init(_ref2) {
          var helper = _ref2.helper,
              createURL = _ref2.createURL,
              instantSearchInstance = _ref2.instantSearchInstance;
          this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this);

          this._createURL = function (facetValue) {
            return createURL(helper.state.toggleRefinement(attribute, facetValue));
          };

          this._refine = this.refine(helper);
          renderFn({
            items: [],
            createURL: this._createURL,
            refine: this._refine,
            instantSearchInstance: instantSearchInstance,
            canRefine: false,
            widgetParams: widgetParams,
            isShowingMore: this.isShowingMore,
            toggleShowMore: this.cachedToggleShowMore,
            canToggleShowMore: false
          }, true);
        },
        render: function render(_ref3) {
          var results = _ref3.results,
              instantSearchInstance = _ref3.instantSearchInstance;
          var facetItems = results.getFacetValues(attribute, {
            sortBy: sortBy
          }).data || [];
          var items = transformItems(facetItems.slice(0, this.getLimit()).map(function (_ref4) {
            var label = _ref4.name,
                value = _ref4.path,
                item = _objectWithoutProperties(_ref4, ["name", "path"]);

            return _objectSpread({}, item, {
              label: label,
              value: value
            });
          }));
          this.toggleShowMore = this.createToggleShowMore({
            results: results,
            instantSearchInstance: instantSearchInstance
          });
          renderFn({
            items: items,
            createURL: this._createURL,
            refine: this._refine,
            instantSearchInstance: instantSearchInstance,
            canRefine: items.length > 0,
            widgetParams: widgetParams,
            isShowingMore: this.isShowingMore,
            toggleShowMore: this.cachedToggleShowMore,
            canToggleShowMore: showMore && (this.isShowingMore || facetItems.length > this.getLimit())
          }, false);
        },
        dispose: function dispose(_ref5) {
          var state = _ref5.state;
          unmountFn();
          var nextState = state;

          if (state.isHierarchicalFacetRefined(attribute)) {
            nextState = state.removeHierarchicalFacetRefinement(attribute);
          }

          nextState = nextState.removeHierarchicalFacet(attribute);

          if (nextState.maxValuesPerFacet === limit || showMoreLimit && nextState.maxValuesPerFacet === showMoreLimit) {
            nextState.setQueryParameters('maxValuesPerFacet', undefined);
          }

          return nextState;
        },
        getWidgetState: function getWidgetState(uiState, _ref6) {
          var searchParameters = _ref6.searchParameters;

          var _searchParameters$get = searchParameters.getHierarchicalFacetBreadcrumb(attribute),
              _searchParameters$get2 = _slicedToArray(_searchParameters$get, 1),
              refinedItem = _searchParameters$get2[0];

          if (!refinedItem || uiState.menu && uiState.menu[attribute] === refinedItem) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            menu: _objectSpread({}, uiState.menu, _defineProperty({}, attribute, refinedItem))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref7) {
          var uiState = _ref7.uiState;

          if (uiState.menu && uiState.menu[attribute]) {
            var uiStateRefinedItem = uiState.menu[attribute];
            var isAlreadyRefined = searchParameters.isHierarchicalFacetRefined(attribute, uiStateRefinedItem);
            if (isAlreadyRefined) return searchParameters;
            return searchParameters.toggleRefinement(attribute, uiStateRefinedItem);
          }

          if (searchParameters.isHierarchicalFacetRefined(attribute)) {
            var _searchParameters$get3 = searchParameters.getHierarchicalFacetBreadcrumb(attribute),
                _searchParameters$get4 = _slicedToArray(_searchParameters$get3, 1),
                refinedItem = _searchParameters$get4[0];

            return searchParameters.toggleRefinement(attribute, refinedItem);
          }

          return searchParameters;
        }
      };
    };
  }

  var withUsage$8 = createDocumentationMessageGenerator({
    name: 'numeric-menu',
    connector: true
  });
  /**
   * @typedef {Object} NumericMenuOption
   * @property {string} name Name of the option.
   * @property {number} start Lower bound of the option (>=).
   * @property {number} end Higher bound of the option (<=).
   */

  /**
   * @typedef {Object} NumericMenuItem
   * @property {string} label Name of the option.
   * @property {string} value URL encoded of the bounds object with the form `{start, end}`. This value can be used verbatim in the webpage and can be read by `refine` directly. If you want to inspect the value, you can do `JSON.parse(window.decodeURI(value))` to get the object.
   * @property {boolean} isRefined True if the value is selected.
   */

  /**
   * @typedef {Object} CustomNumericMenuWidgetOptions
   * @property {string} attribute Name of the attribute for filtering.
   * @property {NumericMenuOption[]} items List of all the items.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} NumericMenuRenderingOptions
   * @property {function(item.value): string} createURL Creates URLs for the next state, the string is the name of the selected option.
   * @property {NumericMenuItem[]} items The list of available choices.
   * @property {boolean} hasNoResults `true` if the last search contains no result.
   * @property {function(item.value)} refine Sets the selected value and trigger a new search.
   * @property {Object} widgetParams All original `CustomNumericMenuWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **NumericMenu** connector provides the logic to build a custom widget that will give the user the ability to choose a range on to refine the search results.
   *
   * It provides a `refine(item)` function to refine on the selected range.
   *
   * **Requirement:** the attribute passed as `attribute` must be present in "attributes for faceting" on the Algolia dashboard or configured as attributesForFaceting via a set settings call to the Algolia API.
   * @function connectNumericMenu
   * @type {Connector}
   * @param {function(NumericMenuRenderingOptions, boolean)} renderFn Rendering function for the custom **NumericMenu** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomNumericMenuWidgetOptions)} Re-usable widget factory for a custom **NumericMenu** widget.
   * @example
   * // custom `renderFn` to render the custom NumericMenu widget
   * function renderFn(NumericMenuRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     NumericMenuRenderingOptions.widgetParams.containerNode.html('<ul></ul>');
   *   }
   *
   *   NumericMenuRenderingOptions.widgetParams.containerNode
   *     .find('li[data-refine-value]')
   *     .each(function() { $(this).off('click'); });
   *
   *   var list = NumericMenuRenderingOptions.items.map(function(item) {
   *     return '<li data-refine-value="' + item.value + '">' +
   *       '<input type="radio"' + (item.isRefined ? ' checked' : '') + '/> ' +
   *       item.label + '</li>';
   *   });
   *
   *   NumericMenuRenderingOptions.widgetParams.containerNode.find('ul').html(list);
   *   NumericMenuRenderingOptions.widgetParams.containerNode
   *     .find('li[data-refine-value]')
   *     .each(function() {
   *       $(this).on('click', function(event) {
   *         event.preventDefault();
   *         event.stopPropagation();
   *         NumericMenuRenderingOptions.refine($(this).data('refine-value'));
   *       });
   *     });
   * }
   *
   * // connect `renderFn` to NumericMenu logic
   * var customNumericMenu = instantsearch.connectors.connectNumericMenu(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customNumericMenu({
   *     containerNode: $('#custom-numeric-menu-container'),
   *     attribute: 'price',
   *     items: [
   *       {name: 'All'},
   *       {end: 4, name: 'less than 4'},
   *       {start: 4, end: 4, name: '4'},
   *       {start: 5, end: 10, name: 'between 5 and 10'},
   *       {start: 10, name: 'more than 10'},
   *     ],
   *   })
   * );
   */

  function connectNumericMenu(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$8());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          items = widgetParams.items,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (x) {
        return x;
      } : _widgetParams$transfo;

      if (!attribute) {
        throw new Error(withUsage$8('The `attribute` option is required.'));
      }

      if (!items) {
        throw new Error(withUsage$8('The `items` option expects an array of objects.'));
      }

      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              createURL = _ref.createURL,
              instantSearchInstance = _ref.instantSearchInstance;

          this._refine = function (facetValue) {
            var refinedState = refine(helper.state, attribute, items, facetValue);
            helper.setState(refinedState).search();
          };

          this._createURL = function (state) {
            return function (facetValue) {
              return createURL(refine(state, attribute, items, facetValue));
            };
          };

          this._prepareItems = function (state) {
            return items.map(function (_ref2) {
              var start = _ref2.start,
                  end = _ref2.end,
                  label = _ref2.label;
              return {
                label: label,
                value: window.encodeURI(JSON.stringify({
                  start: start,
                  end: end
                })),
                isRefined: isRefined(state, attribute, {
                  start: start,
                  end: end
                })
              };
            });
          };

          renderFn({
            createURL: this._createURL(helper.state),
            items: transformItems(this._prepareItems(helper.state)),
            hasNoResults: true,
            refine: this._refine,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref3) {
          var results = _ref3.results,
              state = _ref3.state,
              instantSearchInstance = _ref3.instantSearchInstance;
          renderFn({
            createURL: this._createURL(state),
            items: transformItems(this._prepareItems(state)),
            hasNoResults: results.nbHits === 0,
            refine: this._refine,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose(_ref4) {
          var state = _ref4.state;
          unmountFn();
          return state.clearRefinements(attribute);
        },
        getWidgetState: function getWidgetState(uiState, _ref5) {
          var searchParameters = _ref5.searchParameters;
          var currentRefinements = searchParameters.getNumericRefinements(attribute);
          var equal = currentRefinements['='] && currentRefinements['='][0];

          if (equal || equal === 0) {
            return _objectSpread({}, uiState, {
              numericMenu: _objectSpread({}, uiState.numericMenu, _defineProperty({}, attribute, "".concat(currentRefinements['='])))
            });
          }

          var lowerBound = currentRefinements['>='] && currentRefinements['>='][0] || '';
          var upperBound = currentRefinements['<='] && currentRefinements['<='][0] || '';

          if (lowerBound !== '' || upperBound !== '') {
            if (uiState.numericMenu && uiState.numericMenu[attribute] === "".concat(lowerBound, ":").concat(upperBound)) return uiState;
            return _objectSpread({}, uiState, {
              numericMenu: _objectSpread({}, uiState.numericMenu, _defineProperty({}, attribute, "".concat(lowerBound, ":").concat(upperBound)))
            });
          }

          return uiState;
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
          var uiState = _ref6.uiState;
          var clearedParams = searchParameters.clearRefinements(attribute);
          var value = uiState.numericMenu && uiState.numericMenu[attribute];

          if (!value) {
            return clearedParams;
          }

          var valueAsEqual = value.indexOf(':') === -1 && value;

          if (valueAsEqual) {
            return clearedParams.addNumericRefinement(attribute, '=', valueAsEqual);
          }

          var _value$split$map = value.split(':').map(parseFloat),
              _value$split$map2 = _slicedToArray(_value$split$map, 2),
              lowerBound = _value$split$map2[0],
              upperBound = _value$split$map2[1];

          if (isFiniteNumber(lowerBound)) {
            clearedParams = clearedParams.addNumericRefinement(attribute, '>=', lowerBound);
          }

          if (isFiniteNumber(upperBound)) {
            clearedParams = clearedParams.addNumericRefinement(attribute, '<=', upperBound);
          }

          return clearedParams;
        }
      };
    };
  }

  function isRefined(state, attribute, option) {
    var currentRefinements = state.getNumericRefinements(attribute);

    if (option.start !== undefined && option.end !== undefined) {
      if (option.start === option.end) {
        return hasNumericRefinement(currentRefinements, '=', option.start);
      }
    }

    if (option.start !== undefined) {
      return hasNumericRefinement(currentRefinements, '>=', option.start);
    }

    if (option.end !== undefined) {
      return hasNumericRefinement(currentRefinements, '<=', option.end);
    }

    if (option.start === undefined && option.end === undefined) {
      return Object.keys(currentRefinements).length === 0;
    }

    return undefined;
  }

  function refine(state, attribute, items, facetValue) {
    var resolvedState = state;
    var refinedOption = JSON.parse(window.decodeURI(facetValue));
    var currentRefinements = resolvedState.getNumericRefinements(attribute);

    if (refinedOption.start === undefined && refinedOption.end === undefined) {
      return resolvedState.clearRefinements(attribute);
    }

    if (!isRefined(resolvedState, attribute, refinedOption)) {
      resolvedState = resolvedState.clearRefinements(attribute);
    }

    if (refinedOption.start !== undefined && refinedOption.end !== undefined) {
      if (refinedOption.start > refinedOption.end) {
        throw new Error('option.start should be > to option.end');
      }

      if (refinedOption.start === refinedOption.end) {
        if (hasNumericRefinement(currentRefinements, '=', refinedOption.start)) {
          resolvedState = resolvedState.removeNumericRefinement(attribute, '=', refinedOption.start);
        } else {
          resolvedState = resolvedState.addNumericRefinement(attribute, '=', refinedOption.start);
        }

        return resolvedState;
      }
    }

    if (refinedOption.start !== undefined) {
      if (hasNumericRefinement(currentRefinements, '>=', refinedOption.start)) {
        resolvedState = resolvedState.removeNumericRefinement(attribute, '>=', refinedOption.start);
      } else {
        resolvedState = resolvedState.addNumericRefinement(attribute, '>=', refinedOption.start);
      }
    }

    if (refinedOption.end !== undefined) {
      if (hasNumericRefinement(currentRefinements, '<=', refinedOption.end)) {
        resolvedState = resolvedState.removeNumericRefinement(attribute, '<=', refinedOption.end);
      } else {
        resolvedState = resolvedState.addNumericRefinement(attribute, '<=', refinedOption.end);
      }
    }

    resolvedState.page = 0;
    return resolvedState;
  }

  function hasNumericRefinement(currentRefinements, operator, value) {
    var hasOperatorRefinements = currentRefinements[operator] !== undefined;
    return hasOperatorRefinements && currentRefinements[operator].includes(value);
  }

  var Paginator =
  /*#__PURE__*/
  function () {
    function Paginator(params) {
      _classCallCheck(this, Paginator);

      this.currentPage = params.currentPage;
      this.total = params.total;
      this.padding = params.padding;
    }

    _createClass(Paginator, [{
      key: "pages",
      value: function pages() {
        var total = this.total,
            currentPage = this.currentPage,
            padding = this.padding;
        if (total === 0) return [0];
        var totalDisplayedPages = this.nbPagesDisplayed(padding, total);

        if (totalDisplayedPages === total) {
          return range({
            end: total
          });
        }

        var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
        var paddingRight = totalDisplayedPages - paddingLeft;
        var first = currentPage - paddingLeft;
        var last = currentPage + paddingRight;
        return range({
          start: first,
          end: last
        });
      }
    }, {
      key: "nbPagesDisplayed",
      value: function nbPagesDisplayed(padding, total) {
        return Math.min(2 * padding + 1, total);
      }
    }, {
      key: "calculatePaddingLeft",
      value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
        if (current <= padding) {
          return current;
        }

        if (current >= total - padding) {
          return totalDisplayedPages - (total - current);
        }

        return padding;
      }
    }, {
      key: "isLastPage",
      value: function isLastPage() {
        return this.currentPage === this.total - 1;
      }
    }, {
      key: "isFirstPage",
      value: function isFirstPage() {
        return this.currentPage === 0;
      }
    }]);

    return Paginator;
  }();

  var withUsage$9 = createDocumentationMessageGenerator({
    name: 'pagination',
    connector: true
  });
  /**
   * @typedef {Object} CustomPaginationWidgetOptions
   * @property {number} [totalPages] The total number of pages to browse.
   * @property {number} [padding = 3] The padding of pages to show around the current page
   */

  /**
   * @typedef {Object} PaginationRenderingOptions
   * @property {function(page): string} createURL Creates URLs for the next state, the number is the page to generate the URL for.
   * @property {number} currentRefinement The number of the page currently displayed.
   * @property {number} nbHits The number of hits computed for the last query (can be approximated).
   * @property {number} nbPages The number of pages for the result set.
   * @property {number[]} pages The actual pages relevant to the current situation and padding
   * @property {boolean} isFirstPage true if the current page is also the first page
   * @property {boolean} isLastPage true if the current page is also the last page
   * @property {function(page)} refine Sets the current page and trigger a search.
   * @property {Object} widgetParams All original `CustomPaginationWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **Pagination** connector provides the logic to build a widget that will let the user
   * choose the current page of the results.
   *
   * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
   * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
   *
   * @type {Connector}
   * @param {function(PaginationRenderingOptions, boolean)} renderFn Rendering function for the custom **Pagination** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomPaginationWidgetOptions)} Re-usable widget factory for a custom **Pagination** widget.
   * @example
   * // custom `renderFn` to render the custom Pagination widget
   * function renderFn(PaginationRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     PaginationRenderingOptions.widgetParams.containerNode.html('<ul></ul>');
   *   }
   *
   *   // remove event listeners before replacing markup
   *   PaginationRenderingOptions.widgetParams.containerNode
   *     .find('a[data-page]')
   *     .each(function() { $(this).off('click'); });
   *
   *   var pages = PaginationRenderingOptions.pages
   *     .map(function(page) {
   *       return '<li style="display: inline-block; margin-right: 10px;">' +
   *         '<a href="' + PaginationRenderingOptions.createURL(page) + '" data-page="' + page + '">' +
   *         (parseInt(page) + 1) + '</a></li>';
   *     });
   *
   *   PaginationRenderingOptions.widgetParams.containerNode
   *     .find('ul')
   *     .html(pages);
   *
   *   PaginationRenderingOptions.widgetParams.containerNode
   *     .find('a[data-page]')
   *     .each(function() {
   *       $(this).on('click', function(event) {
   *         event.preventDefault();
   *         PaginationRenderingOptions.refine($(this).data('page'));
   *       });
   *     });
   * }
   *
   * // connect `renderFn` to Pagination logic
   * var customPagination = instantsearch.connectors.connectPagination(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customPagination({
   *     containerNode: $('#custom-pagination-container'),
   *     totalPages: 20,
   *     padding: 4,
   *   })
   * );
   */

  function connectPagination(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$9());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var totalPages = widgetParams.totalPages,
          _widgetParams$padding = widgetParams.padding,
          padding = _widgetParams$padding === void 0 ? 3 : _widgetParams$padding;
      var pager = new Paginator({
        currentPage: 0,
        total: 0,
        padding: padding
      });
      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              createURL = _ref.createURL,
              instantSearchInstance = _ref.instantSearchInstance;

          this.refine = function (page) {
            helper.setPage(page);
            helper.search();
          };

          this.createURL = function (state) {
            return function (page) {
              return createURL(state.setPage(page));
            };
          };

          renderFn({
            createURL: this.createURL(helper.state),
            currentRefinement: helper.getPage() || 0,
            nbHits: 0,
            nbPages: 0,
            pages: [],
            isFirstPage: true,
            isLastPage: true,
            refine: this.refine,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, true);
        },
        getMaxPage: function getMaxPage(_ref2) {
          var nbPages = _ref2.nbPages;
          return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
        },
        render: function render(_ref3) {
          var results = _ref3.results,
              state = _ref3.state,
              instantSearchInstance = _ref3.instantSearchInstance;
          var nbPages = this.getMaxPage(results);
          pager.currentPage = state.page;
          pager.total = nbPages;
          renderFn({
            createURL: this.createURL(state),
            currentRefinement: state.page,
            refine: this.refine,
            nbHits: results.nbHits,
            nbPages: nbPages,
            pages: pager.pages(),
            isFirstPage: pager.isFirstPage(),
            isLastPage: pager.isLastPage(),
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var page = searchParameters.page;
          if (page === 0 || page + 1 === uiState.page) return uiState;
          return _objectSpread({}, uiState, {
            page: page + 1
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          var uiPage = uiState.page;
          if (uiPage) return searchParameters.setQueryParameter('page', uiState.page - 1);
          return searchParameters.setQueryParameter('page', 0);
        }
      };
    };
  }

  var withUsage$a = createDocumentationMessageGenerator({
    name: 'range-input',
    connector: true
  }, {
    name: 'range-slider',
    connector: true
  });
  /**
   * @typedef {Object} CustomRangeWidgetOptions
   * @property {string} attribute Name of the attribute for faceting.
   * @property {number} [min = undefined] Minimal range value, default to automatically computed from the result set.
   * @property {number} [max = undefined] Maximal range value, default to automatically computed from the result set.
   * @property {number} [precision = 2] Number of digits after decimal point to use.
   */

  /**
   * @typedef {Object} RangeRenderingOptions
   * @property {function(Array<number, number>)} refine Sets a range to filter the results on. Both values
   * are optional, and will default to the higher and lower bounds. You can use `undefined` to remove a
   * previously set bound or to set an infinite bound.
   * @property {{min: number, max: number}} range Results bounds without the current range filter.
   * @property {Array<number, number>} start Current numeric bounds of the search.
   * @property {{from: function, to: function}} formatter Transform for the rendering `from` and/or `to` values.
   * Both functions take a `number` as input and should output a `string`.
   * @property {Object} widgetParams All original `CustomRangeWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **Range** connector provides the logic to create custom widget that will let
   * the user refine results using a numeric range.
   *
   * This connectors provides a `refine()` function that accepts bounds. It will also provide
   * information about the min and max bounds for the current result set.
   * @type {Connector}
   * @param {function(RangeRenderingOptions, boolean)} renderFn Rendering function for the custom **Range** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomRangeWidgetOptions)} Re-usable widget factory for a custom **Range** widget.
   */

  function connectRange(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$a());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          minBound = widgetParams.min,
          maxBound = widgetParams.max,
          _widgetParams$precisi = widgetParams.precision,
          precision = _widgetParams$precisi === void 0 ? 2 : _widgetParams$precisi;

      if (!attribute) {
        throw new Error(withUsage$a('The `attribute` option is required.'));
      }

      var hasMinBound = isFiniteNumber(minBound);
      var hasMaxBound = isFiniteNumber(maxBound);

      var formatToNumber = function formatToNumber(v) {
        return Number(Number(v).toFixed(precision));
      };

      var rangeFormatter = {
        from: function from(v) {
          return v;
        },
        to: function to(v) {
          return formatToNumber(v).toLocaleString();
        }
      };
      return {
        _getCurrentRange: function _getCurrentRange(stats) {
          var pow = Math.pow(10, precision);
          var min;

          if (hasMinBound) {
            min = minBound;
          } else if (isFiniteNumber(stats.min)) {
            min = stats.min;
          } else {
            min = 0;
          }

          var max;

          if (hasMaxBound) {
            max = maxBound;
          } else if (isFiniteNumber(stats.max)) {
            max = stats.max;
          } else {
            max = 0;
          }

          return {
            min: Math.floor(min * pow) / pow,
            max: Math.ceil(max * pow) / pow
          };
        },
        _getCurrentRefinement: function _getCurrentRefinement(helper) {
          var _ref = helper.getNumericRefinement(attribute, '>=') || [],
              _ref2 = _slicedToArray(_ref, 1),
              minValue = _ref2[0];

          var _ref3 = helper.getNumericRefinement(attribute, '<=') || [],
              _ref4 = _slicedToArray(_ref3, 1),
              maxValue = _ref4[0];

          var min = isFiniteNumber(minValue) ? minValue : -Infinity;
          var max = isFiniteNumber(maxValue) ? maxValue : Infinity;
          return [min, max];
        },
        _refine: function _refine(helper, currentRange) {
          // eslint-disable-next-line complexity
          return function () {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
                _ref6 = _slicedToArray(_ref5, 2),
                nextMin = _ref6[0],
                nextMax = _ref6[1];

            var currentRangeMin = currentRange.min,
                currentRangeMax = currentRange.max;

            var _ref7 = helper.getNumericRefinement(attribute, '>=') || [],
                _ref8 = _slicedToArray(_ref7, 1),
                min = _ref8[0];

            var _ref9 = helper.getNumericRefinement(attribute, '<=') || [],
                _ref10 = _slicedToArray(_ref9, 1),
                max = _ref10[0];

            var isResetMin = nextMin === undefined || nextMin === '';
            var isResetMax = nextMax === undefined || nextMax === '';
            var nextMinAsNumber = !isResetMin ? parseFloat(nextMin) : undefined;
            var nextMaxAsNumber = !isResetMax ? parseFloat(nextMax) : undefined;
            var newNextMin;

            if (!hasMinBound && currentRangeMin === nextMinAsNumber) {
              newNextMin = undefined;
            } else if (hasMinBound && isResetMin) {
              newNextMin = minBound;
            } else {
              newNextMin = nextMinAsNumber;
            }

            var newNextMax;

            if (!hasMaxBound && currentRangeMax === nextMaxAsNumber) {
              newNextMax = undefined;
            } else if (hasMaxBound && isResetMax) {
              newNextMax = maxBound;
            } else {
              newNextMax = nextMaxAsNumber;
            }

            var isResetNewNextMin = newNextMin === undefined;
            var isValidNewNextMin = isFiniteNumber(newNextMin);
            var isValidMinCurrentRange = isFiniteNumber(currentRangeMin);
            var isGreaterThanCurrentRange = isValidMinCurrentRange && currentRangeMin <= newNextMin;
            var isMinValid = isResetNewNextMin || isValidNewNextMin && (!isValidMinCurrentRange || isGreaterThanCurrentRange);
            var isResetNewNextMax = newNextMax === undefined;
            var isValidNewNextMax = isFiniteNumber(newNextMax);
            var isValidMaxCurrentRange = isFiniteNumber(currentRangeMax);
            var isLowerThanRange = isValidMaxCurrentRange && currentRangeMax >= newNextMax;
            var isMaxValid = isResetNewNextMax || isValidNewNextMax && (!isValidMaxCurrentRange || isLowerThanRange);
            var hasMinChange = min !== newNextMin;
            var hasMaxChange = max !== newNextMax;

            if ((hasMinChange || hasMaxChange) && isMinValid && isMaxValid) {
              helper.clearRefinements(attribute);

              if (isValidNewNextMin) {
                helper.addNumericRefinement(attribute, '>=', formatToNumber(newNextMin));
              }

              if (isValidNewNextMax) {
                helper.addNumericRefinement(attribute, '<=', formatToNumber(newNextMax));
              }

              helper.search();
            }
          };
        },
        getConfiguration: function getConfiguration(currentConfiguration) {
          var configuration = {
            disjunctiveFacets: [attribute]
          };
          var isBoundsDefined = hasMinBound || hasMaxBound;
          var boundsAlreadyDefined = currentConfiguration && currentConfiguration.numericRefinements && currentConfiguration.numericRefinements[attribute] !== undefined;
          var isMinBoundValid = isFiniteNumber(minBound);
          var isMaxBoundValid = isFiniteNumber(maxBound);
          var isAbleToRefine = isMinBoundValid && isMaxBoundValid ? minBound < maxBound : isMinBoundValid || isMaxBoundValid;

          if (isBoundsDefined && !boundsAlreadyDefined && isAbleToRefine) {
            configuration.numericRefinements = _defineProperty({}, attribute, {});

            if (hasMinBound) {
              configuration.numericRefinements[attribute]['>='] = [minBound];
            }

            if (hasMaxBound) {
              configuration.numericRefinements[attribute]['<='] = [maxBound];
            }
          }

          return configuration;
        },
        init: function init(_ref11) {
          var helper = _ref11.helper,
              instantSearchInstance = _ref11.instantSearchInstance;
          var stats = {};

          var currentRange = this._getCurrentRange(stats);

          var start = this._getCurrentRefinement(helper);

          renderFn({
            // On first render pass an empty range
            // to be able to bypass the validation
            // related to it
            refine: this._refine(helper, {}),
            format: rangeFormatter,
            range: currentRange,
            widgetParams: _objectSpread({}, widgetParams, {
              precision: precision
            }),
            start: start,
            instantSearchInstance: instantSearchInstance
          }, true);
        },
        render: function render(_ref12) {
          var results = _ref12.results,
              helper = _ref12.helper,
              instantSearchInstance = _ref12.instantSearchInstance;
          var facetsFromResults = results.disjunctiveFacets || [];
          var facet = find$1(facetsFromResults, function (facetResult) {
            return facetResult.name === attribute;
          });
          var stats = facet && facet.stats || {};

          var currentRange = this._getCurrentRange(stats);

          var start = this._getCurrentRefinement(helper);

          renderFn({
            refine: this._refine(helper, currentRange),
            format: rangeFormatter,
            range: currentRange,
            widgetParams: _objectSpread({}, widgetParams, {
              precision: precision
            }),
            start: start,
            instantSearchInstance: instantSearchInstance
          }, false);
        },
        dispose: function dispose(_ref13) {
          var state = _ref13.state;
          unmountFn();
          var nextState = state.removeNumericRefinement(attribute).removeDisjunctiveFacet(attribute);
          return nextState;
        },
        getWidgetState: function getWidgetState(uiState, _ref14) {
          var searchParameters = _ref14.searchParameters;

          var _searchParameters$get = searchParameters.getNumericRefinements(attribute),
              _searchParameters$get2 = _searchParameters$get['>='],
              min = _searchParameters$get2 === void 0 ? '' : _searchParameters$get2,
              _searchParameters$get3 = _searchParameters$get['<='],
              max = _searchParameters$get3 === void 0 ? '' : _searchParameters$get3;

          if (min === '' && max === '' || uiState && uiState.range && uiState.range[attribute] === "".concat(min, ":").concat(max)) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            range: _objectSpread({}, uiState.range, _defineProperty({}, attribute, "".concat(min, ":").concat(max)))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref15) {
          var uiState = _ref15.uiState;
          var value = uiState && uiState.range && uiState.range[attribute];

          if (!value || value.indexOf(':') === -1) {
            return searchParameters;
          }

          var _searchParameters$get4 = searchParameters.getNumericRefinements(attribute),
              _searchParameters$get5 = _searchParameters$get4['>='],
              previousMin = _searchParameters$get5 === void 0 ? [NaN] : _searchParameters$get5,
              _searchParameters$get6 = _searchParameters$get4['<='],
              previousMax = _searchParameters$get6 === void 0 ? [NaN] : _searchParameters$get6;

          var clearedParams = searchParameters.clearRefinements(attribute);

          var _value$split$map = value.split(':').map(parseFloat),
              _value$split$map2 = _slicedToArray(_value$split$map, 2),
              lowerBound = _value$split$map2[0],
              upperBound = _value$split$map2[1];

          if (previousMin.includes(lowerBound) && previousMax.includes(upperBound)) {
            return searchParameters;
          }

          if (isFiniteNumber(lowerBound)) {
            clearedParams = clearedParams.addNumericRefinement(attribute, '>=', lowerBound);
          }

          if (isFiniteNumber(upperBound)) {
            clearedParams = clearedParams.addNumericRefinement(attribute, '<=', upperBound);
          }

          return clearedParams;
        }
      };
    };
  }

  var withUsage$b = createDocumentationMessageGenerator({
    name: 'refinement-list',
    connector: true
  });
  /**
   * @typedef {Object} RefinementListItem
   * @property {string} value The value of the refinement list item.
   * @property {string} label Human-readable value of the refinement list item.
   * @property {number} count Number of matched results after refinement is applied.
   * @property {boolean} isRefined Indicates if the list item is refined.
   */

  /**
   * @typedef {Object} CustomRefinementListWidgetOptions
   * @property {string} attribute The name of the attribute in the records.
   * @property {"and"|"or"} [operator = 'or'] How the filters are combined together.
   * @property {number} [limit = 10] The max number of items to display when
   * `showMoreLimit` is not set or if the widget is showing less value.
   * @property {boolean} [showMore = false] Whether to display a button that expands the number of items.
   * @property {number} [showMoreLimit = 20] The max number of items to display if the widget
   * is showing more items.
   * @property {string[]|function} [sortBy = ['isRefined', 'count:desc', 'name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   * @property {boolean} [escapeFacetValues = true] Escapes the content of the facet values.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} RefinementListRenderingOptions
   * @property {RefinementListItem[]} items The list of filtering values returned from Algolia API.
   * @property {function(item.value): string} createURL Creates the next state url for a selected refinement.
   * @property {function(item.value)} refine Action to apply selected refinements.
   * @property {function} searchForItems Searches for values inside the list.
   * @property {boolean} isFromSearch `true` if the values are from an index search.
   * @property {boolean} canRefine `true` if a refinement can be applied.
   * @property {boolean} canToggleShowMore `true` if the toggleShowMore button can be activated (enough items to display more or
   * already displaying more than `limit` items)
   * @property {Object} widgetParams All original `CustomRefinementListWidgetOptions` forwarded to the `renderFn`.
   * @property {boolean} isShowingMore True if the menu is displaying all the menu items.
   * @property {function} toggleShowMore Toggles the number of values displayed between `limit` and `showMoreLimit`.
   */

  /**
   * **RefinementList** connector provides the logic to build a custom widget that will let the
   * user filter the results based on the values of a specific facet.
   *
   * This connector provides a `toggleShowMore()` function to display more or less items and a `refine()`
   * function to select an item.
   * @type {Connector}
   * @param {function(RefinementListRenderingOptions, boolean)} renderFn Rendering function for the custom **RefinementList** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomRefinementListWidgetOptions)} Re-usable widget factory for a custom **RefinementList** widget.
   * @example
   * // custom `renderFn` to render the custom RefinementList widget
   * function renderFn(RefinementListRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     RefinementListRenderingOptions.widgetParams.containerNode
   *       .html('<ul></ul>')
   *   }
   *
   *     RefinementListRenderingOptions.widgetParams.containerNode
   *       .find('li[data-refine-value]')
   *       .each(function() { $(this).off('click'); });
   *
   *   if (RefinementListRenderingOptions.canRefine) {
   *     var list = RefinementListRenderingOptions.items.map(function(item) {
   *       return `
   *         <li data-refine-value="${item.value}">
   *           <input type="checkbox" value="${item.value}" ${item.isRefined ? 'checked' : ''} />
   *           <a href="${RefinementListRenderingOptions.createURL(item.value)}">
   *             ${item.label} (${item.count})
   *           </a>
   *         </li>
   *       `;
   *     });
   *
   *     RefinementListRenderingOptions.widgetParams.containerNode.find('ul').html(list);
   *     RefinementListRenderingOptions.widgetParams.containerNode
   *       .find('li[data-refine-value]')
   *       .each(function() {
   *         $(this).on('click', function(event) {
   *           event.stopPropagation();
   *           event.preventDefault();
   *
   *           RefinementListRenderingOptions.refine($(this).data('refine-value'));
   *         });
   *       });
   *   } else {
   *     RefinementListRenderingOptions.widgetParams.containerNode.find('ul').html('');
   *   }
   * }
   *
   * // connect `renderFn` to RefinementList logic
   * var customRefinementList = instantsearch.connectors.connectRefinementList(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customRefinementList({
   *     containerNode: $('#custom-refinement-list-container'),
   *     attribute: 'categories',
   *     limit: 10,
   *   })
   * );
   */

  function connectRefinementList(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$b());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          _widgetParams$operato = widgetParams.operator,
          operator = _widgetParams$operato === void 0 ? 'or' : _widgetParams$operato,
          _widgetParams$limit = widgetParams.limit,
          limit = _widgetParams$limit === void 0 ? 10 : _widgetParams$limit,
          _widgetParams$showMor = widgetParams.showMore,
          showMore = _widgetParams$showMor === void 0 ? false : _widgetParams$showMor,
          _widgetParams$showMor2 = widgetParams.showMoreLimit,
          showMoreLimit = _widgetParams$showMor2 === void 0 ? 20 : _widgetParams$showMor2,
          _widgetParams$sortBy = widgetParams.sortBy,
          sortBy = _widgetParams$sortBy === void 0 ? ['isRefined', 'count:desc', 'name:asc'] : _widgetParams$sortBy,
          _widgetParams$escapeF = widgetParams.escapeFacetValues,
          escapeFacetValues = _widgetParams$escapeF === void 0 ? true : _widgetParams$escapeF,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;

      if (!attribute) {
        throw new Error(withUsage$b('The `attribute` option is required.'));
      }

      if (!/^(and|or)$/.test(operator)) {
        throw new Error(withUsage$b("The `operator` must one of: `\"and\"`, `\"or\"` (got \"".concat(operator, "\").")));
      }

      if (showMore === true && showMoreLimit <= limit) {
        throw new Error(withUsage$b('`showMoreLimit` should be greater than `limit`.'));
      }

      var formatItems = function formatItems(_ref) {
        var label = _ref.name,
            item = _objectWithoutProperties(_ref, ["name"]);

        return _objectSpread({}, item, {
          label: label,
          value: label,
          highlighted: label
        });
      };

      var _render = function render(_ref2) {
        var items = _ref2.items,
            state = _ref2.state,
            createURL = _ref2.createURL,
            helperSpecializedSearchFacetValues = _ref2.helperSpecializedSearchFacetValues,
            refine = _ref2.refine,
            isFromSearch = _ref2.isFromSearch,
            isFirstSearch = _ref2.isFirstSearch,
            isShowingMore = _ref2.isShowingMore,
            toggleShowMore = _ref2.toggleShowMore,
            hasExhaustiveItems = _ref2.hasExhaustiveItems,
            instantSearchInstance = _ref2.instantSearchInstance;

        // Compute a specific createURL method able to link to any facet value state change
        var _createURL = function _createURL(facetValue) {
          return createURL(state.toggleRefinement(attribute, facetValue));
        }; // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
        // function


        var searchFacetValues = helperSpecializedSearchFacetValues && helperSpecializedSearchFacetValues(state, createURL, helperSpecializedSearchFacetValues, refine, instantSearchInstance);
        renderFn({
          createURL: _createURL,
          items: items,
          refine: refine,
          searchForItems: searchFacetValues,
          instantSearchInstance: instantSearchInstance,
          isFromSearch: isFromSearch,
          canRefine: isFromSearch || items.length > 0,
          widgetParams: widgetParams,
          isShowingMore: isShowingMore,
          canToggleShowMore: showMore && (isShowingMore || !hasExhaustiveItems),
          toggleShowMore: toggleShowMore,
          hasExhaustiveItems: hasExhaustiveItems
        }, isFirstSearch);
      };

      var lastResultsFromMainSearch;
      var searchForFacetValues;
      var refine;

      var createSearchForFacetValues = function createSearchForFacetValues(helper) {
        return function (state, createURL, helperSpecializedSearchFacetValues, toggleRefinement, instantSearchInstance) {
          return function (query) {
            if (query === '' && lastResultsFromMainSearch) {
              // render with previous data from the helper.
              _render({
                items: lastResultsFromMainSearch,
                state: state,
                createURL: createURL,
                helperSpecializedSearchFacetValues: helperSpecializedSearchFacetValues,
                refine: toggleRefinement,
                isFromSearch: false,
                isFirstSearch: false,
                instantSearchInstance: instantSearchInstance,
                hasExhaustiveItems: false // SFFV should not be used with show more

              });
            } else {
              var tags = {
                highlightPreTag: escapeFacetValues ? TAG_PLACEHOLDER.highlightPreTag : TAG_REPLACEMENT.highlightPreTag,
                highlightPostTag: escapeFacetValues ? TAG_PLACEHOLDER.highlightPostTag : TAG_REPLACEMENT.highlightPostTag
              };
              helper.searchForFacetValues(attribute, query, limit, tags).then(function (results) {
                var facetValues = escapeFacetValues ? escapeFacets(results.facetHits) : results.facetHits;
                var normalizedFacetValues = transformItems(facetValues.map(function (_ref3) {
                  var value = _ref3.value,
                      item = _objectWithoutProperties(_ref3, ["value"]);

                  return _objectSpread({}, item, {
                    value: value,
                    label: value
                  });
                }));

                _render({
                  items: normalizedFacetValues,
                  state: state,
                  createURL: createURL,
                  helperSpecializedSearchFacetValues: helperSpecializedSearchFacetValues,
                  refine: toggleRefinement,
                  isFromSearch: true,
                  isFirstSearch: false,
                  instantSearchInstance: instantSearchInstance,
                  hasExhaustiveItems: false // SFFV should not be used with show more

                });
              });
            }
          };
        };
      };

      return {
        isShowingMore: false,
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        toggleShowMore: function toggleShowMore() {},
        cachedToggleShowMore: function cachedToggleShowMore() {
          this.toggleShowMore();
        },
        createToggleShowMore: function createToggleShowMore(renderOptions) {
          var _this = this;

          return function () {
            _this.isShowingMore = !_this.isShowingMore;

            _this.render(renderOptions);
          };
        },
        getLimit: function getLimit() {
          return this.isShowingMore ? showMoreLimit : limit;
        },
        getConfiguration: function getConfiguration() {
          var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var widgetConfiguration = _defineProperty({}, operator === 'and' ? 'facets' : 'disjunctiveFacets', [attribute]);

          var currentMaxValuesPerFacet = configuration.maxValuesPerFacet || 0;
          widgetConfiguration.maxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
          return widgetConfiguration;
        },
        init: function init(_ref4) {
          var helper = _ref4.helper,
              createURL = _ref4.createURL,
              instantSearchInstance = _ref4.instantSearchInstance;
          this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this);

          refine = function refine(facetValue) {
            return helper.toggleRefinement(attribute, facetValue).search();
          };

          searchForFacetValues = createSearchForFacetValues(helper);

          _render({
            items: [],
            state: helper.state,
            createURL: createURL,
            helperSpecializedSearchFacetValues: searchForFacetValues,
            refine: refine,
            isFromSearch: false,
            isFirstSearch: true,
            instantSearchInstance: instantSearchInstance,
            isShowingMore: this.isShowingMore,
            toggleShowMore: this.cachedToggleShowMore,
            hasExhaustiveItems: true
          });
        },
        render: function render(renderOptions) {
          var results = renderOptions.results,
              state = renderOptions.state,
              createURL = renderOptions.createURL,
              instantSearchInstance = renderOptions.instantSearchInstance;
          var facetValues = results.getFacetValues(attribute, {
            sortBy: sortBy
          });
          var items = transformItems(facetValues.slice(0, this.getLimit()).map(formatItems));
          var maxValuesPerFacetConfig = state.getQueryParameter('maxValuesPerFacet');
          var currentLimit = this.getLimit(); // If the limit is the max number of facet retrieved it is impossible to know
          // if the facets are exhaustive. The only moment we are sure it is exhaustive
          // is when it is strictly under the number requested unless we know that another
          // widget has requested more values (maxValuesPerFacet > getLimit()).
          // Because this is used for making the search of facets unable or not, it is important
          // to be conservative here.

          var hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
          lastResultsFromMainSearch = items;
          this.toggleShowMore = this.createToggleShowMore(renderOptions);

          _render({
            items: items,
            state: state,
            createURL: createURL,
            helperSpecializedSearchFacetValues: searchForFacetValues,
            refine: refine,
            isFromSearch: false,
            isFirstSearch: false,
            instantSearchInstance: instantSearchInstance,
            isShowingMore: this.isShowingMore,
            toggleShowMore: this.cachedToggleShowMore,
            hasExhaustiveItems: hasExhaustiveItems
          });
        },
        dispose: function dispose(_ref5) {
          var state = _ref5.state;
          unmountFn();

          if (operator === 'and') {
            return state.removeFacetRefinement(attribute).removeFacet(attribute);
          } else {
            return state.removeDisjunctiveFacetRefinement(attribute).removeDisjunctiveFacet(attribute);
          }
        },
        getWidgetState: function getWidgetState(uiState, _ref6) {
          var searchParameters = _ref6.searchParameters;
          var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);

          if (values.length === 0 || uiState.refinementList && isEqual(values, uiState.refinementList[attribute])) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            refinementList: _objectSpread({}, uiState.refinementList, _defineProperty({}, attribute, values))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref7) {
          var uiState = _ref7.uiState;
          var values = uiState.refinementList && uiState.refinementList[attribute];
          if (values === undefined) return searchParameters;
          return values.reduce(function (sp, v) {
            return operator === 'or' ? sp.addDisjunctiveFacetRefinement(attribute, v) : sp.addFacetRefinement(attribute, v);
          }, searchParameters.clearRefinements(attribute));
        }
      };
    };
  }

  var withUsage$c = createDocumentationMessageGenerator({
    name: 'search-box',
    connector: true
  });
  /**
   * @typedef {Object} CustomSearchBoxWidgetOptions
   * @property {function(string, function(string))} [queryHook = undefined] A function that will be called every time
   * a new value for the query is set. The first parameter is the query and the second is a
   * function to actually trigger the search. The function takes the query as the parameter.
   *
   * This queryHook can be used to debounce the number of searches done from the searchBox.
   */

  /**
   * @typedef {Object} SearchBoxRenderingOptions
   * @property {string} query The query from the last search.
   * @property {function(string)} refine Sets a new query and searches.
   * @property {function()} clear Remove the query and perform search.
   * @property {Object} widgetParams All original `CustomSearchBoxWidgetOptions` forwarded to the `renderFn`.
   * @property {boolean} isSearchStalled `true` if the search results takes more than a certain time to come back
   * from Algolia servers. This can be configured on the InstantSearch constructor with the attribute
   * `stalledSearchDelay` which is 200ms, by default.
   */

  /**
   * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
   *
   * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
   * may be impacted by the `queryHook` widget parameter.
   * @type {Connector}
   * @param {function(SearchBoxRenderingOptions, boolean)} renderFn Rendering function for the custom **SearchBox** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomSearchBoxWidgetOptions)} Re-usable widget factory for a custom **SearchBox** widget.
   * @example
   * // custom `renderFn` to render the custom SearchBox widget
   * function renderFn(SearchBoxRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     SearchBoxRenderingOptions.widgetParams.containerNode.html('<input type="text" />');
   *     SearchBoxRenderingOptions.widgetParams.containerNode
   *       .find('input')
   *       .on('keyup', function() {
   *         SearchBoxRenderingOptions.refine($(this).val());
   *       });
   *     SearchBoxRenderingOptions.widgetParams.containerNode
   *       .find('input')
   *       .val(SearchBoxRenderingOptions.query);
   *   }
   * }
   *
   * // connect `renderFn` to SearchBox logic
   * var customSearchBox = instantsearch.connectors.connectSearchBox(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customSearchBox({
   *     containerNode: $('#custom-searchbox'),
   *   })
   * );
   */

  function connectSearchBox(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$c());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryHook = widgetParams.queryHook;

      function clear(helper) {
        return function () {
          helper.setQuery('');
          helper.search();
        };
      }

      return {
        _clear: function _clear() {},
        _cachedClear: function _cachedClear() {
          this._clear();
        },
        init: function init(_ref) {
          var helper = _ref.helper,
              instantSearchInstance = _ref.instantSearchInstance;
          this._cachedClear = this._cachedClear.bind(this);
          this._clear = clear(helper);

          this._refine = function () {
            var previousQuery;

            var setQueryAndSearch = function setQueryAndSearch(q) {
              var doSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              if (q !== helper.state.query) {
                previousQuery = helper.state.query;
                helper.setQuery(q);
              }

              if (doSearch && previousQuery !== undefined && previousQuery !== q) helper.search();
            };

            return queryHook ? function (q) {
              return queryHook(q, setQueryAndSearch);
            } : setQueryAndSearch;
          }();

          renderFn({
            query: helper.state.query,
            refine: this._refine,
            clear: this._cachedClear,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, true);
        },
        render: function render(_ref2) {
          var helper = _ref2.helper,
              instantSearchInstance = _ref2.instantSearchInstance,
              searchMetadata = _ref2.searchMetadata;
          this._clear = clear(helper);
          renderFn({
            query: helper.state.query,
            refine: this._refine,
            clear: this._cachedClear,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance,
            isSearchStalled: searchMetadata.isSearchStalled
          }, false);
        },
        dispose: function dispose(_ref3) {
          var state = _ref3.state;
          unmountFn();
          return state.setQuery('');
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var query = searchParameters.query;

          if (query === '' || uiState && uiState.query === query) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            query: query
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          return searchParameters.setQuery(uiState.query || '');
        }
      };
    };
  }

  var withUsage$d = createDocumentationMessageGenerator({
    name: 'sort-by',
    connector: true
  });
  /**
   * @typedef {Object} SortByItem
   * @property {string} value The name of the index to target.
   * @property {string} label The label of the index to display.
   */

  /**
   * @typedef {Object} CustomSortByWidgetOptions
   * @property {SortByItem[]} items Array of objects defining the different indices to choose from.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} SortByRenderingOptions
   * @property {string} currentRefinement The currently selected index.
   * @property {SortByItem[]} options All the available indices
   * @property {function(string)} refine Switches indices and triggers a new search.
   * @property {boolean} hasNoResults `true` if the last search contains no result.
   * @property {Object} widgetParams All original `CustomSortByWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * The **SortBy** connector provides the logic to build a custom widget that will display a
   * list of indices. With Algolia, this is most commonly used for changing ranking strategy. This allows
   * a user to change how the hits are being sorted.
   *
   * This connector provides the `refine` function that allows to switch indices.
   * The connector provides to the rendering: `refine()` to switch the current index and
   * `options` that are the values that can be selected. `refine` should be used
   * with `options.value`.
   * @type {Connector}
   * @param {function(SortByRenderingOptions, boolean)} renderFn Rendering function for the custom **SortBy** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomSortByWidgetOptions)} Re-usable widget factory for a custom **SortBy** widget.
   * @example
   * // custom `renderFn` to render the custom SortBy widget
   * function renderFn(SortByRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     SortByRenderingOptions.widgetParams.containerNode.html('<select></select>');
   *     SortByRenderingOptions.widgetParams.containerNode
   *       .find('select')
   *       .on('change', function(event) {
   *         SortByRenderingOptions.refine(event.target.value);
   *       });
   *   }
   *
   *   var optionsHTML = SortByRenderingOptions.options.map(function(option) {
   *     return `
   *       <option
   *         value="${option.value}"
   *         ${SortByRenderingOptions.currentRefinement === option.value ? 'selected' : ''}
   *       >
   *         ${option.label}
   *       </option>
   *     `;
   *   });
   *
   *   SortByRenderingOptions.widgetParams.containerNode
   *     .find('select')
   *     .html(optionsHTML);
   * }
   *
   * // connect `renderFn` to SortBy logic
   * var customSortBy = instantsearch.connectors.connectSortBy(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customSortBy({
   *     containerNode: $('#custom-sort-by-container'),
   *     items: [
   *       { value: 'instant_search', label: 'Most relevant' },
   *       { value: 'instant_search_price_asc', label: 'Lowest price' },
   *       { value: 'instant_search_price_desc', label: 'Highest price' },
   *     ],
   *   })
   * );
   */

  function connectSortBy(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$d());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var items = widgetParams.items,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (x) {
        return x;
      } : _widgetParams$transfo;

      if (!Array.isArray(items)) {
        throw new Error(withUsage$d('The `items` option expects an array of objects.'));
      }

      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              instantSearchInstance = _ref.instantSearchInstance;
          var currentIndex = helper.getIndex();
          var isIndexInList = find$1(items, function (item) {
            return item.value === currentIndex;
          });

          if (!isIndexInList) {
            throw new Error("[sortBy]: Index ".concat(currentIndex, " not present in `items`"));
          }

          this.initialIndex = instantSearchInstance.indexName;

          this.setIndex = function (indexName) {
            return helper.setIndex(indexName).search();
          };

          renderFn({
            currentRefinement: currentIndex,
            options: transformItems(items),
            refine: this.setIndex,
            hasNoResults: true,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, true);
        },
        render: function render(_ref2) {
          var helper = _ref2.helper,
              results = _ref2.results,
              instantSearchInstance = _ref2.instantSearchInstance;
          renderFn({
            currentRefinement: helper.getIndex(),
            options: transformItems(items),
            refine: this.setIndex,
            hasNoResults: results.nbHits === 0,
            widgetParams: widgetParams,
            instantSearchInstance: instantSearchInstance
          }, false);
        },
        dispose: function dispose(_ref3) {
          var state = _ref3.state;
          unmountFn();
          return state.setIndex(this.initialIndex);
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;
          var currentIndex = searchParameters.getQueryParameter('index');
          var isInitialIndex = currentIndex === this.initialIndex;

          if (isInitialIndex || uiState && uiState.sortBy === currentIndex) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            sortBy: searchParameters.getQueryParameter('index')
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          return searchParameters.setQueryParameter('index', uiState.sortBy || this.initialIndex);
        }
      };
    };
  }

  var withUsage$e = createDocumentationMessageGenerator({
    name: 'rating-menu',
    connector: true
  });
  /**
   * @typedef {Object} StarRatingItems
   * @property {string} name Name corresponding to the number of stars.
   * @property {string} value Number of stars as string.
   * @property {number} count Count of matched results corresponding to the number of stars.
   * @property {boolean[]} stars Array of length of maximum rating value with stars to display or not.
   * @property {boolean} isRefined Indicates if star rating refinement is applied.
   */

  /**
   * @typedef {Object} CustomStarRatingWidgetOptions
   * @property {string} attribute Name of the attribute for faceting (eg. "free_shipping").
   * @property {number} [max = 5] The maximum rating value.
   */

  /**
   * @typedef {Object} StarRatingRenderingOptions
   * @property {StarRatingItems[]} items Possible star ratings the user can apply.
   * @property {function(string): string} createURL Creates an URL for the next
   * state (takes the item value as parameter). Takes the value of an item as parameter.
   * @property {function(string)} refine Selects a rating to filter the results
   * (takes the filter value as parameter). Takes the value of an item as parameter.
   * @property {boolean} hasNoResults `true` if the last search contains no result.
   * @property {Object} widgetParams All original `CustomStarRatingWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **StarRating** connector provides the logic to build a custom widget that will let
   * the user refine search results based on ratings.
   *
   * The connector provides to the rendering: `refine()` to select a value and
   * `items` that are the values that can be selected. `refine` should be used
   * with `items.value`.
   * @type {Connector}
   * @param {function(StarRatingRenderingOptions, boolean)} renderFn Rendering function for the custom **StarRating** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomStarRatingWidgetOptions)} Re-usable widget factory for a custom **StarRating** widget.
   * @example
   * // custom `renderFn` to render the custom StarRating widget
   * function renderFn(StarRatingRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) {
   *     StarRatingRenderingOptions.widgetParams.containerNode.html('<ul></ul>');
   *   }
   *
   *   StarRatingRenderingOptions.widgetParams.containerNode
   *     .find('li[data-refine-value]')
   *     .each(function() { $(this).off('click'); });
   *
   *   var listHTML = StarRatingRenderingOptions.items.map(function(item) {
   *     return '<li data-refine-value="' + item.value + '">' +
   *       '<a href="' + StarRatingRenderingOptions.createURL(item.value) + '">' +
   *       item.stars.map(function(star) { return star === false ? '☆' : '★'; }).join(' ') +
   *       '& up (' + item.count + ')' +
   *       '</a></li>';
   *   });
   *
   *   StarRatingRenderingOptions.widgetParams.containerNode
   *     .find('ul')
   *     .html(listHTML);
   *
   *   StarRatingRenderingOptions.widgetParams.containerNode
   *     .find('li[data-refine-value]')
   *     .each(function() {
   *       $(this).on('click', function(event) {
   *         event.preventDefault();
   *         event.stopPropagation();
   *
   *         StarRatingRenderingOptions.refine($(this).data('refine-value'));
   *       });
   *     });
   * }
   *
   * // connect `renderFn` to StarRating logic
   * var customStarRating = instantsearch.connectors.connectRatingMenu(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customStarRating({
   *     containerNode: $('#custom-rating-menu-container'),
   *     attribute: 'rating',
   *     max: 5,
   *   })
   * );
   */

  function connectRatingMenu(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$e());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          _widgetParams$max = widgetParams.max,
          max = _widgetParams$max === void 0 ? 5 : _widgetParams$max;

      if (!attribute) {
        throw new Error(withUsage$e('The `attribute` option is required.'));
      }

      return {
        getConfiguration: function getConfiguration() {
          return {
            disjunctiveFacets: [attribute]
          };
        },
        init: function init(_ref) {
          var helper = _ref.helper,
              createURL = _ref.createURL,
              instantSearchInstance = _ref.instantSearchInstance;
          this._toggleRefinement = this._toggleRefinement.bind(this, helper);

          this._createURL = function (state) {
            return function (facetValue) {
              return createURL(state.toggleRefinement(attribute, facetValue));
            };
          };

          renderFn({
            instantSearchInstance: instantSearchInstance,
            items: [],
            hasNoResults: true,
            refine: this._toggleRefinement,
            createURL: this._createURL(helper.state),
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref2) {
          var helper = _ref2.helper,
              results = _ref2.results,
              state = _ref2.state,
              instantSearchInstance = _ref2.instantSearchInstance;
          var facetValues = [];
          var allValues = {};

          for (var v = max; v >= 0; --v) {
            allValues[v] = 0;
          }

          results.getFacetValues(attribute).forEach(function (facet) {
            var val = Math.round(facet.name);

            if (!val || val > max) {
              return;
            }

            for (var _v = val; _v >= 1; --_v) {
              allValues[_v] += facet.count;
            }
          });

          var refinedStar = this._getRefinedStar(helper.state);

          for (var star = max - 1; star >= 1; --star) {
            var count = allValues[star];

            if (refinedStar && star !== refinedStar && count === 0) {
              // skip count==0 when at least 1 refinement is enabled
              // eslint-disable-next-line no-continue
              continue;
            }

            var stars = [];

            for (var i = 1; i <= max; ++i) {
              stars.push(i <= star);
            }

            facetValues.push({
              stars: stars,
              name: String(star),
              value: String(star),
              count: count,
              isRefined: refinedStar === star
            });
          }

          renderFn({
            instantSearchInstance: instantSearchInstance,
            items: facetValues,
            hasNoResults: results.nbHits === 0,
            refine: this._toggleRefinement,
            createURL: this._createURL(state),
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose(_ref3) {
          var state = _ref3.state;
          unmountFn();
          var nextState = state.removeDisjunctiveFacetRefinement(attribute).removeDisjunctiveFacet(attribute);
          return nextState;
        },
        getWidgetState: function getWidgetState(uiState, _ref4) {
          var searchParameters = _ref4.searchParameters;

          var refinedStar = this._getRefinedStar(searchParameters);

          if (refinedStar === undefined || uiState && uiState.ratingMenu && uiState.ratingMenu[attribute] === refinedStar) return uiState;
          return _objectSpread({}, uiState, {
            ratingMenu: _objectSpread({}, uiState.ratingMenu, _defineProperty({}, attribute, refinedStar))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
          var uiState = _ref5.uiState;
          var starRatingFromURL = uiState.ratingMenu && uiState.ratingMenu[attribute];

          var refinedStar = this._getRefinedStar(searchParameters);

          if (starRatingFromURL === refinedStar) return searchParameters;
          var clearedSearchParam = searchParameters.clearRefinements(attribute);

          if (starRatingFromURL !== undefined) {
            for (var val = Number(starRatingFromURL); val <= max; ++val) {
              clearedSearchParam = clearedSearchParam.addDisjunctiveFacetRefinement(attribute, val);
            }
          }

          return clearedSearchParam;
        },
        _toggleRefinement: function _toggleRefinement(helper, facetValue) {
          var isRefined = this._getRefinedStar(helper.state) === Number(facetValue);
          helper.clearRefinements(attribute);

          if (!isRefined) {
            for (var val = Number(facetValue); val <= max; ++val) {
              helper.addDisjunctiveFacetRefinement(attribute, val);
            }
          }

          helper.search();
        },
        _getRefinedStar: function _getRefinedStar(searchParameters) {
          var refinedStar = undefined;
          var refinements = searchParameters.getDisjunctiveRefinements(attribute);
          refinements.forEach(function (r) {
            if (!refinedStar || Number(r) < refinedStar) {
              refinedStar = Number(r);
            }
          });
          return refinedStar;
        }
      };
    };
  }

  var withUsage$f = createDocumentationMessageGenerator({
    name: 'stats',
    connector: true
  });
  /**
   * @typedef {Object} StatsRenderingOptions
   * @property {number} hitsPerPage The maximum number of hits per page returned by Algolia.
   * @property {number} nbHits The number of hits in the result set.
   * @property {number} nbPages The number of pages computed for the result set.
   * @property {number} page The current page.
   * @property {number} processingTimeMS The time taken to compute the results inside the Algolia engine.
   * @property {string} query The query used for the current search.
   * @property {object} widgetParams All original `CustomStatsWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **Stats** connector provides the logic to build a custom widget that will displays
   * search statistics (hits number and processing time).
   *
   * @type {Connector}
   * @param {function(StatsRenderingOptions, boolean)} renderFn Rendering function for the custom **Stats** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function} Re-usable widget factory for a custom **Stats** widget.
   * @example
   * // custom `renderFn` to render the custom Stats widget
   * function renderFn(StatsRenderingOptions, isFirstRendering) {
   *   if (isFirstRendering) return;
   *
   *   StatsRenderingOptions.widgetParams.containerNode
   *     .html(StatsRenderingOptions.nbHits + ' results found in ' + StatsRenderingOptions.processingTimeMS);
   * }
   *
   * // connect `renderFn` to Stats logic
   * var customStatsWidget = instantsearch.connectors.connectStats(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customStatsWidget({
   *     containerNode: $('#custom-stats-container'),
   *   })
   * );
   */

  function connectStats(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$f());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        init: function init(_ref) {
          var helper = _ref.helper,
              instantSearchInstance = _ref.instantSearchInstance;
          renderFn({
            instantSearchInstance: instantSearchInstance,
            hitsPerPage: helper.state.hitsPerPage,
            nbHits: 0,
            nbPages: 0,
            page: helper.state.page,
            processingTimeMS: -1,
            query: helper.state.query,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref2) {
          var results = _ref2.results,
              instantSearchInstance = _ref2.instantSearchInstance;
          renderFn({
            instantSearchInstance: instantSearchInstance,
            hitsPerPage: results.hitsPerPage,
            nbHits: results.nbHits,
            nbPages: results.nbPages,
            page: results.page,
            processingTimeMS: results.processingTimeMS,
            query: results.query,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  var withUsage$g = createDocumentationMessageGenerator({
    name: 'toggle-refinement',
    connector: true
  });
  /**
   * @typedef {Object} ToggleValue
   * @property {boolean} isRefined `true` if the toggle is on.
   * @property {number} count Number of results matched after applying the toggle refinement.
   * @property {Object} onFacetValue Value of the toggle when it's on.
   * @property {Object} offFacetValue Value of the toggle when it's off.
   */

  /**
   * @typedef {Object} CustomToggleWidgetOptions
   * @property {string} attribute Name of the attribute for faceting (eg. "free_shipping").
   * @property {Object} [on = true] Value to filter on when toggled.
   * @property {Object} [off] Value to filter on when not toggled.
   */

  /**
   * @typedef {Object} ToggleRenderingOptions
   * @property {ToggleValue} value The current toggle value.
   * @property {function():string} createURL Creates an URL for the next state.
   * @property {function(value)} refine Updates to the next state by applying the toggle refinement.
   * @property {Object} widgetParams All original `CustomToggleWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **Toggle** connector provides the logic to build a custom widget that will provide
   * an on/off filtering feature based on an attribute value or values.
   *
   * Two modes are implemented in the custom widget:
   *  - with or without the value filtered
   *  - switch between two values.
   *
   * @type {Connector}
   * @param {function(ToggleRenderingOptions, boolean)} renderFn Rendering function for the custom **Toggle** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomToggleWidgetOptions)} Re-usable widget factory for a custom **Toggle** widget.
   * @example
   * // custom `renderFn` to render the custom ClearAll widget
   * function renderFn(ToggleRenderingOptions, isFirstRendering) {
   *   ToggleRenderingOptions.widgetParams.containerNode
   *     .find('a')
   *     .off('click');
   *
   *   var buttonHTML = `
   *     <a href="${ToggleRenderingOptions.createURL()}">
   *       <input
   *         type="checkbox"
   *         value="${ToggleRenderingOptions.value.name}"
   *         ${ToggleRenderingOptions.value.isRefined ? 'checked' : ''}
   *       />
   *       ${ToggleRenderingOptions.value.name} (${ToggleRenderingOptions.value.count})
   *     </a>
   *   `;
   *
   *   ToggleRenderingOptions.widgetParams.containerNode.html(buttonHTML);
   *   ToggleRenderingOptions.widgetParams.containerNode
   *     .find('a')
   *     .on('click', function(event) {
   *       event.preventDefault();
   *       event.stopPropagation();
   *
   *       ToggleRenderingOptions.refine(ToggleRenderingOptions.value);
   *     });
   * }
   *
   * // connect `renderFn` to Toggle logic
   * var customToggle = instantsearch.connectors.connectToggleRefinement(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customToggle({
   *     containerNode: $('#custom-toggle-container'),
   *     attribute: 'free_shipping',
   *   })
   * );
   */

  function connectToggleRefinement(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$g());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute = widgetParams.attribute,
          _widgetParams$on = widgetParams.on,
          userOn = _widgetParams$on === void 0 ? true : _widgetParams$on,
          userOff = widgetParams.off;

      if (!attribute) {
        throw new Error(withUsage$g('The `attribute` option is required.'));
      }

      var hasAnOffValue = userOff !== undefined;
      var hasAnOnValue = userOn !== undefined;
      var on = hasAnOnValue ? escapeRefinement(userOn) : undefined;
      var off = hasAnOffValue ? escapeRefinement(userOff) : undefined;
      return {
        getConfiguration: function getConfiguration() {
          return {
            disjunctiveFacets: [attribute]
          };
        },
        _toggleRefinement: function _toggleRefinement(helper) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              isRefined = _ref.isRefined;

          // Checking
          if (!isRefined) {
            if (hasAnOffValue) {
              helper.removeDisjunctiveFacetRefinement(attribute, off);
            }

            helper.addDisjunctiveFacetRefinement(attribute, on);
          } else {
            // Unchecking
            helper.removeDisjunctiveFacetRefinement(attribute, on);

            if (hasAnOffValue) {
              helper.addDisjunctiveFacetRefinement(attribute, off);
            }
          }

          helper.search();
        },
        init: function init(_ref2) {
          var _this = this;

          var state = _ref2.state,
              helper = _ref2.helper,
              createURL = _ref2.createURL,
              instantSearchInstance = _ref2.instantSearchInstance;

          this._createURL = function (isCurrentlyRefined) {
            return function () {
              return createURL(state.removeDisjunctiveFacetRefinement(attribute, isCurrentlyRefined ? on : off).addDisjunctiveFacetRefinement(attribute, isCurrentlyRefined ? off : on));
            };
          };

          this.toggleRefinement = function (opts) {
            _this._toggleRefinement(helper, opts);
          };

          var isRefined = state.isDisjunctiveFacetRefined(attribute, on); // no need to refine anything at init if no custom off values

          if (hasAnOffValue) {
            // Add filtering on the 'off' value if set
            if (!isRefined) {
              var currentPage = helper.getPage();
              helper.addDisjunctiveFacetRefinement(attribute, off).setPage(currentPage);
            }
          }

          var onFacetValue = {
            isRefined: isRefined,
            count: 0
          };
          var offFacetValue = {
            isRefined: hasAnOffValue && !isRefined,
            count: 0
          };
          var value = {
            name: attribute,
            isRefined: isRefined,
            count: null,
            onFacetValue: onFacetValue,
            offFacetValue: offFacetValue
          };
          renderFn({
            value: value,
            createURL: this._createURL(value.isRefined),
            refine: this.toggleRefinement,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref3) {
          var helper = _ref3.helper,
              results = _ref3.results,
              state = _ref3.state,
              instantSearchInstance = _ref3.instantSearchInstance;
          var isRefined = helper.state.isDisjunctiveFacetRefined(attribute, on);
          var offValue = off === undefined ? false : off;
          var allFacetValues = results.getFacetValues(attribute);
          var onData = find$1(allFacetValues, function (_ref4) {
            var name = _ref4.name;
            return name === unescapeRefinement(on);
          });
          var onFacetValue = {
            isRefined: onData !== undefined ? onData.isRefined : false,
            count: onData === undefined ? null : onData.count
          };
          var offData = hasAnOffValue ? find$1(allFacetValues, function (_ref5) {
            var name = _ref5.name;
            return name === unescapeRefinement(offValue);
          }) : undefined;
          var offFacetValue = {
            isRefined: offData !== undefined ? offData.isRefined : false,
            count: offData === undefined ? allFacetValues.reduce(function (total, _ref6) {
              var count = _ref6.count;
              return total + count;
            }, 0) : offData.count
          }; // what will we show by default,
          // if checkbox is not checked, show: [ ] free shipping (countWhenChecked)
          // if checkbox is checked, show: [x] free shipping (countWhenNotChecked)

          var nextRefinement = isRefined ? offFacetValue : onFacetValue;
          var value = {
            name: attribute,
            isRefined: isRefined,
            count: nextRefinement === undefined ? null : nextRefinement.count,
            onFacetValue: onFacetValue,
            offFacetValue: offFacetValue
          };
          renderFn({
            value: value,
            state: state,
            createURL: this._createURL(value.isRefined),
            refine: this.toggleRefinement,
            helper: helper,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose(_ref7) {
          var state = _ref7.state;
          unmountFn();
          var nextState = state.removeDisjunctiveFacetRefinement(attribute).removeDisjunctiveFacet(attribute);
          return nextState;
        },
        getWidgetState: function getWidgetState(uiState, _ref8) {
          var searchParameters = _ref8.searchParameters;
          var isRefined = searchParameters.isDisjunctiveFacetRefined(attribute, on);

          if (!isRefined || uiState && uiState.toggle && uiState.toggle[attribute] === isRefined) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            toggle: _objectSpread({}, uiState.toggle, _defineProperty({}, attribute, isRefined))
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref9) {
          var uiState = _ref9.uiState;
          var isRefined = Boolean(uiState.toggle && uiState.toggle[attribute]);

          if (isRefined) {
            if (hasAnOffValue) return searchParameters.removeDisjunctiveFacetRefinement(attribute, off).addDisjunctiveFacetRefinement(attribute, on);
            return searchParameters.addDisjunctiveFacetRefinement(attribute, on);
          }

          if (hasAnOffValue) return searchParameters.removeDisjunctiveFacetRefinement(attribute, on).addDisjunctiveFacetRefinement(attribute, off);
          return searchParameters.removeDisjunctiveFacetRefinement(attribute, on);
        }
      };
    };
  }

  var withUsage$h = createDocumentationMessageGenerator({
    name: 'breadcrumb',
    connector: true
  });
  /**
   * @typedef {Object} BreadcrumbItem
   * @property {string} label Label of the category or subcategory.
   * @property {string} value Value of breadcrumb item.
   */

  /**
   * @typedef {Object} CustomBreadcrumbWidgetOptions
   * @property {string[]} attributes Attributes to use to generate the hierarchy of the breadcrumb.
   * @property {string} [rootPath = null] Prefix path to use if the first level is not the root level.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   */

  /**
   * @typedef {Object} BreadcrumbRenderingOptions
   * @property {function(item.value): string} createURL Creates an url for the next state for a clicked item. The special value `null` is used for the `Home` (or root) item of the breadcrumb and will return an empty array.
   * @property {BreadcrumbItem[]} items Values to be rendered.
   * @property {function(item.value)} refine Sets the path of the hierarchical filter and triggers a new search.
   * @property {Object} widgetParams All original `CustomBreadcrumbWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **Breadcrumb** connector provides the logic to build a custom widget
   * that will give the user the ability to see the current path in a hierarchical facet.
   *
   * This is commonly used in websites that have a large amount of content organized in a hierarchical manner (usually e-commerce websites).
   * @type {Connector}
   * @param {function(BreadcrumbRenderingOptions, boolean)} renderFn Rendering function for the custom **Breadcrumb* widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomBreadcrumbWidgetOptions)} Re-usable widget factory for a custom **Breadcrumb** widget.
   */

  function connectBreadcrumb(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$h());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attributes = widgetParams.attributes,
          _widgetParams$separat = widgetParams.separator,
          separator = _widgetParams$separat === void 0 ? ' > ' : _widgetParams$separat,
          _widgetParams$rootPat = widgetParams.rootPath,
          rootPath = _widgetParams$rootPat === void 0 ? null : _widgetParams$rootPat,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo;

      if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
        throw new Error(withUsage$h('The `attributes` option expects an array of strings.'));
      }

      var _attributes = _slicedToArray(attributes, 1),
          hierarchicalFacetName = _attributes[0];

      return {
        getConfiguration: function getConfiguration(currentConfiguration) {
          if (currentConfiguration.hierarchicalFacets) {
            var isFacetSet = find$1(currentConfiguration.hierarchicalFacets, function (_ref) {
              var name = _ref.name;
              return name === hierarchicalFacetName;
            });

            if (isFacetSet) {
              _warning(isEqual(isFacetSet.attributes, attributes) && isFacetSet.separator === separator, 'Using Breadcrumb and HierarchicalMenu on the same facet with different options overrides the configuration of the HierarchicalMenu.');
              return {};
            }
          }

          return {
            hierarchicalFacets: [{
              attributes: attributes,
              name: hierarchicalFacetName,
              separator: separator,
              rootPath: rootPath
            }]
          };
        },
        init: function init(_ref2) {
          var createURL = _ref2.createURL,
              helper = _ref2.helper,
              instantSearchInstance = _ref2.instantSearchInstance;

          this._createURL = function (facetValue) {
            if (!facetValue) {
              var breadcrumb = helper.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);

              if (breadcrumb.length > 0) {
                return createURL(helper.state.toggleRefinement(hierarchicalFacetName, breadcrumb[0]));
              }
            }

            return createURL(helper.state.toggleRefinement(hierarchicalFacetName, facetValue));
          };

          this._refine = function (facetValue) {
            if (!facetValue) {
              var breadcrumb = helper.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);

              if (breadcrumb.length > 0) {
                helper.toggleRefinement(hierarchicalFacetName, breadcrumb[0]).search();
              }
            } else {
              helper.toggleRefinement(hierarchicalFacetName, facetValue).search();
            }
          };

          renderFn({
            createURL: this._createURL,
            canRefine: false,
            instantSearchInstance: instantSearchInstance,
            items: [],
            refine: this._refine,
            widgetParams: widgetParams
          }, true);
        },
        render: function render(_ref3) {
          var instantSearchInstance = _ref3.instantSearchInstance,
              results = _ref3.results,
              state = _ref3.state;

          var _state$hierarchicalFa = _slicedToArray(state.hierarchicalFacets, 1),
              facetName = _state$hierarchicalFa[0].name;

          var facetValues = results.getFacetValues(facetName);
          var data = Array.isArray(facetValues.data) ? facetValues.data : [];
          var items = transformItems(shiftItemsValues(prepareItems(data)));
          renderFn({
            canRefine: items.length > 0,
            createURL: this._createURL,
            instantSearchInstance: instantSearchInstance,
            items: items,
            refine: this._refine,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  function prepareItems(data) {
    return data.reduce(function (result, currentItem) {
      if (currentItem.isRefined) {
        result.push({
          label: currentItem.name,
          value: currentItem.path
        });

        if (Array.isArray(currentItem.data)) {
          result = result.concat(prepareItems(currentItem.data));
        }
      }

      return result;
    }, []);
  }

  function shiftItemsValues(array) {
    return array.map(function (x, idx) {
      return {
        label: x.label,
        value: idx + 1 === array.length ? null : array[idx + 1].value
      };
    });
  }

  var withUsage$i = createDocumentationMessageGenerator({
    name: 'geo-search',
    connector: true
  });
  /**
   * @typedef {Object} LatLng
   * @property {number} lat The latitude in degrees.
   * @property {number} lng The longitude in degrees.
   */

  /**
   * @typedef {Object} Bounds
   * @property {LatLng} northEast The top right corner of the map view.
   * @property {LatLng} southWest The bottom left corner of the map view.
   */

  /**
   * @typedef {Object} CustomGeoSearchWidgetOptions
   * @property {boolean} [enableRefineOnMapMove=true] If true, refine will be triggered as you move the map.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * @typedef {Object} GeoSearchRenderingOptions
   * @property {Object[]} items The matched hits from Algolia API.
   * @property {LatLng} position The current position of the search.
   * @property {Bounds} currentRefinement The current bounding box of the search.
   * @property {function(Bounds)} refine Sets a bounding box to filter the results from the given map bounds.
   * @property {function()} clearMapRefinement Reset the current bounding box refinement.
   * @property {function(): boolean} isRefinedWithMap Return true if the current refinement is set with the map bounds.
   * @property {function()} toggleRefineOnMapMove Toggle the fact that the user is able to refine on map move.
   * @property {function(): boolean} isRefineOnMapMove Return true if the user is able to refine on map move.
   * @property {function()} setMapMoveSinceLastRefine Set the fact that the map has moved since the last refinement, should be call on each map move. The call to the function triggers a new rendering only when the value change.
   * @property {function(): boolean} hasMapMoveSinceLastRefine Return true if the map has move since the last refinement.
   * @property {Object} widgetParams All original `CustomGeoSearchWidgetOptions` forwarded to the `renderFn`.
   * @property {LatLng} [position] The current position of the search.
   */

  /**
   * The **GeoSearch** connector provides the logic to build a widget that will display the results on a map. It also provides a way to search for results based on their position. The connector provides functions to manage the search experience (search on map interaction or control the interaction for example).
   *
   * @requirements
   *
   * Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function.
   *
   * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
   *
   * @type {Connector}
   * @param {function(GeoSearchRenderingOptions, boolean)} renderFn Rendering function for the custom **GeoSearch** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomGeoSearchWidgetOptions)} Re-usable widget factory for a custom **GeoSearch** widget.
   * @staticExample
   * // This example use Leaflet for the rendering, be sure to have the library correctly setup
   * // before trying the demo. You can find more details in their documentation (link below).
   * // We choose Leaflet for the example but you can use any libraries that you want.
   * // See: http://leafletjs.com/examples/quick-start
   *
   * let map = null;
   * let markers = [];
   *
   * // custom `renderFn` to render the custom GeoSearch widget
   * function renderFn(GeoSearchRenderingOptions, isFirstRendering) {
   *   const { items, widgetParams } = GeoSearchRenderingOptions;
   *
   *   if (isFirstRendering) {
   *     map = L.map(widgetParams.container);
   *
   *     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   *       attribution:
   *         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
   *     }).addTo(map);
   *   }
   *
   *   markers.forEach(marker => marker.remove());
   *
   *   markers = items.map(({ _geoloc }) =>
   *     L.marker([_geoloc.lat, _geoloc.lng]).addTo(map)
   *   );
   *
   *   if (markers.length) {
   *     map.fitBounds(L.featureGroup(markers).getBounds());
   *   }
   * }
   *
   * // connect `renderFn` to GeoSearch logic
   * const customGeoSearch = instantsearch.connectors.connectGeoSearch(renderFn);
   *
   * // mount widget on the page
   * search.addWidget(
   *   customGeoSearch({
   *     container: document.getElementById('custom-geo-search'),
   *   })
   * );
   */

  var connectGeoSearch = function connectGeoSearch(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$i());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _widgetParams$enableR = widgetParams.enableRefineOnMapMove,
          enableRefineOnMapMove = _widgetParams$enableR === void 0 ? true : _widgetParams$enableR,
          _widgetParams$transfo = widgetParams.transformItems,
          transformItems = _widgetParams$transfo === void 0 ? function (items) {
        return items;
      } : _widgetParams$transfo; // Always trigger this message because the default value was `true`. We can't
      // display the message only when the parameter is defined otherwise a user that was
      // relying on the default value won't have any information about the changes.

      _warning(false, "\nThe option `enableGeolocationWithIP` has been removed from the GeoSearch widget.\nPlease consider using the `Configure` widget instead:\n\nsearch.addWidget(\n  configure({\n    aroundLatLngViaIP: ".concat(widgetParams.enableGeolocationWithIP || 'true', ",\n  })\n);\n\nYou can find more information inside the migration guide:\nhttp://community.algolia.com/instantsearch.js/migration-guide\n        "));
      _warning(typeof widgetParams.position === 'undefined', "\nThe option `position` has been removed from the GeoSearch widget.\nPlease consider using the `Configure` widget instead:\n\nsearch.addWidget(\n  configure({\n    aroundLatLng: '".concat(widgetParams.position && widgetParams.position.lat, ", ").concat(widgetParams.position && widgetParams.position.lng, "',\n  })\n);\n\nYou can find more information inside the migration guide:\nhttp://community.algolia.com/instantsearch.js/migration-guide\n      "));
      _warning(typeof widgetParams.radius === 'undefined', "\nThe option `radius` has been removed from the GeoSearch widget.\nPlease consider using the `Configure` widget instead:\n\nsearch.addWidget(\n  configure({\n    aroundRadius: ".concat(widgetParams.radius, ",\n  })\n);\n\nYou can find more information inside the migration guide:\n\nhttp://community.algolia.com/instantsearch.js/migration-guide\n      "));
      _warning(typeof widgetParams.precision === 'undefined', "\nThe option `precision` has been removed from the GeoSearch widget.\nPlease consider using the `Configure` widget instead:\n\nsearch.addWidget(\n  configure({\n    aroundPrecision: ".concat(widgetParams.precision, ",\n  })\n);\n\nYou can find more information inside the migration guide:\n\nhttp://community.algolia.com/instantsearch.js/migration-guide\n      "));
      var widgetState = {
        isRefineOnMapMove: enableRefineOnMapMove,
        hasMapMoveSinceLastRefine: false,
        lastRefinePosition: '',
        lastRefineBoundingBox: '',
        internalToggleRefineOnMapMove: noop,
        internalSetMapMoveSinceLastRefine: noop
      };

      var getPositionFromState = function getPositionFromState(state) {
        return state.aroundLatLng && aroundLatLngToPosition(state.aroundLatLng);
      };

      var getCurrentRefinementFromState = function getCurrentRefinementFromState(state) {
        return state.insideBoundingBox && insideBoundingBoxToBoundingBox(state.insideBoundingBox);
      };

      var refine = function refine(helper) {
        return function (_ref) {
          var ne = _ref.northEast,
              sw = _ref.southWest;
          var boundingBox = [ne.lat, ne.lng, sw.lat, sw.lng].join();
          helper.setQueryParameter('insideBoundingBox', boundingBox).search();
          widgetState.hasMapMoveSinceLastRefine = false;
          widgetState.lastRefineBoundingBox = boundingBox;
        };
      };

      var clearMapRefinement = function clearMapRefinement(helper) {
        return function () {
          helper.setQueryParameter('insideBoundingBox').search();
        };
      };

      var isRefinedWithMap = function isRefinedWithMap(state) {
        return function () {
          return Boolean(state.insideBoundingBox);
        };
      };

      var toggleRefineOnMapMove = function toggleRefineOnMapMove() {
        return widgetState.internalToggleRefineOnMapMove();
      };

      var createInternalToggleRefinementOnMapMove = function createInternalToggleRefinementOnMapMove(render, args) {
        return function () {
          widgetState.isRefineOnMapMove = !widgetState.isRefineOnMapMove;
          render(args);
        };
      };

      var isRefineOnMapMove = function isRefineOnMapMove() {
        return widgetState.isRefineOnMapMove;
      };

      var setMapMoveSinceLastRefine = function setMapMoveSinceLastRefine() {
        return widgetState.internalSetMapMoveSinceLastRefine();
      };

      var createInternalSetMapMoveSinceLastRefine = function createInternalSetMapMoveSinceLastRefine(render, args) {
        return function () {
          var shouldTriggerRender = widgetState.hasMapMoveSinceLastRefine !== true;
          widgetState.hasMapMoveSinceLastRefine = true;

          if (shouldTriggerRender) {
            render(args);
          }
        };
      };

      var hasMapMoveSinceLastRefine = function hasMapMoveSinceLastRefine() {
        return widgetState.hasMapMoveSinceLastRefine;
      };

      var init = function init(initArgs) {
        var state = initArgs.state,
            helper = initArgs.helper,
            instantSearchInstance = initArgs.instantSearchInstance;
        var isFirstRendering = true;
        widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(noop, initArgs);
        widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(noop, initArgs);
        renderFn({
          items: [],
          position: getPositionFromState(state),
          currentRefinement: getCurrentRefinementFromState(state),
          refine: refine(helper),
          clearMapRefinement: clearMapRefinement(helper),
          isRefinedWithMap: isRefinedWithMap(state),
          toggleRefineOnMapMove: toggleRefineOnMapMove,
          isRefineOnMapMove: isRefineOnMapMove,
          setMapMoveSinceLastRefine: setMapMoveSinceLastRefine,
          hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
          widgetParams: widgetParams,
          instantSearchInstance: instantSearchInstance
        }, isFirstRendering);
      };

      var render = function render(renderArgs) {
        var results = renderArgs.results,
            helper = renderArgs.helper,
            instantSearchInstance = renderArgs.instantSearchInstance;
        var isFirstRendering = false; // We don't use the state provided by the render function because we need
        // to be sure that the state is the latest one for the following condition

        var state = helper.state;
        var positionChangedSinceLastRefine = Boolean(state.aroundLatLng) && Boolean(widgetState.lastRefinePosition) && state.aroundLatLng !== widgetState.lastRefinePosition;
        var boundingBoxChangedSinceLastRefine = !state.insideBoundingBox && Boolean(widgetState.lastRefineBoundingBox) && state.insideBoundingBox !== widgetState.lastRefineBoundingBox;

        if (positionChangedSinceLastRefine || boundingBoxChangedSinceLastRefine) {
          widgetState.hasMapMoveSinceLastRefine = false;
        }

        widgetState.lastRefinePosition = state.aroundLatLng || '';
        widgetState.lastRefineBoundingBox = state.insideBoundingBox || '';
        widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(render, renderArgs);
        widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(render, renderArgs);
        var items = transformItems(results.hits.filter(function (hit) {
          return hit._geoloc;
        }));
        renderFn({
          items: items,
          position: getPositionFromState(state),
          currentRefinement: getCurrentRefinementFromState(state),
          refine: refine(helper),
          clearMapRefinement: clearMapRefinement(helper),
          isRefinedWithMap: isRefinedWithMap(state),
          toggleRefineOnMapMove: toggleRefineOnMapMove,
          isRefineOnMapMove: isRefineOnMapMove,
          setMapMoveSinceLastRefine: setMapMoveSinceLastRefine,
          hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
          widgetParams: widgetParams,
          instantSearchInstance: instantSearchInstance
        }, isFirstRendering);
      };

      return {
        init: init,
        render: render,
        dispose: function dispose(_ref2) {
          var state = _ref2.state;
          unmountFn();
          return state.setQueryParameter('insideBoundingBox');
        },
        getWidgetState: function getWidgetState(uiState, _ref3) {
          var searchParameters = _ref3.searchParameters;
          var boundingBox = searchParameters.insideBoundingBox;

          if (!boundingBox || uiState && uiState.geoSearch && uiState.geoSearch.boundingBox === boundingBox) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            geoSearch: {
              boundingBox: boundingBox
            }
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref4) {
          var uiState = _ref4.uiState;

          if (!uiState || !uiState.geoSearch) {
            return searchParameters.setQueryParameter('insideBoundingBox');
          }

          return searchParameters.setQueryParameter('insideBoundingBox', uiState.geoSearch.boundingBox);
        }
      };
    };
  };

  var withUsage$j = createDocumentationMessageGenerator({
    name: 'powered-by',
    connector: true
  });
  /**
   * @typedef {Object} PoweredByWidgetOptions
   * @property {string} [theme] The theme of the logo ("light" or "dark").
   * @property {string} [url] The URL to redirect to.
   */

  /**
   * @typedef {Object} PoweredByRenderingOptions
   * @property {Object} widgetParams All original `PoweredByWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * **PoweredBy** connector provides the logic to build a custom widget that will displays
   * the logo to redirect to Algolia.
   *
   * @type {Connector}
   * @param {function(PoweredByRenderingOptions, boolean)} renderFn Rendering function for the custom **PoweredBy** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function} Re-usable widget factory for a custom **PoweredBy** widget.
   */

  function connectPoweredBy(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$j());
    var defaultUrl = 'https://www.algolia.com/?' + 'utm_source=instantsearch.js&' + 'utm_medium=website&' + "utm_content=".concat(typeof window !== 'undefined' && window.location ? window.location.hostname : '', "&") + 'utm_campaign=poweredby';
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _widgetParams$url = widgetParams.url,
          url = _widgetParams$url === void 0 ? defaultUrl : _widgetParams$url;
      return {
        init: function init() {
          renderFn({
            url: url,
            widgetParams: widgetParams
          }, true);
        },
        render: function render() {
          renderFn({
            url: url,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose() {
          unmountFn();
        }
      };
    };
  }

  var withUsage$k = createDocumentationMessageGenerator({
    name: 'configure',
    connector: true
  });
  /**
   * @typedef {Object} CustomConfigureWidgetOptions
   * @property {Object} searchParameters The Configure widget options are search parameters
   */

  /**
   * @typedef {Object} ConfigureRenderingOptions
   * @property {function(searchParameters: Object)} refine Sets new `searchParameters` and trigger a search.
   * @property {Object} widgetParams All original `CustomConfigureWidgetOptions` forwarded to the `renderFn`.
   */

  /**
   * The **Configure** connector provides the logic to build a custom widget
   * that will give you ability to override or force some search parameters sent to Algolia API.
   *
   * @type {Connector}
   * @param {function(ConfigureRenderingOptions)} renderFn Rendering function for the custom **Configure** Widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomConfigureWidgetOptions)} Re-usable widget factory for a custom **Configure** widget.
   */

  function connectConfigure() {
    var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!isPlainObject(widgetParams.searchParameters)) {
        throw new Error(withUsage$k('The `searchParameters` option expects an object.'));
      }

      return {
        getConfiguration: function getConfiguration() {
          return widgetParams.searchParameters;
        },
        init: function init(_ref) {
          var helper = _ref.helper;
          this._refine = this.refine(helper);
          renderFn({
            refine: this._refine,
            widgetParams: widgetParams
          }, true);
        },
        refine: function refine(helper) {
          var _this = this;

          return function (searchParameters) {
            // merge new `searchParameters` with the ones set from other widgets
            var actualState = _this.removeSearchParameters(helper.state);

            var nextSearchParameters = enhanceConfiguration(_objectSpread({}, actualState), {
              getConfiguration: function getConfiguration() {
                return searchParameters;
              }
            }); // trigger a search with the new merged searchParameters

            helper.setState(nextSearchParameters).search(); // update original `widgetParams.searchParameters` to the new refined one

            widgetParams.searchParameters = searchParameters;
          };
        },
        render: function render() {
          renderFn({
            refine: this._refine,
            widgetParams: widgetParams
          }, false);
        },
        dispose: function dispose(_ref2) {
          var state = _ref2.state;
          unmountFn();
          return this.removeSearchParameters(state);
        },
        removeSearchParameters: function removeSearchParameters(state) {
          // widgetParams are assumed 'controlled',
          // so they override whatever other widgets give the state
          return state.mutateMe(function (mutableState) {
            Object.keys(widgetParams.searchParameters).forEach(function (key) {
              delete mutableState[key];
            });
          });
        }
      };
    };
  }

  var withUsage$l = createDocumentationMessageGenerator({
    name: 'autocomplete',
    connector: true
  });
  /**
   * @typedef {Object} Index
   * @property {string} index Name of the index.
   * @property {string} label Label of the index (for display purpose).
   * @property {Object[]} hits The hits resolved from the index matching the query.
   * @property {Object} results The full results object from Algolia API.
   */

  /**
   * @typedef {Object} AutocompleteRenderingOptions
   * @property {Index[]} indices The indices you provided with their hits and results and the main index as first position.
   * @property {function(string)} refine Search into the indices with the query provided.
   * @property {string} currentRefinement The actual value of the query.
   * @property {Object} widgetParams All original widget options forwarded to the `renderFn`.
   */

  /**
   * @typedef {Object} CustomAutocompleteWidgetOptions
   * @property {{value: string, label: string}[]} [indices = []] Name of the others indices to search into.
   * @property {boolean} [escapeHTML = true] If true, escape HTML tags from `hits[i]._highlightResult`.
   */

  /**
   * **Autocomplete** connector provides the logic to build a widget that will give the user the ability to search into multiple indices.
   *
   * This connector provides a `refine()` function to search for a query and a `currentRefinement` as the current query used to search.
   * @type {Connector}
   * @param {function(AutocompleteRenderingOptions, boolean)} renderFn Rendering function for the custom **Autocomplete** widget.
   * @param {function} unmountFn Unmount function called when the widget is disposed.
   * @return {function(CustomAutocompleteWidgetOptions)} Re-usable widget factory for a custom **Autocomplete** widget.
   */

  function connectAutocomplete(renderFn, unmountFn) {
    checkRendering(renderFn, withUsage$l());
    return function () {
      var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _widgetParams$escapeH = widgetParams.escapeHTML,
          escapeHTML = _widgetParams$escapeH === void 0 ? true : _widgetParams$escapeH,
          _widgetParams$indices = widgetParams.indices,
          indices = _widgetParams$indices === void 0 ? [] : _widgetParams$indices; // user passed a wrong `indices` option type

      if (!Array.isArray(indices)) {
        throw new Error(withUsage$l('The `indices` option expects an array of objects.'));
      }

      return {
        getConfiguration: function getConfiguration() {
          return escapeHTML ? TAG_PLACEHOLDER : undefined;
        },
        init: function init(_ref) {
          var _this = this;

          var instantSearchInstance = _ref.instantSearchInstance,
              helper = _ref.helper;
          this._refine = this.refine(helper);
          this.indices = [{
            helper: helper,
            label: 'primary',
            index: helper.getIndex(),
            results: undefined,
            hits: []
          }]; // add additionnal indices into `this.indices`

          indices.forEach(function (_ref2) {
            var label = _ref2.label,
                value = _ref2.value;
            var derivedHelper = helper.derive(function (searchParameters) {
              return searchParameters.setIndex(value);
            });

            _this.indices.push({
              label: label,
              index: value,
              helper: derivedHelper,
              results: undefined,
              hits: []
            }); // update results then trigger render after a search from any helper


            derivedHelper.on('result', function (results) {
              return _this.saveResults({
                results: results,
                label: label
              });
            });
          });
          this.instantSearchInstance = instantSearchInstance;
          this.renderWithAllIndices({
            isFirstRendering: true
          });
        },
        saveResults: function saveResults(_ref3) {
          var results = _ref3.results,
              label = _ref3.label;
          var derivedIndex = find$1(this.indices, function (i) {
            return i.label === label;
          });

          if (escapeHTML && results && results.hits && results.hits.length > 0) {
            results.hits = escapeHits(results.hits);
          }

          derivedIndex.results = results;
          derivedIndex.hits = results && results.hits && Array.isArray(results.hits) ? results.hits : [];
          this.renderWithAllIndices();
        },
        refine: function refine(helper) {
          return function (query) {
            return helper.setQuery(query).search();
          };
        },
        render: function render(_ref4) {
          var results = _ref4.results;
          this.saveResults({
            results: results,
            label: this.indices[0].label
          });
        },
        renderWithAllIndices: function renderWithAllIndices() {
          var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref5$isFirstRenderin = _ref5.isFirstRendering,
              isFirstRendering = _ref5$isFirstRenderin === void 0 ? false : _ref5$isFirstRenderin;

          var currentRefinement = this.indices[0].helper.state.query;
          renderFn({
            widgetParams: widgetParams,
            currentRefinement: currentRefinement,
            // we do not want to provide the `helper` to the end-user
            indices: this.indices.map(function (_ref6) {
              var index = _ref6.index,
                  label = _ref6.label,
                  hits = _ref6.hits,
                  results = _ref6.results;
              return {
                index: index,
                label: label,
                hits: hits,
                results: results
              };
            }),
            instantSearchInstance: this.instantSearchInstance,
            refine: this._refine
          }, isFirstRendering);
        },
        dispose: function dispose() {
          // detach every derived indices from the main helper instance
          this.indices.slice(1).forEach(function (_ref7) {
            var helper = _ref7.helper;
            return helper.detach();
          });
          unmountFn();
        }
      };
    };
  }

  var withUsage$m = createDocumentationMessageGenerator({
    name: 'query-rules',
    connector: true
  });

  function hasStateRefinements(state) {
    return [state.disjunctiveFacetsRefinements, state.facetsRefinements, state.hierarchicalFacetsRefinements, state.numericRefinements].some(function (refinement) {
      return Boolean(refinement && Object.keys(refinement).length > 0);
    });
  } // A context rule must consist only of alphanumeric characters, hyphens, and underscores.
  // See https://www.algolia.com/doc/guides/managing-results/refine-results/merchandising-and-promoting/in-depth/implementing-query-rules/#context


  function escapeRuleContext(ruleName) {
    return ruleName.replace(/[^a-z0-9-_]+/gi, '_');
  }

  function getRuleContextsFromTrackedFilters(_ref) {
    var helper = _ref.helper,
        sharedHelperState = _ref.sharedHelperState,
        trackedFilters = _ref.trackedFilters;
    var ruleContexts = Object.keys(trackedFilters).reduce(function (facets, facetName) {
      var facetRefinements = getRefinements(helper.lastResults || {}, sharedHelperState).filter(function (refinement) {
        return refinement.attributeName === facetName;
      }).map(function (refinement) {
        return refinement.numericValue || refinement.name;
      });
      var getTrackedFacetValues = trackedFilters[facetName];
      var trackedFacetValues = getTrackedFacetValues(facetRefinements);
      return [].concat(_toConsumableArray(facets), _toConsumableArray(facetRefinements.filter(function (facetRefinement) {
        return trackedFacetValues.includes(facetRefinement);
      }).map(function (facetValue) {
        return escapeRuleContext("ais-".concat(facetName, "-").concat(facetValue));
      })));
    }, []);
    return ruleContexts;
  }

  function applyRuleContexts(sharedHelperState) {
    var helper = this.helper,
        initialRuleContexts = this.initialRuleContexts,
        trackedFilters = this.trackedFilters,
        transformRuleContexts = this.transformRuleContexts;
    var previousRuleContexts = sharedHelperState.ruleContexts || [];
    var newRuleContexts = getRuleContextsFromTrackedFilters({
      helper: helper,
      sharedHelperState: sharedHelperState,
      trackedFilters: trackedFilters
    });
    var nextRuleContexts = [].concat(_toConsumableArray(initialRuleContexts), _toConsumableArray(newRuleContexts));
    _warning(nextRuleContexts.length <= 10, "\nThe maximum number of `ruleContexts` is 10. They have been sliced to that limit.\nConsider using `transformRuleContexts` to minimize the number of rules sent to Algolia.\n");
    var ruleContexts = transformRuleContexts(nextRuleContexts).slice(0, 10);

    if (!isEqual(previousRuleContexts, ruleContexts)) {
      helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread({}, sharedHelperState, {
        ruleContexts: ruleContexts
      }));
    }
  }

  var connectQueryRules = function connectQueryRules(render) {
    var unmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    checkRendering(render, withUsage$m());
    return function (widgetParams) {
      var _ref2 = widgetParams || {},
          _ref2$trackedFilters = _ref2.trackedFilters,
          trackedFilters = _ref2$trackedFilters === void 0 ? {} : _ref2$trackedFilters,
          _ref2$transformRuleCo = _ref2.transformRuleContexts,
          transformRuleContexts = _ref2$transformRuleCo === void 0 ? function (rules) {
        return rules;
      } : _ref2$transformRuleCo,
          _ref2$transformItems = _ref2.transformItems,
          transformItems = _ref2$transformItems === void 0 ? function (items) {
        return items;
      } : _ref2$transformItems;

      Object.keys(trackedFilters).forEach(function (facetName) {
        if (typeof trackedFilters[facetName] !== 'function') {
          throw new Error(withUsage$m("'The \"".concat(facetName, "\" filter value in the `trackedFilters` option expects a function.")));
        }
      });
      var hasTrackedFilters = Object.keys(trackedFilters).length > 0; // We store the initial rule contexts applied before creating the widget
      // so that we do not override them with the rules created from `trackedFilters`.

      var initialRuleContexts = [];
      var onHelperChange;
      return {
        init: function init(_ref3) {
          var helper = _ref3.helper,
              state = _ref3.state,
              instantSearchInstance = _ref3.instantSearchInstance;
          initialRuleContexts = state.ruleContexts || [];
          onHelperChange = applyRuleContexts.bind({
            helper: helper,
            initialRuleContexts: initialRuleContexts,
            trackedFilters: trackedFilters,
            transformRuleContexts: transformRuleContexts
          });

          if (hasTrackedFilters) {
            // We need to apply the `ruleContexts` based on the `trackedFilters`
            // before the helper changes state in some cases:
            //   - Some filters are applied on the first load (e.g. using `configure`)
            //   - The `transformRuleContexts` option sets initial `ruleContexts`.
            if (hasStateRefinements(state) || Boolean(widgetParams.transformRuleContexts)) {
              onHelperChange(state);
            } // We track every change in the helper to override its state and add
            // any `ruleContexts` needed based on the `trackedFilters`.


            helper.on('change', onHelperChange);
          }

          render({
            items: [],
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, true);
        },
        render: function (_render) {
          function render(_x) {
            return _render.apply(this, arguments);
          }

          render.toString = function () {
            return _render.toString();
          };

          return render;
        }(function (_ref4) {
          var results = _ref4.results,
              instantSearchInstance = _ref4.instantSearchInstance;
          var _results$userData = results.userData,
              userData = _results$userData === void 0 ? [] : _results$userData;
          var items = transformItems(userData);
          render({
            items: items,
            instantSearchInstance: instantSearchInstance,
            widgetParams: widgetParams
          }, false);
        }),
        dispose: function dispose(_ref5) {
          var helper = _ref5.helper,
              state = _ref5.state;
          unmount();

          if (hasTrackedFilters) {
            helper.removeListener('change', onHelperChange);
            return state.setQueryParameter('ruleContexts', initialRuleContexts);
          }

          return state;
        }
      };
    };
  };

  var STATUS_INITIAL = 'initial';
  var STATUS_ASKING_PERMISSION = 'askingPermission';
  var STATUS_WAITING = 'waiting';
  var STATUS_RECOGNIZING = 'recognizing';
  var STATUS_FINISHED = 'finished';
  var STATUS_ERROR = 'error';
  function createVoiceSearchHelper(_ref) {
    var searchAsYouSpeak = _ref.searchAsYouSpeak,
        onQueryChange = _ref.onQueryChange,
        onStateChange = _ref.onStateChange;
    var SpeechRecognitionAPI = window.webkitSpeechRecognition || window.SpeechRecognition;

    var getDefaultState = function getDefaultState(status) {
      return {
        status: status,
        transcript: '',
        isSpeechFinal: false,
        errorCode: undefined
      };
    };

    var state = getDefaultState(STATUS_INITIAL);
    var recognition;

    var isBrowserSupported = function isBrowserSupported() {
      return Boolean(SpeechRecognitionAPI);
    };

    var isListening = function isListening() {
      return state.status === STATUS_ASKING_PERMISSION || state.status === STATUS_WAITING || state.status === STATUS_RECOGNIZING;
    };

    var setState = function setState() {
      var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      state = _objectSpread({}, state, newState);
      onStateChange();
    };

    var getState = function getState() {
      return state;
    };

    var resetState = function resetState() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : STATUS_INITIAL;
      setState(getDefaultState(status));
    };

    var onStart = function onStart() {
      setState({
        status: STATUS_WAITING
      });
    };

    var onError = function onError(event) {
      setState({
        status: STATUS_ERROR,
        errorCode: event.error
      });
    };

    var onResult = function onResult(event) {
      setState({
        status: STATUS_RECOGNIZING,
        transcript: event.results[0] && event.results[0][0] && event.results[0][0].transcript || '',
        isSpeechFinal: event.results[0] && event.results[0].isFinal
      });

      if (searchAsYouSpeak && state.transcript) {
        onQueryChange(state.transcript);
      }
    };

    var onEnd = function onEnd() {
      if (!state.errorCode && state.transcript && !searchAsYouSpeak) {
        onQueryChange(state.transcript);
      }

      if (state.status !== STATUS_ERROR) {
        setState({
          status: STATUS_FINISHED
        });
      }
    };

    var stop = function stop() {
      if (recognition) {
        recognition.stop();
        recognition = undefined;
      }

      resetState();
    };

    var start = function start() {
      recognition = new SpeechRecognitionAPI();

      if (!recognition) {
        return;
      }

      resetState(STATUS_ASKING_PERMISSION);
      recognition.interimResults = true;
      recognition.addEventListener('start', onStart);
      recognition.addEventListener('error', onError);
      recognition.addEventListener('result', onResult);
      recognition.addEventListener('end', onEnd);
      recognition.start();
    };

    var dispose = function dispose() {
      if (!recognition) {
        return;
      }

      recognition.stop();
      recognition.removeEventListener('start', onStart);
      recognition.removeEventListener('error', onError);
      recognition.removeEventListener('result', onResult);
      recognition.removeEventListener('end', onEnd);
      recognition = undefined;
    };

    var toggleListening = function toggleListening() {
      if (!isBrowserSupported()) {
        return;
      }

      if (isListening()) {
        stop();
      } else {
        start();
      }
    };

    return {
      getState: getState,
      isBrowserSupported: isBrowserSupported,
      isListening: isListening,
      toggleListening: toggleListening,
      dispose: dispose
    };
  }

  var withUsage$n = createDocumentationMessageGenerator({
    name: 'voice-search',
    connector: true
  });

  var connectVoiceSearch = function connectVoiceSearch(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    checkRendering(renderFn, withUsage$n());
    return function (widgetParams) {
      var _render = function render(_ref) {
        var isFirstRendering = _ref.isFirstRendering,
            instantSearchInstance = _ref.instantSearchInstance,
            _ref$voiceSearchHelpe = _ref.voiceSearchHelper,
            isBrowserSupported = _ref$voiceSearchHelpe.isBrowserSupported,
            isListening = _ref$voiceSearchHelpe.isListening,
            toggleListening = _ref$voiceSearchHelpe.toggleListening,
            getState = _ref$voiceSearchHelpe.getState;
        renderFn({
          isBrowserSupported: isBrowserSupported(),
          isListening: isListening(),
          toggleListening: toggleListening,
          voiceListeningState: getState(),
          widgetParams: widgetParams,
          instantSearchInstance: instantSearchInstance
        }, isFirstRendering);
      };

      var searchAsYouSpeak = widgetParams.searchAsYouSpeak;
      return {
        init: function init(_ref2) {
          var _this = this;

          var helper = _ref2.helper,
              instantSearchInstance = _ref2.instantSearchInstance;

          this._refine = function () {
            var previousQuery;

            var setQueryAndSearch = function setQueryAndSearch(query) {
              if (query !== helper.state.query) {
                previousQuery = helper.state.query;
                helper.setQuery(query);
              }

              if (typeof previousQuery !== 'undefined' && previousQuery !== query) {
                helper.search();
              }
            };

            return setQueryAndSearch;
          }();

          this._voiceSearchHelper = createVoiceSearchHelper({
            searchAsYouSpeak: searchAsYouSpeak,
            onQueryChange: function onQueryChange(query) {
              return _this._refine(query);
            },
            onStateChange: function onStateChange() {
              _render({
                isFirstRendering: false,
                instantSearchInstance: instantSearchInstance,
                voiceSearchHelper: _this._voiceSearchHelper
              });
            }
          });

          _render({
            isFirstRendering: true,
            instantSearchInstance: instantSearchInstance,
            voiceSearchHelper: this._voiceSearchHelper
          });
        },
        render: function render(_ref3) {
          var instantSearchInstance = _ref3.instantSearchInstance;

          _render({
            isFirstRendering: false,
            instantSearchInstance: instantSearchInstance,
            voiceSearchHelper: this._voiceSearchHelper
          });
        },
        dispose: function dispose(_ref4) {
          var state = _ref4.state;

          this._voiceSearchHelper.dispose();

          unmountFn();
          return state.setQuery('');
        },
        getWidgetState: function getWidgetState(uiState, _ref5) {
          var searchParameters = _ref5.searchParameters;
          var query = searchParameters.query;

          if (query === '' || uiState && uiState.query === query) {
            return uiState;
          }

          return _objectSpread({}, uiState, {
            query: query
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
          var uiState = _ref6.uiState;
          return searchParameters.setQuery(uiState.query || '');
        }
      };
    };
  };



  var connectors = /*#__PURE__*/Object.freeze({
    connectClearRefinements: connectClearRefinements,
    connectCurrentRefinements: connectCurrentRefinements,
    connectHierarchicalMenu: connectHierarchicalMenu,
    connectHits: connectHits,
    connectHitsWithInsights: connectHitsWithInsights,
    connectHitsPerPage: connectHitsPerPage,
    connectInfiniteHits: connectInfiniteHits,
    connectInfiniteHitsWithInsights: connectInfiniteHitsWithInsights,
    connectMenu: connectMenu,
    connectNumericMenu: connectNumericMenu,
    connectPagination: connectPagination,
    connectRange: connectRange,
    connectRefinementList: connectRefinementList,
    connectSearchBox: connectSearchBox,
    connectSortBy: connectSortBy,
    connectRatingMenu: connectRatingMenu,
    connectStats: connectStats,
    connectToggleRefinement: connectToggleRefinement,
    connectBreadcrumb: connectBreadcrumb,
    connectGeoSearch: connectGeoSearch,
    connectPoweredBy: connectPoweredBy,
    connectConfigure: connectConfigure,
    connectAutocomplete: connectAutocomplete,
    connectQueryRules: connectQueryRules,
    connectVoiceSearch: connectVoiceSearch
  });

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  var Template =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Template, _Component);

    function Template() {
      _classCallCheck(this, Template);

      return _possibleConstructorReturn(this, _getPrototypeOf(Template).apply(this, arguments));
    }

    _createClass(Template, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !isEqual(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !isEqual(this.props.rootProps, nextProps.rootProps);
      }
    }, {
      key: "render",
      value: function render() {
        var RootTagName = this.props.rootTagName;
        var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
        var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
        var content = renderTemplate({
          templates: this.props.templates,
          templateKey: this.props.templateKey,
          compileOptions: compileOptions,
          helpers: this.props.templatesConfig.helpers,
          data: this.props.data
        });

        if (content === null) {
          // Adds a noscript to the DOM but virtual DOM is null
          // See http://facebook.github.io/react/docs/component-specs.html#render
          return null;
        }

        return index.createElement(RootTagName, _extends({}, this.props.rootProps, {
          dangerouslySetInnerHTML: {
            __html: content
          }
        }));
      }
    }]);

    return Template;
  }(Component$1);

  Template.defaultProps = {
    data: {},
    rootTagName: 'div',
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
  };

  var ClearRefinements = function ClearRefinements(_ref) {
    var hasRefinements = _ref.hasRefinements,
        refine = _ref.refine,
        cssClasses = _ref.cssClasses,
        templateProps = _ref.templateProps;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "resetLabel",
      rootTagName: "button",
      rootProps: {
        className: classnames(cssClasses.button, _defineProperty({}, cssClasses.disabledButton, !hasRefinements)),
        onClick: refine,
        disabled: !hasRefinements
      },
      data: {
        hasRefinements: hasRefinements
      }
    })));
  };

  var defaultTemplates = {
    resetLabel: 'Clear refinements'
  };

  var withUsage$o = createDocumentationMessageGenerator({
    name: 'clear-refinements'
  });
  var suit$2 = component('ClearRefinements');

  var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          hasRefinements = _ref2.hasRefinements,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(ClearRefinements, {
        refine: refine,
        cssClasses: cssClasses,
        hasRefinements: hasRefinements,
        templateProps: renderState.templateProps
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} ClearRefinementsCSSClasses
   * @property {string|string[]} [root] CSS class to add to the wrapper element.
   * @property {string|string[]} [button] CSS class to add to the button of the widget.
   * @property {string|string[]} [disabledButton] CSS class to add to the button when there are no refinements.
   */

  /**
   * @typedef {Object} ClearRefinementsTemplates
   * @property {string|string[]} [resetLabel] Template for the content of the button
   */

  /**
   * @typedef {Object} ClearRefinementsWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string[]} [includedAttributes = []] The attributes to include in the refinements to clear (all by default). Cannot be used with `excludedAttributes`.
   * @property {string[]} [excludedAttributes = ['query']] The attributes to exclude from the refinements to clear. Cannot be used with `includedAttributes`.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   * @property {ClearRefinementsTemplates} [templates] Templates to use for the widget.
   * @property {ClearRefinementsCSSClasses} [cssClasses] CSS classes to be added.
   */

  /**
   * The clear all widget gives the user the ability to clear all the refinements currently
   * applied on the results. It is equivalent to the reset button of a form.
   *
   * The current refined values widget can display a button that has the same behavior.
   * @type {WidgetFactory}
   * @devNovel ClearRefinements
   * @category clear-filter
   * @param {ClearRefinementsWidgetOptions} $0 The ClearRefinements widget options.
   * @returns {Widget} A new instance of the ClearRefinements widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.clearRefinements({
   *     container: '#clear-all',
   *     templates: {
   *       resetLabel: 'Reset everything'
   *     },
   *   })
   * );
   */


  function clearRefinements$1(_ref3) {
    var container = _ref3.container,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates : _ref3$templates,
        includedAttributes = _ref3.includedAttributes,
        excludedAttributes = _ref3.excludedAttributes,
        transformItems = _ref3.transformItems,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;

    if (!container) {
      throw new Error(withUsage$o('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$2(), userCssClasses.root),
      button: classnames(suit$2({
        descendantName: 'button'
      }), userCssClasses.button),
      disabledButton: classnames(suit$2({
        descendantName: 'button',
        modifierName: 'disabled'
      }), userCssClasses.disabledButton)
    };
    var specializedRenderer = renderer({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeWidget = connectClearRefinements(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      includedAttributes: includedAttributes,
      excludedAttributes: excludedAttributes,
      transformItems: transformItems
    });
  }

  /**
   * The **configure** widget is a headless widget that let you configure the
   * settings of your search using the parameters described by the
   * [general Algolia documentation](https://www.algolia.com/doc/api-reference/search-api-parameters/)
   *
   * This widget has no visible UI, so you should only use it for search parameters
   * users shouldn't expect to change.
   *
   * @type {WidgetFactory}
   * @category filter
   * @param {SearchParameters} searchParameters The Configure widget options are search parameters
   * @returns {Object} A new Configure widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.configure({
   *     analytics: true,
   *     ruleContexts: ['desktop', 'cool-users'],
   *     distinct: 3,
   *   })
   * );
   */

  function configure(searchParameters) {
    // This is a renderless widget that falls back to the connector's
    // noop render and unmount functions.
    var makeWidget = connectConfigure();
    return makeWidget({
      searchParameters: searchParameters
    });
  }

  var createItemKey = function createItemKey(_ref) {
    var attribute = _ref.attribute,
        value = _ref.value,
        type = _ref.type,
        operator = _ref.operator;
    return [attribute, type, value, operator].map(function (key) {
      return key;
    }).filter(Boolean).join(':');
  };

  var handleClick = function handleClick(callback) {
    return function (event) {
      if (isSpecialClick(event)) {
        return;
      }

      event.preventDefault();
      callback();
    };
  };

  var CurrentRefinements = function CurrentRefinements(_ref2) {
    var items = _ref2.items,
        cssClasses = _ref2.cssClasses;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement("ul", {
      className: cssClasses.list
    }, items.map(function (item, index$1) {
      return index.createElement("li", {
        key: "".concat(item.attribute, "-").concat(index$1),
        className: cssClasses.item
      }, index.createElement("span", {
        className: cssClasses.label
      }, capitalize(item.label), ":"), item.refinements.map(function (refinement) {
        return index.createElement("span", {
          key: createItemKey(refinement),
          className: cssClasses.category
        }, index.createElement("span", {
          className: cssClasses.categoryLabel
        }, refinement.attribute === 'query' ? index.createElement("q", null, refinement.label) : refinement.label), index.createElement("button", {
          className: cssClasses.delete,
          onClick: handleClick(item.refine.bind(null, refinement))
        }, "\u2715"));
      }));
    })));
  };

  var withUsage$p = createDocumentationMessageGenerator({
    name: 'current-refinements'
  });
  var suit$3 = component('CurrentRefinements');

  var renderer$1 = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses;
    return function (_ref2, isFirstRendering) {
      var items = _ref2.items;

      if (isFirstRendering) {
        return;
      }

      render$1(index.createElement(CurrentRefinements, {
        cssClasses: cssClasses,
        items: items
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} CurrentRefinementsCSSClasses
   * @property {string} [root] CSS classes added to the root element.
   * @property {string} [list] CSS classes added to the list element.
   * @property {string} [item] CSS classes added to the item element.
   * @property {string} [label] CSS classes added to the label element.
   * @property {string} [category] CSS classes added to the category element.
   * @property {string} [categoryLabel] CSS classes added to the categoryLabel element.
   * @property {string} [delete] CSS classes added to the delete element.
   */

  /**
   * @typedef {Object} CurrentRefinementsWidgetOptions
   * @property {string|HTMLElement} container The CSS Selector or HTMLElement to insert the widget
   * @property {string[]} [includedAttributes] The attributes to include in the refinements (all by default)
   * @property {string[]} [excludedAttributes = ['query']] The attributes to exclude from the refinements
   * @property {CurrentRefinementsCSSClasses} [cssClasses] The CSS classes to be added
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * The `currentRefinements` widget has two purposes give the user a synthetic view of the current filters
   * and the ability to remove a filter.
   *
   * This widget is usually in the top part of the search UI.
   * @type {WidgetFactory}
   * @devNovel CurrentRefinements
   * @category clear-filter
   * @param {CurrentRefinementsWidgetOptions} $0 The CurrentRefinements widget options.
   * @returns {Object} A new CurrentRefinements widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.currentRefinements({
   *     container: '#current-refinements',
   *     includedAttributes: [
   *       'free_shipping',
   *       'price',
   *       'brand',
   *       'category',
   *     ],
   *   })
   * );
   */


  function currentRefinements(_ref3) {
    var container = _ref3.container,
        includedAttributes = _ref3.includedAttributes,
        excludedAttributes = _ref3.excludedAttributes,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$p('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$3(), userCssClasses.root),
      list: classnames(suit$3({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$3({
        descendantName: 'item'
      }), userCssClasses.item),
      label: classnames(suit$3({
        descendantName: 'label'
      }), userCssClasses.label),
      category: classnames(suit$3({
        descendantName: 'category'
      }), userCssClasses.category),
      categoryLabel: classnames(suit$3({
        descendantName: 'categoryLabel'
      }), userCssClasses.categoryLabel),
      delete: classnames(suit$3({
        descendantName: 'delete'
      }), userCssClasses.delete)
    };
    var specializedRenderer = renderer$1({
      containerNode: containerNode,
      cssClasses: cssClasses
    });
    var makeWidget = connectCurrentRefinements(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      includedAttributes: includedAttributes,
      excludedAttributes: excludedAttributes,
      transformItems: transformItems
    });
  }

  var GeoSearchButton = function GeoSearchButton(_ref) {
    var className = _ref.className,
        disabled = _ref.disabled,
        onClick = _ref.onClick,
        children = _ref.children;
    return index.createElement("button", {
      className: className,
      onClick: onClick,
      disabled: disabled
    }, children);
  };

  GeoSearchButton.defaultProps = {
    disabled: false
  };

  var GeoSearchToggle = function GeoSearchToggle(_ref) {
    var classNameLabel = _ref.classNameLabel,
        classNameInput = _ref.classNameInput,
        checked = _ref.checked,
        onToggle = _ref.onToggle,
        children = _ref.children;
    return index.createElement("label", {
      className: classNameLabel
    }, index.createElement("input", {
      className: classNameInput,
      type: "checkbox",
      checked: checked,
      onChange: onToggle
    }), children);
  };

  var GeoSearchControls = function GeoSearchControls(_ref) {
    var cssClasses = _ref.cssClasses,
        enableRefine = _ref.enableRefine,
        enableRefineControl = _ref.enableRefineControl,
        enableClearMapRefinement = _ref.enableClearMapRefinement,
        isRefineOnMapMove = _ref.isRefineOnMapMove,
        isRefinedWithMap = _ref.isRefinedWithMap,
        hasMapMoveSinceLastRefine = _ref.hasMapMoveSinceLastRefine,
        onRefineToggle = _ref.onRefineToggle,
        onRefineClick = _ref.onRefineClick,
        onClearClick = _ref.onClearClick,
        templateProps = _ref.templateProps;
    return enableRefine && index.createElement("div", null, enableRefineControl && index.createElement("div", {
      className: cssClasses.control
    }, isRefineOnMapMove || !hasMapMoveSinceLastRefine ? index.createElement(GeoSearchToggle, {
      classNameLabel: classnames(cssClasses.label, _defineProperty({}, cssClasses.selectedLabel, isRefineOnMapMove)),
      classNameInput: cssClasses.input,
      checked: isRefineOnMapMove,
      onToggle: onRefineToggle
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "toggle",
      rootTagName: "span"
    }))) : index.createElement(GeoSearchButton, {
      className: cssClasses.redo,
      disabled: !hasMapMoveSinceLastRefine,
      onClick: onRefineClick
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "redo",
      rootTagName: "span"
    })))), !enableRefineControl && !isRefineOnMapMove && index.createElement("div", {
      className: cssClasses.control
    }, index.createElement(GeoSearchButton, {
      className: classnames(cssClasses.redo, _defineProperty({}, cssClasses.disabledRedo, !hasMapMoveSinceLastRefine)),
      disabled: !hasMapMoveSinceLastRefine,
      onClick: onRefineClick
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "redo",
      rootTagName: "span"
    })))), enableClearMapRefinement && isRefinedWithMap && index.createElement(GeoSearchButton, {
      className: cssClasses.reset,
      onClick: onClearClick
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "reset",
      rootTagName: "span"
    }))));
  };

  var refineWithMap = function refineWithMap(_ref) {
    var refine = _ref.refine,
        mapInstance = _ref.mapInstance;
    return refine({
      northEast: mapInstance.getBounds().getNorthEast().toJSON(),
      southWest: mapInstance.getBounds().getSouthWest().toJSON()
    });
  };

  var collectMarkersForNextRender = function collectMarkersForNextRender(markers, nextIds) {
    return markers.reduce(function (_ref2, marker) {
      var _ref3 = _slicedToArray(_ref2, 2),
          update = _ref3[0],
          exit = _ref3[1];

      var persist = nextIds.includes(marker.__id);
      return persist ? [update.concat(marker), exit] : [update, exit.concat(marker)];
    }, [[], []]);
  };

  var createBoundingBoxFromMarkers = function createBoundingBoxFromMarkers(google, markers) {
    var latLngBounds = markers.reduce(function (acc, marker) {
      return acc.extend(marker.getPosition());
    }, new google.maps.LatLngBounds());
    return {
      northEast: latLngBounds.getNorthEast().toJSON(),
      southWest: latLngBounds.getSouthWest().toJSON()
    };
  };

  var lockUserInteraction = function lockUserInteraction(renderState, functionThatAltersTheMapPosition) {
    renderState.isUserInteraction = false;
    functionThatAltersTheMapPosition();
    renderState.isUserInteraction = true;
  };

  var renderer$2 = function renderer(_ref4, isFirstRendering) {
    var items = _ref4.items,
        position = _ref4.position,
        currentRefinement = _ref4.currentRefinement,
        refine = _ref4.refine,
        clearMapRefinement = _ref4.clearMapRefinement,
        toggleRefineOnMapMove = _ref4.toggleRefineOnMapMove,
        isRefineOnMapMove = _ref4.isRefineOnMapMove,
        setMapMoveSinceLastRefine = _ref4.setMapMoveSinceLastRefine,
        hasMapMoveSinceLastRefine = _ref4.hasMapMoveSinceLastRefine,
        isRefinedWithMap = _ref4.isRefinedWithMap,
        widgetParams = _ref4.widgetParams,
        instantSearchInstance = _ref4.instantSearchInstance;
    var container = widgetParams.container,
        googleReference = widgetParams.googleReference,
        cssClasses = widgetParams.cssClasses,
        templates = widgetParams.templates,
        initialZoom = widgetParams.initialZoom,
        initialPosition = widgetParams.initialPosition,
        enableRefine = widgetParams.enableRefine,
        enableClearMapRefinement = widgetParams.enableClearMapRefinement,
        enableRefineControl = widgetParams.enableRefineControl,
        mapOptions = widgetParams.mapOptions,
        createMarker = widgetParams.createMarker,
        markerOptions = widgetParams.markerOptions,
        renderState = widgetParams.renderState;

    if (isFirstRendering) {
      renderState.isUserInteraction = true;
      renderState.isPendingRefine = false;
      renderState.markers = [];
      var rootElement = document.createElement('div');
      rootElement.className = cssClasses.root;
      container.appendChild(rootElement);
      var mapElement = document.createElement('div');
      mapElement.className = cssClasses.map;
      rootElement.appendChild(mapElement);
      var treeElement = document.createElement('div');
      treeElement.className = cssClasses.tree;
      rootElement.appendChild(treeElement);
      renderState.mapInstance = new googleReference.maps.Map(mapElement, _objectSpread({
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
        zoomControlOptions: {
          position: googleReference.maps.ControlPosition.LEFT_TOP
        }
      }, mapOptions));

      var setupListenersWhenMapIsReady = function setupListenersWhenMapIsReady() {
        var onChange = function onChange() {
          if (renderState.isUserInteraction && enableRefine) {
            setMapMoveSinceLastRefine();

            if (isRefineOnMapMove()) {
              renderState.isPendingRefine = true;
            }
          }
        };

        renderState.mapInstance.addListener('center_changed', onChange);
        renderState.mapInstance.addListener('zoom_changed', onChange);
        renderState.mapInstance.addListener('dragstart', onChange);
        renderState.mapInstance.addListener('idle', function () {
          if (renderState.isUserInteraction && renderState.isPendingRefine) {
            renderState.isPendingRefine = false;
            refineWithMap({
              mapInstance: renderState.mapInstance,
              refine: refine
            });
          }
        });
      };

      googleReference.maps.event.addListenerOnce(renderState.mapInstance, 'idle', setupListenersWhenMapIsReady);
      renderState.templateProps = prepareTemplateProps({
        templatesConfig: instantSearchInstance.templatesConfig,
        templates: templates
      });
      return;
    } // Collect markers that need to be updated or removed


    var nextItemsIds = items.map(function (_) {
      return _.objectID;
    });

    var _collectMarkersForNex = collectMarkersForNextRender(renderState.markers, nextItemsIds),
        _collectMarkersForNex2 = _slicedToArray(_collectMarkersForNex, 2),
        updateMarkers = _collectMarkersForNex2[0],
        exitMarkers = _collectMarkersForNex2[1]; // Collect items that will be added


    var updateMarkerIds = updateMarkers.map(function (_) {
      return _.__id;
    });
    var nextPendingItems = items.filter(function (item) {
      return !updateMarkerIds.includes(item.objectID);
    }); // Remove all markers that need to be removed

    exitMarkers.forEach(function (marker) {
      return marker.setMap(null);
    }); // Create the markers from the items

    renderState.markers = updateMarkers.concat(nextPendingItems.map(function (item) {
      var marker = createMarker({
        map: renderState.mapInstance,
        item: item
      });
      Object.keys(markerOptions.events).forEach(function (eventName) {
        marker.addListener(eventName, function (event) {
          markerOptions.events[eventName]({
            map: renderState.mapInstance,
            event: event,
            item: item,
            marker: marker
          });
        });
      });
      return marker;
    }));
    var shouldUpdate = !hasMapMoveSinceLastRefine(); // We use this value for differentiate the padding to apply during
    // fitBounds. When we don't have a currenRefinement (boundingBox)
    // we let Google Maps compute the automatic padding. But when we
    // provide the currentRefinement we explicitly set the padding
    // to `0` otherwise the map will decrease the zoom on each refine.

    var boundingBoxPadding = currentRefinement ? 0 : null;
    var boundingBox = !currentRefinement && Boolean(renderState.markers.length) ? createBoundingBoxFromMarkers(googleReference, renderState.markers) : currentRefinement;

    if (boundingBox && shouldUpdate) {
      lockUserInteraction(renderState, function () {
        renderState.mapInstance.fitBounds(new googleReference.maps.LatLngBounds(boundingBox.southWest, boundingBox.northEast), boundingBoxPadding);
      });
    } else if (shouldUpdate) {
      lockUserInteraction(renderState, function () {
        renderState.mapInstance.setCenter(position || initialPosition);
        renderState.mapInstance.setZoom(initialZoom);
      });
    }

    render$1(index.createElement(GeoSearchControls, {
      cssClasses: cssClasses,
      enableRefine: enableRefine,
      enableRefineControl: enableRefineControl,
      enableClearMapRefinement: enableClearMapRefinement,
      isRefineOnMapMove: isRefineOnMapMove(),
      isRefinedWithMap: isRefinedWithMap(),
      hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine(),
      onRefineToggle: toggleRefineOnMapMove,
      onRefineClick: function onRefineClick() {
        return refineWithMap({
          mapInstance: renderState.mapInstance,
          refine: refine
        });
      },
      onClearClick: clearMapRefinement,
      templateProps: renderState.templateProps
    }), container.querySelector(".".concat(cssClasses.tree)));
  };

  var defaultTemplates$1 = {
    HTMLMarker: '<p>Your custom HTML Marker</p>',
    reset: 'Clear the map refinement',
    toggle: 'Search as I move the map',
    redo: 'Redo search here'
  };

  var createHTMLMarker = function createHTMLMarker(googleReference) {
    var HTMLMarker =
    /*#__PURE__*/
    function (_googleReference$maps) {
      _inherits(HTMLMarker, _googleReference$maps);

      function HTMLMarker(_ref) {
        var _this;

        var __id = _ref.__id,
            position = _ref.position,
            map = _ref.map,
            template = _ref.template,
            className = _ref.className,
            _ref$anchor = _ref.anchor,
            anchor = _ref$anchor === void 0 ? {
          x: 0,
          y: 0
        } : _ref$anchor;

        _classCallCheck(this, HTMLMarker);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMarker).call(this));
        _this.__id = __id;
        _this.anchor = anchor;
        _this.listeners = {};
        _this.latLng = new googleReference.maps.LatLng(position);
        _this.element = document.createElement('div');
        _this.element.className = className;
        _this.element.style.position = 'absolute';
        _this.element.innerHTML = template;

        _this.setMap(map);

        return _this;
      }

      _createClass(HTMLMarker, [{
        key: "onAdd",
        value: function onAdd() {
          // Append the element to the map
          this.getPanes().overlayMouseTarget.appendChild(this.element); // Compute the offset onAdd & cache it because afterwards
          // it won't retrieve the correct values, we also avoid
          // to read the values on every draw

          var bbBox = this.element.getBoundingClientRect();
          this.offset = {
            x: this.anchor.x + bbBox.width / 2,
            y: this.anchor.y + bbBox.height
          }; // Force the width of the element will avoid the
          // content to collapse when we move the map

          this.element.style.width = "".concat(bbBox.width, "px");
        }
      }, {
        key: "draw",
        value: function draw() {
          var position = this.getProjection().fromLatLngToDivPixel(this.latLng);
          this.element.style.left = "".concat(Math.round(position.x - this.offset.x), "px");
          this.element.style.top = "".concat(Math.round(position.y - this.offset.y), "px"); // Markers to the south are in front of markers to the north
          // This is the default behaviour of Google Maps

          this.element.style.zIndex = parseInt(this.element.style.top, 10);
        }
      }, {
        key: "onRemove",
        value: function onRemove() {
          var _this2 = this;

          if (this.element) {
            this.element.parentNode.removeChild(this.element);
            Object.keys(this.listeners).forEach(function (eventName) {
              _this2.element.removeEventListener(eventName, _this2.listeners[eventName]);
            });
            delete this.element;
            delete this.listeners;
          }
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, listener) {
          this.listeners[eventName] = listener;
          this.element.addEventListener(eventName, listener);
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return this.latLng;
        }
      }]);

      return HTMLMarker;
    }(googleReference.maps.OverlayView);

    return HTMLMarker;
  };

  var withUsage$q = createDocumentationMessageGenerator({
    name: 'geo-search'
  });
  var suit$4 = component('GeoSearch');
  /**
   * @typedef {object} HTMLMarkerOptions
   * @property {object} [anchor] The offset from the marker's position.
   */

  /**
   * @typedef {object} CustomHTMLMarkerOptions
   * @property {function(item): HTMLMarkerOptions} [createOptions] Function used to create the options passed to the HTMLMarker.
   * @property {{ eventType: function(object) }} [events] Object that takes an event type (ex: `click`, `mouseover`) as key and a listener as value. The listener is provided with an object that contains `event`, `item`, `marker`, `map`.
   */

  /**
   * @typedef {object} BuiltInMarkerOptions
   * @property {function(item): MarkerOptions} [createOptions] Function used to create the options passed to the Google Maps marker. <br />
   * See [the documentation](https://developers.google.com/maps/documentation/javascript/reference/3/#MarkerOptions) for more information.
   * @property {{ eventType: function(object) }} [events] Object that takes an event type (ex: `click`, `mouseover`) as key and a listener as value. The listener is provided with an object that contains `event`, `item`, `marker`, `map`.
   */

  /**
   * @typedef {object} GeoSearchCSSClasses
   * @property {string|Array<string>} [root] The root div of the widget.
   * @property {string|Array<string>} [map] The map container of the widget.
   * @property {string|Array<string>} [control] The control element of the widget.
   * @property {string|Array<string>} [label] The label of the control element.
   * @property {string|Array<string>} [selectedLabel] The selected label of the control element.
   * @property {string|Array<string>} [input] The input of the control element.
   * @property {string|Array<string>} [redo] The redo search button.
   * @property {string|Array<string>} [disabledRedo] The disabled redo search button.
   * @property {string|Array<string>} [reset] The reset refinement button.
   */

  /**
   * @typedef {object} GeoSearchTemplates
   * @property {string|function(object): string} [HTMLMarker] Template to use for the marker.
   * @property {string|function(object): string} [reset] Template for the reset button.
   * @property {string|function(object): string} [toggle] Template for the toggle label.
   * @property {string|function(object): string} [redo] Template for the redo button.
   */

  /**
   * @typedef {object} LatLng
   * @property {number} lat The latitude in degrees.
   * @property {number} lng The longitude in degrees.
   */

  /**
   * @typedef {object} GeoSearchWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {object} googleReference Reference to the global `window.google` object. <br />
   * See [the documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for more information.
   * @property {number} [initialZoom=1] By default the map will set the zoom accordingly to the markers displayed on it. When we refine it may happen that the results are empty. For those situations we need to provide a zoom to render the map.
   * @property {LatLng} [initialPosition={ lat: 0, lng: 0 }] By default the map will set the position accordingly to the markers displayed on it. When we refine it may happen that the results are empty. For those situations we need to provide a position to render the map. This option is ignored when the `position` is provided.
   * @property {GeoSearchTemplates} [templates] Templates to use for the widget.
   * @property {GeoSearchCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   * @property {object} [mapOptions] Option forwarded to the Google Maps constructor. <br />
   * See [the documentation](https://developers.google.com/maps/documentation/javascript/reference/3/#MapOptions) for more information.
   * @property {BuiltInMarkerOptions} [builtInMarker] Options for customize the built-in Google Maps marker. This option is ignored when the `customHTMLMarker` is provided.
   * @property {CustomHTMLMarkerOptions} [customHTMLMarker] Options for customize the HTML marker. We provide an alternative to the built-in Google Maps marker in order to have a full control of the marker rendering. You can use plain HTML to build your marker.
   * @property {boolean} [enableRefine=true] If true, the map is used to search - otherwise it's for display purposes only.
   * @property {boolean} [enableClearMapRefinement=true] If true, a button is displayed on the map when the refinement is coming from the map in order to remove it.
   * @property {boolean} [enableRefineControl=true] If true, the user can toggle the option `enableRefineOnMapMove` directly from the map.
   * @property {boolean} [enableRefineOnMapMove=true] If true, refine will be triggered as you move the map.
   * @property {function} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * The **GeoSearch** widget displays the list of results from the search on a Google Maps. It also provides a way to search for results based on their position. The widget also provide some of the common GeoSearch patterns like search on map interaction.
   *
   * @requirements
   *
   * Note that the GeoSearch widget uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be displayed on the map.
   *
   * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
   *
   * You are also responsible for loading the Google Maps library, it's not shipped with InstantSearch. You need to load the Google Maps library and pass a reference to the widget. You can find more information about how to install the library in [the Google Maps documentation](https://developers.google.com/maps/documentation/javascript/tutorial).
   *
   * Don't forget to explicitly set the `height` of the map container (default class `.ais-geo-search--map`), otherwise it won't be shown (it's a requirement of Google Maps).
   *
   * @type {WidgetFactory}
   * @devNovel GeoSearch
   * @param {GeoSearchWidgetOptions} $0 Options of the GeoSearch widget.
   * @return {Widget} A new instance of GeoSearch widget.
   * @staticExample
   * search.addWidget(
   *   instantsearch.widgets.geoSearch({
   *     container: '#geo-search-container',
   *     googleReference: window.google,
   *   })
   * );
   */

  var geoSearch = function geoSearch() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$initialZoom = _ref.initialZoom,
        initialZoom = _ref$initialZoom === void 0 ? 1 : _ref$initialZoom,
        _ref$initialPosition = _ref.initialPosition,
        initialPosition = _ref$initialPosition === void 0 ? {
      lat: 0,
      lng: 0
    } : _ref$initialPosition,
        _ref$templates = _ref.templates,
        userTemplates = _ref$templates === void 0 ? {} : _ref$templates,
        _ref$cssClasses = _ref.cssClasses,
        userCssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses,
        _ref$builtInMarker = _ref.builtInMarker,
        userBuiltInMarker = _ref$builtInMarker === void 0 ? {} : _ref$builtInMarker,
        userCustomHTMLMarker = _ref.customHTMLMarker,
        _ref$enableRefine = _ref.enableRefine,
        enableRefine = _ref$enableRefine === void 0 ? true : _ref$enableRefine,
        _ref$enableClearMapRe = _ref.enableClearMapRefinement,
        enableClearMapRefinement = _ref$enableClearMapRe === void 0 ? true : _ref$enableClearMapRe,
        _ref$enableRefineCont = _ref.enableRefineControl,
        enableRefineControl = _ref$enableRefineCont === void 0 ? true : _ref$enableRefineCont,
        container = _ref.container,
        googleReference = _ref.googleReference,
        widgetParams = _objectWithoutProperties(_ref, ["initialZoom", "initialPosition", "templates", "cssClasses", "builtInMarker", "customHTMLMarker", "enableRefine", "enableClearMapRefinement", "enableRefineControl", "container", "googleReference"]);

    var defaultBuiltInMarker = {
      createOptions: noop,
      events: {}
    };
    var defaultCustomHTMLMarker = {
      createOptions: noop,
      events: {}
    };

    if (!container) {
      throw new Error(withUsage$q('The `container` option is required.'));
    }

    if (!googleReference) {
      throw new Error(withUsage$q('The `googleReference` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$4(), userCssClasses.root),
      // Required only to mount / unmount the Preact tree
      tree: suit$4({
        descendantName: 'tree'
      }),
      map: classnames(suit$4({
        descendantName: 'map'
      }), userCssClasses.map),
      control: classnames(suit$4({
        descendantName: 'control'
      }), userCssClasses.control),
      label: classnames(suit$4({
        descendantName: 'label'
      }), userCssClasses.label),
      selectedLabel: classnames(suit$4({
        descendantName: 'label',
        modifierName: 'selected'
      }), userCssClasses.selectedLabel),
      input: classnames(suit$4({
        descendantName: 'input'
      }), userCssClasses.input),
      redo: classnames(suit$4({
        descendantName: 'redo'
      }), userCssClasses.redo),
      disabledRedo: classnames(suit$4({
        descendantName: 'redo',
        modifierName: 'disabled'
      }), userCssClasses.disabledRedo),
      reset: classnames(suit$4({
        descendantName: 'reset'
      }), userCssClasses.reset)
    };

    var templates = _objectSpread({}, defaultTemplates$1, userTemplates);

    var builtInMarker = _objectSpread({}, defaultBuiltInMarker, userBuiltInMarker);

    var isCustomHTMLMarker = Boolean(userCustomHTMLMarker) || Boolean(userTemplates.HTMLMarker);

    var customHTMLMarker = isCustomHTMLMarker && _objectSpread({}, defaultCustomHTMLMarker, userCustomHTMLMarker);

    var createBuiltInMarker = function createBuiltInMarker(_ref2) {
      var item = _ref2.item,
          rest = _objectWithoutProperties(_ref2, ["item"]);

      return new googleReference.maps.Marker(_objectSpread({}, builtInMarker.createOptions(item), rest, {
        __id: item.objectID,
        position: item._geoloc
      }));
    };

    var HTMLMarker = createHTMLMarker(googleReference);

    var createCustomHTMLMarker = function createCustomHTMLMarker(_ref3) {
      var item = _ref3.item,
          rest = _objectWithoutProperties(_ref3, ["item"]);

      return new HTMLMarker(_objectSpread({}, customHTMLMarker.createOptions(item), rest, {
        __id: item.objectID,
        position: item._geoloc,
        className: classnames(suit$4({
          descendantName: 'marker'
        })),
        template: renderTemplate({
          templateKey: 'HTMLMarker',
          templates: templates,
          data: item
        })
      }));
    };

    var createMarker = !customHTMLMarker ? createBuiltInMarker : createCustomHTMLMarker; // prettier-ignore

    var markerOptions = !customHTMLMarker ? builtInMarker : customHTMLMarker;
    var makeGeoSearch = connectGeoSearch(renderer$2, function () {
      unmountComponentAtNode(containerNode.querySelector(".".concat(cssClasses.tree)));

      while (containerNode.firstChild) {
        containerNode.removeChild(containerNode.firstChild);
      }
    });
    return makeGeoSearch(_objectSpread({}, widgetParams, {
      renderState: {},
      container: containerNode,
      googleReference: googleReference,
      initialZoom: initialZoom,
      initialPosition: initialPosition,
      templates: templates,
      cssClasses: cssClasses,
      createMarker: createMarker,
      markerOptions: markerOptions,
      enableRefine: enableRefine,
      enableClearMapRefinement: enableClearMapRefinement,
      enableRefineControl: enableRefineControl
    }));
  };

  var RefinementListItem =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RefinementListItem, _Component);

    function RefinementListItem() {
      _classCallCheck(this, RefinementListItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(RefinementListItem).apply(this, arguments));
    }

    _createClass(RefinementListItem, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.handleClick = this.handleClick.bind(this);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
      }
    }, {
      key: "handleClick",
      value: function handleClick(originalEvent) {
        this.props.handleClick({
          facetValueToRefine: this.props.facetValueToRefine,
          isRefined: this.props.isRefined,
          originalEvent: originalEvent
        });
      }
    }, {
      key: "render",
      value: function render() {
        return index.createElement("li", {
          className: this.props.className,
          onClick: this.handleClick
        }, index.createElement(Template, _extends({}, this.props.templateProps, {
          templateKey: this.props.templateKey,
          data: this.props.templateData
        })), this.props.subItems);
      }
    }]);

    return RefinementListItem;
  }(Component$1);

  var SearchBox =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SearchBox, _Component);

    function SearchBox() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SearchBox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        query: _this.props.searchAsYouType ? '' : _this.props.query
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
        var _this$props = _this.props,
            searchAsYouType = _this$props.searchAsYouType,
            refine = _this$props.refine,
            onChange = _this$props.onChange;
        var query = event.target.value;

        if (searchAsYouType) {
          refine(query);
        } else {
          _this.setState({
            query: query
          });
        }

        onChange(event);
      });

      _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
        var _this$props2 = _this.props,
            searchAsYouType = _this$props2.searchAsYouType,
            refine = _this$props2.refine,
            onSubmit = _this$props2.onSubmit;
        event.preventDefault();
        event.stopPropagation();

        _this.input.blur();

        if (!searchAsYouType) {
          refine(_this.state.query);
        }

        onSubmit(event);
        return false;
      });

      _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
        var _this$props3 = _this.props,
            searchAsYouType = _this$props3.searchAsYouType,
            refine = _this$props3.refine,
            onReset = _this$props3.onReset;
        var query = '';

        _this.input.focus();

        refine(query);

        if (!searchAsYouType) {
          _this.setState({
            query: query
          });
        }

        onReset(event);
      });

      return _this;
    }

    _createClass(SearchBox, [{
      key: "resetInput",

      /**
       * This public method is used in the RefinementList SFFV search box
       * to reset the input state when an item is selected.
       *
       * @see RefinementList#componentWillReceiveProps
       * @return {undefined}
       */
      value: function resetInput() {
        this.setState({
          query: ''
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props4 = this.props,
            cssClasses = _this$props4.cssClasses,
            placeholder = _this$props4.placeholder,
            autofocus = _this$props4.autofocus,
            showSubmit = _this$props4.showSubmit,
            showReset = _this$props4.showReset,
            showLoadingIndicator = _this$props4.showLoadingIndicator,
            templates = _this$props4.templates,
            isSearchStalled = _this$props4.isSearchStalled,
            searchAsYouType = _this$props4.searchAsYouType;
        var query = searchAsYouType ? this.props.query : this.state.query;
        return index.createElement("div", {
          className: cssClasses.root
        }, index.createElement("form", {
          action: "",
          role: "search",
          className: cssClasses.form,
          noValidate: true,
          onSubmit: this.onSubmit,
          onReset: this.onReset
        }, index.createElement("input", {
          ref: function ref(inputRef) {
            return _this2.input = inputRef;
          },
          value: query,
          disabled: this.props.disabled,
          className: cssClasses.input,
          type: "search",
          placeholder: placeholder,
          autoFocus: autofocus,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          spellCheck: false,
          maxLength: 512,
          onChange: this.onChange
        }), index.createElement(Template, {
          templateKey: "submit",
          rootTagName: "button",
          rootProps: {
            className: cssClasses.submit,
            type: 'submit',
            title: 'Submit the search query.',
            hidden: !showSubmit
          },
          templates: templates,
          data: {
            cssClasses: cssClasses
          }
        }), index.createElement(Template, {
          templateKey: "reset",
          rootTagName: "button",
          rootProps: {
            className: cssClasses.reset,
            type: 'reset',
            title: 'Clear the search query.',
            hidden: !(showReset && query.trim() && !isSearchStalled)
          },
          templates: templates,
          data: {
            cssClasses: cssClasses
          }
        }), showLoadingIndicator && index.createElement(Template, {
          templateKey: "loadingIndicator",
          rootTagName: "span",
          rootProps: {
            className: cssClasses.loadingIndicator,
            hidden: !isSearchStalled
          },
          templates: templates,
          data: {
            cssClasses: cssClasses
          }
        })));
      }
    }]);

    return SearchBox;
  }(Component$1);

  _defineProperty(SearchBox, "defaultProps", {
    query: '',
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    onChange: noop,
    onSubmit: noop,
    onReset: noop,
    refine: noop
  });

  var RefinementList$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RefinementList, _Component);

    function RefinementList(props) {
      var _this;

      _classCallCheck(this, RefinementList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RefinementList).call(this, props));
      _this.handleItemClick = _this.handleItemClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(RefinementList, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var isStateDifferent = nextState !== this.state;
        var isFacetValuesDifferent = !isEqual(this.props.facetValues, nextProps.facetValues);
        var shouldUpdate = isStateDifferent || isFacetValuesDifferent;
        return shouldUpdate;
      }
    }, {
      key: "refine",
      value: function refine(facetValueToRefine, isRefined) {
        this.props.toggleRefinement(facetValueToRefine, isRefined);
      }
    }, {
      key: "_generateFacetItem",
      value: function _generateFacetItem(facetValue) {
        var _cx;

        var subItems;
        var hasChildren = facetValue.data && facetValue.data.length > 0;

        if (hasChildren) {
          subItems = index.createElement(RefinementList, _extends({}, this.props, {
            depth: this.props.depth + 1,
            facetValues: facetValue.data,
            showMore: false,
            className: this.props.cssClasses.childList
          }));
        }

        var url = this.props.createURL(facetValue.value);

        var templateData = _objectSpread({}, facetValue, {
          url: url,
          attribute: this.props.attribute,
          cssClasses: this.props.cssClasses
        });

        var key = facetValue.value;

        if (facetValue.isRefined !== undefined) {
          key += "/".concat(facetValue.isRefined);
        }

        if (facetValue.count !== undefined) {
          key += "/".concat(facetValue.count);
        }

        return index.createElement(RefinementListItem, {
          templateKey: "item",
          key: key,
          facetValueToRefine: facetValue.value,
          handleClick: this.handleItemClick,
          isRefined: facetValue.isRefined,
          className: classnames(this.props.cssClasses.item, (_cx = {}, _defineProperty(_cx, this.props.cssClasses.selectedItem, facetValue.isRefined), _defineProperty(_cx, this.props.cssClasses.disabledItem, !facetValue.count), _defineProperty(_cx, this.props.cssClasses.parentItem, hasChildren), _cx)),
          subItems: subItems,
          templateData: templateData,
          templateProps: this.props.templateProps
        });
      } // Click events on DOM tree like LABEL > INPUT will result in two click events
      // instead of one.
      // No matter the framework, see https://www.google.com/search?q=click+label+twice
      //
      // Thus making it hard to distinguish activation from deactivation because both click events
      // are very close. Debounce is a solution but hacky.
      //
      // So the code here checks if the click was done on or in a LABEL. If this LABEL
      // has a checkbox inside, we ignore the first click event because we will get another one.
      //
      // We also check if the click was done inside a link and then e.preventDefault() because we already
      // handle the url
      //
      // Finally, we always stop propagation of the event to avoid multiple levels RefinementLists to fail: click
      // on child would click on parent also

    }, {
      key: "handleItemClick",
      value: function handleItemClick(_ref) {
        var facetValueToRefine = _ref.facetValueToRefine,
            originalEvent = _ref.originalEvent,
            isRefined = _ref.isRefined;

        if (isSpecialClick(originalEvent)) {
          // do not alter the default browser behavior
          // if one special key is down
          return;
        }

        if (isRefined && originalEvent.target.parentNode.querySelector('input[type="radio"]:checked')) {
          // Prevent refinement for being reset if the user clicks on an already checked radio button
          return;
        }

        if (originalEvent.target.tagName === 'INPUT') {
          this.refine(facetValueToRefine, isRefined);
          return;
        }

        var parent = originalEvent.target;

        while (parent !== originalEvent.currentTarget) {
          if (parent.tagName === 'LABEL' && (parent.querySelector('input[type="checkbox"]') || parent.querySelector('input[type="radio"]'))) {
            return;
          }

          if (parent.tagName === 'A' && parent.href) {
            originalEvent.preventDefault();
          }

          parent = parent.parentNode;
        }

        originalEvent.stopPropagation();
        this.refine(facetValueToRefine, isRefined);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.searchBox && !nextProps.isFromSearch) {
          this.searchBox.resetInput();
        }
      }
    }, {
      key: "refineFirstValue",
      value: function refineFirstValue() {
        var firstValue = this.props.facetValues[0];

        if (firstValue) {
          var actualValue = firstValue.value;
          this.props.toggleRefinement(actualValue);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // Adding `-lvl0` classes
        var cssClassList = classnames(this.props.cssClasses.list, _defineProperty({}, "".concat(this.props.cssClasses.depth).concat(this.props.depth), this.props.cssClasses.depth));
        var showMoreButtonClassName = classnames(this.props.cssClasses.showMore, _defineProperty({}, this.props.cssClasses.disabledShowMore, !(this.props.showMore === true && this.props.canToggleShowMore)));
        var showMoreButton = this.props.showMore === true && index.createElement(Template, _extends({}, this.props.templateProps, {
          templateKey: "showMoreText",
          rootTagName: "button",
          rootProps: {
            className: showMoreButtonClassName,
            onClick: this.props.toggleShowMore
          },
          data: {
            isShowingMore: this.props.isShowingMore
          }
        }));
        var shouldDisableSearchBox = this.props.searchIsAlwaysActive !== true && !(this.props.isFromSearch || !this.props.hasExhaustiveItems);
        var searchBox = this.props.searchFacetValues && index.createElement("div", {
          className: this.props.cssClasses.searchBox
        }, index.createElement(SearchBox, {
          ref: function ref(searchBoxRef) {
            return _this2.searchBox = searchBoxRef;
          },
          placeholder: this.props.searchPlaceholder,
          disabled: shouldDisableSearchBox,
          cssClasses: this.props.cssClasses.searchable,
          templates: this.props.templateProps.templates,
          onChange: function onChange(event) {
            return _this2.props.searchFacetValues(event.target.value);
          },
          onReset: function onReset() {
            return _this2.props.searchFacetValues('');
          },
          onSubmit: function onSubmit() {
            return _this2.refineFirstValue();
          } // This sets the search box to a controlled state because
          // we don't rely on the `refine` prop but on `onChange`.
          ,
          searchAsYouType: false
        }));
        var facetValues = this.props.facetValues && this.props.facetValues.length > 0 && index.createElement("ul", {
          className: cssClassList
        }, this.props.facetValues.map(this._generateFacetItem, this));
        var noResults = this.props.searchFacetValues && this.props.isFromSearch && this.props.facetValues.length === 0 && index.createElement(Template, _extends({}, this.props.templateProps, {
          templateKey: "searchableNoResults",
          rootProps: {
            className: this.props.cssClasses.noResults
          }
        }));
        return index.createElement("div", {
          className: classnames(this.props.cssClasses.root, _defineProperty({}, this.props.cssClasses.noRefinementRoot, !this.props.facetValues || this.props.facetValues.length === 0), this.props.className)
        }, this.props.children, searchBox, facetValues, noResults, showMoreButton);
      }
    }]);

    return RefinementList;
  }(Component$1);

  RefinementList$1.defaultProps = {
    cssClasses: {},
    depth: 0
  };

  var defaultTemplates$2 = {
    item: '<a class="{{cssClasses.link}}" href="{{url}}">' + '<span class="{{cssClasses.label}}">{{label}}</span>' + '<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>' + '</a>',
    showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  "
  };

  var withUsage$r = createDocumentationMessageGenerator({
    name: 'hierarchical-menu'
  });
  var suit$5 = component('HierarchicalMenu');

  var renderer$3 = function renderer(_ref) {
    var cssClasses = _ref.cssClasses,
        containerNode = _ref.containerNode,
        showMore = _ref.showMore,
        templates = _ref.templates,
        renderState = _ref.renderState;
    return function (_ref2, isFirstRendering) {
      var createURL = _ref2.createURL,
          items = _ref2.items,
          refine = _ref2.refine,
          instantSearchInstance = _ref2.instantSearchInstance,
          isShowingMore = _ref2.isShowingMore,
          toggleShowMore = _ref2.toggleShowMore,
          canToggleShowMore = _ref2.canToggleShowMore;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$2,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(RefinementList$1, {
        createURL: createURL,
        cssClasses: cssClasses,
        facetValues: items,
        templateProps: renderState.templateProps,
        toggleRefinement: refine,
        showMore: showMore,
        toggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        canToggleShowMore: canToggleShowMore
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} HierarchicalMenuCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element when no refinements.
   * @property {string|string[]} [list] CSS class to add to the list element.
   * @property {string|string[]} [childList] CSS class to add to the child list element.
   * @property {string|string[]} [item] CSS class to add to each item element.
   * @property {string|string[]} [selectedItem] CSS class to add to each selected item element.
   * @property {string|string[]} [parentItem] CSS class to add to each parent item element.
   * @property {string|string[]} [link] CSS class to add to each link (when using the default template).
   * @property {string|string[]} [label] CSS class to add to each label (when using the default template).
   * @property {string|string[]} [count] CSS class to add to each count element (when using the default template).
   * @property {string|string[]} [showMore] CSS class to add to the show more element.
   * @property {string|string[]} [disabledShowMore] CSS class to add to the disabled show more element.
   */

  /**
   * @typedef {Object} HierarchicalMenuTemplates
   * @property {string|function(object):string} [item] Item template, provided with `name`, `count`, `isRefined`, `url` data properties.
   * @property {string|function} [showMoreText] Template used for the show more text, provided with `isShowingMore` data property.
   */

  /**
   * @typedef {Object} HierarchicalMenuWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string[]} attributes Array of attributes to use to generate the hierarchy of the menu.
   * @property {string} [separator = " > "] Separator used in the attributes to separate level values.
   * @property {string} [rootPath] Prefix path to use if the first level is not the root level.
   * @property {boolean} [showParentLevel = true] Show the siblings of the selected parent level of the current refined value. This
   * @property {number} [limit = 10] Max number of values to display.
   * @property {boolean} [showMore = false] Whether to display the "show more" button.
   * @property {number} [showMoreLimit = 20] Max number of values to display when showing more.
   * does not impact the root level.
   *
   * The hierarchical menu is able to show or hide the siblings with `showParentLevel`.
   *
   * With `showParentLevel` set to `true` (default):
   * - Parent lvl0
   *   - **lvl1**
   *     - **lvl2**
   *     - lvl2
   *     - lvl2
   *   - lvl 1
   *   - lvl 1
   * - Parent lvl0
   * - Parent lvl0
   *
   * With `showParentLevel` set to `false`:
   * - Parent lvl0
   *   - **lvl1**
   *     - **lvl2**
   * - Parent lvl0
   * - Parent lvl0
   * @property {string[]|function} [sortBy = ['name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   * @property {HierarchicalMenuTemplates} [templates] Templates to use for the widget.
   * @property {HierarchicalMenuCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   */

  /**
   * The hierarchical menu widget is used to create a navigation based on a hierarchy of facet attributes.
   *
   * It is commonly used for categories with subcategories.
   *
   * All attributes (lvl0, lvl1 here) must be declared as [attributes for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting) in your
   * Algolia settings.
   *
   * By default, the separator we expect is ` > ` (with spaces) but you can use
   * a different one by using the `separator` option.
   * @requirements
   * Your objects must be formatted in a specific way to be
   * able to display hierarchical menus. Here's an example:
   *
   * ```javascript
   * {
   *   "objectID": "123",
   *   "name": "orange",
   *   "categories": {
   *     "lvl0": "fruits",
   *     "lvl1": "fruits > citrus"
   *   }
   * }
   * ```
   *
   * Every level must be specified entirely.
   * It's also possible to have multiple values per level, for example:
   *
   * ```javascript
   * {
   *   "objectID": "123",
   *   "name": "orange",
   *   "categories": {
   *     "lvl0": ["fruits", "vitamins"],
   *     "lvl1": ["fruits > citrus", "vitamins > C"]
   *   }
   * }
   * ```
   * @type {WidgetFactory}
   * @devNovel HierarchicalMenu
   * @category filter
   * @param {HierarchicalMenuWidgetOptions} $0 The HierarchicalMenu widget options.
   * @return {Widget} A new HierarchicalMenu widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.hierarchicalMenu({
   *     container: '#hierarchical-categories',
   *     attributes: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2'],
   *   })
   * );
   */


  function hierarchicalMenu() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attributes = _ref3.attributes,
        separator = _ref3.separator,
        rootPath = _ref3.rootPath,
        showParentLevel = _ref3.showParentLevel,
        limit = _ref3.limit,
        _ref3$showMore = _ref3.showMore,
        showMore = _ref3$showMore === void 0 ? false : _ref3$showMore,
        showMoreLimit = _ref3.showMoreLimit,
        sortBy = _ref3.sortBy,
        transformItems = _ref3.transformItems,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$2 : _ref3$templates,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;

    if (!container) {
      throw new Error(withUsage$r('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$5(), userCssClasses.root),
      noRefinementRoot: classnames(suit$5({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$5({
        descendantName: 'list'
      }), userCssClasses.list),
      childList: classnames(suit$5({
        descendantName: 'list',
        modifierName: 'child'
      }), userCssClasses.childList),
      item: classnames(suit$5({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$5({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      parentItem: classnames(suit$5({
        descendantName: 'item',
        modifierName: 'parent'
      }), userCssClasses.parentItem),
      link: classnames(suit$5({
        descendantName: 'link'
      }), userCssClasses.link),
      label: classnames(suit$5({
        descendantName: 'label'
      }), userCssClasses.label),
      count: classnames(suit$5({
        descendantName: 'count'
      }), userCssClasses.count),
      showMore: classnames(suit$5({
        descendantName: 'showMore'
      }), userCssClasses.showMore),
      disabledShowMore: classnames(suit$5({
        descendantName: 'showMore',
        modifierName: 'disabled'
      }), userCssClasses.disabledShowMore)
    };
    var specializedRenderer = renderer$3({
      cssClasses: cssClasses,
      containerNode: containerNode,
      templates: templates,
      showMore: showMore,
      renderState: {}
    });
    var makeHierarchicalMenu = connectHierarchicalMenu(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeHierarchicalMenu({
      attributes: attributes,
      separator: separator,
      rootPath: rootPath,
      showParentLevel: showParentLevel,
      limit: limit,
      showMore: showMore,
      showMoreLimit: showMoreLimit,
      sortBy: sortBy,
      transformItems: transformItems
    });
  }

  var Hits = function Hits(_ref) {
    var results = _ref.results,
        hits = _ref.hits,
        cssClasses = _ref.cssClasses,
        templateProps = _ref.templateProps;

    if (results.hits.length === 0) {
      return index.createElement(Template, _extends({}, templateProps, {
        templateKey: "empty",
        rootProps: {
          className: classnames(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
      }));
    }

    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement("ol", {
      className: cssClasses.list
    }, hits.map(function (hit, position) {
      return index.createElement(Template, _extends({}, templateProps, {
        templateKey: "item",
        rootTagName: "li",
        rootProps: {
          className: cssClasses.item
        },
        key: hit.objectID,
        data: _objectSpread({}, hit, {
          __hitIndex: position
        })
      }));
    })));
  };

  Hits.defaultProps = {
    results: {
      hits: []
    },
    hits: []
  };

  var defaultTemplates$3 = {
    empty: 'No results',
    item: function item(data) {
      return JSON.stringify(data, null, 2);
    }
  };

  var withUsage$s = createDocumentationMessageGenerator({
    name: 'hits'
  });
  var suit$6 = component('Hits');
  var HitsWithInsightsListener = withInsightsListener(Hits);

  var renderer$4 = function renderer(_ref) {
    var renderState = _ref.renderState,
        cssClasses = _ref.cssClasses,
        containerNode = _ref.containerNode,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var receivedHits = _ref2.hits,
          results = _ref2.results,
          instantSearchInstance = _ref2.instantSearchInstance,
          insights = _ref2.insights;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$3,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(HitsWithInsightsListener, {
        cssClasses: cssClasses,
        hits: receivedHits,
        results: results,
        templateProps: renderState.templateProps,
        insights: insights
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} HitsCSSClasses
   * @property {string|string[]} [root] CSS class to add to the wrapping element.
   * @property {string|string[]} [emptyRoot] CSS class to add to the wrapping element when no results.
   * @property {string|string[]} [list] CSS class to add to the list of results.
   * @property {string|string[]} [item] CSS class to add to each result.
   */

  /**
   * @typedef {Object} HitsTemplates
   * @property {string|function(object):string} [empty=''] Template to use when there are no results.
   * @property {string|function(object):string} [item=''] Template to use for each result. This template will receive an object containing a single record. The record will have a new property `__hitIndex` for the position of the record in the list of displayed hits.
   */

  /**
   * @typedef {Object} HitsWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {HitsTemplates} [templates] Templates to use for the widget.
   * @property {HitsCSSClasses} [cssClasses] CSS classes to add.
   * @property {boolean} [escapeHTML = true] Escape HTML entities from hits string values.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * Display the list of results (hits) from the current search.
   *
   * This is a traditional display of the hits. It has to be implemented
   * together with a pagination widget, to let the user browse the results
   * beyond the first page.
   * @type {WidgetFactory}
   * @devNovel Hits
   * @category basic
   * @param {HitsWidgetOptions} $0 Options of the Hits widget.
   * @return {Widget} A new instance of Hits widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.hits({
   *     container: '#hits-container',
   *     templates: {
   *       empty: 'No results',
   *       item: '<strong>Hit {{objectID}}</strong>: {{{_highlightResult.name.value}}}'
   *     },
   *     transformItems: items => items.map(item => item),
   *   })
   * );
   */


  function hits(_ref3) {
    var container = _ref3.container,
        escapeHTML = _ref3.escapeHTML,
        transformItems = _ref3.transformItems,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$3 : _ref3$templates,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;

    if (!container) {
      throw new Error(withUsage$s('The `container` option is required.'));
    }

    _warning(typeof templates.allItems === 'undefined', "The template `allItems` does not exist since InstantSearch.js 3.\n\nYou may want to migrate using `connectHits`: ".concat(createDocumentationLink({
      name: 'hits',
      connector: true
    }), "."));
    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$6(), userCssClasses.root),
      emptyRoot: classnames(suit$6({
        modifierName: 'empty'
      }), userCssClasses.emptyRoot),
      list: classnames(suit$6({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$6({
        descendantName: 'item'
      }), userCssClasses.item)
    };
    var specializedRenderer = renderer$4({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeHits = withInsights(connectHits)(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeHits({
      escapeHTML: escapeHTML,
      transformItems: transformItems
    });
  }

  var Selector =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Selector, _Component);

    function Selector() {
      _classCallCheck(this, Selector);

      return _possibleConstructorReturn(this, _getPrototypeOf(Selector).apply(this, arguments));
    }

    _createClass(Selector, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.handleChange = this.handleChange.bind(this);
      }
    }, {
      key: "handleChange",
      value: function handleChange(event) {
        this.props.setValue(event.target.value);
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            currentValue = _this$props.currentValue,
            options = _this$props.options;
        return index.createElement("select", {
          className: classnames(this.props.cssClasses.select),
          onChange: this.handleChange,
          value: "".concat(currentValue)
        }, options.map(function (option) {
          return index.createElement("option", {
            className: classnames(_this.props.cssClasses.option),
            key: option.label + option.value,
            value: "".concat(option.value)
          }, option.label);
        }));
      }
    }]);

    return Selector;
  }(Component$1);

  var withUsage$t = createDocumentationMessageGenerator({
    name: 'hits-per-page'
  });
  var suit$7 = component('HitsPerPage');

  var renderer$5 = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses;
    return function (_ref2, isFirstRendering) {
      var items = _ref2.items,
          refine = _ref2.refine;
      if (isFirstRendering) return;

      var _ref3 = find$1(items, function (_ref4) {
        var isRefined = _ref4.isRefined;
        return isRefined;
      }) || {},
          currentValue = _ref3.value;

      render$1(index.createElement("div", {
        className: cssClasses.root
      }, index.createElement(Selector, {
        cssClasses: cssClasses,
        currentValue: currentValue,
        options: items,
        setValue: refine
      })), containerNode);
    };
  };
  /**
   * @typedef {Object} HitsPerPageCSSClasses
   * @property {string|string[]} [root] CSS classes added to the outer `<div>`.
   * @property {string|string[]} [select] CSS classes added to the parent `<select>`.
   * @property {string|string[]} [option] CSS classes added to each `<option>`.
   */

  /**
   * @typedef {Object} HitsPerPageItems
   * @property {number} value number of hits to display per page.
   * @property {string} label Label to display in the option.
   * @property {boolean} default The default hits per page on first search.
   */

  /**
   * @typedef {Object} HitsPerPageWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {HitsPerPageItems[]} items Array of objects defining the different values and labels.
   * @property {HitsPerPageCSSClasses} [cssClasses] CSS classes to be added.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * The hitsPerPage widget gives the user the ability to change the number of results
   * displayed in the hits widget.
   *
   * You can specify the default hits per page using a boolean in the items[] array. If none is specified, this first hits per page option will be picked.
   * @type {WidgetFactory}
   * @devNovel HitsPerPage
   * @category basic
   * @param {HitsPerPageWidgetOptions} $0 The options of the HitPerPageSelector widget.
   * @return {Widget} A new instance of the HitPerPageSelector widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.hitsPerPage({
   *     container: '#hits-per-page',
   *     items: [
   *       {value: 3, label: '3 per page', default: true},
   *       {value: 6, label: '6 per page'},
   *       {value: 12, label: '12 per page'},
   *     ]
   *   })
   * );
   */


  function hitsPerPage() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref5.container,
        items = _ref5.items,
        _ref5$cssClasses = _ref5.cssClasses,
        userCssClasses = _ref5$cssClasses === void 0 ? {} : _ref5$cssClasses,
        transformItems = _ref5.transformItems;

    if (!container) {
      throw new Error(withUsage$t('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$7(), userCssClasses.root),
      select: classnames(suit$7({
        descendantName: 'select'
      }), userCssClasses.select),
      option: classnames(suit$7({
        descendantName: 'option'
      }), userCssClasses.option)
    };
    var specializedRenderer = renderer$5({
      containerNode: containerNode,
      cssClasses: cssClasses
    });
    var makeHitsPerPage = connectHitsPerPage(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeHitsPerPage({
      items: items,
      transformItems: transformItems
    });
  }

  var InfiniteHits = function InfiniteHits(_ref) {
    var results = _ref.results,
        hits = _ref.hits,
        hasShowPrevious = _ref.hasShowPrevious,
        showPrevious = _ref.showPrevious,
        showMore = _ref.showMore,
        isFirstPage = _ref.isFirstPage,
        isLastPage = _ref.isLastPage,
        cssClasses = _ref.cssClasses,
        templateProps = _ref.templateProps;

    if (results.hits.length === 0) {
      return index.createElement(Template, _extends({}, templateProps, {
        templateKey: "empty",
        rootProps: {
          className: classnames(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
      }));
    }

    return index.createElement("div", {
      className: cssClasses.root
    }, hasShowPrevious && index.createElement(Template, _extends({}, templateProps, {
      templateKey: "showPreviousText",
      rootTagName: "button",
      rootProps: {
        className: classnames(cssClasses.loadPrevious, _defineProperty({}, cssClasses.disabledLoadPrevious, isFirstPage)),
        disabled: isFirstPage,
        onClick: showPrevious
      }
    })), index.createElement("ol", {
      className: cssClasses.list
    }, hits.map(function (hit, position) {
      return index.createElement(Template, _extends({}, templateProps, {
        templateKey: "item",
        rootTagName: "li",
        rootProps: {
          className: cssClasses.item
        },
        key: hit.objectID,
        data: _objectSpread({}, hit, {
          __hitIndex: position
        })
      }));
    })), index.createElement(Template, _extends({}, templateProps, {
      templateKey: "showMoreText",
      rootTagName: "button",
      rootProps: {
        className: classnames(cssClasses.loadMore, _defineProperty({}, cssClasses.disabledLoadMore, isLastPage)),
        disabled: isLastPage,
        onClick: showMore
      }
    })));
  };

  var defaultTemplates$4 = {
    empty: 'No results',
    showPreviousText: 'Show previous results',
    showMoreText: 'Show more results',
    item: function item(data) {
      return JSON.stringify(data, null, 2);
    }
  };

  var withUsage$u = createDocumentationMessageGenerator({
    name: 'infinite-hits'
  });
  var suit$8 = component('InfiniteHits');
  var InfiniteHitsWithInsightsListener = withInsightsListener(InfiniteHits);

  var renderer$6 = function renderer(_ref) {
    var cssClasses = _ref.cssClasses,
        containerNode = _ref.containerNode,
        renderState = _ref.renderState,
        templates = _ref.templates,
        hasShowPrevious = _ref.showPrevious;
    return function (_ref2, isFirstRendering) {
      var hits = _ref2.hits,
          results = _ref2.results,
          showMore = _ref2.showMore,
          showPrevious = _ref2.showPrevious,
          isFirstPage = _ref2.isFirstPage,
          isLastPage = _ref2.isLastPage,
          instantSearchInstance = _ref2.instantSearchInstance,
          insights = _ref2.insights;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$4,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(InfiniteHitsWithInsightsListener, {
        cssClasses: cssClasses,
        hits: hits,
        results: results,
        hasShowPrevious: hasShowPrevious,
        showPrevious: showPrevious,
        showMore: showMore,
        templateProps: renderState.templateProps,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        insights: insights
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} InfiniteHitsTemplates
   * @property {string|function} [empty = "No results"] Template used when there are no results.
   * @property {string|function} [showMoreText = "Show more results"] Template used for the "load more" button.
   * @property {string|function} [item = ""] Template used for each result. This template will receive an object containing a single record.
   */

  /**
   * @typedef {object} InfiniteHitsCSSClasses
   * @property {string|string[]} [root] CSS class to add to the wrapping element.
   * @property {string|string[]} [emptyRoot] CSS class to add to the wrapping element when no results.
   * @property {string|string[]} [list] CSS class to add to the list of results.
   * @property {string|string[]} [item] CSS class to add to each result.
   * @property {string|string[]} [loadMore] CSS class to add to the load more button.
   * @property {string|string[]} [disabledLoadMore] CSS class to add to the load more button when disabled.
   */

  /**
   * @typedef {Object} InfiniteHitsWidgetOptions
   * @property  {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property  {InfiniteHitsTemplates} [templates] Templates to use for the widget.
   * @property  {InfiniteHitsCSSClasses} [cssClasses] CSS classes to add.
   * @property {boolean} [escapeHTML = true] Escape HTML entities from hits string values.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * Display the list of results (hits) from the current search.
   *
   * This widget uses the infinite hits pattern. It contains a button that
   * will let the user load more results to the list. This is particularly
   * handy on mobile implementations.
   * @type {WidgetFactory}
   * @devNovel InfiniteHits
   * @category basic
   * @param {InfiniteHitsWidgetOptions} $0 The options for the InfiniteHits widget.
   * @return {Widget} Creates a new instance of the InfiniteHits widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.infiniteHits({
   *     container: '#infinite-hits-container',
   *     templates: {
   *       empty: 'No results',
   *       showMoreText: 'Show more results',
   *       item: '<strong>Hit {{objectID}}</strong>: {{{_highlightResult.name.value}}}'
   *     },
   *     transformItems: items => items.map(item => item),
   *   })
   * );
   */


  var infiniteHits = function infiniteHits() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        escapeHTML = _ref3.escapeHTML,
        transformItems = _ref3.transformItems,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$4 : _ref3$templates,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        showPrevious = _ref3.showPrevious;

    if (!container) {
      throw new Error(withUsage$u('The `container` option is required.'));
    }

    _warning( // @ts-ignore: We have this specific check because unlike `hits`, `infiniteHits` does not support
    // the `allItems` template. This can be misleading as they are very similar.
    typeof templates.allItems === 'undefined', "The template `allItems` does not exist since InstantSearch.js 3.\n\n You may want to migrate using `connectInfiniteHits`: ".concat(createDocumentationLink({
      name: 'infinite-hits',
      connector: true
    }), "."));
    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$8(), userCssClasses.root),
      emptyRoot: classnames(suit$8({
        modifierName: 'empty'
      }), userCssClasses.emptyRoot),
      item: classnames(suit$8({
        descendantName: 'item'
      }), userCssClasses.item),
      list: classnames(suit$8({
        descendantName: 'list'
      }), userCssClasses.list),
      loadPrevious: classnames(suit$8({
        descendantName: 'loadPrevious'
      }), userCssClasses.loadPrevious),
      disabledLoadPrevious: classnames(suit$8({
        descendantName: 'loadPrevious',
        modifierName: 'disabled'
      }), userCssClasses.disabledLoadPrevious),
      loadMore: classnames(suit$8({
        descendantName: 'loadMore'
      }), userCssClasses.loadMore),
      disabledLoadMore: classnames(suit$8({
        descendantName: 'loadMore',
        modifierName: 'disabled'
      }), userCssClasses.disabledLoadMore)
    };
    var specializedRenderer = renderer$6({
      containerNode: containerNode,
      cssClasses: cssClasses,
      templates: templates,
      showPrevious: showPrevious,
      renderState: {}
    });
    var makeInfiniteHits = withInsights(connectInfiniteHits)(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeInfiniteHits({
      escapeHTML: escapeHTML,
      transformItems: transformItems,
      showPrevious: showPrevious
    });
  };

  /* eslint-disable max-len */
  var defaultTemplates$5 = {
    item: '<a class="{{cssClasses.link}}" href="{{url}}">' + '<span class="{{cssClasses.label}}">{{label}}</span>' + '<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>' + '</a>',
    showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  "
  };

  var withUsage$v = createDocumentationMessageGenerator({
    name: 'menu'
  });
  var suit$9 = component('Menu');

  var renderer$7 = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates,
        showMore = _ref.showMore;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          items = _ref2.items,
          createURL = _ref2.createURL,
          instantSearchInstance = _ref2.instantSearchInstance,
          isShowingMore = _ref2.isShowingMore,
          toggleShowMore = _ref2.toggleShowMore,
          canToggleShowMore = _ref2.canToggleShowMore;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$5,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      var facetValues = items.map(function (facetValue) {
        return _objectSpread({}, facetValue, {
          url: createURL(facetValue.name)
        });
      });
      render$1(index.createElement(RefinementList$1, {
        createURL: createURL,
        cssClasses: cssClasses,
        facetValues: facetValues,
        showMore: showMore,
        templateProps: renderState.templateProps,
        toggleRefinement: refine,
        toggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        canToggleShowMore: canToggleShowMore
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} MenuCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element when no refinements.
   * @property {string|string[]} [list] CSS class to add to the list element.
   * @property {string|string[]} [item] CSS class to add to each item element.
   * @property {string|string[]} [selectedItem] CSS class to add to each selected item element.
   * @property {string|string[]} [link] CSS class to add to each link (when using the default template).
   * @property {string|string[]} [label] CSS class to add to each label (when using the default template).
   * @property {string|string[]} [count] CSS class to add to each count element (when using the default template).
   * @property {string|string[]} [showMore] CSS class to add to the show more button.
   * @property {string|string[]} [disabledShowMore] CSS class to add to the disabled show more button.
   */

  /**
   * @typedef {Object} MenuTemplates
   * @property {string|function({count: number, cssClasses: object, isRefined: boolean, label: string, url: string, value: string}):string} [item] Item template. The string template gets the same values as the function.
   * @property {string} [showMoreText] Template used for the show more text, provided with `isShowingMore` data property.
   */

  /**
   * @typedef {Object} MenuWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string} attribute Name of the attribute for faceting
   * @property {string[]|function} [sortBy=['isRefined', 'name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {MenuTemplates} [templates] Customize the output through templating.
   * @property {number} [limit=10] How many facets values to retrieve.
   * @property {boolean} [showMore=false] Limit the number of results and display a showMore button.
   * @property {number} [showMoreLimit=20] Max number of values to display when showing more.
   * @property {MenuCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * Create a menu based on a facet. A menu displays facet values and let the user selects only one value at a time.
   * It also displays an empty value which lets the user "unselect" any previous selection.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   * @type {WidgetFactory}
   * @devNovel Menu
   * @category filter
   * @param {MenuWidgetOptions} $0 The Menu widget options.
   * @return {Widget} Creates a new instance of the Menu widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.menu({
   *     container: '#categories',
   *     attribute: 'hierarchicalCategories.lvl0',
   *     limit: 10,
   *   })
   * );
   */


  function menu(_ref3) {
    var container = _ref3.container,
        attribute = _ref3.attribute,
        sortBy = _ref3.sortBy,
        limit = _ref3.limit,
        showMore = _ref3.showMore,
        showMoreLimit = _ref3.showMoreLimit,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$5 : _ref3$templates,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$v('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$9(), userCssClasses.root),
      noRefinementRoot: classnames(suit$9({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$9({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$9({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$9({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      link: classnames(suit$9({
        descendantName: 'link'
      }), userCssClasses.link),
      label: classnames(suit$9({
        descendantName: 'label'
      }), userCssClasses.label),
      count: classnames(suit$9({
        descendantName: 'count'
      }), userCssClasses.count),
      showMore: classnames(suit$9({
        descendantName: 'showMore'
      }), userCssClasses.showMore),
      disabledShowMore: classnames(suit$9({
        descendantName: 'showMore',
        modifierName: 'disabled'
      }), userCssClasses.disabledShowMore)
    };
    var specializedRenderer = renderer$7({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates,
      showMore: showMore
    });
    var makeWidget = connectMenu(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      attribute: attribute,
      limit: limit,
      showMore: showMore,
      showMoreLimit: showMoreLimit,
      sortBy: sortBy,
      transformItems: transformItems
    });
  }

  var defaultTemplates$6 = {
    item: "<label class=\"{{cssClasses.label}}\">\n  <input type=\"checkbox\"\n         class=\"{{cssClasses.checkbox}}\"\n         value=\"{{value}}\"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class=\"{{cssClasses.labelText}}\">{{{highlighted}}}</span>\n  <span class=\"{{cssClasses.count}}\">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>",
    showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ",
    searchableNoResults: 'No results',
    searchableReset: "\n  <svg class=\"{{cssClasses.resetIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"10\" height=\"10\">\n    <path d=\"M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z\"></path>\n  </svg>\n    ",
    searchableSubmit: "\n  <svg class=\"{{cssClasses.submitIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 40 40\">\n    <path d=\"M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z\"></path>\n  </svg>\n    ",
    searchableLoadingIndicator: "\n  <svg class=\"{{cssClasses.loadingIcon}}\" width=\"16\" height=\"16\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#444\">\n    <g fill=\"none\" fillRule=\"evenodd\">\n      <g transform=\"translate(1 1)\" strokeWidth=\"2\">\n        <circle strokeOpacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\" />\n        <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n          <animateTransform\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 18 18\"\n            to=\"360 18 18\"\n            dur=\"1s\"\n            repeatCount=\"indefinite\"\n          />\n        </path>\n      </g>\n    </g>\n  </svg>\n    "
  };

  var withUsage$w = createDocumentationMessageGenerator({
    name: 'refinement-list'
  });
  var suit$a = component('RefinementList');
  var searchBoxSuit = component('SearchBox');
  /**
   * Transforms the searchable templates by removing the `searchable` prefix.
   *
   * This makes them usable in the `SearchBox` component.
   *
   * @param {object} templates The widget templates
   * @returns {object} the formatted templates
   */

  function transformTemplates(templates) {
    var allTemplates = _objectSpread({}, templates, {
      submit: templates.searchableSubmit,
      reset: templates.searchableReset,
      loadingIndicator: templates.searchableLoadingIndicator
    });

    var searchableReset = allTemplates.searchableReset,
        searchableSubmit = allTemplates.searchableSubmit,
        searchableLoadingIndicator = allTemplates.searchableLoadingIndicator,
        transformedTemplates = _objectWithoutProperties(allTemplates, ["searchableReset", "searchableSubmit", "searchableLoadingIndicator"]);

    return transformedTemplates;
  }

  var renderer$8 = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        templates = _ref.templates,
        renderState = _ref.renderState,
        showMore = _ref.showMore,
        searchable = _ref.searchable,
        searchablePlaceholder = _ref.searchablePlaceholder,
        searchableIsAlwaysActive = _ref.searchableIsAlwaysActive;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          items = _ref2.items,
          createURL = _ref2.createURL,
          searchForItems = _ref2.searchForItems,
          isFromSearch = _ref2.isFromSearch,
          instantSearchInstance = _ref2.instantSearchInstance,
          toggleShowMore = _ref2.toggleShowMore,
          isShowingMore = _ref2.isShowingMore,
          hasExhaustiveItems = _ref2.hasExhaustiveItems,
          canToggleShowMore = _ref2.canToggleShowMore;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(RefinementList$1, {
        createURL: createURL,
        cssClasses: cssClasses,
        facetValues: items,
        templateProps: renderState.templateProps,
        toggleRefinement: refine,
        searchFacetValues: searchable ? searchForItems : undefined,
        searchPlaceholder: searchablePlaceholder,
        searchIsAlwaysActive: searchableIsAlwaysActive,
        isFromSearch: isFromSearch,
        showMore: showMore,
        toggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        hasExhaustiveItems: hasExhaustiveItems,
        canToggleShowMore: canToggleShowMore
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} RefinementListTemplates
   * @property  {string|function(RefinementListItemData):string} [item] Item template, provided with `label`, `highlighted`, `value`, `count`, `isRefined`, `url` data properties.
   * @property {string|function} [searchableNoResults] Templates to use for search for facet values.
   * @property {string|function} [showMoreText] Template used for the show more text, provided with `isShowingMore` data property.
   */

  /**
   * @typedef {Object} RefinementListItemData
   * @property {number} count The number of occurrences of the facet in the result set.
   * @property {boolean} isRefined True if the value is selected.
   * @property {string} label The label to display.
   * @property {string} value The value used for refining.
   * @property {string} highlighted The label highlighted (when using search for facet values). This value is displayed in the default template.
   * @property {string} url The url with this refinement selected.
   * @property {object} cssClasses Object containing all the classes computed for the item.
   */

  /**
   * @typedef {Object} RefinementListCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element when no refinements.
   * @property {string|string[]} [noResults] CSS class to add to the root element with no results.
   * @property {string|string[]} [list] CSS class to add to the list element.
   * @property {string|string[]} [item] CSS class to add to each item element.
   * @property {string|string[]} [selectedItem] CSS class to add to each selected element.
   * @property {string|string[]} [label] CSS class to add to each label element (when using the default template).
   * @property {string|string[]} [checkbox] CSS class to add to each checkbox element (when using the default template).
   * @property {string|string[]} [labelText] CSS class to add to each label text element.
   * @property {string|string[]} [showMore] CSS class to add to the show more element
   * @property {string|string[]} [disabledShowMore] CSS class to add to the disabledshow more element
   * @property {string|string[]} [count] CSS class to add to each count element (when using the default template).
   */

  /**
   * @typedef {Object} RefinementListWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string} attribute Name of the attribute for faceting.
   * @property {"and"|"or"} [operator="or"] How to apply refinements. Possible values: `or`, `and`
   * @property {string[]|function} [sortBy=["isRefined", "count:desc", "name:asc"]] How to sort refinements. Possible values: `count:asc` `count:desc` `name:asc` `name:desc` `isRefined`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   * @property {boolean} [searchable=false] Add a search input to let the user search for more facet values. In order to make this feature work, you need to make the attribute searchable [using the API](https://www.algolia.com/doc/guides/searching/faceting/?language=js#declaring-a-searchable-attribute-for-faceting) or [the dashboard](https://www.algolia.com/explorer/display/).
   * @property {number} [limit = 10] The minimum number of facet values to retrieve.
   * @property {boolean} [showMore = false] Whether to display a button that expands the number of items.
   * @property {number} [showMoreLimit = 20] The max number of items to display if the widget
   * @property {string} [searchablePlaceholder] Value of the search field placeholder.
   * @property {boolean} [searchableIsAlwaysActive=true] When `false` the search field will become disabled if
   * there are less items to display than the `options.limit`, otherwise the search field is always usable.
   * @property {boolean} [searchableEscapeFacetValues=true] When activated, it will escape the facet values that are returned
   * from Algolia. In this case, the surrounding tags will always be `<mark></mark>`.
   * @property {RefinementListTemplates} [templates] Templates to use for the widget.
   * @property {RefinementListCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   */

  /**
   * The refinement list widget is one of the most common widget that you can find
   * in a search UI. With this widget, the user can filter the dataset based on facets.
   *
   * The refinement list displays only the most relevant facets for the current search
   * context. The sort option only affects the facet that are returned by the engine,
   * not which facets are returned.
   *
   * This widget also implements search for facet values, which is a mini search inside the
   * values of the facets. This makes easy to deal with uncommon facet values.
   *
   * @requirements
   *
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   *
   * If you also want to use search for facet values on this attribute, you need to make it searchable using the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
   *
   * @type {WidgetFactory}
   * @devNovel RefinementList
   * @category filter
   * @param {RefinementListWidgetOptions} $0 The RefinementList widget options that you use to customize the widget.
   * @return {Widget} Creates a new instance of the RefinementList widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.refinementList({
   *     container: '#brands',
   *     attribute: 'brand',
   *     operator: 'or',
   *     limit: 10,
   *   })
   * );
   */


  function refinementList() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attribute = _ref3.attribute,
        operator = _ref3.operator,
        sortBy = _ref3.sortBy,
        limit = _ref3.limit,
        showMore = _ref3.showMore,
        showMoreLimit = _ref3.showMoreLimit,
        _ref3$searchable = _ref3.searchable,
        searchable = _ref3$searchable === void 0 ? false : _ref3$searchable,
        _ref3$searchablePlace = _ref3.searchablePlaceholder,
        searchablePlaceholder = _ref3$searchablePlace === void 0 ? 'Search...' : _ref3$searchablePlace,
        _ref3$searchableEscap = _ref3.searchableEscapeFacetValues,
        searchableEscapeFacetValues = _ref3$searchableEscap === void 0 ? true : _ref3$searchableEscap,
        _ref3$searchableIsAlw = _ref3.searchableIsAlwaysActive,
        searchableIsAlwaysActive = _ref3$searchableIsAlw === void 0 ? true : _ref3$searchableIsAlw,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        userTemplates = _ref3$templates === void 0 ? defaultTemplates$6 : _ref3$templates,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$w('The `container` option is required.'));
    }

    var escapeFacetValues = searchable ? Boolean(searchableEscapeFacetValues) : false;
    var containerNode = getContainerNode(container);
    var templates = transformTemplates(_objectSpread({}, defaultTemplates$6, userTemplates));
    var cssClasses = {
      root: classnames(suit$a(), userCssClasses.root),
      noRefinementRoot: classnames(suit$a({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$a({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$a({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$a({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      searchBox: classnames(suit$a({
        descendantName: 'searchBox'
      }), userCssClasses.searchBox),
      label: classnames(suit$a({
        descendantName: 'label'
      }), userCssClasses.label),
      checkbox: classnames(suit$a({
        descendantName: 'checkbox'
      }), userCssClasses.checkbox),
      labelText: classnames(suit$a({
        descendantName: 'labelText'
      }), userCssClasses.labelText),
      count: classnames(suit$a({
        descendantName: 'count'
      }), userCssClasses.count),
      noResults: classnames(suit$a({
        descendantName: 'noResults'
      }), userCssClasses.noResults),
      showMore: classnames(suit$a({
        descendantName: 'showMore'
      }), userCssClasses.showMore),
      disabledShowMore: classnames(suit$a({
        descendantName: 'showMore',
        modifierName: 'disabled'
      }), userCssClasses.disabledShowMore),
      searchable: {
        root: classnames(searchBoxSuit(), userCssClasses.searchableRoot),
        form: classnames(searchBoxSuit({
          descendantName: 'form'
        }), userCssClasses.searchableForm),
        input: classnames(searchBoxSuit({
          descendantName: 'input'
        }), userCssClasses.searchableInput),
        submit: classnames(searchBoxSuit({
          descendantName: 'submit'
        }), userCssClasses.searchableSubmit),
        submitIcon: classnames(searchBoxSuit({
          descendantName: 'submitIcon'
        }), userCssClasses.searchableSubmitIcon),
        reset: classnames(searchBoxSuit({
          descendantName: 'reset'
        }), userCssClasses.searchableReset),
        resetIcon: classnames(searchBoxSuit({
          descendantName: 'resetIcon'
        }), userCssClasses.searchableResetIcon),
        loadingIndicator: classnames(searchBoxSuit({
          descendantName: 'loadingIndicator'
        }), userCssClasses.searchableLoadingIndicator),
        loadingIcon: classnames(searchBoxSuit({
          descendantName: 'loadingIcon'
        }), userCssClasses.searchableLoadingIcon)
      }
    };
    var specializedRenderer = renderer$8({
      containerNode: containerNode,
      cssClasses: cssClasses,
      templates: templates,
      renderState: {},
      searchable: searchable,
      searchablePlaceholder: searchablePlaceholder,
      searchableIsAlwaysActive: searchableIsAlwaysActive,
      showMore: showMore
    });
    var makeWidget = connectRefinementList(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      attribute: attribute,
      operator: operator,
      limit: limit,
      showMore: showMore,
      showMoreLimit: showMoreLimit,
      sortBy: sortBy,
      escapeFacetValues: escapeFacetValues,
      transformItems: transformItems
    });
  }

  /* eslint-disable max-len */
  var defaultTemplates$7 = {
    item: "<label class=\"{{cssClasses.label}}\">\n  <input type=\"radio\" class=\"{{cssClasses.radio}}\" name=\"{{attribute}}\"{{#isRefined}} checked{{/isRefined}} />\n  <span class=\"{{cssClasses.labelText}}\">{{label}}</span>\n</label>"
  };

  var withUsage$x = createDocumentationMessageGenerator({
    name: 'numeric-menu'
  });
  var suit$b = component('NumericMenu');

  var renderer$9 = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        attribute = _ref.attribute,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var createURL = _ref2.createURL,
          instantSearchInstance = _ref2.instantSearchInstance,
          refine = _ref2.refine,
          items = _ref2.items;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$7,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(RefinementList$1, {
        createURL: createURL,
        cssClasses: cssClasses,
        facetValues: items,
        templateProps: renderState.templateProps,
        toggleRefinement: refine,
        attribute: attribute
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} NumericMenuCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element when no refinements.
   * @property {string|string[]} [list] CSS class to add to the list element.
   * @property {string|string[]} [item] CSS class to add to each item element.
   * @property {string|string[]} [selectedItem] CSS class to add to each selected item element.
   * @property {string|string[]} [label] CSS class to add to each label element.
   * @property {string|string[]} [labelText] CSS class to add to each label text element.
   * @property {string|string[]} [radio] CSS class to add to each radio element (when using the default template).
   */

  /**
   * @typedef {Object} NumericMenuTemplates
   * @property {string|function} [item] Item template, provided with `label` (the name in the configuration), `isRefined`, `url`, `value` (the setting for the filter) data properties.
   */

  /**
   * @typedef {Object} NumericMenuOption
   * @property {string} label Label of the option.
   * @property {number} [start] Low bound of the option (>=).
   * @property {number} [end] High bound of the option (<=).
   */

  /**
   * @typedef {Object} NumericMenuWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string} attribute Name of the attribute for filtering.
   * @property {NumericMenuOption[]} items List of all the items.
   * @property {NumericMenuTemplates} [templates] Templates to use for the widget.
   * @property {NumericMenuCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * The numeric menu is a widget that displays a list of numeric filters in a list. Those numeric filters
   * are pre-configured with creating the widget.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting) in your
   * Algolia settings.
   *
   * The values inside this attribute must be JavaScript numbers and not strings.
   *
   * @type {WidgetFactory}
   * @devNovel NumericMenu
   * @category filter
   * @param {NumericMenuWidgetOptions} $0 The NumericMenu widget items
   * @return {Widget} Creates a new instance of the NumericMenu widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.numericMenu({
   *     container: '#popularity',
   *     attribute: 'popularity',
   *     items: [
   *       { label: 'All' },
   *       { end: 500, label: 'less than 500' },
   *       { start: 500, end: 2000, label: 'between 500 and 2000' },
   *       { start: 2000, label: 'more than 2000' }
   *     ]
   *   })
   * );
   */


  function numericMenu() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attribute = _ref3.attribute,
        items = _ref3.items,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$7 : _ref3$templates,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$x('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$b(), userCssClasses.root),
      noRefinementRoot: classnames(suit$b({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$b({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$b({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$b({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      label: classnames(suit$b({
        descendantName: 'label'
      }), userCssClasses.label),
      radio: classnames(suit$b({
        descendantName: 'radio'
      }), userCssClasses.radio),
      labelText: classnames(suit$b({
        descendantName: 'labelText'
      }), userCssClasses.labelText)
    };
    var specializedRenderer = renderer$9({
      containerNode: containerNode,
      attribute: attribute,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeNumericMenu = connectNumericMenu(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeNumericMenu({
      attribute: attribute,
      items: items,
      transformItems: transformItems
    });
  }

  var PaginationLink =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PaginationLink, _Component);

    function PaginationLink() {
      _classCallCheck(this, PaginationLink);

      return _possibleConstructorReturn(this, _getPrototypeOf(PaginationLink).apply(this, arguments));
    }

    _createClass(PaginationLink, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.handleClick = this.handleClick.bind(this);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        this.props.handleClick(this.props.pageNumber, e);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            cssClasses = _this$props.cssClasses,
            label = _this$props.label,
            ariaLabel = _this$props.ariaLabel,
            url = _this$props.url,
            isDisabled = _this$props.isDisabled;
        var tagName = 'span';
        var attributes = {
          className: cssClasses.link,
          dangerouslySetInnerHTML: {
            __html: label
          }
        }; // "Enable" the element, by making it a link

        if (!isDisabled) {
          tagName = 'a';
          attributes = _objectSpread({}, attributes, {
            'aria-label': ariaLabel,
            href: url,
            onClick: this.handleClick
          });
        }

        var element = index.createElement(tagName, attributes);
        return index.createElement("li", {
          className: cssClasses.item
        }, element);
      }
    }]);

    return PaginationLink;
  }(Component$1);

  var Pagination =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Pagination);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (pageNumber, event) {
        if (isSpecialClick(event)) {
          // do not alter the default browser behavior
          // if one special key is down
          return;
        }

        event.preventDefault();

        _this.props.setCurrentPage(pageNumber);
      });

      return _this;
    }

    _createClass(Pagination, [{
      key: "pageLink",
      value: function pageLink(_ref) {
        var label = _ref.label,
            ariaLabel = _ref.ariaLabel,
            pageNumber = _ref.pageNumber,
            _ref$additionalClassN = _ref.additionalClassName,
            additionalClassName = _ref$additionalClassN === void 0 ? null : _ref$additionalClassN,
            _ref$isDisabled = _ref.isDisabled,
            isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
            _ref$isSelected = _ref.isSelected,
            isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
            createURL = _ref.createURL;
        var cssClasses = {
          item: classnames(this.props.cssClasses.item, additionalClassName),
          link: this.props.cssClasses.link
        };

        if (isDisabled) {
          cssClasses.item = classnames(cssClasses.item, this.props.cssClasses.disabledItem);
        } else if (isSelected) {
          cssClasses.item = classnames(cssClasses.item, this.props.cssClasses.selectedItem);
        }

        var url = createURL && !isDisabled ? createURL(pageNumber) : '#';
        return index.createElement(PaginationLink, {
          ariaLabel: ariaLabel,
          cssClasses: cssClasses,
          handleClick: this.handleClick,
          isDisabled: isDisabled,
          key: label + pageNumber + ariaLabel,
          label: label,
          pageNumber: pageNumber,
          url: url
        });
      }
    }, {
      key: "previousPageLink",
      value: function previousPageLink(_ref2) {
        var isFirstPage = _ref2.isFirstPage,
            currentPage = _ref2.currentPage,
            createURL = _ref2.createURL;
        return this.pageLink({
          ariaLabel: 'Previous',
          additionalClassName: this.props.cssClasses.previousPageItem,
          isDisabled: this.props.nbHits === 0 || isFirstPage,
          label: this.props.templates.previous,
          pageNumber: currentPage - 1,
          createURL: createURL
        });
      }
    }, {
      key: "nextPageLink",
      value: function nextPageLink(_ref3) {
        var isLastPage = _ref3.isLastPage,
            currentPage = _ref3.currentPage,
            createURL = _ref3.createURL;
        return this.pageLink({
          ariaLabel: 'Next',
          additionalClassName: this.props.cssClasses.nextPageItem,
          isDisabled: this.props.nbHits === 0 || isLastPage,
          label: this.props.templates.next,
          pageNumber: currentPage + 1,
          createURL: createURL
        });
      }
    }, {
      key: "firstPageLink",
      value: function firstPageLink(_ref4) {
        var isFirstPage = _ref4.isFirstPage,
            createURL = _ref4.createURL;
        return this.pageLink({
          ariaLabel: 'First',
          additionalClassName: this.props.cssClasses.firstPageItem,
          isDisabled: this.props.nbHits === 0 || isFirstPage,
          label: this.props.templates.first,
          pageNumber: 0,
          createURL: createURL
        });
      }
    }, {
      key: "lastPageLink",
      value: function lastPageLink(_ref5) {
        var isLastPage = _ref5.isLastPage,
            nbPages = _ref5.nbPages,
            createURL = _ref5.createURL;
        return this.pageLink({
          ariaLabel: 'Last',
          additionalClassName: this.props.cssClasses.lastPageItem,
          isDisabled: this.props.nbHits === 0 || isLastPage,
          label: this.props.templates.last,
          pageNumber: nbPages - 1,
          createURL: createURL
        });
      }
    }, {
      key: "pages",
      value: function pages(_ref6) {
        var _this2 = this;

        var currentPage = _ref6.currentPage,
            _pages = _ref6.pages,
            createURL = _ref6.createURL;
        return _pages.map(function (pageNumber) {
          return _this2.pageLink({
            ariaLabel: pageNumber + 1,
            additionalClassName: _this2.props.cssClasses.pageItem,
            isSelected: pageNumber === currentPage,
            label: pageNumber + 1,
            pageNumber: pageNumber,
            createURL: createURL
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return index.createElement("div", {
          className: classnames(this.props.cssClasses.root, _defineProperty({}, this.props.cssClasses.noRefinementRoot, this.props.isFirstPage))
        }, index.createElement("ul", {
          className: this.props.cssClasses.list
        }, this.props.showFirst && this.firstPageLink(this.props), this.props.showPrevious && this.previousPageLink(this.props), this.pages(this.props), this.props.showNext && this.nextPageLink(this.props), this.props.showLast && this.lastPageLink(this.props)));
      }
    }]);

    return Pagination;
  }(Component$1);

  Pagination.defaultProps = {
    nbHits: 0,
    currentPage: 0,
    nbPages: 0
  };

  var withUsage$y = createDocumentationMessageGenerator({
    name: 'pagination'
  });
  var suit$c = component('Pagination');
  var defaultTemplates$8 = {
    previous: '‹',
    next: '›',
    first: '«',
    last: '»'
  };

  var renderer$a = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        templates = _ref.templates,
        totalPages = _ref.totalPages,
        showFirst = _ref.showFirst,
        showLast = _ref.showLast,
        showPrevious = _ref.showPrevious,
        showNext = _ref.showNext,
        scrollToNode = _ref.scrollToNode;
    return function (_ref2, isFirstRendering) {
      var createURL = _ref2.createURL,
          currentRefinement = _ref2.currentRefinement,
          nbHits = _ref2.nbHits,
          nbPages = _ref2.nbPages,
          pages = _ref2.pages,
          isFirstPage = _ref2.isFirstPage,
          isLastPage = _ref2.isLastPage,
          refine = _ref2.refine;
      if (isFirstRendering) return;

      var setCurrentPage = function setCurrentPage(pageNumber) {
        refine(pageNumber);

        if (scrollToNode !== false) {
          scrollToNode.scrollIntoView();
        }
      };

      render$1(index.createElement(Pagination, {
        createURL: createURL,
        cssClasses: cssClasses,
        currentPage: currentRefinement,
        templates: templates,
        nbHits: nbHits,
        nbPages: nbPages,
        pages: pages,
        totalPages: totalPages,
        isFirstPage: isFirstPage,
        isLastPage: isLastPage,
        setCurrentPage: setCurrentPage,
        showFirst: showFirst,
        showLast: showLast,
        showPrevious: showPrevious,
        showNext: showNext
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} PaginationCSSClasses
   * @property  {string|string[]} [root] CSS classes added to the root element of the widget.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element of the widget if there are no refinements.
   * @property  {string|string[]} [list] CSS classes added to the wrapping `<ul>`.
   * @property  {string|string[]} [item] CSS classes added to each `<li>`.
   * @property  {string|string[]} [firstPageItem] CSS classes added to the first `<li>`.
   * @property  {string|string[]} [lastPageItem] CSS classes added to the last `<li>`.
   * @property  {string|string[]} [previousPageItem] CSS classes added to the previous `<li>`.
   * @property  {string|string[]} [nextPageItem] CSS classes added to the next `<li>`.
   * @property  {string|string[]} [pageItem] CSS classes added to page `<li>`.
   * @property  {string|string[]} [selectedItem] CSS classes added to the selected `<li>`.
   * @property  {string|string[]} [disabledItem] CSS classes added to the disabled `<li>`.
   * @property  {string|string[]} [link] CSS classes added to each link.
   */

  /**
   * @typedef {Object} PaginationTemplates
   * @property  {string} [previous] Label for the Previous link.
   * @property  {string} [next] Label for the Next link.
   * @property  {string} [first] Label for the First link.
   * @property  {string} [last] Label for the Last link.
   */

  /**
   * @typedef {Object} PaginationWidgetOptions
   * @property  {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property  {number} [totalPages] The max number of pages to browse.
   * @property  {number} [padding=3] The number of pages to display on each side of the current page.
   * @property  {string|HTMLElement|boolean} [scrollTo='body'] Where to scroll after a click, set to `false` to disable.
   * @property  {boolean} [showFirst=true] Whether to show the “first page” control
   * @property  {boolean} [showLast=true] Whether to show the last page” control
   * @property  {boolean} [showNext=true] Whether to show the “next page” control
   * @property  {boolean} [showPrevious=true] 	Whether to show the “previous page” control
   * @property  {PaginationTemplates} [templates] Text to display in the links.
   * @property  {PaginationCSSClasses} [cssClasses] CSS classes to be added.
   */

  /**
   * The pagination widget allow the user to switch between pages of the results.
   *
   * This is an alternative to using the *show more* pattern, that allows the user
   * only to display more items. The *show more* pattern is usually preferred
   * because it is simpler to use, and it is more convenient in a mobile context.
   * See the infinite hits widget, for more information.
   *
   * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
   * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
   *
   * @type {WidgetFactory}
   * @devNovel Pagination
   * @category navigation
   * @param {PaginationWidgetOptions} $0 Options for the Pagination widget.
   * @return {Widget} A new instance of Pagination widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.pagination({
   *     container: '#pagination-container',
   *     totalPages: 20,
   *     // default is to scroll to 'body', here we disable this behavior
   *     scrollTo: false,
   *     showFirst: false,
   *     showLast: false,
   *   })
   * );
   */


  function pagination() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        _ref3$templates = _ref3.templates,
        userTemplates = _ref3$templates === void 0 ? {} : _ref3$templates,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        totalPages = _ref3.totalPages,
        padding = _ref3.padding,
        _ref3$showFirst = _ref3.showFirst,
        showFirst = _ref3$showFirst === void 0 ? true : _ref3$showFirst,
        _ref3$showLast = _ref3.showLast,
        showLast = _ref3$showLast === void 0 ? true : _ref3$showLast,
        _ref3$showPrevious = _ref3.showPrevious,
        showPrevious = _ref3$showPrevious === void 0 ? true : _ref3$showPrevious,
        _ref3$showNext = _ref3.showNext,
        showNext = _ref3$showNext === void 0 ? true : _ref3$showNext,
        _ref3$scrollTo = _ref3.scrollTo,
        userScrollTo = _ref3$scrollTo === void 0 ? 'body' : _ref3$scrollTo;

    if (!container) {
      throw new Error(withUsage$y('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var scrollTo = userScrollTo === true ? 'body' : userScrollTo;
    var scrollToNode = scrollTo !== false ? getContainerNode(scrollTo) : false;
    var cssClasses = {
      root: classnames(suit$c(), userCssClasses.root),
      noRefinementRoot: classnames(suit$c({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$c({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$c({
        descendantName: 'item'
      }), userCssClasses.item),
      firstPageItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'firstPage'
      }), userCssClasses.firstPageItem),
      lastPageItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'lastPage'
      }), userCssClasses.lastPageItem),
      previousPageItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'previousPage'
      }), userCssClasses.previousPageItem),
      nextPageItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'nextPage'
      }), userCssClasses.nextPageItem),
      pageItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'page'
      }), userCssClasses.pageItem),
      selectedItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      disabledItem: classnames(suit$c({
        descendantName: 'item',
        modifierName: 'disabled'
      }), userCssClasses.disabledItem),
      link: classnames(suit$c({
        descendantName: 'link'
      }), userCssClasses.link)
    };

    var templates = _objectSpread({}, defaultTemplates$8, userTemplates);

    var specializedRenderer = renderer$a({
      containerNode: containerNode,
      cssClasses: cssClasses,
      templates: templates,
      showFirst: showFirst,
      showLast: showLast,
      showPrevious: showPrevious,
      showNext: showNext,
      padding: padding,
      scrollToNode: scrollToNode
    });
    var makeWidget = connectPagination(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      totalPages: totalPages,
      padding: padding
    });
  }

  var RangeInput =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RangeInput, _Component);

    function RangeInput(props) {
      var _this;

      _classCallCheck(this, RangeInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeInput).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "onChange", function (name) {
        return function (event) {
          _this.setState(_defineProperty({}, name, event.currentTarget.value));
        };
      });

      _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
        event.preventDefault();

        _this.props.refine([_this.state.min, _this.state.max]);
      });

      _this.state = {
        min: props.values.min,
        max: props.values.max
      };
      return _this;
    }

    _createClass(RangeInput, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.setState({
          min: nextProps.values.min,
          max: nextProps.values.max
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            minValue = _this$state.min,
            maxValue = _this$state.max;
        var _this$props = this.props,
            min = _this$props.min,
            max = _this$props.max,
            step = _this$props.step,
            cssClasses = _this$props.cssClasses,
            templateProps = _this$props.templateProps;
        var isDisabled = min >= max;
        var hasRefinements = Boolean(minValue || maxValue);
        var rootClassNames = classnames(cssClasses.root, _defineProperty({}, cssClasses.noRefinement, !hasRefinements));
        return index.createElement("div", {
          className: rootClassNames
        }, index.createElement("form", {
          className: cssClasses.form,
          onSubmit: this.onSubmit
        }, index.createElement("label", {
          className: cssClasses.label
        }, index.createElement("input", {
          className: classnames(cssClasses.input, cssClasses.inputMin),
          type: "number",
          min: min,
          max: max,
          step: step,
          value: minValue,
          onChange: this.onChange('min'),
          placeholder: min,
          disabled: isDisabled
        })), index.createElement(Template, _extends({}, templateProps, {
          templateKey: "separatorText",
          rootTagName: "span",
          rootProps: {
            className: cssClasses.separator
          }
        })), index.createElement("label", {
          className: cssClasses.label
        }, index.createElement("input", {
          className: classnames(cssClasses.input, cssClasses.inputMax),
          type: "number",
          min: min,
          max: max,
          step: step,
          value: maxValue,
          onChange: this.onChange('max'),
          placeholder: max,
          disabled: isDisabled
        })), index.createElement(Template, _extends({}, templateProps, {
          templateKey: "submitText",
          rootTagName: "button",
          rootProps: {
            type: 'submit',
            className: cssClasses.submit,
            disabled: isDisabled
          }
        }))));
      }
    }]);

    return RangeInput;
  }(Component$1);

  var withUsage$z = createDocumentationMessageGenerator({
    name: 'range-input'
  });
  var suit$d = component('RangeInput');

  var renderer$b = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          range = _ref2.range,
          start = _ref2.start,
          widgetParams = _ref2.widgetParams,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      var rangeMin = range.min,
          rangeMax = range.max;

      var _start = _slicedToArray(start, 2),
          minValue = _start[0],
          maxValue = _start[1];

      var step = 1 / Math.pow(10, widgetParams.precision);
      var values = {
        min: minValue !== -Infinity && minValue !== rangeMin ? minValue : undefined,
        max: maxValue !== Infinity && maxValue !== rangeMax ? maxValue : undefined
      };
      render$1(index.createElement(RangeInput, {
        min: rangeMin,
        max: rangeMax,
        step: step,
        values: values,
        cssClasses: cssClasses,
        refine: refine,
        templateProps: renderState.templateProps
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} RangeInputClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinement] CSS class to add to the root element when there's no refinements.
   * @property {string|string[]} [form] CSS class to add to the form element.
   * @property {string|string[]} [label] CSS class to add to the label element.
   * @property {string|string[]} [input] CSS class to add to the input element.
   * @property {string|string[]} [inputMin] CSS class to add to the min input element.
   * @property {string|string[]} [inputMax] CSS class to add to the max input element.
   * @property {string|string[]} [separator] CSS class to add to the separator of the form.
   * @property {string|string[]} [submit] CSS class to add to the submit button of the form.
   */

  /**
   * @typedef {Object} RangeInputTemplates
   * @property {string} [separatorText = "to"] The label of the separator, between min and max.
   * @property {string} [submitText = "Go"] The label of the submit button.
   */

  /**
   * @typedef {Object} RangeInputWidgetOptions
   * @property {string|HTMLElement} container Valid CSS Selector as a string or DOMElement.
   * @property {string} attribute Name of the attribute for faceting.
   * @property {number} [min] Minimal slider value, default to automatically computed from the result set.
   * @property {number} [max] Maximal slider value, defaults to automatically computed from the result set.
   * @property {number} [precision = 0] Number of digits after decimal point to use.
   * @property {RangeInputTemplates} [templates] Labels to use for the widget.
   * @property {RangeInputClasses} [cssClasses] CSS classes to add.
   */

  /**
   * The range input widget allows a user to select a numeric range using a minimum and maximum input.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   *
   * The values inside this attribute must be JavaScript numbers (not strings).
   * @type {WidgetFactory}
   * @devNovel RangeInput
   * @category filter
   * @param {RangeInputWidgetOptions} $0 The RangeInput widget options.
   * @return {Widget} A new instance of RangeInput widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.rangeInput({
   *     container: '#range-input',
   *     attribute: 'price',
   *     templates: {
   *       separatorText: 'to',
   *       submitText: 'Go'
   *     },
   *   })
   * );
   */


  function rangeInput() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attribute = _ref3.attribute,
        min = _ref3.min,
        max = _ref3.max,
        _ref3$precision = _ref3.precision,
        precision = _ref3$precision === void 0 ? 0 : _ref3$precision,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        userTemplates = _ref3$templates === void 0 ? {} : _ref3$templates;

    if (!container) {
      throw new Error(withUsage$z('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);

    var templates = _objectSpread({
      separatorText: 'to',
      submitText: 'Go'
    }, userTemplates);

    var cssClasses = {
      root: classnames(suit$d(), userCssClasses.root),
      noRefinement: classnames(suit$d({
        modifierName: 'noRefinement'
      })),
      form: classnames(suit$d({
        descendantName: 'form'
      }), userCssClasses.form),
      label: classnames(suit$d({
        descendantName: 'label'
      }), userCssClasses.label),
      input: classnames(suit$d({
        descendantName: 'input'
      }), userCssClasses.input),
      inputMin: classnames(suit$d({
        descendantName: 'input',
        modifierName: 'min'
      }), userCssClasses.inputMin),
      inputMax: classnames(suit$d({
        descendantName: 'input',
        modifierName: 'max'
      }), userCssClasses.inputMax),
      separator: classnames(suit$d({
        descendantName: 'separator'
      }), userCssClasses.separator),
      submit: classnames(suit$d({
        descendantName: 'submit'
      }), userCssClasses.submit)
    };
    var specializedRenderer = renderer$b({
      containerNode: containerNode,
      cssClasses: cssClasses,
      templates: templates,
      renderState: {}
    });
    var makeWidget = connectRange(specializedRenderer);
    return makeWidget({
      attribute: attribute,
      min: min,
      max: max,
      precision: precision
    });
  }

  /* eslint max-len: 0 */
  var defaultTemplates$9 = {
    reset: "\n<svg class=\"{{cssClasses.resetIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"10\" height=\"10\">\n  <path d=\"M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z\"></path>\n</svg>\n  ",
    submit: "\n<svg class=\"{{cssClasses.submitIcon}}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 40 40\">\n  <path d=\"M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z\"></path>\n</svg>\n  ",
    loadingIndicator: "\n<svg class=\"{{cssClasses.loadingIcon}}\" width=\"16\" height=\"16\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#444\">\n  <g fill=\"none\" fillRule=\"evenodd\">\n    <g transform=\"translate(1 1)\" strokeWidth=\"2\">\n      <circle strokeOpacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\" />\n      <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n        <animateTransform\n          attributeName=\"transform\"\n          type=\"rotate\"\n          from=\"0 18 18\"\n          to=\"360 18 18\"\n          dur=\"1s\"\n          repeatCount=\"indefinite\"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  "
  };

  var withUsage$A = createDocumentationMessageGenerator({
    name: 'search-box'
  });
  var suit$e = component('SearchBox');

  var renderer$c = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        placeholder = _ref.placeholder,
        templates = _ref.templates,
        autofocus = _ref.autofocus,
        searchAsYouType = _ref.searchAsYouType,
        showReset = _ref.showReset,
        showSubmit = _ref.showSubmit,
        showLoadingIndicator = _ref.showLoadingIndicator;
    return function (_ref2) {
      var refine = _ref2.refine,
          query = _ref2.query,
          isSearchStalled = _ref2.isSearchStalled;
      render$1(index.createElement(SearchBox, {
        query: query,
        placeholder: placeholder,
        autofocus: autofocus,
        refine: refine,
        searchAsYouType: searchAsYouType,
        templates: templates,
        showSubmit: showSubmit,
        showReset: showReset,
        showLoadingIndicator: showLoadingIndicator,
        isSearchStalled: isSearchStalled,
        cssClasses: cssClasses
      }), containerNode);
    };
  };
  /**
   * @typedef {Ojbect} SearchBoxTemplates
   * @property {function|string} submit Template used for displaying the submit. Can accept a function or a Hogan string.
   * @property {function|string} reset Template used for displaying the button. Can accept a function or a Hogan string.
   * @property {function|string} loadingIndicator Template used for displaying the button. Can accept a function or a Hogan string.
   */

  /**
   * @typedef {Object} SearchBoxCSSClasses
   * @property {string|string[]} [root] CSS class to add to the wrapping `<div>`
   * @property {string|string[]} [form] CSS class to add to the form
   * @property {string|string[]} [input] CSS class to add to the input.
   * @property {string|string[]} [submit] CSS classes added to the submit button.
   * @property {string|string[]} [submitIcon] CSS classes added to the submit icon.
   * @property {string|string[]} [reset] CSS classes added to the reset button.
   * @property {string|string[]} [resetIcon] CSS classes added to the reset icon.
   * @property {string|string[]} [loadingIndicator] CSS classes added to the loading indicator element.
   * @property {string|string[]} [loadingIcon] CSS classes added to the loading indicator icon.
   */

  /**
   * @typedef {Object} SearchBoxWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget
   * @property {string} [placeholder] The placeholder of the input
   * @property {boolean} [autofocus=false] Whether the input should be autofocused
   * @property {boolean} [searchAsYouType=true] If set, trigger the search
   * once `<Enter>` is pressed only.
   * @property {boolean} [showReset=true] Whether to show the reset button
   * @property {boolean} [showSubmit=true] Whether to show the submit button
   * @property {boolean} [showLoadingIndicator=true] Whether to show the loading indicator (replaces the submit if
   * the search is stalled)
   * @property {SearchBoxCSSClasses} [cssClasses] CSS classes to add
   * @property {SearchBoxTemplates} [templates] Templates used for customizing the rendering of the searchbox
   * @property {function} [queryHook] A function that is called every time a new search is done. You
   * will get the query as the first parameter and a search (query) function to call as the second parameter.
   * This `queryHook` can be used to debounce the number of searches done from the search box.
   */

  /**
   * The searchbox widget is used to let the user set a text based query.
   *
   * This is usually the  main entry point to start the search in an instantsearch context. For that
   * reason is usually placed on top, and not hidden so that the user can start searching right
   * away.
   *
   * @type {WidgetFactory}
   * @devNovel SearchBox
   * @category basic
   * @param {SearchBoxWidgetOptions} $0 Options used to configure a SearchBox widget.
   * @return {Widget} Creates a new instance of the SearchBox widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.searchBox({
   *     container: '#q',
   *     placeholder: 'Search for products',
   *   })
   * );
   */


  function searchBox() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        _ref3$placeholder = _ref3.placeholder,
        placeholder = _ref3$placeholder === void 0 ? '' : _ref3$placeholder,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$autofocus = _ref3.autofocus,
        autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus,
        _ref3$searchAsYouType = _ref3.searchAsYouType,
        searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType,
        _ref3$showReset = _ref3.showReset,
        showReset = _ref3$showReset === void 0 ? true : _ref3$showReset,
        _ref3$showSubmit = _ref3.showSubmit,
        showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit,
        _ref3$showLoadingIndi = _ref3.showLoadingIndicator,
        showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi,
        queryHook = _ref3.queryHook,
        templates = _ref3.templates;

    if (!container) {
      throw new Error(withUsage$A('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);

    if (containerNode.tagName === 'INPUT') {
      throw new Error("The `container` option doesn't accept `input` elements since InstantSearch.js 3.\n\nYou may want to migrate using `connectSearchBox`: ".concat(createDocumentationLink({
        name: 'searchbox',
        connector: true
      }), "."));
    }

    _warning(typeof autofocus === 'boolean', 'The `autofocus` option only supports boolean values since InstantSearch.js 3.');
    var cssClasses = {
      root: classnames(suit$e(), userCssClasses.root),
      form: classnames(suit$e({
        descendantName: 'form'
      }), userCssClasses.form),
      input: classnames(suit$e({
        descendantName: 'input'
      }), userCssClasses.input),
      submit: classnames(suit$e({
        descendantName: 'submit'
      }), userCssClasses.submit),
      submitIcon: classnames(suit$e({
        descendantName: 'submitIcon'
      }), userCssClasses.submitIcon),
      reset: classnames(suit$e({
        descendantName: 'reset'
      }), userCssClasses.reset),
      resetIcon: classnames(suit$e({
        descendantName: 'resetIcon'
      }), userCssClasses.resetIcon),
      loadingIndicator: classnames(suit$e({
        descendantName: 'loadingIndicator'
      }), userCssClasses.loadingIndicator),
      loadingIcon: classnames(suit$e({
        descendantName: 'loadingIcon'
      }), userCssClasses.loadingIcon)
    };
    var specializedRenderer = renderer$c({
      containerNode: containerNode,
      cssClasses: cssClasses,
      placeholder: placeholder,
      templates: _objectSpread({}, defaultTemplates$9, templates),
      autofocus: autofocus,
      searchAsYouType: searchAsYouType,
      showReset: showReset,
      showSubmit: showSubmit,
      showLoadingIndicator: showLoadingIndicator
    });
    var makeWidget = connectSearchBox(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      queryHook: queryHook
    });
  }

  var SliderConstants = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var KEYS = exports.KEYS = {
    DOWN: 40,
    END: 35,
    ESC: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    RIGHT: 39,
    UP: 38
  };
  var PERCENT_EMPTY = exports.PERCENT_EMPTY = 0;
  var PERCENT_FULL = exports.PERCENT_FULL = 100;
  });

  unwrapExports(SliderConstants);
  var SliderConstants_1 = SliderConstants.KEYS;
  var SliderConstants_2 = SliderConstants.PERCENT_EMPTY;
  var SliderConstants_3 = SliderConstants.PERCENT_FULL;

  var linear = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    getPosition: function () {
      function getPosition(value, min, max) {
        return (value - min) / (max - min) * 100;
      }

      return getPosition;
    }(),
    getValue: function () {
      function getValue(pos, min, max) {
        var decimal = pos / 100;

        if (pos === 0) {
          return min;
        } else if (pos === 100) {
          return max;
        }

        return Math.round((max - min) * decimal + min);
      }

      return getValue;
    }()
  };
  });

  unwrapExports(linear);

  var Slider = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _preactCompat2 = _interopRequireDefault(index);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var SliderConstants$1 = _interopRequireWildcard(SliderConstants);



  var _linear2 = _interopRequireDefault(linear);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals document */
  /* eslint react/no-array-index-key: 1 */

  function getClassName(props) {
    var orientation = props.orientation === 'vertical' ? 'rheostat-vertical' : 'rheostat-horizontal';

    return ['rheostat', orientation].concat(props.className.split(' ')).join(' ');
  }

  var has = Object.prototype.hasOwnProperty;

  var PropTypeArrOfNumber = _propTypes2['default'].arrayOf(_propTypes2['default'].number);
  var PropTypeReactComponent = _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]);

  function getHandleFor(ev) {
    return Number(ev.currentTarget.getAttribute('data-handle-key'));
  }

  function killEvent(ev) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
      _classCallCheck(this, Button);

      return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
      key: 'render',
      value: function () {
        function render() {
          return _preactCompat2['default'].createElement('button', _extends({}, this.props, { type: 'button' }));
        }

        return render;
      }()
    }]);

    return Button;
  }(_preactCompat2['default'].Component);

  var propTypes$1 = {
    // the algorithm to use
    algorithm: _propTypes2['default'].shape({
      getValue: _propTypes2['default'].func,
      getPosition: _propTypes2['default'].func
    }),
    // any children you pass in
    children: _propTypes2['default'].node,
    // standard class name you'd like to apply to the root element
    className: _propTypes2['default'].string,
    // prevent the slider from moving when clicked
    disabled: _propTypes2['default'].bool,
    // a custom handle you can pass in
    handle: PropTypeReactComponent,
    // the maximum possible value
    max: _propTypes2['default'].number,
    // the minimum possible value
    min: _propTypes2['default'].number,
    // called on click
    onClick: _propTypes2['default'].func,
    // called whenever the user is done changing values on the slider
    onChange: _propTypes2['default'].func,
    // called on key press
    onKeyPress: _propTypes2['default'].func,
    // called when you finish dragging a handle
    onSliderDragEnd: _propTypes2['default'].func,
    // called every time the slider is dragged and the value changes
    onSliderDragMove: _propTypes2['default'].func,
    // called when you start dragging a handle
    onSliderDragStart: _propTypes2['default'].func,
    // called whenever the user is actively changing the values on the slider
    // (dragging, clicked, keypress)
    onValuesUpdated: _propTypes2['default'].func,
    // the orientation
    orientation: _propTypes2['default'].oneOf(['horizontal', 'vertical']),
    // a component for rendering the pits
    pitComponent: PropTypeReactComponent,
    // the points that pits are rendered on
    pitPoints: PropTypeArrOfNumber,
    // a custom progress bar you can pass in
    progressBar: PropTypeReactComponent,
    // should we snap?
    snap: _propTypes2['default'].bool,
    // the points we should snap to
    snapPoints: PropTypeArrOfNumber,
    // the values
    values: PropTypeArrOfNumber
  };

  var defaultProps = {
    algorithm: _linear2['default'],
    className: '',
    children: null,
    disabled: false,
    handle: Button,
    max: SliderConstants$1.PERCENT_FULL,
    min: SliderConstants$1.PERCENT_EMPTY,
    onClick: null,
    onChange: null,
    onKeyPress: null,
    onSliderDragEnd: null,
    onSliderDragMove: null,
    onSliderDragStart: null,
    onValuesUpdated: null,
    orientation: 'horizontal',
    pitComponent: null,
    pitPoints: [],
    progressBar: 'div',
    snap: false,
    snapPoints: [],
    values: [SliderConstants$1.PERCENT_EMPTY]
  };

  var Rheostat = function (_React$Component2) {
    _inherits(Rheostat, _React$Component2);

    function Rheostat(props) {
      _classCallCheck(this, Rheostat);

      var _this2 = _possibleConstructorReturn(this, (Rheostat.__proto__ || Object.getPrototypeOf(Rheostat)).call(this, props));

      var _this2$props = _this2.props,
          algorithm = _this2$props.algorithm,
          max = _this2$props.max,
          min = _this2$props.min,
          values = _this2$props.values;

      _this2.state = {
        className: getClassName(_this2.props),
        handlePos: values.map(function (value) {
          return algorithm.getPosition(value, min, max);
        }),
        handleDimensions: 0,
        mousePos: null,
        sliderBox: {},
        slidingIndex: null,
        values: values
      };
      _this2.getPublicState = _this2.getPublicState.bind(_this2);
      _this2.getSliderBoundingBox = _this2.getSliderBoundingBox.bind(_this2);
      _this2.getProgressStyle = _this2.getProgressStyle.bind(_this2);
      _this2.getMinValue = _this2.getMinValue.bind(_this2);
      _this2.getMaxValue = _this2.getMaxValue.bind(_this2);
      _this2.getHandleDimensions = _this2.getHandleDimensions.bind(_this2);
      _this2.getClosestSnapPoint = _this2.getClosestSnapPoint.bind(_this2);
      _this2.getSnapPosition = _this2.getSnapPosition.bind(_this2);
      _this2.getNextPositionForKey = _this2.getNextPositionForKey.bind(_this2);
      _this2.getNextState = _this2.getNextState.bind(_this2);
      _this2.handleClick = _this2.handleClick.bind(_this2);
      _this2.getClosestHandle = _this2.getClosestHandle.bind(_this2);
      _this2.setStartSlide = _this2.setStartSlide.bind(_this2);
      _this2.startMouseSlide = _this2.startMouseSlide.bind(_this2);
      _this2.startTouchSlide = _this2.startTouchSlide.bind(_this2);
      _this2.handleMouseSlide = _this2.handleMouseSlide.bind(_this2);
      _this2.handleTouchSlide = _this2.handleTouchSlide.bind(_this2);
      _this2.handleSlide = _this2.handleSlide.bind(_this2);
      _this2.endSlide = _this2.endSlide.bind(_this2);
      _this2.handleKeydown = _this2.handleKeydown.bind(_this2);
      _this2.validatePosition = _this2.validatePosition.bind(_this2);
      _this2.validateValues = _this2.validateValues.bind(_this2);
      _this2.canMove = _this2.canMove.bind(_this2);
      _this2.fireChangeEvent = _this2.fireChangeEvent.bind(_this2);
      _this2.slideTo = _this2.slideTo.bind(_this2);
      _this2.updateNewValues = _this2.updateNewValues.bind(_this2);
      return _this2;
    }

    _createClass(Rheostat, [{
      key: 'componentWillReceiveProps',
      value: function () {
        function componentWillReceiveProps(nextProps) {
          var _props = this.props,
              className = _props.className,
              disabled = _props.disabled,
              min = _props.min,
              max = _props.max,
              orientation = _props.orientation;
          var _state = this.state,
              values = _state.values,
              slidingIndex = _state.slidingIndex;


          var minMaxChanged = nextProps.min !== min || nextProps.max !== max;

          var valuesChanged = values.length !== nextProps.values.length || values.some(function (value, idx) {
            return nextProps.values[idx] !== value;
          });

          var orientationChanged = nextProps.className !== className || nextProps.orientation !== orientation;

          var willBeDisabled = nextProps.disabled && !disabled;

          if (orientationChanged) {
            this.setState({
              className: getClassName(nextProps)
            });
          }

          if (minMaxChanged || valuesChanged) this.updateNewValues(nextProps);

          if (willBeDisabled && slidingIndex !== null) {
            this.endSlide();
          }
        }

        return componentWillReceiveProps;
      }()
    }, {
      key: 'getPublicState',
      value: function () {
        function getPublicState() {
          var _props2 = this.props,
              min = _props2.min,
              max = _props2.max;
          var values = this.state.values;


          return { max: max, min: min, values: values };
        }

        return getPublicState;
      }()

      // istanbul ignore next

    }, {
      key: 'getSliderBoundingBox',
      value: function () {
        function getSliderBoundingBox() {
          var rheostat = this.refs.rheostat;

          var node = rheostat.getDOMNode ? rheostat.getDOMNode() : rheostat;
          var rect = node.getBoundingClientRect();

          return {
            height: rect.height || node.clientHeight,
            left: rect.left,
            top: rect.top,
            width: rect.width || node.clientWidth
          };
        }

        return getSliderBoundingBox;
      }()
    }, {
      key: 'getProgressStyle',
      value: function () {
        function getProgressStyle(idx) {
          var handlePos = this.state.handlePos;


          var value = handlePos[idx];

          if (idx === 0) {
            return this.props.orientation === 'vertical' ? { height: String(value) + '%', top: 0 } : { left: 0, width: String(value) + '%' };
          }

          var prevValue = handlePos[idx - 1];
          var diffValue = value - prevValue;

          return this.props.orientation === 'vertical' ? { height: diffValue + '%', top: String(prevValue) + '%' } : { left: String(prevValue) + '%', width: diffValue + '%' };
        }

        return getProgressStyle;
      }()
    }, {
      key: 'getMinValue',
      value: function () {
        function getMinValue(idx) {
          return this.state.values[idx - 1] ? Math.max(this.props.min, this.state.values[idx - 1]) : this.props.min;
        }

        return getMinValue;
      }()
    }, {
      key: 'getMaxValue',
      value: function () {
        function getMaxValue(idx) {
          return this.state.values[idx + 1] ? Math.min(this.props.max, this.state.values[idx + 1]) : this.props.max;
        }

        return getMaxValue;
      }()

      // istanbul ignore next

    }, {
      key: 'getHandleDimensions',
      value: function () {
        function getHandleDimensions(ev, sliderBox) {
          var handleNode = ev.currentTarget || null;

          if (!handleNode) return 0;

          return this.props.orientation === 'vertical' ? handleNode.clientHeight / sliderBox.height * SliderConstants$1.PERCENT_FULL / 2 : handleNode.clientWidth / sliderBox.width * SliderConstants$1.PERCENT_FULL / 2;
        }

        return getHandleDimensions;
      }()
    }, {
      key: 'getClosestSnapPoint',
      value: function () {
        function getClosestSnapPoint(value) {
          if (!this.props.snapPoints.length) return value;

          return this.props.snapPoints.reduce(function (snapTo, snap) {
            return Math.abs(snapTo - value) < Math.abs(snap - value) ? snapTo : snap;
          });
        }

        return getClosestSnapPoint;
      }()
    }, {
      key: 'getSnapPosition',
      value: function () {
        function getSnapPosition(positionPercent) {
          if (!this.props.snap) return positionPercent;

          var _props3 = this.props,
              algorithm = _props3.algorithm,
              max = _props3.max,
              min = _props3.min;


          var value = algorithm.getValue(positionPercent, min, max);

          var snapValue = this.getClosestSnapPoint(value);

          return algorithm.getPosition(snapValue, min, max);
        }

        return getSnapPosition;
      }()
    }, {
      key: 'getNextPositionForKey',
      value: function () {
        function getNextPositionForKey(idx, keyCode) {
          var _stepMultiplier;

          var _state2 = this.state,
              handlePos = _state2.handlePos,
              values = _state2.values;
          var _props4 = this.props,
              algorithm = _props4.algorithm,
              max = _props4.max,
              min = _props4.min,
              snapPoints = _props4.snapPoints;


          var shouldSnap = this.props.snap;

          var proposedValue = values[idx];
          var proposedPercentage = handlePos[idx];
          var originalPercentage = proposedPercentage;
          var stepValue = 1;

          if (max >= 100) {
            proposedPercentage = Math.round(proposedPercentage);
          } else {
            stepValue = 100 / (max - min);
          }

          var currentIndex = null;

          if (shouldSnap) {
            currentIndex = snapPoints.indexOf(this.getClosestSnapPoint(values[idx]));
          }

          var stepMultiplier = (_stepMultiplier = {}, _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.LEFT, function (v) {
            return v * -1;
          }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.RIGHT, function (v) {
            return v * 1;
          }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.UP, function (v) {
            return v * 1;
          }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.DOWN, function (v) {
            return v * -1;
          }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.PAGE_DOWN, function (v) {
            return v > 1 ? -v : v * -10;
          }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.PAGE_UP, function (v) {
            return v > 1 ? v : v * 10;
          }), _stepMultiplier);

          if (has.call(stepMultiplier, keyCode)) {
            proposedPercentage += stepMultiplier[keyCode](stepValue);

            if (shouldSnap) {
              if (proposedPercentage > originalPercentage) {
                // move cursor right unless overflow
                if (currentIndex < snapPoints.length - 1) {
                  proposedValue = snapPoints[currentIndex + 1];
                }
                // move cursor left unless there is overflow
              } else if (currentIndex > 0) {
                proposedValue = snapPoints[currentIndex - 1];
              }
            }
          } else if (keyCode === SliderConstants$1.KEYS.HOME) {
            proposedPercentage = SliderConstants$1.PERCENT_EMPTY;

            if (shouldSnap) {
              proposedValue = snapPoints[0];
            }
          } else if (keyCode === SliderConstants$1.KEYS.END) {
            proposedPercentage = SliderConstants$1.PERCENT_FULL;

            if (shouldSnap) {
              proposedValue = snapPoints[snapPoints.length - 1];
            }
          } else {
            return null;
          }

          return shouldSnap ? algorithm.getPosition(proposedValue, min, max) : proposedPercentage;
        }

        return getNextPositionForKey;
      }()
    }, {
      key: 'getNextState',
      value: function () {
        function getNextState(idx, proposedPosition) {
          var _this3 = this;

          var handlePos = this.state.handlePos;
          var _props5 = this.props,
              max = _props5.max,
              min = _props5.min;


          var actualPosition = this.validatePosition(idx, proposedPosition);

          var nextHandlePos = handlePos.map(function (pos, index) {
            return index === idx ? actualPosition : pos;
          });

          return {
            handlePos: nextHandlePos,
            values: nextHandlePos.map(function (pos) {
              return _this3.props.algorithm.getValue(pos, min, max);
            })
          };
        }

        return getNextState;
      }()
    }, {
      key: 'getClosestHandle',
      value: function () {
        function getClosestHandle(positionPercent) {
          var handlePos = this.state.handlePos;


          return handlePos.reduce(function (closestIdx, node, idx) {
            var challenger = Math.abs(handlePos[idx] - positionPercent);
            var current = Math.abs(handlePos[closestIdx] - positionPercent);
            return challenger < current ? idx : closestIdx;
          }, 0);
        }

        return getClosestHandle;
      }()

      // istanbul ignore next

    }, {
      key: 'setStartSlide',
      value: function () {
        function setStartSlide(ev, x, y) {
          var sliderBox = this.getSliderBoundingBox();

          this.setState({
            handleDimensions: this.getHandleDimensions(ev, sliderBox),
            mousePos: { x: x, y: y },
            sliderBox: sliderBox,
            slidingIndex: getHandleFor(ev)
          });
        }

        return setStartSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'startMouseSlide',
      value: function () {
        function startMouseSlide(ev) {
          this.setStartSlide(ev, ev.clientX, ev.clientY);

          if (typeof document.addEventListener === 'function') {
            document.addEventListener('mousemove', this.handleMouseSlide, false);
            document.addEventListener('mouseup', this.endSlide, false);
          } else {
            document.attachEvent('onmousemove', this.handleMouseSlide);
            document.attachEvent('onmouseup', this.endSlide);
          }

          killEvent(ev);
        }

        return startMouseSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'startTouchSlide',
      value: function () {
        function startTouchSlide(ev) {
          if (ev.changedTouches.length > 1) return;

          var touch = ev.changedTouches[0];

          this.setStartSlide(ev, touch.clientX, touch.clientY);

          document.addEventListener('touchmove', this.handleTouchSlide, false);
          document.addEventListener('touchend', this.endSlide, false);

          if (this.props.onSliderDragStart) this.props.onSliderDragStart();

          killEvent(ev);
        }

        return startTouchSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'handleMouseSlide',
      value: function () {
        function handleMouseSlide(ev) {
          if (this.state.slidingIndex === null) return;
          this.handleSlide(ev.clientX, ev.clientY);
          killEvent(ev);
        }

        return handleMouseSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'handleTouchSlide',
      value: function () {
        function handleTouchSlide(ev) {
          if (this.state.slidingIndex === null) return;

          if (ev.changedTouches.length > 1) {
            this.endSlide();
            return;
          }

          var touch = ev.changedTouches[0];

          this.handleSlide(touch.clientX, touch.clientY);
          killEvent(ev);
        }

        return handleTouchSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'handleSlide',
      value: function () {
        function handleSlide(x, y) {
          var _state3 = this.state,
              idx = _state3.slidingIndex,
              sliderBox = _state3.sliderBox;


          var positionPercent = this.props.orientation === 'vertical' ? (y - sliderBox.top) / sliderBox.height * SliderConstants$1.PERCENT_FULL : (x - sliderBox.left) / sliderBox.width * SliderConstants$1.PERCENT_FULL;

          this.slideTo(idx, positionPercent);

          if (this.canMove(idx, positionPercent)) {
            // update mouse positions
            this.setState({ x: x, y: y });
            if (this.props.onSliderDragMove) this.props.onSliderDragMove();
          }
        }

        return handleSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'endSlide',
      value: function () {
        function endSlide() {
          var _this4 = this;

          var idx = this.state.slidingIndex;

          this.setState({ slidingIndex: null });

          if (typeof document.removeEventListener === 'function') {
            document.removeEventListener('mouseup', this.endSlide, false);
            document.removeEventListener('touchend', this.endSlide, false);
            document.removeEventListener('touchmove', this.handleTouchSlide, false);
            document.removeEventListener('mousemove', this.handleMouseSlide, false);
          } else {
            document.detachEvent('onmousemove', this.handleMouseSlide);
            document.detachEvent('onmouseup', this.endSlide);
          }

          if (this.props.onSliderDragEnd) this.props.onSliderDragEnd();
          if (this.props.snap) {
            var positionPercent = this.getSnapPosition(this.state.handlePos[idx]);
            this.slideTo(idx, positionPercent, function () {
              return _this4.fireChangeEvent();
            });
          } else {
            this.fireChangeEvent();
          }
        }

        return endSlide;
      }()

      // istanbul ignore next

    }, {
      key: 'handleClick',
      value: function () {
        function handleClick(ev) {
          var _this5 = this;

          if (ev.target.getAttribute('data-handle-key')) {
            return;
          }

          // Calculate the position of the slider on the page so we can determine
          // the position where you click in relativity.
          var sliderBox = this.getSliderBoundingBox();

          var positionDecimal = this.props.orientation === 'vertical' ? (ev.clientY - sliderBox.top) / sliderBox.height : (ev.clientX - sliderBox.left) / sliderBox.width;

          var positionPercent = positionDecimal * SliderConstants$1.PERCENT_FULL;

          var handleId = this.getClosestHandle(positionPercent);

          var validPositionPercent = this.getSnapPosition(positionPercent);

          // Move the handle there
          this.slideTo(handleId, validPositionPercent, function () {
            return _this5.fireChangeEvent();
          });

          if (this.props.onClick) this.props.onClick();
        }

        return handleClick;
      }()

      // istanbul ignore next

    }, {
      key: 'handleKeydown',
      value: function () {
        function handleKeydown(ev) {
          var _this6 = this;

          var idx = getHandleFor(ev);

          if (ev.keyCode === SliderConstants$1.KEYS.ESC) {
            ev.currentTarget.blur();
            return;
          }

          var proposedPercentage = this.getNextPositionForKey(idx, ev.keyCode);

          if (proposedPercentage === null) return;

          if (this.canMove(idx, proposedPercentage)) {
            this.slideTo(idx, proposedPercentage, function () {
              return _this6.fireChangeEvent();
            });
            if (this.props.onKeyPress) this.props.onKeyPress();
          }

          killEvent(ev);
        }

        return handleKeydown;
      }()

      // Make sure the proposed position respects the bounds and
      // does not collide with other handles too much.

    }, {
      key: 'validatePosition',
      value: function () {
        function validatePosition(idx, proposedPosition) {
          var _state4 = this.state,
              handlePos = _state4.handlePos,
              handleDimensions = _state4.handleDimensions;


          return Math.max(Math.min(proposedPosition, handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : SliderConstants$1.PERCENT_FULL // 100% is the highest value
          ), handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : SliderConstants$1.PERCENT_EMPTY // 0% is the lowest value
          );
        }

        return validatePosition;
      }()
    }, {
      key: 'validateValues',
      value: function () {
        function validateValues(proposedValues, props) {
          var _ref = props || this.props,
              max = _ref.max,
              min = _ref.min;

          return proposedValues.map(function (value, idx, values) {
            var realValue = Math.max(Math.min(value, max), min);

            if (values.length && realValue < values[idx - 1]) {
              return values[idx - 1];
            }

            return realValue;
          });
        }

        return validateValues;
      }()

      // Can we move the slider to the given position?

    }, {
      key: 'canMove',
      value: function () {
        function canMove(idx, proposedPosition) {
          var _state5 = this.state,
              handlePos = _state5.handlePos,
              handleDimensions = _state5.handleDimensions;


          if (proposedPosition < SliderConstants$1.PERCENT_EMPTY) return false;
          if (proposedPosition > SliderConstants$1.PERCENT_FULL) return false;

          var nextHandlePosition = handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : Infinity;

          if (proposedPosition > nextHandlePosition) return false;

          var prevHandlePosition = handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : -Infinity;

          if (proposedPosition < prevHandlePosition) return false;

          return true;
        }

        return canMove;
      }()

      // istanbul ignore next

    }, {
      key: 'fireChangeEvent',
      value: function () {
        function fireChangeEvent() {
          var onChange = this.props.onChange;

          if (onChange) onChange(this.getPublicState());
        }

        return fireChangeEvent;
      }()

      // istanbul ignore next

    }, {
      key: 'slideTo',
      value: function () {
        function slideTo(idx, proposedPosition, onAfterSet) {
          var _this7 = this;

          var nextState = this.getNextState(idx, proposedPosition);

          this.setState(nextState, function () {
            var onValuesUpdated = _this7.props.onValuesUpdated;

            if (onValuesUpdated) onValuesUpdated(_this7.getPublicState());
            if (onAfterSet) onAfterSet();
          });
        }

        return slideTo;
      }()

      // istanbul ignore next

    }, {
      key: 'updateNewValues',
      value: function () {
        function updateNewValues(nextProps) {
          var _this8 = this;

          var slidingIndex = this.state.slidingIndex;

          // Don't update while the slider is sliding

          if (slidingIndex !== null) {
            return;
          }

          var max = nextProps.max,
              min = nextProps.min,
              values = nextProps.values;
          var algorithm = this.props.algorithm;


          var nextValues = this.validateValues(values, nextProps);

          this.setState({
            handlePos: nextValues.map(function (value) {
              return algorithm.getPosition(value, min, max);
            }),
            values: nextValues
          }, function () {
            return _this8.fireChangeEvent();
          });
        }

        return updateNewValues;
      }()
    }, {
      key: 'render',
      value: function () {
        function render() {
          var _this9 = this;

          var _props6 = this.props,
              algorithm = _props6.algorithm,
              children = _props6.children,
              disabled = _props6.disabled,
              Handle = _props6.handle,
              max = _props6.max,
              min = _props6.min,
              orientation = _props6.orientation,
              PitComponent = _props6.pitComponent,
              pitPoints = _props6.pitPoints,
              ProgressBar = _props6.progressBar;
          var _state6 = this.state,
              className = _state6.className,
              handlePos = _state6.handlePos,
              values = _state6.values;


          return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            _preactCompat2['default'].createElement(
              'div',
              {
                className: className,
                ref: 'rheostat',
                onClick: !disabled && this.handleClick,
                style: { position: 'relative' }
              },
              _preactCompat2['default'].createElement('div', { className: 'rheostat-background' }),
              handlePos.map(function (pos, idx) {
                var handleStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };

                return _preactCompat2['default'].createElement(Handle, {
                  'aria-valuemax': _this9.getMaxValue(idx),
                  'aria-valuemin': _this9.getMinValue(idx),
                  'aria-valuenow': values[idx],
                  'aria-disabled': disabled,
                  'data-handle-key': idx,
                  className: 'rheostat-handle',
                  key: 'handle-' + String(idx),
                  onClick: _this9.killEvent,
                  onKeyDown: !disabled && _this9.handleKeydown,
                  onMouseDown: !disabled && _this9.startMouseSlide,
                  onTouchStart: !disabled && _this9.startTouchSlide,
                  role: 'slider',
                  style: handleStyle,
                  tabIndex: 0
                });
              }),
              handlePos.map(function (node, idx, arr) {
                if (idx === 0 && arr.length > 1) {
                  return null;
                }

                return _preactCompat2['default'].createElement(ProgressBar, {
                  className: 'rheostat-progress',
                  key: 'progress-bar-' + String(idx),
                  style: _this9.getProgressStyle(idx)
                });
              }),
              PitComponent && pitPoints.map(function (n) {
                var pos = algorithm.getPosition(n, min, max);
                var pitStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };

                return _preactCompat2['default'].createElement(
                  PitComponent,
                  { key: 'pit-' + String(n), style: pitStyle },
                  n
                );
              }),
              children
            )
          );
        }

        return render;
      }()
    }]);

    return Rheostat;
  }(_preactCompat2['default'].Component);

  Rheostat.propTypes = propTypes$1;
  Rheostat.defaultProps = defaultProps;

  exports['default'] = Rheostat;
  });

  var Rheostat = unwrapExports(Slider);

  var Pit = function Pit(_ref) {
    var style = _ref.style,
        children = _ref.children;
    // first, end & middle
    var positionValue = Math.round(parseFloat(style.left));
    var shouldDisplayValue = [0, 50, 100].includes(positionValue); // Children could be an array, unwrap the value if it's the case
    // see: https://github.com/developit/preact-compat/issues/436

    var value = Array.isArray(children) ? children[0] : children;
    var pitValue = Math.round(parseInt(value, 10) * 100) / 100;
    return index.createElement("div", {
      style: _objectSpread({}, style, {
        marginLeft: positionValue === 100 ? '-2px' : 0
      }),
      className: classnames('rheostat-marker', 'rheostat-marker-horizontal', {
        'rheostat-marker-large': shouldDisplayValue
      })
    }, shouldDisplayValue && index.createElement("div", {
      className: 'rheostat-value'
    }, pitValue));
  };

  var Slider$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Slider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref) {
        var values = _ref.values;

        if (!_this.isDisabled) {
          _this.props.refine(values);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "createHandleComponent", function (tooltips) {
        return function (props) {
          // display only two decimals after comma,
          // and apply `tooltips.format()` if any
          var roundedValue = Math.round(parseFloat(props['aria-valuenow']) * 100) / 100;
          var value = tooltips && tooltips.format ? tooltips.format(roundedValue) : roundedValue;
          var className = classnames(props.className, {
            'rheostat-handle-lower': props['data-handle-key'] === 0,
            'rheostat-handle-upper': props['data-handle-key'] === 1
          });
          return index.createElement("div", _extends({}, props, {
            className: className
          }), tooltips && index.createElement("div", {
            className: "rheostat-tooltip"
          }, value));
        };
      });

      return _this;
    }

    _createClass(Slider, [{
      key: "computeDefaultPitPoints",
      // creates an array number where to display a pit point on the slider
      value: function computeDefaultPitPoints(_ref2) {
        var min = _ref2.min,
            max = _ref2.max;
        var totalLength = max - min;
        var steps = 34;
        var stepsLength = totalLength / steps;
        var pitPoints = [min].concat(_toConsumableArray(range({
          end: steps - 1
        }).map(function (step) {
          return min + stepsLength * (step + 1);
        })), [max]);
        return pitPoints;
      } // creates an array of values where the slider should snap to

    }, {
      key: "computeSnapPoints",
      value: function computeSnapPoints(_ref3) {
        var min = _ref3.min,
            max = _ref3.max,
            step = _ref3.step;
        if (!step) return undefined;
        return [].concat(_toConsumableArray(range({
          start: min,
          end: max,
          step: step
        })), [max]);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            tooltips = _this$props.tooltips,
            step = _this$props.step,
            pips = _this$props.pips,
            values = _this$props.values,
            cssClasses = _this$props.cssClasses;

        var _ref4 = this.isDisabled ? {
          min: this.props.min,
          max: this.props.max + 0.001
        } : this.props,
            min = _ref4.min,
            max = _ref4.max;

        var snapPoints = this.computeSnapPoints({
          min: min,
          max: max,
          step: step
        });
        var pitPoints = pips === false ? [] : this.computeDefaultPitPoints({
          min: min,
          max: max
        });
        return index.createElement("div", {
          className: classnames(cssClasses.root, _defineProperty({}, cssClasses.disabledRoot, this.isDisabled))
        }, index.createElement(Rheostat, {
          handle: this.createHandleComponent(tooltips),
          onChange: this.handleChange,
          min: min,
          max: max,
          pitComponent: Pit,
          pitPoints: pitPoints,
          snap: true,
          snapPoints: snapPoints,
          values: this.isDisabled ? [min, max] : values,
          disabled: this.isDisabled
        }));
      }
    }, {
      key: "isDisabled",
      get: function get() {
        return this.props.min >= this.props.max;
      }
    }]);

    return Slider;
  }(Component$1);

  var withUsage$B = createDocumentationMessageGenerator({
    name: 'range-slider'
  });
  var suit$f = component('RangeSlider');

  var renderer$d = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        pips = _ref.pips,
        step = _ref.step,
        tooltips = _ref.tooltips;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          range = _ref2.range,
          start = _ref2.start;

      if (isFirstRendering) {
        // There's no information at this point, let's render nothing.
        return;
      }

      var minRange = range.min,
          maxRange = range.max;

      var _start = _slicedToArray(start, 2),
          minStart = _start[0],
          maxStart = _start[1];

      var minFinite = minStart === -Infinity ? minRange : minStart;
      var maxFinite = maxStart === Infinity ? maxRange : maxStart; // Clamp values to the range for avoid extra rendering & refinement
      // Should probably be done on the connector side, but we need to stay
      // backward compatible so we still need to pass [-Infinity, Infinity]

      var values = [minFinite > maxRange ? maxRange : minFinite, maxFinite < minRange ? minRange : maxFinite];
      render$1(index.createElement(Slider$1, {
        cssClasses: cssClasses,
        refine: refine,
        min: minRange,
        max: maxRange,
        values: values,
        tooltips: tooltips,
        step: step,
        pips: pips
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} RangeSliderCssClasses
   * @property  {string|string[]} [root] CSS class to add to the root element.
   * @property  {string|string[]} [disabledRoot] CSS class to add to the disabled root element.
   */

  /**
   * @typedef {Object} RangeSliderTooltipOptions
   * @property {function(number):string} format The function takes the raw value as input, and should return
   * a string for the label that should be used for this value.
   * `format: function(rawValue) {return '$' + Math.round(rawValue).toLocaleString()}`
   */

  /**
   * @typedef {Object} RangeSliderWidgetOptions
   * @property  {string|HTMLElement} container CSS Selector or DOMElement to insert the widget.
   * @property  {string} attribute Name of the attribute for faceting.
   * @property  {boolean|RangeSliderTooltipOptions} [tooltips=true] Should we show tooltips or not.
   * The default tooltip will show the raw value.
   * You can also provide an object with a format function as an attribute.
   * So that you can format the tooltip display value as you want
   * @property  {RangeSliderCssClasses} [cssClasses] CSS classes to add to the wrapping elements.
   * @property  {boolean} [pips=true] Show slider pips.
   * @property  {number} [precision = 0] Number of digits after decimal point to use.
   * @property  {number} [step] Every handle move will jump that number of steps.
   * @property  {number} [min] Minimal slider value, default to automatically computed from the result set.
   * @property  {number} [max] Maximal slider value, defaults to automatically computed from the result set.
   */

  /**
   * The range slider is a widget which provides a user-friendly way to filter the
   * results based on a single numeric range.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   *
   * The values inside this attribute must be JavaScript numbers (not strings).
   *
   * @type {WidgetFactory}
   * @devNovel RangeSlider
   * @category filter
   * @param {RangeSliderWidgetOptions} $0 RangeSlider widget options.
   * @return {Widget} A new RangeSlider widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.rangeSlider({
   *     container: '#price',
   *     attribute: 'price',
   *     tooltips: {
   *       format: function(rawValue) {
   *         return '$' + Math.round(rawValue).toLocaleString();
   *       }
   *     }
   *   })
   * );
   */


  function rangeSlider() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attribute = _ref3.attribute,
        min = _ref3.min,
        max = _ref3.max,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        step = _ref3.step,
        _ref3$pips = _ref3.pips,
        pips = _ref3$pips === void 0 ? true : _ref3$pips,
        _ref3$precision = _ref3.precision,
        precision = _ref3$precision === void 0 ? 0 : _ref3$precision,
        _ref3$tooltips = _ref3.tooltips,
        tooltips = _ref3$tooltips === void 0 ? true : _ref3$tooltips;

    if (!container) {
      throw new Error(withUsage$B('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$f(), userCssClasses.root),
      disabledRoot: classnames(suit$f({
        modifierName: 'disabled'
      }), userCssClasses.disabledRoot)
    };
    var specializedRenderer = renderer$d({
      containerNode: containerNode,
      step: step,
      pips: pips,
      tooltips: tooltips,
      renderState: {},
      cssClasses: cssClasses
    });
    var makeWidget = connectRange(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      attribute: attribute,
      min: min,
      max: max,
      precision: precision
    });
  }

  var withUsage$C = createDocumentationMessageGenerator({
    name: 'sort-by'
  });
  var suit$g = component('SortBy');

  var renderer$e = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses;
    return function (_ref2, isFirstRendering) {
      var currentRefinement = _ref2.currentRefinement,
          options = _ref2.options,
          refine = _ref2.refine;

      if (isFirstRendering) {
        return;
      }

      render$1(index.createElement("div", {
        className: cssClasses.root
      }, index.createElement(Selector, {
        cssClasses: cssClasses,
        currentValue: currentRefinement,
        options: options,
        setValue: refine
      })), containerNode);
    };
  };
  /**
   * @typedef {Object} SortByWidgetCssClasses
   * @property {string|string[]} [root] CSS classes added to the outer `<div>`.
   * @property {string|string[]} [select] CSS classes added to the parent `<select>`.
   * @property {string|string[]} [option] CSS classes added to each `<option>`.
   */

  /**
   * @typedef {Object} SortByIndexDefinition
   * @property {string} value The name of the index to target.
   * @property {string} label The label of the index to display.
   */

  /**
   * @typedef {Object} SortByWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {SortByIndexDefinition[]} items Array of objects defining the different indices to choose from.
   * @property {SortByWidgetCssClasses} [cssClasses] CSS classes to be added.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * Sort by selector is a widget used for letting the user choose between different
   * indices that contains the same data with a different order / ranking formula.
   *
   * For the users it is like they are selecting a new sort order.
   * @type {WidgetFactory}
   * @devNovel SortBy
   * @category sort
   * @param {SortByWidgetOptions} $0 Options for the SortBy widget
   * @return {Widget} Creates a new instance of the SortBy widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.sortBy({
   *     container: '#sort-by-container',
   *     items: [
   *       {value: 'instant_search', label: 'Most relevant'},
   *       {value: 'instant_search_price_asc', label: 'Lowest price'},
   *       {value: 'instant_search_price_desc', label: 'Highest price'}
   *     ]
   *   })
   * );
   */


  function sortBy() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        items = _ref3.items,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$C('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$g(), userCssClasses.root),
      select: classnames(suit$g({
        descendantName: 'select'
      }), userCssClasses.select),
      option: classnames(suit$g({
        descendantName: 'option'
      }), userCssClasses.option)
    };
    var specializedRenderer = renderer$e({
      containerNode: containerNode,
      cssClasses: cssClasses
    });
    var makeWidget = connectSortBy(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      items: items,
      transformItems: transformItems
    });
  }

  var defaultTemplates$a = {
    item: "{{#count}}<a class=\"{{cssClasses.link}}\" aria-label=\"{{value}} & up\" href=\"{{href}}\">{{/count}}{{^count}}<div class=\"{{cssClasses.link}}\" aria-label=\"{{value}} & up\" disabled>{{/count}}\n  {{#stars}}<svg class=\"{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}\" aria-hidden=\"true\" width=\"24\" height=\"24\">\n    {{#.}}<use xlink:href=\"#ais-RatingMenu-starSymbol\"></use>{{/.}}{{^.}}<use xlink:href=\"#ais-RatingMenu-starEmptySymbol\"></use>{{/.}}\n  </svg>{{/stars}}\n  <span class=\"{{cssClasses.label}}\">& Up</span>\n  {{#count}}<span class=\"{{cssClasses.count}}\">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n{{#count}}</a>{{/count}}{{^count}}</div>{{/count}}"
  };

  var withUsage$D = createDocumentationMessageGenerator({
    name: 'rating-menu'
  });
  var suit$h = component('RatingMenu');

  var _ref3 =
  /*#__PURE__*/
  index.createElement("path", {
    d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
  });

  var _ref4 =
  /*#__PURE__*/
  index.createElement("path", {
    d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
  });

  var renderer$f = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        templates = _ref.templates,
        renderState = _ref.renderState;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          items = _ref2.items,
          createURL = _ref2.createURL,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$a,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(RefinementList$1, {
        createURL: createURL,
        cssClasses: cssClasses,
        facetValues: items,
        templateProps: renderState.templateProps,
        toggleRefinement: refine
      }, index.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: "display:none;"
      }, index.createElement("symbol", {
        id: suit$h({
          descendantName: 'starSymbol'
        }),
        viewBox: "0 0 24 24"
      }, _ref3), index.createElement("symbol", {
        id: suit$h({
          descendantName: 'starEmptySymbol'
        }),
        viewBox: "0 0 24 24"
      }, _ref4))), containerNode);
    };
  };
  /**
   * @typedef {Object} RatingMenuWidgetTemplates
   * @property  {string|function} [item] Item template, provided with `name`, `count`, `isRefined`, `url` data properties.
   */

  /**
   * @typedef {Object} RatingMenuWidgetCssClasses
   * @property  {string|string[]} [root] CSS class to add to the root element.
   * @property  {string|string[]} [noRefinementRoot] CSS class to add to the root element when there's no refinements.
   * @property  {string|string[]} [list] CSS class to add to the list element.
   * @property  {string|string[]} [item] CSS class to add to each item element.
   * @property  {string|string[]} [selectedItem] CSS class to add the selected item element.
   * @property  {string|string[]} [disabledItem] CSS class to add a disabled item element.
   * @property  {string|string[]} [link] CSS class to add to each link element.
   * @property  {string|string[]} [starIcon] CSS class to add to each star element (when using the default template).
   * @property  {string|string[]} [fullStarIcon] CSS class to add to each full star element (when using the default template).
   * @property  {string|string[]} [emptyStarIcon] CSS class to add to each empty star element (when using the default template).
   * @property  {string|string[]} [label] CSS class to add to each label.
   * @property  {string|string[]} [count] CSS class to add to each counter.
   */

  /**
   * @typedef {Object} RatingMenuWidgetOptions
   * @property {string|HTMLElement} container Place where to insert the widget in your webpage.
   * @property {string} attribute Name of the attribute in your records that contains the ratings.
   * @property {number} [max = 5] The maximum rating value.
   * @property {RatingMenuWidgetTemplates} [templates] Templates to use for the widget.
   * @property {RatingMenuWidgetCssClasses} [cssClasses] CSS classes to add.
   */

  /**
   * Rating menu is used for displaying grade like filters. The values are normalized within boundaries.
   *
   * The maximum value can be set (with `max`), the minimum is always 0.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   *
   * The values inside this attribute must be JavaScript numbers (not strings).
   *
   * @type {WidgetFactory}
   * @devNovel RatingMenu
   * @category filter
   * @param {RatingMenuWidgetOptions} $0 RatingMenu widget options.
   * @return {Widget} A new RatingMenu widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.ratingMenu({
   *     container: '#stars',
   *     attribute: 'rating',
   *     max: 5,
   *   })
   * );
   */


  function ratingMenu() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref5.container,
        attribute = _ref5.attribute,
        _ref5$max = _ref5.max,
        max = _ref5$max === void 0 ? 5 : _ref5$max,
        _ref5$cssClasses = _ref5.cssClasses,
        userCssClasses = _ref5$cssClasses === void 0 ? {} : _ref5$cssClasses,
        _ref5$templates = _ref5.templates,
        templates = _ref5$templates === void 0 ? defaultTemplates$a : _ref5$templates;

    if (!container) {
      throw new Error(withUsage$D('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$h(), userCssClasses.root),
      noRefinementRoot: classnames(suit$h({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$h({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$h({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$h({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      disabledItem: classnames(suit$h({
        descendantName: 'item',
        modifierName: 'disabled'
      }), userCssClasses.disabledItem),
      link: classnames(suit$h({
        descendantName: 'link'
      }), userCssClasses.link),
      starIcon: classnames(suit$h({
        descendantName: 'starIcon'
      }), userCssClasses.starIcon),
      fullStarIcon: classnames(suit$h({
        descendantName: 'starIcon',
        modifierName: 'full'
      }), userCssClasses.fullStarIcon),
      emptyStarIcon: classnames(suit$h({
        descendantName: 'starIcon',
        modifierName: 'empty'
      }), userCssClasses.emptyStarIcon),
      label: classnames(suit$h({
        descendantName: 'label'
      }), userCssClasses.label),
      count: classnames(suit$h({
        descendantName: 'count'
      }), userCssClasses.count)
    };
    var specializedRenderer = renderer$f({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeWidget = connectRatingMenu(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      attribute: attribute,
      max: max
    });
  }

  var Stats = function Stats(_ref) {
    var nbHits = _ref.nbHits,
        hitsPerPage = _ref.hitsPerPage,
        nbPages = _ref.nbPages,
        page = _ref.page,
        processingTimeMS = _ref.processingTimeMS,
        query = _ref.query,
        templateProps = _ref.templateProps,
        cssClasses = _ref.cssClasses;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "text",
      rootTagName: "span",
      rootProps: {
        className: cssClasses.text
      },
      data: {
        hasManyResults: nbHits > 1,
        hasNoResults: nbHits === 0,
        hasOneResult: nbHits === 1,
        hitsPerPage: hitsPerPage,
        nbHits: nbHits,
        nbPages: nbPages,
        page: page,
        processingTimeMS: processingTimeMS,
        query: query,
        cssClasses: cssClasses
      }
    })));
  };

  var defaultTemplates$b = {
    text: "{{#hasNoResults}}No results{{/hasNoResults}}\n    {{#hasOneResult}}1 result{{/hasOneResult}}\n    {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}} found in {{processingTimeMS}}ms"
  };

  var withUsage$E = createDocumentationMessageGenerator({
    name: 'stats'
  });
  var suit$i = component('Stats');

  var renderer$g = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var hitsPerPage = _ref2.hitsPerPage,
          nbHits = _ref2.nbHits,
          nbPages = _ref2.nbPages,
          page = _ref2.page,
          processingTimeMS = _ref2.processingTimeMS,
          query = _ref2.query,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$b,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(Stats, {
        cssClasses: cssClasses,
        hitsPerPage: hitsPerPage,
        nbHits: nbHits,
        nbPages: nbPages,
        page: page,
        processingTimeMS: processingTimeMS,
        query: query,
        templateProps: renderState.templateProps
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} StatsWidgetTemplates
   * @property {string|function} [text] Text template, provided with `hasManyResults`,
   * `hasNoResults`, `hasOneResult`, `hitsPerPage`, `nbHits`, `nbPages`, `page`, `processingTimeMS`, `query`.
   */

  /**
   * @typedef {Object} StatsWidgetCssClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [text] CSS class to add to the text span element.
   */

  /**
   * @typedef {Object} StatsTextData
   * @property {boolean} hasManyResults True if the result set has more than one result.
   * @property {boolean} hasNoResults True if the result set has no result.
   * @property {boolean} hasOneResult True if the result set has exactly one result.
   * @property {number} hitsPerPage Number of hits per page.
   * @property {number} nbHits Number of hit in the result set.
   * @property {number} nbPages Number of pages in the result set with regard to the hitsPerPage and number of hits.
   * @property {number} page Number of the current page. First page is 0.
   * @property {number} processingTimeMS Time taken to compute the results inside the engine.
   * @property {string} query Text query currently used.
   */

  /**
   * @typedef {Object} StatsWidgetOptions
   * @property {string|HTMLElement} container Place where to insert the widget in your webpage.
   * @property {StatsWidgetTemplates} [templates] Templates to use for the widget.
   * @property {StatsWidgetCssClasses} [cssClasses] CSS classes to add.
   */

  /**
   * The `stats` widget is used to display useful insights about the current results.
   *
   * By default, it will display the **number of hits** and the time taken to compute the
   * results inside the engine.
   * @type {WidgetFactory}
   * @devNovel Stats
   * @category metadata
   * @param {StatsWidgetOptions} $0 Stats widget options. Some keys are mandatory: `container`,
   * @return {Widget} A new stats widget instance
   * @example
   * search.addWidget(
   *   instantsearch.widgets.stats({
   *     container: '#stats-container'
   *   })
   * );
   */


  function stats() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$b : _ref3$templates;

    if (!container) {
      throw new Error(withUsage$E('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$i(), userCssClasses.root),
      text: classnames(suit$i({
        descendantName: 'text'
      }), userCssClasses.text)
    };
    var specializedRenderer = renderer$g({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeWidget = connectStats(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget();
  }

  var ToggleRefinement = function ToggleRefinement(_ref) {
    var currentRefinement = _ref.currentRefinement,
        refine = _ref.refine,
        cssClasses = _ref.cssClasses,
        templateProps = _ref.templateProps;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement("label", {
      className: cssClasses.label
    }, index.createElement("input", {
      className: cssClasses.checkbox,
      type: "checkbox",
      checked: currentRefinement.isRefined,
      onChange: function onChange(event) {
        return refine(!event.target.checked);
      }
    }), index.createElement(Template, _extends({}, templateProps, {
      rootTagName: "span",
      rootProps: {
        className: cssClasses.labelText
      },
      templateKey: "labelText",
      data: currentRefinement
    }))));
  };

  var defaultTemplates$c = {
    labelText: '{{name}}'
  };

  var withUsage$F = createDocumentationMessageGenerator({
    name: 'toggle-refinement'
  });
  var suit$j = component('ToggleRefinement');

  var renderer$h = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var value = _ref2.value,
          createURL = _ref2.createURL,
          _refine = _ref2.refine,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$c,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(ToggleRefinement, {
        createURL: createURL,
        cssClasses: cssClasses,
        currentRefinement: value,
        templateProps: renderState.templateProps,
        refine: function refine(isRefined) {
          return _refine({
            isRefined: isRefined
          });
        }
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} ToggleWidgetCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [label] CSS class to add to the label wrapping element
   * @property {string|string[]} [checkbox] CSS class to add to the checkbox
   * @property {string|string[]} [labelText] CSS class to add to the label text.
   */

  /**
   * @typedef {Object} ToggleWidgetTemplates
   * @property {string|function(object):string} labelText the text that describes the toggle action. This
   * template receives some contextual information:
   *  - `isRefined` which is `true` if the checkbox is checked
   *  - `count` - the count of the values if the toggle in the next refinements
   *  - `onFacetValue`, `offFacetValue`: objects with `count` (useful to get the other value of `count`)
   */

  /**
   * @typedef {Object} ToggleWidgetOptions
   * @property {string|HTMLElement} container Place where to insert the widget in your webpage.
   * @property {string} attribute Name of the attribute for faceting (eg. "free_shipping").
   * @property {string|number|boolean} on Value to filter on when checked.
   * @property {string|number|boolean} off Value to filter on when unchecked.
   * element (when using the default template). By default when switching to `off`, no refinement will be asked. So you
   * will get both `true` and `false` results. If you set the off value to `false` then you will get only objects
   * having `false` has a value for the selected attribute.
   * @property {ToggleWidgetTemplates} [templates] Templates to use for the widget.
   * @property {ToggleWidgetCSSClasses} [cssClasses] CSS classes to add.
   */

  /**
   * The toggleRefinement widget lets the user either:
   *  - switch between two values for a single facetted attribute (free_shipping / not_free_shipping)
   *  - toggleRefinement a faceted value on and off (only 'canon' for brands)
   *
   * This widget is particularly useful if you have a boolean value in the records.
   *
   * @requirements
   * The attribute passed to `attribute` must be declared as an
   * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
   * in your Algolia settings.
   *
   * @type {WidgetFactory}
   * @devNovel ToggleRefinement
   * @category filter
   * @param {ToggleWidgetOptions} $0 Options for the ToggleRefinement widget.
   * @return {Widget} A new instance of the ToggleRefinement widget
   * @example
   * search.addWidget(
   *   instantsearch.widgets.toggleRefinement({
   *     container: '#free-shipping',
   *     attribute: 'free_shipping',
   *     on: true,
   *     templates: {
   *       labelText: 'Free shipping'
   *     }
   *   })
   * );
   */


  function toggleRefinement() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attribute = _ref3.attribute,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$c : _ref3$templates,
        _ref3$on = _ref3.on,
        on = _ref3$on === void 0 ? true : _ref3$on,
        off = _ref3.off;

    if (!container) {
      throw new Error(withUsage$F('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$j(), userCssClasses.root),
      label: classnames(suit$j({
        descendantName: 'label'
      }), userCssClasses.label),
      checkbox: classnames(suit$j({
        descendantName: 'checkbox'
      }), userCssClasses.checkbox),
      labelText: classnames(suit$j({
        descendantName: 'labelText'
      }), userCssClasses.labelText)
    };
    var specializedRenderer = renderer$h({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeWidget = connectToggleRefinement(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      attribute: attribute,
      on: on,
      off: off
    });
  }

  var withUsage$G = createDocumentationMessageGenerator({
    name: 'analytics'
  });
  /**
   * @typedef {Object} AnalyticsWidgetOptions
   * @property {function(qs: string, state: SearchParameters, results: SearchResults)} pushFunction
   * Function called when data are ready to be pushed. It should push the data to your analytics platform.
   * The `qs` parameter contains the parameters serialized as a query string. The `state` contains the
   * whole search state, and the `results` the last results received.
   * @property {number} [delay=3000] Number of milliseconds between last search key stroke and calling pushFunction.
   * @property {boolean} [triggerOnUIInteraction=false] Trigger pushFunction after click on page or redirecting the page
   * @property {boolean} [pushInitialSearch=true] Trigger pushFunction after the initial search
   * @property {boolean} [pushPagination=false] Trigger pushFunction on pagination
   */

  /**
   * The analytics widget pushes the current state of the search to the analytics platform of your
   * choice. It requires the implementation of a function that will push the data.
   *
   * This is a headless widget, which means that it does not have a rendered output in the
   * UI.
   * @type {WidgetFactory}
   * @devNovel Analytics
   * @category analytics
   * @param {AnalyticsWidgetOptions} $0 The Analytics widget options.
   * @return {Widget} A new instance of the Analytics widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.analytics({
   *     pushFunction: function(formattedParameters, state, results) {
   *       // Google Analytics
   *       // window.ga('set', 'page', window.location.pathname + window.location.search);
   *       // window.ga('send', 'pageView');
   *
   *       // GTM
   *       // dataLayer.push({'event': 'search', 'Search Query': state.query, 'Facet Parameters': formattedParameters, 'Number of Hits': results.nbHits});
   *
   *       // Segment.io
   *       // analytics.page( '[SEGMENT] instantsearch', { path: '/instantsearch/?query=' + state.query + '&' + formattedParameters });
   *
   *       // Kissmetrics
   *       // var objParams = JSON.parse('{"' + decodeURI(formattedParameters.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
   *       // var arrParams = $.map(objParams, function(value, index) {
   *       //   return [value];
   *       // });
   *       //
   *       // _kmq.push(['record', '[KM] Viewed Result page', {
   *       //   'Query': state.query ,
   *       //   'Number of Hits': results.nbHits,
   *       //   'Search Params': arrParams
   *       // }]);
   *
   *       // any other analytics service
   *     }
   *   })
   * );
   */

  function analytics() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        pushFunction = _ref.pushFunction,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 3000 : _ref$delay,
        _ref$triggerOnUIInter = _ref.triggerOnUIInteraction,
        triggerOnUIInteraction = _ref$triggerOnUIInter === void 0 ? false : _ref$triggerOnUIInter,
        _ref$pushInitialSearc = _ref.pushInitialSearch,
        pushInitialSearch = _ref$pushInitialSearc === void 0 ? true : _ref$pushInitialSearc,
        _ref$pushPagination = _ref.pushPagination,
        pushPagination = _ref$pushPagination === void 0 ? false : _ref$pushPagination;

    if (!pushFunction) {
      throw new Error(withUsage$G('The `pushFunction` option is required.'));
    }

    var cachedState = null;

    var serializeRefinements = function serializeRefinements(obj) {
      var str = [];

      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          var values = obj[p].join('+');
          str.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(p), "_").concat(encodeURIComponent(values)));
        }
      }

      return str.join('&');
    };

    var serializeNumericRefinements = function serializeNumericRefinements(numericRefinements) {
      var numericStr = [];

      for (var attr in numericRefinements) {
        if (numericRefinements.hasOwnProperty(attr)) {
          var filter = numericRefinements[attr];

          if (filter.hasOwnProperty('>=') && filter.hasOwnProperty('<=')) {
            if (filter['>='][0] === filter['<='][0]) {
              numericStr.push("".concat(attr, "=").concat(attr, "_").concat(filter['>=']));
            } else {
              numericStr.push("".concat(attr, "=").concat(attr, "_").concat(filter['>='], "to").concat(filter['<=']));
            }
          } else if (filter.hasOwnProperty('>=')) {
            numericStr.push("".concat(attr, "=").concat(attr, "_from").concat(filter['>=']));
          } else if (filter.hasOwnProperty('<=')) {
            numericStr.push("".concat(attr, "=").concat(attr, "_to").concat(filter['<=']));
          } else if (filter.hasOwnProperty('=')) {
            var equals = [];

            for (var equal in filter['=']) {
              // eslint-disable-next-line max-depth
              if (filter['='].hasOwnProperty(equal)) {
                equals.push(filter['='][equal]);
              }
            }

            numericStr.push("".concat(attr, "=").concat(attr, "_").concat(equals.join('-')));
          }
        }
      }

      return numericStr.join('&');
    };

    var lastSentData = '';

    var sendAnalytics = function sendAnalytics(state) {
      if (state === null) {
        return;
      }

      var formattedParams = [];
      var serializedRefinements = serializeRefinements(_objectSpread({}, state.state.disjunctiveFacetsRefinements, state.state.facetsRefinements, state.state.hierarchicalFacetsRefinements));
      var serializedNumericRefinements = serializeNumericRefinements(state.state.numericRefinements);

      if (serializedRefinements !== '') {
        formattedParams.push(serializedRefinements);
      }

      if (serializedNumericRefinements !== '') {
        formattedParams.push(serializedNumericRefinements);
      }

      formattedParams = formattedParams.join('&');
      var dataToSend = "Query: ".concat(state.state.query, ", ").concat(formattedParams);

      if (pushPagination === true) {
        dataToSend += ", Page: ".concat(state.state.page);
      }

      if (lastSentData !== dataToSend) {
        pushFunction(formattedParams, state.state, state.results);
        lastSentData = dataToSend;
      }
    };

    var pushTimeout;
    var isInitialSearch = true;

    if (pushInitialSearch === true) {
      isInitialSearch = false;
    }

    return {
      init: function init() {
        if (triggerOnUIInteraction === true) {
          document.addEventListener('click', function () {
            sendAnalytics(cachedState);
          });
          window.addEventListener('beforeunload', function () {
            sendAnalytics(cachedState);
          });
        }
      },
      render: function render(_ref2) {
        var results = _ref2.results,
            state = _ref2.state;

        if (isInitialSearch === true) {
          isInitialSearch = false;
          return;
        }

        cachedState = {
          results: results,
          state: state
        };

        if (pushTimeout) {
          clearTimeout(pushTimeout);
        }

        pushTimeout = setTimeout(function () {
          return sendAnalytics(cachedState);
        }, delay);
      }
    };
  }

  var renderLink = function renderLink(_ref) {
    var cssClasses = _ref.cssClasses,
        createURL = _ref.createURL,
        refine = _ref.refine,
        templateProps = _ref.templateProps;
    return function (item, idx, items) {
      var isLast = idx === items.length - 1;
      var link = isLast ? item.label : index.createElement("a", {
        className: cssClasses.link,
        href: createURL(item.value),
        onClick: function onClick(event) {
          event.preventDefault();
          refine(item.value);
        }
      }, item.label);
      return index.createElement("li", {
        key: item.label + idx,
        className: classnames(cssClasses.item, _defineProperty({}, cssClasses.selectedItem, isLast))
      }, index.createElement(Template, _extends({}, templateProps, {
        templateKey: "separator",
        rootTagName: "span",
        rootProps: {
          className: cssClasses.separator,
          'aria-hidden': true
        }
      })), link);
    };
  };

  var Breadcrumb = function Breadcrumb(_ref2) {
    var createURL = _ref2.createURL,
        items = _ref2.items,
        refine = _ref2.refine,
        cssClasses = _ref2.cssClasses,
        templateProps = _ref2.templateProps;
    return index.createElement("div", {
      className: classnames(cssClasses.root, _defineProperty({}, cssClasses.noRefinementRoot, items.length === 0))
    }, index.createElement("ul", {
      className: cssClasses.list
    }, index.createElement("li", {
      className: classnames(cssClasses.item, _defineProperty({}, cssClasses.selectedItem, items.length === 0))
    }, index.createElement(Template, _extends({}, templateProps, {
      templateKey: "home",
      rootTagName: "a",
      rootProps: {
        className: cssClasses.link,
        href: createURL(null),
        onClick: function onClick(event) {
          event.preventDefault();
          refine(null);
        }
      }
    }))), items.map(renderLink({
      cssClasses: cssClasses,
      createURL: createURL,
      refine: refine,
      templateProps: templateProps
    }))));
  };

  var defaultTemplates$d = {
    home: 'Home',
    separator: '>'
  };

  var withUsage$H = createDocumentationMessageGenerator({
    name: 'breadcrumb'
  });
  var suit$k = component('Breadcrumb');

  var renderer$i = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var canRefine = _ref2.canRefine,
          createURL = _ref2.createURL,
          instantSearchInstance = _ref2.instantSearchInstance,
          items = _ref2.items,
          refine = _ref2.refine;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$d,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(Breadcrumb, {
        canRefine: canRefine,
        cssClasses: cssClasses,
        createURL: createURL,
        items: items,
        refine: refine,
        templateProps: renderState.templateProps
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} BreadcrumbCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element of the widget.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root element of the widget if there are no refinements.
   * @property {string|string[]} [list] CSS class to add to the list element.
   * @property {string|string[]} [item] CSS class to add to the items of the list. The items contains the link and the separator.
   * @property {string|string[]} [selectedItem] CSS class to add to the selected item in the list: the last one or the home if there are no refinements.
   * @property {string|string[]} [separator] CSS class to add to the separator.
   * @property {string|string[]} [link] CSS class to add to the links in the items.
   */

  /**
   * @typedef {Object} BreadcrumbTemplates
   * @property {string|function(object):string} [home = 'Home'] Label of the breadcrumb's first element.
   * @property {string|function(object):string} [separator = '>'] Symbol used to separate the elements of the breadcrumb.
   */

  /**
   * @typedef {Object} BreadcrumbWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string[]} attributes Array of attributes to use to generate the breadcrumb.
   * @property {string} [separator = ' > '] The level separator used in the records.
   * @property {string} [rootPath = null] Prefix path to use if the first level is not the root level.
   * @property {BreadcrumbTemplates} [templates] Templates to use for the widget.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   * @property {BreadcrumbCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   */

  /**
   * The breadcrumb widget is a secondary navigation scheme that allows the user to see where the current page is in relation to the facet's hierarchy.
   *
   * It reduces the number of actions a user needs to take in order to get to a higher-level page and improve the discoverability of the app or website's sections and pages.
   * It is commonly used for websites with a large amount of data organized into categories with subcategories.
   *
   * All attributes (lvl0, lvl1 in this case) must be declared as [attributes for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting) in your
   * Algolia settings.
   *
   * @requirements
   * Your objects must be formatted in a specific way to be
   * able to display a breadcrumb. Here's an example:
   *
   * ```javascript
   * {
   *   "objectID": "123",
   *   "name": "orange",
   *   "categories": {
   *     "lvl0": "fruits",
   *     "lvl1": "fruits > citrus"
   *   }
   * }
   * ```
   *
   * Each level must be specified entirely.
   * It's also possible to have multiple values per level, for instance:
   *
   * ```javascript
   * {
   *   "objectID": "123",
   *   "name": "orange",
   *   "categories": {
   *     "lvl0": ["fruits", "vitamins"],
   *     "lvl1": ["fruits > citrus", "vitamins > C"]
   *   }
   * }
   * ```
   * @type {WidgetFactory}
   * @devNovel Breadcrumb
   * @category navigation
   * @param {BreadcrumbWidgetOptions} $0 The Breadcrumb widget options.
   * @return {Widget} A new Breadcrumb widget instance.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.breadcrumb({
   *     container: '#breadcrumb',
   *     attributes: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2'],
   *     templates: { home: 'Home Page' },
   *     separator: ' / ',
   *     rootPath: 'Cameras & Camcorders > Digital Cameras',
   *   })
   * );
   */


  function breadcrumb() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        attributes = _ref3.attributes,
        separator = _ref3.separator,
        _ref3$rootPath = _ref3.rootPath,
        rootPath = _ref3$rootPath === void 0 ? null : _ref3$rootPath,
        transformItems = _ref3.transformItems,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$d : _ref3$templates,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;

    if (!container) {
      throw new Error(withUsage$H('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$k(), userCssClasses.root),
      noRefinementRoot: classnames(suit$k({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      list: classnames(suit$k({
        descendantName: 'list'
      }), userCssClasses.list),
      item: classnames(suit$k({
        descendantName: 'item'
      }), userCssClasses.item),
      selectedItem: classnames(suit$k({
        descendantName: 'item',
        modifierName: 'selected'
      }), userCssClasses.selectedItem),
      separator: classnames(suit$k({
        descendantName: 'separator'
      }), userCssClasses.separator),
      link: classnames(suit$k({
        descendantName: 'link'
      }), userCssClasses.link)
    };
    var specializedRenderer = renderer$i({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeBreadcrumb = connectBreadcrumb(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeBreadcrumb({
      attributes: attributes,
      separator: separator,
      rootPath: rootPath,
      transformItems: transformItems
    });
  }

  var MenuSelect =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MenuSelect, _Component);

    function MenuSelect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MenuSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "handleSelectChange", function (_ref) {
        var value = _ref.target.value;

        _this.props.refine(value);
      });

      return _this;
    }

    _createClass(MenuSelect, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            cssClasses = _this$props.cssClasses,
            templateProps = _this$props.templateProps,
            items = _this$props.items;

        var _ref2 = find$1(items, function (item) {
          return item.isRefined;
        }) || {
          value: ''
        },
            selectedValue = _ref2.value;

        var rootClassNames = classnames(cssClasses.root, _defineProperty({}, cssClasses.noRefinementRoot, items.length === 0));
        return index.createElement("div", {
          className: rootClassNames
        }, index.createElement("select", {
          className: cssClasses.select,
          value: selectedValue,
          onChange: this.handleSelectChange
        }, index.createElement(Template, _extends({}, templateProps, {
          templateKey: "defaultOption",
          rootTagName: "option",
          rootProps: {
            value: '',
            className: cssClasses.option
          }
        })), items.map(function (item) {
          return index.createElement(Template, _extends({}, templateProps, {
            templateKey: "item",
            rootTagName: "option",
            rootProps: {
              value: item.value,
              className: cssClasses.option
            },
            key: item.value,
            data: item
          }));
        })));
      }
    }]);

    return MenuSelect;
  }(Component$1);

  var defaultTemplates$e = {
    item: '{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})',
    defaultOption: 'See all'
  };

  var withUsage$I = createDocumentationMessageGenerator({
    name: 'menu-select'
  });
  var suit$l = component('MenuSelect');

  var renderer$j = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses,
        renderState = _ref.renderState,
        templates = _ref.templates;
    return function (_ref2, isFirstRendering) {
      var refine = _ref2.refine,
          items = _ref2.items,
          canRefine = _ref2.canRefine,
          instantSearchInstance = _ref2.instantSearchInstance;

      if (isFirstRendering) {
        renderState.templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates$e,
          templatesConfig: instantSearchInstance.templatesConfig,
          templates: templates
        });
        return;
      }

      render$1(index.createElement(MenuSelect, {
        cssClasses: cssClasses,
        items: items,
        refine: refine,
        templateProps: renderState.templateProps,
        canRefine: canRefine
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} MenuSelectCSSClasses
   * @property {string|string[]} [root] CSS class to add to the root element.
   * @property {string|string[]} [noRefinementRoot] CSS class to add to the root when there are no items to display
   * @property {string|string[]} [select] CSS class to add to the select element.
   * @property {string|string[]} [option] CSS class to add to the option element.
   *
   */

  /**
   * @typedef {Object} MenuSelectTemplates
   * @property {string|function(label: string, count: number, isRefined: boolean, value: string)} [item] Item template, provided with `label`, `count`, `isRefined` and `value` data properties.
   * @property {string} [defaultOption = 'See all'] Label of the "see all" option in the select.
   */

  /**
   * @typedef {Object} MenuSelectWidgetOptions
   * @property {string|HTMLElement} container CSS Selector or HTMLElement to insert the widget.
   * @property {string} attribute Name of the attribute for faceting
   * @property {string[]|function} [sortBy=['name:asc']] How to sort refinements. Possible values: `count|isRefined|name:asc|name:desc`.
   *
   * You can also use a sort function that behaves like the standard Javascript [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Syntax).
   * @property {MenuSelectTemplates} [templates] Customize the output through templating.
   * @property {number} [limit=10] How many facets values to retrieve.
   * @property {MenuSelectCSSClasses} [cssClasses] CSS classes to add to the wrapping elements.
   * @property {function(object[]):object[]} [transformItems] Function to transform the items passed to the templates.
   */

  /**
   * Create a menu select out of a facet
   * @type {WidgetFactory}
   * @category filter
   * @param {MenuSelectWidgetOptions} $0 The Menu select widget options.
   * @return {Widget} Creates a new instance of the Menu select widget.
   * @example
   * search.addWidget(
   *   instantsearch.widgets.menuSelect({
   *     container: '#categories-menuSelect',
   *     attribute: 'hierarchicalCategories.lvl0',
   *     limit: 10,
   *   })
   * );
   */


  function menuSelect(_ref3) {
    var container = _ref3.container,
        attribute = _ref3.attribute,
        _ref3$sortBy = _ref3.sortBy,
        sortBy = _ref3$sortBy === void 0 ? ['name:asc'] : _ref3$sortBy,
        _ref3$limit = _ref3.limit,
        limit = _ref3$limit === void 0 ? 10 : _ref3$limit,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? defaultTemplates$e : _ref3$templates,
        transformItems = _ref3.transformItems;

    if (!container) {
      throw new Error(withUsage$I('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$l(), userCssClasses.root),
      noRefinementRoot: classnames(suit$l({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      select: classnames(suit$l({
        descendantName: 'select'
      }), userCssClasses.select),
      option: classnames(suit$l({
        descendantName: 'option'
      }), userCssClasses.option)
    };
    var specializedRenderer = renderer$j({
      containerNode: containerNode,
      cssClasses: cssClasses,
      renderState: {},
      templates: templates
    });
    var makeWidget = connectMenu(specializedRenderer);
    return makeWidget({
      attribute: attribute,
      limit: limit,
      sortBy: sortBy,
      transformItems: transformItems
    });
  }

  var _ref2 =
  /*#__PURE__*/
  index.createElement("path", {
    fill: "#5468FF",
    d: "M78.99.94h16.6a2.97 2.97 0 0 1 2.96 2.96v16.6a2.97 2.97 0 0 1-2.97 2.96h-16.6a2.97 2.97 0 0 1-2.96-2.96V3.9A2.96 2.96 0 0 1 79 .94"
  });

  var _ref3$1 =
  /*#__PURE__*/
  index.createElement("path", {
    fill: "#FFF",
    d: "M89.63 5.97v-.78a.98.98 0 0 0-.98-.97h-2.28a.98.98 0 0 0-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 0 1 3.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 0 0-1.38 0l-.46.46a.97.97 0 0 0 0 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 0 1 1.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 0 0-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 1 1 0-8.98 4.49 4.49 0 0 1 0 8.98m0-10.85a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74"
  });

  var PoweredBy = function PoweredBy(_ref) {
    var url = _ref.url,
        theme = _ref.theme,
        cssClasses = _ref.cssClasses;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement("a", {
      href: url,
      target: "_blank",
      className: cssClasses.link,
      "aria-label": "Search by Algolia",
      rel: "noopener noreferrer"
    }, index.createElement("svg", {
      height: "1.2em",
      className: cssClasses.logo,
      viewBox: "0 0 168 24" // This style is necessary as long as it's not included in InstantSearch.css.
      // For now, InstantSearch.css sets a maximum width of 70px.
      ,
      style: {
        width: 'auto'
      }
    }, index.createElement("path", {
      fill: theme === 'dark' ? '#FFF' : '#5D6494',
      d: "M6.97 6.68V8.3a4.47 4.47 0 0 0-2.42-.67 2.2 2.2 0 0 0-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 0 1 1.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 0 1-2.6.81 5.71 5.71 0 0 1-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 0 0-.65-.53 23.03 23.03 0 0 0-1.64-.78 13.67 13.67 0 0 1-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 0 1-.39-.5 4.46 4.46 0 0 1-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 0 1 2.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 0 0-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58-.38.39-.62.95-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 0 1-3-1.13 4.04 4.04 0 0 1-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 0 1 2.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 0 1 2.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 0 0-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 0 0 .76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 0 1-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 0 1 3.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 0 0-1.77-.5A2.65 2.65 0 0 0 32.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 0 1 2.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"
    }), _ref2, _ref3$1, index.createElement("path", {
      fill: theme === 'dark' ? '#FFF' : '#5468FF',
      d: "M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 0 0-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87c-.4.1-1.03.2-1.86.32-.84.12-1.78.18-2.82.18-.69 0-1.32-.07-1.9-.2a4 4 0 0 1-1.46-.63c-.4-.3-.72-.67-.96-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.39-1.53.26-.45.6-.82 1.04-1.1.45-.3.95-.5 1.54-.62a8.8 8.8 0 0 1 3.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 0 0-1.1-1.22c-.31-.12-.7-.2-1.15-.2a9.75 9.75 0 0 0-2.95.46l-.33-2.19c.34-.12.84-.23 1.48-.35.65-.12 1.34-.18 2.08-.18zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 0 0-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 0 1-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 0 1 3.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 0 0-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 0 0-2.95.47l-.32-2.19a11.63 11.63 0 0 1 3.55-.53zm-8.03-1.27a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 1 0 0 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 0 0-.74-2.79 2.4 2.4 0 0 0-2.07-1 2.4 2.4 0 0 0-2.06 1 4.7 4.7 0 0 0-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 0 0 2.07 1.02c.88 0 1.57-.34 2.07-1.02.49-.68.73-1.46.73-2.63zm2.74 0a6.46 6.46 0 0 1-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45-.53 0-1.58-.15-2.25-.45a5.1 5.1 0 0 1-2.88-3.13 7.3 7.3 0 0 1-.01-4.84 5.13 5.13 0 0 1 2.9-3.1 5.67 5.67 0 0 1 2.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 0 1 .43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 0 0 2.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 0 0-2.23 1 4.73 4.73 0 0 0-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 0 1-2.54.6 5.6 5.6 0 0 1-2.01-.36 4.2 4.2 0 0 1-2.58-2.71 9.88 9.88 0 0 1 .02-5.35 4.92 4.92 0 0 1 2.93-2.96 6.6 6.6 0 0 1 2.43-.46 19.64 19.64 0 0 1 4.43.66v10.6z"
    }))));
  };

  var suit$m = component('PoweredBy');
  var withUsage$J = createDocumentationMessageGenerator({
    name: 'powered-by'
  });

  var renderer$k = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        cssClasses = _ref.cssClasses;
    return function (_ref2, isFirstRendering) {
      var url = _ref2.url,
          widgetParams = _ref2.widgetParams;

      if (isFirstRendering) {
        var theme = widgetParams.theme;
        render$1(index.createElement(PoweredBy, {
          cssClasses: cssClasses,
          url: url,
          theme: theme
        }), containerNode);
        return;
      }
    };
  };
  /**
   * @typedef {Object} PoweredByWidgetCssClasses
   * @property  {string|string[]} [root] CSS classes added to the root element of the widget.
   * @property  {string|string[]} [link] CSS class to add to the link.
   * @property  {string|string[]} [logo] CSS class to add to the SVG logo.
   */

  /**
   * @typedef {Object} PoweredByWidgetOptions
   * @property {string|HTMLElement} container Place where to insert the widget in your webpage.
   * @property {string} [theme] The theme of the logo ("light" or "dark").
   * @property {PoweredByWidgetCssClasses} [cssClasses] CSS classes to add.
   */

  /**
   * The `poweredBy` widget is used to display the logo to redirect to Algolia.
   * @type {WidgetFactory}
   * @devNovel PoweredBy
   * @category metadata
   * @param {PoweredByWidgetOptions} $0 PoweredBy widget options. Some keys are mandatory: `container`,
   * @return {Widget} A new poweredBy widget instance
   * @example
   * search.addWidget(
   *   instantsearch.widgets.poweredBy({
   *     container: '#poweredBy-container',
   *     theme: 'dark',
   *   })
   * );
   */


  function poweredBy() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref3.container,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses,
        _ref3$theme = _ref3.theme,
        theme = _ref3$theme === void 0 ? 'light' : _ref3$theme;

    if (!container) {
      throw new Error(withUsage$J('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$m(), suit$m({
        modifierName: theme === 'dark' ? 'dark' : 'light'
      }), userCssClasses.root),
      link: classnames(suit$m({
        descendantName: 'link'
      }), userCssClasses.link),
      logo: classnames(suit$m({
        descendantName: 'logo'
      }), userCssClasses.logo)
    };
    var specializedRenderer = renderer$k({
      containerNode: containerNode,
      cssClasses: cssClasses
    });
    var makeWidget = connectPoweredBy(specializedRenderer, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      theme: theme
    });
  }

  var Panel =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Panel, _Component);

    function Panel() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Panel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Panel)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        collapsed: _this.props.collapsed,
        controlled: false
      });

      return _this;
    }

    _createClass(Panel, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.bodyRef.appendChild(this.props.bodyElement);
      }
    }, {
      key: "render",
      value: function render() {
        var _cx,
            _this2 = this;

        var _this$props = this.props,
            cssClasses = _this$props.cssClasses,
            hidden = _this$props.hidden,
            collapsible = _this$props.collapsible,
            templateProps = _this$props.templateProps,
            data = _this$props.data;
        return index.createElement("div", {
          className: classnames(cssClasses.root, (_cx = {}, _defineProperty(_cx, cssClasses.noRefinementRoot, hidden), _defineProperty(_cx, cssClasses.collapsibleRoot, collapsible), _defineProperty(_cx, cssClasses.collapsedRoot, this.state.collapsed), _cx)),
          hidden: hidden
        }, templateProps.templates.header && index.createElement("div", {
          className: cssClasses.header
        }, index.createElement(Template, _extends({}, templateProps, {
          templateKey: "header",
          rootTagName: "span",
          data: data
        })), collapsible && index.createElement("button", {
          className: cssClasses.collapseButton,
          "aria-expanded": !this.state.collapsed,
          onClick: function onClick(event) {
            event.preventDefault();

            _this2.setState(function (previousState) {
              return {
                controlled: true,
                collapsed: !previousState.collapsed
              };
            });
          }
        }, index.createElement(Template, _extends({}, templateProps, {
          templateKey: "collapseButtonText",
          rootTagName: "span",
          data: {
            collapsed: this.state.collapsed
          }
        })))), index.createElement("div", {
          className: cssClasses.body,
          ref: function ref(node) {
            return _this2.bodyRef = node;
          }
        }), templateProps.templates.footer && index.createElement(Template, _extends({}, templateProps, {
          templateKey: "footer",
          rootProps: {
            className: cssClasses.footer
          },
          data: data
        })));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.controlled && nextProps.collapsed !== prevState.collapsed) {
          return {
            collapsed: nextProps.collapsed
          };
        }

        return null;
      }
    }]);

    return Panel;
  }(Component$1);

  var withUsage$K = createDocumentationMessageGenerator({
    name: 'panel'
  });
  var suit$n = component('Panel');

  var renderer$l = function renderer(_ref) {
    var containerNode = _ref.containerNode,
        bodyContainerNode = _ref.bodyContainerNode,
        cssClasses = _ref.cssClasses,
        templateProps = _ref.templateProps;
    return function (_ref2) {
      var options = _ref2.options,
          hidden = _ref2.hidden,
          collapsible = _ref2.collapsible,
          collapsed = _ref2.collapsed;
      render$1(index.createElement(Panel, {
        cssClasses: cssClasses,
        hidden: hidden,
        collapsible: collapsible,
        collapsed: collapsed,
        templateProps: templateProps,
        data: options,
        bodyElement: bodyContainerNode
      }), containerNode);
    };
  };
  /**
   * @typedef {Object} PanelWidgetCSSClasses
   * @property  {string|string[]} [root] CSS classes added to the root element of the widget.
   * @property  {string|string[]} [noRefinementRoot] CSS classes added to the root element of the widget when there's no refinements.
   * @property  {string|string[]} [collapsibleRoot] CSS classes added to the root element when collapsible.
   * @property  {string|string[]} [collapsedRoot] CSS classes added to the root element when collapsed.
   * @property  {string|string[]} [collapseButton] CSS classes added to the collapse button element.
   * @property  {string|string[]} [collapseIcon] CSS classes added to the collapse icon of the button.
   * @property  {string|string[]} [header] CSS class to add to the header.
   * @property  {string|string[]} [footer] CSS class to add to the SVG footer.
   */

  /**
   * @typedef {Object} PanelTemplates
   * @property {string|function} [header = ''] Template to use for the header.
   * @property {string|function} [footer = ''] Template to use for the footer.
   * @property {string|function} [collapseButtonText] Template to use for collapse button. It is given the collapsed state.
   */

  /**
   * @typedef {Object} PanelWidgetOptions
   * @property {function} [hidden] This function is called on each render to determine from the render options if the panel have to be hidden or not. If the value is `true` the CSS class `noRefinementRoot` is applied and the wrapper is hidden.
   * @property {PanelTemplates} [templates] Templates to use for the widgets.
   * @property {PanelWidgetCSSClasses} [cssClasses] CSS classes to add.
   */

  /**
   * The panel widget wraps other widgets in a consistent panel design. It also reacts, indicates and sets CSS classes when widgets are no more relevant for refining.
   *
   * @type {WidgetFactory}
   * @devNovel Panel
   * @category metadata
   * @param {PanelWidgetOptions} $0 Panel widget options.
   * @return {function} A new panel widget instance
   * @example
   * const refinementListWithPanel = instantsearch.widgets.panel({
   *   templates: {
   *     header: 'Brand',
   *   },
   * })(instantsearch.widgets.refinementList);
   *
   * search.addWidget(
   *   refinementListWithPanel({
   *     container: '#refinement-list',
   *     attribute: 'brand',
   *   })
   * );
   */


  function panel() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$templates = _ref3.templates,
        templates = _ref3$templates === void 0 ? {} : _ref3$templates,
        _ref3$hidden = _ref3.hidden,
        hidden = _ref3$hidden === void 0 ? function () {
      return false;
    } : _ref3$hidden,
        collapsed = _ref3.collapsed,
        _ref3$cssClasses = _ref3.cssClasses,
        userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;

    _warning(typeof hidden === 'function', "The `hidden` option in the \"panel\" widget expects a function returning a boolean (received \"".concat(_typeof(hidden), "\" type)."));
    _warning(typeof collapsed === 'undefined' || typeof collapsed === 'function', "The `collapsed` option in the \"panel\" widget expects a function returning a boolean (received \"".concat(_typeof(collapsed), "\" type)."));
    var bodyContainerNode = document.createElement('div');
    var collapsible = Boolean(collapsed);
    var collapsedFn = typeof collapsed === 'function' ? collapsed : function () {
      return false;
    };
    var cssClasses = {
      root: classnames(suit$n(), userCssClasses.root),
      noRefinementRoot: classnames(suit$n({
        modifierName: 'noRefinement'
      }), userCssClasses.noRefinementRoot),
      collapsibleRoot: classnames(suit$n({
        modifierName: 'collapsible'
      }), userCssClasses.collapsibleRoot),
      collapsedRoot: classnames(suit$n({
        modifierName: 'collapsed'
      }), userCssClasses.collapsedRoot),
      collapseButton: classnames(suit$n({
        descendantName: 'collapseButton'
      }), userCssClasses.collapseButton),
      collapseIcon: classnames(suit$n({
        descendantName: 'collapseIcon'
      }), userCssClasses.collapseIcon),
      body: classnames(suit$n({
        descendantName: 'body'
      }), userCssClasses.body),
      header: classnames(suit$n({
        descendantName: 'header'
      }), userCssClasses.header),
      footer: classnames(suit$n({
        descendantName: 'footer'
      }), userCssClasses.footer)
    };
    return function (widgetFactory) {
      return function () {
        var widgetOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var container = widgetOptions.container;

        if (!container) {
          throw new Error(withUsage$K("The `container` option is required in the widget within the panel."));
        }

        var defaultTemplates = {
          header: '',
          footer: '',
          collapseButtonText: function collapseButtonText(_ref4) {
            var isCollapsed = _ref4.collapsed;
            return "<svg\n          class=\"".concat(cssClasses.collapseIcon, "\"\n          width=\"1em\"\n          height=\"1em\"\n          viewBox=\"0 0 500 500\"\n        >\n        <path d=\"").concat(isCollapsed ? 'M100 250l300-150v300z' : 'M250 400l150-300H100z', "\" fill=\"currentColor\" />\n        </svg>");
          }
        };
        var templateProps = prepareTemplateProps({
          defaultTemplates: defaultTemplates,
          templates: templates
        });
        var renderPanel = renderer$l({
          containerNode: getContainerNode(container),
          bodyContainerNode: bodyContainerNode,
          cssClasses: cssClasses,
          templateProps: templateProps
        });
        renderPanel({
          options: {},
          hidden: true,
          collapsible: collapsible,
          collapsed: false
        });
        var widget = widgetFactory(_objectSpread({}, widgetOptions, {
          container: bodyContainerNode
        }));
        return _objectSpread({}, widget, {
          dispose: function dispose() {
            unmountComponentAtNode(getContainerNode(container));

            if (typeof widget.dispose === 'function') {
              var _widget$dispose;

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              (_widget$dispose = widget.dispose).call.apply(_widget$dispose, [this].concat(args));
            }
          },
          render: function render() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var options = args[0];
            renderPanel({
              options: options,
              hidden: Boolean(hidden(options)),
              collapsible: collapsible,
              collapsed: Boolean(collapsedFn(options))
            });

            if (typeof widget.render === 'function') {
              var _widget$render;

              (_widget$render = widget.render).call.apply(_widget$render, [this].concat(args));
            }
          }
        });
      };
    };
  }

  var VoiceSearch = function VoiceSearch(_ref) {
    var cssClasses = _ref.cssClasses,
        isBrowserSupported = _ref.isBrowserSupported,
        isListening = _ref.isListening,
        toggleListening = _ref.toggleListening,
        voiceListeningState = _ref.voiceListeningState,
        templates = _ref.templates;

    var handleClick = function handleClick(event) {
      event.currentTarget.blur();
      toggleListening();
    };

    var status = voiceListeningState.status,
        transcript = voiceListeningState.transcript,
        isSpeechFinal = voiceListeningState.isSpeechFinal,
        errorCode = voiceListeningState.errorCode;
    return index.createElement("div", {
      className: cssClasses.root
    }, index.createElement(Template, {
      templateKey: "buttonText",
      rootTagName: "button",
      rootProps: {
        className: cssClasses.button,
        type: 'button',
        title: "Search by voice".concat(isBrowserSupported ? '' : ' (not supported on this browser)'),
        onClick: handleClick,
        disabled: !isBrowserSupported
      },
      data: {
        status: status,
        errorCode: errorCode,
        isListening: isListening,
        transcript: transcript,
        isSpeechFinal: isSpeechFinal,
        isBrowserSupported: isBrowserSupported
      },
      templates: templates
    }), index.createElement(Template, {
      templateKey: "status",
      rootProps: {
        className: cssClasses.status
      },
      data: {
        status: status,
        errorCode: errorCode,
        isListening: isListening,
        transcript: transcript,
        isSpeechFinal: isSpeechFinal,
        isBrowserSupported: isBrowserSupported
      },
      templates: templates
    }));
  };

  var getButtonInnerElement = function getButtonInnerElement(status, errorCode, isListening) {
    if (status === 'error' && errorCode === 'not-allowed') {
      return "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>\n            <path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path>\n            <path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path>\n            <line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line>\n            <line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>";
    }

    return "<path\n            d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"\n            fill=\"".concat(isListening ? 'currentColor' : 'none', "\">\n          </path>\n          <path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path>\n          <line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line>\n          <line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>");
  };

  var defaultTemplates$f = {
    buttonText: function buttonText(_ref) {
      var status = _ref.status,
          errorCode = _ref.errorCode,
          isListening = _ref.isListening;
      return "<svg\n       xmlns=\"http://www.w3.org/2000/svg\"\n       width=\"16\"\n       height=\"16\"\n       viewBox=\"0 0 24 24\"\n       fill=\"none\"\n       stroke=\"currentColor\"\n       stroke-width=\"2\"\n       stroke-linecap=\"round\"\n       stroke-linejoin=\"round\"\n     >\n       ".concat(getButtonInnerElement(status, errorCode, isListening), "\n     </svg>");
    },
    status: "<p>{{transcript}}</p>"
  };

  var withUsage$L = createDocumentationMessageGenerator({
    name: 'voice-search'
  });
  var suit$o = component('VoiceSearch');

  var renderer$m = function renderer(_ref) {
    var isBrowserSupported = _ref.isBrowserSupported,
        isListening = _ref.isListening,
        toggleListening = _ref.toggleListening,
        voiceListeningState = _ref.voiceListeningState,
        widgetParams = _ref.widgetParams;
    var container = widgetParams.container,
        cssClasses = widgetParams.cssClasses,
        templates = widgetParams.templates;
    render$1(index.createElement(VoiceSearch, {
      cssClasses: cssClasses,
      templates: templates,
      isBrowserSupported: isBrowserSupported,
      isListening: isListening,
      toggleListening: toggleListening,
      voiceListeningState: voiceListeningState
    }), container);
  };

  var voiceSearch = function voiceSearch() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref2.container,
        _ref2$cssClasses = _ref2.cssClasses,
        userCssClasses = _ref2$cssClasses === void 0 ? {} : _ref2$cssClasses,
        templates = _ref2.templates,
        _ref2$searchAsYouSpea = _ref2.searchAsYouSpeak,
        searchAsYouSpeak = _ref2$searchAsYouSpea === void 0 ? false : _ref2$searchAsYouSpea;

    if (!container) {
      throw new Error(withUsage$L('The `container` option is required.'));
    }

    var containerNode = getContainerNode(container);
    var cssClasses = {
      root: classnames(suit$o(), userCssClasses.root),
      button: classnames(suit$o({
        descendantName: 'button'
      }), userCssClasses.button),
      status: classnames(suit$o({
        descendantName: 'status'
      }), userCssClasses.status)
    };
    var makeWidget = connectVoiceSearch(renderer$m, function () {
      return unmountComponentAtNode(containerNode);
    });
    return makeWidget({
      container: containerNode,
      cssClasses: cssClasses,
      templates: _objectSpread({}, defaultTemplates$f, templates),
      searchAsYouSpeak: searchAsYouSpeak
    });
  };

  var QueryRuleCustomData = function QueryRuleCustomData(_ref) {
    var cssClasses = _ref.cssClasses,
        templates = _ref.templates,
        items = _ref.items;
    return index.createElement(Template, {
      templateKey: "default",
      templates: templates,
      rootProps: {
        className: cssClasses.root
      },
      data: {
        items: items
      }
    });
  };

  var withUsage$M = createDocumentationMessageGenerator({
    name: 'query-rule-custom-data'
  });
  var suit$p = component('QueryRuleCustomData');

  var renderer$n = function renderer(_ref) {
    var items = _ref.items,
        widgetParams = _ref.widgetParams;
    var container = widgetParams.container,
        cssClasses = widgetParams.cssClasses,
        templates = widgetParams.templates;
    render$1(index.createElement(QueryRuleCustomData, {
      cssClasses: cssClasses,
      templates: templates,
      items: items
    }), container);
  };

  var queryRuleCustomData = function queryRuleCustomData() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        container = _ref2.container,
        _ref2$cssClasses = _ref2.cssClasses,
        userCssClasses = _ref2$cssClasses === void 0 ? {} : _ref2$cssClasses,
        _ref2$templates = _ref2.templates,
        userTemplates = _ref2$templates === void 0 ? {} : _ref2$templates,
        _ref2$transformItems = _ref2.transformItems,
        transformItems = _ref2$transformItems === void 0 ? function (items) {
      return items;
    } : _ref2$transformItems;

    if (!container) {
      throw new Error(withUsage$M('The `container` option is required.'));
    }

    var cssClasses = {
      root: classnames(suit$p(), userCssClasses.root)
    };
    var defaultTemplates = {
      default: function _default(_ref3) {
        var items = _ref3.items;
        return JSON.stringify(items, null, 2);
      }
    };

    var templates = _objectSpread({}, defaultTemplates, userTemplates);

    var containerNode = getContainerNode(container);
    var makeQueryRuleCustomData = connectQueryRules(renderer$n, function () {
      unmountComponentAtNode(containerNode);
    });
    return makeQueryRuleCustomData({
      container: containerNode,
      cssClasses: cssClasses,
      templates: templates,
      transformItems: transformItems
    });
  };

  var withUsage$N = createDocumentationMessageGenerator({
    name: 'query-rule-context'
  });

  var queryRuleContext = function queryRuleContext() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        trackedFilters = _ref.trackedFilters,
        transformRuleContexts = _ref.transformRuleContexts;

    if (!trackedFilters) {
      throw new Error(withUsage$N('The `trackedFilters` option is required.'));
    }

    return connectQueryRules(noop)({
      trackedFilters: trackedFilters,
      transformRuleContexts: transformRuleContexts
    });
  };



  var widgets = /*#__PURE__*/Object.freeze({
    clearRefinements: clearRefinements$1,
    configure: configure,
    currentRefinements: currentRefinements,
    geoSearch: geoSearch,
    hierarchicalMenu: hierarchicalMenu,
    hits: hits,
    hitsPerPage: hitsPerPage,
    infiniteHits: infiniteHits,
    menu: menu,
    refinementList: refinementList,
    numericMenu: numericMenu,
    pagination: pagination,
    rangeInput: rangeInput,
    searchBox: searchBox,
    rangeSlider: rangeSlider,
    sortBy: sortBy,
    ratingMenu: ratingMenu,
    stats: stats,
    toggleRefinement: toggleRefinement,
    analytics: analytics,
    breadcrumb: breadcrumb,
    menuSelect: menuSelect,
    poweredBy: poweredBy,
    panel: panel,
    voiceSearch: voiceSearch,
    queryRuleCustomData: queryRuleCustomData,
    queryRuleContext: queryRuleContext
  });



  var routers = /*#__PURE__*/Object.freeze({
    history: historyRouter
  });



  var stateMappings = /*#__PURE__*/Object.freeze({
    simple: simpleMapping
  });

  /** @module module:instantsearch */
  /**
   * @external SearchParameters
   * @see https://www.algolia.com/doc/api-reference/search-api-parameters/
   */

  /**
   * @external InstantSearch
   * @see /instantsearch.html
   */

  /**
   * @typedef {Object|boolean} RoutingOptions
   * @property {Router} [router=HistoryRouter()] The router is the part that will save the UI State.
   * By default, it uses an instance of the `HistoryRouter` with the default parameters.
   * @property {StateMapping} [stateMapping=SimpleStateMapping()] This object transforms the UI state into
   * the object that willl be saved by the router.
   */

  /**
   * The state mapping is a way to customize the structure before sending it to the router. It can transform
   * and filter out the properties. To work correctly, for any state ui S, the following should be valid:
   * `S = routeToState(stateToRoute(S))`.
   * @typedef {Object} StateMapping
   * @property {function} stateToRoute Transforms a UI state representation into a route object.
   * It receives an object that contains the UI state of all the widgets in the page. It should
   * return an object of any form as long as this form can be read by the `routeToState`.
   * @property {function} routeToState Transforms route object into a UI state representation.
   * It receives an object that contains the UI state stored by the router. The format is the output
   * of `stateToRoute`.
   */

  /**
   * The router is the part that saves and reads the object from the storage (most of the time the URL).
   * @typedef {Object} Router
   * @property {function} onUpdate Sets an event listener that is triggered when the storage is updated.
   * The function should accept a callback to trigger when the update happens. In the case of the history
   * / URL in a browser, the callback will be called by `onPopState`.
   * @property {function} read Reads the storage and gets a route object. It does not take parameters,
   * and should return an object.
   * @property {function} write Pushes a route object into a storage. Takes the UI state mapped by the state
   * mapping configured in the mapping.
   * @property {function} createURL Transforms a route object into a URL. It receives an object and should
   * return a string. It may return an empty string.
   * @property {function} dispose Cleans up any event listeners.
   */

  /**
   * @typedef {Object} SearchClient
   * @property {function} search Performs the requests in the hits.
   * @property {function} searchForFacetValues Performs the requests in the facet values.
   */

  /**
   * @typedef {Object} InstantSearchOptions
   * @property {string} indexName The name of the main index
   * @property {SearchClient} searchClient The search client to plug to InstantSearch.js
   *
   * Usage:
   * ```javascript
   * // Using the default Algolia search client
   * instantsearch({
   *   indexName: 'indexName',
   *   searchClient: algoliasearch('appId', 'apiKey')
   * });
   *
   * // Using a custom search client
   * instantsearch({
   *   indexName: 'indexName',
   *   searchClient: {
   *     search(requests) {
   *       // fetch response based on requests
   *       return response;
   *     },
   *     searchForFacetValues(requests) {
   *       // fetch response based on requests
   *       return response;
   *     }
   *   }
   * });
   * ```
   * @property {string} [numberLocale] The locale used to display numbers. This will be passed
   * to [`Number.prototype.toLocaleString()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
   * @property {function} [searchFunction] A hook that will be called each time a search needs to be done, with the
   * helper as a parameter. It's your responsibility to call `helper.search()`. This option allows you to avoid doing
   * searches at page load for example.
   * @property {object} [searchParameters] Additional parameters to pass to
   * the Algolia API ([see full documentation](https://community.algolia.com/algoliasearch-helper-js/reference.html#searchparameters)).
   * @property {number} [stalledSearchDelay=200] Time before a search is considered stalled.
   * @property {RoutingOptions} [routing] Router configuration used to save the UI State into the URL or
   * any client side persistence.
   */

  /**
   * InstantSearch is the main component of InstantSearch.js. This object
   * manages the widget and lets you add new ones.
   *
   * Two parameters are required to get you started with InstantSearch.js:
   *  - `indexName`: the main index that you will use for your new search UI
   *  - `searchClient`: the search client to plug to InstantSearch.js
   *
   * The [search client provided by Algolia](https://github.com/algolia/algoliasearch-client-javascript)
   * needs an `appId` and an `apiKey`. Those parameters can be found in your
   * [Algolia dashboard](https://www.algolia.com/api-keys).
   *
   * If you want to get up and running quickly with InstantSearch.js, have a
   * look at the [getting started](getting-started.html).
   * @function instantsearch
   * @param {InstantSearchOptions} options The options
   * @return {InstantSearch} the instantsearch instance
   */

  var instantsearch = function instantsearch(options) {
    return new InstantSearch(options);
  };

  instantsearch.routers = routers;
  instantsearch.stateMappings = stateMappings;
  instantsearch.connectors = connectors;
  instantsearch.widgets = widgets;
  instantsearch.version = version$1;
  instantsearch.highlight = highlight;
  instantsearch.snippet = snippet;
  instantsearch.insights = insights;

  return instantsearch;

}));
//# sourceMappingURL=instantsearch.development.js.map

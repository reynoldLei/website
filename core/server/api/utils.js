// # API Utils
// Shared helpers for working with the API
var Promise = require('bluebird'),
    _       = require('lodash'),
    errors  = require('../errors'),
    utils;

utils = {
    /**
     * ### Check Object
     * Check an object passed to the API is in the correct format
     *
     * @param {Object} object
     * @param {String} docName
     * @returns {Promise(Object)} resolves to the original object if it checks out
     */
    checkObject: function (object, docName) {
        if (_.isEmpty(object) || _.isEmpty(object[docName]) || _.isEmpty(object[docName][0])) {
            return errors.logAndRejectError(new errors.BadRequestError('No root key (\'' + docName + '\') provided.'));
        }

        // convert author property to author_id to match the name in the database
        // TODO: rename object in database
        if (docName === 'posts') {
            if (object.posts[0].hasOwnProperty('author')) {
                object.posts[0].author_id = object.posts[0].author;
                delete object.posts[0].author;
            }
        }
        return Promise.resolve(object);
    }
};

module.exports = utils;

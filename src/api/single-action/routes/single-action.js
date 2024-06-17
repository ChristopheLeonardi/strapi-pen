'use strict';

/**
 * single-action router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-action.single-action');

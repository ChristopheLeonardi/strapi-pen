'use strict';

/**
 * single-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-action.single-action');

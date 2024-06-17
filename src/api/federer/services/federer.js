'use strict';

/**
 * federer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::federer.federer');

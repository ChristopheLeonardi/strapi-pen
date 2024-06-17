'use strict';

/**
 * single-action controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::single-action.single-action');

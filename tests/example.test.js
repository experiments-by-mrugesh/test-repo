/**
 * Example tests for git-wt-test-repo
 */

const assert = require('assert');
const { config } = require('../src/index');

// Test config defaults
assert(config.apiUrl, 'apiUrl should be defined');
assert(typeof config.debug === 'boolean', 'debug should be boolean');

console.log('All tests passed!');

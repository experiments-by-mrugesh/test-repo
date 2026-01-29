/**
 * gitwt-test-repo
 * Test repository for gitwt development
 */

const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  debug: process.env.DEBUG === 'true',
};

function main() {
  console.log('gitwt-test-repo started');
  console.log('Config:', config);
}

main();

module.exports = { config, main };

/**
 * git-wt-test-repo
 * Test repository for git-wt development
 */

const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  debug: process.env.DEBUG === 'true',
};

function main() {
  console.log('git-wt-test-repo started');
  console.log('Config:', config);
}

main();

module.exports = { config, main };

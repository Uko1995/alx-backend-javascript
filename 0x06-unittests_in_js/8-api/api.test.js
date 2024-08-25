/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
// Import necessary modules
const request = require('request'); // Module for making HTTP requests
const { expect } = require('chai'); // Assertion library for testing

// Describe the integration tests
describe('integration Testing', () => {
  // Describe the GET request to the root URL ("/")
  describe('get /', () => {
    // Test case: expects status code 200 and body "Welcome to the payment system"
    it('code: 200 | Body: Welcome to the payment system', (done) => {
      // Define request options
      const options = {
        url: 'http://localhost:7865', // URL to make the request to
        method: 'GET', // HTTP method to use (GET)
      };

      // Make the HTTP request
      request(options, (error, response, body) => {
        // Check if there's an error and handle it
        if (error) {
          done(error); // Call done with error if present
          return; // Exit the function
        }

        // Assertion: expects status code to be 200
        expect(response.statusCode).to.equal(200);

        // Assertion: expects body to be "Welcome to the payment system"
        expect(body).to.equal('Welcome to the payment system');

        done(); // Signal completion of the test
      });
    });
  });
});

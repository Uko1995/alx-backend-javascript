/* eslint-disable jest/expect-expect */
/* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865'; // Define base URL

describe('Integration Testing', () => {
  // Reusable function to test an endpoint
  function testEndpoint(path, expectedStatusCode, expectedBody, done) {
    const options = {
      url: baseUrl + path, // Construct full URL
      method: 'GET',
    };

    // Make a request to the endpoint
    request(options, (error, response, body) => {
      // Assert the response status code
      expect(response.statusCode).to.equal(expectedStatusCode);
      // Assert the response body
      expect(body).to.equal(expectedBody);
      done(); // Callback to indicate that the test is complete
    });
  }

  // Tests for the root endpoint '/'
  describe('get /', () => {
    it('responds with 200 and correct message', (done) => {
      // Call the testEndpoint function with appropriate parameters
      testEndpoint('/', 200, 'Welcome to the payment system', done);
    });
  });

  // Tests for the '/cart/:id' endpoint
  describe('get /cart/:id', () => {
    it('responds with 200 and correct message for valid IDs', (done) => {
      // Call the testEndpoint function with appropriate parameters
      testEndpoint('/cart/12', 200, 'Payment methods for cart 12', done);
    });

    it('responds with 404 for invalid IDs', (done) => {
      // Call the testEndpoint function with appropriate parameters
      testEndpoint('/cart/a12', 404, '', done);
    });
  });

  // Tests for the '/cart/' endpoint
  describe('get /cart/', () => {
    it('responds with 404 for empty cart path', (done) => {
      // Call the testEndpoint function with appropriate parameters
      testEndpoint('/cart/', 404, '', done);
    });
  });
});

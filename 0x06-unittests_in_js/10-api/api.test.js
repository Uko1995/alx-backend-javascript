/* eslint-disable jest/expect-expect */
/* eslint-disable jest/lowercase-name */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

// Define the base URL of the API server
const baseUrl = 'http://localhost:7865';

// Describe a group of tests for API endpoints
describe('API Integration Tests', () => {
  // Test the '/' endpoint
  describe('GET /', () => {
    it('should return status code 200 and welcome message', (done) => {
      // Send a GET request to the base URL
      request(baseUrl, (error, response, body) => {
        // Expect the status code to be 200
        expect(response.statusCode).to.equal(200);
        // Expect the response body to contain the welcome message
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Test the '/cart/:id' endpoint
  describe('GET /cart/:id', () => {
    it('should return payment methods for the specified cart', (done) => {
      const cartId = 123; // Sample cart ID
      // Send a GET request to the '/cart/:id' endpoint with a sample cart ID
      request(`${baseUrl}/cart/${cartId}`, (error, response, body) => {
        // Expect the status code to be 200
        expect(response.statusCode).to.equal(200);
        // Expect the response body to contain the payment methods for the specified cart
        expect(body).to.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });
  });

  // Test the '/available_payments' endpoint
  describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
      // Send a GET request to the '/available_payments' endpoint
      request(`${baseUrl}/available_payments`, (error, response, body) => {
        // Expect the status code to be 200
        expect(response.statusCode).to.equal(200);
        // Expect the response body to contain JSON data with available payment methods
        const responseData = JSON.parse(body);
        expect(responseData).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  // Test the '/login' endpoint
  describe('POST /login', () => {
    it('should return a welcome message with the username', (done) => {
      const username = 'john_doe'; // Sample username
      const requestData = { userName: username };
      // Send a POST request to the '/login' endpoint with sample username in the request body
      request.post(`${baseUrl}/login`, { json: requestData }, (error, response, body) => {
        // Expect the status code to be 200
        expect(response.statusCode).to.equal(200);
        // Expect the response body to contain a welcome message with the username
        expect(body).to.equal(`Welcome ${username}`);
        done();
      });
    });
  });
});

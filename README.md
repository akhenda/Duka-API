
[![Build Status](https://travis-ci.org/akhenda/Duka-API.svg?branch=master)](https://travis-ci.org/akhenda/Duka-API)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/akhenda/Duka-API/blob/master/LICENSE)

# Duka
Duka is a RESTful products list API built with `Express` on `NodeJS`.

## Installation

Clone this repo:

```
$ git clone https://github.com/akhenda/Duka-API.git
```

Navigate to the `Duka-API` directory:

```
$ cd Duka-API
```

Install the required dependencies:

```
$ npm install
```

Set the required environment keys

```
$ export NODE_ENV="development"
$ export TEST_DB='mongodb://example.com...'
```
`NODE_ENV` can either be "development", "testing" or "production". This is important and should be used according to the context. The `development` environment bypasses authentication to allow rapid development of the project. It also changes the database to the development database. The `testing` environment is simply a staging environment that changes the active database to a testing database. Finally, the `production` environment turns debugging off and switches to the production database.

## Usage

Run ```npm start```.

To test the API, use an API Client such as [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for Google Chrome to test the endpoints.

### API Endpoints 


| Actions        | Description           | Requires Authentication |
| ------------- |:-------------:| -------------:|
| GET api/v1/products/      | List all products | False |
| GET api/v1/products/`<id>`     | Get a single product | False |

## Sample Requests

**Show a product:**
To show a single product, hit the `/api/v1/products/<id>` GET endpoint.

![Single Product](/screenshots/get_product.png?raw=true "Get a Product")

**Show a list of products:**  
To list all products, hit the `/api/v1/products/` GET endpoint.

![Products Collection](/screenshots/get_products.png?raw=true "Get Products")

## Testing

Run tests using one of the following commands:

```
$ npm test

> duka-api@0.0.1 test /Users/hendaz/Projects/Others/Sokowatch/challenge/server/duka
> export NODE_PATH=./ && nyc --reporter=html mocha --require __tests__/setup.js --compilers js:babel-register --recursive ./__tests__ --timeout 120000 --exit


  Product Model
    ✓ should be retrieved after saved (43ms)

  Products Integration Tests
GET /api/v1/products/5aa19e197eb2d8affb42f448 200 8.778 ms - 370
    ✓ GET /products/:id gives an object of the queried product, the one we will add here

  Index Endpoints
GET /api/v1/ 200 0.484 ms - 90
    ✓ GET /api/v1/ returns a welcome message
POST /api/v1/ 200 0.658 ms - 42
    ✓ POST /api/v1/ returns a message

  Products Endpoints
GET /api/v1/products/seed/ 201 177.959 ms - 44
    ✓ GET /api/v1/products/seed seeds the DB with products (198ms)
GET /api/v1/products?page=4 200 25.400 ms - -
    ✓ GET /api/v1/products/ returns a list of products
GET /api/v1/products/2 404 1.581 ms - 41
    ✓ GET /api/v1/products/2 returns a 404 error


  7 passing (3s)

```


## Built With...
* [Node](#)
* [Express](#)

## License

### The ISC License

Copyright (c) 2018 [Joseph Akhenda](https://github.com/akhenda)

> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
> OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.



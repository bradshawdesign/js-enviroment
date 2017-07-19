//This file isnt transpiled, so must use CommonJS and ES5
//Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't use
require.extensions['.css'] = function(){};

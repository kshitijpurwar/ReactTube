(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// youTube API Key
var YOUTUBE_API_KEY = 'AIzaSyAOnseq7l_Sgp6dCuEIr8lqquxydixEB0k';

// Create new component, which produces some HTML
// const is es6 feature and can't be reassigned while the function contains JSX
var App = function App() {
  return React.createElement(
    'div',
    null,
    ' Hi World ! '
  );
};

// Take the component and render it onto the DOM i.e. on the HTML page
var root = document.querySelector('.root');
ReactDOM.render(React.createElement(App, null), root);

},{}]},{},[1]);

/**
 * @ngdoc function
 * @name AQ.controller:404Controller
 * @requires factories/AQ.factory:state
 *
 * @description
 * Controller for the 404 state.
 */
AQ.controller('404Controller', function ($window, state) {
  'use strict';

  $window.navigator.notification.alert(
    'The content you\'re trying to access could not be found.',
    undefined,
    'Not found',
    'OK'
  );

  // Automatically redirect to the previous state
  state.redirect();
});

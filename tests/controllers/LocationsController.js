describe('Controller: Locations', function () {
  'use strict';

  var scope;
  var controller;
  var dataFactory, stateFactory, apiFactory;

  beforeEach(module('AQ'));

  beforeEach(inject(function ($rootScope, $controller, data, state, api) {
    scope = $rootScope.$new();
    dataFactory = data;
    stateFactory = state;
    apiFactory = api;

    spyOn(stateFactory, 'setTitle').and.callFake(function () {
      return;
    });
    spyOn(apiFactory, 'getLocations').and.callFake(function () {
      return;
    });

    controller = $controller;
  }));

  it('should set title', function () {
    controller('LocationsController', {
      $scope: scope
    });

    scope.$digest();
    expect(stateFactory.setTitle).toHaveBeenCalledWith('Locations');
  });

  it('should get locations when they are not set yet', function () {
    dataFactory.locations = null;

    controller('LocationsController', {
      $scope: scope
    });

    scope.$digest();
    expect(apiFactory.getLocations).toHaveBeenCalled();
  });

  it('should not get locations when they are already set', function () {
    dataFactory.locations = _.cloneDeep(locationsMock);

    controller('LocationsController', {
      $scope: scope
    });

    scope.$digest();
    expect(apiFactory.getLocations).not.toHaveBeenCalled();
  });
});

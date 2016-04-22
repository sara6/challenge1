describe('bbcIplayerSearch', function() {
  beforeEach(module('bbcIplayerSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('bbcIplayerSearch');
  }));

  it('initialises with an empty program list', function() {
  expect(ctrl.searchResult).toBeUndefined();
  });

});

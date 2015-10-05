'use strict';

describe('myApp.view3 module', function() {

  beforeEach(module('myApp.contact'));

  describe('contact controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var contactCtrl = $controller('contactCtrl');
      expect(contactCtrl).toBeDefined();
    }));

  });
});
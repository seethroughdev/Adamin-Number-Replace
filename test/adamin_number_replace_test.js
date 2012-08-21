/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('$.fn.adaminNumReplace()', {
    setup: function() {
      this.simpleString = $('.simple-string');
      this.demoString = $('.demo-string');
      this.spaceString = $('.space-string');
      this.dirtyString = $('.dirty-string');
      this.completeString = $('.complete-string');
    },
    teardown: function() {
      //teardown for module name
    }
  });

  test('is available on the jQuery object', 1, function() {
    ok($.fn.adaminNumReplace);
  });

  test('should be chainable', 1, function() {
    strictEqual( this.simpleString.adaminNumReplace(), this.simpleString, 'It returns the jQuery Object' );
  });

  test('should insert an image tag inside the div', 1, function() {
      this.simpleString.adaminNumReplace();
      // known jquery bug, forces > before img
      ok(this.simpleString.find('> img').length, 'It should add an image tag.');
  });

  test('should replace numbers with images', 1, function() {
    var simple = this.simpleString.adaminNumReplace();
    strictEqual( simple.find('> img:first').attr('src'), '../images/small/2.png', 'Equals the first source image.' );
  });

  test('should add the number to a class for verification', 1, function() {
    this.demoString.adaminNumReplace();
    ok(this.demoString.hasClass('24,995'));
  });

  test('has set custom defaults', 1, function() {
    ok($.fn.adaminNumReplace.defaults, 'Allows user to set custom defaults');
  });

  test('adds appropriate styles to image', 1, function() {
    this.simpleString.adaminNumReplace();
    strictEqual(this.simpleString.find('> img').css('margin'), '0px', 'margin is equal to default');
  });

  test('allows the user to override defaults', 3, function() {
    var simple = this.simpleString.adaminNumReplace({
      path:     '../images/large/',
      prefix:   'yellow-',
      suffix:   '.jpg',
      margin:   '0px -8px',
      imgClass: 'image-test-class'
    });
    strictEqual(simple.find('> img:first').attr('src'), '../images/large/yellow-2.jpg', 'Equals the first source image.');
    strictEqual(this.simpleString.find('> img:first').css('margin'), '0px -8px', 'margin is overridden');
    ok(this.simpleString.find('> img:first').hasClass('image-test-class'));

  });



 
  

}(jQuery));

var myApp = angular.module('myModule', []);
myApp.controller('mainController', function($scope, $interval) {
  $scope.objectBank = [];
  words = ["hungry", "nap", "outside", "cartoons", "I", "mommy", "daddy", "no", "more", "candy", "doggy", "run", "want", "me", "goldfish", "play", "happy", "why", "do", "you", "spongebob"];
  styles = ["redd", "bluee", "greenn", "cyann", "magentaa", "yelloww"];
  phrases = [];
  makeAPhrase = function() {
    for (var i = 0; i <= 3; i++) {
      phrases.push(words[mathRand(0,20)]);
    };
  };
  mathRand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  wordFunction = function() {
    var newEle = {};
    newEle.word = words[mathRand(0,20)];
    newEle.styling = "";
    $scope.objectBank.push(newEle);
  };
  prettyWordFunction = function() {
    var newEle = {};
    newEle.word = words[mathRand(0,20)];
    newEle.styling = styles[mathRand(0,5)];
    $scope.objectBank.push(newEle);
  };
  phraseFunction = function() {
    var newEle = {};
    makeAPhrase();
    newEle.word = phrases.toString().replace(/\,/g, " ");
    newEle.styling = "";
    $scope.objectBank.push(newEle);
    phrases = [];
  };
  prettyPhraseFunction = function() {
    var newEle = {};
    makeAPhrase();
    newEle.word = phrases.toString().replace(/\,/g, " ");
    newEle.styling = styles[mathRand(0,5)];
    $scope.objectBank.push(newEle);
    phrases = [];
  };
  $scope.talk = function() {
    function rango() {
      var funks = [wordFunction(), prettyWordFunction()];
      return funks[mathRand(1,2)];
    };
    $interval(rango, 100, 50);
  };
});

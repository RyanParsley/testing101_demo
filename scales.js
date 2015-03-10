'use strict';

var notesFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

var noteFinder = function (root, degree){
  var rootIndex = notesFlat.indexOf(root);
  var needsWrap = rootIndex < (12 - degree);
  var noteIndex = needsWrap ? rootIndex + degree : rootIndex + (degree - 12);

  return notesFlat[noteIndex];

};

exports.findFifth = function (root) {

  return noteFinder(root, 7);

};

exports.findMinorThird = function (root) {

  return noteFinder(root, 4);

};

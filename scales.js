'use strict';

var notesFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

exports.findFifth = function (root) {

  var rootIndex = notesFlat.indexOf(root);
  var needsWrap = rootIndex < 5;
  var fifthIndex = needsWrap ? rootIndex + 7 : rootIndex + 7 - 12;

  return notesFlat[fifthIndex];

};

exports.findMinorThird = function (root) {

  var rootIndex = notesFlat.indexOf(root);
  var needsWrap = rootIndex < 8;
  var thirdIndex = needsWrap ? rootIndex + 4 : rootIndex + 4 - 12;

  return notesFlat[thirdIndex];

};

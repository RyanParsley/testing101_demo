'use strict';

var notesFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

exports.findDominant = function (root) {

  var rootIndex = notesFlat.indexOf(root);
  var needsWrap = rootIndex < 5;
  var dominantIndex = needsWrap ? rootIndex + 7 : rootIndex + 7 - 12;

  return notesFlat[dominantIndex];

};

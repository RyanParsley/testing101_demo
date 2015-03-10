var scales = require('./scales');

var args = process.argv.slice(2);

if (args[0]){
  console.log( args[0] + ' minor consists of: ' + args[0] + ', ' + scales.findMinorThird(args[0]) + ' and ' + scales.findFifth(args[0]));
  console.log( args[0] + ' major consists of: ' + args[0] + ', ' + scales.findMajorThird(args[0]) + ' and ' + scales.findFifth(args[0]));
} else {
  console.log('Please enter a note like so:');
  console.log('node chordFinder.js A');
}

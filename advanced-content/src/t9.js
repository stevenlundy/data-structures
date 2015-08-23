var tree = PrefixTree(englishWords);
// console.log(_.map('telecommunications'.split(''), function(ch){
//   return tree.numFromChar(ch);
// }).join(''));

$('#t9Input').on('input', function() {
  debugger;
  var numWords = $('#t9Input').val().split('0');
  var output = _.map(numWords, function(numWord) {
    return tree.getSuggestions(numWord)[0];

  }).join(' ');
  $('#output').html(output);
});
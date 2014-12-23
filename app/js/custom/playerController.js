appModule.factory('sendDefinitionRequest', ['$http', function (http) {

  var returnDefinitionUrl = function (query) {
    console.log(query);
    var definitionUrl = 'http://api.wordnik.com:80/v4/word.json/' + query + '/definitions/';
    console.log(definitionUrl);
    return definitionUrl;
  };

  var requestFactory = function (query) {
    return http({
      url: returnDefinitionUrl(query),
      method: 'GET',
      params: {
        limit: 6,
        includeRelated: 'true',
        sourceDictionaries: 'all',
        api_key: '724583fdf72680c36d0010ad78b03b1c4f3ea7b27c651f094'
      }
    });
  };
  return requestFactory;
}]);
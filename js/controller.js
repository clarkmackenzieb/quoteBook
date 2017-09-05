angular.module("app").controller("quoteCtrl", function($scope, quoteService){

$scope.quotes = quoteService.getQuotes();


$scope.deleteMe = function(text){
    quoteService.removeData(text);
};

$scope.addQuote = function(){
    var newQuote = {text:$scope.newQuoteText, author:$scope.newQuoteAuthor,};

    if(quoteService.addData(newQuote)){
        $scope.newQuoteText = "";
        $scope.newQuoteAuthor = "";
    }
}

})
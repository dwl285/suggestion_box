app.controller('HomeController', [
	'$scope',
	'suggestions',

	function($scope, suggestions) {
	$scope.posts = suggestions.posts;

  // function to add a new suggestion
	$scope.addSuggestion = function() {
    //if input empty, don't submit
    if(!$scope.title || $scope.title === "") {
      return;
    }
		// assign title in input box to a new suggestion variable
    var newSuggestion = {
			title: $scope.title,
			upvotes: 0,
			comments: []
		};
    // push the new suggestion into the posts JSON
		$scope.posts.push(newSuggestion);
    // clear the title 
    $scope.title = '';
	}
  // function to up vote a suggestions
  $scope.upVote = function(post) {
    post.upvotes += 1;
  }
}]);
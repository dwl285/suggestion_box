app.controller('SuggestionController', [
	'$scope',
	'suggestions',
  '$routeParams',

	function($scope, suggestions, $routeParams) {
    // get the current post from suggestions
    $scope.post = suggestions.posts[$routeParams.id];

    // add a comment to the posts comments list
    $scope.addComment = function() {
      $scope.post.comments.push({
        body: $scope.comment,
        upvotes: 0
      });
    }

    // upvote a comment
    $scope.upVoteComment = function(comment) {
      comment.upvotes += 1;
    }
}]);
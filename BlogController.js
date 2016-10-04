var myApp = angular.module('collaborationApp', []);

myApp.controller('blogcontroller', function($scope){

	$scope.blogs = [
					{
						'id':'001',
						'title':'welcome',
						'description':'welcome to my Blog!!'
					},
					{
						'id':'002',
						'title':'Hello angular',
						'description':'It is developed using angular'
					}
	];

	$scope.addRow = function(){
		$scope.blogs.push ( { 'id':$scope.b_id, 'title':$scope.b_title, 'description':$scope.b_description });
		$scope.b_id = '';
		$scope.b_title = '';
		$scope.b_description = '';
	};



	$scope.removeRow = function(id) {
		console.log("removing the blog" + id);
		var index = -1;
		var bloglist = eval( $scope.blogs);
		for (var i = 0; i < bloglist.length; i++) 
		{
			if (bloglist[i].id === id) 
			{
				index = i;
				break;
			}
		}
		if (index == -1) {
			alert ("something went wrong");
		}
		$scope.blogs.splice(index,1);

	};
	$scope.updateRow = function(id){
		var index = -1;
		$scope.b_id = "";
		$scope.b_title ="";
		$scope.b_description="";
		var list = eval($scope.blogs);
		for (var i = 0; i < list.length; i++) 
		{
			if (list[i].id ==id) 
			{
				index = i;
				$scope.b_id=list[i].id;
				$scope.b_title=list[i].title;
				$scope.b_description=list[i].description;
				

			}
		}
		$scope.blogs.splice(index,1);
	};
});
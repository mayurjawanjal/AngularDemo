


var app = angular.module("my-app",[]);

app.controller("my-ctrl",($scope , $http)=>{
    
    $scope.employeeList=[];
    //var id=0;
    //let data=localStorage.getItem("Capcom");

    /*
    if(data){
        $scope.employeeList=JSON.parse(data);
        id = parseInt($scope.employeeList[$scope.employeeList.length-1].__id);
    }
    */
 

    $scope.addEmployee=()=>{
        // var temp;
        //temp=angular.copy($scope.employee);

        //$scope.employeeList.push(temp);
        $http.post( "http://localhost:4000/AddData" , angular.toJson($scope.employee))
            .then(function(data){
                $scope.employee={};
                console.log(data);
                //$scope.employeeList.push(data);
                console.log('Employee added');
            },function(data){
                console.log('error '+ data);
            });
        //localStorage.setItem("Capcom",angular.toJson($scope.employeeList));
        
    };
    
  /*  $scope.deleteEmployee=function(x){
        for(let i=0;i<$scope.employeeList.length;i++){
            if(x.__id===$scope.employeeList[i].__id)
                $scope.employeeList.splice(i,1);
        }
        
        if($scope.employeeList.length===0)
            localStorage.removeItem("Capcom");
        else
            localStorage.getItem("Capcom",angular.toJson($scope.employeeList));
    };

    */
});






var app = angular.module("my-app",[]);

app.controller("my-ctrl",($scope)=>{
    
    $scope.employeeList=[];
    var id=0;
    let data=localStorage.getItem("Capcom");

    if(data){
        $scope.employeeList=JSON.parse(data);
        id = parseInt($scope.employeeList[$scope.employeeList.length-1].__id);
    }
 

    $scope.addEmployee=()=>{
        var temp;
        temp=angular.copy($scope.employee);
        temp.__id=id+1;

        $scope.employeeList.push(temp);

        localStorage.setItem("Capcom",angular.toJson($scope.employeeList));
        $scope.employee.name="";
        $scope.employee.dofb="";
        $scope.employee.number="";
        $scope.employee.mailID="";
        $scope.employee.joiningDate="";
        $scope.employee.department="";
        $scope.employee.title="";
        $scope.employee.address="";
        $scope.employee.pincode=""; 
        $scope.employee.salary="";
    };
    
    $scope.deleteEmployee=function(x){
        for(let i=0;i<$scope.employeeList.length;i++){
            if(x.__id===$scope.employeeList[i].__id)
                $scope.employeeList.splice(i,1);
        }
        
        if($scope.employeeList.length===0)
            localStorage.removeItem("Capcom");
        else
            localStorage.getItem("Capcom",angular.toJson($scope.employeeList));
    };

});
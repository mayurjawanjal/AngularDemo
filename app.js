


var app = angular.module("my-app",[]);

app.controller("my-ctrl",($scope)=>{
    $scope.title="Let's Travel!!";
    var value=[];
    let data=localStorage.getItem("Country");
    if(data){
        value=JSON.parse(data);
    }
    $scope.countryList=value;
    $scope.addCountry=()=>{
        if($scope.countryName){
        value.push($scope.countryName);
        localStorage.setItem("Country",JSON.stringify(value));
        $scope.countryName="";
        $scope.countryList=value;
        }
    };
});



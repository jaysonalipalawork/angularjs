var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.convertchange =  function(){
        $scope.convertopt = $scope.convertfrom;
        if($scope.convertfrom == "Decimal"){
            $scope.convertto = "to Binary, Hexa, Octal";
            $scope.toa = "To Binary: ";
            $scope.tob = "To Hexa: ";
            $scope.toc = "To Octal: ";
        }
        else if($scope.convertfrom == "Binary"){
            $scope.convertto = "to Decimal, Hexa, Octal";
            $scope.toa = "To Decimal: ";
            $scope.tob = "To Hexa: ";
            $scope.toc = "To Octal: ";
        }
        else if($scope.convertfrom == "Hexa"){
            $scope.convertto = "to Decimal, Binary, Octal";
            $scope.toa = "To Decimal: ";
            $scope.tob = "To Binary: ";
            $scope.toc = "To Octal: ";
        }
        else if($scope.convertfrom == "Octal"){
            $scope.convertto = "to Decimal, Decimal, Hexa";
            $scope.toa = "To Decimal: ";
            $scope.tob = "To Binary: ";
            $scope.toc = "To Hexa: ";
        }
        $scope.inputvalue = "";
        $scope.to1 = "";
        $scope.to2 = "";
        $scope.to3 = "";
    }

    $scope.compute = function() {
        if($scope.convertfrom == "Decimal")
        {
            if(/^[1-9]+[0-9]*$/.test($scope.inputvalue)){ 
                //to binary
                $scope.to1 = (parseInt($scope.inputvalue)).toString(2);
                //to hexadecimal
                $scope.to2 =  (parseInt($scope.inputvalue)).toString(16).toUpperCase();
                //to octal
                $scope.to3 = (parseInt($scope.inputvalue)).toString(8);
            }
            else
                alert("Invalid");
        }
        else if ($scope.convertfrom == "Binary") {
            if(/\b[01]+\b/.test($scope.inputvalue)){
                //to decimal
                $scope.to1 = parseInt($scope.inputvalue,2);
                //to hexadecimal
                $scope.to2 =  (parseInt($scope.inputvalue,2)).toString(16).toUpperCase();
                //to octal
                $scope.to3 = (parseInt($scope.inputvalue,2)).toString(8);
            }
            else
                alert("Invalid");
        }
        else if ($scope.convertfrom == "Hexa") {
            if(/[0-9A-Fa-f]/gi.test($scope.inputvalue)){
                //to decimal
                $scope.to1 = parseInt($scope.inputvalue,16);
                //to binary
                $scope.to2 =  (parseInt($scope.inputvalue,16)).toString(2).toUpperCase();
                //to octal
                $scope.to3 = (parseInt($scope.inputvalue,16)).toString(8);
            }
            else
                alert("Invalid");
        }
        else if ($scope.convertfrom == "Octal") {
            if(/^[1-7]+[0-7]*$/.test($scope.inputvalue)){
                //to decimal
                $scope.to1 = parseInt($scope.inputvalue,8);
                //to binary
                $scope.to2 =  (parseInt($scope.inputvalue,8)).toString(2).toUpperCase();
                //to Hexa
                $scope.to3 = (parseInt($scope.inputvalue,8)).toString(16).toUpperCase();
            }
            else
                alert("Invalid");
        }
        else
            alert("Select a input type");
    }
});
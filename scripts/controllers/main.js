angular.module("aplicacaoRun", []).controller("controleUsuarios", function ($scope, $http){
    $scope.titulo="Angularjs sendo executado";
   
    $scope.data = {};
    $scope.enviodedados = function(){
    $http({
        url:'http://localhost:3000/listagemUsuarios',
        method: 'POST',
        data: $scope.data,
        'Content-Type': 'application/json'
    }).then(function(){

   
    })
}
    $http.get('http://localhost:3000/listagemUsuarios').
    then(function(res){
        (console.log(res))
        $scope.listagemUsuarios = res.data
    })

    
    $scope.alterando = function(lista){
        $scope.alterando = lista;
        console.log($scope.alterando)
    }

    $scope.editardados = function(){
        $http({
            url: 'http://localhost:3000/listagemUsuarios' + $scope.alterando.id,
            data: $scope.alterando,
            method: "PATCH"

        }).then(function(tratandodados){
            console.log("success")
            console.log(tratandodados)
        })
    }

});
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

});
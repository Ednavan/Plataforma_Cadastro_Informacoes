angular.module("aplicacaoRun", []).controller("controleUsuarios", function ($scope, $http) {
    $scope.titulo = "Angularjs sendo executado";

    $scope.data = {

    };
    $scope.enviodedados = function () {
        $http({
            url: 'http://localhost:3000/listagemUsuarios',
            method: 'POST',
            data: $scope.data,


        }).then(function () {


        })
    }
    $http.get('http://localhost:3000/listagemUsuarios').
        then(function (res) {
            (console.log(res))
            $scope.listagemUsuarios = res.data
        })



    /**
     * 
     * @param {*} alterando responsável por fazer a edição 
     */
    $scope.alterando = function (lista) {
        $scope.verifica = lista;
        console.log('edit', $scope.verifica);
        // localStorage.setItem('test', JSON.stringify($scope.verifica))
      
    }

    $scope.deletandodados = function(lista){
        $scope.verifica = lista;
        console.log('edit', $scope.verifica);
    
    $scope.excluirDefinitivo = function (){
        $http({
            url:'http://localhost:3000/listagemUsuarios/' + $scope.verifica.id,
            method: 'DELETE',
            data: $scope.verifica

        }).then(function(){
            console.log("chegou aqui")
        })
      
    }}


    $.ajax({
        type: "get",
        url: "http://localhost:3000/cidadesquenasceu",
        data: { tipos: $("#ddlTipoTelefone").val() },
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            $scope.megaCity = data;
        }
    });

    $.ajax({
        type: "get",
        url: "http://localhost:3000/profissaoDePessoas",
        data: { tipos: $("#ddlTipoTelefone").val() },
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $scope.definindoProfiss = data;
        }
    });


});

// function validardataNascimento(data){
//     dataAtual = new Date();
//     data=new Date(data);

//     if(data < dataAtual){
//         console.log("Data válida");
//         return true;
//     }else{
//         console.log("Data Inválida");
//         return false;
//     }
// }

function validadata(){
    if('#inputIdade' < 1){
        window
    }
}
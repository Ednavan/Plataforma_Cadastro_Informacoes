angular.module("aplicacaoRun", []).controller("controleUsuarios", function ($scope, $http) {
    $scope.titulo = "Angularjs sendo executado";

    $scope.data = {};
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


    $scope.alterando = function (lista) {
        $scope.verifica = lista;
        console.log('edit', $scope.verifica)

    }

    // $scope.finalizandoEdit = function () {
    //     alert("1");
    //     console.log('edit2', $scope.verifica)

    // }

    $scope.enviardados = function () {
        console.log('executando dentro da funcao enviardados', $scope.verifica)
        $http({
            url: "http://localhost:3000/listagemUsuarios" + $scope.verifica, //seleciona o dados atraves do id
            data: $scope.verifica, //envia os dados atraves do seu conjunto    
            method: "PATCH", //é mais importante é responsável pela ação do método

        }).then(function (tratamento) {
            console.log("SUCCESS");
            console.log(tratamento)


        }).catch(function () {
            console.log("chegou aqui");

        })

    }

});


$('.peso').keyup(function () {
    var v = this.value,
        integer = v.split('.')[0];

    v = v.replace(/\D/, "");
    v = v.replace(/^[0]+/, "");

    if (v.length <= 3 || !integer) {
        if (v.length === 1) v = '0.00' + v;
        if (v.length === 2) v = '0.0' + v;
        if (v.length === 3) v = '0.' + v;
    } else {
        v = v.replace(/^(\d{1,})(\d{3})$/, "$1.$2");
    }

    this.value = v;
});
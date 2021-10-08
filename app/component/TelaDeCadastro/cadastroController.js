angular.module("soVamu", ["ngRoute"])
    .controller("cadastroController", function ($scope, $http) {

        $scope.titulo = "Só Vamu Tech!";
        $scope.listaPessoas = [];

        // $scope.pessoa = {
        //     "nome":"",
        //     "idade":0,
        //     "profissao":"",
        //     "cidade":"",
        //     "peso": 0,
        //     "aniversario":""
        // }







        // CADASTRA A PESSOA NO FORMULÁRIO E ENVIA PARA O BANCO DE DADOS: 


        $scope.cadastra_pessoa = function (isValid) {
            console.log(isValid)
            if (isValid) {
                console.log("enviou")
                $http.post(
                    " http://localhost:3000/pessoa ",
                    JSON.stringify($scope.pessoa)
                ).then(function (response) {
                    $scope.listaPessoas.push(response.data);
                    window.location.replace('http://127.0.0.1:5500/app/component/TelaInicial/index.html')


                });
            } else {
                console.error("formulario incorreto")
            }


        };






    });






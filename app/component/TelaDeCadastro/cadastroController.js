angular.module("soVamu", ["ngRoute"])
    .controller("cadastroController", function ($scope, $http) {

        $scope.titulo = "Só Vamu Tech!";
        $scope.listaPessoas = [];

        //TELA DE CADASTRO//

        //PEGAR OBJETO CIDADES NO BANCO DE DADOS:
        $http.get("http://localhost:3000/cidade")
            .then(function (response) {
                console.log('retorno cidades', response)
                $scope.cidades = response.data;
            });

            

        //PEGAR OBJETO PROFISSAO NO BANCO DE DADOS:
        $http.get("http://localhost:3000/profissao")
        .then(function (response) {
            console.log('retorno profissoes', response)
            $scope.profissoes = response.data;
        });

        


        //  //DIRECIONAR PARA A TELA DE INICIAL:
        $scope.direcionaTelaInicial = function () {
            window.location.replace('http://127.0.0.1:5500/app/component/TelaInicial/index.html')
        };
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
                    $scope.direcionaTelaInicial();

                });
            } else {
                console.error("formulario incorreto")
            }

        };

    });





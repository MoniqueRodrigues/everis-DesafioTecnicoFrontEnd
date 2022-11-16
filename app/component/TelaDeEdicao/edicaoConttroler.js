angular.module("soVamu", ["ngRoute"])
    .controller("edicaoController", function ($scope, $http, $rootScope) {
        $scope.titulo = "Só Vamu Tech!";


        $scope.pessoa = JSON.parse(localStorage.getItem("pessoa"));

        // CONVERTER A STRING PARA DATE:
        $scope.pessoa.aniversario = new Date($scope.pessoa.aniversario);


        console.log("pessoa " + $scope.pessoa.aniversario);

        //  //DIRECIONAR PARA A TELA DE INICIAL:
        $scope.direcionaTelaInicial = function () {
            window.location.replace('http://127.0.0.1:5500/app/component/TelaInicial/index.html')
        };



        //PEGAR OBJETO CIDADES NO BANCO DE DADOS:
        $http.get("http://localhost:3000/cidade")
            .then(function (response) {
                $scope.cidades = response.data;
            });



        //PEGAR OBJETO PROFISSAO NO BANCO DE DADOS:
        $http.get("http://localhost:3000/profissao")
            .then(function (response) {
                $scope.profissoes = response.data;
            });



        // EDITA PESSOA NA TELA DE EDIÇÃO:
        $scope.edita_pessoa = function (pessoa, isValid) {
            // console.log(pessoa)
            // if (isValid) {
            $http({
                url: "http://localhost:3000/pessoa/" + pessoa.id,
                method: 'PUT',
                data: pessoa,
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(function (response) {
                console.log("dados alterados com sucesso!", response)
                localStorage.setItem("pessoa", JSON.stringify(pessoa))
                // $scope.pessoa = response.data;
                // limpaForm();
                $scope.direcionaTelaInicial();

            }).catch(function (err) {
                console.log("erro ao editar os dados", err)

            })

            // }


        }

    })




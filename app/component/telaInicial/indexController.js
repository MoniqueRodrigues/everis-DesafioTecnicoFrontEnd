angular.module("soVamu", ["ngRoute"])
    .controller("indexController", function ($scope, $http, $location) {

        $scope.titulo = "Só Vamu Tech!";
        $scope.listaPessoas = [];

        // //DIRECIONAR PARA A TELA DE EDITAR:
        // $scope.direcionaTelaEditar = function () {
        //     window.location.replace('http://127.0.0.1:5500/app/component/TelaDeEdicao/edicao.html')
        // };

        //DIRECIONAR PARA A TELA DE CADASTRO:
        $scope.direcionaTelaCadastro = function () {
            window.location.replace('http://127.0.0.1:5500/app/component/TelaDeCadastro/cadastro.html')
        };

        //  //DIRECIONAR PARA A TELA DE INICIAL:
        $scope.direcionaTelaInicial = function () {
            window.location.replace('http://127.0.0.1:5500/app/component/TelaInicial/index.html')
        };


        //GET PARA LISTAR PESSOA NA TABELA:
        $http.get("http://localhost:3000/pessoa")
            .then(function (response) {
                console.log('retorno', JSON.stringify(response.data))
                $scope.listaPessoas = response.data;

            });

        // // VISUALIZA PRODUTO NA TELA DE EDIÇÃO:
        $scope.mostraPessoa = function (pessoa, index) {
            localStorage.setItem("pessoa", JSON.stringify(pessoa));
            // direcionaTelaCadastro();
            
        }



        //DISPARA MODAL INFORMATIVO EXCLUIR

        $scope.informaModalExcluir = function () {
            $('#modalExcluirInformativo').modal('show');
            // console.log("pessoa", pessoa)
        };


        //DELETA DA TABELA:
        $scope.excluiPessoa = function (pessoa) {
            console.log("este fulano", pessoa)
            $http({
                url: "http://localhost:3000/pessoa/" + pessoa.id,
                method: 'DELETE',
                data: pessoa,
                headers: {
                    "Content-Type": "application/json"

                }

            }).then(function (response) {
                console.log("dados deletados com sucesso", response)
            }).catch(function (err) {
                console.log("erro ao deletar", err);

            })

        }

    });


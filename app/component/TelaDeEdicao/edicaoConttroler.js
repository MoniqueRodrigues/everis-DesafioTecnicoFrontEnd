angular.module("soVamu", ["ngRoute"])
    .controller("edicaoController", function ($scope, $http, $rootScope) {
        $scope.titulo = "Só Vamu Tech!";

        // $scope.pessoa = $rootScope.pessoa;

        $scope.pessoa = JSON.parse(localStorage.getItem("pessoa"));
        // console.log(JSON.parse(pessoa));




        // EDITA PRODUTO NA TELA DE EDIÇÃO:

        $scope.edita_pessoa = function (pessoa) {

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




            }).catch(function (err) {
                console.log("erro ao editar os dados", err)

            })

            // }


        }

    })


//LIMPA O FORMULÁRIO:
function limpaForm() {
    $scope.pessoa = {

        "idade": "",
        "cidade": "",
        "peso": "",
        "aniversario": "",
        "profissao": "",
        "id": 0
    };

};





    // $scope.edita_pessoa = function (isValid, pessoa) {
    //     console.log(isValid)
    //     console.log(pessoa)


    //     if (isValid) {
    //         $http({
    //             url: "http://localhost:3000/pessoa/" + pessoa.id,
    //             method: 'PUT',
    //             data: pessoa,
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }

    //         }).then(function (response) {
    //             console.log("dados alterados com sucesso!", response)
    //             localStorage.setItem("pessoa", JSON.stringify(pessoa))
    //             //$scope.pessoa = response.data;

    //         }).catch(function (err) {
    //             console.log("erro ao editar os dados", err)

    //         })

    //     }


    // }
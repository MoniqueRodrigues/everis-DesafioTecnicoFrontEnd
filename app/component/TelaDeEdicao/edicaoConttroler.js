angular.module("listaUsuarioModulo", [])
    .controller("edicaoController", function ($scope, $http) {
        $scope.titulo = "Só Vamu Tech!";
        $scope.listaPessoas = [];








        // // VISUALIZA PRODUTO NA TELA DE EDIÇÃO:
        $scope.mostraPessoa = function(pessoa,index){  
        console.log("index",index);  
        console.log("pessoa",pessoa);       
            $scope.pessoaSelecionada= pessoa;



        }



        // EDITA PRODUTO NA TELA DE EDIÇÃO:

        $scope.edita_pessoa = function (pessoa) {

            $http({
                url: "http://localhost:3000/pessoa" + pessoa.id,
                method: 'PUT',
                data: pessoa,
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(function (response) {
                console.log("dados alterados com sucesso!", response)
                pessoa = response.data;

            }).catch(function (err) {
                console.log("erro ao editar os dados", err)

            })

        }




    

   
       

    })

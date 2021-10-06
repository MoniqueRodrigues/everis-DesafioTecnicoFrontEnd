angular.module("listaUsuarioModulo",[])
.controller("cadastroController", function($scope,$http){

    $scope.titulo= "Só Vamu Tech!";  
    $scope.listaPessoas=[];   
    
    // $scope.pessoa = {
    //     "nome":"",
    //     "idade":0,
    //     "profissao":"",
    //     "cidade":"",
    //     "peso": 0,
    //     "aniversario":""
    // }


    //  ADICIONA O PRODUTO NO FORMULÁRIO E ENVIA PARA O BANCO DE DADOS: 
    $scope.cadastra_pessoa = function(){
        console.log("enviou")
       // if(isValid){
            $http.post(
                " http://localhost:3000/pessoa ",
                 JSON.stringify($scope.pessoa)
            ).then(function(response){
                $scope.listaPessoas.push(response.data);

            })
        //}

    }





});






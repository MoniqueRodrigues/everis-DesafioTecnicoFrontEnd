angular.module("listaUsuarioModulo",[])
.controller("indexController", function($scope,$http){

    $scope.titulo= "Só Vamu Tech!";  
    $scope.listaPessoas=[];


//GET PARA LISTAR PESSOA NA TABELA:
$http.get("http://localhost:3000/pessoa")
.then(function(response){
    console.log('retorno')
    $scope.listaPessoas = response.data;

});

});
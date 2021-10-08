angular.module('soVamu').config(function($routeProvider){
  $routeProvider.when("/pessoas",{
    

    templateUrl:"app/component/TelaInicial/index.html",
    controller: "indexController"
 





  });

});




  
// app.config(
//     function config($routeProvider) {
//       $routeProvider.
//         when('/', {
//             templateUrl:"component/TelaInicial/index.html",
//             controller: 'indexController'
//         })
//         when('/editar', {
//           templateUrl:"component/TelaDeEdicao/edicao.html",
//           controller: 'edicaoController'
//         }).
//         when('/cadastrar', {
//           templateUrl:"component/TelaDeCadastro/cadastro.html",
//           controller: 'cadastroController'
//         }).
//         otherwise({'redirectTo': '/'});
//     }
// );
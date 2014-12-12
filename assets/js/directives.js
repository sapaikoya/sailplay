angular.module('sailplay.directives', [])

    .directive('ngEditor', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'assets/templates/d_ngEditor.html',
            scope: {
                height: '='
            },

            controller: function ($scope, $rootScope, GetData, $sce) {
                $scope.isRender = false;
                $scope.edittext = '';
                var approveTags = ['p','a','b']

                $scope.render = function(choise){
                    $scope.isRender = choise;


                    $scope.edittext = $scope.edittext.replace(/(<\/style>)|(<style[^>]*?>)/ig, ' ')
                        .replace(/(<\/body>)|(<body[^>]*?>)/ig, ' ')
                        .replace(/(<\/head>)|(<head[^>]*?>)/ig, ' ')
                        .replace(/(<\/html>)|(<html[^>]*?>)/ig, ' ')
                        .replace(/(<\/script>)|(<script[^>]*?>)/ig, ' ')
                        .replace(/(<\/iframe>)|(<iframe[^>]*?>)/ig, ' ')
                        .replace(/(<\/frame>)|(<frame[^>]*?>)/ig, ' ')
                        .replace(/(<\/form>)|(<form[^>]*?>)/ig, ' ')
                        .replace(/(<\/input>)|(<input[^>]*?>)/ig, ' ')
                        .replace(/(<\/textarea>)|(<textarea[^>]*?>)/ig, ' ')

                        .replace(/(<!DOCTYPE[^>]*?>)|(<link[^>]*?>)|(<meta[^>]*?>)|(<!--[^>]*?>)/ig, ' ');





                    $scope.editedtext = $sce.trustAsHtml($scope.edittext);

                };

                $scope.save = function(){

                    GetData.post('/hotels/index.php',{'query': $scope.edittext})
                        .then(
                        function(data){
                            console.log(data)
                        },
                        function(){ console.log('error')}
                    );
                };


            }
        }
    })

    .directive('scroll', function () {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {
                element.slimScroll({

                    height: attrs.scroll + 'px'

                });
            }
        }

    })

   ;


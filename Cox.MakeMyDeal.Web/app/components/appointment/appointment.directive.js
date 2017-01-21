angular.module('mmdApp')
    .directive('mmdAppointment', function() {
        return {
            restrict: 'E',
            scope: {
                appt: '='
            },
            templateUrl: 'components/appointment/appointment.directive.html',
            controller: function($scope, $uibModal) {
                $scope.showApptModal = function() {
                    var modalInstance =
                        $uibModal.open({
                            controller: 'apptDirectiveModalController',
                            controllerAs: 'vm',
                            templateUrl: 'apptDirectiveModalContent.html',
                            size: 'sm',
                            resolve: {
                                appt: $scope.appt
                            }
                        })
                    modalInstance.result.then(function (appt) {
                        $scope.appt = appt;
                    }, function(cancelReason) {

                    })
                }
            }
        }
    })
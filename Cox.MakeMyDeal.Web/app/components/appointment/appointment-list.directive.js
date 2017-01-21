angular.module('mmdApp')
    .directive('mmdAppointmentList', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/appointment/appointment-list.directive.html',
            controller: 'apptListController',
            controllerAs: 'vm'
        }
    });
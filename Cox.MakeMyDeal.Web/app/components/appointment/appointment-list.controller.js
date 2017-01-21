angular.module('mmdApp')
    .controller('apptListController', function (apptService) {
        var vm = this;
        vm.appts = apptService.getAppts();
    })
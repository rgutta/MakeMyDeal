angular.module('mmdApp')
    .controller('apptDirectiveModalController', function($uibModalInstance, appt) {
        var vm = this;
        vm.appt = appt;

        vm.save = function() {
            vm.appt.isBooked = true;
            $uibModalInstance.close(vm.appt);
        }

        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    })
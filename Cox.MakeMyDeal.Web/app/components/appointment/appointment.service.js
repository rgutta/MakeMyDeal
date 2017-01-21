angular.module('mmdApp')
    .service('apptService', function() {

        this.getAppts = function () {
            var appts = [{
                    startHour: '9am',
                    endHour: '10am'
                },
                {
                    startHour: '10am',
                    endHour: '11am'
                },
                {
                    startHour: '11am',
                    endHour: '12am'
                },
                {
                    startHour: '12am',
                    endHour: '1pm'
                },
                {
                    startHour: '1pm',
                    endHour: '2pm'
                },
                {
                    startHour: '2pm',
                    endHour: '3pm'
                },
                {
                    startHour: '3pm',
                    endHour: '4pm'
                },
                {
                    startHour: '4pm',
                    endHour: '5pm'
                }
            ];
            appts.map(function(appt) {
                angular.extend(appt, { name: '', phone: '', isBooked: false });
            });
            return  appts;
        }
    });

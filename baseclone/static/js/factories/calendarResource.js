/**
 * Created by GoldenGate on 11/5/14.
 */
baseclone.factory('iCal', function($resource) {
    return $resource('/proxy/calendars/:calendarID/calendar_events/:eventId.json', {
            // Parameter defaults
        },
        {
            update: {method: 'PUT'}
        }
    );
});
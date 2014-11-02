## snooze-moment

A simple wrapper for the NPM module Moment.

### Use

```
snooze.module('MyModule').service('MyServ', function(moment) {
  return {
    whatIsToday: function() {
      // Todays date in MySQL date format
      return moment(new Date(), 'YYYY-MM-DD')
    }
  };
});
```

### Documentation

See official moment documentation

http://momentjs.com/docs/#/parsing/

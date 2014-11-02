## snooze-moment

A simple wrapper for the NPM module Moment.

### Install

Install with npm

```
npm install snooze-moment --save
```

### Use

Inject the module into your snooze module
```
require('snooze-moment');
snooze.module('MyModule', ['snooze-moment']);
```

Ready to use.

```
snooze.module('MyModule').service('MyServ', function($moment) {
  return {
    whatIsToday: function() {
      // Todays date in MySQL date format
      return $moment(new Date(), 'YYYY-MM-DD')
    }
  };
});
```

### Documentation

See official moment documentation

http://momentjs.com/docs/#/parsing/

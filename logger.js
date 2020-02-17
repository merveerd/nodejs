//1.st version:

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

    log(message) {

        //Send an HTTP request
        console.log(message);

        //Raise an event 
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}

module.exports = Logger;


// //2.st version:
// const EventEmitter = require('events');
// const emitter = new EventEmitter(); // it is not usual to use like this

// var url = 'http://mylogger.io/log';

// function log(message) {

//     //Send an HTTP request
//     console.log(message);

//     //Raise an event 
//     emitter.emit('messageLogged', { id: 1, url: 'http://'});
// }


// module.exports = log;

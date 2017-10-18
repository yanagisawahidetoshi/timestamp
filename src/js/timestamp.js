const Moment = require('moment');
const Clipboard = require('clipboard');

class Timestamp {
    constructor(base, date = null) {
        this.base = document.getElementsByClassName(base)[0];
        this.copyTrigger = document.getElementsByClassName('jsc-timestamp-copyTrigger')[0];
        this.target = this.base.getElementsByClassName('jsc-timestamp-target')[0];
        
        this.timeStamp = this.convTimestamp(date);
        
        this.setTimeStamp();
        
        this.bindEvents();
    }
    bindEvents() {
        this.copyTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.setClipBoard();
        });
    }
    convTimestamp(date) {
        if(! date) {
            return Moment().unix();
        }
    }
    setTimeStamp() {
        this.target.value = this.timeStamp;
    }
    setClipBoard() {
        if(! this.target.value) {
            return;
        }
        var cp = new Clipboard(".jsc-timestamp-copyTrigger");
        
    }
}

export default Timestamp;
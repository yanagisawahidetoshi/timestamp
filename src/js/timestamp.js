const Moment = require('moment');
const Clipboard = require('clipboard');

class Timestamp {
    constructor(base, timestamp = Moment().unix()) {
        this.base        = document.getElementsByClassName(base)[0];
        this.copyTrigger = this.base.getElementsByClassName('jsc-timestamp-copyTrigger')[0];
        this.target      = this.base.getElementsByClassName('jsc-timestamp-target')[0];
        
        this.timeStamp = timestamp;
        this.setTimeStamp();
        this.bindEvents();
    }
    bindEvents() {
        this.copyTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.setClipBoard();
        });
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
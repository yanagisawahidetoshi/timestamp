const Moment = require('moment');
const Clipboard = require('clipboard');

class AnyTimestamp {
    constructor() {

        this.target = document.getElementsByClassName('jsc-any-timestamp-target')[0];
        this.trigger = document.getElementsByClassName('jsc-any-timestamp-trigger')[0];
        this.dateTarget = document.getElementsByClassName('jsc-any-timestamp-dateTarget')[0];
        this.copyTrigger = document.getElementsByClassName('jsc-any-timestamp-copyTrigger')[0];
        
        this.bindEvents();
    }
    bindEvents() {
        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.setDate();
        });
        
        this.copyTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.setClipBoard();
        });
    }
    setDate() {
        if(! this.target.value) {
            return;
        }

        this.dateTarget.value = Moment(this.target.value,'X').format('YYYY年MM月DD日 HH:mm:ss');
    }
    setClipBoard() {
        if(! this.dateTarget.value) {
            return;
        }
        var cp = new Clipboard(".jsc-any-timestamp-copyTrigger");
    }
}

export default AnyTimestamp;
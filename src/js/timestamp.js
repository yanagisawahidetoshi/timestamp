const Moment = require('moment');

class Timestamp {
    constructor(base, date = null) {
        this.base = base;
        this.timeStamp = this.getTimestamp(date);
        
        this.setTimeStamp();
    }
    convTimestamp(date) {
        if(! date) {
            return Moment().unix();
        }
    }
    setTimeStamp() {
        const target = document.getElementsByClassName(this.base)[0]
            .getElementsByClassName('jsc-timestamp-target')[0];
        
        target.value = this.timeStamp;
    }
    
}

export default Timestamp;
const Moment = require('moment');

class Timestamp {
    constructor(base, date = null) {
        this.base = document.getElementsByClassName(base)[0];
        this.timeStamp = this.convTimestamp(date);
        
        this.setTimeStamp();
    }
    convTimestamp(date) {
        if(! date) {
            return Moment().unix();
        }
    }
    setTimeStamp() {
        const target = this.base.getElementsByClassName('jsc-timestamp-target')[0];
        
        target.value = this.timeStamp;
    }
    
}

export default Timestamp;
const Moment = require('moment');
import Timestamp  from './timestamp';

class DateTimestamp {
    constructor() {
        this.year   = document.getElementsByClassName('jsc-dateTimestamp-year')[0];
        this.month  = document.getElementsByClassName('jsc-dateTimestamp-month')[0];
        this.day    = document.getElementsByClassName('jsc-dateTimestamp-day')[0];
        this.hour   = document.getElementsByClassName('jsc-dateTimestamp-hour')[0];
        this.minute = document.getElementsByClassName('jsc-dateTimestamp-minute')[0];
        this.second = document.getElementsByClassName('jsc-dateTimestamp-second')[0];
        this.trigger = document.getElementsByClassName('jsc-dateTimestamp-trigger')[0];
        
        this.bindEvents();
        this.buildMonthsList();
        this.buildDaysList();
        this.buildHoursList();
    }
    bindEvents() {
        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.convTimestamp();
        });
    }
    convTimestamp() {
        if(! this.year.value) {
            return;
        }
        let momentArgument = {};
        
        momentArgument.year = this.year.value;
        momentArgument.month = this.month.value == '' ? 0 : this.month.value - 1;
        momentArgument.day = this.day.value == '' ? 1 : this.day.value;
        momentArgument.hour = this.hour.value == '' ? 0 : this.hour.value;
        momentArgument.minute = this.minute.value == '' ? 0 : this.minute.value;
        momentArgument.second = this.second.value == '' ? 0 : this.second.value;
        
        new Timestamp('jsc-timestamp-date', Moment(momentArgument).unix());
    }
    buildMonthsList() {
        const fragment = document.createDocumentFragment();

        for(let i = 1; i <= 12; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = i;

            fragment.appendChild(option);
        }
        
        this.month.appendChild(fragment);
    }
    buildDaysList() {
        const year  = this.year.value;
        const month = this.month.value;
        
        if(! year || ! month) {
            return;
        }
        
        const moment = Moment(year + '-' + month, "YYYY-MM");
        const endOfDay = moment.endOf('month').date();
        
        const fragment = document.createDocumentFragment();

        for(let i = 1; i <= endOfDay; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = i;

            fragment.appendChild(option);
        }
        
        this.day.appendChild(fragment);
    }
    buildHoursList() {
        const fragment = document.createDocumentFragment();

        for(let i = 0; i <= 23; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = i;

            fragment.appendChild(option);
        }
        
        this.hour.appendChild(fragment);
    }
    
    
}

export default DateTimestamp;
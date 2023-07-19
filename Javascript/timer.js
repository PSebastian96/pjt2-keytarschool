function Timer (callback, timeInterval, options) {
    this.timeInterval = timeInterval;

    // Method to start timer
    this.start = () => {
    // set the expected time
    this.expected = Date.now() + this.timeInterval;
    // start the Timeout 
    this.theTimeout = null;

    if (options.immediate === true) {
        callback();
    };

    this.timeout = setTimeout(this.round, this.timeInterval);
    console.log('Timer Started');
    };
    //stop the timer
    this.stop = () => {
        clearTimeout(this.timeout);
        console.log('Timer Stopped');
    }

    //Round method that takes care of running the callback and adjusting the time
    this.round = () => {
        console.log('timeout',this.timeout);
        let drift = Date.now() - this.expected;
        if (drift > this.timeInterval) { 
            if (options.errorCallback) {
                options.errorCallback();
            }
        }
        callback() 
        this.expected += this.timeInterval;
        console.log('Drift', drift);
        console.log('Next round time interval:', this.timeInterval - drift);
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
};

export default Timer;
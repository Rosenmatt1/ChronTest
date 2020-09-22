var CronJob = require('cron').CronJob;

var job = new CronJob('0 0 23 20 9 0', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job.start();

console.log("Logging crontest.js")

testChron = () => {
    this.interval = setInterval(() => {
        console.log("test cron")
   }, 300)
 }

 console.log(testChron())


var CronJob = require('cron').CronJob;

// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11 (Jan-Dec)
// Day of Week: 0-6 (Sun-Sat)

console.log('Before job instantiation');
const job = new CronJob('* 10 * * * *', function() {
	const d = new Date();
	console.log('At Ten Minutes:', d);
});
console.log('After job instantiation');
job.start();

// var job = new CronJob('0 0 23 20 9 0', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
// job.start();

// console.log("Logging crontest.js")



// testChron = () => {
//     this.interval = setInterval(() => {
//         console.log("test cron")
//    }, 300)
//  }

//  console.log(testChron())


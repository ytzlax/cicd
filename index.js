const core = require('@actions/core');
const github = require('@actions/github');
// const packagePath = './utils.js'
// import {aa} from './utils.js'

import('./utils.js')
    .then((m) => {
        console.log(m.name)
    })
    .catch(err => {
        console.error('Error during loading module: ' + err)
        callback()
    })
// try {
//   // `who-to-greet` input defined in action metadata file
//   //
//   //
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
// 	core.setFailed(error.message);
// }

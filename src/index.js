import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'

global.jQuery = require('jquery');
require('bootstrap');
import { tasks, goals, routines, users } from './data/testData.js'
import { task } from './components/task.js'
import EventBus from './EventBus.js'

//alert('Pozdro z podziemia!');

const task1 = task('ale ze', 'mnie zadanie')
document.body.appendChild(task1)


// Example usage of event bus
const handler = (event) => {
  console.log('Wololollo')
  // Do something
}
EventBus.on('show-view:week', handler)

EventBus.emit('show-view:week') // send event


EventBus.off('show-view:week', handler) // deregister event listener

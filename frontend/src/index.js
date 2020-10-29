import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'

global.jQuery = require('jquery');
require('bootstrap');
import { tasks, goals, routines, users } from './data/testData.js'
import Button from './components/button.js'
import EventBus from './EventBus.js'


const button1 = button('Dzień', 'show-view:day')
document.body.appendChild(button1)


// Example usage of event bus
const handler = (event) => {
  console.log('Wololollo')
  // Do something
}
EventBus.on('show-view:week', handler)

EventBus.emit('show-view:week') // send event


EventBus.off('show-view:week', handler) // deregister event listener


// to create a whole bigger piece of html in js you can do this:
// let wrapper = doument.createElement('div')
// wrapper.innerHTML = '... all your html goes here and becomes nested in the wrapper element'

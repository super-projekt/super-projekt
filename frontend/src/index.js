import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import { $,jQuery } from 'jquery';
import { tasks, goals, routines, users } from './data/testData.js'
import button from './components/button.js'
import EventBus from './EventBus.js'

window.$ = $;
window.jQuery = jQuery;

const eventBus = new EventBus();

const button1 = button(eventBus, 'Dzień', 'show-view:day')
document.getElementById('topbar').appendChild(button1)

// Example usage of event bus
const handler = (event) => {
  console.log('Wololollo')
  // Do something
}
eventBus.on('show-view:week', handler)

eventBus.emit('show-view:week') // send event


//eventBus.off('show-view:week') // deregister event listener


// to create a whole bigger piece of html in js you can do this:
// let wrapper = doument.createElement('div')
// wrapper.innerHTML = '... all your html goes here and becomes nested in the wrapper element'

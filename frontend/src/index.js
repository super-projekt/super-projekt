import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import { $,jQuery } from 'jquery';
import SButton from './components/SButton.js';
import EventBus from './EventBus.js';

window.$ = $;
window.jQuery = jQuery;

// tu stworzona jest globalna instancja event busa
const eventBus = new EventBus();

// tu stworzone są testowe buttony o różnych wariantach i eventach
// ale każdy z tą samą, globalną instancją event busa

const testButton1 = SButton(eventBus, 'test-event-1', 'primary', 'Test 1');
testButton1.disabled = true;
const testButton2 = SButton(eventBus, 'test-event-2', 'secondary', 'Test 2');
const testButton3 = SButton(eventBus, 'test-event-3', 'tertiary', 'Test 3');

// tu dodajemy wszystkie trzy testowe buttony jako dzieci topbaru, po prostu,
// żeby były gdzieś widoczne i dało się ich używać
document.getElementById('topbar').appendChild(testButton1);
document.getElementById('topbar').appendChild(testButton2);
document.getElementById('topbar').appendChild(testButton3);


// Tutaj tworzymy funkcję, która przyjmuje event jako argument i printuje go w consoli
const reaktorNaEvent = function(event) {
  console.log(event);
}
// tutaj każemy naszej funkcji być wywoływanej zawsze, kiedy poszczególne eventy zostaną
// 'usłyszane' na event busie
// na razie olej te dziwne zapisy ze strzałką i nawiasami, we will come to that
eventBus.on('test-event-1', () => reaktorNaEvent('test-event-1'));
eventBus.on('test-event-2', () => reaktorNaEvent('test-event-2'));
eventBus.on('test-event-3', () => reaktorNaEvent('test-event-3'));

// a w taki sposób możemy wyemitować event przez event busa
eventBus.emit('test-event-1');

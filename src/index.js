import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'

global.jQuery = require('jquery');
require('bootstrap');

import { task } from './components/task.js'

//alert('Pozdro z podziemia!');

const task1 = task('ale ze', 'mnie zadanie')
document.body.appendChild(task1)

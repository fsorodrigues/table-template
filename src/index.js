// importing d3.js
import {csv} from 'd3';

// importing stylesheet
import './style/main.css';

// importing components
import Main from './components/Main';

// instantiating components
const main = Main(document.querySelector('.table-wrapper-d3'));

// loading data
const dataset = csv('./data/disease.csv',d => d);

dataset.then((dataset) => {
    main(dataset);
});

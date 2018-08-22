// importing d3.js
import {select} from 'd3';

// importing components
import Table from './Table';

// instantiating components
const table = Table();

function Main(_) {

    function exports(data) {

        const root = _;
        const container = select(root);

        container.datum(data)
            .each(table);

    }

    return exports;
}

export default Main;

// importing d3.js
import {select} from 'd3';

function Table(_) {

    function exports(data) {

        // setting up containers
        const root = this;
        const container = select(root);

        // data transformation
        const listColumns = Object.keys(data[0]);

        // appending table + table elements
        // ENTER + EXIT + UPDATE pattern

        // table
        let tableUpdate = container.selectAll('.table')
            .data([1]);
        const tableEnter = tableUpdate.enter()
            .append('table')
            .classed('table',true)
            .classed('table-striped',true);
        tableUpdate.exit().remove();
        tableUpdate = tableUpdate.merge(tableEnter);

        // thead
        let theadUpdate = tableUpdate.selectAll('thead')
            .data([1]);
        const theadEnter = theadUpdate.enter()
            .append('thead')
            .classed('table-header',true);
        theadUpdate.exit().remove();
        theadUpdate = theadUpdate.merge(theadEnter);

        // tr
        let rowHeaderUpdate = theadUpdate.selectAll('tr')
            .data([1]);
        const rowHeaderEnter = rowHeaderUpdate.enter()
            .append('tr')
            .classed('table-header-row',true);
        rowHeaderUpdate.exit().remove();
        rowHeaderUpdate = rowHeaderUpdate.merge(rowHeaderEnter);

        // th
        let thUpdate = rowHeaderUpdate.selectAll('th')
            .data(listColumns);
        const thEnter = thUpdate.enter()
            .append('th')
            .classed('table-header-cell',true);
        thUpdate.exit().remove();
        thUpdate = thUpdate.merge(thEnter)
            .text(d => d);

        // tbody
        let tbodyUpdate = tableUpdate.selectAll('tbody')
            .data([1]);
        const tbodyEnter = tbodyUpdate.enter()
            .append('tbody')
            .classed('table-body',true);
        tbodyUpdate.exit().remove();
        tbodyUpdate = tbodyUpdate.merge(tbodyEnter);

        // tr
        let rowBodyUpdate = tbodyUpdate.selectAll('tr')
            .data(data);
        const rowBodyEnter = rowBodyUpdate.enter()
            .append('tr')
            .classed('table-body-row',true);
        rowBodyUpdate.exit().remove();
        rowBodyUpdate = rowBodyUpdate.merge(rowBodyEnter);

        // th
        let tdUpdate = rowBodyUpdate.selectAll('td')
            .data(d => {
                return listColumns.map(e => {
                    return {
                        column: e,
                        value: d[e]
                    };
                });
            });
        const tdEnter = tdUpdate.enter()
            .append('td')
            .classed('table-body-cell',true);
        tdUpdate.exit().remove();
        tdUpdate = tdUpdate.merge(tdEnter)
            .text(d => d.value);

        const totalColumns = tdUpdate.filter((d,i) => i === 1)
            .style('text-align','right');

        // tfoot
        let tfootUpdate = tableUpdate.selectAll('tfoot')
            .data([1]);
        const tfootEnter = tfootUpdate.enter()
            .append('tfoot')
            .classed('table-footer',true);
        tfootUpdate.exit().remove();
        tfootUpdate = tfootUpdate.merge(tfootEnter);

        // tr
        let rowFooterUpdate = tfootUpdate.selectAll('tr')
            .data([1]);
        const rowFooterEnter = rowFooterUpdate.enter()
            .append('tr')
            .classed('table-footer-row',true);
        rowFooterUpdate.exit().remove();
        rowFooterUpdate = rowFooterUpdate.merge(rowFooterEnter);

        // td
        let tdFooterUpdate = rowFooterUpdate.selectAll('td')
            .data([1]);
        const tdFooterEnter = tdFooterUpdate.enter()
            .append('th')
            .classed('table-footer-cell',true);
        tdFooterUpdate.exit().remove();
        tdFooterUpdate = tdFooterUpdate.merge(tdFooterEnter)
            .attr('colspan', 2)
            .text(d => `Source: PFOA Community Health Questionnaire`);

    }

    return exports;
}

export default Table;

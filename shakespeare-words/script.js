import {TabulatorFull as Tabulator} from 'tabulator-tables';

var reader = new FileReader()



var table = new Tabulator("#word-table", {
    data:csvData,
    importFormat:"csv",
    autoColumns:true,
});

table.import("words.csv")


 google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

      var container = document.getElementById('dispatch-gnatt-chart');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn({ type: 'string', id: 'Position' });
      dataTable.addColumn({ type: 'string', id: 'Name' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows(columns);

      
      var options = {
        timeline: { colorByRowLabel: true, groupByRowLabel: true },
        avoidOverlappingGridLines: true,
        colors: ['red', 'blue',]
      };

      chart.draw(dataTable, options);
    }
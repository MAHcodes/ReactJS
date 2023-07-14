import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Button from '@mui/material/Button';

const App = () => {

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs] = useState([
    { field: 'rank', filter: true },
    { field: 'name', filter: true },
    { field: 'symbol', filter: true },
    { field: 'explorer' },
  ]);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    if (event.colDef.field === 'explorer') {
      window.open(event.value, '_blank');
    }

    console.log('cellClicked', event);
  }, []);

  // Example load data from server
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets").then(result => result.json())
      .then((rowData: any) => setRowData(rowData.data))
      .catch(e => console.error(e))
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div style={{
      display: "grid",
      placeItems: "center",
      gap: "1rem",
    }}>

      {/* Example using Grid's API */}
      <Button variant="contained" size="large" onClick={buttonListener}>Clear Selection</Button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 800, height: 1000 }}>

        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API

          rowData={rowData} // Row Data for Rows

          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={{ sortable: true }} // Default Column Properties

          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="single" // Options - allows click selection of rows

          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
};

export default App;

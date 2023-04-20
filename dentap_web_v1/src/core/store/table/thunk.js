import { SelectedRow } from "./selected_row_slice";


export const setSelectedRow = (rowData) => (dispatch) => {
    dispatch(SelectedRow(
        {
            selectedRow: rowData
        }
    ));
}
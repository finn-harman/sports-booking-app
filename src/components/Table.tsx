"use client";

import { deleteRequest } from "@/app/actions";
import { Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef, GridInputRowSelectionModel, GridRowId } from "@mui/x-data-grid-pro";
import { useEffect, useState } from "react";

interface Props {
    data: any;
}

const Table = ({data}: Props) => {
    const [selectedRow, setSelectedRow] = useState<GridInputRowSelectionModel | undefined>(undefined);
    const [selectedRequestId, setSelectedRequestId] = useState<number | undefined>(undefined);
    
    const handleSubmit = async () => {        
        console.log("request deletion submitted");
        if (selectedRequestId) {
            deleteRequest({id: selectedRequestId});
        }
    };

    useEffect(() => {
        if (selectedRow) {
            if (Array.isArray(selectedRow)) {
                const id = selectedRow[0];
                setSelectedRequestId(Number(id));
            } else {
                const id = selectedRow;
                setSelectedRequestId(Number(id))
            }
        }
    }, [selectedRow])

    const columns: GridColDef[] = [
        {
            field: "id", 
            headerName: "ID", 
            flex: 1
        },
        {
            field: "activity",
            headerName: "Activity",
            flex: 1
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "Created At",
            flex: 1
        }
    ];

    return (
        <Stack spacing={1}>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setSelectedRow(newRowSelectionModel);
                }}
                rowSelectionModel={selectedRow}
            />
            <Button onClick={handleSubmit} disabled={!selectedRequestId}>Delete Request</Button>
        </Stack>
    );
};

export default Table;

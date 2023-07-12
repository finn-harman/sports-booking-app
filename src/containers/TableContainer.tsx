import { getAllRequests } from "@/app/actions";
import { Stack, Typography } from "@mui/material";
import Table from "../components/Table";

const TableContainer = async () => {
    let requests;
  
    try {
        requests = await getAllRequests();
    } catch (e: any) {
        throw e;
    }

    return (
        <Stack spacing={1}>
            <Typography variant="h4">Existing requests</Typography>
            <Table
                data={requests}
            />
        </Stack>
    );
};

export default TableContainer;

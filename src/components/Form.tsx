import { Activity } from "@/lib/interfaces";
import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { useState } from "react";

interface Props {
    handleSubmit: any
}

const Form = ({handleSubmit}: Props) => {
    const [activity, setActivity] = useState("");
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Stack spacing={1}>
            <Typography variant="h4">Create new request</Typography>
            <TextField 
                label="Activity" 
                select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            >
                {(Object.keys(Activity) as Array<keyof typeof Activity>).map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateTimePicker 
                    value={date} 
                    onChange={(e) => setDate(e)}
                />
            </LocalizationProvider>
            <Button onClick={() => handleSubmit({activity, date: date})} disabled={!(activity && date)}>Request</Button>
        </Stack>
    );
};

export default Form;

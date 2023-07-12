"use client"

import { createRequest } from "@/app/actions";
import Form from "@/components/Form";
import { Activity, Status } from "@/lib/interfaces";

interface HandleSubmitProps {
    activity: Activity,
    date: any,
}

const FormContainer = () => {

    const handleSubmit = async ({activity, date}: HandleSubmitProps) => {        
        console.log("request submitted");

        const data = {
            activity: activity,
            date: date.toJSDate(),
            status: Status.PENDING  
        };

        createRequest(data);
    };

    return (
        <Form handleSubmit={handleSubmit} />
    );
};

export default FormContainer;

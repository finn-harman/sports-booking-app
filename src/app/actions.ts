"use server";

import { db } from "@/lib/database";
import { Activity, Status } from "@/lib/interfaces";
import { seed } from "@/lib/seed";

export interface CreateRequestProps {
    activity: Activity
    date: Date
    status: Status
}

export const createRequest = async (data: CreateRequestProps) => {
    await db
        .insertInto("requests")
        .values(data)
        .executeTakeFirst();
}

export interface DeleteRequestProps {
    id: number;
}

export const deleteRequest = async ({id}: DeleteRequestProps) => {
    await db
        .deleteFrom("requests")
        .where("requests.id", "=", id)
        .executeTakeFirst();
}

export const getAllRequests = async () => {
    try {
        const requests = await db.selectFrom("requests").selectAll().execute();
        return requests;
    } catch (e: any) {
        if (e.message === `relation "requests" does not exist`) {
          await seed()
          const requests = await db.selectFrom("requests").selectAll().execute();
          return requests;
        } else {
            throw e;
        }
    }
}
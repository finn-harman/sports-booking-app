import { ColumnType, Generated } from "kysely";

export enum Activity {
    HIGHBURY_FIELDS_TENNIS = "HIGHBURY_FIELDS_TENNIS",
    LONDON_FIELDS_SWIMMING = "HIGHBURY_FIELDS_TENNIS"
}
  
export enum Status {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    FAILED = "failed"
}

export interface RequestTable {
    id: Generated<number>
    activity: Activity
    date: Date
    status: Status
    createdAt: ColumnType<Date, string | undefined, never>
}

// Keys of this interface are table names.
export interface Database {
    requests: RequestTable
}
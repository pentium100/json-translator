// The following is a schema definition for determining whether a user wants to share a post or not:


export interface Invoice {
    invoiceDate: RawDateString;
    supplier: string;
    customer: string;
    invoiceAmount: number;

}


type oneToNine = 1|2|3|4|5|6|7|8|9
type zeroToNine = 0|1|2|3|4|5|6|7|8|9
/**
 * Years
 */
type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`
/**
 * Months
 */
type MM = `0${oneToNine}` | `1${0|1|2}`
/**
 * Days
 */
type DD = `${0}${oneToNine}` | `${1|2}${zeroToNine}` | `3${0|1}`
/**
 * YYYYMMDD
 */
type RawDateString = `${YYYY}${MM}${DD}`;
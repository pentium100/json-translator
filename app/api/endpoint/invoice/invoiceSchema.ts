// The following is a schema definition for determining whether a user wants to share a post or not:


export interface Invoice {
    title?: string;
    no: string;
    Date: RawDateString;
    chargeType: string;
    supplier: string;
    customer?: string;
    client?: string;
    amount: number;
    currency: Currency;


}
/*
type Item = {

    days?: number;
    dateFrom: RawDateString;
    dateTo: RawDateString;
    peoples?: number;
    quantity?: number;
    amount: number;
    unitPrice: number;
}

 */

type Currency = String3

type Char = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z'
type String3 = `${Char}${Char}${Char}`
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
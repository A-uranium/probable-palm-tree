/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ComputeSkipReason = {
    NoState: 'cskip_no_state',
    BadState: 'cskip_bad_state',
    NoGas: 'cskip_no_gas'
} as const;
export type ComputeSkipReason = typeof ComputeSkipReason[keyof typeof ComputeSkipReason];


export function instanceOfComputeSkipReason(value: any): boolean {
    for (const key in ComputeSkipReason) {
        if (Object.prototype.hasOwnProperty.call(ComputeSkipReason, key)) {
            if (ComputeSkipReason[key as keyof typeof ComputeSkipReason] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ComputeSkipReasonFromJSON(json: any): ComputeSkipReason {
    return ComputeSkipReasonFromJSONTyped(json, false);
}

export function ComputeSkipReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeSkipReason {
    return json as ComputeSkipReason;
}

export function ComputeSkipReasonToJSON(value?: ComputeSkipReason | null): any {
    return value as any;
}


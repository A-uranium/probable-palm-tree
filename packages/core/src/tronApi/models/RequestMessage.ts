/* tslint:disable */
/* eslint-disable */
/**
 * gasless TRON service REST api
 * Service to publish TRON transactions
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestMessage
 */
export interface RequestMessage {
    /**
     * 
     * @type {string}
     * @memberof RequestMessage
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof RequestMessage
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof RequestMessage
     */
    data: string;
}

/**
 * Check if a given object implements the RequestMessage interface.
 */
export function instanceOfRequestMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function RequestMessageFromJSON(json: any): RequestMessage {
    return RequestMessageFromJSONTyped(json, false);
}

export function RequestMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'to': json['to'],
        'value': json['value'],
        'data': json['data'],
    };
}

export function RequestMessageToJSON(value?: RequestMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'to': value.to,
        'value': value.value,
        'data': value.data,
    };
}


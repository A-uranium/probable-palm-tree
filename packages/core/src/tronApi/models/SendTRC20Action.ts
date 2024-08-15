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
import type { TronToken } from './TronToken';
import {
    TronTokenFromJSON,
    TronTokenFromJSONTyped,
    TronTokenToJSON,
} from './TronToken';

/**
 * 
 * @export
 * @interface SendTRC20Action
 */
export interface SendTRC20Action {
    /**
     * 
     * @type {string}
     * @memberof SendTRC20Action
     */
    recipient: string;
    /**
     * amount in quanta of tokens
     * @type {string}
     * @memberof SendTRC20Action
     */
    amount: string;
    /**
     * 
     * @type {TronToken}
     * @memberof SendTRC20Action
     */
    token: TronToken;
}

/**
 * Check if a given object implements the SendTRC20Action interface.
 */
export function instanceOfSendTRC20Action(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "recipient" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function SendTRC20ActionFromJSON(json: any): SendTRC20Action {
    return SendTRC20ActionFromJSONTyped(json, false);
}

export function SendTRC20ActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendTRC20Action {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recipient': json['recipient'],
        'amount': json['amount'],
        'token': TronTokenFromJSON(json['token']),
    };
}

export function SendTRC20ActionToJSON(value?: SendTRC20Action | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipient': value.recipient,
        'amount': value.amount,
        'token': TronTokenToJSON(value.token),
    };
}


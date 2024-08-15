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


import * as runtime from '../runtime';
import type {
  Event,
  StatusDefaultResponse,
} from '../models/index';
import {
    EventFromJSON,
    EventToJSON,
    StatusDefaultResponseFromJSON,
    StatusDefaultResponseToJSON,
} from '../models/index';

export interface GetEventRequest {
    eventId: string;
    acceptLanguage?: string;
}

/**
 * EventsApi - interface
 * 
 * @export
 * @interface EventsApiInterface
 */
export interface EventsApiInterface {
    /**
     * Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     * @param {string} eventId event ID or transaction hash in hex (without 0x) or base64url format
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;

    /**
     * Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     */
    getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;

}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI implements EventsApiInterface {

    /**
     * Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     */
    async getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['eventId'] == null) {
            throw new runtime.RequiredError(
                'eventId',
                'Required parameter "eventId" was null or undefined when calling getEvent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['acceptLanguage'] != null) {
            headerParameters['Accept-Language'] = String(requestParameters['acceptLanguage']);
        }

        const response = await this.request({
            path: `/v2/events/{event_id}`.replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters['eventId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     */
    async getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.getEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CatapultUpgradeDTO } from '../model/catapultUpgradeDTO';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum UpgradeRoutesApiApiKeys {
}

export class UpgradeRoutesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: UpgradeRoutesApiApiKeys, value: string) {
        (this.authentications as any)[UpgradeRoutesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Get software info of network at height.
     * @summary Get software info of network
     * @param height The height of the blockchain to get software info.
     */
    public async getUpgrade (height: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<CatapultUpgradeDTO> {
        const localVarPath = this.basePath + '/upgrade/{height}'
            .replace('{' + 'height' + '}', encodeURIComponent(String(height)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new Error('Required parameter height was null or undefined when calling getUpgrade.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<CatapultUpgradeDTO>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "CatapultUpgradeDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
}

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


export class ContractDTO {
    'multisig': string;
    'multisigAddress': string;
    'start': Array<number>;
    'duration': Array<number>;
    'hash': string;
    'customers': Array<string>;
    'executors': Array<string>;
    'verifiers': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "multisig",
            "baseName": "multisig",
            "type": "string"
        },
        {
            "name": "multisigAddress",
            "baseName": "multisigAddress",
            "type": "string"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "Array<number>"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Array<number>"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        },
        {
            "name": "customers",
            "baseName": "customers",
            "type": "Array<string>"
        },
        {
            "name": "executors",
            "baseName": "executors",
            "type": "Array<string>"
        },
        {
            "name": "verifiers",
            "baseName": "verifiers",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ContractDTO.attributeTypeMap;
    }
}


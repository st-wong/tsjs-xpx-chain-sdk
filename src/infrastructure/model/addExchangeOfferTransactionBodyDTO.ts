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

import { RequestFile } from '../api';
import { OfferDTO } from './offerDTO';
import { OfferTypeEnum } from './offerTypeEnum';

export class AddExchangeOfferTransactionBodyDTO extends OfferDTO {
    'duration': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AddExchangeOfferTransactionBodyDTO.attributeTypeMap);
    }
}


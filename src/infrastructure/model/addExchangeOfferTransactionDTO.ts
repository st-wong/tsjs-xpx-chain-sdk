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
import { AddExchangeOfferTransactionBodyDTO } from './addExchangeOfferTransactionBodyDTO';
import { EntityTypeEnum } from './entityTypeEnum';
import { TransactionDTO } from './transactionDTO';

export class AddExchangeOfferTransactionDTO extends TransactionDTO {
    'offers': Array<AddExchangeOfferTransactionBodyDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "offers",
            "baseName": "offers",
            "type": "Array<AddExchangeOfferTransactionBodyDTO>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AddExchangeOfferTransactionDTO.attributeTypeMap);
    }
}

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
import { CosignatoryModificationDTO } from './cosignatoryModificationDTO';

export class ModifyMultisigAccountTransactionBodyDTO {
    /**
    * The number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
    */
    'minRemovalDelta': number;
    /**
    * The number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
    */
    'minApprovalDelta': number;
    /**
    * The array of cosignatory accounts to add or delete.
    */
    'modifications': Array<CosignatoryModificationDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minRemovalDelta",
            "baseName": "minRemovalDelta",
            "type": "number"
        },
        {
            "name": "minApprovalDelta",
            "baseName": "minApprovalDelta",
            "type": "number"
        },
        {
            "name": "modifications",
            "baseName": "modifications",
            "type": "Array<CosignatoryModificationDTO>"
        }    ];

    static getAttributeTypeMap() {
        return ModifyMultisigAccountTransactionBodyDTO.attributeTypeMap;
    }
}


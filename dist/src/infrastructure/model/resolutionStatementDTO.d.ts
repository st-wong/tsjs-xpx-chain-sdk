/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ResolutionEntryDTO } from './resolutionEntryDTO';
/**
* A resolution statement keeps the relation between a namespace alias used in a transaction and the real address or mosaicId.
*/
export declare class ResolutionStatementDTO {
    'height': Array<number>;
    'unresolved': Array<number>;
    /**
    * The array of resolution entries linked to the unresolved namespaceId. It is an array instead of a single UInt64 field since within one block the resolution might change for different sources due to alias related transactions.
    */
    'resolutionEntries': Array<ResolutionEntryDTO>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
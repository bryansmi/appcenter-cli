/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DistributionGroupUserDeleteResponse class.
 * @constructor
 * @member {string} [code] The code of the result
 * 
 * @member {number} [message] The message of the result
 * 
 * @member {number} status The status code of the result
 * 
 * @member {string} [userEmail] The email of the user
 * 
 */
function DistributionGroupUserDeleteResponse() {
}

/**
 * Defines the metadata of DistributionGroupUserDeleteResponse
 *
 * @returns {object} metadata of DistributionGroupUserDeleteResponse
 *
 */
DistributionGroupUserDeleteResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DistributionGroupUserDeleteResponse',
    type: {
      name: 'Composite',
      className: 'DistributionGroupUserDeleteResponse',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'Number'
          }
        },
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'Number'
          }
        },
        userEmail: {
          required: false,
          serializedName: 'user_email',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DistributionGroupUserDeleteResponse;
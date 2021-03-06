/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Build configuration for Xamarin projects
 *
 */
class XamarinBranchConfigurationProperties {
  /**
   * Create a XamarinBranchConfigurationProperties.
   * @property {string} slnPath
   * @property {string} isSimBuild
   * @property {string} args
   * @property {string} configuration
   * @property {string} p12File
   * @property {string} p12Pwd
   * @property {string} provProfile
   * @property {string} [monoVersion]
   * @property {string} [sdkBundle]
   * @property {string} [symlink] Symlink of the SDK Bundle and Mono
   * installation.
   * The build will use the associated Mono bundled with related Xamarin SDK.
   * If both symlink and monoVersion or sdkBundle are passed, the symlink is
   * taking precedence. If non-existing symlink is passed, the current stable
   * Mono version will be configured for building.
   */
  constructor() {
  }

  /**
   * Defines the metadata of XamarinBranchConfigurationProperties
   *
   * @returns {object} metadata of XamarinBranchConfigurationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'XamarinBranchConfigurationProperties',
      type: {
        name: 'Composite',
        className: 'XamarinBranchConfigurationProperties',
        modelProperties: {
          slnPath: {
            required: true,
            serializedName: 'slnPath',
            type: {
              name: 'String'
            }
          },
          isSimBuild: {
            required: true,
            serializedName: 'isSimBuild',
            type: {
              name: 'String'
            }
          },
          args: {
            required: true,
            serializedName: 'args',
            type: {
              name: 'String'
            }
          },
          configuration: {
            required: true,
            serializedName: 'configuration',
            type: {
              name: 'String'
            }
          },
          p12File: {
            required: true,
            serializedName: 'p12File',
            type: {
              name: 'String'
            }
          },
          p12Pwd: {
            required: true,
            serializedName: 'p12Pwd',
            type: {
              name: 'String'
            }
          },
          provProfile: {
            required: true,
            serializedName: 'provProfile',
            type: {
              name: 'String'
            }
          },
          monoVersion: {
            required: false,
            serializedName: 'monoVersion',
            type: {
              name: 'String'
            }
          },
          sdkBundle: {
            required: false,
            serializedName: 'sdkBundle',
            type: {
              name: 'String'
            }
          },
          symlink: {
            required: false,
            serializedName: 'symlink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = XamarinBranchConfigurationProperties;

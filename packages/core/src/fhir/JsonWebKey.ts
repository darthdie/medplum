/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Meta } from './Meta';

/**
 * A JSON object that represents a cryptographic key. The members of the
 * object represent properties of the key, including its value.
 */
export interface JsonWebKey {

  /**
   * This is a JsonWebKey resource
   */
  readonly resourceType: 'JsonWebKey';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * Whether this key is in active use.
   */
  readonly active?: boolean;

  /**
   * The specific cryptographic algorithm used with the key.
   */
  readonly alg?: string;

  /**
   * The family of cryptographic algorithms used with the key.
   */
  readonly kty?: string;

  /**
   * How the key was meant to be used; sig represents the signature.
   */
  readonly use?: string;

  /**
   * The operation(s) for which the key is intended to be used.
   */
  readonly key_ops?: string[];

  /**
   * The x.509 certificate chain. The first entry in the array is the
   * certificate to use for token verification; the other certificates can
   * be used to verify this first certificate.
   */
  readonly x5c?: string[];

  /**
   * The modulus for the RSA public key.
   */
  readonly n?: string;

  /**
   * The exponent for the RSA public key.
   */
  readonly e?: string;

  /**
   * The unique identifier for the key.
   */
  readonly kid?: string;

  /**
   * The thumbprint of the x.509 cert (SHA-1 thumbprint).
   */
  readonly x5t?: string;

  /**
   * The exponent for the RSA private key.
   */
  readonly d?: string;

  /**
   * The first prime factor.
   */
  readonly p?: string;

  /**
   * The second prime factor.
   */
  readonly q?: string;

  /**
   * The first factor CRT exponent.
   */
  readonly dp?: string;

  /**
   * The second factor CRT exponent.
   */
  readonly dq?: string;

  /**
   * The first CRT coefficient.
   */
  readonly qi?: string;
}

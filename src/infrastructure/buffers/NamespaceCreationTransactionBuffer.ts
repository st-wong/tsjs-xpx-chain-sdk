/*
 * Copyright 2018 NEM
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

// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.RegisterNamespaceTransactionBuffer}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.RegisterNamespaceTransactionBuffer=} obj
 * @returns {Catapult.Buffers.RegisterNamespaceTransactionBuffer}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.getRootAsRegisterNamespaceTransactionBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.RegisterNamespaceTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signature = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signatureLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signatureArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signer = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signerLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.signerArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.version = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.maxFee = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.maxFeeLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.maxFeeArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.deadline = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.deadlineLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.deadlineArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceType = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.durationParentId = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.durationParentIdLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.durationParentIdArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceId = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceIdLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceIdArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceNameSize = function() {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.prototype.namespaceName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startRegisterNamespaceTransactionBuffer = function(builder) {
  builder.startObject(12);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSize = function(builder, size) {
  builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSignature = function(builder, signatureOffset) {
  builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createSignatureVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startSignatureVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSigner = function(builder, signerOffset) {
  builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createSignerVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startSignerVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addVersion = function(builder, version) {
  builder.addFieldInt32(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addType = function(builder, type) {
  builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addMaxFee = function(builder, maxFeeOffset) {
  builder.addFieldOffset(5, maxFeeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createMaxFeeVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startMaxFeeVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
  builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createDeadlineVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startDeadlineVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} namespaceType
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceType = function(builder, namespaceType) {
  builder.addFieldInt8(7, namespaceType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} durationParentIdOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addDurationParentId = function(builder, durationParentIdOffset) {
  builder.addFieldOffset(8, durationParentIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createDurationParentIdVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startDurationParentIdVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} namespaceIdOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceId = function(builder, namespaceIdOffset) {
  builder.addFieldOffset(9, namespaceIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createNamespaceIdVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.startNamespaceIdVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} namespaceNameSize
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceNameSize = function(builder, namespaceNameSize) {
  builder.addFieldInt8(10, namespaceNameSize, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} namespaceNameOffset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceName = function(builder, namespaceNameOffset) {
  builder.addFieldOffset(11, namespaceNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.endRegisterNamespaceTransactionBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.finishRegisterNamespaceTransactionBufferBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 * @param {flatbuffers.Offset} signatureOffset
 * @param {flatbuffers.Offset} signerOffset
 * @param {number} version
 * @param {number} type
 * @param {flatbuffers.Offset} maxFeeOffset
 * @param {flatbuffers.Offset} deadlineOffset
 * @param {number} namespaceType
 * @param {flatbuffers.Offset} durationParentIdOffset
 * @param {flatbuffers.Offset} namespaceIdOffset
 * @param {number} namespaceNameSize
 * @param {flatbuffers.Offset} namespaceNameOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.RegisterNamespaceTransactionBuffer.createRegisterNamespaceTransactionBuffer = function(builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, namespaceType, durationParentIdOffset, namespaceIdOffset, namespaceNameSize, namespaceNameOffset) {
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.startRegisterNamespaceTransactionBuffer(builder);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSize(builder, size);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSignature(builder, signatureOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addSigner(builder, signerOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addVersion(builder, version);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addType(builder, type);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addMaxFee(builder, maxFeeOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addDeadline(builder, deadlineOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceType(builder, namespaceType);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addDurationParentId(builder, durationParentIdOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceId(builder, namespaceIdOffset);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceNameSize(builder, namespaceNameSize);
  Catapult.Buffers.RegisterNamespaceTransactionBuffer.addNamespaceName(builder, namespaceNameOffset);
  return Catapult.Buffers.RegisterNamespaceTransactionBuffer.endRegisterNamespaceTransactionBuffer(builder);
}

// Exports for Node.js and RequireJS
export default Catapult;

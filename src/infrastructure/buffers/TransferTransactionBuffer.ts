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
Catapult.Buffers.MessageBuffer = function() {
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
 * @returns {Catapult.Buffers.MessageBuffer}
 */
Catapult.Buffers.MessageBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.MessageBuffer=} obj
 * @returns {Catapult.Buffers.MessageBuffer}
 */
Catapult.Buffers.MessageBuffer.getRootAsMessageBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.MessageBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.MessageBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MessageBuffer.prototype.payload = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MessageBuffer.prototype.payloadLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.MessageBuffer.prototype.payloadArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.MessageBuffer.startMessageBuffer = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.MessageBuffer.addType = function(builder, type) {
  builder.addFieldInt8(0, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} payloadOffset
 */
Catapult.Buffers.MessageBuffer.addPayload = function(builder, payloadOffset) {
  builder.addFieldOffset(1, payloadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MessageBuffer.createPayloadVector = function(builder, data) {
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
Catapult.Buffers.MessageBuffer.startPayloadVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MessageBuffer.endMessageBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 * @param {flatbuffers.Offset} payloadOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MessageBuffer.createMessageBuffer = function(builder, type, payloadOffset) {
  Catapult.Buffers.MessageBuffer.startMessageBuffer(builder);
  Catapult.Buffers.MessageBuffer.addType(builder, type);
  Catapult.Buffers.MessageBuffer.addPayload(builder, payloadOffset);
  return Catapult.Buffers.MessageBuffer.endMessageBuffer(builder);
}

/**
 * @constructor
 */
Catapult.Buffers.MosaicBuffer = function() {
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
 * @returns {Catapult.Buffers.MosaicBuffer}
 */
Catapult.Buffers.MosaicBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.MosaicBuffer=} obj
 * @returns {Catapult.Buffers.MosaicBuffer}
 */
Catapult.Buffers.MosaicBuffer.getRootAsMosaicBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.MosaicBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicBuffer.prototype.id = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicBuffer.prototype.idLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicBuffer.prototype.idArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicBuffer.prototype.amount = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicBuffer.prototype.amountLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicBuffer.prototype.amountArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.MosaicBuffer.startMosaicBuffer = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
Catapult.Buffers.MosaicBuffer.addId = function(builder, idOffset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicBuffer.createIdVector = function(builder, data) {
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
Catapult.Buffers.MosaicBuffer.startIdVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} amountOffset
 */
Catapult.Buffers.MosaicBuffer.addAmount = function(builder, amountOffset) {
  builder.addFieldOffset(1, amountOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicBuffer.createAmountVector = function(builder, data) {
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
Catapult.Buffers.MosaicBuffer.startAmountVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicBuffer.endMosaicBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 * @param {flatbuffers.Offset} amountOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicBuffer.createMosaicBuffer = function(builder, idOffset, amountOffset) {
  Catapult.Buffers.MosaicBuffer.startMosaicBuffer(builder);
  Catapult.Buffers.MosaicBuffer.addId(builder, idOffset);
  Catapult.Buffers.MosaicBuffer.addAmount(builder, amountOffset);
  return Catapult.Buffers.MosaicBuffer.endMosaicBuffer(builder);
}

/**
 * @constructor
 */
Catapult.Buffers.TransferTransactionBuffer = function() {
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
 * @returns {Catapult.Buffers.TransferTransactionBuffer}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.TransferTransactionBuffer=} obj
 * @returns {Catapult.Buffers.TransferTransactionBuffer}
 */
Catapult.Buffers.TransferTransactionBuffer.getRootAsTransferTransactionBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.TransferTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signature = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signatureLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signatureArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signer = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signerLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.signerArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.version = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.maxFee = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.maxFeeLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.maxFeeArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.deadline = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.deadlineLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.deadlineArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.recipient = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.recipientLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.recipientArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.messageSize = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.numMosaics = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {Catapult.Buffers.MessageBuffer=} obj
 * @returns {Catapult.Buffers.MessageBuffer|null}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.message = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? (obj || new Catapult.Buffers.MessageBuffer).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.MosaicBuffer=} obj
 * @returns {Catapult.Buffers.MosaicBuffer}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.mosaics = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? (obj || new Catapult.Buffers.MosaicBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.TransferTransactionBuffer.prototype.mosaicsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.TransferTransactionBuffer.startTransferTransactionBuffer = function(builder) {
  builder.startObject(12);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.TransferTransactionBuffer.addSize = function(builder, size) {
  builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addSignature = function(builder, signatureOffset) {
  builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createSignatureVector = function(builder, data) {
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
Catapult.Buffers.TransferTransactionBuffer.startSignatureVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addSigner = function(builder, signerOffset) {
  builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createSignerVector = function(builder, data) {
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
Catapult.Buffers.TransferTransactionBuffer.startSignerVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.TransferTransactionBuffer.addVersion = function(builder, version) {
  builder.addFieldInt32(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.TransferTransactionBuffer.addType = function(builder, type) {
  builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addMaxFee = function(builder, maxFeeOffset) {
  builder.addFieldOffset(5, maxFeeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createMaxFeeVector = function(builder, data) {
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
Catapult.Buffers.TransferTransactionBuffer.startMaxFeeVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
  builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createDeadlineVector = function(builder, data) {
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
Catapult.Buffers.TransferTransactionBuffer.startDeadlineVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} recipientOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addRecipient = function(builder, recipientOffset) {
  builder.addFieldOffset(7, recipientOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createRecipientVector = function(builder, data) {
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
Catapult.Buffers.TransferTransactionBuffer.startRecipientVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} messageSize
 */
Catapult.Buffers.TransferTransactionBuffer.addMessageSize = function(builder, messageSize) {
  builder.addFieldInt16(8, messageSize, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numMosaics
 */
Catapult.Buffers.TransferTransactionBuffer.addNumMosaics = function(builder, numMosaics) {
  builder.addFieldInt8(9, numMosaics, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(10, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mosaicsOffset
 */
Catapult.Buffers.TransferTransactionBuffer.addMosaics = function(builder, mosaicsOffset) {
  builder.addFieldOffset(11, mosaicsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createMosaicsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.TransferTransactionBuffer.startMosaicsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.endTransferTransactionBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.TransferTransactionBuffer.finishTransferTransactionBufferBuffer = function(builder, offset) {
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
 * @param {flatbuffers.Offset} recipientOffset
 * @param {number} messageSize
 * @param {number} numMosaics
 * @param {flatbuffers.Offset} messageOffset
 * @param {flatbuffers.Offset} mosaicsOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.TransferTransactionBuffer.createTransferTransactionBuffer = function(builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, recipientOffset, messageSize, numMosaics, messageOffset, mosaicsOffset) {
  Catapult.Buffers.TransferTransactionBuffer.startTransferTransactionBuffer(builder);
  Catapult.Buffers.TransferTransactionBuffer.addSize(builder, size);
  Catapult.Buffers.TransferTransactionBuffer.addSignature(builder, signatureOffset);
  Catapult.Buffers.TransferTransactionBuffer.addSigner(builder, signerOffset);
  Catapult.Buffers.TransferTransactionBuffer.addVersion(builder, version);
  Catapult.Buffers.TransferTransactionBuffer.addType(builder, type);
  Catapult.Buffers.TransferTransactionBuffer.addMaxFee(builder, maxFeeOffset);
  Catapult.Buffers.TransferTransactionBuffer.addDeadline(builder, deadlineOffset);
  Catapult.Buffers.TransferTransactionBuffer.addRecipient(builder, recipientOffset);
  Catapult.Buffers.TransferTransactionBuffer.addMessageSize(builder, messageSize);
  Catapult.Buffers.TransferTransactionBuffer.addNumMosaics(builder, numMosaics);
  Catapult.Buffers.TransferTransactionBuffer.addMessage(builder, messageOffset);
  Catapult.Buffers.TransferTransactionBuffer.addMosaics(builder, mosaicsOffset);
  return Catapult.Buffers.TransferTransactionBuffer.endTransferTransactionBuffer(builder);
}

// Exports for Node.js and RequireJS
export default Catapult;

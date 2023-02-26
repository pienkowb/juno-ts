// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class AbsoluteTxPosition {
  static encode(message: AbsoluteTxPosition, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.blockHeight);

    writer.uint32(16);
    writer.uint64(message.txIndex);
  }

  static decode(reader: Reader, length: i32): AbsoluteTxPosition {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AbsoluteTxPosition();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;

        case 2:
          message.txIndex = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  blockHeight: u64;
  txIndex: u64;

  constructor(blockHeight: u64 = 0, txIndex: u64 = 0) {
    this.blockHeight = blockHeight;
    this.txIndex = txIndex;
  }
}

export function encodeAbsoluteTxPosition(
  message: AbsoluteTxPosition
): Uint8Array {
  return Protobuf.encode(message, AbsoluteTxPosition.encode);
}

export function decodeAbsoluteTxPosition(
  buffer: Uint8Array
): AbsoluteTxPosition {
  return Protobuf.decode<AbsoluteTxPosition>(buffer, AbsoluteTxPosition.decode);
}

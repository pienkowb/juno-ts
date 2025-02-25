// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgStoreCodeResponse {
  static encode(message: MsgStoreCodeResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.codeId);
  }

  static decode(reader: Reader, length: i32): MsgStoreCodeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgStoreCodeResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  codeId: u64;

  constructor(codeId: u64 = 0) {
    this.codeId = codeId;
  }
}

export function encodeMsgStoreCodeResponse(
  message: MsgStoreCodeResponse
): Uint8Array {
  return Protobuf.encode(message, MsgStoreCodeResponse.encode);
}

export function decodeMsgStoreCodeResponse(
  buffer: Uint8Array
): MsgStoreCodeResponse {
  return Protobuf.decode<MsgStoreCodeResponse>(
    buffer,
    MsgStoreCodeResponse.decode
  );
}

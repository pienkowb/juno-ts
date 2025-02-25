// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgDelegateResponse {
  static encode(message: MsgDelegateResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgDelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDelegateResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgDelegateResponse(
  message: MsgDelegateResponse
): Uint8Array {
  return Protobuf.encode(message, MsgDelegateResponse.encode);
}

export function decodeMsgDelegateResponse(
  buffer: Uint8Array
): MsgDelegateResponse {
  return Protobuf.decode<MsgDelegateResponse>(
    buffer,
    MsgDelegateResponse.decode
  );
}

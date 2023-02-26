// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ResponseResultType } from "./ResponseResultType";

@unmanaged
export class MsgAcknowledgementResponse {
  static encode(message: MsgAcknowledgementResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgementResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgementResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgAcknowledgementResponse(
  message: MsgAcknowledgementResponse
): Uint8Array {
  return Protobuf.encode(message, MsgAcknowledgementResponse.encode);
}

export function decodeMsgAcknowledgementResponse(
  buffer: Uint8Array
): MsgAcknowledgementResponse {
  return Protobuf.decode<MsgAcknowledgementResponse>(
    buffer,
    MsgAcknowledgementResponse.decode
  );
}

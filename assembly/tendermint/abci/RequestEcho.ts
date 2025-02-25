// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class RequestEcho {
  static encode(message: RequestEcho, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.message);
  }

  static decode(reader: Reader, length: i32): RequestEcho {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RequestEcho();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  message: string;

  constructor(message: string = "") {
    this.message = message;
  }
}

export function encodeRequestEcho(message: RequestEcho): Uint8Array {
  return Protobuf.encode(message, RequestEcho.encode);
}

export function decodeRequestEcho(buffer: Uint8Array): RequestEcho {
  return Protobuf.decode<RequestEcho>(buffer, RequestEcho.decode);
}

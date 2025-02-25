// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class QueryMethodDescriptor {
  static encode(message: QueryMethodDescriptor, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(18);
    writer.string(message.fullQueryPath);
  }

  static decode(reader: Reader, length: i32): QueryMethodDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryMethodDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.fullQueryPath = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  fullQueryPath: string;

  constructor(name: string = "", fullQueryPath: string = "") {
    this.name = name;
    this.fullQueryPath = fullQueryPath;
  }
}

export function encodeQueryMethodDescriptor(
  message: QueryMethodDescriptor
): Uint8Array {
  return Protobuf.encode(message, QueryMethodDescriptor.encode);
}

export function decodeQueryMethodDescriptor(
  buffer: Uint8Array
): QueryMethodDescriptor {
  return Protobuf.decode<QueryMethodDescriptor>(
    buffer,
    QueryMethodDescriptor.decode
  );
}

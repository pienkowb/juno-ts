// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class App {
  static encode(message: App, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.protocol);

    writer.uint32(18);
    writer.string(message.software);
  }

  static decode(reader: Reader, length: i32): App {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new App();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;

        case 2:
          message.software = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  protocol: u64;
  software: string;

  constructor(protocol: u64 = 0, software: string = "") {
    this.protocol = protocol;
    this.software = software;
  }
}

export function encodeApp(message: App): Uint8Array {
  return Protobuf.encode(message, App.encode);
}

export function decodeApp(buffer: Uint8Array): App {
  return Protobuf.decode<App>(buffer, App.decode);
}

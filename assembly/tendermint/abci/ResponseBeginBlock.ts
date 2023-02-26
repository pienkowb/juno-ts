// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Event } from "./Event";

export class ResponseBeginBlock {
  static encode(message: ResponseBeginBlock, writer: Writer): void {
    const events = message.events;
    for (let i: i32 = 0; i < events.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Event.encode(events[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ResponseBeginBlock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseBeginBlock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  events: Array<Event>;

  constructor(events: Array<Event> = []) {
    this.events = events;
  }
}

export function encodeResponseBeginBlock(
  message: ResponseBeginBlock
): Uint8Array {
  return Protobuf.encode(message, ResponseBeginBlock.encode);
}

export function decodeResponseBeginBlock(
  buffer: Uint8Array
): ResponseBeginBlock {
  return Protobuf.decode<ResponseBeginBlock>(buffer, ResponseBeginBlock.decode);
}

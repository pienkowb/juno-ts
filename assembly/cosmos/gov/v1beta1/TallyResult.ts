// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class TallyResult {
  static encode(message: TallyResult, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.yes);

    writer.uint32(18);
    writer.string(message.abstain);

    writer.uint32(26);
    writer.string(message.no);

    writer.uint32(34);
    writer.string(message.noWithVeto);
  }

  static decode(reader: Reader, length: i32): TallyResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TallyResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.string();
          break;

        case 2:
          message.abstain = reader.string();
          break;

        case 3:
          message.no = reader.string();
          break;

        case 4:
          message.noWithVeto = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  yes: string;
  abstain: string;
  no: string;
  noWithVeto: string;

  constructor(
    yes: string = "",
    abstain: string = "",
    no: string = "",
    noWithVeto: string = ""
  ) {
    this.yes = yes;
    this.abstain = abstain;
    this.no = no;
    this.noWithVeto = noWithVeto;
  }
}

export function encodeTallyResult(message: TallyResult): Uint8Array {
  return Protobuf.encode(message, TallyResult.encode);
}

export function decodeTallyResult(buffer: Uint8Array): TallyResult {
  return Protobuf.decode<TallyResult>(buffer, TallyResult.decode);
}

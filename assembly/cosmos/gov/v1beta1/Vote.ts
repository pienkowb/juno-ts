// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { WeightedVoteOption } from "./WeightedVoteOption";
import { VoteOption } from "./VoteOption";

export class Vote {
  static encode(message: Vote, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);

    writer.uint32(18);
    writer.string(message.voter);

    writer.uint32(24);
    writer.int32(message.option);

    const options = message.options;
    for (let i: i32 = 0; i < options.length; ++i) {
      writer.uint32(34);
      writer.fork();
      WeightedVoteOption.encode(options[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Vote {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Vote();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = reader.int32();
          break;

        case 4:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;
  voter: string;
  option: VoteOption;
  options: Array<WeightedVoteOption>;

  constructor(
    proposalId: u64 = 0,
    voter: string = "",
    option: VoteOption = 0,
    options: Array<WeightedVoteOption> = []
  ) {
    this.proposalId = proposalId;
    this.voter = voter;
    this.option = option;
    this.options = options;
  }
}

export function encodeVote(message: Vote): Uint8Array {
  return Protobuf.encode(message, Vote.encode);
}

export function decodeVote(buffer: Uint8Array): Vote {
  return Protobuf.decode<Vote>(buffer, Vote.decode);
}

// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UnbondingDelegationEntry } from "./UnbondingDelegationEntry";

export class UnbondingDelegation {
  static encode(message: UnbondingDelegation, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegatorAddress);

    writer.uint32(18);
    writer.string(message.validatorAddress);

    const entries = message.entries;
    for (let i: i32 = 0; i < entries.length; ++i) {
      writer.uint32(26);
      writer.fork();
      UnbondingDelegationEntry.encode(entries[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): UnbondingDelegation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UnbondingDelegation();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.entries.push(
            UnbondingDelegationEntry.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegatorAddress: string;
  validatorAddress: string;
  entries: Array<UnbondingDelegationEntry>;

  constructor(
    delegatorAddress: string = "",
    validatorAddress: string = "",
    entries: Array<UnbondingDelegationEntry> = []
  ) {
    this.delegatorAddress = delegatorAddress;
    this.validatorAddress = validatorAddress;
    this.entries = entries;
  }
}

export function encodeUnbondingDelegation(
  message: UnbondingDelegation
): Uint8Array {
  return Protobuf.encode(message, UnbondingDelegation.encode);
}

export function decodeUnbondingDelegation(
  buffer: Uint8Array
): UnbondingDelegation {
  return Protobuf.decode<UnbondingDelegation>(
    buffer,
    UnbondingDelegation.decode
  );
}

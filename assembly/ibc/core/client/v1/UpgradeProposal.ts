// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/Plan";
import { Any } from "../../../../google/protobuf/Any";

export class UpgradeProposal {
  static encode(message: UpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const plan = message.plan;
    if (plan !== null) {
      writer.uint32(26);
      writer.fork();
      Plan.encode(plan, writer);
      writer.ldelim();
    }

    const upgradedClientState = message.upgradedClientState;
    if (upgradedClientState !== null) {
      writer.uint32(34);
      writer.fork();
      Any.encode(upgradedClientState, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): UpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;

        case 4:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  plan: Plan | null;
  upgradedClientState: Any | null;

  constructor(
    title: string = "",
    description: string = "",
    plan: Plan | null = null,
    upgradedClientState: Any | null = null
  ) {
    this.title = title;
    this.description = description;
    this.plan = plan;
    this.upgradedClientState = upgradedClientState;
  }
}

export function encodeUpgradeProposal(message: UpgradeProposal): Uint8Array {
  return Protobuf.encode(message, UpgradeProposal.encode);
}

export function decodeUpgradeProposal(buffer: Uint8Array): UpgradeProposal {
  return Protobuf.decode<UpgradeProposal>(buffer, UpgradeProposal.decode);
}

// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { BlockParams } from "./BlockParams";
import { EvidenceParams } from "../types/EvidenceParams";
import { ValidatorParams } from "../types/ValidatorParams";
import { VersionParams } from "../types/VersionParams";

export class ConsensusParams {
  static encode(message: ConsensusParams, writer: Writer): void {
    const block = message.block;
    if (block !== null) {
      writer.uint32(10);
      writer.fork();
      BlockParams.encode(block, writer);
      writer.ldelim();
    }

    const evidence = message.evidence;
    if (evidence !== null) {
      writer.uint32(18);
      writer.fork();
      EvidenceParams.encode(evidence, writer);
      writer.ldelim();
    }

    const validator = message.validator;
    if (validator !== null) {
      writer.uint32(26);
      writer.fork();
      ValidatorParams.encode(validator, writer);
      writer.ldelim();
    }

    const version = message.version;
    if (version !== null) {
      writer.uint32(34);
      writer.fork();
      VersionParams.encode(version, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ConsensusParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConsensusParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block: BlockParams | null;
  evidence: EvidenceParams | null;
  validator: ValidatorParams | null;
  version: VersionParams | null;

  constructor(
    block: BlockParams | null = null,
    evidence: EvidenceParams | null = null,
    validator: ValidatorParams | null = null,
    version: VersionParams | null = null
  ) {
    this.block = block;
    this.evidence = evidence;
    this.validator = validator;
    this.version = version;
  }
}

export function encodeConsensusParams(message: ConsensusParams): Uint8Array {
  return Protobuf.encode(message, ConsensusParams.encode);
}

export function decodeConsensusParams(buffer: Uint8Array): ConsensusParams {
  return Protobuf.decode<ConsensusParams>(buffer, ConsensusParams.decode);
}

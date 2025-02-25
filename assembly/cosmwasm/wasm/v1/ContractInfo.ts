// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { AbsoluteTxPosition } from "./AbsoluteTxPosition";
import { Any } from "../../../google/protobuf/Any";

export class ContractInfo {
  static encode(message: ContractInfo, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.codeId);

    writer.uint32(18);
    writer.string(message.creator);

    writer.uint32(26);
    writer.string(message.admin);

    writer.uint32(34);
    writer.string(message.label);

    const created = message.created;
    if (created !== null) {
      writer.uint32(42);
      writer.fork();
      AbsoluteTxPosition.encode(created, writer);
      writer.ldelim();
    }

    writer.uint32(50);
    writer.string(message.ibcPortId);

    const extension = message.extension;
    if (extension !== null) {
      writer.uint32(58);
      writer.fork();
      Any.encode(extension, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ContractInfo {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ContractInfo();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.admin = reader.string();
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;

        case 6:
          message.ibcPortId = reader.string();
          break;

        case 7:
          message.extension = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  codeId: u64;
  creator: string;
  admin: string;
  label: string;
  created: AbsoluteTxPosition | null;
  ibcPortId: string;
  extension: Any | null;

  constructor(
    codeId: u64 = 0,
    creator: string = "",
    admin: string = "",
    label: string = "",
    created: AbsoluteTxPosition | null = null,
    ibcPortId: string = "",
    extension: Any | null = null
  ) {
    this.codeId = codeId;
    this.creator = creator;
    this.admin = admin;
    this.label = label;
    this.created = created;
    this.ibcPortId = ibcPortId;
    this.extension = extension;
  }
}

export function encodeContractInfo(message: ContractInfo): Uint8Array {
  return Protobuf.encode(message, ContractInfo.encode);
}

export function decodeContractInfo(buffer: Uint8Array): ContractInfo {
  return Protobuf.decode<ContractInfo>(buffer, ContractInfo.decode);
}

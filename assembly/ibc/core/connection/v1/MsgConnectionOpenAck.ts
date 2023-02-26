// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Version } from "./Version";
import { Any } from "../../../../google/protobuf/Any";
import { Height } from "../../client/v1/Height";

export class MsgConnectionOpenAck {
  static encode(message: MsgConnectionOpenAck, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.connectionId);

    writer.uint32(18);
    writer.string(message.counterpartyConnectionId);

    const version = message.version;
    if (version !== null) {
      writer.uint32(26);
      writer.fork();
      Version.encode(version, writer);
      writer.ldelim();
    }

    const clientState = message.clientState;
    if (clientState !== null) {
      writer.uint32(34);
      writer.fork();
      Any.encode(clientState, writer);
      writer.ldelim();
    }

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(42);
      writer.fork();
      Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(50);
    writer.bytes(message.proofTry);

    writer.uint32(58);
    writer.bytes(message.proofClient);

    writer.uint32(66);
    writer.bytes(message.proofConsensus);

    const consensusHeight = message.consensusHeight;
    if (consensusHeight !== null) {
      writer.uint32(74);
      writer.fork();
      Height.encode(consensusHeight, writer);
      writer.ldelim();
    }

    writer.uint32(82);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgConnectionOpenAck {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenAck();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.counterpartyConnectionId = reader.string();
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proofTry = reader.bytes();
          break;

        case 7:
          message.proofClient = reader.bytes();
          break;

        case 8:
          message.proofConsensus = reader.bytes();
          break;

        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  connectionId: string;
  counterpartyConnectionId: string;
  version: Version | null;
  clientState: Any | null;
  proofHeight: Height | null;
  proofTry: Uint8Array;
  proofClient: Uint8Array;
  proofConsensus: Uint8Array;
  consensusHeight: Height | null;
  signer: string;

  constructor(
    connectionId: string = "",
    counterpartyConnectionId: string = "",
    version: Version | null = null,
    clientState: Any | null = null,
    proofHeight: Height | null = null,
    proofTry: Uint8Array = new Uint8Array(0),
    proofClient: Uint8Array = new Uint8Array(0),
    proofConsensus: Uint8Array = new Uint8Array(0),
    consensusHeight: Height | null = null,
    signer: string = ""
  ) {
    this.connectionId = connectionId;
    this.counterpartyConnectionId = counterpartyConnectionId;
    this.version = version;
    this.clientState = clientState;
    this.proofHeight = proofHeight;
    this.proofTry = proofTry;
    this.proofClient = proofClient;
    this.proofConsensus = proofConsensus;
    this.consensusHeight = consensusHeight;
    this.signer = signer;
  }
}

export function encodeMsgConnectionOpenAck(
  message: MsgConnectionOpenAck
): Uint8Array {
  return Protobuf.encode(message, MsgConnectionOpenAck.encode);
}

export function decodeMsgConnectionOpenAck(
  buffer: Uint8Array
): MsgConnectionOpenAck {
  return Protobuf.decode<MsgConnectionOpenAck>(
    buffer,
    MsgConnectionOpenAck.decode
  );
}

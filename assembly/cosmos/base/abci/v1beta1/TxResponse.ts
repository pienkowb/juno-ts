// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ABCIMessageLog } from "./ABCIMessageLog";
import { Any } from "../../../../google/protobuf/Any";
import { Event } from "../../../../tendermint/abci/Event";

export class TxResponse {
  static encode(message: TxResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.height);

    writer.uint32(18);
    writer.string(message.txhash);

    writer.uint32(26);
    writer.string(message.codespace);

    writer.uint32(32);
    writer.uint32(message.code);

    writer.uint32(42);
    writer.string(message.data);

    writer.uint32(50);
    writer.string(message.rawLog);

    const logs = message.logs;
    for (let i: i32 = 0; i < logs.length; ++i) {
      writer.uint32(58);
      writer.fork();
      ABCIMessageLog.encode(logs[i], writer);
      writer.ldelim();
    }

    writer.uint32(66);
    writer.string(message.info);

    writer.uint32(72);
    writer.int64(message.gasWanted);

    writer.uint32(80);
    writer.int64(message.gasUsed);

    const tx = message.tx;
    if (tx !== null) {
      writer.uint32(90);
      writer.fork();
      Any.encode(tx, writer);
      writer.ldelim();
    }

    writer.uint32(98);
    writer.string(message.timestamp);

    const events = message.events;
    for (let i: i32 = 0; i < events.length; ++i) {
      writer.uint32(106);
      writer.fork();
      Event.encode(events[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TxResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TxResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.txhash = reader.string();
          break;

        case 3:
          message.codespace = reader.string();
          break;

        case 4:
          message.code = reader.uint32();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.rawLog = reader.string();
          break;

        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;

        case 8:
          message.info = reader.string();
          break;

        case 9:
          message.gasWanted = reader.int64();
          break;

        case 10:
          message.gasUsed = reader.int64();
          break;

        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;

        case 12:
          message.timestamp = reader.string();
          break;

        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  height: i64;
  txhash: string;
  codespace: string;
  code: u32;
  data: string;
  rawLog: string;
  logs: Array<ABCIMessageLog>;
  info: string;
  gasWanted: i64;
  gasUsed: i64;
  tx: Any | null;
  timestamp: string;
  events: Array<Event>;

  constructor(
    height: i64 = 0,
    txhash: string = "",
    codespace: string = "",
    code: u32 = 0,
    data: string = "",
    rawLog: string = "",
    logs: Array<ABCIMessageLog> = [],
    info: string = "",
    gasWanted: i64 = 0,
    gasUsed: i64 = 0,
    tx: Any | null = null,
    timestamp: string = "",
    events: Array<Event> = []
  ) {
    this.height = height;
    this.txhash = txhash;
    this.codespace = codespace;
    this.code = code;
    this.data = data;
    this.rawLog = rawLog;
    this.logs = logs;
    this.info = info;
    this.gasWanted = gasWanted;
    this.gasUsed = gasUsed;
    this.tx = tx;
    this.timestamp = timestamp;
    this.events = events;
  }
}

export function encodeTxResponse(message: TxResponse): Uint8Array {
  return Protobuf.encode(message, TxResponse.encode);
}

export function decodeTxResponse(buffer: Uint8Array): TxResponse {
  return Protobuf.decode<TxResponse>(buffer, TxResponse.decode);
}

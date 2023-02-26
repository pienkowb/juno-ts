/// <reference types="@as-pect/assembly/types/as-pect" />

import {
  MsgExecuteContract,
  encodeMsgExecuteContract,
  decodeMsgExecuteContract,
} from "../assembly/cosmwasm/wasm/v1/MsgExecuteContract";
import { Coin } from "../assembly/cosmos/base/v1beta1/Coin";

describe("CosmWasm", () => {
  test("decodes a contract execution message", () => {
    const msg = new MsgExecuteContract(
      "juno1hjct6q7npsspsg3dgvzk3sdf89spmlpf74d4wz",
      "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
      new Uint8Array(128),
      [new Coin("juno", "200")]
    );

    const encodedMsg = encodeMsgExecuteContract(msg);
    const decodedMsg = decodeMsgExecuteContract(encodedMsg);

    expect(decodedMsg.sender).toBe(msg.sender);
    expect(decodedMsg.contract).toBe(msg.contract);

    expect(decodedMsg.msg).toHaveLength(128);
    expect(decodedMsg.funds).toHaveLength(1);

    const coin = decodedMsg.funds[0] as Coin;

    expect(coin.denom).toBe("juno");
    expect(coin.amount).toBe("200");
  });
});

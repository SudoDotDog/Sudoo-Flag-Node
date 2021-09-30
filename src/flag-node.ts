/**
 * @author WMXPY
 * @namespace FlagNode
 * @description FlagNode
 */

import { FlagManager } from "@sudoo/flag";

export class NodeFlagManager<F extends string = string> {

    public static fromFolder<F extends string = string>(): NodeFlagManager<F> {

        return new NodeFlagManager<F>();
    }

    private readonly _flag: FlagManager<F>;

    private constructor() {

        this._flag = FlagManager.empty<F>();
    }
}

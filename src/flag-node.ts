/**
 * @author WMXPY
 * @namespace FlagNode
 * @description FlagNode
 */

import { FlagManager } from "@sudoo/flag";

export class NodeFlagManager<F extends string = string> {

    public static fromFolder<F extends string = string>(folder: string): NodeFlagManager<F> {

        const flag: FlagManager<F> = FlagManager.fromStorage()

        return new NodeFlagManager<F>();
    }

    private readonly _flag: FlagManager<F>;

    private constructor(flag: FlagManager<F>) {

        this._flag = flag;
    }
}

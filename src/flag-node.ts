/**
 * @author WMXPY
 * @namespace FlagNode
 * @description FlagNode
 */

import { FlagManager } from "@sudoo/flag";
import { NodeFlagStorage } from "./declare";
import { utilGetFolderStorage } from "./util";

export class NodeFlagManager<F extends string = string> {

    public static async fromFolder<F extends string = string>(folder: string): Promise<NodeFlagManager<F>> {

        const storage: NodeFlagStorage<F> = await utilGetFolderStorage<F>(folder);

        const flag: FlagManager<F> = FlagManager.fromStorage(storage.originalStorage);

        return new NodeFlagManager<F>(flag);
    }

    private readonly _flag: FlagManager<F>;

    private constructor(flag: FlagManager<F>) {

        this._flag = flag;
    }
}

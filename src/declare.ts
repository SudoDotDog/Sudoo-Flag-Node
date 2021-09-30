/**
 * @author WMXPY
 * @namespace FlagNode
 * @description Declare
 */

import { FlagStorage } from "@sudoo/flag";

export type NodeFlagStorage<F extends string> = {

    readonly originalStorage: FlagStorage<F>;
    readonly targets: string[];
};

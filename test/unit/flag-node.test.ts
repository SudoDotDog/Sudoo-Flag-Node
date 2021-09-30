/**
 * @author WMXPY
 * @namespace FlagNode
 * @description FlagNode
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { NodeFlagManager } from "../../src";

describe('Given {NodeFlagManager} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('flag-node-flag-node');

    it('should be able to construct', (): void => {

        const instance: NodeFlagManager = NodeFlagManager.empty();
        expect(instance).to.be.instanceOf(NodeFlagManager);
    });
});

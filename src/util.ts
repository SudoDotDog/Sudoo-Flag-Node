/**
 * @author WMXPY
 * @namespace FlagNode
 * @description Util
 */

import { FlagStorage } from "@sudoo/flag";
import { directoryFiles, isFile, readTextFile } from "@sudoo/io";
import * as Path from "path";
import { NodeFlagStorage } from "./declare";

export const utilGetFolderStorage = async <F extends string>(path: string): Promise<NodeFlagStorage<F>> => {

    const resolvedPath: string = Path.resolve(path);

    const files: string[] = await directoryFiles(resolvedPath);
    const results: string[] = [];

    let storage: FlagStorage<F> | null = null;
    for (const file of files) {

        const resolvedFile: string = Path.join(resolvedPath, file);
        const fileIsFile: boolean = await isFile(resolvedFile);

        if (fileIsFile) {

            if (file === '.sudoo-flag-storage') {

                const storageRaw: string = await readTextFile(resolvedFile);
                const parsedStorage: FlagStorage<F> = JSON.parse(storageRaw);

                storage = parsedStorage;
            } else {

                results.push(resolvedFile);
            }
        }
    }

    if (storage === null) {

        storage = {
            flags: [],
            targets: results,
        };
    }

    return {
        originalStorage: storage,
        targets: results,
    };
};

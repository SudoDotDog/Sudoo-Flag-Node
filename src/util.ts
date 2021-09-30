/**
 * @author WMXPY
 * @namespace FlagNode
 * @description Util
 */

import { directoryFiles, isFolder } from "@sudoo/io";
import * as Path from "path";

export const utilGetFolderTargets = async (path: string): Promise<string[]> => {

    const resolvedPath: string = Path.resolve(path);

    const files: string[] = await directoryFiles(resolvedPath);
    const results: string[] = [];

    for (const file of files) {

        const fileIsFolder: boolean = await isFolder(file);
        if (fileIsFolder) {
            results.push(file);
        }
    }

    return results;
};

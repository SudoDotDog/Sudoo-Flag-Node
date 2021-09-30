/**
 * @author WMXPY
 * @namespace FlagNode
 * @description Util
 */

import { directoryFiles } from "@sudoo/io";
import * as Path from "path";

export const utilGetFolderTargets = async (path: string): Promise<string[]> => {

    const resolvedPath: string = Path.resolve(path);

    const files: string[] = await directoryFiles(resolvedPath);
    return files;
};

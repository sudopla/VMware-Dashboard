/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ShapeTemplateObservables } from "../interfaces/icon-interfaces";
export declare const changeHandlerCallbacks: ShapeTemplateObservables;
export declare class ShapeTemplateObserver {
    private static singleInstance;
    private callbacks;
    private constructor();
    static readonly instance: ShapeTemplateObserver;
    subscribeTo(shapeName: string, changeHandlerCallback: Function): () => void;
    emitChanges(shapeName: string, template: string): void;
}

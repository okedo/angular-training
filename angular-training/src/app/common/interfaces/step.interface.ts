import { Resource } from "./resource.interface";

export interface Step {
    order: number,
    description: string,
    usedResources: Array<Resource>
}
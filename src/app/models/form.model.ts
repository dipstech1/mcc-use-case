export interface IFormModel {
    partId: number;
    sections: ISection[]
}

interface ISection {
    "id": string,
    "name": string,
    "label": string,
    "value": string,
    "type": string,
}
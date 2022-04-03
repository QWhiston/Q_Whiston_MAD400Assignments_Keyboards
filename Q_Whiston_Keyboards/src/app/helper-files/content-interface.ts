export interface Content{
    id?: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string
    type?: string
    //what type of switches are on the keyboard (linear, tactile)
    switches: string
    tags?: string[]
}
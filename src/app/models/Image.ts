export class Image{

    constructor(
        public id: number,
        public urlForSmallerDimension : string,
        public urlForLargerDimension : string,
        public title : string,
        public description : string,
        public likes : number
    ){}
}
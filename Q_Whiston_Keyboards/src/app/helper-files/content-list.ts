class ContentList{
    //array of type Content
    private keyboards: Array<Content>;

    //constructor sets array empty
    constructor(keyboards: Content){
        this.keyboards = []
    }

    //getter function that returns array
    get(){
        return this.keyboards;
    }

    //append to last element in array
    addToArray(item: Content){
        this.keyboards.push(item);
    }

    //return size of array
    arrayLength(){
        return this.keyboards.length
    }


    info(index: number){
        console.log("Title: ", this.keyboards[index].title);
        console.log("Description : ", this.keyboards[index].description);
        console.log("Creator : ", this.keyboards[index].creator);
        console.log("imgURL : ", this.keyboards[index].imgURL);
        console.log("Type : ", this.keyboards[index].type);
        console.log("Switches: ", this.keyboards[index].switches)
    }

}
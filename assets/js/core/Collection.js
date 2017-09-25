class Collection{

    constructor(){
        this.data = [];
    }

    add(item){
        this.data.push(item);
    }

    remove(index){
        this.data.delete(index);
    }

    create(data){
        return this.data = data;
    }

}

export default Collection;

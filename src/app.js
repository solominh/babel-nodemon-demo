import path from 'path';

console.log('App.js loaded');


class User{

    constructor(name){
        this.name = name;
    }

    async load(){
        const value =await Promise.resolve('hehe');
        return value;
    }
}


export default User;

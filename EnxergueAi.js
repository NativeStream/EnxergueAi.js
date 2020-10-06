class EnxergaAi {
    constructor(obj){
        this._vueObject= obj;
        this._beforeCreate = angular
            .module('coisa', [])
            .controller(obj.el, this.generateCallBackMethodsAndProps);
        console.log(obj)
        this._render();
    }

    generateCallBackMethodsAndProps(isso){
        isso = {...isso, ...(this._vueObject.data)()};
    }

    _render(){
       (() => this._beforeCreate)() 
    }
}

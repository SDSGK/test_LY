export default{
    getTypes:function(instence){
       var type = Object.prototype.toString.call(instence).slice(8,-1);
       return type;
    }
}
/**
 * Created by dingding on 17/10/17.
 */
var arguments = process.argv.splice(2);
function f (arg) {
    return arg.reduce((a,b)=>a=parseInt(a)+parseInt(b));
}
f(arguments);
console.log(f(arguments));
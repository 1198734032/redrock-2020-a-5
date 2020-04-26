let input = document.getElementById('input');
let output=document.getElementById('output');
let data = {
    value:input.value
}

const handler = {
    get(target, key) {
       return target[key]
    },
    set(target, key, value) {
       target[key] = value ;
       console.log(`我被设为${value}`)

    }
};

let proxy = new Proxy(data,handler)

input.oninput = _ => { 
     proxy.value = input.value;
     output.value = proxy.value
}
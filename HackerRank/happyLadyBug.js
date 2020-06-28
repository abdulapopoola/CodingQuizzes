function ladyBug(input) {
    let colors = input.split('');
    if(input.includes('_')) {
        let stripped = input.replace(/_/g, '').split('');        
        let len = stripped.length;        
        if(!len) {
            return 'YES';
        }
        if(len % 2){
            let spaces = input.length - len;
            let map = {};
            let count = 0;
            let chars = new Array(26).fill(0);
            stripped.forEach(val => {
               let charCode = val.charCodeAt(0) - 'A'.charCodeAt(0);
               if(chars[charCode] === 0){
                   count++;
               }
               chars[charCode]++;
            });
            let singles = chars.filter(a => a === 1).length;            
            if(singles || spaces < count - 1) {
                return 'NO';
            }
            return 'YES';
        }
        let charCodes = stripped.map(v => v.charCodeAt(0));
        let reduced = charCodes.reduce((acc, curr) => acc ^ curr, 0);
        if(reduced) {
            return 'NO';
        }
        return 'YES';        
    } else {
        let len = colors.length;
        if(len % 2){
            return 'NO';
        }
        for(let i = 1; i < len; i+= 2) {
            if(colors[i-1] !== colors[i]){
                return 'NO';
            }
        }
        return 'YES';
    }
}

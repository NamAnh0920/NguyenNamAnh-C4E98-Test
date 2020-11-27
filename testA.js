function findOppositeNumber(n, inputNumber) {
    return (n/2 + (inputNumber%(n/2))*2 - inputNumber);
}

console.log(findOppositeNumber(10, 3));

function merge2String(s1, s2) {
    var ans = '';
    if (s1.length > s2.length) {
        sTemp = s1.slice(s2.length);
        for (let cnt = 0; cnt < s2.length; cnt++) {
            ans += s1[cnt] + s2[cnt];
        }
        ans += sTemp;  
    } else {
        sTemp = s2.slice(s1.length);
        for (let cnt = 0; cnt < s1.length; cnt++) {
            ans += s1[cnt] + s2[cnt];
        }
        ans += sTemp;
    }
    return ans;
}



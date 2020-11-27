let input = document.getElementById('lucky-number');
let ans = Math.round(Math.random*10);
let id = 3;
let button = document.getElementById('numberAns');
button.onclick = function() {
    if (input.value == ans) {
        alert('Chúc mừng bạn đã chiến thắng.');
        ans = Math.round(Math.random*10);
    } else {
        id--;
        if (id == 0) {
            alert('Bạn đã hết lượt thử. Chúc bạn may mắn lần sau.')
            ans = Math.round(Math.random*10);
            id = 3;
        } else {
            alert(`Xin hãy thử lại. Bạn còn ${id} lần thử.\nKết quả trúng thưởng lần này là ${ans}.`);
        }
    }
    input.value = '';
}
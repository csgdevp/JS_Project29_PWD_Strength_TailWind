const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (event) => {
    const userPwdLength = event.target.value.length;
    const blurVal = 20 - userPwdLength * 2;
    background.style.filter = `blur(${blurVal}px)`
})

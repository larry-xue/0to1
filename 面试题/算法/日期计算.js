function dateCalc(date) {
    const d1 = new Date(date);
    const d2 = new Date();
    let time = d2 - d1;
    time = time < 0 ? -time : time;
    time /= 1000;
    const day = Math.floor(time / (3600 * 24));
    const hour = Math.floor((time % (24 * 3600)) / 3600);
    const min = Math.floor((time % 3600) / 60);
    const sec = Math.floor(time % 60);
    console.log(`距离今天: ${day} 天, ${hour} 小时, ${min} 分, ${sec} 秒`)
}

dateCalc('2032-3-30')
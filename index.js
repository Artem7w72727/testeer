// Загрузка страницы
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1);
}

//Загрузить генератор
function startgen() {
    let hi = document.querySelector('.hi')
    hi.classList.add('hiun')
    let gen = document.querySelector('.number')
    gen.classList.add('active')
}

function startque() {
    let hi = document.querySelector('.hi')
    hi.classList.add('hiun')
    let que = document.querySelector('.question')
    que.classList.add('active')
}


function back() {
    let check1 = document.querySelector('.number');
    let check2 = document.querySelector('.question');
    const d2s = check1.classList.contains("active");
    const d1s = check2.classList.contains("active");
    let hi = document.querySelector('.hi')

    hi.classList.remove('hiun')
    if (d2s == true) {
        check1.classList.remove('active')
    }
    if (d1s == true) {
        check2.classList.remove('active')
    }
}

function gonumber() {
    let time1 = document.getElementById('set5')

    time1.innerHTML = '3...'
    setTimeout(() => {
        time1.innerHTML = '2...'
        setTimeout(() => {
            time1.innerHTML = '1...'
        }, 1000);
    }, 1000);

    let giveact2 = document.querySelector('.table-13')
    let giveact3 = document.querySelector('.table-03')
    let giveact4 = document.querySelector('.table-15')
    let giveact5 = document.querySelector('.table-07')
    let giveact6 = document.querySelector('.table-19')
    let giveact7 = document.querySelector('.table-11')

    let giveact11 = document.querySelector('.table-14')
    let giveact12 = document.querySelector('.table-08')
    let giveact13 = document.querySelector('.table-21')
    let giveact14 = document.querySelector('.table-13')
    let giveact15 = document.querySelector('.table-05')


    let giveact02 = document.getElementById('gaset1')
    let giveact03 = document.getElementById('gaset2')
    let giveact04 = document.getElementById('gaset3')
    let giveact05 = document.getElementById('gaset4')
    let giveact06 = document.getElementById('gaset5')

    let giveact011 = document.getElementById('gaset6')
    let giveact012 = document.getElementById('gaset7')
    let giveact013 = document.getElementById('gaset8')
    let giveact014 = document.getElementById('gaset9')
    let giveact015 = document.getElementById('gaset10')

    let math1 = Math.floor(Math.random() * 1000) + 1;
    let math2 = Math.floor(Math.random() * 1000) + 1;
    let math3 = Math.floor(Math.random() * 1000) + 1;
    let math4 = Math.floor(Math.random() * 1000) + 1;
    let math5 = Math.floor(Math.random() * 1000) + 1;
    let math6 = Math.floor(Math.random() * 1000) + 1;
    let math7 = Math.floor(Math.random() * 1000) + 1;
    let math8 = Math.floor(Math.random() * 1000) + 1;
    let math9 = Math.floor(Math.random() * 1000) + 1;
    let math10 = Math.floor(Math.random() * 1000) + 1;

    let tableon = document.querySelector('.result')
    tableon.classList.add('active')
    let navun = document.querySelector('.nav1')
    navun.classList.add('unactive')
    setTimeout(() => {
        time1.innerHTML = ''
        giveact11.classList.add('animationrandomactive')
        giveact011.innerHTML = math1;
        setTimeout(() => {
            giveact11.classList.remove('animationrandomactive')
            giveact12.classList.add('animationrandomactive')
            giveact011.innerHTML = '';
            giveact012.innerHTML = math2;
            setTimeout(() => {
                giveact12.classList.remove('animationrandomactive')
                giveact13.classList.add('animationrandomactive')
                giveact012.innerHTML = '';
                giveact013.innerHTML = math3;
                setTimeout(() => {
                    giveact13.classList.remove('animationrandomactive')
                    giveact14.classList.add('animationrandomactive')
                    giveact013.innerHTML = '';
                    giveact014.innerHTML = math4;
                    setTimeout(() => {
                        giveact14.classList.remove('animationrandomactive')
                        giveact15.classList.add('animationrandomactive')
                        giveact014.innerHTML = '';
                        giveact015.innerHTML = math5;
                        setTimeout(() => {
                            giveact15.classList.remove('animationrandomactive')
                            giveact2.classList.add('animationrandomactive')
                            giveact015.innerHTML = '';
                            giveact02.innerHTML = math6;
                            setTimeout(() => {
                                giveact2.classList.remove('animationrandomactive')
                                giveact3.classList.add('animationrandomactive')
                                giveact02.innerHTML = '';
                                giveact03.innerHTML = math7;
                                setTimeout(() => {
                                    giveact3.classList.remove('animationrandomactive')
                                    giveact4.classList.add('animationrandomactive')
                                    giveact03.innerHTML = '';
                                    giveact04.innerHTML = math8;
                                    setTimeout(() => {
                                        giveact4.classList.remove('animationrandomactive')
                                        giveact5.classList.add('animationrandomactive')
                                        giveact04.innerHTML = '';
                                        giveact05.innerHTML = math9;
                                        setTimeout(() => {
                                            giveact5.classList.remove('animationrandomactive')
                                            giveact6.classList.add('animationrandomactive')
                                            giveact05.innerHTML = '';
                                            giveact06.innerHTML = math10;
                                            setTimeout(() => {
                                                giveact6.classList.remove('animationrandomactive')
                                                giveact7.classList.add('animationrandomactive')
                                                giveact06.innerHTML = '';

                                                let btnres = document.querySelector('.backk')
                                                btnres.classList.add('active')

                                                let back = document.querySelector('.back2')
                                                back.classList.add('back2act')
                                                let result = Math.floor(Math.random() * 1000) + 1;
                                                document.getElementById('set').innerHTML = result

                                                document.getElementById('set2').innerHTML = `Your result: ${result}`
                                            }, 500)
                                        }, 450)
                                    }, 400)
                                }, 350)
                            }, 300)
                        }, 250)
                    }, 200)
                }, 150)
            }, 100)
        }, 50)
    }, 3000)
}

function backnum() {
    let btnres = document.querySelector('.backk')
    btnres.classList.remove('active')

    let tableon = document.querySelector('.result')
    let back = document.querySelector('.back2')
    back.classList.remove('back2act')
    tableon.classList.remove('active')
    let navun = document.querySelector('.nav1')
    navun.classList.remove('unactive')
    document.getElementById('set').innerHTML = ''

    document.getElementById('set2').innerHTML = ``
    let giveact7 = document.querySelector('.table-11')

    giveact7.classList.remove('animationrandomactive')

}

//Загрузить вопрос-ответ
function goquestion() {
    let nav2 = document.querySelector('.nav2')
    let menu = document.querySelector('.menu')

    document.getElementById('quest').value = ''
    nav2.classList.add('unactive')
    menu.classList.add('active')
}

function backque() {
    let nav2 = document.querySelector('.nav2')
    let menu = document.querySelector('.menu')

    nav2.classList.remove('unactive')
    menu.classList.remove('active')
}


function checklist() {
    alert('Soon...')
}


function goque() {
    let checkval = document.getElementById('quest').value;
    if (!checkval) return alert('Invalid Value. Please enter text')
    let ans = document.querySelector('.set7')
    ans.innerHTML = checkval;

    let check2 = document.querySelector('.table-0-01')
    let check8 = document.querySelector('.table-0-02')
    let check1 = document.querySelector('.table-0-03')
    let check7 = document.querySelector('.table-0-04')
    let check9 = document.querySelector('.table-0-05')
    let check3 = document.querySelector('.table-0-06')
    let check5 = document.querySelector('.table-0-07')
    let check4 = document.querySelector('.table-0-08')
    let check6 = document.querySelector('.table-0-09')

    let resultact = document.querySelector('.queres')
    resultact.classList.add('active')
    let start = document.querySelector('.set6')
    start.innerHTML = '3...'
    setTimeout(() => {
        start.innerHTML = '2...'
        setTimeout(() => {
            start.innerHTML = '1...'
        }, 1000);
    }, 1000);
    let sets = [
        'Бесспорно.',
        'Предрешено.',
        'Никаких сомнений.',
        'Определённо да.',
        'Мне кажется да.',
        'Вероятнее всего.',
        'Хорошие перспективы.',
        'Знаки говорят да.',
        'Да',
        'Спроси позже.',
        'Лучше не рассказывать.',
        'Даже не думай.',
        'Мой ответ нет.',
        'По моим данным нет.',
        'Весьма сомнительно.',
        'Нет'
    ];
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')

    let repl = Math.floor((Math.random() * sets.length));

    setTimeout(() => {
        start.innerHTML = ''
        check1.classList.add('animationrandomactive')
        setTimeout(() => {
            check1.classList.remove('animationrandomactive')
            check2.classList.add('animationrandomactive')
            setTimeout(() => {
                check2.classList.remove('animationrandomactive')
                check3.classList.add('animationrandomactive')
                setTimeout(() => {
                    check3.classList.remove('animationrandomactive')
                    check4.classList.add('animationrandomactive')
                    setTimeout(() => {
                        check4.classList.remove('animationrandomactive')
                        check5.classList.add('animationrandomactive')
                        setTimeout(() => {
                            check5.classList.remove('animationrandomactive')
                            check6.classList.add('animationrandomactive')
                            setTimeout(() => {
                                check6.classList.remove('animationrandomactive')
                                check7.classList.add('animationrandomactive')
                                setTimeout(() => {
                                    check7.classList.remove('animationrandomactive')
                                    check8.classList.add('animationrandomactive')
                                    setTimeout(() => {
                                        check8.classList.remove('animationrandomactive')
                                        check9.classList.add('animationrandomactive')
                                        setTimeout(() => {
                                            check9.classList.remove('animationrandomactive')
                                            let resultact = document.querySelector('.alolo')
                                            resultact.classList.add('unactive')
                                            let resultact1 = document.querySelector('.table-0-05-1')
                                            resultact1.classList.add('animationrandomactive')
                                            resultact1.classList.add('activee')

                                            setTimeout(() => {
                                                let inner = document.querySelector('.set8')
                                                let knop = document.querySelector('.btnbackba')
                                                knop.classList.add('active')
                                                inner.innerHTML = `<br>Answer: <b style="color: yellowgreen">${sets[repl]}</b>`
                                            }, 2000);
                                        }, 450);
                                    }, 400);
                                }, 350);
                            }, 300);
                        }, 250);
                    }, 200);
                }, 150);
            }, 100);
        }, 50);
    }, 3000);


}

function backans() {
    let resultact1 = document.querySelector('.table-0-05-1')
    resultact1.classList.remove('activee')
    resultact1.classList.remove('animationrandomactive')
    let menu = document.querySelector('.menu')
    menu.classList.add('active')
    let inner = document.querySelector('.set8')
    let knop = document.querySelector('.btnbackba')
    knop.classList.remove('active')
    let k12nop = document.querySelector('.alolo')
    k12nop.classList.remove('unactive')
    inner.innerHTML = ``
    let knop2 = document.querySelector('.queres')
    knop2.classList.remove('active')
    document.getElementById('quest').value = '';
}
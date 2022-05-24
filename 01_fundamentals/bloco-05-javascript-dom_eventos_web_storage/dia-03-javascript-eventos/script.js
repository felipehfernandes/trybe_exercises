function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// 1
function createCalendarDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const day = dezDaysList[i];
        const dayList = document.createElement('li');

        dayList.className = 'day';
        dayList.innerHTML = day;

        if (day === 24 || day === 25 || day === 31) {
            dayList.classList.add('holiday');
        }

        if (day === 4 || day === 11 || day === 18 || day === 25) {
            dayList.classList.add('friday');
        }

        const daysList = document.getElementById('days');
        daysList.appendChild(dayList);
    }
}

createCalendarDays();

// 2
function holidayButtonCreator(string) {
    let button = document.createElement('button');
    button.id = "btn-holiday";
    button.innerHTML = string;

    document.querySelector('.buttons-container').appendChild(button);
}

holidayButtonCreator("Feriados");

// 3
const holidayButton = document.querySelector('#btn-holiday');
const holidayList = document.querySelectorAll('.holiday');

holidayButton.addEventListener("click", function(event) {
    for (let i = 0; i < holidayList.length; i += 1) {
        let holidayDay = holidayList[i];

        if (holidayDay.style.backgroundColor !== "blue") {
            holidayDay.style.backgroundColor = "blue";
        } else {
            holidayDay.style.backgroundColor = "rgb(238,238,238)";
        }
    }
})

// 4
function fridayButtonCreator(string) {
    let button = document.createElement('button');
    button.id = "btn-friday";
    button.innerHTML = string;

    document.querySelector('.buttons-container').appendChild(button);
}

fridayButtonCreator("Sexta-Feira");

// 5
const fridayButton = document.querySelector('#btn-friday');
const fridayList = document.querySelectorAll('.friday');
const fridayArray = [4,11,18,25];

fridayButton.addEventListener("click", function(event) {
    for (let i = 0; i < fridayList.length; i += 1) {
        let fridayDay = fridayList[i];

        if (fridayDay.innerHTML !== "Sextou!") {
            fridayDay.innerHTML = "Sextou!";
        } else {
            fridayDay.innerHTML = fridayArray[i];
        }
    }
})

// 6
const totalDays = document.querySelector('#days');

totalDays.addEventListener("mouseover", function(event) {
    event.target.style.fontSize = '26px';
});

totalDays.addEventListener("mouseout", function(event) {
    event.target.style.fontSize = '20px';
});

// 7
const myTasks = document.querySelector('.my-tasks');

function newTask(string) {
    let createTask = document.createElement('span');
    createTask.innerHTML = string;

    myTasks.appendChild(createTask);
}

newTask('Fazer Exercícios Trybe');

// 8
function colorTask (color) {
    let createDiv = document.createElement('div');

    createDiv.className = 'task';
    createDiv.style.backgroundColor = color;

    myTasks.appendChild(createDiv);
}

colorTask('green');

// 9
const divElement = document.querySelector('.task');

divElement.addEventListener("click", function (event) {
    if (divElement.classList.contains('selected')) {
        divElement.classList.remove('selected');
    } else {
        divElement.classList.add('selected');
    }
})

// 10
days.addEventListener("click", function (event) {
    let getColor = divElement.style.backgroundColor;

    if (event.target.style.color == getColor) {
        event.target.style.color = "rgb(119,119,119)";
    } else {
        event.target.style.color = getColor;
    }
})
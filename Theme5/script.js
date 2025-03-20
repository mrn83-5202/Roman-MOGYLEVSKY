const simpleData = {
  labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень'],
  datasets: [{
    label: 'Продажі ($) - Спрощено',
    data: [15000, 18000, 17000, 19000, 21000],
    backgroundColor: 'rgba(54, 162, 235, 0.7)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const detailedData = {
  labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень'],
  datasets: [{
    label: 'Продажі ($) - Детально',
    data: [15000, 18000, 17000, 19000, 21000],
    backgroundColor: 'rgba(54, 162, 235, 0.7)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }, {
    label: 'Витрати ($)',
    data: [5000, 6000, 5500, 6500, 7000],
    backgroundColor: 'rgba(255, 99, 132, 0.7)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

let currentMode = 'simple';

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: simpleData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Місячні показники продажів'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Сума ($)'
        }
      }
    }
  }
});

function setMode(mode) {
  currentMode = mode;
  document.getElementById('simpleBtn').classList.toggle('active', mode === 'simple');
  document.getElementById('detailedBtn').classList.toggle('active', mode === 'detailed');
  if (mode === 'simple') {
    myChart.data = simpleData;
    myChart.options.plugins.title.text = 'Місячні показники продажів (Спрощено)';
  } else {
    myChart.data = detailedData;
    myChart.options.plugins.title.text = 'Місячні показники продажів та витрат (Детально)';
  }
  myChart.update();
}

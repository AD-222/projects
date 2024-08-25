document.addEventListener('DOMContentLoaded', function() {

    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        bar.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            this.style.height = value + '%';
        });

        bar.addEventListener('mouseout', function() {
            this.style.height = 'var(--value)';
        });
    });


    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieData = {
        labels: ['JavaScript', 'Python', 'Java', 'PHP', 'C#', 'TypeScript', 'C++', 'Ruby', 'Swift', 'Kotlin'],
        datasets: [{
            data: [23, 19, 15, 11, 9, 8, 6, 4, 3, 2],
            backgroundColor: [
                '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#8e44ad',
                '#1abc9c', '#c0392b', '#9b59b6', '#f1c40f', '#34495e'
            ],
            hoverOffset: 4
        }]
    };

    new Chart(pieCtx, {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const label = pieData.labels[tooltipItem.dataIndex];
                            const value = pieData.datasets[0].data[tooltipItem.dataIndex];
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });


    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineData = {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'JavaScript',
            borderColor: '#3498db',
            data: [20, 22, 24, 26, 23, 23],
            fill: false,
            tension: 0.1
        }, {
            label: 'Python',
            borderColor: '#2ecc71',
            data: [18, 19, 21, 23, 19, 19],
            fill: false,
            tension: 0.1
        }, {
            label: 'Java',
            borderColor: '#e74c3c',
            data: [16, 17, 17, 15, 14, 15],
            fill: false,
            tension: 0.1
        }]
    };

    new Chart(lineCtx, {
        type: 'line',
        data: lineData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Trends in Programming Languages (2019-2024)'
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Popularity (%)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});

import { LightningElement } from 'lwc';
import chartjs from '@salesforce/resourceUrl/ChartJs';
import { loadScript } from 'lightning/platformResourceLoader';

export default class RevenueChart extends LightningElement {
    chartInitialized = false;

    renderedCallback() {
        if (this.chartInitialized) return;
        this.chartInitialized = true;

        loadScript(this, chartjs + '/Chart.min.js')
            .then(() => {
                this.renderChart();
            })
            .catch(error => {
                console.error('Error loading Chart.js', error);
            });
    }

    renderChart() {
        const canvas = this.template.querySelector('canvas');
        if (!canvas) {
            console.error('Canvas not found!');
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!window.Chart) {
            console.error('Chart.js not loaded!');
            return;
        }

        new window.Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 15000, 10000, 17000, 20000],
                    backgroundColor: '#4CAF50'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        console.log('Canvas:', canvas);
        console.log('Chart loaded:', !!window.Chart);

    }
}
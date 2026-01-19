import { LightningElement, track } from 'lwc';

export default class RevenueProgress extends LightningElement {
  @track data = [
    { id: 1, label: 'Product A', value: 70 },
    { id: 2, label: 'Product B', value: 45 },
    { id: 3, label: 'Product C', value: 90 }
  ];

  connectedCallback() {
    this.data = this.data.map(item => {
      return {
        ...item,
        cssClass: `progress-fill fill-${item.value}`,
        tooltip: `${item.value}%`
      };
    });
  }
}
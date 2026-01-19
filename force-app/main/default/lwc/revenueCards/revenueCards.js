import { LightningElement } from 'lwc';

export default class RevenueCards extends LightningElement {
  cardData = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '₹1,20,000'
    },
    {
      id: 2,
      title: 'Total Clients',
      value: '50'
    },
    {
      id: 3,
      title: 'Active Clients',
      value: '35'
    },
    {
      id: 4,
      title: 'Avg. Session Revenue',
      value: '₹2,500'
    }
  ];
}
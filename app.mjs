import { deliveries, filterDeliveries } from './deliveries.mjs';

const search = document.querySelector('#search');
const status = document.querySelector('#status');
const summary = document.querySelector('#summary');
const table = document.querySelector('#deliveries');
const count = document.querySelector('#count');

for (const category of ['Delivered', 'Retrying', 'Failed']) {
  const card = document.createElement('div');
  const total = document.createElement('strong');
  total.textContent = deliveries.filter(row => row.status === category).length;
  card.append(category, total);
  summary.append(card);
}

function render() {
  const rows = filterDeliveries(deliveries, search.value, status.value);
  count.textContent = rows.length ? `Showing ${rows.length} of ${deliveries.length} deliveries` : 'No deliveries match these filters.';
  table.replaceChildren(...rows.map(row => {
    const tr = document.createElement('tr');
    for (const value of [row.id, row.partner, row.event, row.status, row.attempts]) {
      const cell = tr.insertCell();
      cell.textContent = value;
    }
    return tr;
  }));
}

search.addEventListener('input', render);
status.addEventListener('change', render);
render();

export const deliveries = [
  { id: 'EVT-108', partner: 'Northwind Travel', event: 'order.created', status: 'Delivered', attempts: 1 },
  { id: 'EVT-107', partner: 'Harbor Assist', event: 'case.updated', status: 'Retrying', attempts: 2 },
  { id: 'EVT-106', partner: 'Redwood Partners', event: 'order.cancelled', status: 'Failed', attempts: 5 },
  { id: 'EVT-105', partner: 'Harbor Assist', event: 'case.created', status: 'Delivered', attempts: 2 },
  { id: 'EVT-104', partner: 'Northwind Travel', event: 'order.updated', status: 'Delivered', attempts: 1 },
];

export function filterDeliveries(rows, query, status) {
  const search = query.trim().toLowerCase();
  return rows.filter(row => {
    const matchesSearch = [row.id, row.partner, row.event].some(value => value.toLowerCase().includes(search));
    return matchesSearch && (!status || row.status === status);
  });
}

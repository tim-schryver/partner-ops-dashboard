import assert from 'node:assert/strict';
import { test } from 'node:test';
import { deliveries, filterDeliveries } from './deliveries.mjs';

test('combines normalized search with the status filter', () => {
  const result = filterDeliveries(deliveries, ' HARBOR ', 'Retrying');
  assert.deepEqual(result.map(row => row.id), ['EVT-107']);
});

test('matches an event or ID and handles empty results', () => {
  assert.equal(filterDeliveries(deliveries, 'order.', '').length, 3);
  assert.equal(filterDeliveries(deliveries, 'evt-108', '').length, 1);
  assert.deepEqual(filterDeliveries(deliveries, 'unknown', ''), []);
});

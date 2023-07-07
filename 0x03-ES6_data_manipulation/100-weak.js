export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queryCount = weakMap.get(endpoint) || 0;
  const updatedCount = queryCount + 1;

  if (updatedCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, updatedCount);
}

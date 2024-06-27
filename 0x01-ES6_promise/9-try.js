export default function guardrail(callback) {
  const queue = [];
  try {
    queue.push(callback());
  } catch (e) {
    queue.push(e.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

export default function getMetrics(url) {
  return fetch(url).then(data => data.json());
}

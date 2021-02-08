import { Client } from '@elastic/elasticsearch'
export const elasticClient = new Client({
  node: 'https://1f18c5271c424f75b06bf6aec8a50830.us-central1.gcp.cloud.es.io:9243',
  cloud: {
    id: 'elastic-enterprise-search-deployment:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDFmMThjNTI3MWM0MjRmNzViMDZiZjZhZWM4YTUwODMwJDYyYzk0N2M4Y2NmNTRiNjI4ZDNiYzM4NTAxYTNiZDlm'
  },
  auth: {
    username: '_',
    password: '_'
  }
});

import { Client } from '@elastic/elasticsearch'
export const elasticClient = new Client({
  node: process.env.ELACTIC_CLOUD_NODE,
  cloud: {
    id: process.env.ELACTIC_CLOUD_ID
  },
  auth: {
    username: process.env.ELACTIC_CLOUD_LOGIN,
    password: process.env.ELACTIC_CLOUD_PASSWORD
  }
});

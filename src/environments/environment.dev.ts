import { paramStore } from 'aws-param-store';

const user = paramStore.getParameterSync(process.env.USERNAME, { region: process.env.region }).Value;
const cname = paramStore.getParameterSync(process.env.NAME, { region: process.env.region }).Value;

export const environment = {
  production: false,
  username: user,
  name: cname

};

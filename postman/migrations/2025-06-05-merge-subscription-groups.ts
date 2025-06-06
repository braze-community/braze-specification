import collection from '../collection.json';
import { writeCollection } from '../../utils';

const subscriptionGroups = collection.item.find(
  ({ name }) => name === 'Subscription Groups',
);

// @ts-expect-error is defined
const email = subscriptionGroups.item.find(({ name }) => name === 'Email').item;

// @ts-expect-error is defined
const sms = subscriptionGroups.item.find(
  ({ name }) => name === 'SMS and WhatsApp',
  // @ts-expect-error exists
).item;

interface Item {
  name: string;
  request: { method: string };
}

function getItem(item: any, itemName: string) {
  return item.find(
    ({ name, request }: Item) => name === itemName && request.method === 'GET',
  );
}

function getPhone(item: any) {
  return item.request.url.query.find(
    ({ key }: { key: string }) => key === 'phone',
  );
}

const itemNames = [
  "List user's subscription group status",
  "List user's subscription group",
];

// merge "Email" with "SMS and WhatsApp"
itemNames.forEach((itemName) => {
  const emailItem = getItem(email, itemName);
  const smsItem = getItem(sms, itemName);

  if (getPhone(emailItem)) {
    return;
  }

  emailItem.request.url.query.push(getPhone(smsItem));
});

// delete duplicate items
itemNames.forEach((itemName) => {
  const index = sms.findIndex(
    ({ name, request }: Item) => name === itemName && request.method === 'GET',
  );

  if (index === -1) {
    return;
  }

  sms.splice(index, 1);
});

writeCollection(collection);

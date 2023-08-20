import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key !== 'name') {
    return;
  }

  switch (value) {
    case 'Create Scheduled Messages':
      return (parent.request.body.raw = JSON.stringify({
        broadcast: false,
        external_user_ids: 'external_user_identifiers',
        user_aliases: {
          alias_name: 'example_name',
          alias_label: 'example_label',
        },
        segment_id: 'segment_identifiers',
        audience: {
          AND: [
            {
              custom_attribute: {
                custom_attribute_name: 'eye_color',
                comparison: 'equals',
                value: 'blue',
              },
            },
            {
              custom_attribute: {
                custom_attribute_name: 'favorite_foods',
                comparison: 'includes_value',
                value: 'pizza',
              },
            },
            {
              OR: [
                {
                  custom_attribute: {
                    custom_attribute_name: 'last_purchase_time',
                    comparison: 'less_than_x_days_ago',
                    value: 2,
                  },
                },
                {
                  push_subscription_status: {
                    comparison: 'is',
                    value: 'opted_in',
                  },
                },
              ],
            },
            {
              email_subscription_status: {
                comparison: 'is_not',
                value: 'subscribed',
              },
            },
            {
              last_used_app: {
                comparison: 'after',
                value: '2019-07-22T13:17:55+0000',
              },
            },
          ],
        },
        campaign_id: 'campaign_identifier',
        send_id: 'send_identifier',
        override_messaging_limits: false,
        recipient_subscription_state: 'subscribed',
        schedule: {
          time: '',
          in_local_time: true,
          at_optimal_time: true,
        },
        messages: {
          apple_push: {},
          android_push: {},
          windows_push: {},
          windows8_push: {},
          kindle_push: {},
          web_push: {},
          email: {},
          webhook: {},
          content_card: {},
        },
      }));

    case 'Send Transactional Email via API Triggered Delivery':
      return (parent.request.body.raw = JSON.stringify({
        external_send_id: 'YOUR_BASE64_COMPATIBLE_ID',
        trigger_properties: {
          example_string_property: 'YOUR_EXAMPLE_STRING',
          example_integer_property: 'YOUR_EXAMPLE_INTEGER',
        },
        recipient: [
          {
            external_user_id: 'TARGETED_USER_ID_STRING',
          },
        ],
      }));

    case 'Update Preference Center':
      return (parent.request.body.raw = JSON.stringify({
        external_send_id: 'YOUR_BASE64_COMPATIBLE_ID',
        trigger_properties: {
          example_string_property: 'YOUR_EXAMPLE_STRING',
          example_integer_property: 'YOUR_EXAMPLE_INTEGER',
        },
        recipient: [
          {
            external_user_id: 'TARGETED_USER_ID_STRING',
          },
        ],
      }));

    case 'Update Preference Center':
      return (parent.request.body.raw = JSON.stringify({
        name: 'preference_center_name',
        preference_center_title: 'string',
        preference_center_page_html: 'string',
        confirmation_page_html: 'string',
        options: {
          'meta-viewport-content': 'string',
        },
      }));

    case 'Create Preference Center':
      return (parent.request.body.raw = JSON.stringify({
        name: 'string',
        preference_center_title: 'string',
        preference_center_page_html: 'string',
        confirmation_page_html: 'string',
        state: 'active',
        options: {
          'meta-viewport-content': 'string',
        },
      }));

    case "Update User's Subscription Group Status V2":
      return (parent.request.body.raw = JSON.stringify({
        subscription_groups: [
          {
            subscription_group_id: 'subscription_group_identifier',
            subscription_state: 'subscribed',
            emails: ['example1@email.com', 'example2@email.com'],
          },
        ],
      }));

    case 'Remove External ID':
      return (parent.request.body.raw = JSON.stringify({
        external_ids: ['existing_deprecated_external_id_string'],
      }));
  }
});

traverse(collection, '', null, (value, key, parent) => {
  if (key === 'name' && value === 'Email') {
    parent.item = parent.item.filter(
      (item: object) => Object.keys(item).length,
    );
  }
});

writeCollection(collection);

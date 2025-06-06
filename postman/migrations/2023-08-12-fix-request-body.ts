import collection from '../collection.json';
import { traverse, writeCollection } from '../../utils';

traverse(collection, '', null, (value, key, parent) => {
  if (key !== 'name' || typeof parent.request?.body?.raw !== 'string') {
    return;
  }

  switch (value) {
    // POST /messages/schedule/create
    case 'Create scheduled messages':
      return (parent.request.body.raw = JSON.stringify({
        broadcast: false,
        external_user_ids: ['external_user_identifiers'],
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

    // POST /transactional/v1/campaigns/{campaign_id}/send
    case 'Send Transactional Email using API-triggered delivery':
      return (parent.request.body.raw = JSON.stringify({
        external_send_id: 'YOUR_BASE64_COMPATIBLE_ID',
        trigger_properties: {},
        recipient: [
          {
            external_user_id: 'TARGETED_USER_ID_STRING',
          },
        ],
      }));

    // PUT /preference_center/v1/{PreferenceCenterExternalID}
    case 'Update preference center':
      return (parent.request.body.raw = JSON.stringify({
        name: 'preference_center_name',
        preference_center_title: 'string',
        preference_center_page_html: 'string',
        confirmation_page_html: 'string',
        options: {
          'meta-viewport-content': 'string',
        },
      }));

    // POST /preference_center/v1
    case 'Create preference center':
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

    // POST /v2/subscription/status/set
    case "Update user's subscription group status (V2)":
      return (parent.request.body.raw = JSON.stringify({
        subscription_groups: [
          {
            subscription_group_id: 'string',
            subscription_state: 'string',
            external_ids: ['string'],
            emails: ['string'],
            phones: ['string'],
          },
        ],
      }));

    // POST /subscription/status/set
    case "Update user's subscription group status":
      return (parent.request.body.raw = JSON.stringify({
        subscription_group_id: 'string',
        subscription_state: 'string',
        external_id: ['string'],
        email: ['string'],
      }));

    // POST /content_blocks/create
    case 'Create Content Block':
      return (parent.request.body.raw = JSON.stringify({
        name: 'string',
        description: 'string',
        content: 'string',
        state: 'active',
        tags: ['string'],
      }));

    // POST /content_blocks/update
    case 'Update Content Block':
      return (parent.request.body.raw = JSON.stringify({
        content_block_id: 'string',
        name: 'string',
        description: 'string',
        content: 'string',
        state: 'active',
        tags: ['string'],
      }));

    // POST /templates/email/create
    case 'Create email template':
      return (parent.request.body.raw = JSON.stringify({
        template_name: 'string',
        subject: 'string',
        body: 'string',
        plaintext_body: 'string',
        preheader: 'string',
        tags: ['string'],
        should_inline_css: true,
      }));

    // POST /templates/email/update
    case 'Update email template':
      return (parent.request.body.raw = JSON.stringify({
        email_template_id: 'string',
        template_name: 'string',
        subject: 'string',
        body: 'string',
        plaintext_body: 'string',
        preheader: 'string',
        tags: ['string'],
        should_inline_css: true,
      }));

    // POST /users/identify
    case 'Identify users':
      return (parent.request.body.raw = JSON.stringify({
        aliases_to_identify: [
          {
            external_id: 'external_identifier',
            user_alias: {
              alias_name: 'example_alias',
              alias_label: 'example_label',
            },
          },
        ],
        emails_to_identify: [
          {
            external_id: 'external_identifier_2',
            email: 'john.smith@braze.com',
            prioritization: ['unidentified', 'most_recently_updated'],
          },
        ],
        phone_numbers_to_identify: [
          {
            external_id: 'external_identifier_2',
            phone: '+11112223333',
            prioritization: ['unidentified', 'most_recently_updated'],
          },
        ],
        merge_behavior: 'merge',
      }));

    // POST /users/merge
    case 'Merge users':
      return (parent.request.body.raw = JSON.stringify({
        merge_updates: [
          {
            identifier_to_merge: {
              external_id: 'old-user1',
            },
            identifier_to_keep: {
              external_id: 'current-user1',
            },
          },
          {
            identifier_to_merge: {
              email: 'user1@braze.com',
              prioritization: ['unidentified', 'most_recently_updated'],
            },
            identifier_to_keep: {
              email: 'user2@braze.com',
              prioritization: ['identified', 'most_recently_updated'],
            },
          },
          {
            identifier_to_merge: {
              user_alias: {
                alias_name: 'old-user2@example.com',
                alias_label: 'email',
              },
            },
            identifier_to_keep: {
              user_alias: {
                alias_name: 'current-user2@example.com',
                alias_label: 'email',
              },
            },
          },
        ],
      }));

    // POST /users/external_ids/remove
    case 'Remove external ID':
      return (parent.request.body.raw = JSON.stringify({
        external_ids: ['existing_deprecated_external_id_string'],
      }));

    // POST /sms/invalid_phone_numbers/remove
    case 'Remove invalid phone numbers':
      return (parent.request.body.raw = JSON.stringify({
        phone_numbers: ['string'],
      }));

    // expect no errors
    default:
      try {
        return JSON.parse(parent.request.body.raw);
      } catch (error) {
        console.warn(parent.request.body.raw);
        throw new Error(`Invalid JSON for name: "${value}"`);
      }
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

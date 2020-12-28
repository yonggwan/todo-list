// channel: yongs / yongspace / palyground
const SlackURL = 'https://hooks.slack.com/services/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';

export const getNewTodoMessagingBody = (description: string) => ({
  "text": "Someone left new todo!",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Someone left new todo*"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": description
      }
    }
  ]
});

export const getUserLogMessagingBody = () => ({
  "text": "Someone visited on TodoList website.",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Someone visited on TodoList website.*"
      }
    },
    {
      "type": "section",
      "block_id": "section789",
      "fields": [
        {
          "type": "mrkdwn",
          "text": `*referrer*\n${document.referrer}`
        },
        {
          "type": "mrkdwn",
          "text": `*userAgent*\n${window.navigator.userAgent}`
        }
      ]
    }
  ]
});

export const send = async (body: any) => {
  try {
    const response = await fetch(SlackURL, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return 'ok';
  } catch (error) {
    console.error(error);
    return error;
  }
};

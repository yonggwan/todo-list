const stage = 'prod';
const apiBaseURL = `https://mkncuwq802.execute-api.ap-northeast-2.amazonaws.com/${stage}`;

const baseParam = () => ({ ref: document.referrer, ua: window.navigator.userAgent, url: window.location.href, });

const logService = {
    pageview: () => {
        return fetch(apiBaseURL + '/event/user/visit', {
            method: 'POST',
            body: JSON.stringify(baseParam()),
        });
    },
    newTodo: (text: string, createdAt: string) => {
        return fetch(apiBaseURL + '/event/todo', {
            method: 'POST',
            body: JSON.stringify({
                ...baseParam(),
                date: createdAt,
                text,
            })
        });
    }
}

export { logService };

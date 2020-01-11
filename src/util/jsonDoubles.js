const peep = (
    {
        "id": 3,
        "body": "my first peep :)",
        "created_at": "2018-06-23T13:21:23.317Z",
        "updated_at": "2018-06-23T13:21:23.317Z",
        "user": {
            "id": 1,
            "handle": "kay"
    },
        "likes": [{
            "user": {
            "id": 1,
            "handle": "kay"
            }
        }]
    }
)

export const getPeeps = () => {
    const peeps = [];
    for (let i = 0; i < 50; i++) {
        peeps.push(peep);
    }

    return peeps;
}

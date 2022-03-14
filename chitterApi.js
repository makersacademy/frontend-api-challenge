class ChitterApi{

    loadPeeps(callback){
        fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(response => response.json())
        .then(data => {

            callback(data);
        });
    }

    createPeep(user_id, content, callback){
        fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
            method: 'POST',
            headers: {
                'Authorization': 'Token token=a_valid_session_key',
                'Content-Type': 'application/json',
            },
            peep: {
                user_id: user_id,
                body: content, 
                }
            })

        .then(response => response.json())
        .then(data => {
        callback(data);
        });   
    };
    
}
          
module.exports = ChitterApi;
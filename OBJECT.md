Users
-name
-password

peeps(name, password)
-viewAllPeeps
-viewIndividualPeeps
-deletePeeps
-likePeeps
-unlikePeeps

create new user
curl "https://chitter-backend-api.herokuapp.com/users" \
-X POST \
-H "Content-Type: application/json" \
-d '{"user": {"handle":"taj485", "password":"taj4855"}}'

create new session - login
curl "https://chitter-backend-api.herokuapp.com/sessions" \
-X POST \
-H "Content-Type: application/json" \
-d '{"session": {"handle":"taj485", "password":"taj4855"}}'

response -- "user_id":1200,"session_key":"_2a_10_lus2WjD1KxvVyqx2bxV_Qu"}

post peeps
curl "https://chitter-backend-api.herokuapp.com/peeps" \
-X POST \
-H "Authorization: Token token="a_2a_10_0cREqMCrwYRdueaUK3PUX_"" \
-H "Content-Type: application/json" \
-d '{"peep": {"user_id":1197, "body":"my first peep :)"}}'

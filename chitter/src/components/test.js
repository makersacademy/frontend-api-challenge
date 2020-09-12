"user_id": 1258,
 "session_key": _2a_10_aXO2Io0biHOqVTnAbJvwYe


 curl "https://chitter-backend-api.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token="_2a_10__m8ABSsRmgmXM0csjU0S9O" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1258, "body":"my first peep :)"}}'

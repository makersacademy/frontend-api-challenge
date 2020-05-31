'use strict';

class Peep {

  static TEST_ID = 1;
  static TEST_BODY = `Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)`;
  static TEST_CREATED_AT = `2020-03-06T17:16:22.601Z`;
  static TEST_UPDATED_AT = `2020-03-06T17:16:22.601Z`;
  static TEST_USER = 1;

  constructor(id, body, created_at, updated_at, user) {
    this.id = id;
    this.body = body;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user = user;
    // Peeps.add(this)
  }
}
# Chitter API Frontend Challenge

### Steps, thoughts and learnings

I started by using mocks set up a test in and index test suite that helps me to start the project in line with what Justin Searls was talking about. <br>

He talks about "write the code I wish I had" <br>

In thinking about this project I wished I had something to access the chitter api, something to fetch peeps, and something to display them, so the first thing I did, and I guess that this was part of a "Given" or "Assert" phase was to require these three fictional items and to mock them. <br>

I then created the subject of the test, index in this case. <br>

And then in the given of the test itself I assigned class instances of my three mocked classed. <br>

In the when phase I called chitterView.all <br>

And then I wrote a very simple test that expects to see more than 1 peep - I'm not sure this is good enough, but to stay with the concept that the purpose of this test in a TDD sense was to help me set up, think about what I need and what the contracts are between them

// so I now feel like this test suite is leading me to work on a new test suite for chitterApi even though I am still setting this one up
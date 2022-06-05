# Chitter API Frontend Challenge

### Steps, thoughts and learnings

I started by using mocks set up a test in and index test suite that helps me to start the project in line with what Justin Searls was talking about. <br>

He talks about "write the code I wish I had" <br>

In thinking about this project I wished I had something to access the chitter api, something to fetch peeps, and something to display them, so the first thing I did, and I guess that this was part of a "Given" or "Assert" phase was to require these three fictional items and to mock them. <br>

I then created the subject of the test, index in this case. <br>

And then in the given of the test itself I assigned class instances of my three mocked classed. <br>

In the when phase I called chitterView.all <br>

And then I wrote a very simple test that expects to see more than 1 peep - I'm not sure this is good enough, but to stay with the concept that the purpose of this test in a TDD sense was to help me set up, think about what I need and what the contracts are between them<br>

So once all the files are created it's now telling me that ChitterApi is not a constructor - I'm going to just follow this test, even though it feels strange creating these files from this test, I'm going to do as it says and see where it leads me <br>

So all the files got created, and the empty classes and functions, and to be honest it all felt very supportive and nice and TDD - I knew what I was doing, I had a process. <br>

I then put some template boilerplate HTML in the index.html and added two fake peeps as the simplest way to pass the test. So far I like this way <br>
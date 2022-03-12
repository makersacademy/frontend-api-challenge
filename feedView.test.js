/**
 * @jest-environment jsdom
 */

const FeedView = require('./feedView')
const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('Chitter feed', () => {
  it('shows a list of the last 50 peeps', () => {
    document.body.innerHTML = fs.readFileSync('./feed.html');
    const feedView = new FeedView
    expect(document.querySelectorAll('p').length).toBe(50)
  });
});
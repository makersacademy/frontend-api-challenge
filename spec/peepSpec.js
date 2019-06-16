var peepSpec = {
  format: function() {
    var peep = mockPeeps[0];
    assert.isEqual(Peep.format(peep), `<article>
    <p class='peep-handle'>Muchacho</p>
    <p class='peep-body'>Hola muchacho</p>
    <p class='peep-date'>16/06/2019</p>
    </article>`)
  }
}

runner.runTests(peepSpec);

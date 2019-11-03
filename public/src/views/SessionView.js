(function(exports) {

  function SessionView() {
    
  }
  SessionView.prototype = {
    loginForm: function() {
      var sidebar = $('#sidebar-container')
      form = _createForm()
      $('#login-logout').toggle()
      sidebar.append(form)
    }
  }

  var _addAttr = function(element, attr, value) {
    element.attr(attr, value)
  }

  var _createForm = function() {
    var form = $('<form/>')
    _addAttr(form, 'id', 'login-form')
    _addAttr(form, 'action', 'javascript:void(0);')
    _createHandleInput(form)
    _createPasswordInput(form)
    _createLogInButton(form)
    console.log(form)
    return form
  }

  var _createHandleInput = function(form) {
    var handleDiv = _createFormGroup()
    var handleInput = $('<input/>')
    _addAttr(handleInput, 'id', 'handle')
    _addAttr(handleInput, 'name', 'handle')
    _addAttr(handleInput, 'placeholder', 'Handle')
    _addAttr(handleInput, 'type', 'text')
    handleInput.addClass('form-control')
    handleDiv.append(handleInput)
    form.append(handleDiv)
  }

  var _createPasswordInput = function(form) {
    var passwordDiv = _createFormGroup()
    var passwordInput = $('<input/>')
    _addAttr(passwordInput, 'id', 'password')
    _addAttr(passwordInput, 'name', 'password')
    _addAttr(passwordInput, 'placeholder', 'Password')
    _addAttr(passwordInput, 'type', 'password')
    passwordInput.addClass('form-control')
    passwordDiv.append(passwordInput)
    form.append(passwordDiv)
  }

  var _createLogInButton = function(form) {
    var buttonDiv = _createFormGroup()
    var button = $('<button/>')
    _addAttr(button, 'id', 'login-btn')
    _addAttr(button, 'style', 'text-decoration:none')
    _addAttr(button, 'name', 'submit')
    _addAttr(button, 'type', 'submit')
    button.addClass('btn btn-primary')
    var label = $('strong')
    label.text('Log in')
    button.append(label)
    buttonDiv.append(button)
    form.append(buttonDiv)
  }

  var _createFormGroup = function() {
    var formGroup = $('<div/>')
    formGroup.addClass('form-group')
    return formGroup
  }

  exports.SessionView = SessionView
})(this)

from webtier import *

class TestWebTier(object):
    def test_connection_success_returns_success_message(self):
        expectedMessage = "webtier service points are running..."

        result = test()

        assert result == expectedMessage

    ## Maybe make an authentication service class
    ## Test Login Success

    def test_authentication_with_invalid_credentials_returns_error(self):
        expectedMessage = "Invalid username or password."
        username = "Tom"
        password = "Password"
        auth = AuthenticationService()

        result = auth.authenticate(username, password)

        assert result == expectedMessage

    def test_authentication_with_empty_login_returns_error(self):
        expectedMessage = 'Username or password empty...'
        username = ""
        password = "Password"
        auth = AuthenticationService()

        result = auth.authenticate(username, password)

        assert result == expectedMessage

    def test_authentication_with_empty_password_returns_error(self):
        expectedMessage = 'Username or password empty...'
        username = "Tom"
        password = ""
        auth = AuthenticationService()

        result = auth.authenticate(username, password)

        assert result == expectedMessage
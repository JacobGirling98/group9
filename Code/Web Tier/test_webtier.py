from webtier import *

class TestWebTier(object):
    def test_connection_success_returns_success_message(self):
        #Arrange
        expectedMessage = "webtier service points are running..."

        #Act
        result = test()

        #Assert
        assert result == expectedMessage


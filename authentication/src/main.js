var React       = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
} = ReactNative;

// Parse For React Native apps
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

// Components
var Signin = require('./components/authentication/signin')

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('myAppId','unused');
    Parse.serverURL = 'https://jason-parse-server.herokuapp.com/parse';
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <Signin/>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

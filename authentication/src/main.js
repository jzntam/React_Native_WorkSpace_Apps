var React       = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
} = ReactNative;

var Signin = require('./components/authentication/signin')

module.exports = React.createClass({
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

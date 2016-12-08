var React       = require('react');
var ReactNative = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput
} = ReactNative;

var Button = require('../common/button')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <Text>Sign In</Text>

        <Text style={ styles.label }>Username</Text>
        <TextInput
          style={ styles.input }
          onChangeText={ (text) => this.setState({ username: text }) }
          value={ this.state.username } />

        <Text style={ styles.label }>Password</Text>
        <TextInput
          secureTextEntry={ true }
          style={ styles.input }
          onChangeText={ (text) => this.setState({ password: text }) }
          value={ this.state.password } />

        <Button text={ 'Sign In' } onPress={ this.onPress } />
      </View>
    )
  },
  onPress: function() {
    this.setState({
      password: ''
    });
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
});

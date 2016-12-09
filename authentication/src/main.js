var React       = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Navigator
} = ReactNative;

// Parse For React Native apps
var Parse = require('parse/react-native');

// Components
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

// Routes
var ROUTES = {
  signin: Signin,
  signup: Signup,
  tweets: Tweets
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('myAppId', 'unused');
    Parse.serverURL = 'https://jason-parse-server.herokuapp.com/parse';
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={ route } navigator={ navigator } />;
  },
  render: function() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ { name: 'signin' } }
        renderScene={ this.renderScene }
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight } } />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// Import Libraries
var React       = require('react-native');
var AppRegistry = React.AppRegistry;
var View        = React.View;
var Text        = React.Text;
var StyleSheet  = React.StyleSheet;

var Weekdays = React.createClass({
  render: function() {
    return <View style={ styles.container }>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Styling the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Tells React Native, to use the Component Weekdays for the app named 'weekdays'
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});

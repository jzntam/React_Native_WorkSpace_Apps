// Import Libraries
var React       = require('react-native');
var AppRegistry = React.AppRegistry;
var View        = React.View;
var Text        = React.Text;
var StyleSheet  = React.StyleSheet;

// Import Components
var DayItem = require('./src/day-item')

var DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

// Define Main Component
var Weekdays = React.createClass({
  render: function() {
    return <View style={ styles.container }>
      <Text>
        Days of the week:
      </Text>
      { this.days() }
    </View>
  },

  days: function() {
    return DAYS.map(function(day, index) {
      return <DayItem day={ day } key={ index }/>
    });
  }
});

// Styling the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Height alignment
    alignItems: 'center' // Width alignment
  }
});

// Tells React Native, to use the Component Weekdays for the app named 'weekdays'
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});

import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Button } from 'react-native';

import { connect } from 'react-redux'
import { fetchData } from './reduxExamples.actions'

let styles

const App = class ReduxExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0
    };
  }

onPress = () => {
  this.setState({ counter: this.state.counter + 1 });
}

render() {
  return (
    <View id="xD" style={styles.container} accessibilityLabel="testview">

      <Text style={styles.text}>End to End Testing Sample</Text>
      <Text style={styles.text} accessibilityLabel="counter">Counter: {this.state.counter}</Text>
      <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />

      <View style={styles.reduxSagaView}>
            <Text style={styles.text}>Redux Saga Example</Text>
            <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
              <Text style={styles.buttonText}>Load Data</Text>
            </TouchableHighlight>

            <View style={styles.mainContent}>
              {
                this.props.reduxExamplesReducer.isFetching && <Text>Loading</Text>
              }
              {
                this.props.reduxExamplesReducer.data.length ? (
                  this.props.reduxExamplesReducer.data.map((person, i) => {
                    return <View key={i} >
                      <Text>Name: {person.name}</Text>
                      <Text>Age: {person.age}</Text>
                    </View>
                  })
                ) : null
              }
            </View>
      </View>
    </View>
  )
}

}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    padding: 10
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10
  },
  reduxSagaView: {
    marginTop: 50
  }
})

function mapStateToProps (state) {
  return {
    reduxExamplesReducer: state.reduxExamplesReducer
  }
}

const mapActionsToProps = {
    fetchData: fetchData
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
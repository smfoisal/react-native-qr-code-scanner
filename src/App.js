import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScanScreen from './ScanScreen'

class App extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <ScanScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
});

export default App;
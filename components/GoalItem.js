import {StyleSheet, Text, View} from 'react-native'

function GoalItem(props) {
    console.log(props);
    return (
        <View key={props.key} style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		marginVertical: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
})
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	FlatList,
} from "react-native";

export default function App() {
	const [goalText, setGoalText] = useState("");
	const [goalList, setGoalList] = useState([]);

	function goalInputHandler(enteredText) {
		setGoalText(enteredText);
	}

	function addGoalHandler() {
		setGoalList((previous) => [...previous, {id: Math.random().toString() ,text: goalText}]);
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button
					title="Add Goal"
					onPress={addGoalHandler}
				/>
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goalList}
					renderItem={({item}) => 
						<View key={item.key} style={styles.goalItem}>
							<Text style={styles.goalText}>{item.text}</Text>
						</View>
					}
          keyExtractor={(item, index) => {
            return item.id + index;
          }}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 10,
	},
	goalItem: {
		marginVertical: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
});

import { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goalList, setGoalList] = useState([]);

	function addGoalHandler(enteredGoalText) {
		console.log(goalList);
		setGoalList((previous) => [...previous, {id: Math.random().toString() ,text: enteredGoalText}]);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler}></GoalInput>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goalList}
					renderItem={({item}) => 
						<GoalItem key={item.key} text={item.text}/>
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
	goalsContainer: {
		flex: 10,
	},
	
});

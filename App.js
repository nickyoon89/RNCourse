import { useState } from "react";
import * as SystemUI from 'expo-system-ui';
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App(){
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [goalList, setGoalList] = useState([]);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function startEndGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		setGoalList((previous) => [
			...previous,
			{ id: Math.random().toString(), text: enteredGoalText },
		]);
		startEndGoalHandler();
	}

	function deleteGoalHandler(id) {
		setGoalList((currentGoal) => {
			return currentGoal.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
		<StatusBar style="light"/>
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#a065ec"
				onPress={startAddGoalHandler}
			/>
			<GoalInput
				onAddGoal={addGoalHandler}
				visible={modalIsVisible}
				onCancel={startEndGoalHandler}
			></GoalInput>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goalList}
					renderItem={({ item }) => (
						<GoalItem
							id={item.id}
							text={item.text}
							onDeleteItem={deleteGoalHandler}
						/>
					)}
					keyExtractor={(item, index) => {
						return item.id + index;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: "#1e085a",
	},
	goalsContainer: {
		flex: 10,
	},
});

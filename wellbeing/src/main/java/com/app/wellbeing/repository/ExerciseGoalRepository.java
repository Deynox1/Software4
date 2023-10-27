package com.app.wellbeing.repository;

import com.app.wellbeing.model.ExerciseGoal;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ExerciseGoalRepository {
    private final List<ExerciseGoal> exerciseGoals = new ArrayList<>();

    public List<ExerciseGoal> getExerciseGoals() {
        return exerciseGoals;
    }

    public void addExerciseGoal(ExerciseGoal exerciseGoal) {
        exerciseGoals.add(exerciseGoal);
    }
}
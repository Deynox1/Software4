package com.app.wellbeing.controller;

import com.app.wellbeing.model.ExerciseGoal;
import com.app.wellbeing.repository.ExerciseGoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/metas-ejercicio")
public class ExerciseGoalController {
    private final ExerciseGoalRepository exerciseGoalRepository;

    @Autowired
    public ExerciseGoalController(ExerciseGoalRepository exerciseGoalRepository) {
        this.exerciseGoalRepository = exerciseGoalRepository;
    }

    @GetMapping("/")
    public List<ExerciseGoal> getExerciseGoals() {
        return exerciseGoalRepository.getExerciseGoals();
    }

    @PostMapping("/")
    public void addExerciseGoal(@RequestBody ExerciseGoal exerciseGoal) {
        exerciseGoalRepository.addExerciseGoal(exerciseGoal);
    }
}

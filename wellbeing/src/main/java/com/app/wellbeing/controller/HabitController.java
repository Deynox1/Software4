package com.app.wellbeing.controller;

import com.app.wellbeing.model.Habit;
import com.app.wellbeing.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/habitos")
public class HabitController {
    private final HabitRepository habitRepository;

    @Autowired
    public HabitController(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    @GetMapping("/")
    public List<Habit> getHabits() {
        return habitRepository.getHabits();
    }

    @PostMapping("/")
    public void addHabit(@RequestBody Habit habit) {
        habitRepository.addHabit(habit);
    }
}

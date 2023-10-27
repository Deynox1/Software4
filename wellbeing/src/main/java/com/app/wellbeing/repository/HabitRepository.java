package com.app.wellbeing.repository;

import com.app.wellbeing.model.Habit;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class HabitRepository {
    private final List<Habit> habits = new ArrayList<>();

    public List<Habit> getHabits() {
        return habits;
    }

    public void addHabit(Habit habit) {
        habits.add(habit);
    }
}

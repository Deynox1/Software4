package com.app.wellbeing.repository;

import com.app.wellbeing.model.FoodEntry;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FoodEntryRepository {
    private final List<FoodEntry> foodEntries = new ArrayList<>();

    public List<FoodEntry> getFoodEntries() {
        return foodEntries;
    }

    public void addFoodEntry(FoodEntry foodEntry) {
        foodEntries.add(foodEntry);
    }
}
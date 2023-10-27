package com.app.wellbeing.controller;

import com.app.wellbeing.model.FoodEntry;
import com.app.wellbeing.repository.FoodEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registro-alimentacion")
public class FoodEntryController {
    private final FoodEntryRepository foodEntryRepository;

    @Autowired
    public FoodEntryController(FoodEntryRepository foodEntryRepository) {
        this.foodEntryRepository = foodEntryRepository;
    }

    @GetMapping("/")
    public List<FoodEntry> getFoodEntries() {
        return foodEntryRepository.getFoodEntries();
    }

    @PostMapping("/")
    public void addFoodEntry(@RequestBody FoodEntry foodEntry) {
        foodEntryRepository.addFoodEntry(foodEntry);
    }
}

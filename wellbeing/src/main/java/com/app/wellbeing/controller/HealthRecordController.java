package com.app.wellbeing.controller;

import com.app.wellbeing.model.HealthRecord;
import com.app.wellbeing.repository.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/monitoreo-salud")
public class HealthRecordController {
    private final HealthRecordRepository healthRecordRepository;

    @Autowired
    public HealthRecordController(HealthRecordRepository healthRecordRepository) {
        this.healthRecordRepository = healthRecordRepository;
    }

    @GetMapping("/")
    public List<HealthRecord> getHealthRecords() {
        return healthRecordRepository.getHealthRecords();
    }

    @PostMapping("/")
    public void addHealthRecord(@RequestBody HealthRecord healthRecord) {
        healthRecordRepository.addHealthRecord(healthRecord);
    }
}

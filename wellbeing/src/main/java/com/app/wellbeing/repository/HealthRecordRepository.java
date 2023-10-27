package com.app.wellbeing.repository;

import com.app.wellbeing.model.HealthRecord;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class HealthRecordRepository {
    private final List<HealthRecord> healthRecords = new ArrayList<>();

    public List<HealthRecord> getHealthRecords() {
        return healthRecords;
    }

    public void addHealthRecord(HealthRecord healthRecord) {
        healthRecords.add(healthRecord);
    }
}

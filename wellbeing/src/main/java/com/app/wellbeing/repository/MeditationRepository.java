package com.app.wellbeing.repository;

import com.app.wellbeing.model.Meditation;
import com.app.wellbeing.model.MeditationTimer;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MeditationRepository {
    private final List<Meditation> meditations = new ArrayList<>();
    private final List<MeditationTimer> meditationTimers = new ArrayList<>();

    public List<Meditation> getMeditations() {
        return meditations;
    }

    public List<MeditationTimer> getMeditationTimers() {
        return meditationTimers;
    }

    public void addMeditation(Meditation meditation) {
        meditations.add(meditation);
    }

    public void addMeditationTimer(MeditationTimer meditationTimer) {
        meditationTimers.add(meditationTimer);
    }
}

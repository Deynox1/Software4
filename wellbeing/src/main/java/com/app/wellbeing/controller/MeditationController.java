package com.app.wellbeing.controller;

import com.app.wellbeing.model.Meditation;
import com.app.wellbeing.model.MeditationTimer;
import com.app.wellbeing.repository.MeditationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meditacion-mindfulness")
public class MeditationController {
    private final MeditationRepository meditationRepository;

    @Autowired
    public MeditationController(MeditationRepository meditationRepository) {
        this.meditationRepository = meditationRepository;
    }

    @GetMapping("/meditaciones")
    public List<Meditation> getMeditations() {
        return meditationRepository.getMeditations();
    }

    @PostMapping("/meditaciones")
    public void addMeditation(@RequestBody Meditation meditation) {
        meditationRepository.addMeditation(meditation);
    }

    @GetMapping("/temporizadores")
    public List<MeditationTimer> getMeditationTimers() {
        return meditationRepository.getMeditationTimers();
    }

    @PostMapping("/temporizadores")
    public void addMeditationTimer(@RequestBody MeditationTimer meditationTimer) {
        meditationRepository.addMeditationTimer(meditationTimer);
    }
}

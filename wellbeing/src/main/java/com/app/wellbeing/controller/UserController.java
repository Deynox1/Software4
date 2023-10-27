package com.app.wellbeing.controller;

import com.app.wellbeing.model.User;
import com.app.wellbeing.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {
    private final UserRepository userRepository = new UserRepository();

    @GetMapping("/")
    public List<User> getUsers() {
        return userRepository.getUsers();
    }

    @PostMapping("/")
    public void addUser(@RequestBody User user) {
        userRepository.addUser(user);
    }
}

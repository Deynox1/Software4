package com.app.wellbeing.model;

public class Habit {
    private Long id;
    private String alimentacion;
    private String ejercicio;
    private String sueno;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlimentacion() {
        return alimentacion;
    }

    public void setAlimentacion(String alimentacion) {
        this.alimentacion = alimentacion;
    }

    public String getEjercicio() {
        return ejercicio;
    }

    public void setEjercicio(String ejercicio) {
        this.ejercicio = ejercicio;
    }

    public String getSueno() {
        return sueno;
    }

    public void setSueno(String sueno) {
        this.sueno = sueno;
    }
}
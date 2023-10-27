package com.app.wellbeing.model;

public class ExerciseGoal {
    private Long id;
    private String usuario;
    private int metasDiarias;
    private int metasSemanales;
    private int progresoDiario;
    private int progresoSemanal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public int getMetasDiarias() {
        return metasDiarias;
    }

    public void setMetasDiarias(int metasDiarias) {
        this.metasDiarias = metasDiarias;
    }

    public int getMetasSemanales() {
        return metasSemanales;
    }

    public void setMetasSemanales(int metasSemanales) {
        this.metasSemanales = metasSemanales;
    }

    public int getProgresoDiario() {
        return progresoDiario;
    }

    public void setProgresoDiario(int progresoDiario) {
        this.progresoDiario = progresoDiario;
    }

    public int getProgresoSemanal() {
        return progresoSemanal;
    }

    public void setProgresoSemanal(int progresoSemanal) {
        this.progresoSemanal = progresoSemanal;
    }
}

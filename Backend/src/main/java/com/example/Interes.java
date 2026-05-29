package com.example;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "interes")
public class Interes {

    private Long idestudiante;
    private Long idcarrera;
    private LocalDate fechaInteres;

    public Interes() {
        this.fechaInteres = LocalDate.now();
    }

    public Interes(Long idestudiante, Long idcarrera) {
        this.idestudiante = idestudiante;
        this.idcarrera = idcarrera;
        this.fechaInteres = LocalDate.now();
    }

    public Long getIdestudiante() {
        return idestudiante;
    }

    public void setIdestudiante(Long idestudiante) {
        this.idestudiante = idestudiante;
    }

    public Long getIdcarrera() {
        return idcarrera;
    }

    public void setIdcarrera(Long idcarrera) {
        this.idcarrera = idcarrera;
    }

    public LocalDate getFechaInteres() {
        return fechaInteres;
    }

    public void setFechaInteres(LocalDate fechaInteres) {
        this.fechaInteres = fechaInteres;
    }

    @Override
    public String toString() {
        return "Interes [idestudiante=" + idestudiante + ", idcarrera=" + idcarrera + ", fechaInteres=" + fechaInteres + "]";
    }
}

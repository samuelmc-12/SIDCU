package com.example;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "interes_universidad")
public class InteresUniversidad {

    private Long idestudiante;
    private Long iduniversidad;

    public InteresUniversidad() {
    }

    public InteresUniversidad(Long idestudiante, Long iduniversidad) {
        this.idestudiante = idestudiante;
        this.iduniversidad = iduniversidad;
    }

    public Long getIdestudiante() {
        return idestudiante;
    }

    public void setIdestudiante(Long idestudiante) {
        this.idestudiante = idestudiante;
    }

    public Long getIduniversidad() {
        return iduniversidad;
    }

    public void setIduniversidad(Long iduniversidad) {
        this.iduniversidad = iduniversidad;
    }

    @Override
    public String toString() {
        return "InteresUniversidad [idestudiante=" + idestudiante + ", iduniversidad=" + iduniversidad + "]";
    }
}

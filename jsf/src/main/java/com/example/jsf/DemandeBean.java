package com.example.jsf;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.SessionScoped;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@SessionScoped
public class DemandeBean implements Serializable {

    private Demande demande = new Demande();
    private List<Demande> ListDemandes = new ArrayList<>();
    private String searchKeyword;

    public Demande getDemande() {
        return demande;
    }

    public List<Demande> getDemandes() {
        return ListDemandes;
    }

    public String getSearchKeyword() {
        return searchKeyword;
    }

    public void setSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
    }

    public void ajouterDemande() {
        ListDemandes.add(demande);
        demande = new Demande(); // Reset demande after adding

    }

    public List<Demande> rechercherDemande() {
        System.out.println("Executing rechercherDemande() with searchKeyword: " + searchKeyword);
        List<Demande> resultat = new ArrayList<>();
        if (searchKeyword != null && !searchKeyword.isEmpty()) {
            for (Demande d : ListDemandes) {
                if (d.getAbout() != null && d.getAbout().equalsIgnoreCase(searchKeyword)) {
                    resultat.add(d);
                }
            }
        }
        return resultat;
    }
}

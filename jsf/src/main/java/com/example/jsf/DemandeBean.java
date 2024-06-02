package com.example.jsf;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.SessionScoped;
import jakarta.faces.context.FacesContext;

import java.io.StringReader;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@ManagedBean
@SessionScoped
public class DemandeBean implements Serializable {

    private Demande demande = new Demande();
    private static List<Demande> ListDemandes = new ArrayList<>();
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
        demande = new Demande();

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

    public void logDataFromIframe() {
        String rawData = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("iframeData");
        JsonReader jsonReader = Json.createReader(new StringReader(rawData));
        JsonObject jsonData = jsonReader.readObject();

        this.demande.setAbout(jsonData.getString("nom"));
        this.demande.setDescription(jsonData.getString("description"));

        this.ajouterDemande();

        //System.out.println("Received data from iframe: " + "nom : "+ jsonData.get("nom") +" description : " + jsonData.get("description"));
    }



}

package com.example.jsf;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.SessionScoped;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@SessionScoped
public class DemandeBean implements Serializable {

    private Demande demande = new Demande();
    private List<Demande> ListDemandes = new ArrayList<>();
    private String searchKeyword;

    public DemandeBean() {
        startSocketServer();
    }

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

    public void startSocketServer(){
        new Thread(() -> {
            try(ServerSocket serverSocket = new ServerSocket(8080)){
                System.out.println("Server listening on port 8080");
                while(true){
                    try{
                        Socket clientSocket = serverSocket.accept();
                        System.out.println( "connection established with "+ clientSocket.getPort()+" ::" + clientSocket.getInetAddress());
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
                    }
        }).start();
    }
}

package com.example.jsf;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;



@Path("/demandes")
public class DemandeResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Demande> getDemandes() {
        DemandeBean demandeBean = new DemandeBean();
        return demandeBean.getDemandes();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addDemande(Demande demande) {
        DemandeBean demandeBean = new DemandeBean();
        demandeBean.ajouterDemande(demande);
    }
}
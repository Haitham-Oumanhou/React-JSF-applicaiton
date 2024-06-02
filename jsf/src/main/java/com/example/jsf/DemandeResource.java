package com.example.jsf;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
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
}
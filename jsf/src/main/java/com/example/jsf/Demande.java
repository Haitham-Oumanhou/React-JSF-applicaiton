package com.example.jsf;



public class Demande {

    private String about ;

    private String Description ;


    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    @Override
    public String toString() {
        return "Demande{" +
                "about='" + about + '\'' +
                ", Description='" + Description + '\'' +
                '}';
    }
}

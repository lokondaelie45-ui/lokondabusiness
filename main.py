from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Autoriser votre site GitHub Pages à communiquer avec ce serveur Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Structure des données reçues lors de l'inscription
class Membre(BaseModel):
    nom: str
    courriel: str
    mot_de_passe: str

@app.get("/")
def accueil():
    return {"message": "Serveur Backend Lokonda Business Opérationnel !"}

@app.post("/inscription")
def inscrire_utilisateur(membre: Membre):
    # Ici, Python traite l'inscription reçue depuis le site HTML
    print(f"Nouvelle inscription reçue pour : {membre.nom} ({membre.courriel})")
    return {
        "statut": "succes",
        "message": f"Bienvenue {membre.nom} ! Votre compte a été créé avec succès."
    }

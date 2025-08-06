from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/explain")
def get_explanation(deck: str = Query(None)):
    responses = {
        "Momentum Hunter": "Bra val! Denna strategi följer starka prisrörelser och passar när marknaden trendar uppåt.",
        "Contrarian Pulse": "Du går mot strömmen – vilket kräver tålamod. Håll koll på fundamenta och vändpunkter.",
        "TrendFollower X": "Stark historisk prestanda i volatila marknader. AI rekommenderar riskjusterad position sizing."
    }
    return {"message": responses.get(deck, "Välj en strategi för att få specifik AI-feedback.")}

@app.get("/deck")
def get_decks():
    return {"decks": ["Momentum Hunter", "Contrarian Pulse", "TrendFollower X"]}

@app.get("/xp")
def get_xp():
    return {"level": 3, "points": 1450, "badge": "Strategist"}

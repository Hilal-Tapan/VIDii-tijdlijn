# Procesverslag Hilal
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.




## Jij

### Ontwerper:
Hilal Tapan 

#### Je startniveau:
Blauw 


# Je plan

<details open>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>
  Na even brainstormen kwam ik erachter dat ik princess Peach wou kiezen voor mijn opdracht. Mario is een spel wat ik vroeger altijd speelde, maar iedereen koos Mario. Dus het leek me leuk om voor Peach te gaan, ook omdat ik haar levels visueel mooi vind en visueel mooi maken is een uitdaging voor mij. Dus Peach leek me een goede optie om dit leerdoel op de kunnen beoefenen. Peach heeft ook best wel veel evoluties gehad door de jaren heen dus ik had genoeg opties voor de tijdlijn.

  ### De eerste versie/schets:
  <img src="https://github.com/Hilal-Tapan/VIDii-tijdlijn/blob/main/images/schets1.png" width="375px" alt="eerste versie/schets">
  <img src="https://github.com/Hilal-Tapan/VIDii-tijdlijn/blob/main/images/schets2.png" width="375px" alt="eerste versie/schets">
  <img src="https://github.com/Hilal-Tapan/VIDii-tijdlijn/blob/main/images/schets3.png" width="375px" alt="eerste versie/schets">
  Dit is de eerste versie van me schets die ik heb uitgekozen. Het idee is dat ik de nieuwste versie van Peach wil maken in de nieuwe wereld maar alle andere Peaches zijn kwijt. Het is de bedoeling dat ze hen gaat zoeken. De eerdere versie Peaches zitten vast in de kelder van de oude versie van Mario. 


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Graag zou ik me javascript skills willen verbeteren, ik heb hier simpelweg nog zo weinig mee gedaan en ik vind functies maken nog erg lastig. Ik zou dit graag willen leren. Ik doe zelf regelmatig cursusjes en lees er dingen over maar ik merk dat ik het meeste leer van gewoon doen. 

  - Animeren. Hier heb ik bij webtypografie voor het eerst pas mee gewerkt en dit zou ik nog beter willen leren. Je kan zoveel met animatie, ik zou hier lekker mee willen experimenteren en mezelf uitdagen. De combinatie van animatie met javascript lijkt me ook erg leerzaam en iets wat ik wil gaan doen.

  - Visuele vormgeving is ook iets wat ik soms nog moeilijk vind. Om goed naar de details (paaseieren) te leren kijken. Vooral als het een vak is waar zowel code en vormgeving belangrijk zijn zoals bij dit vak vind ik het soms lastig om beide evenveel aandacht te geven. Hier wil ik mezelf ook in uitdagen om goed naar de details te kijken en echt me tijd in beide aspecten te stoppen.
 
</details>




## Voortgang/Feedback 1 

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  ### Bevinding 1 (van Keïsha):
  Je hebt nog geen progressive disclosure in je concept toegepast, denk hier over na.

  #### oplossing:
  Ik kreeg de feedback dat ik nog geen progressive disclosure had en dit klopt. Ik moest nog nadenken over hoe ik de informatie naar voren wou laten komen. Ik heb dit uiteindelijk gedaan met de kelder waar alle princessen in vastzaten. Hen moet je eerst zoeken want sommige zitten verstopt en daarna als je op ze klikt komt er een tekst bubbel met informatie en een klein verhaaltje tevoorschijn. De princessen heb ik een button gemaakt en een hover en active state gegeven zodat de gebruiker weet dat ze klikbaar zijn. Met toggle kan je de tekstbubbels ook weer uitzetten.



  ### Bevinding 2 (van Keïsha):
  Met javascript het karakter interactiever maken.

  #### oplossing:
  Bij level 1 met princes peach die springt om de munten te vangen was het in mijn schets nog niet heel interactief. Hierdoor heb ik een knop toegevoegd die zegt start game. Zo lijkt het echt een beetje op een spelletje. Ik wou eigenlijk peach de muis laten volgen zodat het nog interactiever is en je echt de muntjes kan vangen maar hier had ik geen genoeg tijd voor dus heb het gelaten bij een setTimeOut waardoor de muntjes verdwijnen na een bepaald aantal seconden nadat er op de start knop wordt geklikt. Ook start dan pas de spring animatie van princes Peach.
  <img src="images/bevinding1.png" width="375px" alt="final ontwerp">
  <img src="images/bevinding-1.png" width="375px" alt="final ontwerp">


  ### Bevinding 3 (van Keïsha):
  Je kan ook ideeën uit je vorige schetsen combineren met je eindschets zodat het completer wordt.

  #### oplossing:
  Ik wist zelf nog niet helemaal wat ik wou doen met de kelder en hoe ik dat wou vormgeven maar Keïsha kwam met het idee dat ik het ook kon combineren met me vorige schetsen. Toen kwam ik zelf met het idee dat ik ze kon verstoppen en dit heb ik gedaan met de buizen die je ziet in de mario game. Hier heb ik animaties bij gevoegt om het interactiever te maken.



  ### Bevinding 4:
  Mensen weten niet dat je naar beneden kan scrollen, dit kan interactiever en beter aangegeven worden.

  #### oplossing:
  Ik heb een pijltje toegevoegd die ook een animatie is en beweegd waardoor het opvalt. Als je hierop klikt krijg je section 2 (de kelder) te zien. Hier zat ik even mee te knoeien en de javascript functie lukte niet helemaal. Ik was er wel bijna. Uiteindelijk heeft Jeffrey me hierbij geholpen en zei dat ik een scrollIntoView moest gebruiken en dat ik dat maar net moest weten. 



  ### Bevinding 5:
  De sprong van princess Peach vloeiender en mooier maken

  #### oplossing:
  Ik wou mezelf uitdagen met animeren dus ik wou de sprong van peach van de bovenwereld wat mooier en vloeiender maken. Dit heb ik gedaan met behulp van deze site https://css-tricks.com/making-css-animations-feel-natural/. Ik vond dit een leuke oefening en de keyframe is voor mijn doen best complex geworden maar ik vond het vooral heel leuk om hiermee te experimenteren.

</details>




## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...

</details>




## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...

</details>




## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="final ontwerp">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>




## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1
2. bron 2
3. ...

</details>
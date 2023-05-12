# Projekt-Versicherungsrechner
Das Schulprojekt "Versicherungsrechner" von Luc Zwyssig

## Autor: Luc Zwyssig, Berufsbildnerschule Winterthur

## Zeitraum 10.3.2023 - 11.5.2023

## Projekterklärung

### Idee 
Die Grundidee des Projektes war es, ein Schadensrechner zu erstellen. Mit den Inhalten war eigendlich nichts vorgegeben, was zu viel Flexibilität führte. 

### Funktionen
Das Projekt enthaltet 4 Seiten. Die Homeseite ist nichts speziell und ist eine Wilkommensseite. Der Schadensrechner erlaubt den Benutzer, anhand von Massen den bezahlter Schaden der Versicherung herauszufinden. Beim Vergleicher kann man zwei Prämien vergleichen und herausfinden, welche Prämie bei einem bestimmten Schaden und nach einer bestimmten Zeit bezahlen wird. Unter Versicherungsspiel kann man ein multiple-choice Spiel spielen, wo man sein Wissen über die Begriffe rund um die Versicherung testen kann. die Drei Komponente (Versicherungsrechner, Vergleicher und Versicherungspiel) haben eine Datenbankanbindung, welches den Benutzer erlaubt, Daten in die Datenbank zu speichern und zu holen. Das Projekt wurde mit React-Router entwickelt.
### Struktur
Unter dem Ordner "Versicherungsrechner" sind alle React Komponente zu finden. Diese sind in zwei hauptodnern gruppiert. Unter "Pages" findet man die Vier Seiten. Unter "Comps" findet man die Komponente, die die vier Seiten verwenden. Unter "Versrechnerlocal_weiteres" findet man alle weitere Dokumente, wie die Keyscreens und der Projektaufbau. Unter "Backend" findet man den Code, welcher zur Datenbankverbindung verwendet wird. Zuletzt wird unter "Datenbank" der Datenbank Code gefunden.
### Sprachen
Das Projekt wurde mit React-Javascript entwickelt. Die Datenbank ist in einem Dockerfile abgebildet. 
### Deployment
Ich habe Dockerfiles zur erstellen von Docker Containern des Codes erstellt.



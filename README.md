# Neox Beauty — Site web

Site vitrine pour l'institut de beauté **Neox Beauty**, avec intégration Planitie pour la prise de rendez-vous en ligne.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure du site

Page unique avec sections :

- **Accueil** — Hero avec appel à l'action
- **Services** — Prestations (manucure, semi-permanent, soins…)
- **Équipe** — Collaboratrices par institut
- **Galerie** — Photos illustratives (à remplacer)
- **Rendez-vous** — Widget Planitie
- **Nos instituts** — Levallois-Perret & Saint-Brice-sous-Forêt

## Intégration Planitie

Coller le code d'intégration Planitie dans `src/components/Booking.tsx`, à la place du placeholder.

## Données à compléter

Voir `src/data/site.ts` pour mettre à jour :

- Adresses exactes des instituts
- Numéros de téléphone
- Horaires d'ouverture
- Tarifs réels
- Photos de l'équipe et des réalisations

# Site Vitrine Loulou & Joujou Clown

Ce projet est un site vitrine pour le duo de clowns "Loulou & Joujou Clown", développé avec Next.js et Tailwind CSS.

## Fonctionnalités

- Site responsive adapté à tous les appareils
- Formulaire de réservation avec envoi d'email via EmailJS
- Optimisation SEO avec les balises meta appropriées
- Génération statique des pages pour de meilleures performances
- Design moderne avec les couleurs de la marque (rouge #F88E8E et jaune #FFED4A)

## Installation et démarrage local

1. Clonez le repository
\`\`\`bash
git clone https://github.com/votre-username/loulou-joujou-clown.git
cd loulou-joujou-clown
\`\`\`

2. Installez les dépendances
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Lancez le serveur de développement
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Configuration du service d'email

Le site utilise EmailJS pour envoyer les demandes de réservation par email. Pour configurer ce service :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service (par exemple avec Gmail)
3. Créez un template d'email avec les variables suivantes :
   - `from_name` : Nom du client
   - `from_email` : Email du client
   - `phone` : Téléphone du client
   - `event_type` : Type d'événement
   - `event_date` : Date de l'événement
   - `message` : Message du client

4. Modifiez le fichier `lib/send-email.ts` avec vos identifiants EmailJS :
\`\`\`typescript
const serviceId = 'VOTRE_SERVICE_ID';
const templateId = 'VOTRE_TEMPLATE_ID';
const publicKey = 'VOTRE_CLE_PUBLIQUE';
\`\`\`

## Déploiement

Le site peut être déployé facilement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez le site

## Modification des textes et visuels

- Les textes peuvent être modifiés directement dans les fichiers correspondants dans le dossier `app/`
- Pour remplacer les images placeholder, ajoutez vos images dans le dossier `public/` et mettez à jour les chemins dans les composants

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [EmailJS](https://www.emailjs.com/) - Service d'envoi d'emails
- [Vercel Analytics](https://vercel.com/analytics) - Analytique

## Structure du projet

- `app/` - Pages du site (routing basé sur les dossiers)
- `components/` - Composants réutilisables
- `lib/` - Fonctions utilitaires
- `public/` - Fichiers statiques (images, etc.)

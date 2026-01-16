# Étape 1 : Build
FROM node:20-alpine AS build
WORKDIR /app

# Optimisation du cache Docker : on installe les dépendances d'abord
COPY package*.json ./
RUN npm install

COPY . .

# --- CRUCIAL : Placer les arguments AVANT le build ---
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Vite utilisera la variable ENV définie ci-dessus pour générer les fichiers statiques
RUN npm run build

# Étape 2 : Serveur Nginx (Production)
FROM nginx:stable-alpine

# Nettoyage et configuration Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Récupération des fichiers générés à l'étape 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
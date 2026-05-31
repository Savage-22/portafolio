# syntax=docker/dockerfile:1

# ── Stage 1: build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app

# Copiar manifiestos primero para aprovechar el cache de capas:
# si package.json no cambió, Docker reutiliza la capa de npm ci.
COPY frontend/package*.json ./

# --mount=type=cache persiste el cache de npm entre builds locales,
# evita re-descargar paquetes cuando solo cambia el código fuente.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline

COPY frontend/ .
RUN npm run build

# ── Stage 2: runtime ────────────────────────────────────────────────────────
# nginx:alpine sin versión fija puede traer capas distintas en cada pull;
# pinamos la major.minor para estabilidad de cache.
FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

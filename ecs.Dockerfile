FROM node:20

ARG LOTUS_CLIENT_ID=
ARG LOTUS_CLIENT_SECRET=
ARG LOTUS_URL=
ARG MEDPLUM_BASE_URL=
ARG MEDPLUM_CLIENT_ID=
ARG PHASEZERO_EMAIL=
ARG PHASEZERO_PASSWORD=
ARG PHASEZERO_TENANT_ID=
ENV LOTUS_CLIENT_ID=${LOTUS_CLIENT_ID}
ENV LOTUS_CLIENT_SECRET=${LOTUS_CLIENT_SECRET}
ENV LOTUS_URL=${LOTUS_URL}
ENV MEDPLUM_BASE_URL=${MEDPLUM_BASE_URL}
ENV MEDPLUM_CLIENT_ID=${MEDPLUM_CLIENT_ID}
ENV PHASEZERO_EMAIL=${PHASEZERO_EMAIL}
ENV PHASEZERO_PASSWORD=${PHASEZERO_PASSWORD}
ENV PHASEZERO_TENANT_ID=${PHASEZERO_TENANT_ID}

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN echo "LOTUS_CLIENT_ID=${LOTUS_CLIENT_ID}" >> .env
RUN echo "LOTUS_CLIENT_SECRET=${LOTUS_CLIENT_SECRET}" >> .env
RUN echo "LOTUS_URL=${LOTUS_URL}" >> .env
RUN echo "MEDPLUM_BASE_URL=${MEDPLUM_BASE_URL}" >> .env
RUN echo "MEDPLUM_CLIENT_ID=${MEDPLUM_CLIENT_ID}" >> .env
RUN echo "PHASEZERO_EMAIL=${PHASEZERO_EMAIL}" >> .env
RUN echo "PHASEZERO_PASSWORD=${PHASEZERO_PASSWORD}" >> .env
RUN echo "PHASEZERO_TENANT_ID=${PHASEZERO_TENANT_ID}" >> .env

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]


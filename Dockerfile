FROM node:latest

RUN groupadd -r nodegroup && useradd -r -g nodegroup nodeuser

WORKDIR /app
COPY app /app

EXPOSE 3000
USER nodeuser

CMD ["npm", "start"]
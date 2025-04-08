FROM golang:1.24.2-bullseye

WORKDIR /src/backend

COPY api.go .

ENTRYPOINT ["go", "run", "api.go"]
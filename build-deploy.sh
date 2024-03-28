#!/bin/bash

function help() {
  echo "Usage: `basename $0` <build/deploy/serve/all>"
  echo 
  echo "  build   - builds usind docker compose and the site is in: docker-dist"
  echo "  deploy  - deploy using kubectl"
  echo "  serve   - open http server with build"
  echo "  all     - build & deploy"
  echo
}

function checks() {
  if [ ! -d docker-dist ]; then
    echo "No: docker-dist - please build first"
    exit 1
  fi
}

function serve() {
  checks
  echo "Open http://localhost:9000"
  cd docker-dist
  python3 -m http.server 9000
}

function build() {
  docker-compose -f docker-compose.build.yaml build --no-cache
  docker-compose -f docker-compose.build.yaml up
}

function deploy() {
  checks
  cd docker-dist && bsdtar --no-acls --no-mac-metadata --no-xattrs --exclude Dockerfile --exclude-vcs --exclude '*.yml' --exclude README.md --exclude '*.sh' -cf - . | kubectl -n dynamic-sites exec -i deploy/dynamic-sites -- tar -C /sites/teonite.com -xf -
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    all)
      echo "Running all tasks..."
      build
      deploy
      exit 0
      ;;
    build)
      echo "Building..."
      build
      exit 0
      ;;
    deploy)
      echo "Deploying..."
      deploy
      exit 0
      ;;
    serve)
      echo "Serving for you..."
      serve
      exit 0
      ;;
     *)
      echo "Invalid option: $1"
      help
      exit 1
      ;;
  esac
  shift
done

help

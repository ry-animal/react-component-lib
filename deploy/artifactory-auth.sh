#!/bin/bash

set -e

NPM_TOKEN=$(printf $ARTIFACTORY_USER:$ARTIFACTORY_API_KEY | base64 | tr -d '\n')

echo "Setting Artifactory credentials..."
npm config set registry https://gme.jfrog.io/gme/api/npm/npm
npm config set '_auth' $NPM_TOKEN
npm config set 'always-auth' true
npm config set email $CICD_EMAIL

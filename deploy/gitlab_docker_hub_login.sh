#!/bin/bash

set -e

docker login --username ${DOCKER_HUB_USER} --password ${DOCKER_HUB_TOKEN}

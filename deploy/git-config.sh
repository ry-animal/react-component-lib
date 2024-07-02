#!/bin/bash

set -e

git config --global user.email "$CICD_EMAIL"
git config --global user.name "CICD"

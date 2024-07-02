#!/bin/bash
set -e

apk add --no-cache curl jq python3 py3-pip
pip install awscli==1.21.11
aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${ECR_REPOSITORY}
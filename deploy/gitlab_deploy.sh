#!/bin/bash
set -e

aws eks update-kubeconfig --name ${CLUSTER_NAME} --region ${AWS_DEFAULT_REGION}
helm upgrade nft-web-components --wait \
    -i ${CI_PROJECT_DIR}/deploy/charts \
    -f ${VALUES_FILE} \
    --namespace ${DEPLOY_NAMESPACE} \
    --set image.tag=${IMAGE_TAG}

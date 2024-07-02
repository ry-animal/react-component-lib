#!/bin/bash

set -e

DOCKER_IMAGE=$1
PRISMA_TWISTLOCK_CONSOLE=$2

echo "Docker Image to scan: ${DOCKER_IMAGE}"

docker image inspect ${DOCKER_IMAGE} > /dev/null

ACCESS_TOKEN=$(
            curl -s -k \
            -H "Content-Type: application/json" \
            -X POST \
            -d \
            "{
            \"username\":\"$TWISTLOCK_SAAS_CI_USER\",
            \"password\":\"$TWISTLOCK_SAAS_CI_PASS\"
            }" \
            ${PRISMA_TWISTLOCK_CONSOLE}/api/v1/authenticate | jq -r .token
        )

CONSOLE_VERSION=$(curl -L -k --header "authorization: Bearer ${ACCESS_TOKEN}" ${PRISMA_TWISTLOCK_CONSOLE}/api/v1/version)
echo -e "\nTWISTLOCK CONSOLE VERSION: ${CONSOLE_VERSION}\n"

echo -e "\nInstalling twistcli\n"
curl -L -k --header "authorization: Bearer ${ACCESS_TOKEN}" ${PRISMA_TWISTLOCK_CONSOLE}/api/v1/util/twistcli > twistcli
chmod a+x twistcli

./twistcli --version | grep version
TWISTCLI_RESULT=$?

if [ ${TWISTCLI_RESULT} -eq 0 ]
then
    echo "----------------------------------------------------------------------------------------------"
    ./twistcli images scan \
      --address=${PRISMA_TWISTLOCK_CONSOLE} \
      --token ${ACCESS_TOKEN} \
      --details \
      ${DOCKER_IMAGE}

    TWISTCLI_RESULT=$?

    if [ ${TWISTCLI_RESULT} -eq 0 ]
    then
        echo "----------------------------------------------------------------------------------------------"
        echo "-------------  SCAN APPROVED  -------------"
    else
        echo "Vulnerability threshold check results: FAIL"
        exit 1
    fi
else
    echo -e "\nError on installing TWISTCLI"
    exit 1
fi

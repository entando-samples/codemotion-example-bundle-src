#!/bin/sh

echo ""
echo "Building project and Docker image "
export MY_IMAGE="germanogiudici/codemotion-bff:0.0.1-SNAPSHOT"
docker build -t ${MY_IMAGE}  .
echo "Built $MY_IMAGE"

echo ""
echo "Uploading $MY_IMAGE to dockerhub"
docker push $MY_IMAGE

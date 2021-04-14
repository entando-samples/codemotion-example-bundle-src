cp -r bundle-src bundle (cp -r bundle-src/* bundle/)

./prepareDockerImage.sh


docker run --rm -p 8081:8081 germanogiudici/codemotion-bff:0.0.1-SNAPSHOT

ent prj init

ent prj fe-build --all

ent prj pbs-init

ent prj fe-push (--force)

ent prj generate-cr | ent kubectl apply -n entando -f -

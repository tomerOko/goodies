The following only builds the images, does not start the containers:
docker-compose build

The following builds the images if the images do not exist and starts the containers:
docker-compose up

If you add the --build option, it is forced to build the images even when not needed:
docker-compose up --build

The following skips the image build process:
docker-compose up --no-build
If the images aren't built beforehand, it fails.

The --no-cache option disables the Docker build cache in the image creation process. This is used to cache each layer in the Dockerfile and to speed up the image creation reusing layers (~ Dockerfile lines) previously built for other images that are identical.
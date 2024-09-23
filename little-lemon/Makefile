# Filename: Makefile

RUNTIME=docker
IMAGE=little-lemon-restaurant
IMAGE_TAG=latest
IMAGE_NAME=$(IMAGE):$(IMAGE_TAG)
APP_DIR=little-lemon

.PHONY: run-container
run-container: build-image
	$(RUNTIME) run -it --rm \
		-p 3000:80 \
		$(IMAGE_NAME)

.PHONY: build-image
build-image: Dockerfile
	$(RUNTIME) build -f $< -t $(IMAGE_NAME) .

.PHONY: clean
clean:
	$(RUNTIME) rmi $(IMAGE_NAME)

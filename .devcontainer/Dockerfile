FROM mcr.microsoft.com/devcontainers/python:0-3.11

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install --no-install-recommends vim

USER vscode
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN sudo ln -s /home/vscode/.deno/bin/deno /usr/local/bin/deno
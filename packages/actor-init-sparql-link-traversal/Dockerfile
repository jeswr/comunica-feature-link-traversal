FROM node:10

# Install location
ENV dir /var/www/@comunica/actor-init-sparql-link-traversal/

# Copy the engine files (generated from package.json!files)
COPY config ${dir}/config/
COPY bin/*.js ${dir}/bin/
COPY index.js index-browser.js engine-default.js package.json ${dir}

# Set the npm registry
ARG NPM_REGISTRY=https://registry.npmjs.org/
RUN npm config set @comunica:registry $NPM_REGISTRY

# Install the node module
RUN cd ${dir} && npm install --only=production

# Run base binary (generated from package.json!bin)
WORKDIR ${dir}
ENTRYPOINT ["node", "./bin/query.js"]

# Default command
CMD ["--help"]

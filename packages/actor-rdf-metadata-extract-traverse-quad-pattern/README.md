# Comunica Traverse Quad Pattern RDF Metadata Extract Actor

[![npm version](https://badge.fury.io/js/%40comunica%2Factor-rdf-metadata-extract-traverse-quad-pattern.svg)](https://www.npmjs.com/package/@comunica/actor-rdf-metadata-extract-traverse-quad-pattern)

An [RDF Metadata Extract](https://github.com/comunica/comunica/tree/master/packages/bus-rdf-metadata-extract) actor that
collects all URIs in a page that match the current quad pattern
and stores it inside the metadata under the `traverse` key.

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/actor-rdf-metadata-extract-traverse-quad-pattern
```

## Metadata entries

This actor adds the following entries to the metadata object.

* `traverse`: Array of ILink to traverse.

## Configure

After installing, this package can be added to your engine's configuration as follows:
```text
{
  "@context": [
    ...
    "https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-rdf-metadata-extract-traverse-quad-pattern/^1.0.0/components/context.jsonld"  
  ],
  "actors": [
    ...
    {
      "@id": "config-sets:resolve-hypermedia.json#myRdfMetadataExtractTraverseQuadPattern",
      "@type": "ActorRdfMetadataExtractTraverseQuadPattern"
    }
  ]
}
```

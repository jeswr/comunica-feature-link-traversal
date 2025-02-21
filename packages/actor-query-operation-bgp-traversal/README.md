# Comunica BGP Traversal Query Operation Actor

[![npm version](https://badge.fury.io/js/%40comunica%2Factor-query-operation-bgp-traversal.svg)](https://www.npmjs.com/package/@comunica/actor-query-operation-bgp-traversal)

A [Query Operation](https://github.com/comunica/comunica/tree/master/packages/bus-query-operation) actor that handles [SPARQL Basic Graph Patterns](https://www.w3.org/TR/sparql11-query/#BasicGraphPatterns)
based on Hartig's heuristic for plan selection in link traversal environments
as described in "Zero-Knowledge Query Planning for an Iterator Implementation of Link Traversal Based Query Execution".

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/actor-query-operation-bgp-left-deep-smallest
```

## Configure

After installing, this package can be added to your engine's configuration as follows:
```text
{
  "@context": [
    ...
    "https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-query-operation-bgp-left-deep-smallest/^1.0.0/components/context.jsonld"  
  ],
  "actors": [
    ...
    {
      "@id": "config-sets:sparql-queryoperators.json#myLeftDeepSmallestBgpQueryOperator",
      "@type": "ActorQueryOperationBgpLeftDeepSmallest",
      "cbqo:mediatorQueryOperation": { "@id": "config-sets:sparql-queryoperators.json#mediatorQueryOperation" }
    }
  ]
}
```

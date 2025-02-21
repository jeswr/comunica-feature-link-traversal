import type { IActionRdfResolveHypermediaLinks,
  IActorRdfResolveHypermediaLinksOutput, ILink } from '@comunica/bus-rdf-resolve-hypermedia-links';
import { ActorRdfResolveHypermediaLinks } from '@comunica/bus-rdf-resolve-hypermedia-links';
import type { IActorArgs, IActorTest } from '@comunica/core';

/**
 * A comunica Traverse RDF Resolve Hypermedia Links Actor.
 */
export class ActorRdfResolveHypermediaLinksTraverse extends ActorRdfResolveHypermediaLinks {
  public constructor(
    args: IActorArgs<IActionRdfResolveHypermediaLinks, IActorTest, IActorRdfResolveHypermediaLinksOutput>,
  ) {
    super(args);
  }

  public async test(action: IActionRdfResolveHypermediaLinks): Promise<IActorTest> {
    if (!action.metadata.traverse) {
      throw new Error(`Actor ${this.name} requires a 'traverse' metadata entry.`);
    }
    return true;
  }

  public async run(action: IActionRdfResolveHypermediaLinks): Promise<IActorRdfResolveHypermediaLinksOutput> {
    return {
      urls: action.metadata.traverse.map((fileLink: ILink) => {
        const hashPosition = fileLink.url.indexOf('#');
        if (hashPosition >= 0) {
          fileLink.url = fileLink.url.slice(0, hashPosition);
        }
        return fileLink;
      }),
    };
  }
}

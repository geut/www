---
page: post
title: "A collaboration story: Building p2pcommons SDK"
subtitle: "In this article, we will dig deeper into a new facet of GEUT: a collaboration between our team and Liberate Science to radically improve the landscape of scholarly research."
author: diego
tags:
  - collaboration
  - dat
date: 2020-01-10
---

As we evolve as a company we become more specialized in building decentralized products, we see and strongly believe that there is a lot of room for products with a P2P edge, of course, this is a challenge in itself. But our experience as a fullstack team combined with our knowledge of the Dat ecosystem gives us some confidence on the pursuit of such a purpose. This article will also introduce another team, the [Liberate Science](https://libscie.org/) team, a key new partner. The current article introduces some of the initial work we have done together up to now and some of our next steps.

```md
Repositories in this article:

- https://github.com/p2pcommons/sdk-js
- https://github.com/hypergraph-xyz/cli
- https://github.com/p2pcommons/specs
- https://github.com/hypergraph-xyz/desktop
- https://github.com/hypergraph-xyz/vault
- https://github.com/mafintosh/hyperdrive/
- https://github.com/andrewosh/corestore
- https://github.com/hyperswarm/hyperswarm
```

## Establishing a relationship

This project started when [Chris Hartgerink](https://twitter.com/chartgerink) wrote us a line, telling us that he had seen us working with [Dat](https://dat.foundation/) and that he was building an early prototype of a decentralized knowledge commons CLI. Chris wanted to know if working on something like this would be interesting for us.

We started talking and as soon as Chris shared more details about what he had envisioned, we saw that this was not only a super interesting challenge but also a good opportunity to create _software that matters_. To create software that can help society by revolutionizing the way scientific content is created, shedding light on the whole research process and possibly improving the way conclusions arise. You can read more about this [here](https://www.mdpi.com/2304-6775/6/2/21).

As soon as we saw this, we decided that we should have a deeper collaboration on a project like this. Not only seeing this with _consultancy eyes_ but also adding **ownership** and partnership ingredients to the negotiation.

As a team we want to start exploring with some products from a while ago but we know the difficulties that this represents not only technically speaking but also _how  you communicate your idea to others_, _how you monetize it effectively_ and _how you find other actors to participate and enrich this idea_. The last point is of particular interest to us, we know clearly that great software **is not just** about solving a problem with code.

If we want to achieve a product that unfolds a beautiful experience there are plenty of roles that can be part of such an endeavor. We quickly figured out that working with others on this pursuit will be not only necessary but crucial to deliver _something_.

So when this opportunity appeared we expressed our desire to be part of this project to Chris. As you can imagine at this point, this was all about building a relationship. For us, this involves dealing with people, communicating your intentions clearly and _as soon as possible_, being extremely open to questions and speaking frankly. That’s what we did and here we are introducing you to this wonderful project and this collaboration between GEUT and Liberate Science.

## The Technical Challenge

For the first part of the project our team was in charge of the construction of an [SDK](https://github.com/p2pcommons/sdk-js) that can be used from a CLI tool and a desktop app. Creating an SDK gives you the chance to define and mould an API from the scratch. Having some conversations with the Liberate Science team helps us not only to have a better understanding of the requirements but also to have some early feedback on the API shape.

This just implies a little bit of a challenge, what is more, the tricky part is that the ecosystem is also in flux. For this project we decided to start using some modules in their latest versions knowing they are experimental. We are referring to the so-called “**Dat2**” family of modules. Dat2 refers to a set of low level modules which are about to be updated and some of those changes will not be backwards compatible. This update is super exciting because all the improvements this brings and will probably become the foundation for the next generation of P2P apps.

In this scenario we need to closely follow the development of some specific modules and dependencies and try to be part of the conversation about updates and releases. Fortunately  for us, GEUT is a company that is used to be closer to the Dat Foundation core team and in fact is one of our key values to be part of this community (this is why we regularly organise the dat-land comm-comm meetings).

What we are trying to say here is that **technical challenges are social challenges**, not only writing code. Working this way we have better chances to have a voice on some core development (from a stakeholder POV) and/or even contribute back and collaborate with other companies/individuals in the pursuit of mutual benefit.

For example, some modules of interest these days are [hyperdrive](https://github.com/mafintosh/hyperdrive/), [corestore](https://github.com/andrewosh/corestore) and the [hyperswarm](https://github.com/hyperswarm/hyperswarm) stack (the new transport layer for Dat). From our side, we need to follow the progress of these modules closely, read the source code to see where the breaking changes are, prepare our behavior tests, be prepared to stick to some versions temporarily and try to gradually adopt the new features while giving an easy to use and somehow predictable API that is always improving.

Currently the p2pcommons SDK looks like this:

<img src="/static/images/p2pcommonsAPI.png" alt="p2pcommons API snippet" style="width: 100%;">

This is just a small extract from the p2pcommons `examples/` folder. Check out the full example [here](https://github.com/p2pcommons/sdk-js/tree/master/examples). You will also find a `creator.js` file that can be used as simple _seeder_ to try the `hyperswarm networking` in action.
If you want to see the SDK being used, you can check out the [Hypergraph CLI](https://github.com/hypergraph-xyz/cli).

### A Family of Projects

The SDK is not only one project of this story. In tandem with it, the Liberate Science team is developing a CLI that provides a useful experience using the SDK and serves as our first line of feedback these days. After the SDK and CLI become more stable some of the work will move to the desktop app. These two projects, CLI and the upcoming desktop app belong to the [Hypergraph](https://github.com/hypergraph-xyz) constellation. The work on the SDK lives on [p2pcommons](https://github.com/p2pcommons/).

To orchestrate the releases and receive feedback these projects are in constant communication. These days [Julian Gruber](https://github.com/juliangruber) is in charge of the hypergraph CLI, editor and desktop projects while Diego from GEUT is working on the SDK on the p2pcommons side. Having the chance to work directly with Julian is one of the incredible benefits of this collaboration. The team meets weekly and all [minutes are made public](https://github.com/p2pcommons/working-group/).

## Further Steps

After the holidays, the teams will come back and continue with the hard work progressively releasing more features, take a look to our [roadmap](https://github.com/p2pcommons/sdk-js/wiki/Roadmap).

One of the key features that is currently supported but has room for improvement is the networking. For example, in our current solution we are creating and seeding multiples corestores instead of replicating only one. But how this would affect the way we store data? The [p2pcommons interoperability spec](https://github.com/p2pcommons/specs/blob/master/interoperability.md) defines a particular way of doing this. This is one of the tasks that we are going to be working on the next days.

Besides SDK work, the next project is the `daemon`. In this context a daemon is like a super seeder, a stand alone process, keeping your content reachable. Once ready, the SDK should be able to communicate (using some form of RPC) with the daemon making the SDK’s way _lighter_. This task can be of benefit to other teams and there is room for collaboration with the community on a single universal high-level daemon.

Another aspect that we are really keen to explore is related to the ecosystem of services and tools around the CLI and desktop app. Some of these user-facing services provide value, offering add-ons or improving some parts of the whole experience of doing research using the Hypergraph family. The most direct example is a service called `vault` which can be seen as a _registry_. The vault can be used to keep your contents online 24/7 among other features. Direct user-facing value should be the basis of any kind of monetization.

Check out the vault progress [here](https://github.com/hypergraph-xyz/vault/wiki#system-diagram).

## Conclusion

As this is ongoing work, we are optimistic about what can be done regarding the future of scholarly research and the ideas behind the p2pcommons project. At the same time, as a young company which is working on a niche and evergreen field we are doing our best to release a _tangible_ product that combines a delightful experience with the intricacies of the P2P side.

As a final remark we want to share our enthusiasm for crafting relationships (_and eventually write good stories_) like the one introduced here. **We definitely want to encourage you to [connect with us](https://geutstudio.com/#contact-us) if you feel the same way**. We know that we will continue our quest and hope you do it too. Maybe one day our paths will cross.

Thanks for reading!

**Cheers to the New Year! :tada:**


___
_Many thanks to editors and proofreaders :clap: :_
- [Chris Hartgerink](https://twitter.com/chartgerink)
- [Martin Acosta](https://twitter.com/tinchoz49)

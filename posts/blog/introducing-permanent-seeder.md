---
page: post
title: "Introducing: The Permanent Seeder"
subtitle: "Today, in tandem with Liberate Science, we are launching together the brand new Permanent Seeder. The hyperdrives super seeder. Continue reading to learn more about it."
author:
  - diego
  - esteban
  - ChrisHartgerink
tags:
  - product
  - libscie
  - partner
date: 2020-11-16
---

[In a previous post](https://geutstudio.com/blog/partnering-with-liberate-science/), we announced our partnership with [Liberate Science](https://www.libscie.org/) (Germany) to build the peer-to-peer commons ([p2pcommons](https://p2pcommons.com)) infrastructure, which powers applications like Hypergraph.

## The Permanent Seeder

<img class="intro" src="/static/images/permanent-seeder-logo.png" alt="permanent seeder logo">

Today, we're announcing the first release of the [Permanent Seeder](https://github.com/geut/permanent-seeder/) software. Most practically, this will help make any content shared through the Hypergraph Vault easy and fast to access. The idea is that anybody can deploy a permanent seeder to help power the infrastructure.

The availability of content is always dependent on who's uploading (seeding) and downloading the content. In centralized systems like Facebook and Twitter, it's their servers that are always uploading the content for you to download.

The p2pcommons is a distributed information system and depends on the users to upload and download the files. The permanent seeder is an always-on user that downloads all content and makes it available for others to download 24/7.

<img src="/static/images/centralized-vs-distributed.png" alt="permanent seeder vs centralized storage alternatives" style="width: 100%;">

Imagine that you share some content onto the p2pcommons using Hypergraph and then you immediately shut down your computer. You would no longer be uploading the content if somebody comes along and wants to download it. As a result nobody could access what you just shared.

The permanent seeder is essential in making sure that what you share can be downloaded by others at any time. The more people that access your content, the less important the permanent seeder will be. But also irregularly accessed content deserves to stay available. And everything deserves to be available at reasonable speeds.

## How it works


The permanent seeder is just another user on the peer-to-peer network, but because it's a user that downloads much more and needs to be on 24/7, it has to work a bit differently behind the scenes. In this section, we'll explain a bit more about the architecture and design of the permanent seeder.

First of all, the permanent seeder is a command line interface (CLI) that you can easily install from npm. To be more precise, you can install and launch it with three commands:

```bash
npm i -g @geut/permanent-seeder
```

```bash
permanent-seeder config:init
```

```bash
permanent-seeder start
```


Internally, the CLI is made up of microservices: One in charge of seeding, internal databases, a metrics system, and an API gateway that powers the dashboard. In order to manage these microservices, we use [Moleculer](https://moleculer.services/), a microservices framework for Node.js. You can launch the dashboard with this command:


```bash
permanent-seeder dashboard
```


With this microservice approach, you can deploy the permanent seeder on a small home computer like a Raspberry Pi or deploy it at scale on large server instances (e.g., DigitalOcean).

<img src="/static/images/permanent-seeder-work.png" alt="permanent seeder dashboard" style="width: 100%;">


## What next


The permanent seeder software is ready to be deployed onto personal computers and servers across the world. In fact, we already deployed one ourselves and the Liberate Science team, two. :rocket:

As more and more content gets shared through the p2pcommons and Hypergraph, monitoring performance and further building out the microservices will help the network become more stable and allow for faster downloads.

**We are looking for people and institutions who want to deploy the permanent seeder to help support the p2pcommons infrastructure** :blush: If you're interested in deploying a permanent seeder, [we'd love to hear from you](mailto:contact@geutstudio.com)!





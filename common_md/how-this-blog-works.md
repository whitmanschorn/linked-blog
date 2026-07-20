---
title: "How the Linked Blog Starter works"
date: 2022-12-30
---
1. I use Obsidian to keep notes, and have a folder called `linked` within my main vault. 
2. The [Obsidian Git](https://github.com/denolehov/obsidian-git) plugin pushes the notes in `linked` to the remote repository.
3. A [github action](https://github.com/matthewwong525/linked-blog-starter-md/blob/main/.github/workflows/publish.yml) is automatically triggered to deploy the notes using a [specified template](https://linked-blog-starter.vercel.app/deploy-a-custom-linked-blog-starter) which uses a next.js instance on Vercel.

![[how-linked-blog-starter-works.png]]
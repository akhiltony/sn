---
title: updateLazy
description: 
---
Came up on sndevs slack. According to sources there this does;

> Puts the update into a batch, which means it might not happen right away. 
> Your code can then continue on, but side-effects like BRs and such might not happen for a short while, 
> because the operation doesn’t actually occur yet. 
> **It is undocumented.**
> **It has consequences and isn’t meant for casual use.**

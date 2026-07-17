---
title: "Como escrever posts neste blog"
description: "Um guia rápido com exemplos de formatação, componentes e recursos disponíveis nos posts."
date: 2024-10-05T21:00:00-03:00
tags:
  - documentação
  - guia
  - markdown
  - eleventy
---

{% infobox "info" %}
Agora é possível navegar usando **negrito** apenas o teclado.

- Suporte a Tab
- Melhor foco
- Melhor acessibilidade
{% endinfobox %}

{% infobox "info" %}
Agora é possível navegar usando **negrito**.

- Item 1
- Item 2

[Link](https://...)
`código`
> citação
{% endinfobox %}

## Texto comum

Posts podem ser escritos normalmente em Markdown, com títulos, subtítulos, listas, links, ênfase e blocos diversos.

Você pode, por exemplo, destacar palavras em **negrito**, usar *itálico* ou incluir trechos de `código inline`.

Também é possível organizar o conteúdo em seções para facilitar a leitura.

## Tags de exemplo

Este post usa algumas tags apenas como demonstração:

- `documentação`
- `guia`
- `markdown`
- `eleventy`

Essas tags podem ser usadas para categorizar conteúdos e facilitar navegação futura.

## Blocos informativos

{% infobox "warning" %}
As a general rule, I don’t recommend trying to apply any CSS reset to an existing codebase. Whenever we tinker with baseline styles, we risk things breaking in subtle ways that we might not notice (but our users will).

If you do go this route, be sure to do extensive testing to make sure everything still looks good.
{% endinfobox %}

## Imagens

Também é possível inserir imagens normalmente no meio do conteúdo:

![O que é Post?](/assets/posts/o-que-e-post.png "Na Imagem: O que é Post?")

Isso pode ser útil para ilustrar exemplos, mostrar interfaces, anexar capturas de tela ou complementar explicações visuais.

## Listas

Listas não ordenadas:

- Primeiro item
- Segundo item
- Terceiro item

Listas ordenadas:

1. Primeiro passo
2. Segundo passo
3. Terceiro passo

## Citações

Blocos de citação também funcionam bem para notas, trechos destacados ou observações editoriais.

> Este é um exemplo de citação em bloco dentro de um post.

## Notas de rodapé

O blog também suporta notas de rodapé, como esta aqui.[^1]

Esse recurso é útil quando você quer adicionar contexto sem interromper demais o fluxo principal do texto.[^2]

## Encerramento

No geral, este post funciona como uma pequena documentação prática do formato aceito pelo blog.

Conforme o projeto evoluir, esta página pode ser expandida com mais exemplos e componentes.

[^1]: Este é um exemplo simples de footnote.

[^2]: Notas de rodapé são úteis para observações paralelas, referências ou explicações complementares.
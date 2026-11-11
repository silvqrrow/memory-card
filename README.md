# Memory Card

A Pokémon memory game built with React, made for [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card).

Click each Pokémon only once. The cards shuffle after every click, so you have to remember which ones you've already picked. Click the same one twice and your score resets.

## Features

- 12 Pokémon loaded from the [PokéAPI](https://pokeapi.co/)
- Cards shuffle after every click
- Current score and best score
- Responsive grid that adjusts to your screen size

## Built with

- React (`useState`, `useEffect`)
- Vite
- CSS Grid

## Run it locally

```bash
git clone git@github.com:silvqrrow/memory-card.git
cd memory-card
npm install
npm run dev
```

Then open the link shown in your terminal.

## What I learned

- Fetching data inside `useEffect`, and how the dependency array controls when it runs
- Using `Promise.all` to wait for several requests at once
- Passing data down to components with props, and passing functions down so children can report clicks
- Updating state with new arrays instead of changing the existing one

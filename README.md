# 🦕 Deno-Template
> Simple starter template for new Deno projects

## Requirements

To run this project, make sure the following are installed and available in your shell:

- [Deno](https://deno.land/)
- [Git](https://git-scm.com/)

## Installation

Download Deno from the homepage.

Clone this repo.

Create a local dotenv file.

```sh
cp .env.example .env
```

## Usage

For convenience for running Deno in this project, some `make` commands have been defined in [Makefile](/Makefile).

### Start dev server

This will download dependencies and run [src/server.ts](/src/server.ts).

```sh
make run
```

### Run tests

```sh
make test
```

### Start the debugger

Run the debugger, starting in [src/server.ts](/src/server.ts).

```sh
make debug
```

### Build

Build your project into a single JS file as `dist/server`.

```sh
make build
```

### Delete

Remove the `dist` directory.

```sh
make clean
```

## Status

- [x] Config for environment variables.
- [x] Logger to log the pretty messages.
- [ ] Extend the project to include more resources.
- [ ] Think about a better structure.
- [ ] And honestly probably more...

## Authors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/Vanture">
          <img width="150" height="150" src="https://github.com/Vanture.png?v=3&s=150">
          </br>
          Tim Emiel Twiest
        </a>
      </td>
    </tr>
  <tbody>
</table>

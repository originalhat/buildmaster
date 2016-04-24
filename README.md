# Buildmaster™

Visualization for automated build tools.

## TODO

- [] build some nice views with our data
    - CSS?
- [] smarter data handling (e.g. merge properly)
    - TDD! (elm-test)
    - rules:
        - merge recent branches
        - unique repo && branch
- [] websockets (aka receivin' da data)
    - parse incoming JSON w/ JSON decoder
    - Mailbox?
- [] timestamps / build times / last build / etc.

## Usage

```
onchange '*.elm' -- elm make Main.elm --output main.js
```


# Contributing to @gamestop/nft-web-components


## :arrow_heading_down: Commiting Changes

This repo enforce `conventional commit`. [More info](https://www.conventionalcommits.org/en/v1.0.0/)

#### Types

Must be one of the following:

__build__: Changes that affect the build system or external dependencies (example scopes: webpack, babel, npm)

__chore__: Non production code change

__ci__: Changes to our CI configuration files and scripts (example scopes: gitlab-ci)

__docs__: Documentation only changes

__feat__: A new feature

__fix__: A bug fix

__perf__: A code change that improves performance

__refactor__: A code change that neither fixes a bug nor adds a feature

__revert__: Revert an existing commit

__style__: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

__test__: Adding missing tests or correcting existing tests


#### Commit message structure

```
<type>(scope): <description> (<jira issue>)

[optional body]

[optional footer]
```

```
// Simple Example
feat(calendar): added multiyear props to component (BT-1111)
```

```
// Extended Example
feat(calendar): added multiyear props to component (BT-1111)

- Multiyear prop must be a number
- Two theme styles
- Unit tests and Snapshots

@see BT-1111
```
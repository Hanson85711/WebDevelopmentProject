# WebDevelopmentProject
CS618 Web Development Assignment

## Codespaces Docker network

The devcontainer startup hook creates the `blog-net` Docker network if needed
and adds bridge-specific forwarding rules for user-defined Docker bridge
networks, including networks created by Compose. After adding or changing this
configuration, rebuild the Codespace once; the hook then runs on each
Codespace start. The Docker network is available for containers with
`--network blog-net`.

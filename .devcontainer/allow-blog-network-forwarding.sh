#!/usr/bin/env bash
set -euo pipefail

network=blog-net

if ! docker network inspect "$network" >/dev/null 2>&1; then
  docker network create "$network" >/dev/null
fi

while read -r network_id network_name; do
  if [[ "$network_name" == "bridge" ]]; then
    continue
  fi

  bridge_name=$(docker network inspect --format '{{index .Options "com.docker.network.bridge.name"}}' "$network_id")
  if [[ -z "$bridge_name" || "$bridge_name" == "<no value>" ]]; then
    bridge_name="br-${network_id:0:12}"
  fi

  rule=(-i "$bridge_name" -o "$bridge_name" -j ACCEPT)
  if ! sudo -n iptables-legacy -C FORWARD "${rule[@]}" 2>/dev/null; then
    sudo -n iptables-legacy -I FORWARD 1 "${rule[@]}"
  fi
done < <(docker network ls --no-trunc --filter driver=bridge --format '{{.ID}} {{.Name}}')
